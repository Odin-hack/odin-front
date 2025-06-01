<template>
  <v-card
    elevation="8"
    rounded="xl"
    class="pa-6 mb-8 company-card"
  >
    <div class="d-flex align-center mb-2">
      <v-icon color="primary" size="36" class="mr-3">mdi-domain</v-icon>
      <span class="text-h5 font-weight-bold">{{ campaign.name }}</span>
      <v-spacer />
      <div class="chips-row">
        <v-chip
          :color="campaign.status === 'enabled' ? 'success' : campaign.status === 'paused' ? 'warning' : 'error'"
          variant="tonal"
          size="small"
          class="mr-3"
        >
          <v-icon start size="18">mdi-circle</v-icon>
          {{ campaign.status === 'enabled' ? 'Активна' : campaign.status === 'paused' ? 'Пауза' : 'Вимкнена' }}
        </v-chip>
        <v-chip color="primary" variant="tonal" size="small" class="mr-3">
          <v-icon start size="18">mdi-bullhorn</v-icon>
          {{ campaign.ad_groups.length }} груп оголошень
        </v-chip>
      </div>
      <v-btn icon size="small" color="primary" class="company-edit-btn" @click="showEditCompany = true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <v-divider class="mb-4" />
    <v-row>
      <v-col cols="12" md="12" v-for="group in campaign.ad_groups" :key="group.id" v-if="campaign.ad_groups.length">
        <AdGroupCard :adGroup="group" />
      </v-col>
      <v-col cols="12" md="12" v-else>
        <p>Груп оголошень не знайдено</p>
      </v-col>
    </v-row>
    <div class="d-flex align-center justify-end mt-4">
      <v-btn
        color="primary"
        variant="tonal"
        class="add-group-btn"
        prepend-icon="mdi-plus-circle"
        @click="showAddAdGroup = true"
      >
        Додати групу оголошень
      </v-btn>
    </div>
    <EditCampaignModal
      :model-value="showEditCompany"
      @update:modelValue="showEditCompany = $event"
      :campaign="campaign"
      @save="onSaveCompany"
    />
    <AddAdGroupModal
      v-model="showAddAdGroup"
      :campaign-id="campaign.id"
      @save="handleAdGroupSave"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdGroupCard from '@/components/cards/AdGroupCard.vue'
import EditCampaignModal from '@/components/modals/EditCampaignModal.vue'
import AddAdGroupModal from '@/components/modals/AddAdGroupModal.vue'
import type { AdGroup } from '@/types/googleAds'

const showAddAdGroup = ref(false)

const showEditCompany = ref(false)
const props = defineProps<{
  campaign: {
    id: string;
    name: string;
    status: 'enabled' | 'paused' | 'removed';
    advertising_channel_type: string;
    start_date: string;
    end_date?: string;
    budget_amount_micros: number;
    bidding_strategy_type: string;
    ad_groups: {
      id: string;
      name: string;
      status: 'enabled' | 'paused' | 'removed';
      images: {
        id: string;
        type: string;
        url: string;
        width: number;
        height: number;
      }[];
    }[];
  }
}>()
const emit = defineEmits(['edit-company'])
function onSaveCompany(updated: { name: string }) {
  emit('edit-company', updated)
}
const handleAdGroupSave = (adGroup: AdGroup) => {
  if (!props.campaign.ad_groups) {
    props.campaign.ad_groups = []
  }
  props.campaign.ad_groups.push(adGroup)
}
</script>

<style scoped>
.company-card {
  background: linear-gradient(135deg, #fdfdfd 0%, #d6dada 100%);
  transition: box-shadow 0.2s;
}
.company-card:hover {
  box-shadow: 0 8px 32px 0 rgba(20, 184, 166, 0.15);
}
.company-edit-btn {
  margin-right: 8px;
}
.add-group-btn {
  min-width: 180px;
  height: 44px;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%);
  border: 1px solid rgba(33, 150, 243, 0.2);
}
.add-group-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.15);
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(33, 150, 243, 0.1) 100%);
}
.add-group-btn .v-icon {
  font-size: 20px;
  margin-right: 8px;
}
.chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
@media (max-width: 600px) {
  .chips-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .chips-row .v-chip {
    margin-right: 0 !important;
    width: 100%;
  }
}
</style> 