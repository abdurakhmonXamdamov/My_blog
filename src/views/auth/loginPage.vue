<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <button class="text-pink-500 text-2xl rounded-lg bg-slate-700 px-5 py-3" @click="login">
      Submit
    </button>
  </div>
</template>
<script setup>
  import { authStore } from '@/stores/auth/user';
  import { ref } from 'vue';
  const auth_store = authStore()

  const user = ref({
    login: 'admin12345',
    password: "12345"
  })

  async function login(){
      await auth_store.login(user.value)
  }

</script>
<style lang="">
  
</style>