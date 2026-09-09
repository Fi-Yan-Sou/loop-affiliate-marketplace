<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/Navbar/Navbar.vue";
import ProductGallery from "../components/ProductGallery/ProductGallery.vue";
import ColorSelector from "../components/ColorSelector/ColorSelector.vue";
import SizeSelector from "../components/SizeSelector/SizeSelector.vue";
import BuyButtons from "../components/BuyButtons/BuyButtons.vue";
import TrustBox from "../components/TrustBox/TrustBox.vue";
import ProductTabs from "../components/ProductTabs/ProductTabs.vue";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts.vue";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton/ProductDetailsSkeleton.vue";
import StateMessage from "../components/StateMessage/StateMessage.vue";
import { fetchProductById, fetchRelatedProducts } from "../services/api.js";

const route = useRoute();
const router = useRouter();

const product = ref(null);
const relatedProducts = ref([]);

const isLoading = ref(true);
const loadError = ref(null); // a genuine fetch/API failure — distinct from "not found"
const notFound = ref(false); // the request succeeded but no such product exists

const selectedColor = ref(null);
const selectedSize = ref(null);

const loadProduct = async () => {
  isLoading.value = true;
  loadError.value = null;
  notFound.value = false;
  product.value = null;
  relatedProducts.value = [];
  selectedColor.value = null;
  selectedSize.value = null;

  try {
    const result = await fetchProductById(route.params.id);

    if (!result) {
      notFound.value = true;
      return;
    }

    product.value = result;

    if (result.colors.length) {
      selectedColor.value = result.colors[0];
    } else {
      // Colorless products keep their sizes at the top level of the
      // product (see effectiveSizes below) — auto-select the first one,
      // mirroring the auto-selection behavior colored products already get.
      selectedSize.value = result.sizes?.length ? result.sizes[0] : null;
    }

    try {
      relatedProducts.value = await fetchRelatedProducts(result);
    } catch (relatedErr) {
      // Related Products is a secondary section — if it fails to load, fail
      // quietly (empty carousel) rather than blocking the whole page.
      console.error(relatedErr);
      relatedProducts.value = [];
    }
  } catch (err) {
    loadError.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

// Re-fetch whenever the route's product id changes (e.g. navigating between
// products via Related Products links).
watch(() => route.params.id, loadProduct, { immediate: true });

// Whenever the selected color changes, reset the size to the first available
// size of that color — never leave an invalid size selected from a previous color.
watch(selectedColor, (newColor) => {
  selectedSize.value =
    newColor && newColor.sizes.length ? newColor.sizes[0] : null;
});

// The sizes actually available to show/select: a selected color's own sizes
// when the product has colors, otherwise the product's top-level sizes
// (used by products that have no color variants at all).
const effectiveSizes = computed(() => {
  if (selectedColor.value) return selectedColor.value.sizes;
  return product.value?.sizes ?? [];
});

// The images to show in the gallery: a selected color's own images when the
// product has colors AND that color provides real images, otherwise the
// product's top-level images (used by colorless products, and by colored
// products whose colors don't yet carry real per-color image data).
const effectiveImages = computed(() => {
  if (selectedColor.value?.images?.length) return selectedColor.value.images;
  return product.value?.images ?? [];
});

const backToHome = () => {
  router.push("/");
};

// Estimated delivery window: today + 2 days through today + 5 days,
// computed fresh from the browser's current date every time this page
// renders. setDate() handles month/year rollover automatically (e.g.
// Dec 30 + 5 days correctly becomes a January date the following year).
const formatDeliveryDate = (date) =>
  date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

const estimatedDelivery = computed(() => {
  const today = new Date();

  const start = new Date(today);
  start.setDate(start.getDate() + 2);

  const end = new Date(today);
  end.setDate(end.getDate() + 5);

  return `${formatDeliveryDate(start)} – ${formatDeliveryDate(end)}`;
});
</script>

<template>
  <div class="product-details">
    <Navbar />

    <ProductDetailsSkeleton v-if="isLoading" />

    <div v-else-if="loadError" class="container product-details__state-wrap">
      <StateMessage
        variant="error"
        title="Unable to load product"
        :description="loadError"
      />
      <button type="button" class="btn btn-primary" @click="backToHome">
        Back to Home
      </button>
    </div>

    <div v-else-if="notFound" class="container product-details__not-found">
      <h1>Product not found</h1>
      <p>
        The product you're looking for doesn't exist or may have been removed.
      </p>
      <button type="button" class="btn btn-primary" @click="backToHome">
        Back to Home
      </button>
    </div>

    <main v-else id="main-content" class="container product-details__main">
      <nav class="product-details__breadcrumb" aria-label="Breadcrumb">
        <button type="button" @click="backToHome">Home</button>
        <span aria-hidden="true">/</span>
        <span>{{ product.category }}</span>
        <span aria-hidden="true">/</span>
        <span class="product-details__breadcrumb-current">{{
          product.title
        }}</span>
      </nav>

      <div class="product-details__grid">
        <div class="product-details__gallery-col">
          <ProductGallery :images="effectiveImages" :alt="product.title" />
        </div>

        <div class="product-details__info-col">
          <span v-if="product.bestSeller" class="product-details__bestseller">Bestseller</span>
          <span class="product-details__brand">{{ product.brand }}</span>
          <h1 class="product-details__title">{{ product.title }}</h1>

          <div class="product-details__price-row">
            <span class="product-details__price"
              >${{ product.currentPrice.toFixed(2) }}</span
            >
            <span v-if="product.oldPrice" class="product-details__old-price"
              >${{ product.oldPrice.toFixed(2) }}</span
            >
            <span v-if="product.discount" class="product-details__discount"
              >-{{ product.discount }}%</span
            >
          </div>

          <span class="product-details__stock"
            >USPS | Estimated delivery: {{ estimatedDelivery }}</span
          >

          <!-- <p class="product-details__description">{{ product.description }}</p> -->

          <ColorSelector v-model="selectedColor" :colors="product.colors" />
          <SizeSelector
            v-model="selectedSize"
            :sizes="effectiveSizes"
          />

          <BuyButtons :selected-size="selectedSize" />

          <TrustBox />

          <ProductTabs :product="product" :selected-color="selectedColor" />
        </div>
      </div>

      <RelatedProducts
        v-if="relatedProducts.length"
        :products="relatedProducts"
      />
    </main>
  </div>
</template>

<style scoped>
.product-details__main {
  padding-top: var(--space-4);
  padding-bottom: var(--space-10);
}

.product-details__breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.product-details__breadcrumb button {
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.product-details__breadcrumb button:hover {
  color: var(--color-primary);
}

.product-details__breadcrumb-current {
  color: var(--color-text-primary);
  font-weight: var(--fw-medium);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 260px;
}

.product-details__grid {
  display: grid;
  grid-template-columns: 55% 1fr;
  gap: var(--space-6);
}

.product-details__info-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.product-details__bestseller {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 5px 12px;
  background-color: var(--color-primary);
  color: #fff;
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  border-radius: var(--radius-pill);
}

.product-details__brand {
  font-size: var(--fs-small);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: var(--fw-medium);
}

.product-details__title {
  font-size: 1.875rem;
  font-weight: var(--fw-bold);
  letter-spacing: -0.01em;
  line-height: 1.25;
}

.product-details__price-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.product-details__price {
  font-size: 2rem;
  font-weight: var(--fw-extrabold);
  color: var(--color-text-primary);
}

.product-details__old-price {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  text-decoration: line-through;
}

.product-details__discount {
  padding: 4px 10px;
  background-color: #fdecec;
  color: var(--color-secondary);
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  border-radius: var(--radius-pill);
}

.product-details__stock {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding: 6px 14px;
  background-color: var(--color-success-bg);
  color: var(--color-success);
  font-size: var(--fs-small);
  font-weight: var(--fw-semibold);
  border-radius: var(--radius-pill);
}

@media (max-width: 768px) {
  .product-details__stock {
    padding: 6px;
  }
}

.product-details__stock::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-success);
}

.product-details__stock--out {
  background-color: #fef3c7;
  color: var(--color-warning);
}

.product-details__stock--out::before {
  background-color: var(--color-warning);
}

.product-details__description {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.product-details__not-found,
.product-details__state-wrap {
  text-align: center;
  padding: var(--space-12) var(--space-3);
}

.product-details__not-found h1 {
  margin-bottom: var(--space-2);
}

.product-details__not-found p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.product-details__state-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

@media (max-width: 1024px) {
  .product-details__grid {
    grid-template-columns: 1fr;
  }
}
</style>
