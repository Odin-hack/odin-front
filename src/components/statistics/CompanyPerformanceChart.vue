<template>
  <div class="chart-wrapper">
    <PolarArea :data="data" :options="options" />
  </div>
</template>
<script setup lang="ts">
import { PolarArea } from 'vue-chartjs'
const props = defineProps<{ data: any, options: any }>()
</script>
<style scoped>
.chart-wrapper {
  height: 200px;
  width: 100%;
  position: relative;
}
</style> 