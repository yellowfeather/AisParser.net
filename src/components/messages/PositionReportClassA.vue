<template>
    <div class="mt-12 max-w-2xl mx-auto">
      <h1 class="text-xl">Position Report Class A</h1>
      <div class=" text-base bg-white shadow overflow-hidden sm:rounded-lg">
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
import { defineComponent } from 'vue'
import { PositionReportClassA } from '../../models/PositionReportClassA'

export default defineComponent({
    props: {
        message: {
            type: Object as () => PositionReportClassA,
            required: true
        }        
    },
    setup(props) {
        return props.message
    }
})
</script>
