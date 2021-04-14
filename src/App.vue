<template>
  <div class="relative pt-6 pb-16 sm:pb-24">
    <Nav />
    <main class="mt-8 mx-auto max-w-7xl px-4 sm:mt-12">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './components/Nav.vue'

export default defineComponent({
  name: 'App',
  components: {
    Nav
  }
})
</script>

<style>
</style>