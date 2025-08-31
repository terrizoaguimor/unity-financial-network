/**
 * @fileoverview Opt-Out Policy Page
 * 
 * Opt-out policy and procedures for Unity Financial Network
 * Bilingual support (English/Spanish)
 * 
 * @module OptOutPage
 * @author Unity Financial Network
 * @version 1.0.0
 */

'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { 
  XCircle, Mail, MessageSquare, Phone, MapPin,
  Shield, Info, AlertCircle, Clock, UserCheck,
  ChevronRight, Send, HelpCircle, Ban, CheckCircle,
  FileText, Globe, Settings, Smartphone
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'

export default function OptOutPage() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState('scope')
  
  const content = {
    en: {
      title: 'Opt-Out Policy',
      subtitle: 'Stop Receiving Marketing Communications',
      description: 'This Policy establishes how you can stop receiving marketing emails, SMS, and calls from Unity Financial Network.',
      objective: 'Objective: Establish how you can stop receiving emails, SMS and marketing calls from Unity Financial Network.',
      sections: [
        {
          id: 'scope',
          title: '1. Scope',
          icon: Shield,
          content: `
            <p>Applies to marketing communications. Strictly transactional or legal communications (e.g., service notices, billing, regulatory requirements) may continue to be sent when necessary.</p>
          `
        },
        {
          id: 'how-to-opt-out',
          title: '2. How to Request Opt-Out?',
          icon: Settings,
          methods: [
            {
              channel: 'Email Marketing',
              icon: Mail,
              color: 'blue',
              instructions: [
                'Click "Unsubscribe" in the email footer',
                'Or write to info@unityfinancialnetwork.com indicating "Opt-Out Email"',
                'Processing may take up to 10 business days per CAN-SPAM'
              ],
              timeframe: 'Up to 10 business days'
            },
            {
              channel: 'SMS/Text Messages',
              icon: MessageSquare,
              color: 'green',
              instructions: [
                'Reply "STOP" to stop receiving SMS',
                'For help, text "HELP"',
                'Standard carrier rates apply',
                'We can also process your exclusion manually via email/phone'
              ],
              timeframe: 'Immediate'
            },
            {
              channel: 'Phone Calls',
              icon: Phone,
              color: 'purple',
              instructions: [
                'Request to be added to our internal "Do Not Call" list',
                'Call (786) 963-6392 or email us',
                'Implementation within reasonable timeframe (up to 30 days for legacy systems)',
                'Maintained for at least 5 years per industry practices'
              ],
              timeframe: 'Up to 30 days'
            },
            {
              channel: 'Postal Mail (if applicable)',
              icon: MapPin,
              color: 'orange',
              instructions: [
                'Send a letter to: 7950 NW 53rd St, STE 136, Doral, FL 33166',
                'Include your request and contact details for identification'
              ],
              timeframe: 'Upon receipt and processing'
            }
          ],
          content: `
            <p>Website: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'exclusion-scope',
          title: '3. Exclusion Scope',
          icon: Ban,
          content: `
            <ul class="list-disc pl-6 space-y-2">
              <li>Channel opt-out applies to that channel (email, SMS or calls).</li>
              <li>If you have multiple records/contacts, we may need to confirm each one.</li>
              <li>You may continue to receive non-commercial communications necessary to provide requested services (e.g., follow-up on an ongoing quote or regulatory requirements).</li>
            </ul>
          `
        },
        {
          id: 'third-parties',
          title: '4. Third Parties and Providers',
          icon: Globe,
          content: `
            <p>If you communicate with us through third-party platforms (e.g., Input1 payment portal), you must manage any communication preferences for that third party there.</p>
            <p>Website: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'identity-verification',
          title: '5. Identity Verification',
          icon: UserCheck,
          content: `
            <p>We may request reasonable information to verify your identity before processing certain requests (especially for access/deletion of personal data).</p>
          `
        },
        {
          id: 'questions',
          title: '6. Questions',
          icon: HelpCircle,
          content: `
            <p>Write to us at <a href="mailto:info@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">info@unityfinancialnetwork.com</a> or call us at (786) 963-6392.</p>
          `
        }
      ]
    },
    es: {
      title: 'Política de Opt-Out',
      subtitle: 'No Recibir Más Comunicaciones de Marketing',
      description: 'Esta Política establece cómo puedes dejar de recibir emails, SMS y llamadas de marketing de Unity Financial Network.',
      objective: 'Objetivo: Establecer cómo puedes dejar de recibir emails, SMS y llamadas de marketing de Unity Financial Network.',
      sections: [
        {
          id: 'scope',
          title: '1. Ámbito',
          icon: Shield,
          content: `
            <p>Aplica a comunicaciones de marketing. Las comunicaciones estrictamente transaccionales o legales (p. ej., avisos de servicio, facturación, requisitos regulatorios) pueden seguir enviándose cuando sean necesarias.</p>
          `
        },
        {
          id: 'how-to-opt-out',
          title: '2. ¿Cómo solicitar Opt-Out?',
          icon: Settings,
          methods: [
            {
              channel: 'Email marketing',
              icon: Mail,
              color: 'blue',
              instructions: [
                'Haz clic en "Cancelar suscripción/Unsubscribe" en el pie del correo',
                'O escribe a info@unityfinancialnetwork.com indicando "Opt-Out Email"',
                'El cese puede tardar hasta 10 días hábiles conforme a CAN-SPAM'
              ],
              timeframe: 'Hasta 10 días hábiles'
            },
            {
              channel: 'SMS/Mensajes de texto',
              icon: MessageSquare,
              color: 'green',
              instructions: [
                'Responde "STOP" para dejar de recibir SMS',
                'Para ayuda escribe "HELP"',
                'Se aplican tarifas estándar de tu operador',
                'También podemos procesar tu exclusión manualmente por email/teléfono'
              ],
              timeframe: 'Inmediato'
            },
            {
              channel: 'Llamadas telefónicas',
              icon: Phone,
              color: 'purple',
              instructions: [
                'Solicita ser agregado a nuestra lista interna "Do Not Call"',
                'Llama al (786) 963-6392 o envíanos un email',
                'Implementación en plazo razonable (hasta 30 días en sistemas heredados)',
                'Se mantiene por al menos 5 años según prácticas del sector'
              ],
              timeframe: 'Hasta 30 días'
            },
            {
              channel: 'Correo postal (si aplica)',
              icon: MapPin,
              color: 'orange',
              instructions: [
                'Envía una carta a: 7950 NW 53rd St, STE 136, Doral, FL 33166',
                'Indica tu solicitud y datos de contacto para identificarte'
              ],
              timeframe: 'Al recibir y procesar'
            }
          ],
          content: `
            <p>Sitio web: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'exclusion-scope',
          title: '3. Alcance de la exclusión',
          icon: Ban,
          content: `
            <ul class="list-disc pl-6 space-y-2">
              <li>El opt-out por canal aplica a ese canal (email, SMS o llamadas).</li>
              <li>Si tienes múltiples registros/contactos, puede que debamos confirmar cada uno.</li>
              <li>Es posible que sigas recibiendo comunicaciones no comerciales necesarias para prestarte servicios solicitados (p. ej., seguimiento de una cotización en curso o requisitos normativos).</li>
            </ul>
          `
        },
        {
          id: 'third-parties',
          title: '4. Terceros y proveedores',
          icon: Globe,
          content: `
            <p>Si te comunicas con nosotros a través de plataformas de terceros (p. ej., portal de pagos de Input1) deberás gestionar allí cualquier preferencia de comunicación de ese tercero.</p>
            <p>Sitio web: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'identity-verification',
          title: '5. Verificación de identidad',
          icon: UserCheck,
          content: `
            <p>Podemos solicitar información razonable para verificar tu identidad antes de procesar ciertas solicitudes (especialmente de acceso/eliminación de datos personales).</p>
          `
        },
        {
          id: 'questions',
          title: '6. Preguntas',
          icon: HelpCircle,
          content: `
            <p>Escríbenos a <a href="mailto:info@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">info@unityfinancialnetwork.com</a> o llámanos al (786) 963-6392.</p>
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

  // Method colors
  const getMethodColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-400 to-cyan-600',
      green: 'from-green-400 to-emerald-600',
      purple: 'from-purple-400 to-pink-600',
      orange: 'from-orange-400 to-red-600'
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
            <XCircle className="w-10 h-10 text-white" />
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
                    {language === 'en' ? 'Quick Navigation' : 'Navegación Rápida'}
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

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 mt-6 border border-red-200"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Ban className="w-5 h-5 text-red-600" />
                    {language === 'en' ? 'Quick Opt-Out' : 'Opt-Out Rápido'}
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@unityfinancialnetwork.com?subject=Opt-Out%20Request"
                      className="flex items-center gap-2 text-sm text-red-700 hover:text-red-800"
                    >
                      <Mail className="w-4 h-4" />
                      {language === 'en' ? 'Email Opt-Out' : 'Opt-Out Email'}
                    </a>
                    <a
                      href="tel:7869636392"
                      className="flex items-center gap-2 text-sm text-red-700 hover:text-red-800"
                    >
                      <Phone className="w-4 h-4" />
                      {language === 'en' ? 'Call to Opt-Out' : 'Llamar para Opt-Out'}
                    </a>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <MessageSquare className="w-4 h-4" />
                      {language === 'en' ? 'Text STOP to opt-out' : 'Envía STOP para cancelar'}
                    </div>
                  </div>
                </motion.div>

                {/* Important Notice */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mt-6 border border-yellow-200"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    {language === 'en' ? 'Important' : 'Importante'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {language === 'en' 
                      ? 'Some transactional communications (service notices, billing) cannot be opted out of while you maintain an active account.'
                      : 'Algunas comunicaciones transaccionales (avisos de servicio, facturación) no se pueden cancelar mientras mantengas una cuenta activa.'}
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
                    <XCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'Policy Overview' : 'Resumen de la Política'}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t.description}
                </p>
                <div className="p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500">
                  <p className="text-sm font-medium text-primary-900">
                    {t.objective}
                  </p>
                </div>
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

                    {/* Special handling for opt-out methods section */}
                    {section.methods && (
                      <div className="space-y-6 mb-6">
                        {section.methods.map((method, idx) => {
                          const MethodIcon = method.icon as React.ComponentType<{ className?: string }>
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${getMethodColor(method.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                  <MethodIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                                    {method.channel}
                                  </h3>
                                  <ul className="space-y-2 mb-4">
                                    {method.instructions.map((instruction, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600">{instruction}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                    <Clock className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm font-medium text-gray-700">
                                      {language === 'en' ? 'Timeframe:' : 'Plazo:'} {method.timeframe}
                                    </span>
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

              {/* Your Rights Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'en' ? 'Your Rights' : 'Tus Derechos'}
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  {language === 'en' 
                    ? 'You have the right to control how we communicate with you. We respect your preferences and will process opt-out requests promptly.'
                    : 'Tienes derecho a controlar cómo nos comunicamos contigo. Respetamos tus preferencias y procesaremos las solicitudes de exclusión con prontitud.'}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: language === 'en' ? 'Choose Your Channels' : 'Elige tus Canales',
                      desc: language === 'en' 
                        ? 'Opt-out from specific communication channels while keeping others active'
                        : 'Excluye canales de comunicación específicos mientras mantienes otros activos'
                    },
                    {
                      title: language === 'en' ? 'Quick Processing' : 'Procesamiento Rápido',
                      desc: language === 'en'
                        ? 'Most opt-out requests are processed within days'
                        : 'La mayoría de las solicitudes se procesan en días'
                    },
                    {
                      title: language === 'en' ? 'Permanent Records' : 'Registros Permanentes',
                      desc: language === 'en'
                        ? 'Your preferences are maintained for at least 5 years'
                        : 'Tus preferencias se mantienen por al menos 5 años'
                    },
                    {
                      title: language === 'en' ? 'No Penalties' : 'Sin Penalizaciones',
                      desc: language === 'en'
                        ? 'Opting out won\'t affect your existing services or policies'
                        : 'Excluirte no afectará tus servicios o pólizas existentes'
                    }
                  ].map((right, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{right.title}</h4>
                        <p className="text-sm text-gray-600">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'Need Help?' : '¿Necesitas Ayuda?'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6">
                  {language === 'en'
                    ? 'If you have any questions about opting out or need assistance with your preferences, we\'re here to help.'
                    : 'Si tienes alguna pregunta sobre la exclusión o necesitas ayuda con tus preferencias, estamos aquí para ayudarte.'}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <a
                      href="tel:7869636392"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-all"
                    >
                      <Phone className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{language === 'en' ? 'Call Us' : 'Llámanos'}</p>
                        <p className="text-sm text-gray-600">(786) 963-6392</p>
                      </div>
                    </a>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@unityfinancialnetwork.com?subject=Opt-Out%20Request"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-all"
                    >
                      <Mail className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{language === 'en' ? 'Email Us' : 'Envíanos un Email'}</p>
                        <p className="text-sm text-gray-600">info@unityfinancialnetwork.com</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        {language === 'en' ? 'Mailing Address' : 'Dirección Postal'}
                      </p>
                      <address className="not-italic text-sm text-gray-600">
                        Unity Financial Network LLC<br />
                        7950 NW 53rd St, STE 136<br />
                        Doral, FL 33166
                      </address>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Compliance Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 border border-blue-200 rounded-2xl p-6"
              >
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      {language === 'en' ? 'Legal Compliance' : 'Cumplimiento Legal'}
                    </h3>
                    <p className="text-sm text-blue-800">
                      {language === 'en' 
                        ? 'Our opt-out procedures comply with CAN-SPAM Act, TCPA regulations, and other applicable privacy laws. We maintain records of all opt-out requests for compliance purposes.'
                        : 'Nuestros procedimientos de exclusión cumplen con la Ley CAN-SPAM, las regulaciones TCPA y otras leyes de privacidad aplicables. Mantenemos registros de todas las solicitudes de exclusión para fines de cumplimiento.'}
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