<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: { type: Array, required: true }
})

const activeIndex = ref(0)

const goTo = (index) => {
  activeIndex.value = (index + props.images.length) % props.images.length
}

const next = () => goTo(activeIndex.value + 1)
const prev = () => goTo(activeIndex.value - 1)

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
  <div class="case-gallery" role="region" aria-roledescription="gallery" aria-label="Customer photo gallery">
    <div
      class="case-gallery__frame"
      aria-live="polite"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <Transition name="case-gallery-fade" mode="out-in">
        <img
          :key="activeIndex"
          :src="images[activeIndex]"
          :alt="`Customer receiving and unboxing their order — photo ${activeIndex + 1} of ${images.length}`"
          loading="lazy"
          class="case-gallery__image"
        />
      </Transition>

      <button type="button" class="case-gallery__arrow case-gallery__arrow--prev" aria-label="Previous photo" @click="prev">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button type="button" class="case-gallery__arrow case-gallery__arrow--next" aria-label="Next photo" @click="next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <div class="case-gallery__dots" role="tablist" aria-label="Gallery navigation">
      <button
        v-for="(image, index) in images"
        :key="index"
        type="button"
        class="case-gallery__dot"
        :class="{ 'case-gallery__dot--active': index === activeIndex }"
        role="tab"
        :aria-selected="index === activeIndex"
        :aria-label="`Go to photo ${index + 1}`"
        @click="goTo(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.case-gallery {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.case-gallery__frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-gallery);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.case-gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-gallery-fade-enter-active,
.case-gallery-fade-leave-active {
  transition: opacity 0.4s ease;
}

.case-gallery-fade-enter-from,
.case-gallery-fade-leave-to {
  opacity: 0;
}

.case-gallery__arrow {
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
  transition: transform var(--transition-fast), background-color var(--transition-fast);
}

.case-gallery__arrow:hover {
  background-color: #fff;
  transform: translateY(-50%) scale(1.08);
}

.case-gallery__arrow--prev {
  left: 12px;
}

.case-gallery__arrow--next {
  right: 12px;
}

.case-gallery__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.case-gallery__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-border);
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.case-gallery__dot--active {
  background-color: var(--color-primary);
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .case-gallery__arrow {
    display: none;
  }
}
</style>
