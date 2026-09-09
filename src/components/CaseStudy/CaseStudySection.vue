<script setup>
import CaseStudyGallery from './CaseStudyGallery.vue'

const galleryImages = [
  'https://picsum.photos/seed/customer-unboxing-1/900/1125',
  'https://picsum.photos/seed/customer-delivery-2/900/1125',
  'https://picsum.photos/seed/customer-smiling-3/900/1125',
  'https://picsum.photos/seed/customer-package-4/900/1125'
]
</script>

<template>
  <section class="section case-studies" aria-labelledby="case-studies-heading">
    <div class="container">
      <div class="case-studies__text-col">
        <span class="case-studies__label">Case Studies</span>
        <h2 id="case-studies-heading" class="case-studies__title">
          Last 24h Orders
        </h2>
      </div>

      <div class="case-studies__gallery-col">
        <CaseStudyGallery :images="galleryImages" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-studies__text-col {
  margin-bottom: var(--space-6);
}

.case-studies__label {
  display: inline-block;
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-2);
}

.case-studies__title {
  font-size: 2.25rem;
  font-weight: var(--fw-extrabold);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

/* Matches HeroCarousel's .hero__frame: full width of the shared .container,
   same aspect-ratio at the same breakpoint, same border-radius treatment.
   Applied via :deep() so CaseStudyGallery.vue itself stays untouched and
   remains reusable elsewhere with its own default aspect-ratio. */
.case-studies__gallery-col {
  width: 100%;
}

.case-studies__gallery-col :deep(.case-gallery__frame) {
  aspect-ratio: 16 / 6.5;
  border-radius: var(--radius-gallery);
}

@media (max-width: 1024px) {
  .case-studies__text-col {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .case-studies__gallery-col :deep(.case-gallery__frame) {
    aspect-ratio: 4 / 4.5;
    border-radius: var(--radius-image);
  }
}
</style>
