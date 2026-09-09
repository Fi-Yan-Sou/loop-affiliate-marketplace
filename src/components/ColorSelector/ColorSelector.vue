<script setup>
defineProps({
  colors: { type: Array, required: true }, // [{ name, code, sku, images?, sizes }]
  modelValue: { type: Object, default: null }
})

const emit = defineEmits(['update:modelValue'])

const select = (color) => {
  emit('update:modelValue', color)
}
</script>

<template>
  <div class="color-selector">
    <template v-if="colors.length">
      <h3 class="color-selector__title">Choose Color</h3>
      <div class="color-selector__swatches" role="radiogroup" aria-label="Choose color">
        <button
          v-for="color in colors"
          :key="color.sku"
          type="button"
          class="color-selector__swatch"
          :class="{ 'color-selector__swatch--selected': modelValue?.sku === color.sku }"
          :style="{ backgroundColor: color.code }"
          role="radio"
          :aria-checked="modelValue?.sku === color.sku"
          :aria-label="color.name"
          :title="color.name"
          @click="select(color)"
        >
          <span v-if="modelValue?.sku === color.sku" class="color-selector__check" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12l5 5L19 7"
                class="color-selector__check-icon"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <p v-if="modelValue" class="color-selector__selected-label">Selected: {{ modelValue.name }}</p>
    </template>

    <template v-else>
      <h3 class="color-selector__title">Color</h3>
      <p class="color-selector__empty-text" role="status">This product does not have color options.</p>
    </template>
  </div>
</template>

<style scoped>
.color-selector__title {
  font-size: var(--fs-card-title);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--space-2);
}

.color-selector__swatches {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.color-selector__swatch {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.color-selector__swatch:hover {
  transform: scale(1.12);
}

.color-selector__swatch--selected {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-primary);
}

.color-selector__check-icon {
  stroke: #fff;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.6));
}

.color-selector__selected-label {
  margin-top: var(--space-1);
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
}

.color-selector__empty-text {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
}
</style>
