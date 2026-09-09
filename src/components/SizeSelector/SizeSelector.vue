<script setup>
const props = defineProps({
  sizes: { type: Array, required: true }, // [{ name, code, sku, ebayAffiliateUrl, depopAffiliateUrl }] — sizes for the currently selected color
  modelValue: { type: Object, default: null }
})

const emit = defineEmits(['update:modelValue'])

const onChange = (event) => {
  const size = event.target.value ? props.sizes.find((s) => s.sku === event.target.value) : null
  emit('update:modelValue', size)
}
</script>

<template>
  <div class="size-selector">
    <h3 class="size-selector__title">
      <label for="size-select">Choose Size</label>
    </h3>
    <div class="size-selector__field">
      <select
        id="size-select"
        class="size-selector__select"
        :value="modelValue?.sku || ''"
        @change="onChange"
      >
        <option value="" disabled>Select a size</option>
        <option v-for="size in sizes" :key="size.sku" :value="size.sku">{{ size.name }}</option>
      </select>
      <svg class="size-selector__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 9l6 6 6-6" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.size-selector__title {
  font-size: var(--fs-card-title);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--space-2);
}

.size-selector__field {
  position: relative;
  max-width: 260px;
}

.size-selector__select {
  width: 100%;
  height: 48px;
  padding: 0 40px 0 16px;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-input);
  font-size: var(--fs-paragraph);
  font-weight: var(--fw-medium);
  appearance: none;
  transition: border-color var(--transition-fast);
}

.size-selector__select:hover,
.size-selector__select:focus {
  border-color: var(--color-primary);
  outline: none;
}

.size-selector__chevron {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>
