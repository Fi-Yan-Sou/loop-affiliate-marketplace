import { createRouter, createWebHistory } from 'vue-router'
import { setMetaDescription, setCanonicalUrl, DEFAULT_DESCRIPTION, SITE_URL } from '../utils/seo.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Loop — Curated Clothing from eBay & Depop'
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
    setMetaDescription(DEFAULT_DESCRIPTION)
    setCanonicalUrl(`${SITE_URL}/`)
  } else if (to.name === 'NotFound') {
    setMetaDescription(DEFAULT_DESCRIPTION)
    setCanonicalUrl(null)
  }

  next()
})

export default router