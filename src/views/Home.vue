<script setup>
import { ref, computed, onMounted } from 'vue'
import Navbar from '../components/Navbar/Navbar.vue'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.vue'
import CaseStudySection from '../components/CaseStudy/CaseStudySection.vue'
import BestSellerSlider from '../components/BestSellerSlider/BestSellerSlider.vue'
import ProductCard from '../components/ProductCard/ProductCard.vue'
import ProductCardSkeleton from '../components/ProductCard/ProductCardSkeleton.vue'
import StateMessage from '../components/StateMessage/StateMessage.vue'
import { fetchProducts, fetchBestSellers } from '../services/api.js'

const SKELETON_GRID_COUNT = 8

const searchQuery = ref('')
const activeFilters = ref({ gender: null, category: null })

const allProducts = ref([])
const isLoadingProducts = ref(true)
const productsError = ref(null)

const bestSellers = ref([])
const isLoadingBestSellers = ref(true)

const loadProducts = async () => {
  isLoadingProducts.value = true
  productsError.value = null
  try {
    allProducts.value = await fetchProducts()
  } catch (err) {
    productsError.value = err.message
  } finally {
    isLoadingProducts.value = false
  }
}

const loadBestSellers = async () => {
  isLoadingBestSellers.value = true
  try {
    bestSellers.value = await fetchBestSellers()
  } catch (err) {
    // Best Sellers is a secondary section on the homepage — if it fails to
    // load, we fail quietly (empty slider) rather than blocking the whole
    // page with a second error state; the main product grid's error state
    // below is the primary signal to the user that something went wrong.
    console.error(err)
    bestSellers.value = []
  } finally {
    isLoadingBestSellers.value = false
  }
}

onMounted(() => {
  loadProducts()
  loadBestSellers()
})

const onSearch = (query) => {
  searchQuery.value = query
}

const onFilterChange = (filters) => {
  activeFilters.value = filters
}

const filteredProducts = computed(() => {
  const query = searchQuery.value.toLowerCase()
  const { gender, category } = activeFilters.value

  return allProducts.value.filter((product) => {
    const matchesSearch =
      !query ||
      product.title.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)

    const matchesGender = !gender || product.gender === gender
    const matchesCategory = !category || product.category === category

    return matchesSearch && matchesGender && matchesCategory
  })
})
</script>

<template>
  <div class="home">
    <Navbar @search="onSearch" @filter-change="onFilterChange" />

    <main id="main-content">
      <HeroCarousel />

      <CaseStudySection />

      <BestSellerSlider :products="bestSellers" :loading="isLoadingBestSellers" />

      <section id="all-products" class="section all-products" aria-labelledby="all-products-heading">
        <div class="container">
          <div class="section-header">
            <h1 id="all-products-heading" class="section-title">Browse All Products</h1>
            <p v-if="!isLoadingProducts && !productsError" class="section-subtitle">
              {{ filteredProducts.length }} {{ filteredProducts.length === 1 ? 'item' : 'items' }} curated from eBay & Depop
            </p>
            <span v-if="isLoadingProducts" class="sr-only" role="status" aria-live="polite">Loading products…</span>
          </div>

          <div v-if="isLoadingProducts" class="all-products__grid" aria-hidden="true">
            <ProductCardSkeleton v-for="n in SKELETON_GRID_COUNT" :key="`skeleton-${n}`" />
          </div>

          <StateMessage
            v-else-if="productsError"
            variant="error"
            title="Unable to load products"
            :description="productsError"
          />

          <StateMessage
            v-else-if="!filteredProducts.length"
            variant="empty"
            title="No products found."
            description="Try adjusting your search or filters."
          />

          <div v-else class="all-products__grid">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" :minimal="true" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.all-products__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}

@media (max-width: 1024px) {
  .all-products__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .all-products__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
