<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';


import StatsDashboard from '@/components/stats/Dashboard.vue';
import StatsUserRow from '@/components/stats/UserRow.vue';

const authStore = useAuthStore();

const { blockchainStats } = storeToRefs(authStore);

const mockData = [
  {
    name: 'Satoshi Nakamoto',
    place: 1,
    amount: '22 413 550',
  },
  {
    name: 'Valera',
    place: 2,
    amount: '15 235 350',
  },
  {
    name: 'Petya',
    place: 3,
    amount: '13 241 650',
  },
  {
    name: 'Ignat',
    place: 4,
    amount: '12 235 350',
  },
  {
    name: 'Vlad',
    place: 5,
    amount: '9 285 326',
  },
];
</script>

<template>
  <div class="StatsPage">
    <div class="StatsPage__general">
      <h1 class="StatsPage__title">
        Stats
      </h1>

      <StatsDashboard
        :blockchain-stats
      />

      <StatsUserRow
        name="Nickname"
        place="424321"
        amount="50"
        class="StatsPage__main-user-row"
      />

      <div class="StatsPage__list">
        <p class="StatsPage__list-title">
          Top 100 SIGMA
        </p>

        <StatsUserRow
          v-for="(user, index) in mockData"
          :key="index"
          :name="user.name"
          :place="user.place"
          :amount="user.amount"
          class="StatsPage__list-row"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.StatsPage {
  padding-bottom: 24dvh;

  &__title {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.23px;
  }

  &__main-user-row {
    margin-top: 58px;

    background-color: var(--color-grey-darken);
    border-radius: 12px;
  }

  &__list {
    &-title {
      margin-top: 28px;
      margin-bottom: 12px;
      padding: 0 16px;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: -0.23px;
    }

    &-row {
      border-top: 0.5px solid var(--color-divider);
    }
  }
}
</style>
