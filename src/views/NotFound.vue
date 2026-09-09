<script setup>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar/Navbar.vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <Navbar />
    <main class="container not-found__main">
      <p class="not-found__code">404</p>
      <h1 class="not-found__title">Page Not Found</h1>
      <p class="not-found__text">The page you're looking for doesn't exist or has been moved.</p>
      <button type="button" class="btn btn-primary" @click="goHome">Back to Home</button>
    </main>
  </div>
</template>

<style scoped>
.not-found__main {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-12) var(--space-3);
}

.not-found__code {
  font-size: 5rem;
  font-weight: var(--fw-extrabold);
  color: var(--color-primary);
  line-height: 1;
}

.not-found__title {
  margin-top: var(--space-2);
  margin-bottom: var(--space-1);
}

.not-found__text {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}
</style>
