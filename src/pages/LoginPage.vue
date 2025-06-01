<template>
  <v-container class="login-bg fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6" elevation="10" rounded="xl">
          <div class="text-center mb-4">
            <v-avatar size="64" class="mb-2">
              <v-icon size="48" color="primary">mdi-account-circle</v-icon>
            </v-avatar>
            <div class="text-h5 font-weight-bold">Sign in to your account</div>
          </div>
          <v-form @submit.prevent="handleLogin" ref="formRef" validate-on="submit lazy">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
              variant="outlined"
              class="mb-3"
              prepend-inner-icon="mdi-email"
              autocomplete="username"
            />
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="passwordRules"
              required
              variant="outlined"
              class="mb-4"
              prepend-inner-icon="mdi-lock"
              autocomplete="current-password"
            />
            <v-alert
              v-if="error"
              type="error"
              class="mb-3"
              border="start"
              variant="tonal"
              density="compact"
            >
              {{ error }}
            </v-alert>
            <v-btn
              color="primary"
              type="submit"
              block
              size="large"
              :loading="loading"
              prepend-icon="mdi-login"
              class="mb-2"
            >
              Login
            </v-btn>

            <v-divider class="my-4">OR</v-divider>

            <v-btn
              variant="text"
              block
              @click="handleRegister"
            >
              Register
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { GoogleLogin } from 'vue3-google-login'

const router = useRouter()
const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const loading = ref(false)
const googleLoading = ref(false)
const error = ref('')
const formRef = ref()

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
]
const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => v.length >= 4 || 'Password must be at least 4 characters'
]

const handleLogin = async () => {
  error.value = ''
  const { valid } = await formRef.value.validate()
  if (!valid) return
  loading.value = true
  try {
    if (password.value === 'fail') {
      error.value = 'Invalid email or password'
      return
    }
    const success = await authStore.login(email.value, password.value)
    if (success) {
      await nextTick()
      router.replace('/campaigns')
    }
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async (response: any) => {
  googleLoading.value = true
  try {
    const success = await authStore.loginWithGoogle(response.credential)
    if (success) {
      router.push('/campaigns')
    }
  } finally {
    googleLoading.value = false
  }
}

const handleGoogleError = (error: any) => {
  console.error('Google login error:', error)
}

const handleRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
.login-bg {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
}

.google-btn {
  border: 1px solid #dadce0;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.25px;
  height: 40px;
}

.google-btn:hover {
  background-color: #f8f9fa;
}
</style> 