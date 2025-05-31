<template>
  <v-container fluid class="statistics-bg py-8">
    <v-row class="mb-8" justify="center">
      <v-col cols="12" md="2" v-for="tile in summaryTiles" :key="tile.label">
        <v-sheet class="summary-tile" elevation="3">
          <v-icon :color="tile.color" size="36" class="mb-2">{{ tile.icon }}</v-icon>
          <div class="summary-value" :style="{ color: `var(--v-theme-${tile.color})` }">{{ tile.value }}</div>
          <div class="summary-label">{{ tile.label }}</div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-10">
      <v-col cols="12" md="10">
        <v-sheet class="overall-trend-sheet" elevation="2">
          <div class="d-flex align-center mb-4">
            <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
            <span class="overall-trend-title">Загальна статистика</span>
          </div>
          <OverallTrendChart :data="getOverallTrendData()" :options="areaChartOptions" />
        </v-sheet>
      </v-col>
    </v-row>

    <v-row class="company-grid" justify="center">
      <v-col cols="12" md="6" lg="4" v-for="company in companies" :key="company.id">
        <v-sheet class="company-sheet" elevation="2">
          <div class="d-flex align-center mb-2">
            <v-icon color="primary" class="mr-2">mdi-domain</v-icon>
            <span class="company-title">{{ company.name }}</span>
          </div>
          <div class="mb-4 d-flex flex-wrap gap-4">
            <v-chip color="primary" variant="tonal" class="mr-2 mb-2">
              <v-icon start color="primary">mdi-bullhorn</v-icon>
              {{ company.ads.length }} Ads
            </v-chip>
            <v-chip color="info" variant="tonal" class="mr-2 mb-2">
              <v-icon start color="info">mdi-image-multiple</v-icon>
              {{ getCompanyImages(company) }} Images
            </v-chip>
          </div>
          <div class="mb-4">
            <CompanyPerformanceChart
              :data="getPerformanceData(company)"
              :options="polarOptions"
            />
          </div>
          <div>
            <div class="text-subtitle-2 mb-2">Ads</div>
            <v-expansion-panels variant="popout" class="modern-expansion">
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
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import OverallTrendChart from '@/components/statistics/OverallTrendChart.vue'
import CompanyStatisticsCard from '@/components/statistics/CompanyStatisticsCard.vue'
import CompanyPerformanceChart from '@/components/statistics/CompanyPerformanceChart.vue'
import AdStatisticsPanel from '@/components/statistics/AdStatisticsPanel.vue'
import { useStatistics } from '@/composables/useStatistics'

const {
  companies,
  getCompanyImages,
  getTotalAds,
  getTotalImages,
  getTotalViews,
  getTotalLikes,
  getPerformanceData,
  getEngagementTrendData,
  getOverallTrendData,
  getRandomViews,
  getRandomLikes
} = useStatistics()

const polarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 12,
        padding: 15
      }
    }
  },
  scales: {
    r: {
      ticks: {
        display: false
      }
    }
  }
}

const areaChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)'
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  elements: {
    line: {
      tension: 0.4
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}

const summaryTiles = [
  {
    label: 'Companies',
    value: companies.value.length,
    icon: 'mdi-domain',
    color: 'primary'
  },
  {
    label: 'Ads',
    value: getTotalAds(),
    icon: 'mdi-bullhorn',
    color: 'secondary'
  },
  {
    label: 'Images',
    value: getTotalImages(),
    icon: 'mdi-image-multiple',
    color: 'info'
  },
  {
    label: 'Views',
    value: getTotalViews(),
    icon: 'mdi-eye',
    color: 'success'
  },
  {
    label: 'Likes',
    value: getTotalLikes(),
    icon: 'mdi-thumb-up',
    color: 'warning'
  }
]
</script>

<style scoped>
.statistics-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
}
.summary-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 24px 0;
  border-radius: 18px;
  background: white;
  box-shadow: 0 2px 16px 0 rgba(20, 184, 166, 0.08);
  transition: box-shadow 0.2s;
}
.summary-tile:hover {
  box-shadow: 0 4px 32px 0 rgba(20, 184, 166, 0.16);
}
.summary-value {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.summary-label {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 500;
}
.company-grid {
  row-gap: 32px;
}
.company-sheet {
  border-radius: 18px;
  background: white;
  box-shadow: 0 2px 16px 0 rgba(20, 184, 166, 0.08);
  padding: 32px 28px 24px 28px;
  transition: box-shadow 0.2s;
}
.company-sheet:hover {
  box-shadow: 0 4px 32px 0 rgba(20, 184, 166, 0.16);
}
.company-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #0f172a;
}
.modern-expansion {
  background: transparent !important;
  margin-top: 8px;
}
.overall-trend-sheet {
  border-radius: 18px;
  background: white;
  box-shadow: 0 2px 16px 0 rgba(20, 184, 166, 0.08);
  padding: 32px 28px 24px 28px;
  margin-bottom: 16px;
}
.overall-trend-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
}
</style> 