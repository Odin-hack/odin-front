import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuth } from '@/services/auth'

export const useAuthStore = defineStore('auth', () => {
  const auth = useAuth()
  const isAuthenticated = ref(auth.isAuthenticated())

  const login = async (email: string, password: string) => {
    const response = await auth.login({ email, password })
    if (!response.error) {
      isAuthenticated.value = true
    }
    return response
  }

  const register = async (email: string, password: string, password_confirmation: string) => {
    const response = await auth.register({ email, password, password_confirmation })
    if (!response.error) {
      isAuthenticated.value = true
    }
    return response
  }

  const logout = () => {
    auth.logout()
    isAuthenticated.value = false
  }

  return {
    isAuthenticated,
    login,
    register,
    logout
  }
}) 