<template>
<div
    :class="[
    'h-full flex items-center justify-center overflow-hidden dark:bg-gray-900',
    toggle ? 'dark' : ''
    ]"
>
    <router-view />

    <button @click="toggleChange" class="absolute size-9 bottom-8 right-8">
    <SunIcon class="size-6 text-white" v-if="toggle" />
    <MoonIcon class="size-6 text-gray-700" v-if="!toggle" />
    </button>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const toggle = ref(false);

const toggleChange = () => {
    toggle.value = !toggle.value;
    localStorage.setItem('darkMode', toggle.value);
    // applyDarkMode();
};

// const applyDarkMode = () => {
//     document.documentElement.classList.toggle('dark', toggle.value);
// };

// Load the dark mode preference on app initialization
onMounted(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    toggle.value = savedDarkMode === 'true'; 
    // applyDarkMode();
});
</script>
