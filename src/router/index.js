import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'general',
      component: () => import('../views/GeneralView.vue')
    }
    
  ],
})

export default router
