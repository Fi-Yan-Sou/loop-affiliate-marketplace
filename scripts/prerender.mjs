#!/usr/bin/env node
/**
 * Build-time prerendering for Ahrefs: "Main content requires JavaScript
 * rendering" (59 pages).
 *
 * WHAT THIS DOES
 * --------------
 * Runs AFTER `vite build` has produced dist/. It:
 *   1. Starts a small, local, ephemeral static file server for dist/, with
 *      an SPA fallback that mirrors vercel.json's existing rewrite
 *      (`/(.*) -> /index.html`), so the app boots and routes exactly the
 *      same way it does when deployed.
 *   2. Launches headless Chrome via Puppeteer and visits every real route
 *      (`/` and `/product/<id>` for every id that actually exists in
 *      src/data/products.js).
 *   3. Waits for the existing Vue app to actually finish rendering real
 *      content (a real selector, not a fixed delay) before capturing
 *      `document.documentElement.outerHTML`.
 *   4. Writes each captured HTML to a static file dist/index.html or
 *      dist/product/<id>/index.html.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO
 * -----------------------------------
 * - It does not import, execute, or modify src/data/products.js. Product
 *   ids are derived by reading that file as plain TEXT and scanning for
 *   `id: <number>` occurrences. A real `import` of products.js from plain
 *   Node (outside Vite) would fail: the file imports ~234 local image
 *   assets, which only Vite's build pipeline knows how to resolve. Adding
 *   a Vite-aware loader just so this script could `import` it would be
 *   exactly the kind of new data-loading architecture this task says to
 *   avoid, so a plain-text scan is the deliberately simpler choice.
 * - It does not recreate <title>, meta description, canonical, Open
 *   Graph, Twitter, or JSON-LD tags. Those come entirely from the app's
 *   own existing code (src/utils/seo.js, untouched) running for real in a
 *   real browser — this script only captures whatever that code already
 *   produced in the live DOM.
 * - It does not touch any application source file.
 */

import { readFileSync, existsSync, mkdirSync, writeFileSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = join(__dirname, '..')
const DIST_DIR = join(ROOT_DIR, 'dist')
const PRODUCTS_SOURCE = join(ROOT_DIR, 'src/data/products.js')

// Ephemeral, localhost-only — never deployed, never touches the real
// vercel.json or production server. Just a crawl target for Puppeteer.
const PORT = 4173

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

function fail(message) {
  console.error(`\n[prerender] ERROR: ${message}\n`)
  process.exit(1)
}

/**
 * Derives the real product id list by reading products.js as plain text —
 * never imported, never executed, never modified. See file header for why
 * a direct import isn't a clean option here. Matches the project's actual
 * schema: every product object has exactly one top-level `id: <number>`
 * field (confirmed: 58 matches for 58 products, nothing else in the file
 * uses an `id:` key).
 */
function getProductIds() {
  if (!existsSync(PRODUCTS_SOURCE)) {
    fail(`Could not find ${PRODUCTS_SOURCE} — cannot derive product routes.`)
  }

  const source = readFileSync(PRODUCTS_SOURCE, 'utf-8').replace(/\r\n/g, '\n')
  const matches = [...source.matchAll(/\bid:\s*(\d+)/g)]
  const ids = [...new Set(matches.map((m) => Number(m[1])))].sort((a, b) => a - b)

  if (ids.length === 0) {
    fail(
      'Scanned products.js but found zero product ids — refusing to guess ' +
        'routes. The file format may have changed; check the regex above ' +
        'against the current file before re-running.'
    )
  }

  return ids
}

function getContentType(filePath) {
  return MIME_TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream'
}

/**
 * Minimal static file server with SPA fallback, mirroring vercel.json's
 * existing `{ "source": "/(.*)", "destination": "/index.html" }` rewrite.
 * Used ONLY for this local, ephemeral prerender crawl — it is never
 * deployed and has no relationship to the production server beyond
 * imitating its routing behavior so the app boots identically.
 *
 * Serves whatever currently exists on disk under dist/ at request time.
 * This script never writes output files until every route has been
 * captured (see main()), so every request during the crawl is served the
 * original, untouched `vite build` output — order of visiting routes
 * can't affect what any other route sees.
 */
function startServer() {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    const safePath = urlPath.replace(/\.\.(\/|\\)/g, '') // basic traversal guard
    const filePath = join(DIST_DIR, safePath)

    let stat = null
    try {
      stat = statSync(filePath)
    } catch {
      stat = null
    }

    if (stat && stat.isFile()) {
      res.writeHead(200, { 'Content-Type': getContentType(filePath) })
      res.end(readFileSync(filePath))
      return
    }

    // SPA fallback.
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(readFileSync(join(DIST_DIR, 'index.html')))
  })

  return new Promise((resolve, reject) => {
    server.on('error', reject)
    server.listen(PORT, '127.0.0.1', () => resolve(server))
  })
}

