<template>
  <v-card class="mb-4" elevation="2">
    <v-card-title class="d-flex align-center">
      <v-icon color="primary" class="mr-2">mdi-domain</v-icon>
      {{ company.name }}
    </v-card-title>
    <v-card-text>
      <div class="mb-4">
        <div class="text-subtitle-1 mb-2">Company Overview</div>
        <v-list density="compact">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary">mdi-bullhorn</v-icon>
            </template>
            <v-list-item-title>Total Ads: {{ company.ads.length }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon color="primary">mdi-image-multiple</v-icon>
            </template>
            <v-list-item-title>Total Images: {{ getCompanyImages(company) }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
      <div class="mb-4">
        <div class="text-subtitle-1 mb-2">Performance Overview</div>
        <CompanyPerformanceChart
          :data="getPerformanceData(company)"
          :options="polarOptions"
        />
      </div>
      <div class="mt-4">
        <div class="text-subtitle-1 mb-2">Ads</div>
        <v-expansion-panels variant="popout">
          <AdStatisticsPanel
            v-for="ad in company.ads"
            :key="ad.id"
            :ad="ad"
            :getRandomViews="getRandomViews"
            :getRandomLikes="getRandomLikes"
            :getEngagementTrendData="getEngagementTrendData"
            :areaChartOptions="areaChartOptions"
          />
        </v-expansion-panels>
      </div>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import CompanyPerformanceChart from './CompanyPerformanceChart.vue'
import AdStatisticsPanel from './AdStatisticsPanel.vue'
const props = defineProps<{
  company: any,
  getCompanyImages: (company: any) => number,
  getPerformanceData: (company: any) => any,
  polarOptions: any,
  getRandomViews: () => number,
  getRandomLikes: () => number,
  getEngagementTrendData: (ad: any) => any,
  areaChartOptions: any
}>()
</script> 