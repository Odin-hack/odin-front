<template>
  <v-card class="pa-3 mb-4 asset-group-card" elevation="2" rounded="lg">
    <div class="d-flex align-center mb-2 asset-group-header">
      <span class="text-h6 font-weight-medium">{{ adGroup.name }}</span>
      <v-spacer />
      <v-chip
        :color="adGroup.status === 'enabled' ? 'success' : adGroup.status === 'paused' ? 'warning' : 'error'"
        variant="tonal"
        size="small"
        class="mr-3 asset-group-chip"
      >
        <v-icon start size="18">mdi-circle</v-icon>
        {{ adGroup.status === 'enabled' ? 'Активна' : adGroup.status === 'paused' ? 'Пауза' : 'Вимкнена' }}
      </v-chip>
      <v-chip color="primary" variant="tonal" size="small" class="mr-3 asset-group-chip">
        <v-icon start size="18">mdi-image</v-icon>
        {{ adGroup?.ads?.length }} оголошень
      </v-chip>
      <v-btn icon size="small" color="primary" class="asset-group-edit-btn" @click="showEditAssetGroup = true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <div v-if="adGroup.ads && adGroup.ads.length" class="ad-swiper mb-2">
      <swiper
        :slides-per-view="isMobile ? 1 : 3"
        :space-between="16"
        navigation
        :pagination="{ clickable: true }"
        style="width: 100%;"
      >
        <swiper-slide v-for="(ad, i) in adGroup.ads" :key="i">
          <div class="position-relative image-container">
            <v-img
              :src="getImageUrl(ad.image_url)"
              cover
              height="200"
              class="rounded transition-img"
            />
            <div class="image-overlay"></div>
            <v-chip
              :color="ad.status === 'enabled' ? 'success' : ad.status === 'paused' ? 'warning' : 'error'"
              variant="tonal"
              size="x-small"
              class="position-absolute top-0 left-0 ma-2 status-chip"
            >
              {{ ad.status }}
            </v-chip>
            <div class="edit-button-container">
              <v-btn icon size="x-small" color="primary" class="img-edit-btn" @click="editImage(ad)">
                <v-icon size="16">mdi-pencil</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="headlines-wrapper">
            <v-text-field
              :model-value="ad.headline1"
              variant="outlined"
              density="compact"
              readonly
              hide-details
              class="headline-field mb-2"
              prepend-inner-icon="mdi-format-quote-open"
            />
            <v-text-field
              :model-value="ad.headline2"
              variant="outlined"
              density="compact"
              readonly
              hide-details
              class="headline-field"
              prepend-inner-icon="mdi-format-quote-close"
            />
          </div>
          <div class="ad-name-wrapper">
            <div class="ad-name text-center">{{ ad.name }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div v-else class="text-grey">No ads</div>
    <div class="text-caption text-end mt-1" v-if="adGroup.ads && adGroup.ads.length">
      {{ adGroup.ads.length }} ads{{ adGroup.ads.length > 1 ? 's' : '' }}
    </div>
    <div class="d-flex align-center justify-end mt-4">
      <v-btn
        color="primary"
        variant="tonal"
        class="add-ad-btn"
        prepend-icon="mdi-plus-circle"
        @click="showAddAd = true"
      >
        Додати оголошення
      </v-btn>
    </div>
    <EditAdGroupModal
      :model-value="showEditAssetGroup"
      @update:modelValue="showEditAssetGroup = $event"
      :adGroup="adGroup"
      @save="$emit('edit-asset-group', {})"
    />
    <EditImageModal
      :model-value="showEditImage"
      @update:modelValue="showEditImage = $event"
      :ad="selectedImage"
      :campaign-id="adGroup.campaign_id"
      :ad-group-id="adGroup.id"
      @save="onSaveImage"
    />
    <AddAdModal
      v-model="showAddAd"
      :campaign-id="adGroup.campaign_id"
      :ad-group-id="adGroup.id"
      @save="$emit('edit-image', { id: 0, name: '', status: 'enabled', ad_type: '', final_url: '', headline1: '', headline2: '', description: '', ad_group_id: 0 })"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import EditAdGroupModal from '@/components/modals/EditAdGroupModal.vue'
import EditImageModal from '@/components/modals/EditImageModal.vue'
import AddAdModal from '@/components/modals/AddAdModal.vue'
import type { Ad, AdGroup } from '@/types/googleAds'
import { useConfig } from '@/composables/useConfig'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const config = useConfig()

const props = withDefaults(defineProps<{
  adGroup: AdGroup;
}>(), {
  adGroup: () => ({
    id: 0,
    name: '',
    status: 'enabled',
    campaign_id: 0,
    cpc_bid_micros: 0,
    ad_group_type: 'search_standard',
    ads: []
  })
})

const showEditAssetGroup = ref(false)
const showEditImage = ref(false)
const selectedImage = ref<Ad>({
  id: 0,
  name: '',
  status: 'enabled',
  ad_type: '',
  final_url: '',
  headline1: '',
  headline2: '',
  description: '',
  ad_group_id: 0
})

function editImage(ad: Ad) {
  selectedImage.value = ad
  showEditImage.value = true
}

const emit = defineEmits<{
  (e: 'edit-asset-group', data: Partial<AdGroup>): void;
  (e: 'edit-image', data: Ad): void;
}>()

function onSaveAssetGroup(updated: Partial<AdGroup>) {
  emit('edit-asset-group', updated)
}

function onSaveImage(updated: Ad) {
  emit('edit-image', updated)
}

const isMobile = ref(false)
if (typeof window !== 'undefined') {
  isMobile.value = window.innerWidth < 600
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 600
  })
}

