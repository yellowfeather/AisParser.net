<template>
  <div class="relative pt-6 pb-16 sm:pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span class="sr-only">AISParser.net</span>
              <img class="h-8 w-auto sm:h-10" src="./assets/ship.svg" alt="AISParser.net logo">
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button type="button" class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!-- Heroicon name: outline/menu -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          <router-link to="/" class="font-medium text-gray-500 hover:text-gray-900">Home</router-link>
          <router-link to="/about" class="font-medium text-gray-500 hover:text-gray-900">About</router-link>
        </div>
      </nav>
    </div>

    <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="./assets/ship.svg" alt="AISParser.net logo">
          </div>
          <div class="-mr-2">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3">
          <router-link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</router-link>
          <router-link to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</router-link>
        </div>
      </div>
    </div>
    <main class="mt-8 mx-auto max-w-7xl px-4 sm:mt-12">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
})
</script>

<style>
</style>