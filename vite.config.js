import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: "/loop-affiliate-marketplace/",
  server: {
    port: 5173
  }
})
