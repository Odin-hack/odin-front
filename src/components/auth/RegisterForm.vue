<template>
  <v-form
    class="mt-2"
    ref="formRef"
    @submit.prevent="handleSubmit"
  >
    <ErrorAlert
      :error="error"
      @close="error = null"
    />

    <v-text-field
      v-model="form.email"
      label="Електронна пошта"
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
      label="Пароль"
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
      label="Підтвердіть пароль"
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
      :disabled="loading || !form.email || !form.password || !form.password_confirmation"
      size="large"
      class="text-none"
    >
      <v-icon start>mdi-account-plus</v-icon>
      Створити акаунт
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ErrorAlert from '@/components/common/ErrorAlert.vue'
import { useAuthStore } from '@/stores/auth'
import { useConfig } from '@/composables/useConfig'

type VuetifyFormInstance = InstanceType<typeof import('vuetify/components').VForm>

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

const formRef = ref<VuetifyFormInstance | null>(null)

const loading = ref(false)
const error = ref<string | null>(null)


const handleSubmit = async () => {
  const isFormValid = formRef.value?.validate()
  if (!isFormValid) return

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

    if (response.status !== 201) {
      error.value = data.error || 'Failed to register'
      return
    }

    localStorage.setItem('user', JSON.stringify(userData))
    await authStore.login(userData)
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
