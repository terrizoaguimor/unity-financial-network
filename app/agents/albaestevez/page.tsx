'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import TurnstileWidget from '@/components/TurnstileWidget'
import QuoteCalculator from '@/components/QuoteCalculator'
import { 
  Phone, Mail, MapPin, Clock, Send, Calendar, CheckCircle, 
  Shield, Award, Users, Star, Heart, Globe, MessageCircle,
  Facebook, Instagram, Linkedin, Youtube, ChevronRight,
  FileText, GraduationCap, Briefcase, TrendingUp, Target,
  Home, Car, HeartHandshake, UserCheck, DollarSign,
  Stethoscope, Baby, Building, AlertCircle, Calculator,
  UserPlus, X, Trophy, Sparkles, BadgeCheck, Zap
} from 'lucide-react'

// Agent Data
const agentData = {
  name: 'Alba Estévez',
  title: {
    en: 'Elite Health & Life Insurance Specialist',
    es: 'Especialista Elite en Seguros de Salud y Vida'
  },
  subtitle: {
    en: 'Your Trusted Partner in Financial Protection',
    es: 'Tu Socio de Confianza en Protección Financiera'
  },
  license: 'Florida Licensed Agent #W652789',
  certifications: [
    'ACA Certified Health Navigator',
    'Medicare Specialist Certification',
    'Life & Health Insurance Licensed',
    'AHIP Certified Professional'
  ],
  photo: '/images/agents/alba-estevez.jpg',
  bio: {
    en: 'I became an Agent after the passing of my older sister. We faced difficult financial situations, which inspired me to help women, leaders of their households, so they can provide their children a future when they are no longer here. I was born in Colombia and for 3 years I have been a Life Insurance Agent in the US. I help families to be SAFE AND PROTECTED, I provide PEACE OF MIND so that my clients and their loved ones are cared for, no matter what happens. My commitment is to provide families with the necessary financial security to face any unforeseen event.',
    es: 'Me convertí en Agente, tras la partida de mi hermana mayor, nos enfrentamos a situaciones económicas difíciles, lo que me inspiró a ayudar a las mujeres, líderes de su hogar, para que les brinden a sus hijos un futuro cuando no estén. Nací en Colombia y desde hace 3 años soy Agente de Seguros de Vida en EE.UU, ayudo a las familias a estar SEGURAS Y PROTEGIDAS, brindo TRANQUILIDAD para que mis clientes y sus seres queridos, estén cuidados, pase lo que pase. Mi compromiso es brindar a las familias la seguridad financiera necesaria para enfrentar cualquier imprevisto.'
  },
  mission: {
    en: 'My mission is to empower families with comprehensive insurance solutions that provide security, peace of mind, and financial protection for life\'s unexpected moments.',
    es: 'Mi misión es empoderar a las familias con soluciones integrales de seguros que brinden seguridad, tranquilidad y protección financiera para los momentos inesperados de la vida.'
  },
  specializations: {
    en: ['ACA/Obamacare Health Plans', 'Life Insurance', 'Accident Insurance', 'Disability Insurance', 'Dental & Vision Insurance', 'Medicare Plans', 'Final Expense Insurance', 'Critical Illness Coverage'],
    es: ['Planes de Salud ACA/Obamacare', 'Seguro de Vida', 'Seguro de Accidente', 'Seguro de Discapacidad', 'Seguro Dental y Visión', 'Planes Medicare', 'Seguro de Gastos Finales', 'Cobertura de Enfermedades Críticas']
  },
  languages: ['English', 'Español'],
  phone: '(239) 832-1131',
  email: 'alba.estevez@unityfinancialnetwork.com',
  whatsapp: '+12398321131',
  officeLocation: '7950 NW 53rd St STE 136, Doral, FL 33166',
  schedule: {
    en: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By Appointment\nSunday: Emergency Support Available',
    es: 'Lunes - Viernes: 9:00 AM - 6:00 PM\nSábado: Con Cita Previa\nDomingo: Soporte de Emergencia Disponible'
  },
  social: {
    facebook: 'https://facebook.com/enterateconalbaestevez',
    instagram: 'https://instagram.com/enterateconalbaestevez',
    linkedin: 'https://www.linkedin.com/in/alba-estevez-enterate/',
    youtube: 'https://www.youtube.com/@AlbaEstevezEnterate',
    whatsapp: `https://wa.me/12398321131`
  },
  slogan: {
    en: 'Protecting Dreams, Securing Futures',
    es: 'Protegiendo Sueños, Asegurando Futuros'
  },
  personalInfo: {
    en: 'Get to know your Advisor: I like to read, listen to music, watch a good movie',
    es: 'Conoce a tu Asesora: Me gusta leer, escuchar música, ver una buena película'
  },
  experience: {
    en: 'With over 10 years of experience in the insurance industry and a deep commitment to customer service, I specialize in creating personalized insurance solutions that protect what matters most to you.',
    es: 'Con más de 10 años de experiencia en la industria de seguros y un profundo compromiso con el servicio al cliente, me especializo en crear soluciones de seguros personalizadas que protegen lo que más te importa.'
  },
  achievements: [
    { 
      en: 'Top Producer Award 2023 - Unity Financial Network',
      es: 'Premio Productor Principal 2023 - Unity Financial Network'
    },
    {
      en: 'Customer Excellence Award - 5 Star Rating',
      es: 'Premio a la Excelencia del Cliente - Calificación 5 Estrellas'
    },
    {
      en: 'Community Service Recognition - Hispanic Chamber',
      es: 'Reconocimiento de Servicio Comunitario - Cámara Hispana'
    }
  ]
}

