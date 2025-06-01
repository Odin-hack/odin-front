<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="pa-6 rounded-lg" elevation="4">
          <div class="text-center mb-6">
            <h1 class="text-h4 font-weight-bold mb-2">
              {{ activeTab === 'login' ? 'Welcome Back' : 'Create Account' }}
            </h1>
            <p class="text-body-1 text-medium-emphasis">
              {{ activeTab === 'login' 
                ? 'Sign in to continue to your account' 
                : 'Sign up to get started' }}
            </p>
          </div>

          <v-tabs
            v-model="activeTab"
            color="primary"
            align-tabs="center"
            class="mb-6"
          >
            <v-tab value="login" class="text-none">
              <v-icon start>mdi-login</v-icon>
              Login
            </v-tab>
            <v-tab value="register" class="text-none">
              <v-icon start>mdi-account-plus</v-icon>
              Register
            </v-tab>
          </v-tabs>

          <v-window v-model="activeTab">
            <v-window-item value="login">
              <LoginForm @success="handleAuthSuccess" />
            </v-window-item>

            <v-window-item value="register">
              <RegisterForm @success="handleAuthSuccess" />
            </v-window-item>
          </v-window>

          <v-divider class="my-6" />

          <div class="text-center">
            <p class="text-body-2 text-medium-emphasis">
              {{ activeTab === 'login' 
                ? "Don't have an account?" 
                : 'Already have an account?' }}
              <v-btn
                variant="text"
                color="primary"
                class="text-none"
                @click="activeTab = activeTab === 'login' ? 'register' : 'login'"
              >
                {{ activeTab === 'login' ? 'Register' : 'Login' }}
              </v-btn>
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const router = useRouter()
const activeTab = ref('login')

const handleAuthSuccess = () => {
  router.push('/campaigns')
}
</script>

<style scoped>
.v-card {
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
}

.v-tab {
  text-transform: none;
  letter-spacing: normal;
}
</style> 