<script setup>
import ProductCard from '../ProductCard/ProductCard.vue'
import { useCarousel } from '../../composables/useCarousel.js'

defineProps({
  products: { type: Array, required: true }
})

const { trackRef, scrollNext, scrollPrev, onPointerDown, onPointerMove, onPointerUp } = useCarousel()
</script>

<template>
  <section class="related-products" aria-labelledby="related-products-heading">
    <div class="related-products__header">
      <h2 id="related-products-heading" class="section-title">Related Products</h2>
      <div class="related-products__nav">
        <button type="button" class="related-products__arrow" aria-label="Previous related products" @click="scrollPrev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" class="related-products__arrow" aria-label="Next related products" @click="scrollNext">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="related-products__track"
      ref="trackRef"
      @mousedown="onPointerDown"
      @mousemove="onPointerMove"
      @mouseup="onPointerUp"
      @mouseleave="onPointerUp"
      @touchstart="onPointerDown"
      @touchmove="onPointerMove"
      @touchend="onPointerUp"
    >
      <ProductCard v-for="product in products" :key="product.id" :product="product" variant="slider" :minimal="true" />
    </div>
  </section>
</template>

<style scoped>
.related-products {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.related-products__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}

.related-products__nav {
  display: flex;
  gap: 10px;
}

.related-products__arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.related-products__arrow:hover {
  background-color: var(--color-primary-dark);
  transform: scale(1.05);
}

.related-products__track {
  display: flex;
  gap: var(--space-3);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 4px 4px var(--space-2);
  cursor: grab;
  scrollbar-width: none;
}

.related-products__track:active {
  cursor: grabbing;
}

.related-products__track::-webkit-scrollbar {
  display: none;
}

.related-products__track > * {
  scroll-snap-align: start;
}

@media (max-width: 768px) {
  /* Show ~2.3 cards (2 full + a peek of the 3rd) to signal horizontal
     scrollability. Uses :deep() to reach ProductCard's own scoped
     .product-card--slider width rule without modifying ProductCard.vue.
     The extra .related-products__track ancestor in the selector gives
     this rule higher specificity than ProductCard's own, so it reliably
     wins regardless of stylesheet order. */
  .related-products__track :deep(.product-card--slider) {
    min-width: 38%;
    max-width: 38%;
  }
}
</style>
