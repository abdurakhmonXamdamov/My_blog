import { api } from '@/helpers/api'
import router from '@/router'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { notifStore } from '../data/notIF'

export const authStore = defineStore('authStore', () => {
  const notif_Store = notifStore()
  const user = ref({})
  const isAuthorized = ref(false)

  const login = async loginUser => {
    try {
      const { data } = await api.post('auth/login', loginUser)
      console.log(data)
      if (data?.token) {
        localStorage.setItem('token', data.token)
        isAuthorized.value = true
        user.value = { ...data.user }
        router.push({ name: 'home' })
        notif_Store.setNotif({
          title: 'Xush kelibsiz',
        })
      } else {
        notif_Store.setNotif({
          title: 'Login Muvaffaqiyatsizlikga uchradi',
          text: "Token kelmadi. Qayta urinib ko'ring.",
          status: 'error',
        })
      }
    } catch (err) {
      console.error('Error:', err)
      notif_Store.setNotif({
        title: err.response?.data?.message || 'Login Error',
        text: 'Iltimos qayta urinib ko`ring',
        status: 'error',
      })
    }
  }

  const reg = async (newUser) => {
    try {
      const res = await api.post('auth/registration', newUser);
      console.log("Registration successful: ", res);
  
      notif_Store.setNotif({
        title: "Muvaffaqiyatli ro'yhatdan o'tdingiz",
        text: 'Tizimga kirishingiz mumkun',
        status: 'success',
      });
  
      router.push({ name: 'loginPage' });
    } catch (err) {
      console.log("Error from fetching: ", err);
  
      if (err.response?.data.error === 'User exists') {
        notif_Store.setNotif({
          title: 'Bunday Foydalanuvchi mavjud',
          text: 'Iltimos qayta urinib ko`ring',
          status: 'error',
        });
      } else {
        notif_Store.setNotif({
          title: 'Xatolik yuz berdi',
          text: 'Qayta urinib ko`ring',
          status: 'error',
        });
      }
    }
  };
  

  const logout = async () => {
    localStorage.removeItem('token')
    user.value = {}
    isAuthorized.value = false
    router.push({ name: 'loginPage' })
    notif_Store.setNotif({
      title: 'Tizimdan chiqdingiz',
      status: 'error',
    })
  }

  const checkUser = async () => {
    const { data } = await api.get('auth/checkuser').catch(() => {
      logout()
    })

    user.value = { ...data.user }
    isAuthorized.value = true
  }

  return {
    user,
    isAuthorized,

    reg,
    login,
    logout,
    checkUser,
  }
})
