<template>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-card class="pa-4">
      <v-card-title class="text-h5 mb-4">
        Login
      </v-card-title>
      
      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          required
          variant="outlined"
          class="mb-4"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
          variant="outlined"
          class="mb-4"
        ></v-text-field>

        <v-btn
          color="primary"
          type="submit"
          block
          class="mb-2"
          :loading="loading"
        >
          Login
        </v-btn>

        <v-divider class="my-4">OR</v-divider>

        <GoogleLogin
          :callback="handleGoogleLogin"
          :error="handleGoogleError"
          class="mb-2"
        >
          <v-btn
            block
            color="white"
            class="google-btn"
            :loading="googleLoading"
          >
            <v-icon start color="#4285F4">mdi-google</v-icon>
            Sign in with Google
          </v-btn>
        </GoogleLogin>

        <v-btn
          variant="text"
          block
          @click="handleForgotPassword"
        >
          Forgot Password?
        </v-btn>
      </v-form>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { GoogleLogin } from 'vue3-google-login'

const router = useRouter()
const authStore = useAuthStore()

const drawer = ref(false)
const email = ref('')
const password = ref('')
const loading = ref(false)
const googleLoading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    const success = await authStore.login(email.value, password.value)
    if (success) {
      drawer.value = false
      router.push('/companies')
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
      drawer.value = false
      router.push('/companies')
    }
  } finally {
    googleLoading.value = false
  }
}

const handleGoogleError = (error: any) => {
  console.error('Google login error:', error)
}

const handleForgotPassword = () => {
  console.log('Forgot password clicked')
}

defineExpose({
  drawer
})
</script>

<style scoped>
.v-navigation-drawer {
  width: 400px !important;
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