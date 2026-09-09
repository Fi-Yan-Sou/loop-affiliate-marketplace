<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'empty',
    validator: (value) => ['empty', 'error'].includes(value)
  },
  title: { type: String, required: true },
  description: { type: String, default: '' }
})

const role = computed(() => (props.variant === 'error' ? 'alert' : 'status'))
</script>

<template>
  <div class="state-message" :class="`state-message--${variant}`" :role="role">
    <span class="state-message__icon" aria-hidden="true">
      <svg v-if="variant === 'error'" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.18A1.5 1.5 0 0 0 3.5 20.5h17a1.5 1.5 0 0 0 1.39-2.46L13.71 3.86a1.5 1.5 0 0 0-2.42 0z"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8" />
        <path d="M21 21l-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    </span>

    <h3 class="state-message__title">{{ title }}</h3>
    <p v-if="description" class="state-message__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.state-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-1);
  padding: var(--space-8) var(--space-3);
  max-width: 420px;
  margin: 0 auto;
}

.state-message__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-bottom: var(--space-1);
}

.state-message--empty .state-message__icon {
  background-color: var(--color-bg);
  color: var(--color-text-secondary);
}

.state-message--error .state-message__icon {
  background-color: #FDECEC;
  color: var(--color-secondary);
}

.state-message__title {
  font-size: var(--fs-card-title);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
}

.state-message__description {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 480px) {
  .state-message {
    padding: var(--space-6) var(--space-2);
  }
}
</style>
