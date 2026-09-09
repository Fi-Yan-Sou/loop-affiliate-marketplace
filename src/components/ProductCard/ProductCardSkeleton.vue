<template>
  <div class="skeleton-card" role="status" aria-label="Loading product">
    <div class="skeleton-card__image shimmer"></div>

    <div class="skeleton-card__body">
      <div class="skeleton-card__line skeleton-card__line--brand shimmer"></div>
      <div class="skeleton-card__line skeleton-card__line--title shimmer"></div>
      <div class="skeleton-card__line skeleton-card__line--title-short shimmer"></div>
      <div class="skeleton-card__line skeleton-card__line--price shimmer"></div>

      <div class="skeleton-card__actions">
        <div class="skeleton-card__button shimmer"></div>
        <div class="skeleton-card__button shimmer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  background-color: var(--color-card);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.skeleton-card__image {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-image) var(--radius-image) 0 0;
}

.skeleton-card__body {
  padding: var(--space-2) var(--space-2) var(--space-3);
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.skeleton-card__line {
  border-radius: var(--radius-input);
  height: 12px;
}

.skeleton-card__line--brand {
  width: 40%;
  height: 10px;
}

.skeleton-card__line--title {
  width: 90%;
  height: 16px;
}

.skeleton-card__line--title-short {
  width: 65%;
  height: 16px;
}

.skeleton-card__line--price {
  width: 35%;
  height: 20px;
  margin-top: 4px;
}

.skeleton-card__actions {
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: var(--space-1);
}

.skeleton-card__button {
  flex: 1;
  height: 40px;
  border-radius: var(--radius-button);
}
/* .shimmer and its keyframes now live in styles/global.css (shared with
   ProductDetailsSkeleton.vue) so the animation is defined in exactly one
   place. */
</style>
