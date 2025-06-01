<template>
  <v-form
    class="mt-2"
    ref="formRef"
    @submit.prevent="handleSubmit"
  >
    <!-- Якщо є помилка, показуємо її -->
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
        (v) => !!v || 'Password is required'
      ]"
      @blur="handleBlur"
      required
      class="mb-6"
    />

    <v-btn
      block
      color="primary"
      type="submit"
      :loading="loading"
      :disabled="loading || !form.email || !form.password"
      size="large"
      class="text-none"
    >
      <v-icon start>mdi-login</v-icon>
      Sign In
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
  password: ''
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
      password: form.value.password
    }

    const response = await fetch(`${config.authUrl}/users/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userData })
    })

    if (response.status !== 200) {
      const data = await response.json()
      error.value = data.error || 'Failed to login'
      return
    }

    localStorage.setItem('user', JSON.stringify(userData))
    await authStore.login(form.value.email, form.value.password)
    emit('success')
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to login'
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
