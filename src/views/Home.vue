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
      <form @submit.prevent="onSubmit">
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
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <component :is="currentMessageComponent" :message="message" v-if="message"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
import ComponentsMap from '../services/ComponentsMap'
import ParseService from '../services/ParseService'
import { AisMessage } from "../models/AisMessage"
import Default from '../components/messages/Default.vue'
import PositionReportClassA from '../components/messages/PositionReportClassA.vue'

export default defineComponent({
  name: 'Home',
  props: {
    q: {
      type: String,
      required: false
    }
  },
  components: {
    Default,
    PositionReportClassA
  },
  setup: (props) => {
    const error = ref()
    const message = ref<AisMessage | null>()
    const input = ref()
    const { q } = toRefs(props)
    const currentMessageComponent = ref("Default")

    const router = useRouter()

    function onSubmit() {
      router.push({
        name: 'Home',
        params: { q: input.value } 
      })
    }

    function parse() {
      if (!q || q.value == "") return

      ParseService.parse(q.value)
        .then(res => {
          const aisMessage = res.data as AisMessage
          currentMessageComponent.value = ComponentsMap.getComponentName(aisMessage.messageType)
          message.value = aisMessage
          error.value = null
        })
        .catch(err => {
          message.value = null
          error.value = err.toString()
        })
    }

    watch(q, parse, { immediate: true })

    return { currentMessageComponent, input, error, message, onSubmit }
  }
})
</script>

<style scoped>

</style>
