<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <Footer />
</template>

<style scoped>
</style>
