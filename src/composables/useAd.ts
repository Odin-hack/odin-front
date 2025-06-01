import { ref } from 'vue';
import { useApi } from './useApi';
import type { Ad } from '@/types/googleAds';

export function useAd() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const createAd = async (campaignId: number, adGroupId: number, data: Partial<Ad>) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await useApi('POST', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads`, { body: data });
      if (response.error) {
        throw response.error;
      }
      return response.data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to create ad';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const updateAd = async (campaignId: number, adGroupId: number, adId: number, data: Partial<Ad>) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await useApi('PUT', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads/${adId}`, { body: data });
      if (response.error) {
        throw response.error;
      }
      return response.data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to update ad';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const deleteAd = async (campaignId: number, adGroupId: number, adId: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await useApi('DELETE', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads/${adId}`);
      if (response.error) {
        throw response.error;
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to delete ad';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const getAds = async (campaignId: number, adGroupId: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await useApi('GET', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads`);
      if (response.error) {
        throw response.error;
      }
      return response?.data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch ads';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    createAd,
    updateAd,
    deleteAd,
    getAds
  };
} 