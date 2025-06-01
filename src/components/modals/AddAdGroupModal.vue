<template>
  <v-dialog v-model="modal" max-width="800px">
    <v-card>
      <v-card-title>Додати групу оголошень</v-card-title>
      <v-card-text>
        <ErrorAlert
          :error="error"
          @close="error = null"
        />
        <v-form ref="form" v-model="isValid">
          <v-text-field
            v-model="localAdGroup.name"
            label="Назва групи оголошень"
            :rules="[(v) => !!v || 'Назва обовʼязкова']"
            required
          />
          <v-select
            v-model="localAdGroup.status"
            label="Статус"
            :items="['enabled', 'paused', 'removed']"
            :rules="[(v) => !!v || 'Статус обовʼязковий']"
            required
          />
          <v-text-field
            v-model.number="localAdGroup.cpc_bid_micros"
            label="Ставка CPC"
            type="number"
            prefix="₴"
            :rules="[
              (v) => !!v || 'Ставка обовʼязкова',
              (v) => v > 0 || 'Ставка має бути більше 0'
            ]"
            required
          />
          <v-select
            v-model="localAdGroup.ad_group_type"
            label="Тип групи оголошень"
            :items="['search_standard', 'search_dynamic', 'display_standard', 'display_smart']"
            :rules="[(v) => !!v || 'Тип групи обовʼязковий']"
            required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="save"
          :loading="loading"
          :disabled="loading"
        >
          Зберегти
        </v-btn>
        <v-btn text @click="close">Скасувати</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAdGroup } from '@/composables/useAdGroup'
import type { AdGroup } from '@/types/googleAds'
import { useCampaignStore } from '@/stores/campaignStore'
import ErrorAlert from '@/components/common/ErrorAlert.vue'

const campaignStore = useCampaignStore()
const adGroupStore = useAdGroup()

const { createAdGroup, error } = useAdGroup()

interface LocalAdGroup {
  name: string;
  status: 'enabled' | 'paused' | 'removed';
  cpc_bid_micros: number;
  ad_group_type: string;
}

const props = defineProps<{
  modelValue: boolean;
  campaignId: number;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save', data: AdGroup): void;
}>()

const modal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const form = ref()
const isValid = ref(false)
const loading = ref(false)

const localAdGroup = ref<LocalAdGroup>({
  name: '',
  status: 'enabled',
  cpc_bid_micros: 0,
  ad_group_type: 'search_standard'
})

async function save() {
  if (!form.value.validate()) return
  
  loading.value = true
  try {
    const response = await createAdGroup(props.campaignId, localAdGroup.value)
    if (response.error) {
      return console.error('Error creating ad group:', response.error)
    }
    await campaignStore.getAllCampaigns()
    close()
  } catch (error) {
    console.error('Error creating ad group:', error)
  } finally {
    loading.value = false
  }
}

function close() {
  modal.value = false
  error.value = null
  localAdGroup.value = {
    name: '',
    status: 'enabled',
    cpc_bid_micros: 0,
    ad_group_type: 'search_standard'
  }
}
</script> 