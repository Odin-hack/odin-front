<template>
  <v-dialog
    v-model="modal"
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        {{ isEdit ? 'Редагувати кампанію' : 'Створити кампанію' }}
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="isValid"
          @submit.prevent="handleSubmit"
        >
          <v-text-field
            v-model="formData.name"
            label="Назва кампанії"
            :rules="[v => !!v || 'Назва обовʼязкова']"
            required
          />

          <v-text-field
            v-model.number="formData.budget"
            label="Щоденний бюджет"
            type="number"
            prefix="₴"
            :rules="[
              v => !!v || 'Бюджет обовʼязковий',
              v => v > 0 || 'Бюджет має бути більше 0'
            ]"
            required
          />

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="formData.startDate"
                label="Дата початку"
                type="date"
                :rules="[v => !!v || 'Дата початку обовʼязкова']"
                required
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.endDate"
                label="Дата закінчення"
                type="date"
                :min="formData.startDate"
              />
            </v-col>
          </v-row>

          <v-select
            v-model="formData.channelType"
            :items="[
                      { title: 'Пошук', value: 'search' },
                      { title: 'Подорожі', value: 'travel' },
                      { title: 'Відео', value: 'video' },
                      { title: 'Шопінг', value: 'shopping' },
                      { title: 'Локальні послуги', value: 'local_services' }
                    ]"
            item-title="title"
            item-value="value"
            :rules="[v => !!v || 'Тип каналу обовʼязковий']"
            required
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey"
          variant="text"
          @click="$emit('update:modelValue', false)"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          :loading="loading"
          :disabled="!isValid"
          @click="handleSubmit"
        >
          {{ isEdit ? 'Save' : 'Create' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Campaign, CampaignCreateData } from '@/types/googleAds';
import { useCampaignStore } from '@/stores/campaignStore';

const campaignStore = useCampaignStore();
const props = defineProps<{
  modelValue: boolean;
  campaign?: Campaign;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'submit', data: CampaignCreateData): void;
}>();

const form = ref({
  name: '',
  budget: 0,
  startDate: '',
  endDate: '',
  biddingStrategy: 'MAXIMIZE_CONVERSIONS',
  channelType: 'SEARCH'
});

const isValid = ref(false);

const isEdit = computed(() => !!props.campaign);
const modal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const biddingStrategies = [
  { title: 'Maximize Conversions', value: 'MAXIMIZE_CONVERSIONS' },
  { title: 'Target CPA', value: 'TARGET_CPA' },
  { title: 'Target ROAS', value: 'TARGET_ROAS' }
];

const channelTypes = [
  { title: 'Search', value: 'SEARCH' },
  { title: 'Display', value: 'DISPLAY' },
  { title: 'Video', value: 'VIDEO' }
];

watch(() => props.campaign, (newCampaign) => {
  if (newCampaign) {
    form.value = {
      name: newCampaign.name,
      budget: newCampaign.budget_amount_micros / 1000000,
      startDate: newCampaign.start_date,
      endDate: newCampaign.end_date || '',
      biddingStrategy: newCampaign.bidding_strategy_type,
      channelType: newCampaign.advertising_channel_type
    };
  } else {
    resetForm();
  }
}, { immediate: true });

const resetForm = () => {
  form.value = {
    name: '',
    budget: 0,
    startDate: '',
    endDate: '',
    biddingStrategy: 'MAXIMIZE_CONVERSIONS',
    channelType: 'SEARCH'
  };
};

const handleSubmit = async () => {
  try {
    const data = {
      name: form.value.name,
      budget: form.value.budget,
      startDate: form.value.startDate,
      endDate: form.value.endDate || undefined,
      biddingStrategy: form.value.biddingStrategy,
      channelType: form.value.channelType
    };
    if (isEdit.value) {
      await campaignStore.updateCampaign(props.campaign.id, data);
    } else {
      await campaignStore.createCampaign(data);
    }
    resetForm();
  } catch (error) {
    console.error('Error saving campaign:', error);
  }
};
</script> 