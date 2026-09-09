<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  alt: { type: String, default: 'Product image' }
})

const activeIndex = ref(0)

// The images prop changes when the selected color changes (or any other
// caller swaps the gallery's images) — always restart at the first image
// rather than carrying over an index that may be stale or out of bounds.
watch(
  () => props.images,
  () => {
    activeIndex.value = 0
  }
)

const activeImage = computed(() => props.images[activeIndex.value])

const selectImage = (index) => {
  activeIndex.value = index
}

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}

// Zoom-on-hover effect
const zoomStyle = ref({})

const onMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  zoomStyle.value = {
    transformOrigin: `${x}% ${y}%`,
    transform: 'scale(1.5)'
  }
}

const resetZoom = () => {
  zoomStyle.value = { transform: 'scale(1)' }
}

// Touch swipe support (mobile only — arrows are hidden there via CSS).
const SWIPE_THRESHOLD = 40
let touchStartX = 0
let touchDeltaX = 0

const onTouchStart = (event) => {
  touchStartX = event.touches[0].clientX
  touchDeltaX = 0
}

const onTouchMove = (event) => {
  touchDeltaX = event.touches[0].clientX - touchStartX
}

const onTouchEnd = () => {
  if (touchDeltaX <= -SWIPE_THRESHOLD) {
    next()
  } else if (touchDeltaX >= SWIPE_THRESHOLD) {
    prev()
  }
  touchDeltaX = 0
}
</script>

<template>
  <div class="gallery">
    <div class="gallery__main">
      <button type="button" class="gallery__nav gallery__nav--prev" aria-label="Previous image" @click="prev">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <div
        class="gallery__image-frame"
        role="group"
        aria-roledescription="image gallery"
        aria-label="Product image gallery"
        aria-live="polite"
        @mousemove="onMouseMove"
        @mouseleave="resetZoom"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <Transition name="gallery-fade" mode="out-in">
          <img
            :key="activeIndex"
            :src="activeImage"
            :alt="`${alt} — view ${activeIndex + 1} of ${images.length}`"
            loading="lazy"
            class="gallery__image"
            :style="zoomStyle"
          />
        </Transition>
      </div>

      <button type="button" class="gallery__nav gallery__nav--next" aria-label="Next image" @click="next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <div class="gallery__thumbs" role="tablist" aria-label="Product image thumbnails">
      <button
        v-for="(image, index) in images"
        :key="index"
        type="button"
        class="gallery__thumb"
        :class="{ 'gallery__thumb--active': index === activeIndex }"
        role="tab"
        :aria-selected="index === activeIndex"
        @click="selectImage(index)"
      >
        <img :src="image" :alt="`${alt} thumbnail ${index + 1}`" loading="lazy" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.gallery__main {
  position: relative;
  display: flex;
  align-items: center;
}

.gallery__image-frame {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-gallery);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  background-color: var(--color-card);
  cursor: zoom-in;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.25s ease;
}

.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 0.25s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
}

.gallery__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: transform var(--transition-fast), background-color var(--transition-fast);
}

.gallery__nav:hover {
  background-color: #fff;
  transform: translateY(-50%) scale(1.08);
}

.gallery__nav--prev {
  left: 12px;
}

.gallery__nav--next {
  right: 12px;
}

.gallery__thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
}

.gallery__thumb {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-image);
  overflow: hidden;
  border: 2px solid transparent;
  background-color: var(--color-card);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.gallery__thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery__thumb:hover {
  transform: translateY(-2px);
}

.gallery__thumb--active {
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .gallery__nav {
    display: none;
  }
}
</style>
