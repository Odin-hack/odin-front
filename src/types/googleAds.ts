export interface Campaign {
  id: string;
  name: string;
  status: 'ENABLED' | 'PAUSED' | 'REMOVED';
  advertising_channel_type: string;
  start_date: string;
  end_date?: string;
  budget_amount_micros: number;
  bidding_strategy_type: string;
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
}

export interface GoogleAdsConfig {
  client_id: string;
  client_secret: string;
  developer_token: string;
  refresh_token: string;
} 