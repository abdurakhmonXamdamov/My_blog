import { createRouter, createWebHistory } from 'vue-router'
import { menu } from './menu/menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboardPage',
      component: () => import('@/layouts/dashboardLayout.vue'),
      children: [
        ...menu
      ]
    },
    {
      path: '/auth',
      name: 'authLayout',
      component: () => import('@/layouts/authLayout.vue'),
      children: [
        {
          path: '',
          name: 'loginPage',
          component: () => import('@/views/auth/loginPage.vue'),
          meta: {
            title: 'Tizimga kirish'
          }
        },
        {
          path: 'registration',
          name: 'registration',
          component: () => import('@/views/auth/registerPage.vue'),
          meta: {
            title: 'Registratsiyadan O\'tish'
          }
        },
      ]
    }
  ]
})

// router.beforeEach((to, next, from) => {

// })

export default router
