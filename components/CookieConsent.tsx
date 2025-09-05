'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Shield, BarChart3, Settings } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

const translations = {
  en: {
    title: 'Cookie Preferences',
    subtitle: 'We use cookies to enhance your browsing experience and provide personalized content.',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All', 
    customize: 'Customize',
    savePreferences: 'Save Preferences',
    necessary: 'Necessary',
    analytics: 'Analytics',
    marketing: 'Marketing',
    functional: 'Functional',
    necessaryDesc: 'Required for the website to function properly',
    analyticsDesc: 'Help us understand how visitors interact with our website',
    marketingDesc: 'Used to deliver relevant advertisements and track campaign performance',
    functionalDesc: 'Enable enhanced functionality like live chat and language preferences',
    learnMore: 'Learn more in our',
    cookiePolicy: 'Cookie Policy',
    privacyPolicy: 'Privacy Policy'
  },
  es: {
    title: 'Preferencias de Cookies',
    subtitle: 'Utilizamos cookies para mejorar tu experiencia de navegación y proporcionar contenido personalizado.',
    acceptAll: 'Aceptar Todo',
    rejectAll: 'Rechazar Todo',
    customize: 'Personalizar', 
    savePreferences: 'Guardar Preferencias',
    necessary: 'Necesarias',
    analytics: 'Analíticas',
    marketing: 'Marketing',
    functional: 'Funcionales',
    necessaryDesc: 'Requeridas para que el sitio web funcione correctamente',
    analyticsDesc: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web',
    marketingDesc: 'Utilizadas para entregar anuncios relevantes y rastrear el rendimiento de campañas',
    functionalDesc: 'Permiten funcionalidades mejoradas como chat en vivo y preferencias de idioma',
    learnMore: 'Más información en nuestra',
    cookiePolicy: 'Política de Cookies',
    privacyPolicy: 'Política de Privacidad'
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be changed
    analytics: false,
    marketing: false,
    functional: false
  })

  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowCustomize(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(onlyNecessary)
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowCustomize(false)
  }

  const handleSaveCustom = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowCustomize(false)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return // Can't change necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const cookieCategories = [
    {
      key: 'necessary' as keyof CookiePreferences,
      name: t.necessary,
      description: t.necessaryDesc,
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      required: true
    },
    {
      key: 'functional' as keyof CookiePreferences,
      name: t.functional,
      description: t.functionalDesc,
      icon: Settings,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      name: t.analytics,
      description: t.analyticsDesc,
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      name: t.marketing,
      description: t.marketingDesc,
      icon: Cookie,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-[10000] max-w-md mx-auto md:max-w-lg lg:max-w-xl"
          >
            <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t.subtitle}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    {t.learnMore}{' '}
                    <Link href="/cookies" className="text-primary-600 hover:text-primary-700 underline">
                      {t.cookiePolicy}
                    </Link>
                    {' '}{language === 'en' ? 'and' : 'y'}{' '}
                    <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                      {t.privacyPolicy}
                    </Link>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                    >
                      {t.acceptAll}
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="flex-1 px-4 py-2 border border-primary/20 text-gray-700 rounded-lg hover:bg-primary/5 transition-colors font-medium text-sm"
                    >
                      {t.rejectAll}
                    </button>
                    <button
                      onClick={() => setShowCustomize(true)}
                      className="flex-1 px-4 py-2 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium text-sm"
                    >
                      {t.customize}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Customize Modal */}
      <AnimatePresence>
        {showCustomize && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10001] flex items-center justify-center p-4"
            onClick={() => setShowCustomize(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {t.title}
                </h2>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-96">
                <p className="text-gray-600 mb-6">{t.subtitle}</p>
                
                <div className="space-y-4">
                  {cookieCategories.map((category) => {
                    const IconComponent = category.icon
                    const isEnabled = preferences[category.key]
                    
                    return (
                      <div key={category.key} className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                              <IconComponent className={`w-4 h-4 ${category.color}`} />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">
                                {category.name}
                                {category.required && (
                                  <span className="ml-2 text-xs bg-primary/10 text-gray-600 px-2 py-1 rounded-full">
                                    {language === 'en' ? 'Required' : 'Requerido'}
                                  </span>
                                )}
                              </h3>
                            </div>
                          </div>
                          <button
                            onClick={() => togglePreference(category.key)}
                            disabled={category.required}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              isEnabled ? 'bg-primary-600' : 'bg-gray-300'
                            } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isEnabled ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">
                          {category.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex gap-3 p-6 border-t border-gray-200">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-2 border border-primary/20 text-gray-700 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  {t.rejectAll}
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {t.savePreferences}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:from-primary-700 hover:to-purple-700 transition-colors"
                >
                  {t.acceptAll}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}