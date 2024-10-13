import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pageLayout',
      component: () => import('../views/DynamicPageLayout.vue'),
    },
  ],
})

export default router
