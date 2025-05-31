<template>
  <v-card class="pa-3 mb-4 ad-card" elevation="2" rounded="lg">
    <div class="d-flex align-center mb-2 ad-header-row">
      <span class="text-h6 font-weight-medium">{{ ad.name }}</span>
      <v-spacer />
      <v-chip color="primary" variant="tonal" size="small" class="mr-3 ad-chip">
        <v-icon start size="18">mdi-image</v-icon>
        {{ ad.images.length }} images
      </v-chip>
      <v-btn icon size="small" color="primary" class="ad-edit-btn" @click="showEditAd = true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <v-carousel
      v-if="ad.images && ad.images.length"
      height="240"
      hide-delimiter-background
      show-arrows="hover"
      class="mb-2"
    >
      <v-carousel-item
        v-for="(group, i) in imageGroups"
        :key="i"
      >
        <v-row no-gutters class="fill-height" align="center" justify="center">
          <v-col
            v-for="(img, j) in group"
            :key="j"
            :cols="isMobile ? 6 : 3"
            class="pa-1 img-edit-wrap"
          >
            <v-img
              :src="img"
              cover
              height="100%"
              class="rounded transition-img"
            />
            <v-btn icon size="x-small" color="primary" class="img-edit-btn" @click="editImage(img)">
              <v-icon size="16">mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div v-else class="text-grey">No images</div>
    <div class="text-caption text-end mt-1" v-if="ad.images && ad.images.length">
      {{ ad.images.length }} image{{ ad.images.length > 1 ? 's' : '' }}
    </div>
    <EditAdModal
      :model-value="showEditAd"
      @update:modelValue="showEditAd = $event"
      :ad="ad"
      @save="onSaveAd"
    />
    <EditImageModal
      :model-value="showEditImage"
      @update:modelValue="showEditImage = $event"
      :image="selectedImage"
      @save="onSaveImage"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{
  ad: {
    id: number
    name: string
    images: string[]
  }
}>()
import EditAdModal from '@/components/modals/EditAdModal.vue'
import EditImageModal from '@/components/modals/EditImageModal.vue'
const showEditAd = ref(false)
const showEditImage = ref(false)
const selectedImage = ref('')
function editImage(img: string) {
  selectedImage.value = img
  showEditImage.value = true
}
const emit = defineEmits(['edit-ad', 'edit-image'])
function onSaveAd(updated: { name: string }) {
  emit('edit-ad', updated)
}
function onSaveImage(updated: string) {
  emit('edit-image', updated)
}
const isMobile = ref(false)
if (typeof window !== 'undefined') {
  isMobile.value = window.innerWidth < 600
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 600
  })
}
const imageGroups = computed(() => {
  const groupSize = isMobile.value ? 2 : 4
  const groups = []
  for (let i = 0; i < props.ad.images.length; i += groupSize) {
    groups.push(props.ad.images.slice(i, i + groupSize))
  }
  return groups
})
</script>

<style scoped>
.ad-card {
  border: 1px solid #e3e8ee;
  background: #fff;
  transition: box-shadow 0.2s;
}
.ad-card:hover {
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
.img-edit-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 3;
  background: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
.img-edit-wrap:hover .img-edit-btn {
  opacity: 1;
  pointer-events: auto;
}
.ad-header-row {
  flex-wrap: wrap;
}
.ad-chip {
  font-size: 1rem;
}
@media (max-width: 600px) {
  .ad-card {
    padding: 8px 2vw 8px 2vw !important;
    border-radius: 10px;
  }
  .ad-header-row {
    margin-bottom: 4px;
  }
  .ad-chip {
    font-size: 0.85rem !important;
    height: 26px !important;
    min-height: 26px !important;
    padding: 0 10px !important;
    margin-right: 4px !important;
    min-width: 60px !important;
    white-space: nowrap;
  }
  .ad-edit-btn {
    position: static !important;
    margin-left: 8px !important;
    margin-right: 0 !important;
    background: white;
    box-shadow: 0 2px 8px 0 rgba(33,150,243,0.08);
    z-index: 1;
  }
}
</style> 