// Services offered
const services = [
  {
    icon: Heart,
    title: { en: 'Health Insurance', es: 'Seguro de Salud' },
    description: { 
      en: 'ACA/Obamacare plans with subsidies and comprehensive coverage',
      es: 'Planes ACA/Obamacare con subsidios y cobertura completa'
    },
    color: 'bg-primary'
  },
  {
    icon: Stethoscope,
    title: { en: 'Medicare Plans', es: 'Planes Medicare' },
    description: { 
      en: 'Medicare Advantage, Supplement, and Part D prescription plans',
      es: 'Medicare Advantage, Suplementario y planes de prescripción Parte D'
    },
    color: 'bg-primary'
  },
  {
    icon: Shield,
    title: { en: 'Life Insurance', es: 'Seguro de Vida' },
    description: { 
      en: 'Term and whole life insurance to protect your loved ones',
      es: 'Seguro de vida temporal y permanente para proteger a sus seres queridos'
    },
    color: 'bg-primary'
  },
  {
    icon: Home,
    title: { en: 'Home Insurance', es: 'Seguro de Hogar' },
    description: { 
      en: 'Complete protection for your home and belongings',
      es: 'Protección completa para su hogar y pertenencias'
    },
    color: 'bg-primary'
  },
  {
    icon: Car,
    title: { en: 'Auto Insurance', es: 'Seguro de Auto' },
    description: { 
      en: 'Comprehensive auto coverage at competitive rates',
      es: 'Cobertura de auto completa a tarifas competitivas'
    },
    color: 'bg-accent'
  },
  {
    icon: Building,
    title: { en: 'Business Insurance', es: 'Seguro de Negocio' },
    description: { 
      en: 'Protect your business with comprehensive commercial coverage',
      es: 'Proteja su negocio con cobertura comercial completa'
    },
    color: 'bg-primary'
  }
]

