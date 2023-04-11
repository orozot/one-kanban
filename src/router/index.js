import { createRouter, createWebHistory } from 'vue-router';
import { clientRoutes } from '@/router/routes';

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...baseRoutes, ...clientRoutes],
});

export default router;
