import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unityfinancialnetwork.com'
  const currentDate = new Date().toISOString()
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/join-unity`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  // Service pages
  const servicePages = [
    'aca',
    'medicare',
    'medicare-advantage',
    'medicare-supplement',
    'prescription-drug',
    'term-life',
    'whole-life',
    'universal-life',
    'final-expense',
    'auto',
    'home',
    'commercial'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Legal pages
  const legalPages = [
    'privacy',
    'terms',
    'cookies',
    'opt-out'
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))
  
  // Spanish versions (alternate language pages)
  const spanishPages = mainPages.map(page => ({
    ...page,
    url: `${page.url}/es`,
    priority: page.priority * 0.9, // Slightly lower priority for alternate language
  }))
  
  return [...mainPages, ...servicePages, ...legalPages, ...spanishPages]
}