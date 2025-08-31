'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SuccessIcon as Check, ArrowRightIcon as ChevronRight, 
  ContactIcon as Phone, EmailIcon as Mail, DownloadIcon as Download,
  QuoteIcon as Calculator, StarIcon as Star, 
  ArrowRightIcon as ArrowLeft
} from '@/components/icons/UnityIcons'
import { Share2, Bookmark, Info, AlertCircle } from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { getServiceDetails } from '@/lib/serviceDetailsTranslations'

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<'overview' | 'coverage' | 'pricing' | 'faqs'>('overview')
  const [saved, setSaved] = useState(false)
  
  const slug = params.slug as string
  const service = getServiceDetails(language, slug)

  useEffect(() => {
    if (!service) {
      router.push('/services')
    }
  }, [service, router])

  if (!service) {
    return null
  }

  const Icon = service.icon

  const t = {
    backToServices: language === 'en' ? 'Back to Services' : 'Volver a Servicios',
    overview: language === 'en' ? 'Overview' : 'Resumen',
    coverage: language === 'en' ? 'Coverage' : 'Cobertura',
    pricing: language === 'en' ? 'Pricing' : 'Precios',
    faqs: language === 'en' ? 'FAQs' : 'Preguntas Frecuentes',
    getQuote: language === 'en' ? 'Get Your Free Quote' : 'Obtén tu Cotización Gratis',
    callUs: language === 'en' ? 'Call Us' : 'Llámanos',
    emailUs: language === 'en' ? 'Email Us' : 'Envíanos un Email',
    downloadBrochure: language === 'en' ? 'Download Brochure' : 'Descargar Folleto',
    saveForLater: language === 'en' ? 'Save for Later' : 'Guardar para Después',
    saved: language === 'en' ? 'Saved!' : '¡Guardado!',
    shareService: language === 'en' ? 'Share Service' : 'Compartir Servicio',
    keyFeatures: language === 'en' ? 'Key Features' : 'Características Principales',
    whoCanApply: language === 'en' ? 'Who Can Apply' : 'Quién Puede Aplicar',
    choosePlan: language === 'en' ? 'Choose Your Plan' : 'Elige tu Plan',
    mostPopular: language === 'en' ? 'Most Popular' : 'Más Popular',
    selectPlan: language === 'en' ? 'Select Plan' : 'Seleccionar Plan',
    freeConsultation: language === 'en' ? 'Free Consultation' : 'Consulta Gratis',
    scheduleCall: language === 'en' ? 'Schedule a Call' : 'Programar una Llamada',
    instantQuote: language === 'en' ? 'Get Instant Quote' : 'Obtener Cotización Instantánea',
    needHelp: language === 'en' ? 'Need Help?' : '¿Necesitas Ayuda?',
    expertAdvice: language === 'en' 
      ? 'Our insurance experts are here to guide you through the process'
      : 'Nuestros expertos en seguros están aquí para guiarte a través del proceso'
  }

  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-purple-50 to-white" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom relative z-10"
        >
          {/* Back Button */}
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" size={16} />
            {t.backToServices}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                {service.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-2"
              >
                {service.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 mb-8"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Calculator className="w-5 h-5" size={20} />
                  {t.getQuote}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSaved(!saved)}
                  className="px-6 py-4 bg-white text-primary-600 font-semibold rounded-full border-2 border-primary-200 hover:bg-primary-50 transition-all flex items-center gap-2"
                >
                  <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
                  {saved ? t.saved : t.saveForLater}
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-purple-200 rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">{t.keyFeatures}</h3>
                <ul className="space-y-4">
                  {service.keyFeatures.slice(0, 5).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4" size={16} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: t.overview },
              { id: 'coverage', label: t.coverage },
              { id: 'pricing', label: t.pricing },
              { id: 'faqs', label: t.faqs }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2 space-y-8">
                  {/* Coverage Details */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">{service.coverageDetails.title}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.coverageDetails.items.map((item: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 mt-0.5 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">{service.eligibility.title}</h2>
                    <ul className="space-y-3">
                      {service.eligibility.items.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-6">
                    <h3 className="font-bold text-lg mb-4">{t.needHelp}</h3>
                    <p className="text-sm text-gray-600 mb-6">{t.expertAdvice}</p>
                    
                    <div className="space-y-3">
                      <a
                        href="tel:7869636392"
                        className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all"
                      >
                        <Phone className="w-5 h-5" size={20} />
                        <div>
                          <p className="font-semibold">{t.callUs}</p>
                          <p className="text-sm text-gray-600">(786) 963-6392</p>
                        </div>
                      </a>
                      
                      <a
                        href="mailto:info@unityfinancialnetwork.com"
                        className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all"
                      >
                        <Mail className="w-5 h-5" size={20} />
                        <div>
                          <p className="font-semibold">{t.emailUs}</p>
                          <p className="text-sm text-gray-600">info@unity.com</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Download Resources */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-4">Resources</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                        <span className="font-medium">{t.downloadBrochure}</span>
                        <Download className="w-5 h-5" size={20} />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                        <span className="font-medium">{t.shareService}</span>
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Coverage Tab */}
            {activeTab === 'coverage' && (
              <motion.div
                key="coverage"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-8">{service.coverageDetails.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.coverageDetails.items.map((item: string, index: number) => (
                      <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5" size={20} />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Pricing Tab */}
            {activeTab === 'pricing' && service.pricingPlans && (
              <motion.div
                key="pricing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{t.choosePlan}</h2>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Select the plan that best fits your needs and budget'
                      : 'Selecciona el plan que mejor se adapte a tus necesidades y presupuesto'}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {service.pricingPlans.map((plan: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                        plan.recommended ? 'ring-2 ring-primary-500 relative' : ''
                      }`}
                    >
                      {plan.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            {t.mostPopular}
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 font-semibold rounded-full transition-all ${
                          plan.recommended
                            ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {t.selectPlan}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && service.faqs && (
              <motion.div
                key="faqs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-8 text-center">{t.faqs}</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg"
                    >
                      <h3 className="text-lg font-semibold mb-3 flex items-start gap-2">
                        <Info className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 ml-7">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' 
                ? 'Ready to Get Started?'
                : '¿Listo para Comenzar?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === 'en'
                ? 'Get your personalized quote in minutes'
                : 'Obtén tu cotización personalizada en minutos'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-xl transition-all"
              >
                {t.instantQuote}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all"
              >
                {t.scheduleCall}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}