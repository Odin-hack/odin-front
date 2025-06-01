<template>
  <v-dialog
    v-model="modal"
    max-width="800px"
  >
    <v-card>
      <v-card-title>
        Редагувати кампанію
      </v-card-title>
      <ErrorAlert
        :error="campaignStore.error"
        @close="campaignStore.error = null"
      />

      <v-card-text>
        <v-form
          ref="campaignForm"
          v-model="isFormValid"
        >
          <v-text-field
            v-model="formData.name"
            label="Назва кампанії"
            :rules="[(v: string) => !!v || 'Назва обовʼязкова']"
            required
          />

          <v-text-field
            v-model.number="formData.budget"
            label="Денний бюджет"
            type="number"
            prefix="$"
            :rules="[
              (v: number) => !!v || 'Бюджет обовʼязковий',
              (v: number) => v > 0 || 'Бюджет має бути більше 0'
            ]"
            required
          />

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="formData.startDate"
                label="Дата початку"
                type="date"
                :rules="[(v: string) => !!v || 'Дата початку обовʼязкова']"
                required
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="formData.endDate"
                label="Дата завершення"
                type="date"
                :min="formData.startDate"
              />
            </v-col>
          </v-row>

          <v-select
            v-model="formData.channelType"
            label="Тип каналу"
            :items="[
              { title: 'Пошук', value: 'search' },
              { title: 'Подорожі', value: 'travel' },
              { title: 'Відео', value: 'video' },
              { title: 'Шопінг', value: 'shopping' },
              { title: 'Локальні послуги', value: 'local_services' }
            ]"
            :rules="[(v: string) => !!v || 'Тип каналу обовʼязковий']"
            required
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey"
          variant="text"
          @click="close"
        >
          Скасувати'
        </v-btn>
        <v-btn
          color="primary"
          :loading="loading"
          :disabled="!isFormValid"
          @click="handleSubmit"
        >
          Зберегти
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Campaign } from '@/types/googleAds';
import { useCampaignStore } from '@/stores/campaignStore';
import ErrorAlert from '@/components/common/ErrorAlert.vue';

const campaignStore = useCampaignStore()
const props = defineProps<{
  modelValue: boolean;
  campaign: Campaign;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'submit', data: any): void;
}>();

const campaignForm = ref({ ...props.campaign });
const isFormValid = ref(false);

const formData = ref({ ...props.campaign });

const channelTypes = [
  'SEARCH',
  'TRAVEL',
  'VIDEO',
  'SHOPPING',
  'LOCAL_SERVICES',
];

const modal = computed({
  get: () => {
    if (props.modelValue) {
      formData.value = {
        name: props.campaign.name,
        budget: props.campaign.budget_amount,
        startDate: props.campaign.start_date,
        endDate: props.campaign.end_date || '',
        channelType: props.campaign.advertising_channel_type,
      };
    }
    return props.modelValue;
  },
  set: (value) => emit('update:modelValue', value),
});

const resetForm = () => {
  formData.value = {
    name: '',
    budget: 0,
    startDate: '',
    endDate: '',
    channelType: '',
  };
  isFormValid.value = false;
};

watch(() => props.campaign, (newCampaign) => {
  if (newCampaign) {
    formData.value = {
      name: newCampaign.name,
      budget: newCampaign.budget_amount / 1000000,
      startDate: newCampaign.start_date,
      endDate: newCampaign.end_date || '',
      channelType: newCampaign.advertising_channel_type,
    };
  } else {
    resetForm();
  }
}, { immediate: true });

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    resetForm();
  }
});

const handleSubmit = async () => {
  const { valid } = await campaignForm.value.validate();
  if (valid) {
    const campaignData = {
      name: formData.value.name,
      budget_amount_micros: formData.value.budget * 1000000,
      start_date: formData.value.startDate,
      end_date: formData.value.endDate || undefined,
      advertising_channel_type: formData.value.channelType,
    };
    emit('submit', campaignData);
    await campaignStore.updateCampaign(props.campaign.id, campaignData)
    resetForm();
    close()
    await campaignStore.getAllCampaigns()
  }
};

const close = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped>
.v-card {
  border-radius: 8px;
}
</style> 