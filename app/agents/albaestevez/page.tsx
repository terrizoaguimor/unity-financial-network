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
  UserPlus, X
} from 'lucide-react'

// Agent Data
const agentData = {
  name: 'Alba Estévez',
  title: {
    en: 'Licensed Health Insurance Agent',
    es: 'Agente de seguros de salud licenciado'
  },
  license: 'FL Licensed Agent',
  photo: '/images/agents/alba-estevez.jpg',
  bio: {
    en: 'I became an Agent after the passing of my older sister. We faced difficult financial situations, which inspired me to help women, leaders of their households, so they can provide their children a future when they are no longer here. I was born in Colombia and for 3 years I have been a Life Insurance Agent in the US. I help families to be SAFE AND PROTECTED, I provide PEACE OF MIND so that my clients and their loved ones are cared for, no matter what happens. My commitment is to provide families with the necessary financial security to face any unforeseen event.',
    es: 'Me convertí en Agente, tras la partida de mi hermana mayor, nos enfrentamos a situaciones económicas difíciles, lo que me inspiró a ayudar a las mujeres, líderes de su hogar, para que les brinden a sus hijos un futuro cuando no estén. Nací en Colombia y desde hace 3 años soy Agente de Seguros de Vida en EE.UU, ayudo a las familias a estar SEGURAS Y PROTEGIDAS, brindo TRANQUILIDAD para que mis clientes y sus seres queridos, estén cuidados, pase lo que pase. Mi compromiso es brindar a las familias la seguridad financiera necesaria para enfrentar cualquier imprevisto.'
  },
  specializations: {
    en: ['ACA/Obamacare Health Plans', 'Life Insurance', 'Accident Insurance', 'Disability Insurance', 'Dental Insurance', 'Medicare Plans'],
    es: ['Planes de Salud ACA/Obamacare', 'Seguro de Vida', 'Seguro de Accidente', 'Seguro de Discapacidad', 'Seguro Dental', 'Planes Medicare']
  },
  languages: ['English', 'Español'],
  phone: '(239) 832-1131',
  email: 'info@enterateconalbaestevez.com',
  whatsapp: '+12398321131',
  schedule: {
    en: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By Appointment',
    es: 'Lunes - Viernes: 9:00 AM - 6:00 PM\nSábado: Con Cita Previa'
  },
  social: {
    facebook: 'https://facebook.com/enterateconalbaestevez',
    instagram: 'https://instagram.com/enterateconalbaestevez',
    linkedin: 'https://www.linkedin.com/in/alba-estevez-enterate/',
    youtube: 'https://www.youtube.com/@AlbaEstevezEnterate',
    whatsapp: `https://wa.me/12398321131`
  },
  slogan: {
    en: 'I ensure the well-being and peace of mind of families',
    es: 'Aseguro el bienestar y la tranquilidad de las familias'
  },
  personalInfo: {
    en: 'Get to know your Advisor: I like to read, listen to music, watch a good movie',
    es: 'Conoce a tu Asesora: Me gusta leer, escuchar música, ver una buena película'
  },
  experience: {
    en: 'With years of experience and customer service focus, protecting your family is our greatest commitment.',
    es: 'Con años de experiencia y enfoque de servicio al cliente, proteger a tu familia es nuestro mayor compromiso.'
  }
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
    color: 'from-red-400 to-red-600'
  },
  {
    icon: Stethoscope,
    title: { en: 'Medicare Plans', es: 'Planes Medicare' },
    description: { 
      en: 'Medicare Advantage, Supplement, and Part D prescription plans',
      es: 'Medicare Advantage, Suplementario y planes de prescripción Parte D'
    },
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Shield,
    title: { en: 'Life Insurance', es: 'Seguro de Vida' },
    description: { 
      en: 'Term and whole life insurance to protect your loved ones',
      es: 'Seguro de vida temporal y permanente para proteger a sus seres queridos'
    },
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Home,
    title: { en: 'Home Insurance', es: 'Seguro de Hogar' },
    description: { 
      en: 'Complete protection for your home and belongings',
      es: 'Protección completa para su hogar y pertenencias'
    },
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Car,
    title: { en: 'Auto Insurance', es: 'Seguro de Auto' },
    description: { 
      en: 'Comprehensive auto coverage at competitive rates',
      es: 'Cobertura de auto completa a tarifas competitivas'
    },
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Building,
    title: { en: 'Business Insurance', es: 'Seguro de Negocio' },
    description: { 
      en: 'Protect your business with comprehensive commercial coverage',
      es: 'Proteja su negocio con cobertura comercial completa'
    },
    color: 'from-indigo-400 to-indigo-600'
  }
]

// Testimonials
const testimonials = [
  {
    name: 'María González',
    rating: 5,
    text: {
      en: 'Alba helped me find the perfect health insurance plan for my family. She explained everything clearly and saved us hundreds of dollars!',
      es: '¡Alba me ayudó a encontrar el plan de seguro de salud perfecto para mi familia. Explicó todo claramente y nos ahorró cientos de dólares!'
    }
  },
  {
    name: 'John Smith',
    rating: 5,
    text: {
      en: 'Professional, knowledgeable, and always available. Alba made the Medicare enrollment process so easy!',
      es: '¡Profesional, conocedora y siempre disponible. Alba hizo que el proceso de inscripción en Medicare fuera muy fácil!'
    }
  },
  {
    name: 'Carlos Rodríguez',
    rating: 5,
    text: {
      en: 'Excellent service! Alba found me great coverage that fits my budget. Highly recommend!',
      es: '¡Excelente servicio! Alba me encontró una gran cobertura que se ajusta a mi presupuesto. ¡Altamente recomendada!'
    }
  }
]

