<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between align-center mb-4">
          <h1 class="text-h4">Кампанії</h1>
          <v-btn
            color="primary"
            prepend-icon="mdi-plus"
            @click="showCreateModal = true"
          >
            Створити кампанію
          </v-btn>
        </div>

        <v-alert
          v-if="error"
          type="error"
          class="mb-4"
        >
          {{ error }}
        </v-alert>

        <v-progress-linear
          v-if="loading"
          indeterminate
          class="mb-4"
        />

        <template v-else>
          <div v-if="campaigns.length === 0" class="text-center pa-4">
            <p class="text-h6">Кампанії не знайдено</p>
            <p class="text-body-1">Створіть свою першу кампанію, щоб почати</p>
          </div>

          <template v-else>
            <CampaignCard
              v-for="campaign in campaigns"
              :key="campaign.id"
              :campaign="campaign"
              :stats="campaignStats[campaign.id]"
              @edit="handleEdit"
            />
          </template>
        </template>
      </v-col>
    </v-row>

    <!-- Модальне вікно для створення/редагування кампанії -->
    <CampaignModal
      v-model="showCreateModal"
      :loading="loading"
      @submit="handleCreate"
    />

    <CampaignModal
      v-model="showEditModal"
      :campaign="selectedCampaign"
      :loading="loading"
      @submit="handleUpdate"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCampaignsStore } from '@/stores/campaigns';
import type { Campaign, CampaignCreateData } from '@/types/googleAds';
import CampaignCard from '@/components/campaigns/CampaignCard.vue';
import CampaignModal from '@/components/modals/CampaignModal.vue';

const store = useCampaignsStore();
const { campaigns, loading, error } = storeToRefs(store);

// Стан для модальних вікон
const showCreateModal = ref(false);
const showEditModal = ref(false);
const selectedCampaign = ref<Campaign | null>(null);

// Статистика кампаній
const campaignStats = ref({
  total: 0,
  active: 0,
  paused: 0
});

// Завантаження кампаній при монтуванні компонента
onMounted(async () => {
  await store.fetchCampaigns('123-456-7890'); // Замініть на реальний customer_id
});

// Обробка створення кампанії
const handleCreate = async (data: CampaignCreateData) => {
  try {
    await store.createNewCampaign('123-456-7890', data); // Замініть на реальний customer_id
    showCreateModal.value = false;
  } catch (err) {
    console.error('Error creating campaign:', err);
  }
};

// Обробка редагування кампанії
const handleEdit = (campaign: Campaign) => {
  selectedCampaign.value = campaign;
  showEditModal.value = true;
};

// Обробка оновлення кампанії
const handleUpdate = async (data: CampaignCreateData) => {
  if (selectedCampaign.value) {
    try {
      await store.updateCampaign(
        '123-456-7890', // Замініть на реальний customer_id
        selectedCampaign.value.id,
        data
      );
      showEditModal.value = false;
    } catch (err) {
      console.error('Error updating campaign:', err);
    }
  }
};
</script> 