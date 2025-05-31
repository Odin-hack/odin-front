import { ref } from 'vue'
import { companies as mockCompanies, getRandomViews, getRandomLikes } from '@/mock/statistics'

export function useStatistics() {
  const companies = ref(mockCompanies)

  const getCompanyImages = (company: any) => {
    return company.ads.reduce((total: number, ad: any) => total + ad.images.length, 0)
  }

  const getTotalAds = () => {
    return companies.value.reduce((total: number, company: any) => total + company.ads.length, 0)
  }

  const getTotalImages = () => {
    return companies.value.reduce((total: number, company: any) => total + getCompanyImages(company), 0)
  }

  const getTotalViews = () => {
    return companies.value.reduce((total: number, company: any) => 
      total + company.ads.reduce((sum: number) => sum + getRandomViews(), 0), 0)
  }

  const getTotalLikes = () => {
    return companies.value.reduce((total: number, company: any) => 
      total + company.ads.reduce((sum: number) => sum + getRandomLikes(), 0), 0)
  }

  const getPerformanceData = (company: any) => {
    const totalViews = company.ads.reduce((sum: number) => sum + getRandomViews(), 0)
    const totalLikes = company.ads.reduce((sum: number) => sum + getRandomLikes(), 0)
    const totalImages = getCompanyImages(company)
    
    return {
      labels: ['Views', 'Likes', 'Images'],
      datasets: [
        {
          data: [totalViews, totalLikes, totalImages],
          backgroundColor: [
            'rgba(20, 184, 166, 0.7)',
            'rgba(14, 165, 233, 0.7)',
            'rgba(99, 102, 241, 0.7)'
          ],
          borderColor: [
            'rgba(20, 184, 166, 1)',
            'rgba(14, 165, 233, 1)',
            'rgba(99, 102, 241, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
  }

  const getEngagementTrendData = (ad: any) => {
    const views = getRandomViews()
    const likes = getRandomLikes()
    
    return {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Views',
          data: Array.from({length: 7}, () => Math.floor(views * (0.5 + Math.random() * 0.5))),
          borderColor: '#14b8a6',
          backgroundColor: 'rgba(20, 184, 166, 0.1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Likes',
          data: Array.from({length: 7}, () => Math.floor(likes * (0.5 + Math.random() * 0.5))),
          borderColor: '#0ea5e9',
          backgroundColor: 'rgba(14, 165, 233, 0.1)',
          fill: true,
          tension: 0.4
        }
      ]
    }
  }

  const getOverallTrendData = () => {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const palette = [
      '#14b8a6', // teal
      '#7c3aed', // purple
      '#0ea5e9', // blue
      '#f59e42', // orange
      '#10b981', // green
      '#f43f5e', // pink
      '#64748b'  // slate
    ]
    const datasets = companies.value.map((company: any, idx: number) => ({
      label: company.name,
      data: Array.from({length: 7}, () => Math.floor(getRandomViews() * (0.5 + Math.random() * 0.5))),
      borderColor: palette[idx % palette.length],
      backgroundColor: palette[idx % palette.length] + '22',
      fill: false,
      tension: 0.4
    }))
    // Optionally, add total line:
    datasets.unshift({
      label: 'Total Views',
      data: Array.from({length: 7}, () => Math.floor(getTotalViews() * (0.5 + Math.random() * 0.5))),
      borderColor: '#111827',
      backgroundColor: '#11182722',
      fill: false,
      tension: 0.4
    })
    return {
      labels,
      datasets
    }
  }

  return {
    companies,
    getCompanyImages,
    getTotalAds,
    getTotalImages,
    getTotalViews,
    getTotalLikes,
    getPerformanceData,
    getEngagementTrendData,
    getOverallTrendData,
    getRandomViews,
    getRandomLikes
  }
} 