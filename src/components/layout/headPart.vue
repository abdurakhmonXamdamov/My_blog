<template>
  <div class="md:flex md:items-center md:justify-between">
    <div class="min-w-0 flex-1">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
      >
        {{ route.meta?.title }}
      </h2>
    </div>
    <div class="mt-4 flex md:ml-4 md:mt-0">
      <button
        @click="open"
        type="button"
        class="ml-3 inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      > Yangi
      {{ route.meta?.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

const open = () => {
  console.log("Opens");
}
</script>