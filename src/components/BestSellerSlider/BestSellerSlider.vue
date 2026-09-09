<script setup>
import ProductCard from '../ProductCard/ProductCard.vue'
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton.vue'
import { useCarousel } from '../../composables/useCarousel.js'

const SKELETON_COUNT = 6

defineProps({
  products: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false }
})

const { trackRef, canScrollPrev, canScrollNext, scrollNext, scrollPrev, onPointerDown, onPointerMove, onPointerUp } =
  useCarousel()
</script>

<template>
  <section class="section best-sellers" aria-labelledby="best-sellers-heading">
    <div class="container">
      <div class="best-sellers__header section-header">
        <div>
          <h2 id="best-sellers-heading" class="section-title">Top 10 Best-Selling Products</h2>
          <p class="section-subtitle">Most purchased products this week.</p>
          <span v-if="loading" class="sr-only" role="status" aria-live="polite">Loading best sellers…</span>
        </div>
        <div class="best-sellers__nav">
          <button
            type="button"
            class="best-sellers__arrow"
            :disabled="!canScrollPrev"
            aria-label="Previous products"
            @click="scrollPrev"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            class="best-sellers__arrow"
            :disabled="!canScrollNext"
            aria-label="Next products"
            @click="scrollNext"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="best-sellers__track"
        ref="trackRef"
        @mousedown="onPointerDown"
        @mousemove="onPointerMove"
        @mouseup="onPointerUp"
        @mouseleave="onPointerUp"
        @touchstart="onPointerDown"
        @touchmove="onPointerMove"
        @touchend="onPointerUp"
      >
        <template v-if="loading">
          <div
            v-for="n in SKELETON_COUNT"
            :key="`skeleton-${n}`"
            class="best-sellers__skeleton-item"
            aria-hidden="true"
          >
            <ProductCardSkeleton />
          </div>
        </template>
        <template v-else>
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            variant="slider"
            :minimal="true"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.best-sellers__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-2);
}

.best-sellers__nav {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.best-sellers__arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.best-sellers__arrow:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  transform: scale(1.05);
}

.best-sellers__arrow:disabled {
  background-color: var(--color-border);
  cursor: not-allowed;
}

.best-sellers__track {
  display: flex;
  gap: var(--space-3);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 4px 4px var(--space-2);
  cursor: grab;
  scrollbar-width: none;
}

.best-sellers__track:active {
  cursor: grabbing;
}

.best-sellers__track::-webkit-scrollbar {
  display: none;
}

.best-sellers__track > * {
  scroll-snap-align: start;
}

.best-sellers__skeleton-item {
  min-width: 280px;
  max-width: 280px;
}

@media (max-width: 768px) {
  .best-sellers__header {
    flex-wrap: wrap;
  }

  /* Show ~2.3 cards (2 full + a peek of the 3rd) to signal horizontal
     scrollability. Uses :deep() to reach ProductCard's own scoped
     .product-card--slider width rule without modifying ProductCard.vue.
     The extra .best-sellers__track ancestor in the selector gives this
     rule higher specificity than ProductCard's own, so it reliably wins. */
  .best-sellers__track :deep(.product-card--slider) {
    min-width: 38%;
    max-width: 38%;
  }

  .best-sellers__skeleton-item {
    min-width: 38%;
    max-width: 38%;
  }
}
</style>
