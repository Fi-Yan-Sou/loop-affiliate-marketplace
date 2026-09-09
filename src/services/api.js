// This module is the single integration point for swapping local dummy
// data (src/data/products.js) for live data from the eBay Browse API
// and Depop listings. Every function currently wraps the local data
// module so components never need to change when a real API is wired in.
//
// All functions are async and can reject — every call site (Home.vue,
// ProductDetails.vue) is expected to handle both the loading gap and a
// potential rejection, so that wiring in a real, slower, fallible API
// later requires no changes to component logic, only to the bodies
// of the functions below.

import {
  products as localProducts,
  getProductById as getLocalProductById,
  getBestSellers as getLocalBestSellers,
  getRelatedProducts as getLocalRelatedProducts
} from '../data/products.js'

// Swap this flag (or the implementations below) once real API credentials
// and endpoints are available.
const USE_LIVE_API = false

/**
 * Wraps a local-data lookup in a real async boundary (so callers always
 * go through a genuine microtask/promise, matching how a real fetch()
 * would behave) and normalizes any thrown error into a rejected promise
 * with a user-safe message. Technical details are logged for developers
 * but never surfaced to the UI layer.
 */
async function resolveLocal(getValue, errorMessage) {
  try {
    const value = await Promise.resolve().then(getValue)
    return value
  } catch (err) {
    console.error(errorMessage, err)
    throw new Error(errorMessage)
  }
}

export async function fetchProducts() {
  if (!USE_LIVE_API) {
    return resolveLocal(() => localProducts, 'Unable to load products right now.')
  }
  // TODO: replace with eBay Browse API + Depop fetch calls, then normalize
  // the response into the same product shape used in src/data/products.js.
  throw new Error('Unable to load products right now.')
}

export async function fetchProductById(id) {
  if (!USE_LIVE_API) {
    return resolveLocal(() => getLocalProductById(id), 'Unable to load this product right now.')
  }
  throw new Error('Unable to load this product right now.')
}

export async function fetchBestSellers() {
  if (!USE_LIVE_API) {
    return resolveLocal(() => getLocalBestSellers(), 'Unable to load best sellers right now.')
  }
  throw new Error('Unable to load best sellers right now.')
}

export async function fetchRelatedProducts(product) {
  if (!USE_LIVE_API) {
    return resolveLocal(() => getLocalRelatedProducts(product), 'Unable to load related products right now.')
  }
  throw new Error('Unable to load related products right now.')
}
