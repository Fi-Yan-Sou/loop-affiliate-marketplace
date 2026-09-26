/**
 * Minimal, dependency-free document head management for SEO Phase 1.
 *
 * The project has no head-management library (no vue-meta / @vueuse/head),
 * and Phase 1 scope explicitly avoids adding one. These helpers instead
 * find-or-create the relevant tag once and update it in place on every
 * call, so repeated navigation never produces duplicate <meta>/<link> tags.
 */

// Matches the production domain already used in public/sitemap.xml.
export const SITE_URL = 'https://www.abcdoutfit.com'

// The exact default description currently hardcoded in index.html — reused
// here so Home/NotFound (and a not-found product id) can restore it after a
// product page has overwritten the shared <meta name="description"> tag.
export const DEFAULT_DESCRIPTION =
  'Discover the best clothing deals from eBay and Depop, curated in one premium marketplace. Compare prices, browse trending styles, and shop directly from trusted sellers.'

/**
 * Sets document.title directly — no tag lookup needed.
 */
export function setTitle(title) {
  document.title = title
}

/**
 * Finds the existing <meta name="description"> tag (present in index.html)
 * and updates its content. Creates the tag only if it's somehow missing.
 */
export function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/**
 * Finds or creates the single <link rel="canonical"> tag and points it at
 * `url`. Passing a falsy url removes the tag entirely (used for the
 * NotFound route, which should not be indexed under a canonical URL).
 */
export function setCanonicalUrl(url) {
  let tag = document.querySelector('link[rel="canonical"]')

  if (!url) {
    if (tag) tag.remove()
    return
  }

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', url)
}

/**
 * Truncates text to a reasonable SEO meta-description length without
 * cutting a word in half. Never invents text — only shortens what's given.
 */
export function truncateDescription(text, maxLength = 160) {
  if (!text) return ''
  if (text.length <= maxLength) return text

  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  const safeCut = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated

  return `${safeCut}…`
}

/* -------------------------------------------------------------------------
 * SEO Phase 2 — Product structured data (JSON-LD)
 * ---------------------------------------------------------------------- */

// Stable id so the tag can always be found-and-replaced instead of appended.
const PRODUCT_JSONLD_ID = 'product-structured-data'

/**
 * This project's `condition` field only ever contains "New" or
 * "New with Tags" (confirmed by inspecting src/data/products.js). Both
 * describe brand-new, unworn merchandise, so both map to Schema.org's
 * NewCondition — there is no separate schema.org enum value for "with
 * tags". Any other/missing condition is intentionally left unmapped
 * (returns null) rather than guessed, per Phase 2 scope.
 */
function mapItemCondition(condition) {
  if (!condition) return null
  const normalized = String(condition).trim().toLowerCase()
  if (normalized === 'new' || normalized === 'new with tags') {
    return 'https://schema.org/NewCondition'
  }
  return null
}

/**
 * This project's `stock` field is a plain boolean (confirmed: every one of
 * the 58 products currently has `stock: true`, but the field is a real
 * boolean, not always-true by type — so both directions are mapped
 * correctly rather than only handling the case seen today).
 */
function mapAvailability(stock) {
  return stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
}

/**
 * Vite-resolved local image imports become root-relative paths (e.g.
 * "/assets/xyz123.jpeg") in production, not fully-qualified URLs. Schema.org
 * Product images should be absolute, so this only prefixes SITE_URL when
 * the path isn't already absolute — it never invents or alters the path
 * itself.
 */
function toAbsoluteImageUrl(path) {
  if (!path) return null
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

/**
 * Builds and injects a single Product JSON-LD <script> tag from the given
 * product object, replacing any previously injected one in place (never
 * appending), so navigating product → product never leaves a stale or
 * duplicate block behind.
 *
 * Deliberately uses the product's stable top-level `images` array (present
 * and non-empty on all 58 products) rather than the currently selected
 * color's images, so the structured data doesn't change based on a
 * temporary UI selection.
 *
 * Deliberately does NOT include aggregateRating — see the Phase 2 report
 * for why this project's rating/reviewCount data was judged to be
 * decorative placeholder data rather than genuine aggregated reviews.
 */
export function setProductStructuredData(product) {
  if (!product) return

  const images = (product.images || []).map(toAbsoluteImageUrl).filter(Boolean)
  const itemCondition = mapItemCondition(product.condition)

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    ...(images.length ? { image: images } : {}),
    ...(product.brand ? { brand: { '@type': 'Brand', name: product.brand } } : {}),
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/product/${product.id}`,
      priceCurrency: 'USD',
      price: String(product.currentPrice),
      availability: mapAvailability(product.stock),
      ...(itemCondition ? { itemCondition } : {}),
    },
  }

  let tag = document.getElementById(PRODUCT_JSONLD_ID)
  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.id = PRODUCT_JSONLD_ID
    document.head.appendChild(tag)
  }
  tag.textContent = JSON.stringify(data)
}

/**
 * Removes the Product JSON-LD block entirely. Used whenever there is no
 * valid product to describe: navigating to Home, NotFound, an invalid
 * /product/:id, or a genuine product-load failure.
 */
export function removeProductStructuredData() {
  const tag = document.getElementById(PRODUCT_JSONLD_ID)
  if (tag) tag.remove()
}