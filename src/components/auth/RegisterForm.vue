<template>
  <v-form
    ref="form"
    v-model="isValid"
    @submit.prevent="handleSubmit"
  >
    <ErrorAlert
      :error="error"
      @close="error = null"
    />
    <v-text-field
      v-model="form.email"
      label="Email"
      type="email"
      variant="outlined"
      prepend-inner-icon="mdi-email"
      :rules="[
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid'
      ]"
      required
      class="mb-4"
    />
    <v-text-field
      v-model="form.password"
      label="Password"
      type="password"
      variant="outlined"
      prepend-inner-icon="mdi-lock"
      :rules="[
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be at least 6 characters'
      ]"
      required
      class="mb-4"
    />
    <v-text-field
      v-model="form.password_confirmation"
      label="Confirm Password"
      type="password"
      variant="outlined"
      prepend-inner-icon="mdi-lock-check"
      :rules="[
        (v) => !!v || 'Password confirmation is required',
        (v) => v === form.password || 'Passwords must match'
      ]"
      required
      class="mb-6"
    />
    <v-btn
      block
      color="primary"
      type="submit"
      :loading="loading"
      :disabled="!isValid"
      size="large"
      class="text-none"
    >
      <v-icon start>mdi-account-plus</v-icon>
      Create Account
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ErrorAlert from '@/components/common/ErrorAlert.vue'
import { useAuthStore } from '@/stores/auth'
import { useConfig } from '@/composables/useConfig'

const emit = defineEmits<{
  (e: 'success'): void
}>()

const authStore = useAuthStore()
const config = useConfig()
const form = ref({
  email: '',
  password: '',
  password_confirmation: ''
})
const isValid = ref(false)
const loading = ref(false)
const error = ref<string | null>(null)

const handleSubmit = async () => {
  if (!isValid.value) return

  loading.value = true
  error.value = null

  try {
    const userData = {
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.password_confirmation
    }

    const response = await fetch(`${config.authUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userData })
    })

    const data = await response.json()
    
    if (!response.ok) {
      error.value = data.error || 'Failed to register'
      return
    }

    localStorage.setItem('user', JSON.stringify(data))
    await authStore.login(form.value.email, form.value.password)
    emit('success')

  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to register'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.v-text-field {
  border-radius: 8px;
}
</style> 