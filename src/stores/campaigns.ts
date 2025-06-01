import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Campaign, CampaignStats, CampaignCreateData } from '@/types/googleAds';
import { getCampaigns, createCampaign, getCampaignStats, updateCampaignStatus } from '@/api/googleAds';
import { useCampaignsApi } from '@/api/campaigns';

const transformCampaign = (data: any): Campaign => {
  return {
    id: data.campaign.id,
    name: data.campaign.name,
    status: data.campaign.status,
    advertising_channel_type: data.campaign.advertising_channel_type,
    start_date: data.campaign.start_date,
    end_date: data.campaign.end_date,
    budget_amount_micros: data.campaign.budget_amount_micros,
    bidding_strategy_type: data.campaign.bidding_strategy_type,
  };
};

export const useCampaignsStore = defineStore('campaigns', () => {
  const campaigns = ref<Campaign[]>([]);
  const currentCampaign = ref<Campaign | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const initialized = ref(false);

  const campaignsApi = useCampaignsApi();

  const initialize = async () => {
    if (!initialized.value) {
      try {
        await getCampaigns('123-456-7890');
        initialized.value = true;
      } catch (err) {
        console.error('Error initializing campaigns store:', err);
      }
    }
  };

  const fetchCampaigns = async (customerId: string) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await getCampaigns(customerId);
      campaigns.value = response.map(transformCampaign);
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch campaigns';
      console.error('Error fetching campaigns:', err);
    } finally {
      loading.value = false;
    }
  };

  const createNewCampaign = async (customerId: string, data: CampaignCreateData) => {
    loading.value = true;
    error.value = null;
    try {
      await initialize();
      const response = await createCampaign(customerId, data);
      const campaign = transformCampaign(response);
      campaigns.value.unshift(campaign);
      return campaign;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to create campaign';
      console.error('Error creating campaign:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const fetchCampaignStats = async (customerId: string, campaignId: string) => {
    try {
      await initialize();
      const stats = await getCampaignStats(customerId, campaignId);
      return stats;
    } catch (err) {
      console.error('Error fetching campaign stats:', err);
      throw err;
    }
  };

  const updateStatus = async (customerId: string, campaignId: string, status: 'ENABLED' | 'PAUSED' | 'REMOVED') => {
    loading.value = true;
    error.value = null;
    try {
      await initialize();
      const response = await updateCampaignStatus(customerId, campaignId, status);
      const updatedCampaign = transformCampaign(response);
      const index = campaigns.value.findIndex(c => c.id === campaignId);
      if (index !== -1) {
        campaigns.value[index] = updatedCampaign;
      }
      return updatedCampaign;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update campaign status';
      console.error('Error updating campaign status:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const createCampaign = async (data: Partial<Campaign>) => {
    try {
      loading.value = true;
      error.value = null;
      const campaign = await campaignsApi.createCampaign(data);
      campaigns.value.push(campaign);
      return campaign;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to create campaign';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const fetchCampaign = async (id: string) => {
    try {
      loading.value = true;
      error.value = null;
      const campaign = await campaignsApi.getCampaign(id);
      currentCampaign.value = campaign;
      return campaign;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch campaign';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    campaigns,
    currentCampaign,
    loading,
    error,
    initialized,
    initialize,
    fetchCampaigns,
    createNewCampaign,
    fetchCampaignStats,
    updateStatus,
    createCampaign,
    fetchCampaign
  };
}); 