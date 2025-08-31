/**
 * @fileoverview Main home page component for Unity Financial Network
 * 
 * This is the primary landing page that showcases the company's services,
 * values, and contact information. It implements a modern, vibrant design
 * with smooth animations and bilingual support.
 * 
 * The page structure includes:
 * - Hero section with compelling value proposition
 * - Services overview with interactive cards
 * - About section highlighting company mission
 * - Customer testimonials for social proof
 * - Contact form and company information
 * 
 * Features:
 * - Responsive design for all device sizes
 * - Framer Motion animations for enhanced UX
 * - Bilingual content (English/Spanish)
 * - SEO optimized structure
 * - ElevenLabs AI assistant integration
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

'use client'

import HeaderSimple from '@/components/HeaderSimple'
import { useLanguage } from '@/contexts/LanguageContext'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

/**
 * Home Page Component
 * 
 * The main landing page that orchestrates all homepage sections and
 * provides a seamless user experience with language-aware content.
 * 
 * This component:
 * 1. Uses the language context to provide bilingual content
 * 2. Renders all homepage sections in proper order
 * 3. Applies overflow-hidden for smooth animations
 * 4. Ensures consistent language prop passing to all sections
 * 
 * Layout Structure:
 * - HeaderSimple: Navigation and language selector
 * - HeroSection: Main value proposition and CTAs
 * - ServicesSection: Service offerings overview
 * - AboutSection: Company mission and values
 * - TestimonialsSection: Customer success stories
 * - ContactSection: Contact form and information
 * - Footer: Links, legal info, and branding
 * 
 * @returns JSX element representing the complete homepage
 * 
 * @example
 * ```tsx
 * // This component is automatically rendered for the root route "/"
 * // Users see this page when visiting the main domain
 * ```
 */
export default function Home() {
  // Get current language from context for bilingual content
  const { language } = useLanguage()
  
  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <AboutSection language={language} />
      <TestimonialsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  )
}