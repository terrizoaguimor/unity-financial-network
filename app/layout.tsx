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
  title: 'Unity Financial Network - Your Personal Financial Concierge',
  description: 'At Unity Financial Network, we partner with top-rated carriers to provide tailored coverage that fits your unique needs and priorities.',
  keywords: 'insurance, financial services, ACA, Medicare, life insurance, auto insurance, home insurance',
  openGraph: {
    title: 'Unity Financial Network',
    description: 'More than insurance - your personal financial concierge!',
    images: ['/images/logo-main.png'],
    url: 'https://unityfinancialnetwork.com',
    siteName: 'Unity Financial Network',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unity Financial Network',
    description: 'More than insurance - your personal financial concierge!',
    images: ['/images/logo-main.png'],
  },
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
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-50 via-white to-purple-50`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}