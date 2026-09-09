/**
 * Builds an affiliate URL with the selected product options appended
 * as query parameters. This keeps URL-building logic in one place so
 * it can later be swapped for real eBay Browse API / Depop link logic.
 */
export function buildAffiliateUrl(baseUrl, options = {}) {
  if (!baseUrl) return '#'

  const params = new URLSearchParams()

  Object.entries(options).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      params.append(key, value)
    }
  })

  const query = params.toString()
  const separator = baseUrl.includes('?') ? '&' : '?'

  return query ? `${baseUrl}${separator}${query}` : baseUrl
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`
}
