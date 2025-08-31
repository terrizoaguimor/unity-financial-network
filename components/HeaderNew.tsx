'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LanguageSelector from './LanguageSelector'

export default function HeaderNew({ locale }: { locale: string }) {
  const t = useTranslations('header')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const navigation = [
    { name: t('about'), href: '#about' },
    { 
      name: t('insurancePlans'), 
      href: '#services',
      dropdown: [
        t('insuranceTypes.aca'),
        t('insuranceTypes.medicare'),
        t('insuranceTypes.medicareAdvantage'),
        t('insuranceTypes.termLife'),
        t('insuranceTypes.permanentLife'),
        t('insuranceTypes.iul'),
        t('insuranceTypes.finalExpense'),
        t('insuranceTypes.commercial'),
        t('insuranceTypes.auto'),
        t('insuranceTypes.home'),
        t('insuranceTypes.supplemental')
      ]
    },
    { name: t('getQuote'), href: '#quote' },
    { name: t('blog'), href: '#blog' },
    { name: t('joinUnity'), href: '#join' },
    { name: t('contact'), href: '#contact' },
  ]

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3' 
          : 'bg-gradient-to-b from-white/90 to-transparent py-5'
      }`}
    >
      <nav className="container-custom">
        {/* Top Bar for Desktop */}
        <div className="hidden lg:flex justify-between items-center mb-4 pb-3 border-b border-gray-100/50">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:7869636392" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">(786) 963-6392</span>
            </a>
            <a href="mailto:info@unityfinancialnetwork.com" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span className="font-medium">info@unityfinancialnetwork.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector currentLocale={locale} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t('payments')}
            </motion.button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href={`/${locale}`} className="relative">
              <Image
                src="/images/logo-main.svg"
                alt="Unity Financial Network"
                width={200}
                height={66}
                className="h-14 md:h-16 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-all group py-2">
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                        >
                          <div className="bg-gradient-to-br from-primary-50 to-purple-50 p-2 max-h-96 overflow-y-auto">
                            <div className="grid gap-1">
                              {item.dropdown.map((plan, index) => (
                                <motion.a
                                  key={plan}
                                  href="#"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.02 }}
                                  className="px-4 py-3 text-sm text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg transition-all hover:translate-x-1 hover:shadow-md"
                                >
                                  {plan}
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-all relative group py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                )}
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all"
            >
              {t('freeConsultation')}
            </motion.button>
          </div>

          {/* Mobile Menu Button & Language Selector */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSelector currentLocale={locale} />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-primary-50 transition-colors"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
          >
            <div className="container-custom py-4 space-y-3">
              {/* Contact Info Mobile */}
              <div className="flex flex-col gap-2 pb-3 border-b border-gray-100">
                <a href="tel:7869636392" className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>(786) 963-6392</span>
                </a>
                <a href="mailto:info@unityfinancialnetwork.com" className="flex items-center gap-2 text-gray-600 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>info@unityfinancialnetwork.com</span>
                </a>
              </div>

              {/* Navigation Items Mobile */}
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="border-b border-gray-100 pb-3"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.dropdown.map((plan) => (
                        <a
                          key={plan}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-primary-600 py-1"
                        >
                          {plan}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* CTAs Mobile */}
              <div className="pt-3 space-y-3">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full">
                  {t('freeConsultation')}
                </button>
                <button className="w-full px-6 py-3 bg-primary-50 text-primary-600 font-semibold rounded-full">
                  {t('payments')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}