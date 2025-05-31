<template>
  <v-dialog
    v-model="modal"
    max-width="600"
    persistent
  >
    <v-card class="pa-6">
      <v-card-title class="text-h5 mb-4 d-flex align-center">
        <v-icon color="primary" class="mr-2">mdi-domain</v-icon>
        Add Company
      </v-card-title>
      
      <v-form @submit.prevent="onSubmit" ref="form">
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="formData.name"
                label="Company Name"
                :rules="[v => !!v || 'Company name is required']"
                required
              />
            </v-col>
            
            <v-col cols="12">
              <v-text-field
                v-model="formData.website"
                label="Website URL"
                :rules="[
                  v => !!v || 'Website URL is required',
                  v => /^https?:\/\/.+/.test(v) || 'Must be a valid URL'
                ]"
                required
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="formData.businessCategory"
                label="Business Category"
                :rules="[v => !!v || 'Business category is required']"
                required
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="formData.location"
                label="Business Location"
                :rules="[v => !!v || 'Location is required']"
                required
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="formData.description"
                label="Company Description"
                :rules="[
                  v => !!v || 'Description is required',
                  v => v.length >= 100 || 'Description must be at least 100 characters'
                ]"
                required
                rows="3"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="formData.phone"
                label="Contact Phone"
                :rules="[
                  v => !!v || 'Phone number is required',
                  v => /^\+?[\d\s-]{10,}$/.test(v) || 'Must be a valid phone number'
                ]"
                required
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="formData.email"
                label="Contact Email"
                :rules="[
                  v => !!v || 'Email is required',
                  v => /.+@.+\..+/.test(v) || 'Must be a valid email'
                ]"
                required
              />
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="pt-4">
          <v-spacer />
          <v-btn
            color="grey-darken-1"
            variant="text"
            @click="$emit('update:modelValue', false)"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            type="submit"
            :loading="loading"
          >
            Add Company
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue', 'add-company'])

const modal = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})

const form = ref()
const loading = ref(false)

const formData = ref({
  name: '',
  website: '',
  businessCategory: '',
  description: '',
  location: '',
  phone: '',
  email: ''
})

async function onSubmit() {
  const { valid } = await form.value.validate()
  
  if (!valid) return

  loading.value = true
  
  try {
    emit('add-company', {
      ...formData.value,
      ads: []
    })
    
    emit('update:modelValue', false)
    
    // Reset form
    formData.value = {
      name: '',
      website: '',
      businessCategory: '',
      description: '',
      location: '',
      phone: '',
      email: ''
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}
</style> 