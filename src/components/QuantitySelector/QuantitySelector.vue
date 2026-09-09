<script setup>
const props = defineProps({
  modelValue: { type: Number, default: 1 },
  min: { type: Number, default: 1 },
  max: { type: Number, default: 10 }
})

const emit = defineEmits(['update:modelValue'])

const decrement = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

const increment = () => {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

const onInput = (event) => {
  let value = parseInt(event.target.value, 10)
  if (isNaN(value)) value = props.min
  value = Math.min(props.max, Math.max(props.min, value))
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="quantity-selector">
    <h3 class="quantity-selector__title">
      <label for="quantity-input">Quantity</label>
    </h3>
    <div class="quantity-selector__control">
      <button
        type="button"
        class="quantity-selector__btn"
        :disabled="modelValue <= min"
        aria-label="Decrease quantity"
        @click="decrement"
      >
        −
      </button>
      <input
        id="quantity-input"
        type="number"
        class="quantity-selector__input"
        :value="modelValue"
        :min="min"
        :max="max"
        @change="onInput"
      />
      <button
        type="button"
        class="quantity-selector__btn"
        :disabled="modelValue >= max"
        aria-label="Increase quantity"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped>
.quantity-selector__title {
  font-size: var(--fs-card-title);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--space-2);
}

.quantity-selector__control {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-input);
  overflow: hidden;
  width: fit-content;
}

.quantity-selector__btn {
  width: 44px;
  height: 48px;
  font-size: 1.25rem;
  color: var(--color-text-primary);
  background-color: var(--color-card);
  transition: background-color var(--transition-fast);
}

.quantity-selector__btn:hover:not(:disabled) {
  background-color: var(--color-bg);
}

.quantity-selector__btn:disabled {
  color: var(--color-border);
  cursor: not-allowed;
}

.quantity-selector__input {
  width: 56px;
  height: 48px;
  text-align: center;
  border: none;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  font-size: var(--fs-paragraph);
  font-weight: var(--fw-semibold);
  -moz-appearance: textfield;
}

.quantity-selector__input::-webkit-outer-spin-button,
.quantity-selector__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
