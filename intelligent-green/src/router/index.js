import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomView from '@/views/RoomView.vue'
import AboutView from '@/views/AboutView.vue'
import PlantsView from '@/views/PlantsView.vue'
import Dashboard from '@/views/Dashboard.vue'
import Analysis from '@/views/Analysis.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/room',
      name: 'room',
      component: RoomView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/plants',
      name: 'plants',
      component: PlantsView
    },
    {
      path: '/dashboard:id',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: Analysis
    }
  ]
})

export default router
