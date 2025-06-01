<template>
  <v-dialog v-model="modal" max-width="800px">
    <v-card>
      <v-card-title>Add New Ad</v-card-title>
      <v-card-text>
        <ErrorAlert
          :error="error"
          @close="error = null"
        />
        <v-form ref="form" v-model="isValid">
          <v-text-field
            v-model="localAd.name"
            label="Ad Name"
            :rules="[(v) => !!v || 'Name is required']"
            required
            @blur="fetchRecommendedCountriesForAdName"
          />
          <v-select
            v-model="localAd.status"
            label="Status"
            :items="['enabled', 'paused', 'removed']"
            :rules="[(v) => !!v || 'Status is required']"
            required
          />
          <v-select
            v-model="localAd.ad_type"
            label="Ad Type"
            :items="['text', 'image', 'video']"
            :rules="[(v) => !!v || 'Ad Type is required']"
            required
          />
          <v-text-field
            v-model="localAd.final_url"
            label="Final URL"
            :rules="[(v) => !!v || 'Final URL is required']"
            required
          />
          <v-text-field
            v-model="localAd.headline1"
            label="Headline 1"
            :rules="[(v) => !!v || 'Headline 1 is required']"
            required
          />
          <v-text-field
            v-model="localAd.headline2"
            label="Headline 2"
            :rules="[(v) => !!v || 'Headline 2 is required']"
            required
          />
          <v-textarea
            v-model="localAd.description"
            label="Description"
            :rules="[(v) => !!v || 'Description is required']"
            required
            rows="2"
          />
          <v-select
            v-model="localAd.countries"
            label="Countries"
            :items="countryOptions"
            multiple
            chips
            clearable
            :rules="[(v) => v && v.length > 0 || 'At least one country is required']"
            required
            class="mb-2"
          />
          <div v-if="recommendedCountries.length" class="text-caption mb-1">
            <span>Рекомендовані країни:</span>
            <span v-if="Object.keys(recommendedStats).length">
              <span v-for="(count, country, idx) in recommendedStats" :key="country">
                {{ country }}<span v-if="count"> ({{ count }})</span><span v-if="idx < Object.keys(recommendedStats).length - 1">, </span>
              </span>
            </span>
            <span v-else>
              {{ recommendedCountries.join(', ') }}
            </span>
          </div>
          <v-btn
            v-if="recommendedCountries.length"
            color="primary"
            variant="text"
            size="small"
            class="mb-2"
            @click="addRecommendedCountries"
          >
            Додати рекомендовані країни
          </v-btn>
          <v-file-input
            v-model="localAd.image"
            label="Image"
            accept="image/*"
            :rules="[(v) => !v || v.size < 5000000 || 'Image size should be less than 5 MB']"
            prepend-icon="mdi-camera"
            show-size
            counter
          />
          <v-text-field
            v-if="localAd.ad_type === 'video'"
            v-model="localAd.video_url"
            label="Video URL"
            :rules="[(v) => !!v || 'Video URL is required']"
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
import { useAd } from '@/composables/useAd'
import { useCampaignStore } from '@/stores/campaignStore'
import ErrorAlert from '@/components/common/ErrorAlert.vue'
import { useConfig } from '@/composables/useConfig'

const { createAd, error } = useAd()
const campaignStore = useCampaignStore()
const config = useConfig()

interface Ad {
  name: string;
  status: 'enabled' | 'paused' | 'removed';
  ad_type: 'text' | 'image' | 'video';
  final_url: string;
  headline1: string;
  headline2: string;
  description: string;
  image: File | null;
  video_url: string | null;
  countries: string[];
}

const props = defineProps<{
  modelValue: boolean;
  campaignId: number;
  adGroupId: number;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save', data: Ad): void;
}>()

const modal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const form = ref()
const isValid = ref(false)
const loading = ref(false)

