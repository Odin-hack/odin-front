<template>
  <v-dialog v-model="modal" max-width="800px">
    <v-card>
      <v-card-title>Редагувати оголошення</v-card-title>
      <v-card-text>
        <ErrorAlert
          :error="error"
          @close="error = null"
        />
        <v-form ref="form" v-model="isValid">
          <v-text-field
            v-model="localAd.name"
            label="Назва оголошення"
            :rules="[(v) => !!v || 'Назва обовʼязкова']"
            @blur="fetchRecommendedCountriesForAdName"
            required
          />
          <v-select
            v-model="localAd.status"
            label="Статус"
            :items="[
            { title: 'Активний', value: 'enabled' },
            { title: 'Пауза', value: 'paused' },
            { title: 'Вимкнений', value: 'removed' }
            ]"
            item-title="title"
            item-value="value"
            :rules="[(v) => !!v || 'Статус обовʼязковий']"
            required
          />
          <v-select
            v-model="localAd.ad_type"
            label="Тип оголошення"
            :items="['text', 'image', 'video']"
            :rules="[(v) => !!v || 'Тип оголошення обовʼязковий']"
            required
          />
          <v-text-field
            v-model="localAd.final_url"
            label="Фінальний URL"
            :rules="[(v) => !!v || 'Фінальний URL обовʼязковий']"
            required
          />
          <v-text-field
            v-model="localAd.headline1"
            label="Заголовок 1"
            :rules="[(v) => !!v || 'Заголовок 1 обовʼязковий']"
            required
          />
          <v-text-field
            v-model="localAd.headline2"
            label="Заголовок 2"
            :rules="[(v) => !!v || 'Заголовок 2 обовʼязковий']"
            required
          />
          <v-textarea
            v-model="localAd.description"
            label="Опис"
            :rules="[(v) => !!v || 'Опис обовʼязковий']"
            required
            rows="2"
          />
          <v-file-input
            v-model="localAd.image"
            label="Зображення"
            accept="image/*"
            :rules="[(v) => !v || v.size < 5000000 || 'Зображення має бути менше 5 МБ']"
            prepend-icon="mdi-camera"
            show-size
            counter
          />
          <v-select
            v-model="localAd.countries"
            label="Країни"
            :items="countryOptions"
            multiple
            chips
            clearable
            item-title="title"
            item-value="value"
            :rules="[(v) => v && v.length > 0 || 'Принаймні одна країна обовʼязкова']"
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
          <v-text-field
            v-if="localAd.image_url && !localAd.image"
            v-model="localAd.image_url"
            label="Поточне URL зображення"
            readonly
            variant="outlined"
            density="compact"
            class="mt-2"
          >
            <template v-slot:append>
              <v-btn
                icon="mdi-open-in-new"
                variant="text"
                size="small"
                :href="localAd.image_url"
                target="_blank"
              />
            </template>
          </v-text-field>
          <v-text-field
            v-if="localAd.ad_type === 'video'"
            v-model="localAd.video_url"
            label="URL відео"
            :rules="[(v) => !!v || 'URL відео обовʼязковий']"
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
import { ref, watch, computed } from 'vue'
import type { Ad } from '@/types/googleAds'
import { useAd } from '@/composables/useAd' 
import { useCampaignStore } from '@/stores/campaignStore'
import ErrorAlert from '@/components/common/ErrorAlert.vue'
import { useConfig } from '@/composables/useConfig'
import { countryOptions } from '@/constants/countries'

const { updateAd, error } = useAd()
const campaignStore = useCampaignStore()
const recommendedCountries = ref<string[]>([]);
const recommendedStats = ref<Record<string, number>>({})
const config = useConfig()

interface LocalAd {
  id: number;
  name: string;
  status: 'enabled' | 'paused' | 'removed';
  ad_type: 'text' | 'image' | 'video';
  final_url: string;
  headline1: string;
  headline2: string;
  description: string;
  image: File | null;
  video_url?: string;
  ad_group_id: number;
  image_url?: string;
  countries: string[];
}

const props = defineProps<{
  modelValue: boolean;
  ad: Ad;
  campaignId: number;
  adGroupId: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save', data: Ad): void;
}>();

const form = ref();
const isValid = ref(false);
const localAd = ref<LocalAd>({
  ...props.ad,
  status: props.ad.status.toLowerCase() as 'enabled' | 'paused' | 'removed',
  ad_type: props.ad.ad_type as 'text' | 'image' | 'video',
  image: null,
  video_url: props.ad.video_url || undefined,
  ad_group_id: props.ad.ad_group_id,
  countries: props.ad.countries || []
});

const modal = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

watch(() => props.ad, (newAd) => {
  localAd.value = {
    ...newAd,
    status: newAd.status.toLowerCase() as 'enabled' | 'paused' | 'removed',
    ad_type: newAd.ad_type as 'text' | 'image' | 'video',
    image: null,
    video_url: newAd.video_url || undefined,
    ad_group_id: newAd.ad_group_id,
    countries: newAd.countries || []
  };
});

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      } else {
        reject(new Error('Failed to convert file to base64'));
      }
    };
    reader.onerror = error => reject(error);
  });
};

const loading = ref(false)

async function save() {
  if (!form.value.validate()) return
  
  loading.value = true
  try {
    const formData = new FormData()
    if (localAd.value.image) {
      formData.append('image', localAd.value.image)
    }
    const adData = {
      ...localAd.value,
      video_url: localAd.value.video_url || undefined,
      image_data: localAd.value.image ? await convertFileToBase64(localAd.value.image) : undefined
    }
    const response = await updateAd(props.campaignId, props.adGroupId, localAd.value.id, adData)
    if ((response as any)?.error) {
      return console.error('Error updating ad:', (response as any).error)
    }
    await campaignStore.getAllCampaigns()
    close()
  } catch (error) {
    console.error('Error updating ad:', error)
  } finally {
    loading.value = false
  }
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

const close = () => {
  modal.value = false;
};
</script> 