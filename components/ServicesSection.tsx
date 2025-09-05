'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Heart, 
  Shield, 
  Users, 
  Home, 
  Car, 
  Truck,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  Briefcase,
  HeartHandshake
} from 'lucide-react'
import { translations } from '@/lib/translations'

interface ServicesSectionProps {
  language?: 'en' | 'es'
}

const getServices = (language: 'en' | 'es') => [
  {
    title: language === 'en' ? 'Affordable Care Act (ACA)' : 'Ley de Cuidado de Salud Asequible (ACA)',
    description: language === 'en' 
      ? 'Comprehensive health coverage that meets your needs and budget'
      : 'Cobertura de salud completa que satisface tus necesidades y presupuesto',
    icon: Heart,
    color: 'bg-primary',
    bgColor: 'bg-primary/5',
    delay: 0,
    href: '/services/aca'
  },
  {
    title: 'Medicare',
    description: language === 'en'
      ? 'Navigate Medicare with confidence and find the right plan'
      : 'Navega Medicare con confianza y encuentra el plan adecuado',
    icon: Shield,
    color: 'bg-accent',
    bgColor: 'bg-accent/5',
    delay: 0.1,
    href: '/services/medicare'
  },
  {
    title: language === 'en' ? 'Medicare Advantage' : 'Medicare Advantage',
    description: language === 'en'
      ? 'Enhanced coverage with additional benefits beyond Original Medicare'
      : 'Cobertura mejorada con beneficios adicionales más allá del Medicare Original',
    icon: Award,
    color: 'bg-primary',
    bgColor: 'bg-primary/5',
    delay: 0.2,
    href: '/services/medicare-advantage'
  },
  {
    title: language === 'en' ? 'Term Life Insurance' : 'Seguro de Vida a Término',
    description: language === 'en'
      ? 'Affordable protection for your loved ones when they need it most'
      : 'Protección asequible para tus seres queridos cuando más lo necesitan',
    icon: Users,
    color: 'bg-accent',
    bgColor: 'bg-accent/5',
    delay: 0.3,
    href: '/services/term-life'
  },
  {
    title: language === 'en' ? 'Permanent Life Insurance' : 'Seguro de Vida Permanente',
    description: language === 'en'
      ? 'Lifetime coverage with cash value accumulation benefits'
      : 'Cobertura de por vida con beneficios de acumulación de valor en efectivo',
    icon: HeartHandshake,
    color: 'bg-primary',
    bgColor: 'bg-primary/5',
    delay: 0.4,
    href: '/services/permanent-life'
  },
  {
    title: language === 'en' ? 'Index Universal Life (IUL)' : 'Seguro de Vida Universal Indexado (IUL)',
    description: language === 'en'
      ? 'Build wealth while protecting your family\'s future'
      : 'Construye riqueza mientras proteges el futuro de tu familia',
    icon: TrendingUp,
    color: 'bg-accent',
    bgColor: 'bg-accent/5',
    delay: 0.5,
    href: '/services/iul'
  },
  {
    title: language === 'en' ? 'Final Expense Insurance' : 'Seguro de Gastos Finales',
    description: language === 'en'
      ? 'Peace of mind for end-of-life expenses'
      : 'Tranquilidad para los gastos de fin de vida',
    icon: FileText,
    color: 'bg-neutral',
    bgColor: 'bg-neutral/5',
    delay: 0.6,
    href: '/services/final-expense'
  },
  {
    title: language === 'en' ? 'Commercial Trucking Insurance' : 'Seguro de Camiones Comerciales',
    description: language === 'en'
      ? 'Comprehensive coverage for your trucking business'
      : 'Cobertura completa para tu negocio de transporte',
    icon: Truck,
    color: 'bg-accent',
    bgColor: 'bg-accent/5',
    delay: 0.7,
    href: '/services/commercial-trucking'
  },
  {
    title: language === 'en' ? 'Personal Auto Insurance' : 'Seguro de Auto Personal',
    description: language === 'en'
      ? 'Protect yourself and your vehicle on the road'
      : 'Protégete a ti y a tu vehículo en la carretera',
    icon: Car,
    color: 'bg-primary',
    bgColor: 'bg-primary/5',
    delay: 0.8,
    href: '/services/auto'
  },
  {
    title: language === 'en' ? 'Home & Property Insurance' : 'Seguro de Hogar y Propiedad',
    description: language === 'en'
      ? 'Safeguard your home and belongings'
      : 'Protege tu hogar y pertenencias',
    icon: Home,
    color: 'bg-accent',
    bgColor: 'bg-accent/5',
    delay: 0.9,
    href: '/services/home'
  },
  {
    title: language === 'en' ? 'Supplemental Insurance' : 'Seguro Suplementario',
    description: language === 'en'
      ? 'Extra coverage for unexpected medical expenses'
      : 'Cobertura adicional para gastos médicos inesperados',
    icon: Briefcase,
    color: 'bg-primary',
    bgColor: 'bg-primary/5',
    delay: 1,
    href: '/services/supplemental'
  }
]

export default function ServicesSection({ language = 'en' }: ServicesSectionProps) {
  const t = translations[language].services
  
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4"
          >
            {t.badge}
          </motion.span>
          
          <h2 className="heading-2 mb-4 sm:mb-6">
            {t.title}{' '}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          
          <p className="body-text text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {getServices(language).map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl bg-primary" />
                
                <div className={`relative ${service.bgColor} p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <Link href={service.href}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:text-primary-700"
                    >
                      {language === 'en' ? 'Learn More' : 'Saber Más'}
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="transition-transform"
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/quote">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              {language === 'en' ? 'Get Your Free Quote Now' : 'Obtén tu Cotización Gratis Ahora'}
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Animated Decorative Elements */}
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
        className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
      />
    </section>
  )
}