const countryOptions = [
  'Ukraine', 'Poland', 'Germany', 'France', 'USA', 'Canada', 'United Kingdom', 'Spain', 'Italy', 'Netherlands', 'Sweden', 'Norway', 'Finland', 'Denmark', 'Czech Republic', 'Austria', 'Switzerland', 'Belgium', 'Portugal', 'Romania', 'Hungary', 'Slovakia', 'Bulgaria', 'Greece', 'Turkey', 'Estonia', 'Latvia', 'Lithuania', 'Ireland', 'Croatia', 'Serbia', 'Slovenia', 'Luxembourg', 'Iceland', 'Malta', 'Cyprus', 'Moldova', 'Georgia', 'Armenia', 'Azerbaijan', 'Kazakhstan', 'Uzbekistan', 'Belarus', 'Russia', 'China', 'Japan', 'South Korea', 'India', 'Australia', 'New Zealand', 'Brazil', 'Argentina', 'Mexico', 'Chile', 'Colombia', 'South Africa', 'Egypt', 'Israel', 'Saudi Arabia', 'UAE', 'Qatar', 'Singapore', 'Thailand', 'Vietnam', 'Malaysia', 'Indonesia', 'Philippines', 'Pakistan', 'Bangladesh', 'Nigeria', 'Kenya', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Sudan', 'Ethiopia', 'Ghana', 'Ivory Coast', 'Cameroon', 'Senegal', 'Angola', 'Mozambique', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe', 'Botswana', 'Namibia', 'Madagascar', 'Mauritius', 'Seychelles', 'Malawi', 'Rwanda', 'Burundi', 'Somalia', 'Congo', 'Gabon', 'Equatorial Guinea', 'Guinea', 'Sierra Leone', 'Liberia', 'Togo', 'Benin', 'Burkina Faso', 'Niger', 'Chad', 'Central African Republic', 'South Sudan', 'Eritrea', 'Djibouti', 'Comoros', 'Sao Tome and Principe', 'Cape Verde', 'Gambia', 'Guinea-Bissau', 'Lesotho', 'Swaziland', 'Western Sahara'
]

const localAd = ref<Ad>({
  name: '',
  status: 'enabled',
  ad_type: 'text',
  final_url: '',
  headline1: '',
  headline2: '',
  description: '',
  image: null,
  video_url: null,
  countries: []
})

const recommendedCountries = ref<string[]>([])
const recommendedStats = ref<Record<string, number>>({})

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const base64 = reader.result.split(',')[1]
        resolve(base64)
      } else {
        reject(new Error('Failed to convert file to base64'))
      }
    }
    reader.onerror = error => reject(error)
  })
}

async function save() {
  if (!form.value.validate()) return
  loading.value = true
  try {
    const adData = {
      ...localAd.value,
      video_url: localAd.value.video_url || undefined,
      image_data: `data:image/jpeg;base64,${localAd.value.image ? await convertFileToBase64(localAd.value.image) : undefined}`
    }
    const response = await createAd(props.campaignId, props.adGroupId, adData)
    if ((response as any)?.error) {
      return console.error('Error creating ad:', (response as any).error)
    }
    await campaignStore.getAllCampaigns()
    close()
  } catch (error) {
    console.error('Error creating ad:', error)
  } finally {
    loading.value = false
  }
}

function close() {
  modal.value = false
}

async function fetchRecommendedCountriesForAdName() {
  if (!localAd.value.name) return
  try {
    const resp = await fetch(`${config.trendsUrl}/trends?keyword=${encodeURIComponent(localAd.value.name)}`)
    const data = await resp.json()
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      const sorted = Object.entries(data as Record<string, number>)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
      recommendedCountries.value = sorted.map(([country]) => country)
      recommendedStats.value = Object.fromEntries(sorted)
    } else if (Array.isArray((data as any).countries)) {
      recommendedCountries.value = (data as any).countries
      recommendedStats.value = {}
    } else {
      recommendedCountries.value = []
      recommendedStats.value = {}
    }
  } catch (e) {
    recommendedCountries.value = []
    recommendedStats.value = {}
  }
}

function addRecommendedCountries() {
  localAd.value.countries = Array.from(new Set([...localAd.value.countries, ...recommendedCountries.value]))
}
</script> 