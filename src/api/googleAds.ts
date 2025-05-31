// Мок-дані для розробки
const mockCampaigns = [
  {
    campaign: {
      id: '1',
      name: 'Summer Sale 2024',
      status: 'ENABLED',
      advertising_channel_type: 'SEARCH',
      start_date: '2024-06-01',
      end_date: '2024-08-31',
      budget_amount_micros: 50000000, // $50
      bidding_strategy_type: 'MAXIMIZE_CONVERSIONS'
    }
  },
  {
    campaign: {
      id: '2',
      name: 'New Product Launch',
      status: 'ENABLED',
      advertising_channel_type: 'DISPLAY',
      start_date: '2024-05-01',
      end_date: '2024-07-31',
      budget_amount_micros: 100000000, // $100
      bidding_strategy_type: 'TARGET_CPA'
    }
  }
];

// Конфігурація для Google Ads API
const config = {
  client_id: import.meta.env.VITE_GOOGLE_ADS_CLIENT_ID,
  client_secret: import.meta.env.VITE_GOOGLE_ADS_CLIENT_SECRET,
  developer_token: import.meta.env.VITE_GOOGLE_ADS_DEVELOPER_TOKEN,
  refresh_token: import.meta.env.VITE_GOOGLE_ADS_REFRESH_TOKEN,
};

let client: any = null;

// Ініціалізація клієнта
const initializeClient = async () => {
  if (!client) {
    try {
      const { GoogleAdsApi } = await import('google-ads-api');
      client = new GoogleAdsApi({
        client_id: config.client_id!,
        client_secret: config.client_secret!,
        developer_token: config.developer_token!,
      });
    } catch (error) {
      console.warn('Failed to initialize Google Ads client, using mock data');
      return null;
    }
  }
  return client;
};

// Отримання клієнта для конкретного customer_id
export const getCustomer = async (customerId: string) => {
  const client = await initializeClient();
  if (!client) {
    return {
      query: async () => mockCampaigns,
      campaigns: {
        create: async (data: any) => ({
          campaign: {
            id: String(mockCampaigns.length + 1),
            ...data,
            status: 'ENABLED',
            budget_amount_micros: data.budget_amount_micros || 0,
          }
        }),
        update: async (data: any) => ({
          campaign: {
            ...data,
            status: data.status,
          }
        })
      }
    };
  }
  return client.Customer({
    customer_id: customerId,
    refresh_token: config.refresh_token!,
  });
};

// Отримання списку кампаній
export const getCampaigns = async (customerId: string) => {
  const customer = await getCustomer(customerId);
  const query = `
    SELECT 
      campaign.id,
      campaign.name,
      campaign.status,
      campaign.advertising_channel_type,
      campaign.start_date,
      campaign.end_date,
      campaign.budget_amount_micros,
      campaign.bidding_strategy_type
    FROM campaign
    ORDER BY campaign.id DESC
  `;

  try {
    const response = await customer.query(query);
    return response;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error;
  }
};

// Створення нової кампанії
export const createCampaign = async (
  customerId: string,
  campaignData: {
    name: string;
    budget: number;
    startDate: string;
    endDate?: string;
    biddingStrategy: string;
    channelType: string;
  }
) => {
  const customer = await getCustomer(customerId);
  
  try {
    const campaign = await customer.campaigns.create({
      name: campaignData.name,
      status: 'ENABLED',
      advertising_channel_type: campaignData.channelType,
      start_date: campaignData.startDate,
      end_date: campaignData.endDate,
      budget_amount_micros: campaignData.budget * 1000000, // Конвертуємо в мікро
      bidding_strategy_type: campaignData.biddingStrategy,
    });

    return campaign;
  } catch (error) {
    console.error('Error creating campaign:', error);
    throw error;
  }
};

// Отримання статистики кампанії
export const getCampaignStats = async (customerId: string, campaignId: string) => {
  const customer = await getCustomer(customerId);
  const query = `
    SELECT 
      campaign.id,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      metrics.average_cpc
    FROM campaign
    WHERE campaign.id = ${campaignId}
  `;

  try {
    const response = await customer.query(query);
    return response;
  } catch (error) {
    console.error('Error fetching campaign stats:', error);
    throw error;
  }
};

// Оновлення статусу кампанії
export const updateCampaignStatus = async (
  customerId: string,
  campaignId: string,
  status: 'ENABLED' | 'PAUSED' | 'REMOVED'
) => {
  const customer = await getCustomer(customerId);
  
  try {
    const campaign = await customer.campaigns.update({
      resource_name: `customers/${customerId}/campaigns/${campaignId}`,
      status,
    });

    return campaign;
  } catch (error) {
    console.error('Error updating campaign status:', error);
    throw error;
  }
}; 