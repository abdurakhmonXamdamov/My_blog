<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2
        class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Ro'yhatdan o'tish
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px]">
      <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form class="space-y-6" @submit.prevent="reg">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label for="login" class="block text-base leading-6 text-gray-900"
                >Login</label
              >
              <div class="container__input">
                <UserIcon class="icon" />
                <input
                  id="login"
                  v-model="user.login"
                  name="login"
                  type="text"
                  autocomplete="login"
                  required=""
                  class="input__in"
                  placeholder="Loginni kiriting"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-base leading-6 text-gray-900"
                >Maxfiy kalit</label
              >
              <div class="container__input">
                <div @click="changeToggle">
                  <EyeIcon class="icon" v-if="toggle" />
                  <EyeSlashIcon class="icon" v-else />
                </div>
                <input
                  id="password"
                  v-model="user.password"
                  name="password"
                  :type="toggle ? 'text' : 'password'"
                  autocomplete="current-password"
                  required=""
                  class="input__in"
                  placeholder="Parolingizni kiriting"
                />
              </div>
            </div>

            <div>
              <label for="name" class="block text-base leading-6 text-gray-900"
                >Foydalanuvchi nomi</label
              >
              <div class="container__input">
                <UserIcon class="icon" />
                <input
                  id="name"
                  v-model="user.name"
                  name="name"
                  type="text"
                  autocomplete="current-name"
                  required=""
                  class="input__in"
                  placeholder="Ismingizni kiriting"
                />
              </div>
            </div>

            <div>
              <label for="lname" class="block text-base leading-6 text-gray-900"
                >Foydalanuvchi sharifi</label
              >
              <div class="container__input">
                <UserCircleIcon class="icon" />
                <input
                  id="lname"
                  v-model="user.lname"
                  name="lname"
                  type="text"
                  autocomplete="current-lname"
                  required=""
                  class="input__in"
                  placeholder="Familiyangizni kiriting"
                />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-base leading-6 text-gray-900"
                >Telefon raqam</label
              >
              <div class="container__input">
                <PhoneIcon class="icon" />
                <input
                  id="phone"
                  v-maska="'+998 (##) ###-##-##'"
                  v-model="user.phone"
                  name="phone"
                  type="tel"
                  autocomplete="current-phone"
                  required=""
                  class="input__in"
                  placeholder="+998 (XX) XXX-XX-XX"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-base leading-6 text-gray-900"
                >Email manzil</label
              >
              <div class="container__input">
                <EnvelopeIcon class="icon" />
                <input
                  id="email"
                  v-model="user.email"
                  name="email"
                  type="email"
                  autocomplete="current-email"
                  required=""
                  class="input__in"
                  placeholder="Email manzilingizni kiriting"
                />
              </div>
            </div>
          </div>

          <div class="grow" for="avatar">
            <label for="avatar" class="block text-base leading-6 text-gray-900"
              >Avatar</label
            >
            <div class="container__input">
              <ArrowUpTrayIcon class="icon" />
              <input
                id="avatar"
                name="avatar"
                type="file"
                autocomplete="current-avatar"
                required=""
                class="input__in"
                placeholder="Rasmni yuklang"
              />
            </div>
          </div>

          <div>
            <button type="submit" class="submit__btn">Sign in</button>
          </div>
        </form>
      </div>

      <p class="mt-9 text-center text-sm text-gray-500">
        Akkaunt bormi?
        {{ ' ' }}
        <router-link
          :to="{ name: 'loginPage' }"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Tizimga kirish</router-link
        >
      </p>
    </div>
  </div>
</template>
<script setup>
import { authStore } from '@/stores/auth/user'
import { ref } from 'vue'
import { vMaska } from 'maska/vue'
import { UserIcon } from '@heroicons/vue/24/solid'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { EyeIcon } from '@heroicons/vue/24/solid'
import { EyeSlashIcon } from '@heroicons/vue/24/solid'
import { PhoneIcon } from '@heroicons/vue/24/solid'
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
import { ArrowUpTrayIcon } from '@heroicons/vue/24/solid'

const auth__Store = authStore()
const user = ref({})
const toggle = ref(false)

const reg = () => {
  console.log(user.value)
  auth__Store.reg(user.value)
  user.value = {}
}

const changeToggle = () => {
  toggle.value = !toggle.value
}

</script>
