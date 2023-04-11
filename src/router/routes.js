export const clientRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      label: 'Home',
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/setting/index.vue'),
    meta: {
      label: 'Settings',
    },
  },
];
