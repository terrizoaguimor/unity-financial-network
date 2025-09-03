/**
 * @fileoverview Cookies Policy Page
 * 
 * Cookie policy for Unity Financial Network
 * Bilingual support (English/Spanish)
 * 
 * @module CookiesPage
 * @author Unity Financial Network
 * @version 1.0.0
 */

'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { 
  Cookie, Shield, Settings, BarChart3, Megaphone,
  Globe, Clock, Mail, AlertCircle, Info,
  ChevronRight, Smartphone, Monitor, Server,
  Eye, Lock, UserCheck, Trash2, RefreshCw
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'

export default function CookiesPage() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState('what-are-cookies')
  
  const content = {
    en: {
      title: 'Cookie Policy',
      subtitle: 'How we use cookies and similar technologies',
      lastUpdated: 'Last Updated: August 31, 2025',
      description: 'This Cookie Policy explains how Unity Financial Network uses cookies and similar technologies to recognize you when you visit our website.',
      sections: [
        {
          id: 'what-are-cookies',
          title: '1. What are cookies?',
          icon: Cookie,
          content: `
            <p>Small files that a site places on your device to remember preferences and improve the experience. We also use similar technologies (pixels, web beacons, and local storage).</p>
          `
        },
        {
          id: 'why-we-use',
          title: '2. Why do we use them?',
          icon: Info,
          subsections: [
            {
              title: 'Strictly Necessary',
              icon: Shield,
              description: 'Site functionality, security, session management.',
              color: 'red'
            },
            {
              title: 'Preferences',
              icon: Settings,
              description: 'Remember language/settings.',
              color: 'blue'
            },
            {
              title: 'Analytics and Performance',
              icon: BarChart3,
              description: 'Understand site usage (e.g., pages visited).',
              color: 'green'
            },
            {
              title: 'Marketing',
              icon: Megaphone,
              description: 'Measure campaign effectiveness and audiences (e.g., retargeting).',
              color: 'purple'
            }
          ],
          content: `
            <p><strong>Note:</strong> Our pages may include links to an external payment portal (Input1) that may use its own cookies according to its policies.</p>
            <p>Website: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'third-party-cookies',
          title: '3. Third-party cookies',
          icon: Globe,
          content: `
            <p>Analytics/marketing providers and integrated services may place cookies when you visit our pages. Please consult their corresponding policies.</p>
          `
        },
        {
          id: 'manage-cookies',
          title: '4. How to manage cookies',
          icon: Settings,
          content: `
            <p><strong>Banner/preference center:</strong> When applicable, we will ask for consent for non-essential cookies.</p>
            <p><strong>Browser:</strong> You can delete/block cookies from settings (may affect functionality).</p>
            <p><strong>Do Not Track:</strong> We currently do not respond to "Do Not Track" signals.</p>
          `
        },
        {
          id: 'retention',
          title: '5. Retention',
          icon: Clock,
          content: `
            <p>Cookies persist for variable periods; session cookies are deleted when you close your browser.</p>
          `
        },
        {
          id: 'changes-contact',
          title: '6. Changes and contact',
          icon: Mail,
          content: `
            <p>We may modify this policy. Questions: <a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a></p>
          `
        }
      ]
    },
    es: {
      title: 'Política de Cookies',
      subtitle: 'Cómo usamos las cookies y tecnologías similares',
      lastUpdated: 'Última actualización: 31 de agosto de 2025',
      description: 'Esta Política de Cookies explica cómo Unity Financial Network usa cookies y tecnologías similares para reconocerte cuando visitas nuestro sitio web.',
      sections: [
        {
          id: 'what-are-cookies',
          title: '1. ¿Qué son las cookies?',
          icon: Cookie,
          content: `
            <p>Pequeños archivos que un sitio coloca en tu dispositivo para recordar preferencias y mejorar la experiencia. También usamos tecnologías similares (píxeles, web beacons y almacenamiento local).</p>
          `
        },
        {
          id: 'why-we-use',
          title: '2. ¿Para qué las usamos?',
          icon: Info,
          subsections: [
            {
              title: 'Estrictamente necesarias',
              icon: Shield,
              description: 'Funcionamiento del sitio, seguridad, gestión de sesiones.',
              color: 'red'
            },
            {
              title: 'Preferencias',
              icon: Settings,
              description: 'Recordar idioma/ajustes.',
              color: 'blue'
            },
            {
              title: 'Analítica y rendimiento',
              icon: BarChart3,
              description: 'Entender uso del sitio (por ejemplo, páginas visitadas).',
              color: 'green'
            },
            {
              title: 'Marketing',
              icon: Megaphone,
              description: 'Medir efectividad de campañas y audiencias (p. ej., redireccionamientos).',
              color: 'purple'
            }
          ],
          content: `
            <p><strong>Nota:</strong> Nuestras páginas pueden incluir enlaces a un portal de pagos externo (Input1) que puede usar sus propias cookies según sus políticas.</p>
            <p>Sitio web: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'third-party-cookies',
          title: '3. Cookies de terceros',
          icon: Globe,
          content: `
            <p>Proveedores de analítica/marketing y servicios integrados pueden colocar cookies cuando visitas nuestras páginas. Consulta sus políticas correspondientes.</p>
          `
        },
        {
          id: 'manage-cookies',
          title: '4. Cómo gestionar cookies',
          icon: Settings,
          content: `
            <p><strong>Banner/centro de preferencias:</strong> cuando corresponda, te pediremos consentimiento para cookies no esenciales.</p>
            <p><strong>Navegador:</strong> puedes borrar/bloquear cookies desde la configuración (puede afectar funcionalidades).</p>
            <p><strong>No rastrear:</strong> actualmente no respondemos a señales "Do Not Track".</p>
          `
        },
        {
          id: 'retention',
          title: '5. Retención',
          icon: Clock,
          content: `
            <p>Las cookies persisten por períodos variables; las de sesión se eliminan al cerrar el navegador.</p>
          `
        },
        {
          id: 'changes-contact',
          title: '6. Cambios y contacto',
          icon: Mail,
          content: `
            <p>Podemos modificar esta política. Dudas: <a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a></p>
          `
        }
      ]
    }
  }
  
  const t = content[language]
  const sections = t.sections

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Cookie type colors
  const getCookieColor = (color: string) => {
    const colors: Record<string, string> = {
      red: 'from-red-400 to-pink-600',
      blue: 'from-blue-400 to-cyan-600',
      green: 'from-green-400 to-emerald-600',
      purple: 'from-purple-400 to-pink-600'
    }
    return colors[color] || 'from-gray-400 to-gray-600'
  }

  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-purple-50 to-white" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Cookie className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">{t.title}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-4"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            {t.lastUpdated}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="font-bold text-lg mb-4">
                    {language === 'en' ? 'Cookie Categories' : 'Categorías de Cookies'}
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon as React.ComponentType<{ className?: string }>
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                            activeSection === section.id
                              ? 'bg-primary-100 text-primary-700 font-medium'
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{section.title.replace(/^\d+\.\s*/, '')}</span>
                        </button>
                      )
                    })}
                  </nav>
                </motion.div>

                {/* Cookie Management Tips */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mt-6"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-600" />
                    {language === 'en' ? 'Quick Tips' : 'Consejos Rápidos'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Monitor className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        {language === 'en' 
                          ? 'You can manage cookies in your browser settings'
                          : 'Puedes gestionar las cookies en la configuración de tu navegador'}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <RefreshCw className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        {language === 'en'
                          ? 'Session cookies are deleted automatically'
                          : 'Las cookies de sesión se eliminan automáticamente'}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">
                        {language === 'en'
                          ? 'Essential cookies cannot be disabled'
                          : 'Las cookies esenciales no se pueden desactivar'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Privacy Notice */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mt-6 border border-yellow-200"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    {language === 'en' ? 'Privacy Notice' : 'Aviso de Privacidad'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {language === 'en' 
                      ? 'For more information about how we protect your data, please read our Privacy Policy.'
                      : 'Para más información sobre cómo protegemos tus datos, por favor lee nuestra Política de Privacidad.'}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'About This Policy' : 'Acerca de esta Política'}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.description}
                </p>
              </motion.div>

              {/* Dynamic Sections */}
              {sections.map((section, index) => {
                const Icon = section.icon as React.ComponentType<{ className?: string }>
                
                return (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>

                    {/* Special handling for section with subsections */}
                    {section.subsections && (
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {section.subsections.map((subsection, idx) => {
                          const SubIcon = subsection.icon as React.ComponentType<{ className?: string }>
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="relative overflow-hidden rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                            >
                              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${getCookieColor(subsection.color)} opacity-10 rounded-full -mr-12 -mt-12`} />
                              <div className="relative">
                                <div className="flex items-start gap-3">
                                  <div className={`w-10 h-10 bg-gradient-to-br ${getCookieColor(subsection.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <SubIcon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                      {subsection.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                      {subsection.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    )}

                    <div 
                      className="prose prose-gray max-w-none text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </motion.div>
                )
              })}

              {/* Cookie Settings Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 border-2 border-primary-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'en' ? 'Cookie Preferences' : 'Preferencias de Cookies'}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  {language === 'en' 
                    ? 'Here\'s an example of how you can manage your cookie preferences:'
                    : 'Aquí hay un ejemplo de cómo puedes gestionar tus preferencias de cookies:'}
                </p>
                <div className="space-y-4">
                  {[
                    { 
                      name: language === 'en' ? 'Essential Cookies' : 'Cookies Esenciales',
                      desc: language === 'en' ? 'Required for the website to function' : 'Requeridas para el funcionamiento del sitio',
                      enabled: true,
                      locked: true
                    },
                    {
                      name: language === 'en' ? 'Analytics Cookies' : 'Cookies Analíticas',
                      desc: language === 'en' ? 'Help us understand how you use our site' : 'Nos ayudan a entender cómo usas nuestro sitio',
                      enabled: true,
                      locked: false
                    },
                    {
                      name: language === 'en' ? 'Marketing Cookies' : 'Cookies de Marketing',
                      desc: language === 'en' ? 'Used to personalize your advertising experience' : 'Usadas para personalizar tu experiencia publicitaria',
                      enabled: false,
                      locked: false
                    }
                  ].map((cookie, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{cookie.name}</h4>
                        <p className="text-sm text-gray-600">{cookie.desc}</p>
                      </div>
                      <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookie.enabled ? 'bg-primary-600' : 'bg-gray-300'
                      } ${cookie.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookie.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Browser Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'Managing Cookies in Your Browser' : 'Gestionar Cookies en tu Navegador'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6">
                  {language === 'en'
                    ? 'Most web browsers allow you to control cookies through their settings. Here are links to instructions for popular browsers:'
                    : 'La mayoría de los navegadores web te permiten controlar las cookies a través de su configuración. Aquí hay enlaces a las instrucciones para navegadores populares:'}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                    { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                    { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                    { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
                  ].map((browser, idx) => (
                    <a
                      key={idx}
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-all"
                    >
                      <Globe className="w-5 h-5 text-primary-600" />
                      <span className="font-medium text-gray-900">{browser.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'Questions About Cookies?' : '¿Preguntas sobre las Cookies?'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'en'
                    ? 'If you have any questions about our use of cookies or this Cookie Policy, please contact us:'
                    : 'Si tienes alguna pregunta sobre nuestro uso de cookies o esta Política de Cookies, por favor contáctanos:'}
                </p>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <a href="mailto:hello@unityfinancialnetwork.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                    hello@unityfinancialnetwork.com
                  </a>
                </div>
              </motion.div>

              {/* Last Updated Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6"
              >
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2">
                      {language === 'en' ? 'Policy Updates' : 'Actualizaciones de la Política'}
                    </h3>
                    <p className="text-sm text-yellow-800">
                      {t.lastUpdated}
                    </p>
                    <p className="text-sm text-yellow-700 mt-2">
                      {language === 'en' 
                        ? 'We may update this Cookie Policy from time to time. Please check this page periodically for changes.'
                        : 'Podemos actualizar esta Política de Cookies de vez en cuando. Por favor revisa esta página periódicamente para ver los cambios.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}