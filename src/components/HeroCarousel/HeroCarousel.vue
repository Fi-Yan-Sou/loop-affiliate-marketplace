<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { heroSlides } from '../../data/heroSlides.js'

const activeIndex = ref(0)
let autoplayTimer = null
const AUTOPLAY_DELAY = 5000

const goTo = (index) => {
  activeIndex.value = (index + heroSlides.length) % heroSlides.length
}

const next = () => goTo(activeIndex.value + 1)
const prev = () => goTo(activeIndex.value - 1)

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(next, AUTOPLAY_DELAY)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const restartAutoplay = () => {
  startAutoplay()
}

const onArrowClick = (fn) => {
  fn()
  restartAutoplay()
}

const onDotClick = (index) => {
  goTo(index)
  restartAutoplay()
}

const scrollToProducts = () => {
  const target = document.getElementById('all-products')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Touch swipe support (mobile only — arrows are hidden there via CSS).
// Reuses the same next()/prev()/restartAutoplay() the arrow buttons call,
// so swiping behaves identically to an arrow click.
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
    onArrowClick(next)
  } else if (touchDeltaX >= SWIPE_THRESHOLD) {
    onArrowClick(prev)
  }
  touchDeltaX = 0
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)
</script>

<template>
  <section
    class="hero"
    aria-label="Featured collections"
    role="region"
    aria-roledescription="carousel"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div class="container">
      <div
        class="hero__frame"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <Transition name="hero-fade" mode="out-in">
          <div
            :key="heroSlides[activeIndex].id"
            class="hero__slide"
            role="group"
            aria-roledescription="slide"
            :aria-label="`Slide ${activeIndex + 1} of ${heroSlides.length}`"
          >
            <img
              :src="heroSlides[activeIndex].image"
              :alt="`${heroSlides[activeIndex].eyebrow} — ${heroSlides[activeIndex].title}`"
              loading="lazy"
              class="hero__image"
            />
            <div class="hero__overlay"></div>
            <div class="hero__content">
              <span class="hero__eyebrow">{{ heroSlides[activeIndex].eyebrow }}</span>
              <h2 class="hero__title">{{ heroSlides[activeIndex].title }}</h2>
              <p class="hero__subtitle">{{ heroSlides[activeIndex].subtitle }}</p>
              <button type="button" class="hero__cta btn btn-primary" @click="scrollToProducts">
                {{ heroSlides[activeIndex].ctaLabel }}
              </button>
            </div>
          </div>
        </Transition>

        <button type="button" class="hero__arrow hero__arrow--prev" aria-label="Previous slide" @click="onArrowClick(prev)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" class="hero__arrow hero__arrow--next" aria-label="Next slide" @click="onArrowClick(next)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div class="hero__dots" role="tablist" aria-label="Slide navigation">
          <button
            v-for="(slide, index) in heroSlides"
            :key="slide.id"
            type="button"
            class="hero__dot"
            :class="{ 'hero__dot--active': index === activeIndex }"
            role="tab"
            :aria-selected="index === activeIndex"
            :aria-label="`Go to slide ${index + 1}`"
            @click="onDotClick(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  margin-top: var(--space-4);
}

.hero__frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 7;
  border-radius: var(--radius-gallery);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.hero__slide {
  position: absolute;
  inset: 0;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(17, 24, 39, 0.6) 0%, rgba(17, 24, 39, 0.15) 55%, rgba(17, 24, 39, 0) 80%);
}

.hero__content {
  position: absolute;
  top: 50%;
  left: var(--space-6);
  transform: translateY(-50%);
  max-width: 480px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.hero__eyebrow {
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.9;
}

.hero__title {
  font-size: 2.5rem;
  font-weight: var(--fw-extrabold);
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: #fff;
}

.hero__subtitle {
  font-size: 1.0625rem;
  opacity: 0.92;
  margin-bottom: var(--space-1);
}

.hero__cta {
  width: fit-content;
  margin-top: var(--space-1);
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.6s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

.hero__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast), background-color var(--transition-fast);
  z-index: 5;
}

.hero__arrow:hover {
  background-color: #fff;
  transform: translateY(-50%) scale(1.08);
}

.hero__arrow--prev {
  left: var(--space-3);
}

.hero__arrow--next {
  right: var(--space-3);
}

.hero__dots {
  position: absolute;
  bottom: var(--space-3);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 5;
}

.hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.hero__dot--active {
  background-color: #fff;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .hero__frame {
    aspect-ratio: 4 / 5;
    border-radius: var(--radius-image);
  }
  .hero__arrow {
    display: none;
  }
  .hero__content {
    left: var(--space-2);
    right: var(--space-2);
    max-width: none;
  }
  .hero__title {
    font-size: 1.75rem;
  }
  .hero__subtitle {
    font-size: 0.9375rem;
  }
}
</style>
