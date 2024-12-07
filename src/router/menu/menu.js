import { HomeIcon, BuildingOffice2Icon, ChatBubbleLeftRightIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'

export const menu = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/dashboard/dashboardPage.vue'),
    meta: {
      title: 'Bosh sahifa',
      icon: HomeIcon
    }
  },

  {
    path: 'blog',
    name: 'blog',
    component: () => import('@/views/dashboard/dashboardBlog.vue'),
    meta: {
      title: 'Bloglar',
      icon: BuildingOffice2Icon,
      name: 'Blog'
    }
  },

  {
    path: 'comments',
    name: 'comments',
    component: () => import('@/views/dashboard/dashboardComment.vue'),
    meta: {
      title: 'Comentariyalar',
      icon: ChatBubbleLeftRightIcon,
      name: 'Comment'
    }
  },
]

export const settings = [
  {
    path: 'setting',
    name: 'setting',
    component: () => import('@/views/dashboard/dashboardComment.vue'),
    meta: {
      title: 'Sozlamalar',
      icon: Cog6ToothIcon
    }
  },
]
