<template>
  <v-dialog v-model="modal" max-width="800px">
    <v-card>
      <v-card-title>Add New Ad Group</v-card-title>
      <v-card-text>
        <ErrorAlert
          :error="error"
          @close="error = null"
        />
        <v-form ref="form" v-model="isValid">
          <v-text-field
            v-model="localAdGroup.name"
            label="Ad Group Name"
            :rules="[(v) => !!v || 'Name is required']"
            required
          />
          <v-select
            v-model="localAdGroup.status"
            label="Status"
            :items="['enabled', 'paused', 'removed']"
            :rules="[(v) => !!v || 'Status is required']"
            required
          />
          <v-text-field
            v-model.number="localAdGroup.cpc_bid_micros"
            label="CPC Bid"
            type="number"
            prefix="$"
            :rules="[
              (v) => !!v || 'CPC Bid is required',
              (v) => v > 0 || 'CPC Bid must be greater than 0'
            ]"
            required
          />
          <v-select
            v-model="localAdGroup.ad_group_type"
            label="Ad Group Type"
            :items="['search_standard', 'search_dynamic', 'display_standard', 'display_smart']"
            :rules="[(v) => !!v || 'Ad Group Type is required']"
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
          Save
        </v-btn>
        <v-btn text @click="close">Cancel</v-btn>
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
}
</script> 