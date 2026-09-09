<script setup>
const badges = [
  { icon: '🚚', title: 'Shipping within 2–5 days' },
  { icon: '⭐', title: 'Premium Quality' }
]
</script>

<template>
  <div class="trust-box">
    <div v-for="badge in badges" :key="badge.title" class="trust-box__badge">
      <span class="trust-box__icon" aria-hidden="true">{{ badge.icon }}</span>
      <span class="trust-box__title">{{ badge.title }}</span>
    </div>
  </div>
</template>

<style scoped>
.trust-box {
  display: flex;
  gap: var(--space-2);
}

.trust-box__badge {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  padding: var(--space-2);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
}

.trust-box__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--color-card);
  font-size: 1rem;
}

.trust-box__title {
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--color-text-primary);
}

@media (max-width: 480px) {
  .trust-box {
    flex-direction: column;
  }
}
</style>
