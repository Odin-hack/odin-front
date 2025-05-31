<template>
  <v-card
    elevation="8"
    rounded="xl"
    class="pa-6 mb-8 company-card"
  >
    <div class="d-flex align-center mb-2">
      <v-icon color="primary" size="36" class="mr-3">mdi-domain</v-icon>
      <span class="text-h5 font-weight-bold">{{ company.name }}</span>
      <v-spacer />
      <v-chip color="primary" variant="tonal" size="small" class="mr-3">
        <v-icon start size="18">mdi-bullhorn</v-icon>
        {{ company.ads.length }} ads
      </v-chip>
      <v-btn icon size="small" color="primary" class="company-edit-btn" @click="showEditCompany = true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <v-divider class="mb-4" />
    <v-row>
      <v-col cols="12" md="12" v-for="ad in company.ads" :key="ad.id">
        <AdCard :ad="ad" />
      </v-col>
    </v-row>
    <EditCompanyModal
      :model-value="showEditCompany"
      @update:modelValue="showEditCompany = $event"
      :company="company"
      @save="onSaveCompany"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdCard from '@/components/cards/AdCard.vue'
import EditCompanyModal from '@/components/modals/EditCompanyModal.vue'
const showEditCompany = ref(false)
const props = defineProps<{
  company: {
    name: string
    ads: { id: number, name: string, images: string[] }[]
  }
}>()
const emit = defineEmits(['edit-company'])
function onSaveCompany(updated: { name: string }) {
  emit('edit-company', updated)
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
</style> 