<script setup lang="ts">
import GeneralStatsCard from '@/components/GeneralStatsCard.vue';
</script>

<template>
  <div class="StatsPage">
    <div class="StatsPage__general">
      <h3 class="SectionTitle">
        Stats
      </h3>

      <GeneralStatsCard />
    </div>
  </div>
</template>

<style scoped lang="scss">
.StatsPage {
  padding-bottom: 24dvh;

  .SectionTitle {
    color: var(--color-primary-white);
  }
}
</style>
