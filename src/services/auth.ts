import { useApi } from '@/composables/useApi'
import { useLocalStorage } from '@/composables/useLocalStorage'

interface User {
  email: string
  password: string
  password_confirmation?: string
}

interface AuthResponse {
  token: string
  user: {
    id: number
    email: string
  }
}

export const useAuth = () => {
  const { setItem, getItem, removeItem } = useLocalStorage()
  const TOKEN_KEY = 'auth_token'

  const login = async (user: User) => {
    const response = await useApi<AuthResponse>('POST', '/users/sign_in', {
      body: { user }
    })
    
    if (response.data?.token) {
      setItem(TOKEN_KEY, response.data.token)
    }
    
    return response
  }

  const register = async (user: User) => {
    const response = await useApi<AuthResponse>('POST', '/users', {
      body: { user }
    })
    
    if (response.data?.token) {
      setItem(TOKEN_KEY, response.data.token)
    }
    
    return response
  }

  const logout = () => {
    removeItem(TOKEN_KEY)
  }

  const getToken = () => {
    return getItem(TOKEN_KEY)
  }

  const isAuthenticated = () => {
    return !!getToken()
  }

  return {
    login,
    register,
    logout,
    getToken,
    isAuthenticated
  }
} 