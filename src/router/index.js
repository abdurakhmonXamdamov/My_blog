import { createRouter, createWebHistory } from 'vue-router'
import { menu } from './menu/menu'
import { authStore } from '@/stores/auth/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboardPage',
      component: () => import('@/layouts/dashboardLayout.vue'),
      children: [
        ...menu,
          {
            path: 'blog/add',
            name: 'add-blogs',
            component: () => import('@/views/dashboard/blog/addBlog.vue'),
            meta: {title: "Yangilik qo'shish", var: 'news'},
          }
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
            title: 'Ro\'yhatdan O\'tish'
          }
        },
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const store = authStore()

  document.title = `MyBlog | ${to.meta?.title}`
  if(['registration', 'loginPage'].includes(to.name) || store.isAuthorized){
    next()
  }else {
    if(localStorage.getItem('token')){
      await store.checkUser()
      next()
    }else{
      next({name: 'registration'})
    }
  }
})

export default router
