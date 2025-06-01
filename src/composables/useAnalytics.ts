import { useApi } from '@/composables/useApi'

interface AnalyticsOverview {
  total_campaigns: number;
  total_ad_groups: number;
  total_ads: number;
  campaigns_by_status: {
    paused: number;
    enabled: number;
  };
  total_budget: number;
  average_budget: number;
  average_cpc_bid_micros: number;
  ads_by_type: {
    text: number;
    image: number;
  };
}

interface Campaign {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  budget_amount: number;
  status: string;
  advertising_channel_type: string;
  ad_groups: any[];
}

interface ChartDataPoint {
  date: string;
  value: number;
}

interface PerformanceMetrics {
  impressions: number;
  clicks: number;
  conversions: number;
  cost: number;
  ctr: number;
  cpc: number;
  conversion_rate: number;
  average_position: number;
  quality_score: number;
  bounce_rate: number;
  time_on_site: number;
}

interface DeviceStats {
  desktop: number;
  mobile: number;
  tablet: number;
}

interface LocationStats {
  country: string;
  impressions: number;
  clicks: number;
  conversions: number;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export type { AnalyticsOverview, Campaign };
export const useAnalytics = () => {
  const getOverview = async (): Promise<ApiResponse<AnalyticsOverview>> => {
    const response = await useApi<AnalyticsOverview>('GET', '/analytics/overview')
    return {
      data: response.data || {
        total_campaigns: 0,
        total_ad_groups: 0,
        total_ads: 0,
        campaigns_by_status: { paused: 0, enabled: 0 },
        total_budget: 0,
        average_budget: 0,
        average_cpc_bid_micros: 0,
        ads_by_type: { text: 0, image: 0 }
      },
      status: 200
    }
  }

  const getEndingSoon = async (): Promise<ApiResponse<Campaign[]>> => {
    const response = await useApi<Campaign[]>('GET', '/analytics/ending_soon')
    return {
      data: response.data || [],
      status: 200
    }
  }

  const getEmptyCampaigns = async (): Promise<ApiResponse<Campaign[]>> => {
    const response = await useApi<Campaign[]>('GET', '/analytics/empty_campaigns')
    return {
      data: response.data || [],
      status: 200
    }
  }

  const getPerformanceMetrics = async (): Promise<ApiResponse<PerformanceMetrics>> => {
    const response = await useApi<PerformanceMetrics>('GET', '/analytics/performance')
    return {
      data: response.data || {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        cost: 0,
        ctr: 0,
        cpc: 0,
        conversion_rate: 0,
        average_position: 0,
        quality_score: 0,
        bounce_rate: 0,
        time_on_site: 0
      },
      status: 200
    }
  }

  const getImpressionsChart = async (): Promise<ApiResponse<ChartDataPoint[]>> => {
    const response = await useApi<ChartDataPoint[]>('GET', '/analytics/charts/impressions')
    return {
      data: response.data || [],
      status: 200
    }
  }

  const getClicksChart = async (): Promise<ApiResponse<ChartDataPoint[]>> => {
    const response = await useApi<ChartDataPoint[]>('GET', '/analytics/charts/clicks')
    return {
      data: response.data || [],
      status: 200
    }
  }

  const getConversionsChart = async (): Promise<ApiResponse<ChartDataPoint[]>> => {
    const response = await useApi<ChartDataPoint[]>('GET', '/analytics/charts/conversions')
    return {
      data: response.data || [],
      status: 200
    }
  }

  const getDeviceStats = async (): Promise<ApiResponse<DeviceStats>> => {
    const response = await useApi<DeviceStats>('GET', '/analytics/devices')
    return {
      data: response.data || {
        desktop: 0,
        mobile: 0,
        tablet: 0
      },
      status: 200
    }
  }

  const getLocationStats = async (): Promise<ApiResponse<LocationStats[]>> => {
    const response = await useApi<LocationStats[]>('GET', '/analytics/locations')
    return {
      data: response.data || [],
      status: 200
    }
  }

  const getQualityScoreChart = async (): Promise<ApiResponse<ChartDataPoint[]>> => {
    const response = await useApi<ChartDataPoint[]>('GET', '/analytics/charts/quality-score')
    return {
      data: response.data || [],
      status: 200
    }
  }

  const getBounceRateChart = async (): Promise<ApiResponse<ChartDataPoint[]>> => {
    const response = await useApi<ChartDataPoint[]>('GET', '/analytics/charts/bounce-rate')
    return {
      data: response.data || [],
      status: 200
    }
  }

  return {
    getOverview,
    getEndingSoon,
    getEmptyCampaigns,
    getPerformanceMetrics,
    getImpressionsChart,
    getClicksChart,
    getConversionsChart,
    getDeviceStats,
    getLocationStats,
    getQualityScoreChart,
    getBounceRateChart
  }
} 