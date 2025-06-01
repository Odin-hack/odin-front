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
  const token = ref<string | null>(null)

  // Ініціалізація з localStorage
  const savedUser = localStorage.getItem('user')
  const savedToken = localStorage.getItem('token')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
    isAuthenticated.value = true
  }
  if (savedToken) {
    token.value = savedToken
  }

  const login = async (userData: User, userToken: string) => {
    isAuthenticated.value = true
    user.value = userData
    token.value = userToken
    localStorage.setItem('user', JSON.stringify(user.value))
    localStorage.setItem('token', userToken)
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
      // тут можна зберігати токен, якщо він є
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
    token.value = null
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return {
    isAuthenticated,
    user,
    token,
    login,
    loginWithGoogle,
    logout
  }
}) 