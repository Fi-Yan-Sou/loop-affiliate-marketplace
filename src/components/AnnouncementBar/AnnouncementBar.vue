<script setup>
const messages = [
  '🚚 Free Shipping',
  '📦 Delivery within 2–5 days',
  '⭐ Premium Quality Products'
]
</script>

<template>
  <div class="announcement-bar" role="note" aria-label="Site announcements">
    <div class="announcement-bar__track">
      <div class="announcement-bar__group" aria-hidden="false">
        <span v-for="(msg, i) in messages" :key="`a-${i}`" class="announcement-bar__item">{{ msg }}</span>
      </div>
      <div class="announcement-bar__group" aria-hidden="true">
        <span v-for="(msg, i) in messages" :key="`b-${i}`" class="announcement-bar__item">{{ msg }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.announcement-bar {
  height: 40px;
  background-color: var(--color-primary);
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.announcement-bar__track {
  display: flex;
  width: max-content;
  animation: announcement-scroll 22s linear infinite;
}

.announcement-bar__group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.announcement-bar__item {
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  white-space: nowrap;
  padding: 0 var(--space-4);
}

@keyframes announcement-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .announcement-bar__track {
    animation: none;
  }
}
</style>
