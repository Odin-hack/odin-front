import { createRouter, createWebHistory } from 'vue-router';
import MiningView from '@/pages/MiningView.vue';
import FaqView from '@/pages/FaqView.vue';
import UpgradeView from '@/pages/UpgradeView.vue';
import StatsView from '@/pages/StatsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mining',
      component: MiningView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/upgrades',
      name: 'upgrade',
      component: UpgradeView,
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView,
    },
  ],
});

export default router;
