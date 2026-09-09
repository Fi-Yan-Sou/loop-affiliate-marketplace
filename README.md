# Loop — Affiliate Clothing Marketplace

A premium, production-ready Vue 3 + Vite affiliate marketplace that curates clothing from eBay and Depop. No products are sold on-site — every Buy button redirects to the corresponding affiliate listing.

## Tech Stack
- Vue.js 3 (Composition API, `<script setup>` only)
- Vite
- Vue Router 4 (lazy-loaded routes)
- Vanilla CSS (no UI libraries, 8px spacing system, CSS custom properties)

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/            static assets
  components/        one folder per reusable component (Navbar, FilterBar,
                      CaseStudy, BestSellerSlider, ProductCard, ProductGallery,
                      ColorSelector, SizeSelector, QuantitySelector, BuyButtons,
                      ProductTabs, RelatedProducts, Footer)
  composables/        useCarousel.js — shared carousel/drag logic
  views/              Home.vue, ProductDetails.vue, NotFound.vue
  router/             Vue Router config with lazy-loaded routes
  data/               products.js (24 dummy products), categories.js, brands.js
  services/           api.js — single integration point for swapping dummy
                      data for the real eBay Browse API / Depop feed later
  utils/              helpers.js — affiliate URL builder, price formatter
  styles/             variables.css (design tokens), global.css
  App.vue
  main.js
```

## Connecting Real Data Later

1. Implement the real fetch calls inside `src/services/api.js` (the function
   signatures already match what components expect).
2. Flip `USE_LIVE_API` to `true` in that file once endpoints/credentials are ready.
3. Normalize the eBay Browse API / Depop response into the same product shape
   used in `src/data/products.js` (id, title, brand, category, gender,
   description, currentPrice, oldPrice, discount, rating, reviewCount, stock,
   colors, sizes, images[4], ebayAffiliateUrl, depopAffiliateUrl).

No component code needs to change — everything already consumes data through
props and the local `data/` / `services/` layer.

## Notes
- Product images are stock placeholders sourced from picsum.photos (seeded per
  product for consistency) — swap for real listing images once connected to
  live data.
- This environment could not run `npm install` (no network access), so the
  build has been verified statically (import resolution + SFC structure).
  Run `npm install && npm run dev` locally to see it live.
