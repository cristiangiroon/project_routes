import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about/:id',
      name: 'about',
      props: true,
      component: () => import('@/components/About.vue'), // Aquí se usa la carga diferida
    },
  ],
})

export default router
