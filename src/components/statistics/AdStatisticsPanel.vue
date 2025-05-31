<template>
  <v-expansion-panel class="mb-2">
    <v-expansion-panel-title>
      <div class="d-flex align-center">
        <v-icon color="primary" class="mr-2">mdi-bullhorn</v-icon>
        {{ ad.name }}
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list density="compact">
        <v-list-item>
          <template v-slot:prepend>
            <v-icon color="primary">mdi-image</v-icon>
          </template>
          <v-list-item-title>Images: {{ ad.images.length }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon color="primary">mdi-eye</v-icon>
          </template>
          <v-list-item-title>Views: {{ getRandomViews() }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon color="primary">mdi-thumb-up</v-icon>
          </template>
          <v-list-item-title>Likes: {{ getRandomLikes() }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="mt-4">
        <div class="text-subtitle-1 mb-2">Engagement Trend</div>
        <AdEngagementTrendChart
          :data="getEngagementTrendData(ad)"
          :options="areaChartOptions"
        />
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<script setup lang="ts">
import AdEngagementTrendChart from './AdEngagementTrendChart.vue'
const props = defineProps<{
  ad: any,
  getRandomViews: () => number,
  getRandomLikes: () => number,
  getEngagementTrendData: (ad: any) => any,
  areaChartOptions: any
}>()
</script> 