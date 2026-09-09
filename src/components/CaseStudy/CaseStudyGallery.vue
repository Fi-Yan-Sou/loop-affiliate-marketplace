<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, required: true }
})

// Matches the breakpoint already used below for hiding arrows on mobile.
const MOBILE_BREAKPOINT = 768

const isMobile = ref(typeof window !== 'undefined' ? window.innerWidth <= MOBILE_BREAKPOINT : false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT
}

onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

// Number of images visible at once: 4 on desktop (existing slider behavior,
// unchanged), exactly 1 on mobile so a single image always fills the
// available width instead of shrinking to fit alongside others.
//
// Display mode depends on how many images this case study has relative to
// VISIBLE_COUNT:
// - images.length <= VISIBLE_COUNT: every image is shown at once in a
//   single static row (on desktop this is "4 or fewer"; on mobile,
//   VISIBLE_COUNT is 1, so this only applies to a single-image case study).
// - images.length > VISIBLE_COUNT: a bounded sliding-window carousel,
//   showing VISIBLE_COUNT images at a time (4 on desktop, 1 on mobile).
const VISIBLE_COUNT = computed(() => (isMobile.value ? 1 : 4))
const isSlider = computed(() => props.images.length > VISIBLE_COUNT.value)

const startIndex = ref(0)

// The last valid window start — sliding stops here rather than wrapping,
// so no image is ever duplicated or skipped.
const maxStartIndex = computed(() => Math.max(0, props.images.length - VISIBLE_COUNT.value))

// Reset position whenever the images prop changes (e.g. a different case
// study's images are passed in), the same defensive pattern used by the
// other galleries in this project (see ProductGallery.vue). Also reset when
// crossing the mobile/desktop breakpoint, since the previous startIndex may
// no longer be a valid window start once VISIBLE_COUNT changes.
watch([() => props.images, isMobile], () => {
  startIndex.value = 0
})

const canPrev = computed(() => startIndex.value > 0)
const canNext = computed(() => startIndex.value < maxStartIndex.value)

const next = () => {
  if (canNext.value) startIndex.value += 1
}

const prev = () => {
  if (canPrev.value) startIndex.value -= 1
}

// Each slide's rendered width already accounts for the var(--space-3) gaps
// between them (see .case-gallery__slide), so the per-step shift is exactly
// one slide-width plus one gap: (100% + gap) / VISIBLE_COUNT. This keeps the
// transform in sync with the CSS regardless of the frame's actual pixel
// width, or how many images are visible, at any breakpoint.
const trackStyle = computed(() => ({
  transform: `translateX(calc(${-startIndex.value} * (100% + var(--space-3)) / ${VISIBLE_COUNT.value}))`
}))

// Touch swipe support (mobile only — arrows are hidden there via CSS),
// following the same pattern used elsewhere in this project (see
// ProductGallery.vue). Movement is only treated as a swipe once it's
// clearly more horizontal than vertical, so normal vertical page
// scrolling is never hijacked.
const SWIPE_THRESHOLD = 40
let touchStartX = 0
let touchStartY = 0
let touchDeltaX = 0
let touchDeltaY = 0

const onTouchStart = (event) => {
  touchStartX = event.touches[0].clientX
  touchStartY = event.touches[0].clientY
  touchDeltaX = 0
  touchDeltaY = 0
}

const onTouchMove = (event) => {
  touchDeltaX = event.touches[0].clientX - touchStartX
  touchDeltaY = event.touches[0].clientY - touchStartY
}

const onTouchEnd = () => {
  if (Math.abs(touchDeltaX) > Math.abs(touchDeltaY)) {
    if (touchDeltaX <= -SWIPE_THRESHOLD) {
      next()
    } else if (touchDeltaX >= SWIPE_THRESHOLD) {
      prev()
    }
  }
  touchDeltaX = 0
  touchDeltaY = 0
}
</script>

<template>
  <div class="case-gallery" role="region" aria-label="Customer photo gallery">
    <div
      class="case-gallery__frame"
      :aria-roledescription="isSlider ? 'carousel' : 'gallery'"
      aria-live="polite"
      @touchstart="isSlider && onTouchStart($event)"
      @touchmove="isSlider && onTouchMove($event)"
      @touchend="isSlider && onTouchEnd($event)"
    >
      <!-- CASE A: 4 or fewer images — every image shown in one static row -->
      <div v-if="!isSlider" class="case-gallery__row">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="case-gallery__row-item"
        >
          <img
            :src="image"
            :alt="`Customer receiving and unboxing their order — photo ${index + 1} of ${images.length}`"
            loading="lazy"
          />
        </div>
      </div>

      <!-- CASE B: more than 4 images — sliding window carousel, 4 visible at a time -->
      <div v-else class="case-gallery__track" role="list" :style="trackStyle">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="case-gallery__slide"
          role="listitem"
        >
          <img
            :src="image"
            :alt="`Customer receiving and unboxing their order — photo ${index + 1} of ${images.length}`"
            loading="lazy"
          />
        </div>
      </div>

      <template v-if="isSlider">
        <button
          type="button"
          class="case-gallery__arrow case-gallery__arrow--prev"
          aria-label="Previous photos"
          :disabled="!canPrev"
          @click="prev"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          class="case-gallery__arrow case-gallery__arrow--next"
          aria-label="Next photos"
          :disabled="!canNext"
          @click="next"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </template>
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
  aspect-ratio: 4 / 4.5;
  border-radius: var(--radius-gallery);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

/* CASE A: static row — every image visible, equal width, one line */
.case-gallery__row {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  gap: var(--space-3);
}

.case-gallery__row-item {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
}

.case-gallery__row-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* CASE B: sliding window carousel — 4 slides visible, smooth transform transition */
.case-gallery__track {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  gap: var(--space-3);
  transition: transform 0.4s ease;
}

/* Width accounts for the 3 gaps between the 4 visible slides, so 4 slides +
   3 gaps sum to exactly 100% of the frame — never more, never fewer than
   4 images are shown at once. Keep this in sync with VISIBLE_COUNT above. */
.case-gallery__slide {
  flex: 0 0 calc((100% - 3 * var(--space-3)) / 4);
  max-width: calc((100% - 3 * var(--space-3)) / 4);
  height: 100%;
}

.case-gallery__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  z-index: 2;
  transition: transform var(--transition-fast), background-color var(--transition-fast), opacity var(--transition-fast);
}

.case-gallery__arrow:not(:disabled):hover {
  background-color: #fff;
  transform: translateY(-50%) scale(1.08);
}

.case-gallery__arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.case-gallery__arrow--prev {
  left: 12px;
}

.case-gallery__arrow--next {
  right: 12px;
}

@media (max-width: 768px) {
  .case-gallery__arrow {
    display: none;
  }

  /* VISIBLE_COUNT is 1 on mobile: each slide fills the full available
     width instead of shrinking to fit 4 side by side. */
  .case-gallery__slide {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

</style>