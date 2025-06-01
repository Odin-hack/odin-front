import { ref } from 'vue';
import { useApi } from './useApi';
import type { AdGroup } from '@/types/googleAds';

export function useAdGroup() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const createAdGroup = async (campaignId: number, data: Partial<AdGroup>) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await useApi('POST', `/campaigns/${campaignId}/ad_groups`, { body: data });
      if (response.error) {
        throw response.error;
      }
      return response.data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to create ad group';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const updateAdGroup = async (campaignId: number, adGroupId: number, data: Partial<AdGroup>) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await useApi('PUT', `/campaigns/${campaignId}/ad_groups/${adGroupId}`, { body: data });
      if (response.error) {
        throw response.error;
      }
      return response.data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to update ad group';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const deleteAdGroup = async (campaignId: number, adGroupId: number) => {
    loading.value = true;
    error.value = null;
    try {
      await useApi('DELETE', `/campaigns/${campaignId}/ad_groups/${adGroupId}`);
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to delete ad group';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const getAdGroups = async (campaignId: number) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await useApi('GET', `/campaigns/${campaignId}/ad_groups`);
      if (response.error) {
        throw response.error;
      }
      return response.data;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch ad groups';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    createAdGroup,
    updateAdGroup,
    deleteAdGroup,
    getAdGroups
  };
} 