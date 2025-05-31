export const companies = [
  {
    id: 1,
    name: 'Company 1',
    ads: [
      { id: 1, name: 'Ad 1', images: ['url1', 'url2'] },
      { id: 2, name: 'Ad 2', images: ['url3', 'url4', 'url5'] }
    ]
  },
  {
    id: 2,
    name: 'Company 2',
    ads: [
      { id: 3, name: 'Ad 3', images: ['url6', 'url7'] },
      { id: 4, name: 'Ad 4', images: ['url8'] }
    ]
  }
]

export const getRandomViews = () => Math.floor(Math.random() * 1000)
export const getRandomLikes = () => Math.floor(Math.random() * 100) 