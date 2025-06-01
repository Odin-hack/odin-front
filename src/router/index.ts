import { createRouter, createWebHistory } from 'vue-router';
import { authMiddleware } from '@/middleware/auth';
import AuthLayout from '@/layouts/AuthLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import CompaniesPage from '@/pages/CompaniesPage.vue';
import AnalyticsPage from '@/pages/Analytics.vue';

const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'auth',
        component: () => import('@/pages/AuthPage.vue'),
        meta: { requiresAuth: false }
      }
    ]
  },
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'campaigns',
        name: 'campaigns',
        component: CompaniesPage
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: AnalyticsPage
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/auth' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(authMiddleware);

export default router;
