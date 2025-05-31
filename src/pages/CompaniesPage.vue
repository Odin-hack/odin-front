<template>
  <v-container class="py-8 companies-container">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <div class="d-flex align-center mb-4">
          <v-icon color="primary" size="36" class="mr-2">mdi-domain</v-icon>
          <span class="text-h5 font-weight-bold">Companies</span>
          <v-spacer />
          <v-btn
            color="primary"
            class="add-company-btn"
            @click="showAddCompany = true"
          >
            <v-icon start>mdi-plus</v-icon>
            Add Company
          </v-btn>
        </div>
        <v-divider class="mb-4" />
        <div class="company-list">
          <CompanyCard
            v-for="company in companies"
            :key="company.name"
            :company="company"
            class="mb-6"
          />
        </div>
        <v-btn
          icon
          color="primary"
          class="fab-add-company"
          :class="{ 'visible': isScrolled }"
          @click="showAddCompany = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <AddCompanyModal
          :model-value="showAddCompany"
          @update:modelValue="showAddCompany = $event"
          @add-company="onAddCompany"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CompanyCard from '@/components/cards/CompanyCard.vue'
import AddCompanyModal from '@/components/modals/AddCompanyModal.vue'

const showAddCompany = ref(false)
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const companies = ref([
  {
    name: 'Acme Corp',
    ads: [
      {
        id: 1,
        name: 'Summer Sale',
        images: [
          'https://picsum.photos/seed/acme1/400/180',
          'https://picsum.photos/seed/acme2/400/180',
          'https://picsum.photos/seed/acme3/400/180',
          'https://picsum.photos/seed/acme4/400/180',
          'https://picsum.photos/seed/acme5/400/180',
          'https://picsum.photos/seed/acme6/400/180',
          'https://picsum.photos/seed/acme7/400/180',
          'https://picsum.photos/seed/acme8/400/180'
        ]
      },
      {
        id: 2,
        name: 'Winter Promo',
        images: [
          'https://picsum.photos/seed/acme9/400/180',
          'https://picsum.photos/seed/acme10/400/180',
          'https://picsum.photos/seed/acme11/400/180',
          'https://picsum.photos/seed/acme12/400/180',
          'https://picsum.photos/seed/acme13/400/180'
        ]
      }
    ]
  },
  {
    name: 'Beta LLC',
    ads: [
      {
        id: 3,
        name: 'Beta Launch',
        images: [
          'https://picsum.photos/seed/beta1/400/180',
          'https://picsum.photos/seed/beta2/400/180',
          'https://picsum.photos/seed/beta3/400/180',
          'https://picsum.photos/seed/beta4/400/180',
          'https://picsum.photos/seed/beta5/400/180'
        ]
      }
    ]
  }
])

function onAddCompany(newCompany: any) {
  companies.value.push(newCompany)
}
</script>

<style scoped>
.companies-container {
  padding: 12px 40px 0 40px;
  overflow-x: hidden;
}
.company-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
@media (max-width: 800px) {
  .companies-container {
    padding: 0 4vw;
  }
  .company-list {
    gap: 18px;
  }
}
@media (max-width: 500px) {
  .companies-container {
    padding: 0 2vw;
  }
  .company-list {
    gap: 10px;
  }
}
.add-company-btn {
  opacity: 0.9;
  transition: opacity 0.2s;
}
.add-company-btn:hover {
  opacity: 1;
}
.fab-add-company {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 20;
  box-shadow: 0 4px 16px 0 rgba(33,150,243,0.12);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;
  pointer-events: none;
}
.fab-add-company.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
@media (max-width: 600px) {
  .add-company-btn {
    display: none;
  }
  .fab-add-company {
    display: flex !important;
  }
}
</style> 