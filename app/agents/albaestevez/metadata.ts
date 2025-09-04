import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alba Estévez - Licensed Insurance Agent | Unity Financial Network',
  description: 'Meet Alba Estévez, your trusted insurance agent in Miami. Specializing in ACA health plans, Medicare, life insurance, and more. Get your free consultation today! Bilingual service (English/Español).',
  keywords: 'Alba Estévez, insurance agent Miami, agente de seguros Miami, ACA insurance, Medicare agent, life insurance Miami, seguro de salud, Obamacare Miami, health insurance agent, bilingual insurance agent',
  authors: [{ name: 'Alba Estévez - Unity Financial Network' }],
  openGraph: {
    title: 'Alba Estévez - Your Trusted Insurance Agent in Miami',
    description: 'Get personalized insurance solutions with Alba Estévez. Over 10 years of experience helping families find the perfect coverage. Free consultation available!',
    type: 'profile',
    firstName: 'Alba',
    lastName: 'Estévez',
    username: 'albaestevez',
    images: [
      {
        url: '/images/agents/alba-estevez-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Alba Estévez - Licensed Insurance Agent',
      }
    ],
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    siteName: 'Unity Financial Network',
    url: 'https://unityfinancialnetwork.com/agents/albaestevez',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alba Estévez - Licensed Insurance Agent',
    description: 'Specializing in health, Medicare, life & auto insurance. Bilingual service. Get your free consultation today!',
    images: ['/images/agents/alba-estevez-twitter.jpg'],
    creator: '@albaestevez',
  },
  alternates: {
    canonical: 'https://unityfinancialnetwork.com/agents/albaestevez',
    languages: {
      'en-US': 'https://unityfinancialnetwork.com/agents/albaestevez',
      'es-ES': 'https://unityfinancialnetwork.com/es/agents/albaestevez',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'Insurance Agent',
}