/**
 * @fileoverview Header component for Unity Financial Network public website
 * 
 * This is a sophisticated navigation header with bilingual support, responsive design,
 * and modern UI animations. It serves as the primary navigation for the public website.
 * 
 * Features:
 * - Bilingual navigation (English/Spanish)
 * - Responsive design with mobile hamburger menu
 * - Animated dropdowns for insurance plans
 * - Scroll-based styling changes
 * - Contact information in top bar
 * - Direct access to agent portal
 * - Modern pill-style navigation design
 * - Framer Motion animations
 * 
 * The header excludes itself from agent and admin portals, which have their own layouts.
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MenuIcon as Menu, 
  CloseIcon as X, 
  ArrowRightIcon as ChevronDown,
  ContactIcon as Phone, 
  EmailIcon as Mail,
  LanguageIcon as Globe
} from '@/components/icons/UnityIcons'
import { Sparkles, LogIn } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Translation object for header navigation and labels
 * 
 * Contains all text content for the header in both supported languages.
 * Includes navigation items, CTAs, and complete insurance product listings.
 * 
 * @constant
 * @type {Object}
 * @property {Object} en - English translations
 * @property {Object} es - Spanish translations
 */
const translations = {
  en: {
    about: 'About us',
    insurancePlans: 'Insurance Plans',
    getQuote: 'Get a free quote',
    blog: 'Blog',
    joinUnity: 'Join Unity',
    contact: 'Contact',
    freeConsultation: 'Free Consultation',
    insuranceTypes: [
      'Affordable Care Act (ACA)',
      'Medicare',
      'Medicare Advantage',
      'Term Life Insurance',
      'Permanent Life Insurance',
      'Index Universal Life (IUL)',
      'Final Expense Insurance',
      'Commercial Insurance for Trucking',
      'Personal Auto Insurance',
      'Home & Property Insurance',
      'Supplemental Insurance'
    ]
  },
  es: {
    about: 'Nosotros',
    insurancePlans: 'Planes de Seguro',
    getQuote: 'Cotización gratis',
    blog: 'Blog',
    joinUnity: 'Únete a Unity',
    contact: 'Contacto',
    freeConsultation: 'Consulta Gratis',
    insuranceTypes: [
      'Ley de Cuidado de Salud Asequible (ACA)',
      'Medicare',
      'Medicare Advantage',
      'Seguro de Vida a Término',
      'Seguro de Vida Permanente',
      'Vida Universal Indexada (IUL)',
      'Seguro de Gastos Finales',
      'Seguro Comercial para Camiones',
      'Seguro de Auto Personal',
      'Seguro de Hogar y Propiedad',
      'Seguro Suplementario'
    ]
  }
}

/**
 * HeaderSimple Component
 * 
 * A sophisticated navigation header that adapts to user preferences and scroll position.
 * 
 * State Management:
 * - mobileMenuOpen: Controls mobile hamburger menu visibility
 * - scrolled: Tracks scroll position for header styling changes
 * - dropdownOpen: Manages insurance plans dropdown visibility
 * - langDropdownOpen: Controls language selector dropdown
 * 
 * Features Implemented:
 * 1. **Responsive Design**: Desktop pill navigation, mobile hamburger menu
 * 2. **Bilingual Support**: Dynamic language switching with persistent storage
 * 3. **Scroll Effects**: Header styling changes based on scroll position
 * 4. **Animated Dropdowns**: Smooth transitions for insurance plans menu
 * 5. **Contact Information**: Phone and email links in top bar
 * 6. **Portal Access**: Direct links to agent and admin login pages
 * 7. **Modern Animations**: Framer Motion for smooth interactions
 * 
 * Navigation Structure:
 * - About Us
 * - Insurance Plans (with dropdown of all available products)
 * - Get Quote
 * - Blog
 * - Join Unity
 * - Contact
 * 
 * @returns JSX element representing the complete navigation header
 * 
 * @example
 * ```tsx
 * // Used automatically in the main layout
 * <HeaderSimple />
 * ```
 */
