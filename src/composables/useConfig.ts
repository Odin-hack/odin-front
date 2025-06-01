import { ref } from 'vue'

export interface Config {
  apiUrl: string
  imageUrl: string
  authUrl: string
  trendsUrl: string
}

export const useConfig = () => {
  const config = ref<Config>({
    apiUrl: 'http://0.0.0.0:3000/api',
    imageUrl: 'http://0.0.0.0:3000',
    authUrl: 'http://0.0.0.0:3000',
    trendsUrl: 'http://localhost:8001'
  })

  return config.value
} 