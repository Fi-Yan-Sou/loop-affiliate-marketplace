<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FilterBar from '../FilterBar/FilterBar.vue'
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar.vue'

const emit = defineEmits(['search', 'filter-change'])

const router = useRouter()
const searchQuery = ref('')

const goHome = () => {
  router.push('/')
}

const onSearchInput = () => {
  emit('search', searchQuery.value.trim())
}

const onFilterChange = (filters) => {
  emit('filter-change', filters)
}
</script>

<template>
  <div class="navbar-wrap">
    <AnnouncementBar />

    <header class="navbar">
      <div class="container navbar__inner">
        <button class="navbar__brand" type="button" @click="goHome" aria-label="Loop — Go to homepage">
          <span class="navbar__logo" aria-hidden="true">
            <svg viewBox="0 0 42 42" width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="20" stroke="#0064D2" stroke-width="2.5" />
              <path d="M14 21a7 7 0 1 1 7 7" stroke="#0064D2" stroke-width="2.5" stroke-linecap="round" />
              <circle cx="14" cy="21" r="2.6" fill="#E53238" />
            </svg>
          </span>
          <span class="navbar__name">Loop</span>
        </button>

        <div class="navbar__search-col">
          <label class="navbar__search" for="global-search">
            <span class="sr-only">Search products</span>
            <svg class="navbar__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="#6B7280" stroke-width="2" />
              <path d="M21 21l-3.5-3.5" stroke="#6B7280" stroke-width="2" stroke-linecap="round" />
            </svg>
            <input
              id="global-search"
              v-model="searchQuery"
              type="text"
              placeholder="Search brands, styles, categories..."
              @input="onSearchInput"
            />
          </label>
        </div>

        <FilterBar @filter-change="onFilterChange" />
      </div>
    </header>
  </div>
</template>

<style scoped>
.navbar-wrap {
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  height: var(--header-height);
  background-color: var(--color-card);
  border-bottom: 1px solid var(--color-border);
}

.navbar__inner {
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-4);
}

.navbar__search-col {
  display: flex;
  justify-content: center;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.navbar__logo {
  display: inline-flex;
  width: 42px;
  height: 42px;
}

.navbar__name {
  font-size: 1.25rem;
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

.navbar__search {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 420px;
  height: 44px;
  padding: 0 var(--space-2);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-input);
  transition: border-color var(--transition-fast), background-color var(--transition-fast);
}

.navbar__search:focus-within {
  border-color: var(--color-primary);
  background-color: var(--color-card);
}

.navbar__search-icon {
  flex-shrink: 0;
}

.navbar__search input {
  flex: 1;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: var(--fs-small);
  color: var(--color-text-primary);
}

.navbar__search input::placeholder {
  color: var(--color-text-secondary);
}

@media (max-width: 1024px) {
  .navbar__search {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar {
    height: auto;
  }
  .navbar__inner {
    grid-template-columns: auto 1fr;
    padding-top: var(--space-2);
    padding-bottom: var(--space-2);
    gap: var(--space-2);
  }
  .navbar__search-col {
    display: none;
  }
}
</style>
