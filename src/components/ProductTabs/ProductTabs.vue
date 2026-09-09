<script setup>
import { ref } from 'vue'

defineProps({
  product: { type: Object, required: true },
  selectedColor: { type: Object, default: null } // { name, code, sku, images?, sizes, description?, material?, fit?, season?, condition? }
})

const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'specifications', label: 'Specifications' }
]

const activeTab = ref('description')

const selectTab = (id) => {
  activeTab.value = id
}
</script>

<template>
  <div class="product-tabs">
    <div class="product-tabs__list" role="tablist" aria-label="Product information tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        class="product-tabs__tab"
        :class="{ 'product-tabs__tab--active': activeTab === tab.id }"
        :aria-selected="activeTab === tab.id"
        @click="selectTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="product-tabs__panel-wrap">
      <Transition name="tab-fade" mode="out-in">
        <div v-if="activeTab === 'description'" key="description" class="product-tabs__panel" role="tabpanel">
          <p>{{ selectedColor?.description ?? product.description }}</p>
        </div>

        <div v-else key="specifications" class="product-tabs__panel" role="tabpanel">
          <ul class="product-tabs__spec-list">
            <li><span>Brand</span><span>{{ product.brand }}</span></li>
            <li><span>Material</span><span>{{ selectedColor?.material ?? product.material }}</span></li>
            <li><span>Fit</span><span>{{ selectedColor?.fit ?? product.fit }}</span></li>
            <li><span>Category</span><span>{{ product.category }}</span></li>
            <li><span>Gender</span><span>{{ product.gender }}</span></li>
            <li><span>Color</span><span>{{ selectedColor ? selectedColor.name : '—' }}</span></li>
            <li><span>Season</span><span>{{ selectedColor?.season ?? product.season }}</span></li>
            <li><span>Condition</span><span>{{ selectedColor?.condition ?? product.condition }}</span></li>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.product-tabs {
  margin-top: var(--space-4);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-3);
}

.product-tabs__list {
  display: flex;
  gap: var(--space-3);
  border-bottom: 1px solid var(--color-border);
  overflow-x: auto;
}

.product-tabs__tab {
  padding: 12px 4px;
  font-size: var(--fs-paragraph);
  font-weight: var(--fw-medium);
  color: var(--color-text-secondary);
  border-bottom: 2px solid transparent;
  transition: color var(--transition-fast), border-color var(--transition-fast);
  white-space: nowrap;
}

.product-tabs__tab:hover {
  color: var(--color-text-primary);
}

.product-tabs__tab--active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
  font-weight: var(--fw-semibold);
}

.product-tabs__panel-wrap {
  padding-top: var(--space-3);
  min-height: 120px;
}

.product-tabs__panel p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.product-tabs__spec-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-tabs__spec-list li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--fs-small);
  text-transform: capitalize;
}

.product-tabs__spec-list li span:first-child {
  color: var(--color-text-secondary);
}

.product-tabs__spec-list li span:last-child {
  font-weight: var(--fw-medium);
}

.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.tab-fade-leave-to {
  opacity: 0;
}
</style>
