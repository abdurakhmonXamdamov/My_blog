<template>
  <div class="md:flex md:items-center md:justify-between">
    <div class="min-w-0 flex-1">
      <h2
        class="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight"
      >
        {{ route.meta?.title }}
      </h2>
    </div>
    <div class="mt-4 flex md:ml-4 md:mt-0">
      <slot/>
      <router-link 
        type="button"
        v-if="routerName"
        :to="{name: routerName}"
        class="btn"
      > Yangi
      {{ route.meta?.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

defineProps({
  routerName: String,
  routerTitle: String,
  comeBack: String,

  toggleBtn: {
    type: Boolean,
    default: true
  }
})

</script>