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

  // Ініціалізація з localStorage
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
    isAuthenticated.value = true
  }

  const login = async (email: string, password: string) => {
    isAuthenticated.value = true
    user.value = { email }
    localStorage.setItem('user', JSON.stringify(user.value))
    console.log('Login: isAuthenticated', isAuthenticated.value)
    return true
  }

  const loginWithGoogle = async (credential: string) => {
    try {
      const payload = JSON.parse(atob(credential.split('.')[1]))
      
      isAuthenticated.value = true
      user.value = {
        email: payload.email,
        name: payload.name,
        picture: payload.picture
      }
      
      localStorage.setItem('user', JSON.stringify(user.value))
      
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
    localStorage.removeItem('user')
  }

  return {
    isAuthenticated,
    user,
    login,
    loginWithGoogle,
    logout
  }
}) 