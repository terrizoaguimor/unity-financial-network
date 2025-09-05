/**
 * @fileoverview Footer component for Unity Financial Network
 * 
 * A comprehensive footer component that provides site navigation, social links,
 * newsletter signup, and company information with bilingual support.
 * 
 * Features:
 * - Bilingual content (English/Spanish)
 * - Organized link categories (Services, Company, Resources)
 * - Social media integration with animated icons
 * - Newsletter subscription form
 * - Scroll-to-top functionality
 * - Gradient background with decorative elements
 * - Responsive grid layout
 * - Framer Motion animations
 * 
 * The footer serves as the final call-to-action area and provides
 * comprehensive site navigation for users who scroll to the bottom.
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Heart, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const TurnstileWidget = dynamic(() => import('@/components/TurnstileWidget'), { ssr: false })

/**
 * Footer links configuration function
 * 
 * Generates footer navigation links based on the selected language.
 * Organizes links into logical categories for better user experience.
 * 
 * @param lang - Current language ('en' | 'es')
 * @returns Object containing categorized footer links with translations
 */
const getFooterLinks = (lang: 'en' | 'es') => ({
  services: [
    { name: lang === 'en' ? 'Affordable Care Act' : 'Ley de Cuidado de Salud', href: '/services/aca' },
    { name: lang === 'en' ? 'Medicare Plans' : 'Planes de Medicare', href: '/services/medicare' },
    { name: lang === 'en' ? 'Life Insurance' : 'Seguro de Vida', href: '/services/term-life' },
    { name: lang === 'en' ? 'Auto Insurance' : 'Seguro de Auto', href: '/services/auto' },
    { name: lang === 'en' ? 'Home Insurance' : 'Seguro de Hogar', href: '/services/home' },
  ],
  company: [
    { name: lang === 'en' ? 'About Us' : 'Nosotros', href: '/about' },
    // { name: lang === 'en' ? 'Blog' : 'Blog', href: '/blog' }, // Hidden temporarily
    { name: lang === 'en' ? 'Careers' : 'Carreras', href: '/join-unity' },
    { name: lang === 'en' ? 'Contact' : 'Contacto', href: '/contact' },
    { name: lang === 'en' ? 'Services' : 'Servicios', href: '/services' },
  ],
  resources: [
    { name: lang === 'en' ? 'Get a Quote' : 'Obtener Cotización', href: '/quote' },
    { name: lang === 'en' ? 'FAQ' : 'Preguntas Frecuentes', href: '/contact#faq' },
    { name: lang === 'en' ? 'Privacy Policy' : 'Política de Privacidad', href: '/privacy' },
    { name: lang === 'en' ? 'Terms of Service' : 'Términos de Servicio', href: '/terms' },
    { name: lang === 'en' ? 'Cookie Policy' : 'Política de Cookies', href: '/cookies' },
    { name: lang === 'en' ? 'Opt-Out' : 'Cancelar Suscripción', href: '/opt-out' },
  ],
})

/**
 * Footer component props interface
 * 
 * @interface FooterProps
 * @property {('en'|'es')} language - Optional language setting, defaults to 'en'
 */
interface FooterProps {
  language?: 'en' | 'es'
}

/**
 * Footer Component
 * 
 * A feature-rich footer that serves as the final navigation and engagement area.
 * 
 * Layout Structure:
 * 1. **Brand Section**: Logo, description, social media links
 * 2. **Services Links**: Quick access to insurance products
 * 3. **Company Links**: About, blog, careers, contact information
 * 4. **Newsletter Section**: Email subscription with call-to-action
 * 5. **Bottom Bar**: Copyright, legal links, additional policies
 * 6. **Scroll-to-Top**: Fixed button for easy navigation
 * 
 * Interactive Features:
 * - Animated social media icons with hover effects
 * - Form submission handling for newsletter
 * - Scroll-based visibility for back-to-top button
 * - Smooth scroll animations for page navigation
 * - Link hover animations with translate effects
 * 
 * Design Elements:
 * - Gradient background (gray-900 to black)
 * - Decorative wave SVG at top
 * - Background blur effects for depth
 * - Consistent spacing and typography
 * 
 * @param props - Component properties
 * @param props.language - Current language for content translation
 * @returns JSX element representing the complete footer
 * 
 * @example
 * ```tsx
 * // Used in homepage and other public pages
 * <Footer language={language} />
 * ```
 */
