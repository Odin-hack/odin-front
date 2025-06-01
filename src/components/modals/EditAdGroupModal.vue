<template>
  <v-dialog v-model="modal" max-width="400">
    <v-card>
      <v-card-title>Редагувати групу оголошень</v-card-title>
      <v-card-text>
        <ErrorAlert
          :error="error"
          @close="error = null"
        />
        <v-form
          ref="form"
          v-model="isValid"
          @submit.prevent="save"
        >
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
          color="grey"
          variant="text"
          @click="close"
        >
          Скасувати
        </v-btn>
        <v-btn
          color="primary"
          :loading="loading"
          :disabled="!isValid"
          @click="save"
        >
          Зберегти
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useAdGroup } from '@/composables/useAdGroup'
import { useCampaignStore } from '@/stores/campaignStore'
import ErrorAlert from '@/components/common/ErrorAlert.vue'

const { updateAdGroup, error } = useAdGroup()
const campaignStore = useCampaignStore()

interface AdGroup {
  id: number;
  campaign_id: number;
  name: string;
  status: 'enabled' | 'paused' | 'removed';
  cpc_bid_micros: number;
  ad_group_type: string;
}

const props = defineProps<{
  modelValue: boolean;
  adGroup: AdGroup;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save'): void;
}>()

const form = ref<HTMLFormElement | null>(null)
const isValid = ref(false)
const loading = ref(false)
const localAdGroup = ref<AdGroup>({ ...props.adGroup })

const modal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

watch(() => props.adGroup, (newAdGroup) => {
  if (newAdGroup) {
    localAdGroup.value = { ...newAdGroup }
  }
}, { immediate: true })

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    localAdGroup.value = { ...props.adGroup }
    error.value = null
  }
})

const close = () => {
  modal.value = false
  error.value = null
}

const save = async () => {
  const { valid } = await form.value?.validate()
  if (valid) {
    loading.value = true
    error.value = null
    try {
      const response = await updateAdGroup(
        props.adGroup.campaign_id,
        props.adGroup.id,
        localAdGroup.value
      )
      console.log(response, 'response');
      if (response.error) {
        return console.error('Error updating ad group:', response.error)
      }
      await campaignStore.getAllCampaigns()
      close()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to update ad group'
    } finally {
      loading.value = false
    }
  }
}
</script> 