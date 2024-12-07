<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto bg-teal-700 px-6 pb-4"
    >
      <div class="flex h-16 shrink-0 items-center text-2xl text-emerald-400">
        My<span class="text-lime-400">Blog</span>
      </div>
      <nav class="flex flex-1 flex-col -mx-2 space-y-1">
        <RouterLink
          v-for="item of menu"
          :key="item.name"
          :to="{ name: item.name }"
          :class="[
            route.name == item.name
              ? 'bg-teal-900 text-white'
              : 'text-zinc-200 hover:text-white hover:bg-teal-900',
            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
          ]"
        >
          <component
            :is="item.meta?.icon"
            :class="[
              route.name == item.name
                ? 'text-white'
                : 'text-zinc-200 group-hover:text-white',
              'h-6 w-6 shrink-0',
            ]"
            aria-hidden="true"
          />
          {{ item.meta?.title }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { menu } from '@/router/menu/menu'
const route = useRoute()
</script>
