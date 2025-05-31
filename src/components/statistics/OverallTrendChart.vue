<template>
  <div class="chart-wrapper">
    <Line :data="data" :options="options" />
  </div>
</template>
<script setup lang="ts">
import { Line } from 'vue-chartjs'
const props = defineProps<{ data: any, options: any }>()
</script>
<style scoped>
.chart-wrapper {
  height: 300px;
  width: 100%;
  position: relative;
}
</style> 