import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// made-in componenets 
import notifiCation from "@/components/layout/notifiCation.vue"

const app = createApp(App)

app.component('notifiCation', notifiCation)
app.use(createPinia())
app.use(router)

app.mount('#app')