export default function Footer({ language = 'en' }: FooterProps) {
  // State for scroll-to-top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [acceptNewsletter, setAcceptNewsletter] = useState(false)
  
  // Get translated footer links for current language
  const footerLinks = getFooterLinks(language)

  /**
   * Scroll event listener for scroll-to-top button visibility
   * Shows button when user has scrolled more than 400px down
   */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Smooth scroll to top functionality
   * Provides smooth animation when returning to page top
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 50C240 10 480 10 720 50C960 90 1200 90 1440 50V0H0V50Z"
            fill="url(#footer-gradient)"
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#522784" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-custom pt-20 pb-10 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/logo-white.svg"
              alt="Unity Financial Network"
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-neutral-300 mb-6">
              {language === 'en' 
                ? 'Your personal financial concierge, providing comprehensive insurance solutions for a secure future.'
                : 'Tu conserje financiero personal, brindando soluciones integrales de seguros para un futuro seguro.'}
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">{language === 'en' ? 'Services' : 'Servicios'}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">{language === 'en' ? 'Company' : 'Empresa'}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">{language === 'en' ? 'Stay Updated' : 'Manténte Actualizado'}</h3>
            <p className="text-neutral-300 mb-4">
              {language === 'en' 
                ? 'Subscribe to get the latest insurance tips and financial advice.'
                : 'Suscríbete para recibir los últimos consejos de seguros y asesoramiento financiero.'}
            </p>
            <form className="space-y-3" onSubmit={(e) => {
              e.preventDefault()
              if (turnstileToken && acceptNewsletter && newsletterEmail) {
                // Newsletter subscription logic would go here
                console.log('Newsletter subscription:', newsletterEmail)
                setNewsletterEmail('')
                setAcceptNewsletter(false)
                setTurnstileToken(null)
              }
            }}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={language === 'en' ? 'Enter your email' : 'Ingresa tu correo electrónico'}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder-neutral-400"
                required
              />
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={acceptNewsletter}
                  onChange={(e) => setAcceptNewsletter(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 bg-white/10 border-white/30 rounded focus:ring-accent focus:ring-2"
                />
                <span className="text-xs text-neutral-300">
                  {language === 'en' ? (
                    <>
                      I accept the{' '}
                      <Link href="/terms" className="text-accent hover:text-accent-400 underline">
                        Terms
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-accent hover:text-accent-400 underline">
                        Privacy Policy
                      </Link>
                    </>
                  ) : (
                    <>
                      Acepto los{' '}
                      <Link href="/terms" className="text-accent hover:text-accent-400 underline">
                        Términos
                      </Link>
                      {' '}y la{' '}
                      <Link href="/privacy" className="text-accent hover:text-accent-400 underline">
                        Política de Privacidad
                      </Link>
                    </>
                  )}
                </span>
              </label>
              <TurnstileWidget
                onVerify={(token) => setTurnstileToken(token)}
                onError={() => console.error('Turnstile verification failed')}
                onExpire={() => setTurnstileToken(null)}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!turnstileToken}
                className="w-full py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language === 'en' ? 'Subscribe' : 'Suscribirse'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-300">
              <span>© 2025 Unity Financial Network. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-300 hover:text-accent transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
              </Link>
              <Link href="/terms" className="text-neutral-300 hover:text-accent transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Términos de Servicio'}
              </Link>
              <Link href="/cookies" className="text-neutral-300 hover:text-accent transition-colors">
                {language === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
              </Link>
              <Link href="/opt-out" className="text-neutral-300 hover:text-accent transition-colors">
                {language === 'en' ? 'Opt-Out' : 'Cancelar Suscripción'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-primary-700 transition-all z-50"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </footer>
  )
}