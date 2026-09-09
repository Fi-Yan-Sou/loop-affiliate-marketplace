<script setup>
import { reactive, watch } from 'vue'
import Dropdown from './Dropdown.vue'
import { genders, categories } from '../../data/categories.js'

const emit = defineEmits(['filter-change'])

const filters = reactive({
  gender: null,
  category: null
})

watch(
  filters,
  () => {
    emit('filter-change', { ...filters })
  },
  { deep: true }
)
</script>

<template>
  <div class="filter-bar" role="group" aria-label="Product filters">
    <Dropdown label="Gender" :options="genders" v-model="filters.gender" />
    <Dropdown label="Category" :options="categories" v-model="filters.category" />
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .filter-bar {
    width: 100%;
  }
}
</style>
