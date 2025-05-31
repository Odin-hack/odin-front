import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  email: string;
  name?: string;
  picture?: string;
}

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref<User | null>(null)

  const login = async (email: string, password: string) => {
    isAuthenticated.value = true
    user.value = { email }
    console.log('Login: isAuthenticated', isAuthenticated.value)
    return true
  }

  const loginWithGoogle = async (credential: string) => {
    try {
      // Тут можна додати валідацію токена на бекенді
      console.log('Google Login: credential', credential)
      const payload = JSON.parse(atob(credential.split('.')[1]))
      
      isAuthenticated.value = true
      user.value = {
        email: payload.email,
        name: payload.name,
        picture: payload.picture
      }
      
      console.log('Google Login: isAuthenticated', isAuthenticated.value)
      return true
    } catch (error) {
      console.error('Error during Google login:', error)
      return false
    }
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = null
  }

  return {
    isAuthenticated,
    user,
    login,
    loginWithGoogle,
    logout
  }
}) 