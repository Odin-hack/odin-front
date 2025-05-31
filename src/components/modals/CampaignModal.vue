<template>
  <v-dialog
    v-model="modal"
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        {{ isEdit ? 'Edit Campaign' : 'Create Campaign' }}
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="isValid"
          @submit.prevent="handleSubmit"
        >
          <v-text-field
            v-model="formData.name"
            label="Campaign Name"
            :rules="[v => !!v || 'Name is required']"
            required
          />

          <v-text-field
            v-model.number="formData.budget"
            label="Daily Budget"
            type="number"
            prefix="$"
            :rules="[
              v => !!v || 'Budget is required',
              v => v > 0 || 'Budget must be greater than 0'
            ]"
            required
          />

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="formData.startDate"
                label="Start Date"
                type="date"
                :rules="[v => !!v || 'Start date is required']"
                required
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.endDate"
                label="End Date"
                type="date"
                :min="formData.startDate"
              />
            </v-col>
          </v-row>

          <v-select
            v-model="formData.biddingStrategy"
            label="Bidding Strategy"
            :items="biddingStrategies"
            :rules="[v => !!v || 'Bidding strategy is required']"
            required
          />

          <v-select
            v-model="formData.channelType"
            label="Channel Type"
            :items="channelTypes"
            :rules="[v => !!v || 'Channel type is required']"
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

const props = defineProps<{
  modelValue: boolean;
  campaign?: Campaign;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'submit', data: CampaignCreateData): void;
}>();

const form = ref();
const isValid = ref(false);

const formData = ref<CampaignCreateData>({
  name: '',
  budget: 0,
  startDate: '',
  endDate: '',
  biddingStrategy: '',
  channelType: '',
});

const isEdit = computed(() => !!props.campaign);
const modal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

// Списки для вибору
const biddingStrategies = [
  'MAXIMIZE_CONVERSIONS',
  'MAXIMIZE_CONVERSION_VALUE',
  'TARGET_CPA',
  'TARGET_ROAS',
  'TARGET_SPEND',
];

const channelTypes = [
  'SEARCH',
  'DISPLAY',
  'VIDEO',
  'SHOPPING',
  'MULTI_CHANNEL',
];

// Оновлення форми при редагуванні
watch(() => props.campaign, (newCampaign) => {
  if (newCampaign) {
    formData.value = {
      name: newCampaign.name,
      budget: newCampaign.budget_amount_micros / 1000000,
      startDate: newCampaign.start_date,
      endDate: newCampaign.end_date || '',
      biddingStrategy: newCampaign.bidding_strategy_type,
      channelType: newCampaign.advertising_channel_type,
    };
  } else {
    // Скидання форми при створенні
    formData.value = {
      name: '',
      budget: 0,
      startDate: '',
      endDate: '',
      biddingStrategy: '',
      channelType: '',
    };
  }
}, { immediate: true });

// Відправка форми
const handleSubmit = async () => {
  const { valid } = await form.value.validate();
  if (valid) {
    emit('submit', formData.value);
  }
};
</script> 