export default function HeaderSimple() {
  // State management for UI interactions
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  
  // Get current language and setter from context
  const { language, setLanguage } = useLanguage()
  
  // Get translations for current language
  const t = translations[language]

  /**
   * Navigation configuration with dynamic translations
   * 
   * Defines the main navigation structure including:
   * - Regular menu items with href links
   * - Insurance Plans dropdown with all product categories
   * - Corresponding service page routes
   */
  const navigation = [
    { name: t.about, href: '/about' },
    { 
      name: t.insurancePlans, 
      href: '/services',
      dropdown: t.insuranceTypes,
      dropdownLinks: [
        '/services/aca',
        '/services/medicare',
        '/services/medicare-advantage',
        '/services/term-life',
        '/services/permanent-life',
        '/services/iul',
        '/services/final-expense',
        '/services/commercial-trucking',
        '/services/auto',
        '/services/home',
        '/services/supplemental'
      ]
    },
    { name: t.getQuote, href: '/quote' },
    // { name: t.blog, href: '/blog' }, // Hidden temporarily
    { name: t.joinUnity, href: '/join-unity' },
    { name: t.contact, href: '/contact' },
  ]

  /**
   * Scroll event handler for dynamic header styling
   * 
   * Changes header appearance based on scroll position:
   * - Adds backdrop blur and shadow when scrolled
   * - Adjusts padding and background opacity
   * - Provides smooth transition between states
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-[9999] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-sm py-2' 
          : 'bg-white/95 backdrop-blur-lg py-3'
      }`}
    >
      <nav className="container-custom">
        {/* Top Bar for Desktop - More subtle */}
        <div className="hidden lg:flex justify-between items-center mb-2 pb-2 border-b border-gray-100/30">
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:7868285576" className="flex items-center gap-1.5 text-gray-500 hover:text-primary-600 transition-colors group">
              <Phone className="h-3 w-3 opacity-70 group-hover:opacity-100" />
              <span>(786) 828-5576</span>
            </a>
            <span className="text-gray-300">|</span>
            <a href="mailto:hello@unityfinancialnetwork.com" className="flex items-center gap-1.5 text-gray-500 hover:text-primary-600 transition-colors group">
              <Mail className="h-3 w-3 opacity-70 group-hover:opacity-100" />
              <span>hello@unityfinancialnetwork.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            {/* Language Selector - Pill Style */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-full transition-all text-xs"
                aria-label={language === 'en' ? 'Change language' : 'Cambiar idioma'}
                aria-expanded={langDropdownOpen}
              >
                <span className="text-gray-600">
                  {language === 'en' ? '🇺🇸' : '🇪🇸'}
                </span>
                <span className="text-gray-600 font-medium">
                  {language === 'en' ? 'EN' : 'ES'}
                </span>
                <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100"
                  >
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setLangDropdownOpen(false)
                      }}
                      className={`w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors text-xs ${
                        language === 'en' ? 'bg-primary-50/50' : ''
                      }`}
                    >
                      <span>🇺🇸</span>
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('es')
                        setLangDropdownOpen(false)
                      }}
                      className={`w-full px-3 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors text-xs ${
                        language === 'es' ? 'bg-primary-50/50' : ''
                      }`}
                    >
                      <span>🇪🇸</span>
                      <span>Español</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="relative">
              <Image
                src="/images/logo-main.svg"
                alt="Unity Financial Network"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Pill Style */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Navigation Pills */}
            <div className="flex items-center bg-gray-50/80 backdrop-blur-sm rounded-full p-1 gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white text-sm font-medium transition-all rounded-full flex items-center gap-1">
                        {item.name}
                        <ChevronDown className={`h-3 w-3 opacity-50 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                          >
                            <div className="p-1 max-h-80 overflow-y-auto">
                              {item.dropdown.map((plan, index) => (
                                <Link
                                  key={plan}
                                  href={item.dropdownLinks?.[index] || '#'}
                                  className="block"
                                >
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.01 }}
                                    className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-primary-600 rounded-lg transition-all cursor-pointer"
                                  >
                                    {plan}
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white text-sm font-medium transition-all rounded-full"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA Buttons - Pill Style */}
            <div className="flex items-center gap-2 ml-2">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-medium rounded-full hover:shadow-md transition-all"
                >
                  {t.freeConsultation}
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button & Language Selector */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="p-2 rounded-lg hover:bg-primary-50 transition-colors"
              aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            >
              <Globe className="h-5 w-5 text-primary-600" />
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-primary-50 transition-colors"
              aria-label={mobileMenuOpen ? 
                (language === 'en' ? 'Close menu' : 'Cerrar menú') : 
                (language === 'en' ? 'Open menu' : 'Abrir menú')
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary-600" />
              ) : (
                <Menu className="h-6 w-6 text-primary-600" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[60px] left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-[9998] max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="container-custom py-4 space-y-3">
              {/* Language Toggle Mobile */}
              <div className="flex justify-center gap-2 pb-3 border-b border-gray-100">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded-lg ${language === 'en' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100'}`}
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-4 py-2 rounded-lg ${language === 'es' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100'}`}
                >
                  🇪🇸 Español
                </button>
              </div>

              {/* Navigation Items Mobile */}
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="border-b border-gray-100 pb-3"
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full flex items-center justify-between text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.dropdown.map((plan, idx) => (
                            <Link
                              key={plan}
                              href={item.dropdownLinks?.[idx] || '#'}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-gray-600 hover:text-primary-600 py-1"
                            >
                              {plan}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* CTAs Mobile */}
              <div className="pt-3 space-y-3">
                <Link href="/contact" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full">
                    {t.freeConsultation}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}