import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

// Simulación de autenticación
const isAuthenticated = () => {

  return false;
}

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
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next()
        } else {
          alert('No tienes permiso para acceder a esta página.')
          next({ name: 'home' })
        }
      }

    },
  ],
})

export default router
