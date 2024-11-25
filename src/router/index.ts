import { createRouter, createWebHistory } from 'vue-router';
import MiningPage from '@/pages/MiningPage.vue';
import FaqPage from '@/pages/FaqPage.vue';
import UpgradePage from '@/pages/UpgradePage.vue';
import StatsPage from '@/pages/StatsPage.vue';
import FriendsPage from '@/pages/FrinedsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mining',
      component: MiningPage,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqPage,
    },
    {
      path: '/upgrades',
      name: 'upgrade',
      component: UpgradePage,
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsPage,
    },
    {
      path: '/friends',
      name: 'Friends',
      component: FriendsPage,
    },
  ],
});

export default router;
