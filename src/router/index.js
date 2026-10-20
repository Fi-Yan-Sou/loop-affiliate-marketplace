import { createRouter, createWebHistory } from 'vue-router'
import {
  setMetaDescription,
  setCanonicalUrl,
  removeProductStructuredData,
  setOpenGraph,
  setTwitterCard,
  removeSocialMeta,
  DEFAULT_DESCRIPTION,
  SITE_URL,
} from '../utils/seo.js'

const HOME_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

const HOME_DESCRIPTION =
  'Discover curated fashion finds from eBay and Depop at ABCD Outfit. Explore clothing styles and compare options to find your next favorite look.'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'ABCD Outfit | Curated Fashion from eBay & Depop'
    }
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: () => import('../views/ProductDetails.vue'),
    props: true,
    meta: {
      title: 'Product Details — Loop'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found — Loop'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Loop — Curated Clothing from eBay & Depop'

  // Home and NotFound have static, route-known SEO tags, so they're handled
  // here. ProductDetails' title/description/canonical depend on product
  // data the router doesn't have — those are set in ProductDetails.vue once
  // the product loads, and this guard intentionally leaves them alone so it
  // never overwrites/races the view's own update.
  if (to.name === 'Home') {
    setMetaDescription(HOME_DESCRIPTION)
    setCanonicalUrl(`${SITE_URL}/`)
    removeProductStructuredData()
    // Use the permanent project-owned image for homepage social previews.
    // Product pages continue to set their own social images in ProductDetails.vue.
    setOpenGraph({
      title: to.meta.title,
      description: HOME_DESCRIPTION,
      image: HOME_OG_IMAGE,
      url: `${SITE_URL}/`,
      type: 'website',
    })
    setTwitterCard({
      title: to.meta.title,
      description: HOME_DESCRIPTION,
      image: HOME_OG_IMAGE,
    })
  } else if (to.name === 'NotFound') {
    setMetaDescription(DEFAULT_DESCRIPTION)
    setCanonicalUrl(null)
    removeProductStructuredData()
    removeSocialMeta()
  }

  next()
})

export default router