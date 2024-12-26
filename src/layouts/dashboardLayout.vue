<template>
<div>
    <dashboardSidebar />
    <div class="lg:pl-72">
        <dashboardHeader />
        <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
            <router-view />
        </div>
        </main>
    </div>
</div>
</template>
<script setup>
import dashboardHeader from '@/components/dashboard/dashboardHeader.vue'
import dashboardSidebar from '@/components/dashboard/dashboardSidebar.vue'
</script>