// Testimonials
const testimonials = [
  {
    name: 'María González',
    role: { en: 'Small Business Owner', es: 'Dueña de Pequeño Negocio' },
    rating: 5,
    verified: true,
    image: '/images/testimonial1.jpg',
    text: {
      en: 'Alba didn\'t just find me insurance - she found me peace of mind. After my husband\'s accident, she helped us navigate the complex claims process and ensured we received every benefit we were entitled to. She\'s more than an agent; she\'s family.',
      es: 'Alba no solo me encontró un seguro, me dio tranquilidad. Después del accidente de mi esposo, nos ayudó a navegar el complejo proceso de reclamos y se aseguró de que recibiéramos todos los beneficios. Es más que una agente; es familia.'
    },
    savings: '$4,800/year'
  },
  {
    name: 'Roberto Martinez',
    role: { en: 'Retired Teacher', es: 'Maestro Jubilado' },
    rating: 5,
    verified: true,
    image: '/images/testimonial2.jpg',
    text: {
      en: 'When I turned 65, Medicare was overwhelming. Alba spent hours explaining my options, comparing plans, and ensuring I got maximum coverage at minimum cost. Thanks to her, I save over $200 monthly on prescriptions alone!',
      es: 'Cuando cumplí 65, Medicare era abrumador. Alba pasó horas explicándome mis opciones, comparando planes y asegurándose de obtener la máxima cobertura al mínimo costo. ¡Gracias a ella, ahorro más de $200 mensuales solo en medicamentos!'
    },
    savings: '$2,400/year'
  },
  {
    name: 'Jennifer Thompson',
    role: { en: 'Single Mother of 3', es: 'Madre Soltera de 3' },
    rating: 5,
    verified: true,
    image: '/images/testimonial3.jpg',
    text: {
      en: 'Alba found us comprehensive health coverage through ACA that I didn\'t even know we qualified for. My kids now have dental, vision, and health insurance for less than what I was paying for basic coverage before. She\'s a lifesaver!',
      es: 'Alba nos encontró cobertura de salud integral a través de ACA que ni siquiera sabía que calificábamos. Mis hijos ahora tienen seguro dental, de visión y salud por menos de lo que pagaba antes por cobertura básica. ¡Es una salvavidas!'
    },
    savings: '$6,000/year'
  },
  {
    name: 'Luis Fernandez',
    role: { en: 'Construction Worker', es: 'Trabajador de Construcción' },
    rating: 5,
    verified: true,
    image: '/images/testimonial4.jpg',
    text: {
      en: 'After my work injury, I thought I\'d lose everything. Alba helped me get disability insurance and guided me through the entire process. She even connected me with resources I didn\'t know existed. Forever grateful!',
      es: 'Después de mi lesión laboral, pensé que lo perdería todo. Alba me ayudó a obtener seguro de discapacidad y me guió durante todo el proceso. Incluso me conectó con recursos que no sabía que existían. ¡Eternamente agradecido!'
    },
    savings: 'Protected Income'
  }
]

// Stats
const stats = [
  { 
    number: '2,500+', 
    label: { en: 'Families Protected', es: 'Familias Protegidas' },
    icon: Users,
    color: 'bg-primary' 
  },
  { 
    number: '10+', 
    label: { en: 'Years of Excellence', es: 'Años de Excelencia' },
    icon: Award,
    color: 'bg-accent' 
  },
  { 
    number: '75+', 
    label: { en: 'Insurance Partners', es: 'Socios Aseguradores' },
    icon: Building,
    color: 'bg-primary' 
  },
  { 
    number: '98%', 
    label: { en: 'Client Satisfaction', es: 'Satisfacción del Cliente' },
    icon: Star,
    color: 'bg-primary' 
  }
]

// Why Choose Alba
const whyChooseMe = [
  {
    icon: Heart,
    title: { en: 'Personalized Care', es: 'Atención Personalizada' },
    description: {
      en: 'Every family is unique. I take time to understand your specific needs and create tailored solutions.',
      es: 'Cada familia es única. Me tomo el tiempo para entender sus necesidades específicas y crear soluciones a medida.'
    }
  },
  {
    icon: Shield,
    title: { en: 'Complete Protection', es: 'Protección Completa' },
    description: {
      en: 'From health to life insurance, I provide comprehensive coverage that protects all aspects of your life.',
      es: 'Desde salud hasta seguro de vida, proporciono cobertura integral que protege todos los aspectos de su vida.'
    }
  },
  {
    icon: TrendingUp,
    title: { en: 'Maximum Savings', es: 'Máximo Ahorro' },
    description: {
      en: 'I help you find the best rates and maximize available subsidies to make insurance affordable.',
      es: 'Te ayudo a encontrar las mejores tarifas y maximizar los subsidios disponibles para hacer el seguro asequible.'
    }
  },
  {
    icon: MessageCircle,
    title: { en: '24/7 Support', es: 'Soporte 24/7' },
    description: {
      en: 'I\'m always here when you need me. Call, text, or WhatsApp - I\'ll respond quickly.',
      es: 'Siempre estoy aquí cuando me necesites. Llama, envía texto o WhatsApp - responderé rápidamente.'
    }
  }
]

