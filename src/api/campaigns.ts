import { useApi } from '@/composables/useApi'
import type { Campaign } from '@/types/googleAds'

export const useCampaignsApi = () => {

  const createCampaign = async (data: Partial<Campaign>) => {
    const response = await useApi<Campaign>('POST', '/campaign', { body: data })
    return response.data
  }

  const getCampaign = async (id: string) => {
    const response = await useApi<Campaign>('GET', `/campaign/${id}`)
    return response.data
  }

  return {
    createCampaign,
    getCampaign
  }
} 