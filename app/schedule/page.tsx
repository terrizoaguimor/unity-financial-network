/**
 * @fileoverview Schedule Appointment Landing Page - Enhanced Version
 * 
 * Premium appointment scheduling page for Life & Health insurance consultations
 * Features:
 * - Lottie animations for engagement
 * - Modern gradient design
 * - Interactive calendar with time slot selection
 * - Real-time availability checking
 * - Email notifications to client and department
 * - Bilingual support (EN/ES)
 * - Mobile-responsive design
 * - Turnstile security integration
 * 
 * @module SchedulePage
 * @author Unity Financial Network
 * @version 2.0.0
 */

'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, Clock, User, Phone, Mail, Heart, Shield,
  ChevronRight, Check, AlertCircle, Sparkles, Star,
  Video, MapPin, Users, Award, TrendingUp, ArrowRight,
  CheckCircle, Info, MessageSquare, Stethoscope, Activity,
  Brain, Target, Zap, Gift, ArrowDown, ChevronDown
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import TurnstileWidget from '@/components/TurnstileWidget'
import LottieAnimation, { INLINE_ANIMATIONS } from '@/components/LottieAnimation'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'lottie-react'

// Lottie animation data for arrow
const arrowAnimation = {
  "v": "5.5.7",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 100,
  "h": 100,
  "nm": "Arrow Bounce",
  "ddd": 0,
  "assets": [],
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 4,
    "nm": "Arrow",
    "sr": 1,
    "ks": {
      "o": {"a": 0, "k": 100},
      "r": {"a": 0, "k": 90},
      "p": {
        "a": 1,
        "k": [{
          "i": {"x": 0.667, "y": 1},
          "o": {"x": 0.333, "y": 0},
          "t": 0,
          "s": [50, 40, 0],
          "to": [0, 3.333, 0],
          "ti": [0, -3.333, 0]
        }, {
          "i": {"x": 0.667, "y": 1},
          "o": {"x": 0.333, "y": 0},
          "t": 30,
          "s": [50, 60, 0],
          "to": [0, 3.333, 0],
          "ti": [0, -3.333, 0]
        }, {
          "t": 60,
          "s": [50, 40, 0]
        }]
      },
      "a": {"a": 0, "k": [0, 0, 0]},
      "s": {"a": 0, "k": [150, 150, 100]}
    },
    "ao": 0,
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ty": "sh",
        "d": 1,
        "ks": {
          "a": 0,
          "k": {
            "i": [[0, 0], [0, 0], [0, 0]],
            "o": [[0, 0], [0, 0], [0, 0]],
            "v": [[-20, -10], [0, 10], [20, -10]],
            "c": false
          }
        }
      }, {
        "ty": "st",
        "c": {"a": 0, "k": [0.522, 0.278, 0.784, 1]},
        "o": {"a": 0, "k": 100},
        "w": {"a": 0, "k": 3},
        "lc": 2,
        "lj": 2
      }],
      "nm": "Shape",
      "np": 2,
      "cix": 2,
      "bm": 0
    }],
    "ip": 0,
    "op": 60,
    "st": 0,
    "bm": 0
  }]
}

