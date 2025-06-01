import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Campaign } from '@/types/googleAds'
import { useApi } from '@/composables/useApi'

export const useCampaignStore = defineStore('campaign', () => {
  const campaign = ref<Campaign | null>(null)
  const campaigns = ref<Campaign[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const createCampaign = async (data: Partial<Campaign>) => {
    loading.value = true
    error.value = null
    try {
      const response = await useApi<Campaign>('POST', '/campaigns', { body: data })
      if (response.error) {
        throw new Error(response.error)
      }
      campaign.value = response.data
      return response.data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to create campaign'
      throw e
    } finally {
      loading.value = false
    }
  }

  const getCampaign = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      const response = await useApi<Campaign>('GET', `/campaigns/${id}`)
      if (response.error) {
        throw new Error(response.error)
      }
      campaign.value = response.data
      return response.data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch campaign'
      throw e
    } finally {
      loading.value = false
    }
  }

  const updateCampaign = async (id: string, data: Partial<Campaign>) => {
    loading.value = true
    error.value = null
    try {
      const response = await useApi<Campaign>('PUT', `/campaigns/${id}`, { body: data })
      if (response.error) {
        throw new Error(response.error)
      }
      campaign.value = response.data
      const index = campaigns.value.findIndex(c => c.id === id)
      if (index !== -1 && response.data) {
        campaigns.value[index] = response.data
      }
      return response.data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to update campaign'
      throw e
    } finally {
      loading.value = false
    }
  }

  const getAllCampaigns = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await useApi<Campaign[]>('GET', '/campaigns')
      if (response.error) {
        throw new Error(response.error)
      }
      campaigns.value = response.data || []
      return campaigns.value
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch campaigns'
      throw e
    } finally {
      loading.value = false
    }
  }

  const reset = () => {
    campaign.value = null
    campaigns.value = []
    error.value = null
  }

  return {
    campaign,
    campaigns,
    loading,
    error,
    createCampaign,
    getCampaign,
    updateCampaign,
    getAllCampaigns,
    reset
  }
}) 