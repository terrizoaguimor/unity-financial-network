/**
 * @fileoverview Root layout component for Unity Financial Network application
 * 
 * This file serves as the main layout wrapper for the entire Next.js application.
 * It provides global context providers and metadata configuration.
 * 
 * The layout includes:
 * - SEO metadata and OpenGraph configuration
 * - Language context for i18n support (English/Spanish)
 * - Authentication context for user session management
 * - Global styling with purple gradient background
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieConsent from '@/components/CookieConsent'

/**
 * Inter font configuration for optimal Latin character display
 */
const inter = Inter({ subsets: ['latin'] })

/**
 * SEO metadata configuration for the application
 * 
 * Includes comprehensive metadata for search engines and social media:
 * - OpenGraph tags for Facebook/LinkedIn sharing
 * - Twitter Card configuration
 * - Keywords for SEO optimization
 * - Base URL for canonical links
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://unityfinancialnetwork.com'),
  title: {
    default: 'Unity Financial Network - Insurance & Financial Services in Miami, FL',
    template: '%s | Unity Financial Network'
  },
  description: 'Unity Financial Network offers comprehensive insurance solutions including ACA health plans, Medicare, life insurance, auto, and home insurance in Miami, Florida. Get personalized coverage with bilingual support. Call (786) 963-6392 for a free quote.',
  keywords: 'insurance Miami, seguro medico Miami, ACA insurance Florida, Medicare plans Miami, life insurance Florida, auto insurance Miami, home insurance Florida, health insurance marketplace, Obamacare Miami, seguro de salud, Unity Financial Network, insurance agent Miami, bilingual insurance services, affordable health insurance, Medicare Advantage plans',
  authors: [{ name: 'Unity Financial Network' }],
  creator: 'Unity Financial Network',
  publisher: 'Unity Financial Network',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://unityfinancialnetwork.com',
    languages: {
      'en-US': 'https://unityfinancialnetwork.com',
      'es-ES': 'https://unityfinancialnetwork.com/es',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://unityfinancialnetwork.com',
    siteName: 'Unity Financial Network',
    title: 'Unity Financial Network - Your Trusted Insurance Partner in Miami',
    description: 'Get comprehensive insurance coverage with Unity Financial Network. ACA health plans, Medicare, life, auto & home insurance. Bilingual service. Call (786) 963-6392.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Unity Financial Network - Insurance Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unity Financial Network - Insurance Services Miami',
    description: 'Comprehensive insurance solutions in Miami. ACA, Medicare, Life, Auto & Home Insurance. Bilingual service. Get your free quote today!',
    images: ['/images/og-image.png'],
    creator: '@unityfinancial',
    site: '@unityfinancial',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  category: 'Insurance',
}

/**
 * Root Layout Component
 * 
 * This component wraps the entire application and provides:
 * 1. Global context providers for language and authentication
 * 2. Base HTML structure with Inter font
 * 3. Purple gradient background styling
 * 
 * The layout ensures that all pages have access to:
 * - Language switching functionality (EN/ES)
 * - Authentication state management
 * 
 * @param props - Component properties
 * @param props.children - Child components to render within the layout
 * @returns JSX element representing the root HTML structure
 * 
 * @example
 * ```tsx
 * // This layout automatically wraps all pages in the app
 * // No direct usage required - handled by Next.js app router
 * ```
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Unity Financial Network',
    description: 'Comprehensive insurance and financial services in Miami, Florida. ACA health plans, Medicare, life, auto, and home insurance with bilingual support.',
    url: 'https://unityfinancialnetwork.com',
    logo: 'https://unityfinancialnetwork.com/images/logo-main.svg',
    image: 'https://unityfinancialnetwork.com/images/og-image.png',
    telephone: '+1-786-963-6392',
    email: 'info@unityfinancialnetwork.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7950 NW 53rd St STE 136',
      addressLocality: 'Doral',
      addressRegion: 'FL',
      postalCode: '33166',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.8195,
      longitude: -80.3357
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.facebook.com/unityfinancialnetwork',
      'https://www.instagram.com/unityfinancialnetwork',
      'https://www.linkedin.com/company/unity-financial-network',
      'https://twitter.com/unityfinancial'
    ],
    areaServed: {
      '@type': 'State',
      name: 'Florida'
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '124'
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//unityfinancialnetwork.com" />
        
        {/* Critical CSS inlined - will be handled by Next.js automatically */}
        <link rel="preload" href="/_next/static/css/b39fa12a17e2fc01.css" as="style" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-purple-50 via-white to-purple-50`}>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}