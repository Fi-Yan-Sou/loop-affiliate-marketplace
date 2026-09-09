<template>
  <div class="container product-details-skeleton" role="status" aria-label="Loading product details">
    <div class="product-details-skeleton__grid">
      <div class="product-details-skeleton__gallery-col">
        <div class="product-details-skeleton__main-image shimmer"></div>
        <div class="product-details-skeleton__thumbs">
          <div class="product-details-skeleton__thumb shimmer"></div>
          <div class="product-details-skeleton__thumb shimmer"></div>
          <div class="product-details-skeleton__thumb shimmer"></div>
          <div class="product-details-skeleton__thumb shimmer"></div>
        </div>
      </div>

      <div class="product-details-skeleton__info-col">
        <div class="product-details-skeleton__line product-details-skeleton__line--brand shimmer"></div>
        <div class="product-details-skeleton__line product-details-skeleton__line--title shimmer"></div>
        <div class="product-details-skeleton__line product-details-skeleton__line--title-short shimmer"></div>

        <div class="product-details-skeleton__price-row">
          <div class="product-details-skeleton__line product-details-skeleton__line--price shimmer"></div>
          <div class="product-details-skeleton__line product-details-skeleton__line--old-price shimmer"></div>
        </div>

        <div class="product-details-skeleton__block">
          <div class="product-details-skeleton__line product-details-skeleton__line--label shimmer"></div>
          <div class="product-details-skeleton__swatches">
            <div class="product-details-skeleton__swatch shimmer"></div>
            <div class="product-details-skeleton__swatch shimmer"></div>
            <div class="product-details-skeleton__swatch shimmer"></div>
            <div class="product-details-skeleton__swatch shimmer"></div>
          </div>
        </div>

        <div class="product-details-skeleton__block">
          <div class="product-details-skeleton__line product-details-skeleton__line--label shimmer"></div>
          <div class="product-details-skeleton__field shimmer"></div>
        </div>

        <div class="product-details-skeleton__buy-buttons">
          <div class="product-details-skeleton__button shimmer"></div>
          <div class="product-details-skeleton__button shimmer"></div>
        </div>

        <div class="product-details-skeleton__trust-box">
          <div class="product-details-skeleton__trust-badge shimmer"></div>
          <div class="product-details-skeleton__trust-badge shimmer"></div>
        </div>

        <div class="product-details-skeleton__tabs">
          <div class="product-details-skeleton__tab-labels">
            <div class="product-details-skeleton__line product-details-skeleton__line--tab shimmer"></div>
            <div class="product-details-skeleton__line product-details-skeleton__line--tab shimmer"></div>
          </div>
          <div class="product-details-skeleton__tab-content">
            <div class="product-details-skeleton__line product-details-skeleton__line--full shimmer"></div>
            <div class="product-details-skeleton__line product-details-skeleton__line--full shimmer"></div>
            <div class="product-details-skeleton__line product-details-skeleton__line--title-short shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-details-skeleton {
  padding-top: var(--space-4);
  padding-bottom: var(--space-10);
}

.product-details-skeleton__grid {
  display: grid;
  grid-template-columns: 55% 1fr;
  gap: var(--space-6);
}

.product-details-skeleton__gallery-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.product-details-skeleton__main-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-gallery);
}

.product-details-skeleton__thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-2);
}

.product-details-skeleton__thumb {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-image);
}

.product-details-skeleton__info-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.product-details-skeleton__line {
  border-radius: var(--radius-input);
  height: 14px;
}

.product-details-skeleton__line--brand {
  width: 30%;
  height: 10px;
}

.product-details-skeleton__line--title {
  width: 85%;
  height: 26px;
}

.product-details-skeleton__line--title-short {
  width: 55%;
  height: 26px;
}

.product-details-skeleton__price-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.product-details-skeleton__line--price {
  width: 100px;
  height: 32px;
}

.product-details-skeleton__line--old-price {
  width: 64px;
  height: 20px;
}

.product-details-skeleton__block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.product-details-skeleton__line--label {
  width: 110px;
  height: 16px;
}

.product-details-skeleton__swatches {
  display: flex;
  gap: 12px;
}

.product-details-skeleton__swatch {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.product-details-skeleton__field {
  width: 100%;
  max-width: 260px;
  height: 48px;
  border-radius: var(--radius-input);
}

.product-details-skeleton__buy-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.product-details-skeleton__button {
  height: 54px;
  border-radius: var(--radius-button);
}

.product-details-skeleton__trust-box {
  display: flex;
  gap: var(--space-2);
}

.product-details-skeleton__trust-badge {
  flex: 1;
  height: 64px;
  border-radius: var(--radius-card);
}

.product-details-skeleton__tabs {
  margin-top: var(--space-4);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.product-details-skeleton__tab-labels {
  display: flex;
  gap: var(--space-3);
}

.product-details-skeleton__line--tab {
  width: 90px;
  height: 18px;
}

.product-details-skeleton__tab-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-details-skeleton__line--full {
  width: 100%;
  height: 14px;
}

/* .shimmer and its keyframes now live in styles/global.css (shared with
   ProductCardSkeleton.vue) so the animation is defined in exactly one place. */

@media (max-width: 1024px) {
  .product-details-skeleton__grid {
    grid-template-columns: 1fr;
  }
}
</style>