export default function AlbaEstevezPage() {
  const { language } = useLanguage()
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)
  const [showCallModal, setShowCallModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    acceptTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!turnstileToken) {
      alert(language === 'en' ? 'Please complete the security check' : 'Por favor complete la verificación de seguridad')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/schedule-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          agent: 'alba-estevez',
          language,
          turnstileToken
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
          acceptTerms: false
        })
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <HeaderSimple />
      <main className="min-h-screen bg-primary/10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-primary" />
          <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-semibold text-white mb-6"
                  >
                    <Shield className="w-4 h-4" />
                    {language === 'en' ? 'Licensed Insurance Professional' : 'Profesional de Seguros Licenciada'}
                  </motion.div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    {agentData.name}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-2 text-purple-200">
                    {agentData.title[language as 'en' | 'es']}
                  </p>
                  <p className="text-base sm:text-lg mb-4 text-purple-100 italic">
                    {agentData.subtitle[language as 'en' | 'es']}
                  </p>
                  <p className="text-sm mb-6 opacity-90 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    {agentData.license}
                  </p>
                  
                  <p className="text-xl mb-6 font-semibold text-purple-100">
                    "{agentData.slogan[language as 'en' | 'es']}"
                  </p>
                  
                  <p className="text-lg mb-8 leading-relaxed opacity-95">
                    {agentData.bio[language as 'en' | 'es']}
                  </p>
                  
                  {/* Languages & Certifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur rounded-lg px-4 py-2">
                      <Globe className="w-5 h-5 text-purple-200" />
                      <span className="text-sm">{agentData.languages.join(' • ')}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white bg-opacity-10 backdrop-blur rounded-lg px-4 py-2">
                      <Award className="w-5 h-5 text-purple-200" />
                      <span className="text-sm">{language === 'en' ? '4 Certifications' : '4 Certificaciones'}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setShowAppointmentModal(true)}
                      className="bg-white text-primary hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg inline-flex items-center gap-3 justify-center"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>{language === 'en' ? 'Schedule Consultation' : 'Programar Consulta'}</span>
                    </button>
                    <button
                      onClick={() => setShowCallModal(true)}
                      className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg inline-flex items-center gap-3 justify-center"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{language === 'en' ? 'Request Call' : 'Solicitar Llamada'}</span>
                    </button>
                  </div>

                  {/* Secondary CTA */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={`tel:${agentData.phone.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {agentData.phone}
                    </a>
                    <a
                      href={agentData.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>

                  {/* Social Media */}
                  <div className="flex gap-4 mt-8">
                    <a href={agentData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href={agentData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href={agentData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={agentData.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="relative max-w-sm mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-accent rounded-3xl blur-2xl opacity-30" />
                  <div className="relative card-base p-2 rounded-3xl">
                    <div className="aspect-[3/4] max-h-[400px] sm:max-h-[500px] lg:max-h-none bg-primary bg-opacity-10 rounded-2xl overflow-hidden relative">
                      {/* Alba's Professional Photo */}
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <div className="text-center p-6">
                          <UserCheck className="w-24 h-24 text-primary-400 mx-auto mb-4" />
                          <p className="text-primary-700 font-semibold">Alba Estévez</p>
                          <p className="text-primary-600 text-sm">Professional Photo</p>
                        </div>
                      </div>
                      {/* Unity Badge */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur rounded-xl p-3 shadow-lg">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-primary-700">Unity Financial Network</p>
                          <p className="text-xs text-primary-600">{agentData.license}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 mb-4">
                  {language === 'en' ? 'Professional Excellence' : 'Excelencia Profesional'}
                </h2>
                <p className="text-primary-600">
                  {language === 'en' 
                    ? 'Numbers that reflect our commitment to client service'
                    : 'Números que reflejan nuestro compromiso con el servicio al cliente'
                  }
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center bg-primary/5 rounded-xl p-6 border border-primary-100"
                    >
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary-800 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-primary-600 font-medium">{stat.label[language as 'en' | 'es']}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <span className="inline-block px-4 py-2 bg-primary rounded-full text-sm font-semibold text-white mb-4">
                  {language === 'en' ? 'My Story' : 'Mi Historia'}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary leading-tight">
                  {language === 'en' 
                    ? 'A Mother\'s Promise to Protect Families'
                    : 'La Promesa de una Madre de Proteger Familias'
                  }
                </h2>
                <div className="space-y-4 text-primary-700 leading-relaxed">
                  <p className="text-lg">
                    {language === 'en'
                      ? 'As a mother myself, I understand the profound responsibility of protecting our loved ones. Every day, I wake up driven by the same commitment I have to my own family - ensuring that yours has the security and peace of mind you deserve.'
                      : 'Como madre, entiendo la profunda responsabilidad de proteger a nuestros seres queridos. Cada día, me levanto impulsada por el mismo compromiso que tengo con mi propia familia: asegurar que la suya tenga la seguridad y tranquilidad que merece.'
                    }
                  </p>
                  <p>
                    {language === 'en'
                      ? 'My journey in insurance isn\'t just a career - it\'s a calling born from personal experience. Having faced life\'s unexpected challenges, I\'ve made it my mission to ensure no family goes through financial hardship during their most difficult times.'
                      : 'Mi camino en los seguros no es solo una carrera, es una vocación nacida de la experiencia personal. Habiendo enfrentado los desafíos inesperados de la vida, he hecho mi misión asegurar que ninguna familia pase por dificultades financieras durante sus momentos más difíciles.'
                    }
                  </p>
                  <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-accent">
                    <p className="font-semibold text-primary-800 italic">
                      "{agentData.personalInfo[language as 'en' | 'es']}"
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="font-medium">{language === 'en' ? 'Family First' : 'Familia Primero'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">{language === 'en' ? 'Your Protector' : 'Tu Protectora'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium">{language === 'en' ? 'Trusted Advisor' : 'Asesora de Confianza'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent rounded-3xl blur-2xl opacity-20" />
                  <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/images/agents/albaandson.jpg"
                        alt={language === 'en' ? "Alba with her son - Family values" : "Alba con su hijo - Valores familiares"}
                        width={600}
                        height={450}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-2xl p-4 shadow-xl max-w-[200px]">
                      <p className="text-sm font-semibold">
                        {language === 'en' 
                          ? '"Protecting families like my own"'
                          : '"Protegiendo familias como la mía"'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-12 md:py-20 bg-primary/10">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary rounded-full text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">
                {language === 'en' ? 'Why Choose Alba' : 'Por Qué Elegir a Alba'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-primary px-4">
                {language === 'en' ? 'Your Success Is My Mission' : 'Tu Éxito Es Mi Misión'}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-3xl mx-auto px-4">
                {agentData.mission[language as 'en' | 'es']}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {whyChooseMe.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full border border-primary-200 hover:border-primary-400">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-primary-800">
                        {reason.title[language as 'en' | 'es']}
                      </h3>
                      <p className="text-primary-600 leading-relaxed">
                        {reason.description[language as 'en' | 'es']}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-primary/10">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full text-xs sm:text-sm font-semibold text-primary-800 mb-3 sm:mb-4">
                {language === 'en' ? 'Services' : 'Servicios'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                {language === 'en' ? 'Insurance Solutions' : 'Soluciones de Seguro'}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 max-w-3xl mx-auto px-4">
                {language === 'en' 
                  ? 'Comprehensive insurance coverage tailored to your needs'
                  : 'Cobertura de seguro integral adaptada a sus necesidades'
                }
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
                  >
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {service.title[language as 'en' | 'es']}
                    </h3>
                    <p className="text-primary-600">
                      {service.description[language as 'en' | 'es']}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 md:py-16 bg-accent/20">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-accent/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-10 h-10 text-yellow-500" />
                <h3 className="text-2xl font-bold text-primary-800">
                  {language === 'en' ? 'Achievements & Recognition' : 'Logros y Reconocimientos'}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {agentData.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <p className="text-primary-700 font-medium">
                      {achievement[language as 'en' | 'es']}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full text-xs sm:text-sm font-semibold text-primary-800 mb-3 sm:mb-4">
                {language === 'en' ? 'Testimonials' : 'Testimonios'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                {language === 'en' ? 'What Clients Say' : 'Lo Que Dicen Los Clientes'}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-purple-100 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary bg-opacity-10 rounded-full -mr-16 -mt-16 opacity-20" />
                    
                    {/* Verified Badge */}
                    {testimonial.verified && (
                      <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <BadgeCheck className="w-4 h-4" />
                        {language === 'en' ? 'Verified Client' : 'Cliente Verificado'}
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-primary-800">{testimonial.name}</h4>
                        <p className="text-sm text-primary-600">{testimonial.role[language as 'en' | 'es']}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-primary-700 mb-4 italic leading-relaxed">
                      "{testimonial.text[language as 'en' | 'es']}"
                    </blockquote>
                    
                    {testimonial.savings && (
                      <div className="bg-green-50 rounded-lg px-4 py-2 inline-flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-700">
                          {language === 'en' ? 'Saved:' : 'Ahorró:'} {testimonial.savings}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Appointment Section */}
        <section id="schedule" className="py-20 bg-primary/10">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
                {language === 'en' ? 'Get Started' : 'Comenzar'}
              </span>
              <h2 className="text-4xl font-bold mb-4">
                {language === 'en' ? 'Schedule Your Free Consultation' : 'Programe Su Consulta Gratuita'}
              </h2>
              <p className="text-xl text-primary-600">
                {language === 'en' 
                  ? "Let's discuss your insurance needs and find the perfect coverage"
                  : 'Hablemos de sus necesidades de seguro y encontremos la cobertura perfecta'
                }
              </p>
            </motion.div>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-semibold">
                        {language === 'en' ? 'Appointment Request Sent!' : '¡Solicitud de Cita Enviada!'}
                      </p>
                      <p className="text-green-700">
                        {language === 'en' 
                          ? 'Alba will contact you shortly to confirm your appointment.'
                          : 'Alba se pondrá en contacto con usted pronto para confirmar su cita.'
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="text-red-800 font-semibold">
                        {language === 'en' ? 'Something went wrong' : 'Algo salió mal'}
                      </p>
                      <p className="text-red-700">
                        {language === 'en' 
                          ? 'Please try again or call us directly.'
                          : 'Por favor intente de nuevo o llámenos directamente.'
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      {language === 'en' ? 'Full Name *' : 'Nombre Completo *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder={language === 'en' ? 'John Doe' : 'Juan Pérez'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      {language === 'en' ? 'Email *' : 'Correo Electrónico *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder={language === 'en' ? 'john@example.com' : 'juan@ejemplo.com'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      {language === 'en' ? 'Phone *' : 'Teléfono *'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="(786) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      {language === 'en' ? 'Service Needed *' : 'Servicio Necesario *'}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">
                        {language === 'en' ? 'Select a service' : 'Seleccione un servicio'}
                      </option>
                      {services.map((service, index) => (
                        <option key={index} value={service.title[language as 'en' | 'es']}>
                          {service.title[language as 'en' | 'es']}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      {language === 'en' ? 'Preferred Date' : 'Fecha Preferida'}
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      {language === 'en' ? 'Preferred Time' : 'Hora Preferida'}
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">
                        {language === 'en' ? 'Select a time' : 'Seleccione una hora'}
                      </option>
                      <option value="morning">
                        {language === 'en' ? 'Morning (9AM-12PM)' : 'Mañana (9AM-12PM)'}
                      </option>
                      <option value="afternoon">
                        {language === 'en' ? 'Afternoon (12PM-4PM)' : 'Tarde (12PM-4PM)'}
                      </option>
                      <option value="evening">
                        {language === 'en' ? 'Evening (4PM-6PM)' : 'Noche (4PM-6PM)'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    {language === 'en' ? 'Additional Information' : 'Información Adicional'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder={language === 'en' 
                      ? 'Tell us more about your insurance needs...'
                      : 'Cuéntenos más sobre sus necesidades de seguro...'
                    }
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <span className="text-sm text-primary-600">
                      {language === 'en' 
                        ? 'I agree to be contacted by Alba Estévez regarding my insurance needs. I understand that my information will be handled according to Unity Financial Network\'s privacy policy.'
                        : 'Acepto ser contactado por Alba Estévez con respecto a mis necesidades de seguro. Entiendo que mi información será manejada de acuerdo con la política de privacidad de Unity Financial Network.'
                      }
                    </span>
                  </label>
                </div>

                <TurnstileWidget onVerify={setTurnstileToken} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      {language === 'en' ? 'Sending...' : 'Enviando...'}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {language === 'en' ? 'Request Appointment' : 'Solicitar Cita'}
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 md:mt-12">
              <motion.a
                href={`tel:${agentData.phone.replace(/\D/g, '')}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{language === 'en' ? 'Call Us' : 'Llámenos'}</h3>
                <p className="text-primary-600 font-medium">{agentData.phone}</p>
              </motion.a>

              <motion.a
                href={`mailto:${agentData.email}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{language === 'en' ? 'Email Us' : 'Correo'}</h3>
                <p className="text-primary-600 font-medium text-xs break-all">{agentData.email}</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{language === 'en' ? 'Office Hours' : 'Horario'}</h3>
                <p className="text-primary-600 text-sm whitespace-pre-line">{agentData.schedule[language as 'en' | 'es']}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professional Consultation Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-primary/10 rounded-2xl p-8 lg:p-12 border border-primary-200">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-800 mb-4">
                    {language === 'en' 
                      ? 'Free Professional Insurance Consultation'
                      : 'Consulta Profesional de Seguros Gratuita'
                    }
                  </h2>
                  <p className="text-lg text-primary-700 max-w-2xl mx-auto">
                    {language === 'en'
                      ? 'Schedule a comprehensive review of your insurance needs with a licensed professional at no cost to you.'
                      : 'Programe una revisión completa de sus necesidades de seguro con una profesional licenciada sin costo alguno.'
                    }
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary-800 mb-2">
                      {language === 'en' ? 'Coverage Analysis' : 'Análisis de Cobertura'}
                    </h3>
                    <p className="text-sm text-primary-600">
                      {language === 'en' 
                        ? 'Comprehensive review of your current coverage and gaps'
                        : 'Revisión completa de su cobertura actual y vacíos'
                      }
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary-800 mb-2">
                      {language === 'en' ? 'Savings Report' : 'Informe de Ahorros'}
                    </h3>
                    <p className="text-sm text-primary-600">
                      {language === 'en' 
                        ? 'Personalized savings opportunities and cost optimization'
                        : 'Oportunidades personalizadas de ahorro y optimización de costos'
                      }
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary-800 mb-2">
                      {language === 'en' ? 'Plan Recommendations' : 'Recomendaciones de Planes'}
                    </h3>
                    <p className="text-sm text-primary-600">
                      {language === 'en' 
                        ? 'Tailored insurance solutions based on your specific needs'
                        : 'Soluciones de seguro adaptadas a sus necesidades específicas'
                      }
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <motion.button
                    onClick={() => setShowAppointmentModal(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg inline-flex items-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    {language === 'en' ? 'Schedule Your Free Consultation' : 'Programe Su Consulta Gratuita'}
                  </motion.button>
                  <p className="text-sm text-primary-600 mt-4">
                    {language === 'en' 
                      ? 'No obligation • Licensed Professional • Personalized Service'
                      : 'Sin compromiso • Profesional Licenciada • Servicio Personalizado'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-primary-800 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {language === 'en' 
                  ? 'Ready to Protect Your Family\'s Future?'
                  : '¿Listo para Proteger el Futuro de Su Familia?'
                }
              </h2>
              <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                {language === 'en' 
                  ? "Let's work together to find the perfect insurance coverage for your unique needs."
                  : 'Trabajemos juntos para encontrar la cobertura de seguro perfecta para sus necesidades únicas.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href={`tel:${agentData.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm font-medium">{language === 'en' ? 'Call Now' : 'Llame Ahora'}</div>
                    <div className="text-base">{agentData.phone}</div>
                  </div>
                </a>
                
                <a
                  href={`https://wa.me/${agentData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{language === 'en' ? 'WhatsApp' : 'WhatsApp'}</span>
                </a>
              </div>
              
              <div className="border-t border-white/20 pt-8">
                <p className="text-purple-200 mb-6">
                  {language === 'en' ? 'Follow me on social media for insurance tips and updates' : 'Sígueme en redes sociales para consejos de seguros y actualizaciones'}
                </p>
                <div className="flex gap-4 justify-center">
                  {Object.entries(agentData.social).map(([platform, url]) => {
                    if (platform === 'whatsapp') return null;
                    const icons = {
                      facebook: Facebook,
                      instagram: Instagram,
                      linkedin: Linkedin,
                      youtube: Youtube
                    };
                    const Icon = icons[platform as keyof typeof icons];
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Quote Calculator Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowQuoteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQuoteModal(false)}
                className="absolute right-4 top-4 z-10 text-neutral-400 hover:text-primary-600"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-8">
                <QuoteCalculator onClose={() => setShowQuoteModal(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <AnimatePresence>
        {showAppointmentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowAppointmentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAppointmentModal(false)}
                className="absolute right-4 top-4 text-neutral-400 hover:text-primary-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-6">
                <Calendar className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-800 to-accent bg-clip-text text-transparent mb-2">
                  {language === 'es' ? 'Solicite una Cita' : 'Schedule an Appointment'}
                </h2>
                <p className="text-primary-600">
                  {language === 'es' 
                    ? 'Complete el formulario y Alba se pondrá en contacto con usted'
                    : 'Fill out the form and Alba will contact you'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                    placeholder={language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                    placeholder={language === 'es' ? 'Correo Electrónico *' : 'Email *'}
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                    placeholder={language === 'es' ? 'Teléfono *' : 'Phone *'}
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">
                      {language === 'es' ? 'Seleccione un servicio *' : 'Select a service *'}
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title[language as 'en' | 'es']}>
                        {service.title[language as 'en' | 'es']}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                    placeholder={language === 'es' ? 'Fecha Preferida' : 'Preferred Date'}
                  />
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">
                      {language === 'es' ? 'Hora Preferida' : 'Preferred Time'}
                    </option>
                    <option value="morning">
                      {language === 'es' ? 'Mañana (9AM-12PM)' : 'Morning (9AM-12PM)'}
                    </option>
                    <option value="afternoon">
                      {language === 'es' ? 'Tarde (12PM-4PM)' : 'Afternoon (12PM-4PM)'}
                    </option>
                    <option value="evening">
                      {language === 'es' ? 'Noche (4PM-6PM)' : 'Evening (4PM-6PM)'}
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                    placeholder={language === 'es' 
                      ? 'Información adicional...'
                      : 'Additional information...'
                    }
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <span className="text-sm text-primary-600">
                      {language === 'es' 
                        ? 'Acepto los términos y condiciones'
                        : 'I accept the terms and conditions'
                      }
                    </span>
                  </label>
                </div>

                <TurnstileWidget onVerify={setTurnstileToken} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary bg-opacity-90 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                  ) : (
                    <span>{language === 'es' ? 'Solicitar Cita' : 'Request Appointment'}</span>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Request Modal */}
      <AnimatePresence>
        {showCallModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCallModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCallModal(false)}
                className="absolute right-4 top-4 text-neutral-400 hover:text-primary-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-6">
                <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-800 to-accent bg-clip-text text-transparent mb-2">
                  {language === 'es' ? 'Solicite una Llamada' : 'Request a Call'}
                </h2>
                <p className="text-primary-600">
                  {language === 'es' 
                    ? 'Deje sus datos y Alba le llamará lo antes posible'
                    : 'Leave your details and Alba will call you as soon as possible'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                  placeholder={language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                  placeholder={language === 'es' ? 'Teléfono *' : 'Phone *'}
                />
                
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">
                    {language === 'es' ? 'Mejor hora para llamar' : 'Best time to call'}
                  </option>
                  <option value="morning">
                    {language === 'es' ? 'Mañana (9AM-12PM)' : 'Morning (9AM-12PM)'}
                  </option>
                  <option value="afternoon">
                    {language === 'es' ? 'Tarde (12PM-4PM)' : 'Afternoon (12PM-4PM)'}
                  </option>
                  <option value="evening">
                    {language === 'es' ? 'Noche (4PM-6PM)' : 'Evening (4PM-6PM)'}
                  </option>
                </select>

                <TurnstileWidget onVerify={setTurnstileToken} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 text-primary-800 py-3 px-6 rounded-xl font-semibold hover:bg-yellow-400 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                  ) : (
                    <span>{language === 'es' ? 'Solicitar Llamada' : 'Request Call'}</span>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}