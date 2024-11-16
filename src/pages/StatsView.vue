<script setup lang="ts">
import GeneralStatsCard from '@/components/GeneralStatsCard.vue';
</script>

<template>
  <div class="StatsView">
    <div class="StatsView__general">
      <h3 class="SectionTitle">
        Stats
      </h3>

      <GeneralStatsCard />
    </div>
  </div>
</template>

<style scoped lang="scss">
.StatsView {
  padding-bottom: 24dvh;

  .SectionTitle {
    color: var(--color-primary-white);
  }
}
</style>
