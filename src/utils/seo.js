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