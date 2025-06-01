<template>
  <div class="analytics-page">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h4 mb-6">Analytics Overview</h1>
        </v-col>
      </v-row>

      <!-- Performance Metrics -->
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="analytics-card" elevation="2">
            <v-card-text>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" size="large" class="mr-3">mdi-bullhorn</v-icon>
                <div class="text-h6">Total Campaigns</div>
              </div>
              <div class="text-h4 font-weight-bold primary--text">{{ overview?.data?.total_campaigns || 0 }}</div>
              <div class="d-flex align-center mt-2">
                <v-icon color="success" size="small" class="mr-1">mdi-check-circle</v-icon>
              <div class="text-caption text-grey">
                  Active: {{ overview?.data?.active_campaigns || 0 }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="analytics-card" elevation="2">
            <v-card-text>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" size="large" class="mr-3">mdi-account-group</v-icon>
                <div class="text-h6">Total Ad Groups</div>
              </div>
              <div class="text-h4 font-weight-bold primary--text">{{ overview?.data?.total_ad_groups || 0 }}</div>
              <div class="d-flex align-center mt-2">
                <v-icon color="success" size="small" class="mr-1">mdi-check-circle</v-icon>
              <div class="text-caption text-grey">
                  Active: {{ overview?.data?.active_ad_groups || 0 }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="analytics-card" elevation="2">
            <v-card-text>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" size="large" class="mr-3">mdi-advertisement</v-icon>
                <div class="text-h6">Total Ads</div>
              </div>
              <div class="text-h4 font-weight-bold primary--text">{{ overview?.data?.total_ads || 0 }}</div>
              <div class="d-flex align-center mt-2">
                <v-icon color="success" size="small" class="mr-1">mdi-check-circle</v-icon>
                <div class="text-caption text-grey">
                  Active: {{ overview?.data?.active_ads || 0 }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Campaign Status -->
      <v-row class="mt-6">
        <v-col cols="12">
          <v-card elevation="2" class="campaign-card">
            <v-card-title class="d-flex align-center">
              <v-icon color="warning" class="mr-2">mdi-clock-alert</v-icon>
              Campaigns Ending Soon
              <v-spacer></v-spacer>
              <v-chip color="warning" variant="outlined" class="ml-2">
                {{ endingSoon?.length || 0 }} campaigns
              </v-chip>
            </v-card-title>
            <v-card-text>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">End Date</th>
                    <th class="text-right">Budget</th>
                    <th class="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="campaign in endingSoon" :key="campaign.id" class="campaign-row">
                    
                    <td class="text-left font-weight-medium">{{ campaign.name }}</td>
                    <td class="text-left">
                      <div class="d-flex align-center">
                        <v-icon color="warning" size="small" class="mr-1">mdi-calendar</v-icon>
                        {{ campaign.end_date }}
                      </div>
                    </td>
                    <td class="text-right font-weight-medium">{{ formatCurrency(campaign.budget_amount) }}</td>
                    <td class="text-center">
                      <v-chip
                        :color="campaign.status === 'enabled' ? 'success' : 'warning'"
                        size="small"
                        class="status-chip"
                        variant="flat"
                      >
                        {{ campaign.status }}
                      </v-chip>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Empty Campaigns -->
      <v-row class="mt-6">
        <v-col cols="12">
          <v-card elevation="2" class="campaign-card">
            <v-card-title class="d-flex align-center">
              <v-icon color="error" class="mr-2">mdi-alert-circle</v-icon>
              Empty Campaigns
              <v-spacer></v-spacer>
              <v-chip color="error" variant="outlined" class="ml-2">
                {{ emptyCampaigns?.length || 0 }} campaigns
              </v-chip>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-table density="comfortable" hover>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Start Date</th>
                    <th class="text-left">End Date</th>
                    <th class="text-right">Budget</th>
                    <th class="text-center status-column">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="campaign in emptyCampaigns" :key="campaign.id" class="campaign-row">
                    <td class="text-left font-weight-medium">{{ campaign.name }}</td>
                    <td class="text-left">
                      <div class="d-flex align-center">
                        <v-icon color="primary" size="small" class="mr-1">mdi-calendar-start</v-icon>
                        {{ campaign.start_date }}
                      </div>
                    </td>
                    <td class="text-left">
                      <div class="d-flex align-center">
                        <v-icon color="warning" size="small" class="mr-1">mdi-calendar-end</v-icon>
                        {{ campaign.end_date }}
                      </div>
                    </td>
                    <td class="text-right font-weight-medium">{{ formatCurrency(campaign.budget_amount) }}</td>
                    <td class="text-center status-column">
                      <div class="status-wrapper">
                        <v-chip
                          :color="campaign.status === 'enabled' ? 'success' : 'warning'"
                          size="small"
                          class="status-chip"
                          variant="flat"
                          density="comfortable"
                        >
                          {{ campaign.status }}
                        </v-chip>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnalytics } from '@/composables/useAnalytics'

// API hooks
const { getOverview, getEndingSoon, getEmptyCampaigns } = useAnalytics()

const overview = ref<AnalyticsOverview | null>(null)
const endingSoon = ref<Campaign[]>([])
const emptyCampaigns = ref<Campaign[]>([])
const loading = ref(true)

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

onMounted(async () => {
  try {
    const [overviewData, endingSoonData, emptyCampaignsData] = await Promise.all([
      getOverview(),
      getEndingSoon(),
      getEmptyCampaigns()
    ])
    overview.value = overviewData.data
    endingSoon.value = endingSoonData.data
    emptyCampaigns.value = emptyCampaignsData.data
  } catch (error) {
    console.error('Error loading analytics data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.analytics-page {
  padding: 24px 0;
  background-color: #f5f5f5;
}
.analytics-card {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}
.analytics-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
}
.campaign-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.campaign-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
}
.campaign-row {
  transition: background-color 0.2s;
}
.campaign-row:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
.status-chip {
  min-width: 80px;
  justify-content: center;
  font-weight: 500;
}
.status-column {
  padding: 0 16px !important;
  width: 120px;
}
.status-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
}
:deep(.v-card-title) {
  font-size: 1.25rem;
  font-weight: 500;
  padding: 16px 24px;
}
:deep(.v-card-text) {
  padding: 16px 24px;
}
:deep(.v-table) {
  background: transparent;
}
:deep(.v-table .v-table__wrapper > table) {
  border-collapse: separate;
  border-spacing: 0 4px;
}
:deep(.v-table .v-table__wrapper > table > thead > tr > th) {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  padding: 12px 16px;
}
:deep(.v-table .v-table__wrapper > table > tbody > tr > td) {
  padding: 12px 16px;
}
</style> 