<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2
        class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"
      >
        Ro'yhatdan o'tish
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px]">
      <div class="bg-white px-6 py-12 dark:bg-white/5 shadow sm:rounded-lg sm:px-12">
        <form class="space-y-6" @submit.prevent="reg">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label for="login" class="label"
                >Login</label
              >
              <div class="container__input">
                <AtSymbolIcon class="icon" />
                <input
                  id="login"
                  v-model="user.login"
                  name="login"
                  type="text"
                  autocomplete="login"
                  required=""
                  class="input__in"
                  placeholder="Login manzil"
                />
              </div>
            </div>

            <div>
              <label
                for="password"
                class="label"
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
                  placeholder="Parol kiriting"
                />
              </div>
            </div>

            <div>
              <label for="name" class="label"
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
              <label for="lname" class="label"
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
              <label for="phone" class="label"
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
                  placeholder="Telefon raqam"
                />
              </div>
            </div>

            <div>
              <label for="email" class="label"
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
                  placeholder="Email manzil"
                />
              </div>
            </div>
          </div>

          <div class="grow" for="avatar">
            <label for="avatar" class="label"
              >Avatar</label
            >
            <div class="container__input">
              <ArrowUpTrayIcon class="icon" />
              <input
                id="avatar"
                name="avatar"
                type="file"
                autocomplete="current-avatar"
                @change="fileUpload"
                ref="fileInput"
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

      <p class="mt-10 text-center dark:text-gray-400 text-sm/6 text-gray-500">
        Akkaunt bormi?
        {{ ' ' }}
        <router-link
          :to="{ name: 'loginPage' }"
          class="font-semibold text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 hover:text-indigo-500"
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
import { AtSymbolIcon } from '@heroicons/vue/24/outline'

const auth__Store = authStore()
const user = ref({})
const toggle = ref(false)
const selectedFile = ref(null)
const fileInput = ref(null)


const fileUpload = (e) => {
  const file = e.target.files[0]
  if(file){
    selectedFile.value = file
  }else{
    selectedFile.value = null
  }
}

const reg = () => {
  if(!selectedFile.value){
    alert('Faylni kiriting!')
    return
  }
  const formData = new FormData()
  formData.append('avatar', selectedFile.value)

  for (let key in user.value){
    formData.append(key, user.value[key])
  }
  try{
    auth__Store.reg(formData)
    user.value = {}
    selectedFile.value = null
    fileInput.value.value = ''
  }catch(error){
    console.error('Rigistration muvaffaqiyatsiz tugadi: ', error)
  }
}

const changeToggle = () => {
  toggle.value = !toggle.value
}
</script>

