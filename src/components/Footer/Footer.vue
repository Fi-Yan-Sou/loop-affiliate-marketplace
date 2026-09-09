<script setup>
const features = [
  {
    icon: '🚚',
    title: 'USPS | FREE SHIPPING',
    description: 'Tracking available in 24 hours.'
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'All checkout happens on eBay or Depop.'
  }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__features">
        <div v-for="feature in features" :key="feature.title" class="footer__feature">
          <span class="footer__feature-icon" aria-hidden="true">{{ feature.icon }}</span>
          <div>
            <h3 class="footer__feature-title">{{ feature.title }}</h3>
            <p class="footer__feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ currentYear }} Loop. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-card);
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) 0 var(--space-4);
  margin-top: var(--space-10);
}

.footer__features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: var(--space-4);
  margin-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.footer__feature {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  justify-content: center;
}

.footer__feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--color-bg);
  font-size: 1.25rem;
}

.footer__feature-title {
  font-size: var(--fs-paragraph);
  font-weight: var(--fw-semibold);
  margin-bottom: 4px;
}

.footer__feature-description {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.footer__bottom {
  text-align: center;
}

.footer__bottom p {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
}

@media (max-width: 600px) {
  .footer__features {
    grid-template-columns: 1fr;
    max-width: 340px;
  }
}
</style>
