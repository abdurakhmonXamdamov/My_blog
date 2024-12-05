import { api } from "@/helpers/api";
import { defineStore } from "pinia";
import { ref } from "vue";

export const authStore = defineStore('authStore', () => {

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
    try{
        const {data} = await api.post('auth/registration', newUser)
        console.log(data);
    }catch(error){
      console.log("That one is: ", error);
    }
  }

  

  return {
    user, 
    isAuthorized,

    reg,
    login
  }

})