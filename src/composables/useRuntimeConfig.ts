import { ref } from 'vue'

export const useRuntimeConfig = () => {
  const config = ref({
    appUrlServer: 'http://0.0.0.0:3000/api'
  })

  return config.value
}