// Stats
const stats = [
  { 
    number: '1000+', 
    label: { en: 'Happy Clients', es: 'Clientes Felices' },
    icon: Users 
  },
  { 
    number: '10+', 
    label: { en: 'Years Experience', es: 'Años de Experiencia' },
    icon: Award 
  },
  { 
    number: '50+', 
    label: { en: 'Insurance Companies', es: 'Compañías de Seguros' },
    icon: Building 
  },
  { 
    number: '24/7', 
    label: { en: 'Support Available', es: 'Soporte Disponible' },
    icon: HeartHandshake 
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
          agent: 'Alba Estévez',
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
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-95" />
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">
                  <h1 className="text-5xl font-bold mb-4">
                    {agentData.name}
                  </h1>
                  <p className="text-2xl mb-4 text-purple-200">
                    {agentData.title[language as 'en' | 'es']}
                  </p>
                  <p className="text-sm mb-6 opacity-90">{agentData.license}</p>
                  <p className="text-lg mb-8 leading-relaxed">
                    {agentData.bio[language as 'en' | 'es']}
                  </p>
                  
                  {/* Languages */}
                  <div className="flex items-center gap-4 mb-8">
                    <Globe className="w-5 h-5" />
                    <span>{agentData.languages.join(' • ')}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setShowAppointmentModal(true)}
                      className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      {language === 'en' ? 'Schedule Appointment' : 'SOLICITE UNA CITA'}
                    </button>
                    <button
                      onClick={() => setShowCallModal(true)}
                      className="inline-flex items-center gap-2 bg-yellow-500 text-primary-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {language === 'en' ? 'Request a Call' : 'SOLICITE UNA LLAMADA'}
                    </button>
                    <button
                      onClick={() => setShowQuoteModal(true)}
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
                    >
                      <Calculator className="w-5 h-5" />
                      {language === 'en' ? 'Get Quote' : 'SOLICITE UNA COTIZACIÓN'}
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
                className="relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30" />
                  <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                    <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl overflow-hidden">
                      {/* Placeholder for agent photo */}
                      <div className="w-full h-full flex items-center justify-center">
                        <UserCheck className="w-32 h-32 text-purple-400" />
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
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label[language as 'en' | 'es']}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
                {language === 'en' ? 'Services' : 'Servicios'}
              </span>
              <h2 className="text-4xl font-bold mb-4">
                {language === 'en' ? 'Insurance Solutions' : 'Soluciones de Seguro'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Comprehensive insurance coverage tailored to your needs'
                  : 'Cobertura de seguro integral adaptada a sus necesidades'
                }
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {service.title[language as 'en' | 'es']}
                    </h3>
                    <p className="text-gray-600">
                      {service.description[language as 'en' | 'es']}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
                {language === 'en' ? 'Testimonials' : 'Testimonios'}
              </span>
              <h2 className="text-4xl font-bold mb-4">
                {language === 'en' ? 'What Clients Say' : 'Lo Que Dicen Los Clientes'}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text[language as 'en' | 'es']}"
                  </p>
                  <p className="font-semibold text-primary-600">— {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Appointment Section */}
        <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              <p className="text-xl text-gray-600">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Full Name *' : 'Nombre Completo *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder={language === 'en' ? 'John Doe' : 'Juan Pérez'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Email *' : 'Correo Electrónico *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder={language === 'en' ? 'john@example.com' : 'juan@ejemplo.com'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Phone *' : 'Teléfono *'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="(786) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Service Needed *' : 'Servicio Necesario *'}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Preferred Date' : 'Fecha Preferida'}
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Preferred Time' : 'Hora Preferida'}
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Additional Information' : 'Información Adicional'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                    <span className="text-sm text-gray-600">
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
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.a
                href={`tel:${agentData.phone.replace(/\D/g, '')}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{language === 'en' ? 'Email Us' : 'Correo'}</h3>
                <p className="text-primary-600 font-medium text-sm break-all">{agentData.email}</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{language === 'en' ? 'Office Hours' : 'Horario'}</h3>
                <p className="text-gray-600 text-sm whitespace-pre-line">{agentData.schedule[language as 'en' | 'es']}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                {language === 'en' 
                  ? 'Ready to Get the Coverage You Deserve?'
                  : '¿Listo para Obtener la Cobertura que Merece?'
                }
              </h2>
              <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
                {language === 'en' 
                  ? "Don't wait until it's too late. Protect yourself and your loved ones with the right insurance coverage today."
                  : 'No espere hasta que sea demasiado tarde. Protéjase a usted y a sus seres queridos con la cobertura de seguro adecuada hoy.'
                }
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={`tel:${agentData.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors text-lg"
                >
                  <Phone className="w-6 h-6" />
                  {agentData.phone}
                </a>
                <a
                  href={`https://wa.me/${agentData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  {language === 'en' ? 'Chat on WhatsApp' : 'Chat en WhatsApp'}
                </a>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowQuoteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQuoteModal(false)}
                className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600"
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
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-6">
                <Calendar className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary-800 mb-2">
                  {language === 'es' ? 'Solicite una Cita' : 'Schedule an Appointment'}
                </h2>
                <p className="text-gray-600">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                    placeholder={language === 'es' ? 'Teléfono *' : 'Phone *'}
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                    placeholder={language === 'es' ? 'Fecha Preferida' : 'Preferred Date'}
                  />
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
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
                    <span className="text-sm text-gray-600">
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
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all disabled:opacity-50"
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
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-6">
                <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary-800 mb-2">
                  {language === 'es' ? 'Solicite una Llamada' : 'Request a Call'}
                </h2>
                <p className="text-gray-600">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                  placeholder={language === 'es' ? 'Nombre Completo *' : 'Full Name *'}
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                  placeholder={language === 'es' ? 'Teléfono *' : 'Phone *'}
                />
                
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
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