/**
 * Visits one route in a fresh page, waits for the app's real rendered
 * content (never a fixed delay as the primary mechanism), and returns the
 * fully rendered HTML.
 */
async function capturePage(browser, routePath, waitForSelector) {
  const page = await browser.newPage()
  try {
    const url = `http://127.0.0.1:${PORT}${routePath}`
    await page.goto(url, { waitUntil: 'networkidle0' })

    // Primary synchronization: wait for a selector that only exists once
    // the app has actually fetched and rendered real content (not the
    // loading skeleton, not the app shell).
    await page.waitForSelector(waitForSelector, { timeout: 15000 })

    // Small fixed wait used only as a trailing safety margin AFTER the
    // real selector is already present — e.g. to let a same-tick
    // microtask (this app's data fetches resolve via a genuine
    // Promise.resolve().then(...) boundary, see src/services/api.js) or a
    // paint settle. This is not the thing we're waiting on; it's a margin
    // on top of it.
    await new Promise((resolve) => setTimeout(resolve, 150))

    return await page.evaluate(() => document.documentElement.outerHTML)
  } finally {
    await page.close()
  }
}

/**
 * Browser launch configuration — the only part of this script that differs
 * between local and Vercel builds.
 *
 * LOCAL (process.env.VERCEL not set): exactly the options this script has
 * always used, launching Puppeteer's own bundled Chrome.
 *
 * VERCEL (process.env.VERCEL is set on every Vercel build): Puppeteer's
 * downloaded Chrome cannot start in Vercel's Amazon Linux 2023 build image
 * because system libraries it needs (e.g. libnspr4) are not installed. The
 * @sparticuz/chromium package ships a Chromium build plus its own copy of
 * those libraries, so it is used instead. It is imported dynamically so
 * local builds never load it. If the import or launch fails here, main()'s
 * existing error handling still exits non-zero — failure stays fatal.
 *
 * The 'shell' headless mode and the awaited puppeteer.defaultArgs(...) call
 * follow @sparticuz/chromium's documented Puppeteer usage.
 */
async function getLaunchOptions() {
  // Standard, widely-recommended flags for running Chrome in CI/
  // containerized Linux build environments (e.g. Vercel's build step),
  // where the default sandbox often cannot be used.
  const baseArgs = ['--no-sandbox', '--disable-setuid-sandbox']

  if (!process.env.VERCEL) {
    return { headless: true, args: baseArgs }
  }

  const { default: chromium } = await import('@sparticuz/chromium')
  return {
    headless: 'shell',
    executablePath: await chromium.executablePath(),
    args: await puppeteer.defaultArgs({
      args: [...chromium.args, ...baseArgs],
      headless: 'shell',
    }),
  }
}

async function main() {
  if (!existsSync(join(DIST_DIR, 'index.html'))) {
    fail('dist/index.html not found. Run `vite build` before this script — this is a post-build step, not a replacement for it.')
  }

  const productIds = getProductIds()
  console.log(`[prerender] Derived ${productIds.length} product id(s) from products.js (ids ${productIds[0]}-${productIds[productIds.length - 1]}).`)

  const routes = [
    { routePath: '/', outputFile: join(DIST_DIR, 'index.html'), waitForSelector: '.product-card' },
    ...productIds.map((id) => ({
      routePath: `/product/${id}`,
      outputFile: join(DIST_DIR, 'product', String(id), 'index.html'),
      waitForSelector: '.product-details__grid',
    })),
  ]

  console.log(`[prerender] Starting local server on http://127.0.0.1:${PORT} ...`)
  const server = await startServer()

  console.log('[prerender] Launching headless Chrome ...')
  const browser = await puppeteer.launch(await getLaunchOptions())

  const captured = []
  const failures = []

  for (const route of routes) {
    process.stdout.write(`[prerender] Rendering ${route.routePath} ... `)
    try {
      const html = await capturePage(browser, route.routePath, route.waitForSelector)
      captured.push({ ...route, html })
      console.log('ok')
    } catch (err) {
      failures.push({ routePath: route.routePath, error: err.message })
      console.log('FAILED')
    }
  }

  await browser.close()
  await new Promise((resolve) => server.close(resolve))

  // Only now, after every route has been visited against the pristine
  // build output, do we write anything to disk.
  for (const { outputFile, html } of captured) {
    mkdirSync(dirname(outputFile), { recursive: true })
    writeFileSync(outputFile, html, 'utf-8')
  }

  console.log(`\n[prerender] Wrote ${captured.length}/${routes.length} static HTML file(s) into dist/.`)

  if (failures.length > 0) {
    console.error(`\n[prerender] ${failures.length} route(s) FAILED to render and were NOT written:`)
    for (const f of failures) {
      console.error(`  - ${f.routePath}: ${f.error}`)
    }
    console.error('\n[prerender] Exiting with a non-zero status — do not treat this build as fully prerendered.')
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error('\n[prerender] Unexpected failure:', err)
  process.exit(1)
})
