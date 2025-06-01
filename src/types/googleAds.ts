import { useApi, type ApiResponse } from '@/composables/useApi'

// import { api } from '@/composables/useApi';

export interface Campaign {
  id: number;
  name: string;
  status: 'ENABLED' | 'PAUSED' | 'REMOVED';
  advertising_channel_type: string;
  start_date: string;
  end_date?: string;
  budget_amount_micros: number;
  bidding_strategy_type: string;
  ad_groups?: AdGroup[];
}

export interface CampaignStats {
  impressions: number;
  clicks: number;
  cost_micros: number;
  conversions: number;
  average_cpc: number;
}

export interface CampaignCreateData {
  name: string;
  budget: number;
  startDate: string;
  endDate?: string;
  biddingStrategy: string;
  channelType: string;
  ad_groups_attributes?: {
    name: string;
    status: 'enabled' | 'paused' | 'removed';
    cpc_bid_micros: number;
    ad_group_type: string;
    ads_attributes?: {
      name: string;
      status: 'enabled' | 'paused' | 'removed';
      ad_type: 'text' | 'image' | 'video';
      final_url: string;
      headline1: string;
      headline2: string;
      description: string;
      image?: File;
      video_url?: string;
    }[];
  }[];
}

export interface GoogleAdsConfig {
  client_id: string;
  client_secret: string;
  developer_token: string;
  refresh_token: string;
}

export interface AdGroup {
  id: number;
  name: string;
  status: 'enabled' | 'paused' | 'removed';
  cpc_bid_micros: number;
  ad_group_type: string;
  campaign_id: number;
  ads?: Ad[];
}

export interface Ad {
  id: number;
  name: string;
  status: 'enabled' | 'paused' | 'removed';
  ad_type: string;
  final_url: string;
  headline1: string;
  headline2: string;
  description: string;
  image_url?: string;
  video_url?: string;
  ad_group_id: number;
  countries?: string[];
}

// Ad Group API
// export const adGroupApi = {
//   create: (campaignId: number, data: Partial<AdGroup>) => 
//     api.post(`/api/campaigns/${campaignId}/ad_groups`, data),
  
//   update: (campaignId: number, adGroupId: number, data: Partial<AdGroup>) => 
//     api.put(`/api/campaigns/${campaignId}/ad_groups/${adGroupId}`, data),
  
//   delete: (campaignId: number, adGroupId: number) => 
//     api.delete(`/api/campaigns/${campaignId}/ad_groups/${adGroupId}`),
  
//   list: (campaignId: number) => 
//     api.get(`/api/campaigns/${campaignId}/ad_groups`)
// };

// Ad API
export const adApi = {
  create: async (campaignId: number, adGroupId: number, data: Partial<Ad>) => {
    const response = await useApi<Ad>('POST', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads`, { body: data })
    return response
  },
  update: async (campaignId: number, adGroupId: number, adId: number, data: Partial<Ad>) => {
    const response = await useApi<Ad>('PUT', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads/${adId}`, { body: data })
    return response
  },
  delete: async (campaignId: number, adGroupId: number, adId: number) => {
    const response = await useApi('DELETE', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads/${adId}`)
    return response
  },
  get: async (campaignId: number, adGroupId: number, adId: number) => {
    const response = await useApi<Ad>('GET', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads/${adId}`)
    return response
  },
  list: async (campaignId: number, adGroupId: number) => {
    const response = await useApi<Ad[]>('GET', `/campaigns/${campaignId}/ad_groups/${adGroupId}/ads`)
    return response
  }
} 