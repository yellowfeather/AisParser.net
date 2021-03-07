<template>
  <div>
    <div class="text-center">
      <div class="relative">
        <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          AISParser.net
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          AISParser.net allows you to parse (or decode) AIS messages.
        </p>
      </div>
      <form @submit.prevent="onParse">
        <div class="mt-5 max-w-2xl mx-auto md:mt-8">
          <div class="sm:flex sm:justify-center ">
            <input type="text"
                  v-model="input"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter AIS message">
            <button type="submit"
                    class="inline-flex items-center justify-center mx-2 px-4 py-2 mt-2 sm:mt-0 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                Parse
            </button>
          </div>
          <p class="mt-2 text-sm text-gray-500 text-left truncate">e.g. !AIVDM,1,1,,B,13GmFd002pwrel@LpMu8L6qn8Vp0,0*56</p>
        </div>
      </form>
    </div>
    <div class="mt-12 max-w-2xl mx-auto text-base bg-white shadow overflow-hidden sm:rounded-lg" v-if="message != null">
      <!-- <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Applicant Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div> -->
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" v-for="(value, name, index) in message" :key="index">
            <dt class="text-sm font-medium text-gray-500">
              {{ name }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import ParseService from '../services/ParseService'

export default defineComponent({
  name: 'Home',
  setup: () => {
    const input = ref("")
    const message = ref()

    function onParse() {
      ParseService.parse(input.value)
        .then(res => {
          message.value = res.data
        })
        .catch(error => {
          console.log("Error: ", error)
        })
    }

    return { input, message, onParse }
  }
})
</script>

<style scoped>

</style>
