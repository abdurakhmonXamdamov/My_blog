<template>
  <div class="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Tizimga kirish
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="login" class="block text-sm/6 font-medium text-gray-900 dark:text-white"
            >Login</label
          >
          <div class="mt-2">
            <input
              type="login"
              required
              placeholder="Login manzil"
              v-model="user.login"
              name="login"
              id="login"
              autocomplete="login-password"
              class="input"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >Maxfiy kalit</label
            >
          </div>
          <div class="mt-2">
            <input
              type="password"
              required
              placeholder="Parol kiriting"
              v-model="user.password"
              name="password"
              id="password"
              autocomplete="current-password"
              class="input"
            />
          </div>
        </div>

        <div>
          <button type="submit" class="submit__btn">Kirish</button>
        </div>
      </form>
      <p class="mt-10 text-center dark:text-gray-400 text-sm/6 text-gray-500">
        Akkaunt yo'qmi?
        {{ ' ' }}
        <router-link
          :to="{ name: 'registration' }"
          class="font-semibold text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 hover:text-indigo-500"
          >Ro'yhatdan o'tish</router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { authStore } from '@/stores/auth/user'

const auth__Store = authStore()
const user = ref({})

const login = () => {
  auth__Store.login(user.value)
  user.value = {}
}
</script>