const defaultImageUrl = 'https://placehold.co/600x400/e2e8f0/64748b?text=No+Image';

const showAddAd = ref(false)

const getImageUrl = (url: string | undefined) => {
  if (!url) return defaultImageUrl
  if (url.startsWith('http') || url.startsWith('data:')) {
    return url
  }
  return `${config.imageUrl}${url}`
}

const handleAdSave = (ad: Ad) => {
  if (!props.adGroup.ads) {
    props.adGroup.ads = []
  }
  props.adGroup.ads.push(ad)
}
</script>

<style scoped>
.asset-group-card {
  border: 1px solid #e3e8ee;
  background: #fff;
  transition: box-shadow 0.2s;
}
.asset-group-card:hover {
  box-shadow: 0 4px 16px 0 rgba(33, 150, 243, 0.10);
}
.transition-img {
  transition: transform 0.2s;
}
.transition-img:hover {
  transform: scale(1.07);
  z-index: 2;
}
.img-edit-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.edit-button-container {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 3;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
}
.asset-group-card:hover .edit-button-container {
  opacity: 1;
  visibility: visible;
}

.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.left-0 {
  left: 0;
}
.ma-2 {
  margin: 8px;
}
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mt-1 {
  margin-top: 4px;
}
.asset-group-header {
  flex-wrap: wrap;
}
.asset-group-chip {
  font-size: 1rem;
}
@media (max-width: 600px) {
  .asset-group-card {
    padding: 8px 2vw 8px 2vw !important;
    border-radius: 10px;
  }
  .asset-group-header {
    margin-bottom: 4px;
  }
  .asset-group-chip {
    font-size: 0.85rem !important;
    height: 26px !important;
    min-height: 26px !important;
    padding: 0 10px !important;
    margin-right: 4px !important;
    min-width: 60px !important;
    white-space: nowrap;
  }
  .asset-group-edit-btn {
    position: static !important;
    margin-left: 8px !important;
    margin-right: 0 !important;
    background: white;
    box-shadow: 0 2px 8px 0 rgba(33,150,243,0.08);
    z-index: 1;
  }
}
.image-container {
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.image-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.image-container .v-img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}
.image-container:hover .v-img {
  transform: scale(1.05);
}
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
  pointer-events: none;
}
.status-chip {
  backdrop-filter: blur(4px);
  font-weight: 500;
  letter-spacing: 0.5px;
}
.ad-name-wrapper {
  position: relative;
  padding: 8px 4px;
  margin-top: 8px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
  border-radius: 8px;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}
.ad-name {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 2.8em;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0,0,0,0.05);
  letter-spacing: 0.2px;
}
.img-edit-wrap:hover .ad-name-wrapper {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.9));
}
.img-edit-wrap:hover .ad-name {
  color: var(--v-primary-base);
  transform: scale(1.02);
}
.mt-2 {
  margin-top: 8px;
}
.mb-1 {
  margin-bottom: 4px;
}
.add-ad-btn {
  min-width: 160px;
  height: 40px;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%);
  border: 1px solid rgba(33, 150, 243, 0.2);
}
.add-ad-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.15);
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(33, 150, 243, 0.1) 100%);
}
.add-ad-btn .v-icon {
  font-size: 18px;
  margin-right: 8px;
}
.ad-swiper {
  width: 100%;
  margin-bottom: 12px;
}
.swiper-button-next, .swiper-button-prev {
  z-index: 20;
  color: #1976d2;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px 0 rgba(33,150,243,0.08);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: background 0.2s;
}
.swiper-button-next:hover, .swiper-button-prev:hover {
  background: #e3e8ee;
}
.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 20px;
}
.headlines-wrapper {
  margin: 12px 0;
  padding: 0 8px;
}

.headline-field {
  background: white;
  border-radius: 8px;
}

.headline-field :deep(.v-field__input) {
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.87);
}

.headline-field :deep(.v-field__input:first-child) {
  color: var(--v-primary-base);
  font-weight: 500;
}

.headline-field :deep(.v-icon) {
  color: var(--v-primary-base);
  opacity: 0.7;
}

@media (max-width: 600px) {
  .headlines-wrapper {
    margin: 8px 0;
    padding: 0 4px;
  }
  
  .headline-field :deep(.v-field__input) {
    font-size: 0.85rem;
  }
}
</style> 