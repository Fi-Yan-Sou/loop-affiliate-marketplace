<script setup>
import { computed } from 'vue'

const props = defineProps({
  selectedSize: { type: Object, default: null } // { name, code, sku, ebayAffiliateUrl, depopAffiliateUrl, poshmarkAffiliateUrl? }
})

const isEnabled = computed(() => !!props.selectedSize)

// Poshmark is enabled only when the selected size object actually carries a
// real poshmarkAffiliateUrl. Until the client supplies real URLs, this field
// is absent/null/empty on every size, so the button stays disabled — it is
// never derived, constructed, or guessed from other data.
const isPoshmarkEnabled = computed(() => !!props.selectedSize?.poshmarkAffiliateUrl)

const openEbay = () => {
  if (!props.selectedSize) return
  window.open(props.selectedSize.ebayAffiliateUrl, '_blank', 'noopener')
}

const openDepop = () => {
  if (!props.selectedSize) return
  window.open(props.selectedSize.depopAffiliateUrl, '_blank', 'noopener')
}

const openPoshmark = () => {
  if (!isPoshmarkEnabled.value) return
  window.open(props.selectedSize.poshmarkAffiliateUrl, '_blank', 'noopener')
}
</script>

<template>
  <div class="buy-buttons">
    <button
      type="button"
      class="market-btn market-btn--ebay"
      :disabled="!isEnabled"
      @click="openEbay"
    >
      <span class="market-btn__logo">
        <span class="ebay-wordmark">
          <span class="ebay-wordmark__e">e</span><span class="ebay-wordmark__b">b</span><span class="ebay-wordmark__a">a</span><span class="ebay-wordmark__y">y</span>
        </span>
      </span>
      <span class="market-btn__text">
        <span class="market-btn__title">Shop on eBay</span>
        <span class="market-btn__subtitle">Secure checkout on eBay.</span>
      </span>
      <span class="market-btn__arrow-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M10 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </button>

    <button
      type="button"
      class="market-btn market-btn--depop"
      :disabled="!isEnabled"
      @click="openDepop"
    >
      <span class="market-btn__logo">
        <span class="depop-wordmark">depop</span>
      </span>
      <span class="market-btn__text">
        <span class="market-btn__title">Shop on Depop</span>
        <span class="market-btn__subtitle">Secure checkout on Depop.</span>
      </span>
      <span class="market-btn__arrow-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M10 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </button>

    <button
      type="button"
      class="market-btn market-btn--poshmark"
      :disabled="!isPoshmarkEnabled"
      @click="openPoshmark"
    >
      <span class="market-btn__logo">
        <span class="poshmark-wordmark">poshmark</span>
      </span>
      <span class="market-btn__text">
        <span class="market-btn__title">Shop on Poshmark</span>
        <span class="market-btn__subtitle">Secure checkout on Poshmark.</span>
      </span>
      <span class="market-btn__arrow-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M10 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </button>

    <p v-if="!isEnabled" class="buy-buttons__hint">Select a color and size to continue.</p>
  </div>
</template>

<style scoped>
.buy-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

/* Shared card-button layout: logo column | centered text | arrow column */
.market-btn {
  display: grid;
  grid-template-columns: 130px 1fr 44px;
  align-items: center;
  column-gap: var(--space-2);
  width: 100%;
  min-height: 80px;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-card);
  border: 1.5px solid transparent;
  text-align: left;
  transition: transform var(--transition-base), background-color var(--transition-base),
    opacity var(--transition-base), box-shadow var(--transition-base);
}

.market-btn:not(:disabled):hover {
  transform: scale(1.01);
  box-shadow: var(--shadow-card-hover);
}

.market-btn:not(:disabled):active {
  transform: scale(0.995);
}

.market-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.market-btn:disabled:hover {
  transform: none;
  box-shadow: none;
}

.market-btn__logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.market-btn__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2px;
}

.market-btn__title {
  font-size: 1.0625rem;
  font-weight: var(--fw-extrabold);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.market-btn__subtitle {
  font-size: 0.8125rem;
  font-weight: var(--fw-regular);
}

.market-btn__arrow-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.6px solid currentColor;
  flex-shrink: 0;
}

/* eBay: light card, dark text, official multicolor wordmark */
.market-btn--ebay {
  background-color: var(--color-card);
  border-color: var(--color-border);
  color: var(--color-text-primary);
}

.market-btn--ebay:not(:disabled):hover {
  background-color: var(--color-bg);
}

.ebay-wordmark {
  font-size: 1.5rem;
  font-weight: var(--fw-extrabold);
  font-style: italic;
  letter-spacing: -0.01em;
}

.ebay-wordmark__e {
  color: var(--color-secondary);
}

.ebay-wordmark__b {
  color: var(--color-primary);
}

.ebay-wordmark__a {
  color: #F5AF02;
}

.ebay-wordmark__y {
  color: #86B817;
}

/* Depop: strong red card, white wordmark/text/arrow */
.market-btn--depop {
  background-color: var(--color-secondary);
  border-color: var(--color-secondary-dark);
  color: #fff;
}

.market-btn--depop:not(:disabled):hover {
  background-color: var(--color-secondary-dark);
}

.depop-wordmark {
  font-size: 1.375rem;
  font-weight: var(--fw-extrabold);
  letter-spacing: -0.02em;
  color: #fff;
}

/* Poshmark: signature deep burgundy card, white wordmark/text/arrow */
.market-btn--poshmark {
  background-color: #7F1846;
  border-color: #611233;
  color: #fff;
}

.market-btn--poshmark:not(:disabled):hover {
  background-color: #611233;
}

.poshmark-wordmark {
  font-size: 1.25rem;
  font-weight: var(--fw-extrabold);
  letter-spacing: -0.01em;
  color: #fff;
}

.buy-buttons__hint {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
}

@media (max-width: 480px) {
  .market-btn {
    grid-template-columns: 92px 1fr 36px;
    min-height: 68px;
    padding: var(--space-1) var(--space-2);
    column-gap: var(--space-1);
  }

  .market-btn__arrow-wrap {
    width: 30px;
    height: 30px;
  }

  .market-btn__title {
    font-size: 0.9375rem;
  }

  .market-btn__subtitle {
    font-size: 0.75rem;
  }

  .ebay-wordmark {
    font-size: 1.1875rem;
  }

  .depop-wordmark {
    font-size: 1.0625rem;
  }

  .poshmark-wordmark {
    font-size: 0.9375rem;
  }
}
</style>