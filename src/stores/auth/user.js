import { api } from "@/helpers/api";
import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";
import { notifStore } from "../data/notIF";

export const authStore = defineStore('authStore', () => {
  
  const notif_Store = notifStore()
  const user = ref({})
  const isAuthorized = ref(false)

  const login  = async (loginUser) => {
    const {data} = api.post('auth/login', loginUser)
    .catch(err => {
      console.log("Error: ", err);
    })
    console.log(data);
  }

  const reg = async (newUser) => {
        const res = await api.post('auth/registration', newUser)
        .catch(err => {
          if(err.response?.data.error == "User exists"){
            notif_Store.setNotif({
              title: 'Bunday Foydalanuvchi mavjud', text: 'Iltimos qayta urinib ko`ring', status: 'error' 
            })
            setTimeout(() => {
              notif_Store.clearNotif()
            }, 3000);
          }
        })
        
        console.log(res.data);
        notif_Store.setNotif({
          title: 'Muvaffaqiyatli ro\'yhatdan o\'tdingiz', text: 'Tizimga kirishingiz mumkun', status: 'success' 
        })
        router.push({name: "loginPage"})
  }

  return {
    user, 
    isAuthorized,
    
    reg,
    login
  }

})