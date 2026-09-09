<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true }, // [{ id, label }]
  modelValue: { type: String, default: null }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const rootRef = ref(null)

const selectedLabel = computed(() => {
  const found = props.options.find((opt) => opt.id === props.modelValue)
  return found ? found.label : props.label
})

const toggle = () => {
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

const select = (option) => {
  emit('update:modelValue', props.modelValue === option.id ? null : option.id)
  close()
}

const onClickOutside = (event) => {
  if (rootRef.value && !rootRef.value.contains(event.target)) {
    close()
  }
}

const onKeydown = (event) => {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="dropdown" ref="rootRef">
    <button
      type="button"
      class="dropdown__trigger"
      :class="{ 'dropdown__trigger--active': modelValue }"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggle"
    >
      <span>{{ selectedLabel }}</span>
      <svg
        class="dropdown__chevron"
        :class="{ 'dropdown__chevron--open': isOpen }"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <Transition name="dropdown-fade">
      <ul v-if="isOpen" class="dropdown__menu" role="listbox">
        <li
          v-for="option in options"
          :key="option.id"
          role="option"
          :aria-selected="modelValue === option.id"
        >
          <button
            type="button"
            class="dropdown__option"
            :class="{ 'dropdown__option--selected': modelValue === option.id }"
            @click="select(option)"
          >
            {{ option.label }}
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 var(--space-2);
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-dropdown);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  color: var(--color-text-primary);
  transition: border-color var(--transition-fast), color var(--transition-fast);
  white-space: nowrap;
}

.dropdown__trigger:hover,
.dropdown__trigger--active {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.dropdown__chevron {
  color: var(--color-text-secondary);
  transition: transform var(--transition-fast);
}

.dropdown__chevron--open {
  transform: rotate(180deg);
}

.dropdown__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 190px;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-dropdown);
  box-shadow: var(--shadow-dropdown);
  padding: 8px;
  z-index: 50;
}

.dropdown__option {
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: var(--fs-small);
  color: var(--color-text-primary);
  transition: background-color var(--transition-fast);
}

.dropdown__option:hover {
  background-color: var(--color-bg);
}

.dropdown__option--selected {
  color: var(--color-primary);
  font-weight: var(--fw-semibold);
  background-color: #EAF3FD;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
