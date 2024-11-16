<script setup lang="ts">
import { markRaw, ref } from 'vue';

import IconMining from '@/components/Icon/mining.vue';
import IconUpgrades from '@/components/Icon/upgrades.vue';
import IconUsers from '@/components/Icon/users.vue';
import IconFaq from '@/components/Icon/faq.vue';

const tabs = ref([
  {
    path: '/',
    icon: markRaw(IconMining),
    name: 'Mining',
  },
  {
    path: '/upgrades',
    icon: markRaw(IconUpgrades),
    name: 'Upgrades',
  },
  {
    path: '/stats',
    icon: markRaw(IconUsers),
    name: 'Stats',
  },
  {
    path: '/faq',
    icon: markRaw(IconFaq),
    name: 'FAQ',
  },
]);
</script>

<template>
  <div class="Navigation">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.path"
      class="Navigation__tab"
      :to="tab.path"
    >
      <component
        :is="tab.icon"
        size="18"
      />

      <p>
        {{ tab.name }}
      </p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.Navigation {
  position: fixed;
  bottom: 0;
  padding-bottom: 14px;
  left: 0;
  background-color: var(--color-surface-dark);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  &__tab {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 14px 0 14px 0;
    align-items: center;
    color: var(--color-grey-secondary);
  }
}

.router-link-active {
  color: var(--color-primary-blue);
}
</style>
