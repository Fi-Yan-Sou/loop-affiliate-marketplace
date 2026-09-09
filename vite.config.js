import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: "Fi-Yan-Sou-loop-affiliate",
  server: {
    port: 5173
  }
})
