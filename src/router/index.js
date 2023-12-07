import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userList',
      component: UserList
    },
    {
      path: '/user/:id',
      name: 'user-details',
      component: () => import('../views/UserDetails.vue')
    }
  ]
})

export default router