// Success animation
const successAnimation = {
  "v": "5.5.7",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 200,
  "h": 200,
  "nm": "Success",
  "ddd": 0,
  "assets": [],
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 4,
    "nm": "Check",
    "sr": 1,
    "ks": {
      "o": {"a": 0, "k": 100},
      "r": {"a": 0, "k": 0},
      "p": {"a": 0, "k": [100, 100, 0]},
      "a": {"a": 0, "k": [0, 0, 0]},
      "s": {
        "a": 1,
        "k": [{
          "i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]},
          "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]},
          "t": 0,
          "s": [0, 0, 100]
        }, {
          "i": {"x": [0.667, 0.667, 0.667], "y": [1, 1, 1]},
          "o": {"x": [0.333, 0.333, 0.333], "y": [0, 0, 0]},
          "t": 15,
          "s": [110, 110, 100]
        }, {
          "t": 30,
          "s": [100, 100, 100]
        }]
      }
    },
    "ao": 0,
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ty": "sh",
        "d": 1,
        "ks": {
          "a": 0,
          "k": {
            "i": [[0, 0], [0, 0], [0, 0]],
            "o": [[0, 0], [0, 0], [0, 0]],
            "v": [[-40, 0], [-15, 25], [40, -30]],
            "c": false
          }
        }
      }, {
        "ty": "st",
        "c": {"a": 0, "k": [0.2, 0.8, 0.2, 1]},
        "o": {"a": 0, "k": 100},
        "w": {"a": 0, "k": 8},
        "lc": 2,
        "lj": 2
      }, {
        "ty": "tm",
        "s": {"a": 0, "k": 0},
        "e": {
          "a": 1,
          "k": [{
            "i": {"x": [0.667], "y": [1]},
            "o": {"x": [0.333], "y": [0]},
            "t": 0,
            "s": [0]
          }, {
            "t": 30,
            "s": [100]
          }]
        },
        "o": {"a": 0, "k": 0},
        "m": 1
      }],
      "nm": "Shape",
      "np": 3,
      "cix": 2,
      "bm": 0
    }],
    "ip": 0,
    "op": 60,
    "st": 0,
    "bm": 0
  }]
}

