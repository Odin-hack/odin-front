import { createRouter, createWebHistory } from 'vue-router';
import { authMiddleware } from './middleware/auth';
import AuthLayout from '@/layouts/AuthLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import LoginPage from '@/pages/LoginPage.vue';
import StatisticsPage from '@/pages/StatisticsPage.vue';
import CompaniesPage from '@/pages/CompaniesPage.vue';
import CampaignsPage from '@/pages/CampaignsPage.vue';

const routes = [
  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: LoginPage,
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
        path: 'statistics',
        name: 'Statistics',
        component: StatisticsPage
      },
      {
        path: 'companies',
        name: 'Companies',
        component: CompaniesPage
      },
      {
        path: 'campaigns',
        name: 'campaigns',
        component: CampaignsPage,
        meta: {
          requiresAuth: true,
        },
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(authMiddleware);

export default router;
