<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  product: { type: Object, required: true }, // colors[] entries may optionally include their own images[]
  variant: { type: String, default: 'grid' }, // 'grid' | 'slider'
  minimal: { type: Boolean, default: false } // hides favorite, rating, and quick view
})

const router = useRouter()
const isFavorite = ref(false)

const toggleFavorite = (event) => {
  event.stopPropagation()
  isFavorite.value = !isFavorite.value
}

const goToDetails = () => {
  router.push(`/product/${props.product.id}`)
}

const stars = computed(() => {
  const rounded = Math.round(props.product.rating)
  return Array.from({ length: 5 }, (_, i) => i < rounded)
})

// Color carousel: when a product has colors AND every color provides its own
// images, the card cycles through only the first image of each color
// (red-01 → black-01 → navy-01 → ...), never the other images within a color.
// Products without colors, or whose colors don't yet carry real per-color
// images, fall back to the single static product.images[0] exactly as before.
const colorCarouselImages = computed(() => {
  const colors = props.product.colors
  if (!colors || !colors.length) return null
  const firstImages = colors.map((c) => c.images?.[0]).filter(Boolean)
  if (firstImages.length !== colors.length) return null
  return firstImages
})

const activeImageIndex = ref(0)
let carouselTimer = null

const displayedImage = computed(() =>
  colorCarouselImages.value
    ? colorCarouselImages.value[activeImageIndex.value]
    : props.product.images[0]
)

const startCarousel = () => {
  stopCarousel()
  if (!colorCarouselImages.value || colorCarouselImages.value.length < 2) return
  carouselTimer = setInterval(() => {
    activeImageIndex.value = (activeImageIndex.value + 1) % colorCarouselImages.value.length
  }, 2200)
}

const stopCarousel = () => {
  if (carouselTimer) {
    clearInterval(carouselTimer)
    carouselTimer = null
  }
}

onMounted(startCarousel)
onBeforeUnmount(stopCarousel)
watch(colorCarouselImages, () => {
  activeImageIndex.value = 0
  startCarousel()
})
</script>

<template>
  <article class="product-card" :class="`product-card--${variant}`">
    <div class="product-card__image-wrap" @click="goToDetails">
      <img
        :src="displayedImage"
        :alt="`${product.brand} ${product.title}`"
        loading="lazy"
        class="product-card__image"
      />

      <button
        v-if="!minimal"
        type="button"
        class="product-card__favorite"
        :class="{ 'product-card__favorite--active': isFavorite }"
        :aria-pressed="isFavorite"
        :aria-label="`${isFavorite ? 'Remove' : 'Add'} ${product.title} ${isFavorite ? 'from' : 'to'} favorites`"
        @click="toggleFavorite"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" :fill="isFavorite ? '#E53238' : 'none'" aria-hidden="true">
          <path
            d="M12 21s-7.5-4.7-10-9.2C.5 8.3 2.3 4.5 6 4c2.1-.3 3.9.8 6 3 2.1-2.2 3.9-3.3 6-3 3.7.5 5.5 4.3 4 7.8-2.5 4.5-10 9.2-10 9.2z"
            :stroke="isFavorite ? '#E53238' : '#6B7280'"
            stroke-width="1.8"
            stroke-linejoin="round"
          />
        </svg>
      </button>

    </div>

    <div class="product-card__body">
      <span class="product-card__brand">{{ product.brand }}</span>
      <h3 class="product-card__title" @click="goToDetails">{{ product.title }}</h3>

      <div v-if="!minimal" class="product-card__rating" :aria-label="`Rated ${product.rating} out of 5`">
        <svg
          v-for="(filled, i) in stars"
          :key="i"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          :fill="filled ? '#F59E0B' : 'none'"
          aria-hidden="true"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
            :stroke="filled ? '#F59E0B' : '#D1D5DB'"
            stroke-width="1.4"
            stroke-linejoin="round"
          />
        </svg>
        <span class="product-card__review-count">({{ product.reviewCount }})</span>
      </div>

      <div class="product-card__price-row">
        <span class="product-card__price">${{ product.currentPrice.toFixed(2) }}</span>
        <span v-if="product.oldPrice" class="product-card__old-price">${{ product.oldPrice.toFixed(2) }}</span>
      </div>

      <div class="product-card__actions">
        <button
          v-if="!minimal"
          type="button"
          class="product-card__quick-view btn btn-outline"
          :aria-label="`Quick view ${product.title}`"
          @click="goToDetails"
        >
          Quick View
        </button>
        <button
          type="button"
          class="product-card__details btn btn-primary"
          :aria-label="`View details for ${product.title}`"
          @click="goToDetails"
        >
          View Details
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background-color: var(--color-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
}

.product-card__image-wrap {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: var(--color-card);
  padding: var(--space-2);
  box-sizing: border-box;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--radius-image) var(--radius-image) 0 0;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__image {
  transform: scale(1.06);
}

.product-card__favorite {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 50%;
  backdrop-filter: blur(4px);
  transition: transform var(--transition-fast);
}

.product-card__favorite:hover {
  transform: scale(1.1);
}

.product-card__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 12px;
  background-color: var(--color-primary);
  color: #fff;
  font-size: 0.7rem;
  font-weight: var(--fw-semibold);
  border-radius: var(--radius-pill);
}

.product-card__discount {
  position: absolute;
  bottom: 12px;
  left: 12px;
  padding: 5px 12px;
  background-color: var(--color-secondary);
  color: #fff;
  font-size: 0.7rem;
  font-weight: var(--fw-semibold);
  border-radius: var(--radius-pill);
}

.product-card__body {
  padding: var(--space-2) var(--space-2) var(--space-3);
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.product-card__brand {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: var(--fw-medium);
}

@media (max-width: 768px) {
  .product-card__brand {
    font-size: 0.6875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
}

.product-card__title {
  font-size: var(--fs-card-title);
  font-weight: var(--fw-semibold);
  line-height: 1.35;
  min-height: 2.7em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card__rating {
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 4px 0;
}

.product-card__review-count {
  margin-left: 4px;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.product-card__price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: var(--space-2);
}

.product-card__price {
  font-size: 1.125rem;
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);
}

.product-card__old-price {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  text-decoration: line-through;
}

.product-card__actions {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.product-card__actions .btn {
  flex: 1;
  padding: 10px 12px;
  font-size: 0.8125rem;
}

.product-card--slider {
  min-width: 280px;
  max-width: 280px;
}
</style>