export default function SchedulePage() {
  const { language } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [selectedService, setSelectedService] = useState('life')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: 'life',
    preferredContact: 'phone',
    message: '',
    agreeToTerms: false
  })

  const translations = {
    en: {
      title: 'Schedule Your Free Consultation',
      subtitle: 'Get Expert Insurance Guidance in Just Minutes',
      description: 'Book your personalized consultation with our licensed insurance specialists',
      lifeTitle: 'Life Insurance',
      lifeDesc: 'Protect your family\'s financial future',
      healthTitle: 'Health Insurance',
      healthDesc: 'Comprehensive coverage for your wellbeing',
      formTitle: 'Complete Your Booking',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      appointmentType: 'Insurance Type',
      selectDate: 'Select Your Preferred Date',
      selectTime: 'Choose Your Time',
      message: 'Tell Us About Your Needs (Optional)',
      messagePlaceholder: 'Any specific questions or concerns?',
      preferredContact: 'How Should We Contact You?',
      phoneContact: 'Phone Call',
      emailContact: 'Email',
      videoContact: 'Video Call',
      submit: 'Confirm Appointment',
      submitting: 'Booking Your Appointment...',
      successTitle: 'Appointment Confirmed!',
      successMessage: 'Check your email for confirmation details. We\'ll contact you soon!',
      errorMessage: 'Something went wrong. Please try again.',
      benefits: [
        '100% Free Consultation',
        'No Obligation to Purchase',
        'Licensed Expert Advisors',
        'Compare Multiple Carriers',
        'Bilingual Service Available',
        'Same-Day Response'
      ],
      availability: 'Available Monday-Friday, 9:00 AM - 6:00 PM EST',
      instantBooking: 'Book in 60 Seconds',
      whyChoose: 'Why Schedule With Unity?',
      stats: [
        { value: '10,000+', label: 'Happy Clients', icon: Users },
        { value: '15+', label: 'Years Experience', icon: Award },
        { value: '4.9', label: 'Star Rating', icon: Star },
        { value: '24hr', label: 'Response Time', icon: Clock }
      ]
    },
    es: {
      title: 'Agenda Tu Consulta Gratuita',
      subtitle: 'Obtén Asesoría Experta en Minutos',
      description: 'Reserva tu consulta personalizada con nuestros especialistas licenciados',
      lifeTitle: 'Seguro de Vida',
      lifeDesc: 'Protege el futuro financiero de tu familia',
      healthTitle: 'Seguro de Salud',
      healthDesc: 'Cobertura integral para tu bienestar',
      formTitle: 'Completa Tu Reserva',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      phone: 'Número de Teléfono',
      appointmentType: 'Tipo de Seguro',
      selectDate: 'Selecciona Tu Fecha Preferida',
      selectTime: 'Elige Tu Horario',
      message: 'Cuéntanos Tus Necesidades (Opcional)',
      messagePlaceholder: '¿Alguna pregunta o inquietud específica?',
      preferredContact: '¿Cómo Deberíamos Contactarte?',
      phoneContact: 'Llamada Telefónica',
      emailContact: 'Correo Electrónico',
      videoContact: 'Videollamada',
      submit: 'Confirmar Cita',
      submitting: 'Reservando Tu Cita...',
      successTitle: '¡Cita Confirmada!',
      successMessage: 'Revisa tu correo para los detalles. ¡Te contactaremos pronto!',
      errorMessage: 'Algo salió mal. Por favor intenta de nuevo.',
      benefits: [
        'Consulta 100% Gratuita',
        'Sin Obligación de Compra',
        'Asesores Expertos Licenciados',
        'Compara Múltiples Aseguradoras',
        'Servicio Bilingüe Disponible',
        'Respuesta el Mismo Día'
      ],
      availability: 'Disponible Lunes-Viernes, 9:00 AM - 6:00 PM EST',
      instantBooking: 'Reserva en 60 Segundos',
      whyChoose: '¿Por Qué Agendar con Unity?',
      stats: [
        { value: '10,000+', label: 'Clientes Felices', icon: Users },
        { value: '15+', label: 'Años de Experiencia', icon: Award },
        { value: '4.9', label: 'Calificación', icon: Star },
        { value: '24hr', label: 'Tiempo de Respuesta', icon: Clock }
      ]
    }
  }

  const t = translations[language]

  // Generate available dates (next 30 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dayOfWeek = date.getDay()
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  const availableDates = generateAvailableDates()

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agreeToTerms) {
      setSubmitError(language === 'en' 
        ? 'Please accept the terms and conditions' 
        : 'Por favor acepta los términos y condiciones')
      return
    }

    if (!turnstileToken) {
      setSubmitError(language === 'en'
        ? 'Please complete the security verification'
        : 'Por favor completa la verificación de seguridad')
      return
    }

    if (!selectedDate || !selectedTime) {
      setSubmitError(language === 'en'
        ? 'Please select a date and time for your appointment'
        : 'Por favor selecciona una fecha y hora para tu cita')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/schedule-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          appointmentDate: selectedDate,
          appointmentTime: selectedTime,
          turnstileToken,
          language
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            appointmentType: 'life',
            preferredContact: 'phone',
            message: '',
            agreeToTerms: false
          })
          setSelectedDate('')
          setSelectedTime('')
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError(t.errorMessage)
      }
    } catch (error) {
      setSubmitError(t.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceCards = [
    {
      type: 'life',
      title: t.lifeTitle,
      description: t.lifeDesc,
      icon: Shield,
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 to-indigo-600/10',
      features: language === 'en' 
        ? ['Term Life', 'Whole Life', 'Universal Life', 'Final Expense']
        : ['Vida a Término', 'Vida Entera', 'Vida Universal', 'Gastos Finales']
    },
    {
      type: 'health',
      title: t.healthTitle,
      description: t.healthDesc,
      icon: Heart,
      gradient: 'from-rose-500 to-pink-600',
      bgGradient: 'from-rose-500/10 to-pink-600/10',
      features: language === 'en'
        ? ['Individual Plans', 'Family Coverage', 'Medicare', 'Dental & Vision']
        : ['Planes Individuales', 'Cobertura Familiar', 'Medicare', 'Dental y Visión']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <HeaderSimple />

      {/* Hero Section - Redesigned */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg"
            >
              <Zap className="w-4 h-4" />
              {t.instantBooking}
              <Zap className="w-4 h-4" />
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              {t.subtitle}
            </p>

            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.description}
            </p>

            {/* Animated Arrow */}
            <div className="flex justify-center mb-12">
              <Lottie
                animationData={arrowAnimation}
                loop={true}
                style={{ width: 80, height: 80 }}
              />
            </div>

            {/* Stats Grid - Redesigned */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {t.stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-purple-100 hover:shadow-2xl transition-all hover:-translate-y-1"
                  >
                    <IconComponent className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Selection - Redesigned */}
      <section className="py-8 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {serviceCards.map((service, index) => {
              const IconComponent = service.icon
              const isSelected = formData.appointmentType === service.type
              
              return (
                <motion.div
                  key={service.type}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData(prev => ({ ...prev, appointmentType: service.type }))}
                  className={`relative cursor-pointer rounded-3xl p-8 transition-all ${
                    isSelected 
                      ? 'bg-white shadow-2xl ring-4 ring-primary-400 scale-105' 
                      : 'bg-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-3 -right-3 bg-green-500 rounded-full p-2"
                    >
                      <Check className="w-6 h-6 text-white" />
                    </motion.div>
                  )}

                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Form Section - Redesigned */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 px-8 py-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  {t.formTitle}
                </h2>
              </div>

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="p-8 md:p-12 space-y-8"
                  >
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary-600" />
                        {language === 'en' ? 'Personal Information' : 'Información Personal'}
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.firstName} *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                            placeholder={language === 'en' ? 'John' : 'Juan'}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.lastName} *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                            placeholder={language === 'en' ? 'Doe' : 'Pérez'}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.email} *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.phone} *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        {language === 'en' ? 'Appointment Details' : 'Detalles de la Cita'}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.selectDate} *
                          </label>
                          <div className="relative">
                            <select
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              required
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                            >
                              <option value="">{t.selectDate}</option>
                              {availableDates.map(date => {
                                const dateObj = new Date(date + 'T00:00:00')
                                const formatted = dateObj.toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                                  weekday: 'long',
                                  month: 'long',
                                  day: 'numeric'
                                })
                                return (
                                  <option key={date} value={date}>
                                    {formatted}
                                  </option>
                                )
                              })}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.selectTime} *
                          </label>
                          <div className="relative">
                            <select
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                              required
                              disabled={!selectedDate}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <option value="">{t.selectTime}</option>
                              {timeSlots.map(time => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Preference */}
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.preferredContact}
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { value: 'phone', label: t.phoneContact, icon: Phone },
                          { value: 'email', label: t.emailContact, icon: Mail },
                          { value: 'video', label: t.videoContact, icon: Video }
                        ].map(option => {
                          const IconComponent = option.icon
                          return (
                            <label
                              key={option.value}
                              className={`flex flex-col items-center justify-center gap-2 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                formData.preferredContact === option.value
                                  ? 'border-primary-500 bg-primary-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="preferredContact"
                                value={option.value}
                                checked={formData.preferredContact === option.value}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <IconComponent className={`w-6 h-6 ${
                                formData.preferredContact === option.value
                                  ? 'text-primary-600'
                                  : 'text-gray-500'
                              }`} />
                              <span className={`text-sm font-medium ${
                                formData.preferredContact === option.value
                                  ? 'text-primary-700'
                                  : 'text-gray-700'
                              }`}>{option.label}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder={t.messagePlaceholder}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Terms */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                          {language === 'en' 
                            ? 'I agree to the '
                            : 'Acepto los '}
                          <Link href="/terms" target="_blank" className="text-primary-600 hover:text-primary-700 underline font-medium">
                            {language === 'en' ? 'Terms and Conditions' : 'Términos y Condiciones'}
                          </Link>
                          {' '}{language === 'en' ? 'and' : 'y'}{' '}
                          <Link href="/privacy" target="_blank" className="text-primary-600 hover:text-primary-700 underline font-medium">
                            {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
                          </Link>
                        </label>
                      </div>
                    </div>

                    {/* Turnstile */}
                    <div className="flex justify-center">
                      <TurnstileWidget
                        onVerify={setTurnstileToken}
                        onError={() => setTurnstileToken('')}
                        onExpire={() => setTurnstileToken('')}
                      />
                    </div>

                    {/* Error */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border-2 border-red-200 rounded-xl"
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                          <p className="text-sm text-red-700">{submitError}</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting || !formData.agreeToTerms || !turnstileToken}
                      className={`w-full py-4 font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 ${
                        isSubmitting || !formData.agreeToTerms || !turnstileToken
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                          {t.submitting}
                        </>
                      ) : (
                        <>
                          <Calendar className="w-6 h-6" />
                          {t.submit}
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-12 text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <Lottie
                        animationData={successAnimation}
                        loop={false}
                        style={{ width: 150, height: 150 }}
                      />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {t.successTitle}
                    </h3>
                    <p className="text-gray-600 text-lg">{t.successMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                {t.whyChoose}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-center mt-8 p-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl"
            >
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <p className="text-gray-700 font-semibold text-lg">{t.availability}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}