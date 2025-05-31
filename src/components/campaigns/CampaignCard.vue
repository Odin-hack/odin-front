<template>
  <v-card class="campaign-card">
    <v-card-title class="d-flex justify-space-between align-center">
      {{ campaign.name }}
      <v-btn
        icon
        variant="text"
        @click="$emit('edit', campaign)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <div class="text-subtitle-2 mb-2">Campaign Details</div>
          <v-list density="compact">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-calendar</v-icon>
              </template>
              <v-list-item-title>
                {{ formatDate(campaign.start_date) }} - {{ campaign.end_date ? formatDate(campaign.end_date) : 'No end date' }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-currency-usd</v-icon>
              </template>
              <v-list-item-title>
                Budget: ${{ formatBudget(campaign.budget_amount_micros) }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-target</v-icon>
              </template>
              <v-list-item-title>
                Strategy: {{ formatBiddingStrategy(campaign.bidding_strategy_type) }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <template v-slot:prepend>
                <v-icon>mdi-broadcast</v-icon>
              </template>
              <v-list-item-title>
                Channel: {{ formatChannelType(campaign.advertising_channel_type) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="6">
          <div class="text-subtitle-2 mb-2">Performance</div>
          <v-list density="compact">
            <v-list-item v-if="stats">
              <template v-slot:prepend>
                <v-icon>mdi-eye</v-icon>
              </template>
              <v-list-item-title>
                Impressions: {{ formatNumber(stats.impressions) }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="stats">
              <template v-slot:prepend>
                <v-icon>mdi-cursor-default-click</v-icon>
              </template>
              <v-list-item-title>
                Clicks: {{ formatNumber(stats.clicks) }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="stats">
              <template v-slot:prepend>
                <v-icon>mdi-currency-usd</v-icon>
              </template>
              <v-list-item-title>
                Cost: ${{ formatBudget(stats.cost_micros) }}
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-if="stats">
              <template v-slot:prepend>
                <v-icon>mdi-chart-line</v-icon>
              </template>
              <v-list-item-title>
                Conversions: {{ formatNumber(stats.conversions) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12">
          <v-chip
            :color="getStatusColor(campaign.status)"
            class="mr-2"
          >
            {{ campaign.status }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { Campaign, CampaignStats } from '@/types/googleAds';

const props = defineProps<{
  campaign: Campaign;
  stats?: CampaignStats;
}>();

defineEmits<{
  (e: 'edit', campaign: Campaign): void;
}>();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

const formatBudget = (micros: number) => {
  return (micros / 1000000).toFixed(2);
};

const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num);
};

const formatBiddingStrategy = (strategy: string) => {
  return strategy.replace(/_/g, ' ').toLowerCase();
};

const formatChannelType = (type: string) => {
  return type.replace(/_/g, ' ').toLowerCase();
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ENABLED':
      return 'success';
    case 'PAUSED':
      return 'warning';
    case 'REMOVED':
      return 'error';
    default:
      return 'grey';
  }
};
</script>

<style scoped>
.campaign-card {
  margin-bottom: 16px;
}
</style> 