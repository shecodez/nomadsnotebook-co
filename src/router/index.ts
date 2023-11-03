import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/home-page.vue'
import NotFoundPage from '@/pages/not-found-page.vue'

export const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage,
  },
  {
    component: NotFoundPage,
    name: 'not-found-page',
    path: '/:pathMatch(.*)*',
  },
  // For lazy loading components
  /* {
    path: '/',
    name: 'home-page',
    component: () => import('@/pages/HomePage.vue'),
  }, */
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
