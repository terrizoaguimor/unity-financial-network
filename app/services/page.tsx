/**
 * @fileoverview Services page component for Unity Financial Network
 * 
 * This page showcases all insurance services offered by the company with:
 * - Interactive service catalog with search and filtering
 * - Detailed service cards with pricing and features
 * - Category-based filtering system
 * - Service detail modals for quick information
 * - Responsive design with smooth animations
 * - Bilingual content support (English/Spanish)
 * 
 * Features:
 * - Real-time search functionality across services
 * - Category filtering (Health, Life, Property, Commercial)
 * - Interactive service cards with hover effects
 * - Modal system for detailed service information
 * - Direct links to individual service pages
 * - Call-to-action sections for quotes and consultations
 * - Animated transitions and loading states
 * 
 * @module ServicesPage
 * @requires react
 * @requires @/contexts/LanguageContext
 * @requires framer-motion
 * @requires lucide-react
 * @requires next/link
 * @requires @/lib/servicesTranslations
 * 
 * @author Unity Financial Network Development Team
 * @version 1.0.0
 * @since 2025-08-19
 */

'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, Shield, Users, Home, Car, Truck, DollarSign, 
  TrendingUp, Award, FileText, Briefcase, HeartHandshake,
  ArrowRight, Check, X, Calculator, Phone, ChevronRight,
  Filter, Search, Info
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getServicesData } from '@/lib/servicesTranslations'

/**
 * Service category data structure
 * @typedef {Object} ServiceCategory
 * @property {string} id - Unique category identifier
 * @property {string} name - Category display name (localized)
 * @property {React.ComponentType} icon - Lucide React icon component
 */

/**
 * Returns service category filter options with localized names
 * 
 * @function getCategories
 * @param {('en'|'es')} lang - Language code for localization
 * @returns {ServiceCategory[]} Array of category objects for filtering
 * 
 * @example
 * const categories = getCategories('en');
 * console.log(categories[1].name); // "Health Insurance"
 */
const getCategories = (lang: 'en' | 'es') => [
  { id: 'all', name: lang === 'en' ? 'All Services' : 'Todos los Servicios', icon: Briefcase },
  { id: 'health', name: lang === 'en' ? 'Health Insurance' : 'Seguro de Salud', icon: Heart },
  { id: 'life', name: lang === 'en' ? 'Life Insurance' : 'Seguro de Vida', icon: Shield },
  { id: 'property', name: lang === 'en' ? 'Property & Auto' : 'Propiedad y Auto', icon: Home },
  { id: 'commercial', name: lang === 'en' ? 'Commercial' : 'Comercial', icon: Truck }
]

/**
 * Services Page Component
 * 
 * Main services catalog page displaying all insurance products with interactive
 * filtering, searching, and detailed information modals. Provides comprehensive
 * overview of Unity Financial Network's service offerings.
 * 
 * @component ServicesPage
 * @returns {JSX.Element} Complete services page with hero, filters, catalog, and modals
 * 
 * State Management:
 * - selectedCategory: Currently active filter category
 * - searchTerm: User input for service search
 * - selectedService: Service ID for detail modal display
 * 
 * Features:
 * - Real-time search across service titles and descriptions
 * - Category-based filtering with visual indicators
 * - Interactive service cards with animations
 * - Modal system for detailed service information
 * - Direct navigation to individual service pages
 * - Responsive grid layout with fallback states
 * 
 * @example
 * ```tsx
 * // Rendered automatically at /services route
 * <ServicesPage />
 * ```
 * 
 * @see {@link HeaderSimple} For navigation
 * @see {@link Footer} For page footer
 * @see {@link getServicesData} For service data
 */
export default function ServicesPage() {
  // Get current language for bilingual content
  const { language } = useLanguage()
  
  // State for category filtering - tracks selected filter option
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // State for search functionality - tracks user input
  const [searchTerm, setSearchTerm] = useState('')
  
  // State for service detail modal - tracks which service to show
  const [selectedService, setSelectedService] = useState<string | null>(null)

  // Get localized services data and categories
  const servicesData = getServicesData(language)
  const categories = getCategories(language)
  
  /**
   * Filter services based on category selection and search term
   * Combines category filtering with text search across title and description
   */
  const filteredServices = servicesData.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&q=80" 
            alt="Insurance services"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom relative z-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-700 mb-4"
          >
            {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {language === 'en' ? 'Insurance Solutions' : 'Soluciones de Seguros'}{' '}
            <span className="text-primary font-bold">{language === 'en' ? 'Tailored for You' : 'Hechos a tu Medida'}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            {language === 'en' 
              ? 'Explore our comprehensive range of insurance products designed to protect what matters most to you and your family.'
              : 'Explora nuestra amplia gama de productos de seguros diseñados para proteger lo que más te importa a ti y a tu familia.'}
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search for insurance plans...' : 'Buscar planes de seguro...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all text-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Animated decoration */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full opacity-20 blur-3xl"
        />
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-primary/10 text-gray-700 hover:bg-primary/15'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-primary/10">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="relative group"
                  >
                    <div className={`${service.bgColor} rounded-3xl p-8 h-full border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300`}>
                      {service.popularPlan && (
                        <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          POPULAR
                        </div>
                      )}
                      
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {service.shortDesc}
                      </p>

                      <div className="text-3xl font-bold text-primary-600 mb-6">
                        {service.startingPrice}
                        <span className="text-sm text-gray-500 font-normal"> starting</span>
                      </div>

                      {/* Features Preview */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-3">
                        <Link href="/contact" className="flex-1">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </Link>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedService(service.id)}
                          className="px-4 py-3 bg-white border-2 border-primary-200 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all"
                        >
                          <Info className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {(() => {
                const service = servicesData.find(s => s.id === selectedService)
                if (!service) return null
                const Icon = service.icon
                
                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                          <p className="text-gray-600">{service.category}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-500" />
                      </button>
                    </div>

                    <p className="text-lg text-gray-700 mb-6">{service.fullDesc}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-4">Pricing</h3>
                        <div className="bg-primary/5 rounded-2xl p-6">
                          <div className="text-4xl font-bold text-primary-600 mb-2">
                            {service.startingPrice}
                          </div>
                          <p className="text-gray-600 mb-4">Starting price per month</p>
                          <p className="text-sm text-gray-500">
                            * Final pricing depends on coverage options, age, location, and other factors.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link href="/schedule" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                        >
                          <Calculator className="w-5 h-5" />
                          Get Your Quote
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-4 bg-white border-2 border-primary-200 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all flex items-center justify-center gap-2"
                      >
                        <Phone className="w-5 h-5" />
                        Call Us
                      </motion.button>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our insurance experts are here to help you find the perfect coverage 
              for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-xl transition-all"
                >
                  Get Your Free Quote
                </motion.button>
              </Link>
              <Link href="/schedule">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}