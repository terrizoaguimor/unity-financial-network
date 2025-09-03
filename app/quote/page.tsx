/**
 * @fileoverview Get a Free Quote Page
 * 
 * Premium insurance quote wizard with:
 * - Multi-step form with progress tracking
 * - Interactive insurance product selection
 * - Real-time premium estimation
 * - Premium animations and design
 * - Bilingual support
 * 
 * @module QuotePage
 * @author Unity Financial Network
 * @version 2.0.0
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { 
  User, Calendar, MapPin, Phone, Mail, Shield, Heart, Home, Car,
  ChevronRight, ChevronLeft, Check, AlertCircle, DollarSign,
  Users, Calculator, FileText, Briefcase, TrendingUp, Award,
  Clock, CreditCard, Building, Baby, Cigarette, Activity,
  Star, Sparkles, Target, Zap, ArrowRight, Quote, BarChart,
  Globe, Percent, UserCheck, Send, ChevronDown, Info, CheckCircle
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import TurnstileWidget from '@/components/TurnstileWidget'
import Image from 'next/image'
import Link from 'next/link'

export default function QuotePage() {
  const { language } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    // Step 2 - Coverage Type
    insuranceType: '',
    // Step 3 - Details
    zipCode: '',
    gender: '',
    maritalStatus: '',
    dependents: 0,
    smoker: '',
    // Step 4 - Health/Auto/Home specific
    currentCoverage: '',
    coverageAmount: '',
    deductiblePreference: '',
    // Step 5 - Review
    agreeToContact: false,
    agreeToTerms: false,
    agreeToPrivacy: false
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalSteps = 5

  // Insurance products with enhanced details
  const insuranceTypes = [
    { 
      id: 'health', 
      name: language === 'en' ? 'Health Insurance' : 'Seguro de Salud', 
      icon: Heart, 
      color: 'from-red-400 to-pink-600',
      description: language === 'en' 
        ? 'Comprehensive medical coverage for you and your family'
        : 'Cobertura médica integral para ti y tu familia',
      features: [
        language === 'en' ? 'Doctor visits' : 'Visitas al médico',
        language === 'en' ? 'Prescription drugs' : 'Medicamentos recetados',
        language === 'en' ? 'Preventive care' : 'Cuidado preventivo'
      ]
    },
    { 
      id: 'life', 
      name: language === 'en' ? 'Life Insurance' : 'Seguro de Vida', 
      icon: Shield, 
      color: 'from-blue-400 to-cyan-600',
      description: language === 'en'
        ? 'Protect your loved ones\' financial future'
        : 'Protege el futuro financiero de tus seres queridos',
      features: [
        language === 'en' ? 'Term & Permanent' : 'Temporal y Permanente',
        language === 'en' ? 'Living benefits' : 'Beneficios en vida',
        language === 'en' ? 'Cash value' : 'Valor en efectivo'
      ]
    },
    { 
      id: 'auto', 
      name: language === 'en' ? 'Auto Insurance' : 'Seguro de Auto', 
      icon: Car, 
      color: 'from-green-400 to-emerald-600',
      description: language === 'en'
        ? 'Complete protection for your vehicle'
        : 'Protección completa para tu vehículo',
      features: [
        language === 'en' ? 'Collision coverage' : 'Cobertura de colisión',
        language === 'en' ? 'Liability protection' : 'Protección de responsabilidad',
        language === 'en' ? 'Roadside assistance' : 'Asistencia en carretera'
      ]
    },
    { 
      id: 'home', 
      name: language === 'en' ? 'Home Insurance' : 'Seguro de Hogar', 
      icon: Home, 
      color: 'from-yellow-400 to-orange-600',
      description: language === 'en'
        ? 'Safeguard your most valuable asset'
        : 'Protege tu activo más valioso',
      features: [
        language === 'en' ? 'Property damage' : 'Daños a la propiedad',
        language === 'en' ? 'Personal belongings' : 'Pertenencias personales',
        language === 'en' ? 'Liability coverage' : 'Cobertura de responsabilidad'
      ]
    },
    { 
      id: 'medicare', 
      name: language === 'en' ? 'Medicare Plans' : 'Planes Medicare', 
      icon: Users, 
      color: 'from-purple-400 to-indigo-600',
      description: language === 'en'
        ? 'Comprehensive Medicare coverage options'
        : 'Opciones completas de cobertura Medicare',
      features: [
        language === 'en' ? 'Medicare Advantage' : 'Medicare Advantage',
        language === 'en' ? 'Supplement plans' : 'Planes suplementarios',
        language === 'en' ? 'Prescription Part D' : 'Medicamentos Parte D'
      ]
    },
    { 
      id: 'business', 
      name: language === 'en' ? 'Business Insurance' : 'Seguro Comercial', 
      icon: Briefcase, 
      color: 'from-gray-400 to-gray-600',
      description: language === 'en'
        ? 'Protect your business and employees'
        : 'Protege tu negocio y empleados',
      features: [
        language === 'en' ? 'General liability' : 'Responsabilidad general',
        language === 'en' ? 'Property insurance' : 'Seguro de propiedad',
        language === 'en' ? 'Workers\' comp' : 'Compensación laboral'
      ]
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}
    
    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = language === 'en' ? 'First name is required' : 'Nombre es requerido'
      if (!formData.lastName) newErrors.lastName = language === 'en' ? 'Last name is required' : 'Apellido es requerido'
      if (!formData.email) newErrors.email = language === 'en' ? 'Email is required' : 'Correo es requerido'
      if (!formData.phone) newErrors.phone = language === 'en' ? 'Phone is required' : 'Teléfono es requerido'
      if (!formData.dateOfBirth) newErrors.dateOfBirth = language === 'en' ? 'Date of birth is required' : 'Fecha de nacimiento es requerida'
    } else if (currentStep === 2) {
      if (!formData.insuranceType) newErrors.insuranceType = language === 'en' ? 'Please select an insurance type' : 'Por favor selecciona un tipo de seguro'
    } else if (currentStep === 3) {
      if (!formData.zipCode) newErrors.zipCode = language === 'en' ? 'ZIP code is required' : 'Código postal es requerido'
      if (!formData.gender) newErrors.gender = language === 'en' ? 'Gender is required' : 'Género es requerido'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    // Validate all required checkboxes
    if (!formData.agreeToContact || !formData.agreeToTerms || !formData.agreeToPrivacy) {
      setSubmitError(language === 'en' 
        ? 'Please accept all required terms and conditions'
        : 'Por favor acepta todos los términos y condiciones requeridos')
      return
    }
    
    // Validate Turnstile token
    if (!turnstileToken) {
      setSubmitError(language === 'en'
        ? 'Please complete the security verification'
        : 'Por favor completa la verificación de seguridad')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          state: formData.zipCode, // Using zipCode as state for now
          monthlyBudget: '$' + calculateEstimate(),
          hasMedicalConditions: formData.smoker === 'yes' ? 'Yes' : 'No',
          isSmoker: formData.smoker,
          turnstileToken,
          language
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        setSubmitSuccess(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            insuranceType: '',
            zipCode: '',
            gender: '',
            maritalStatus: '',
            dependents: 0,
            smoker: '',
            currentCoverage: '',
            coverageAmount: '',
            deductiblePreference: '',
            agreeToContact: false,
            agreeToTerms: false,
            agreeToPrivacy: false
          })
          setCurrentStep(1)
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError(language === 'en' ? 'Failed to submit form. Please try again.' : 'Error al enviar el formulario. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(language === 'en' ? 'Failed to submit form. Please try again.' : 'Error al enviar el formulario. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateEstimate = () => {
    let basePrice = 200
    if (formData.insuranceType === 'health') basePrice = 350
    if (formData.insuranceType === 'life') basePrice = 50
    if (formData.insuranceType === 'auto') basePrice = 150
    if (formData.insuranceType === 'home') basePrice = 125
    if (formData.insuranceType === 'medicare') basePrice = 175
    if (formData.insuranceType === 'business') basePrice = 250
    
    // Adjustments
    if (formData.smoker === 'yes') basePrice *= 1.5
    if (formData.dependents) basePrice += formData.dependents * 50
    
    return basePrice.toFixed(0)
  }

  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <main className="overflow-hidden" ref={containerRef}>
      <HeaderSimple />
      
      {/* Premium Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-purple-800 to-primary-700" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
          
          {/* Floating Orbs */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/3 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"
          />
          
          {/* Animated dots */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
              <div className="absolute top-1/4 right-20 w-3 h-3 bg-yellow-400/40 rounded-full animate-pulse delay-300" />
              <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-300/30 rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-700" />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y, opacity }}
          className="container-custom relative z-10 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-8 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              {language === 'en' ? 'Free Quote in 5 Minutes' : 'Cotización Gratis en 5 Minutos'}
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {language === 'en' ? (
                <>
                  <span className="block">Get Your</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%_auto] animate-gradient">
                    Personalized Quote
                  </span>
                  <span className="block">Today</span>
                </>
              ) : (
                <>
                  <span className="block">Obtén Tu</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%_auto] animate-gradient">
                    Cotización Personalizada
                  </span>
                  <span className="block">Hoy</span>
                </>
              )}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {language === 'en'
                ? 'Compare rates from top insurance providers and find the perfect coverage for your needs. No obligations, no hidden fees.'
                : 'Compara tarifas de los principales proveedores de seguros y encuentra la cobertura perfecta para tus necesidades. Sin obligaciones, sin tarifas ocultas.'}
            </motion.p>

            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-8 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Clock, label: language === 'en' ? '5 Minutes' : '5 Minutos', sublabel: language === 'en' ? 'Quick Process' : 'Proceso Rápido' },
                { icon: Shield, label: language === 'en' ? '100% Free' : '100% Gratis', sublabel: language === 'en' ? 'No Hidden Fees' : 'Sin Tarifas Ocultas' },
                { icon: Award, label: language === 'en' ? 'Licensed' : 'Licenciados', sublabel: language === 'en' ? 'Expert Agents' : 'Agentes Expertos' },
                { icon: Users, label: '1000+', sublabel: language === 'en' ? 'Happy Clients' : 'Clientes Felices' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.label}</div>
                  <div className="text-sm text-white/80">{stat.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                {language === 'en' ? 'Start Your Free Quote' : 'Comienza Tu Cotización Gratis'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Insurance Products Showcase */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Target className="w-4 h-4 animate-spin-slow" />
              {language === 'en' ? 'Our Coverage Options' : 'Nuestras Opciones de Cobertura'}
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? (
                <>Insurance Solutions <span className="gradient-text animate-gradient">For Every Need</span></>
              ) : (
                <>Soluciones de Seguro <span className="gradient-text animate-gradient">Para Cada Necesidad</span></>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Comprehensive coverage options designed to protect what matters most to you'
                : 'Opciones de cobertura integral diseñadas para proteger lo que más te importa'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className={`h-2 bg-gradient-to-r ${type.color}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{type.name}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setFormData({ ...formData, insuranceType: type.id })
                        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className={`w-full py-3 bg-gradient-to-r ${type.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
                    >
                      {language === 'en' ? 'Get Quote' : 'Obtener Cotización'}
                    </motion.button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote Wizard - Enhanced */}
      <section id="quote-form" className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6">
              <Calculator className="w-4 h-4" />
              {language === 'en' ? 'Quote Calculator' : 'Calculadora de Cotización'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' ? (
                <>Your Custom <span className="gradient-text">Insurance Quote</span></>
              ) : (
                <>Tu Cotización <span className="gradient-text">Personalizada</span></>
              )}
            </h2>
          </motion.div>

          {/* Progress Bar - Enhanced */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                {language === 'en' ? `Step ${currentStep} of ${totalSteps}` : `Paso ${currentStep} de ${totalSteps}`}
              </span>
              <span className="text-sm font-medium text-primary-600">
                {Math.round(progressPercentage)}% {language === 'en' ? 'Complete' : 'Completado'}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-600 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between mt-6">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step < currentStep
                        ? 'bg-green-500 text-white shadow-lg'
                        : step === currentStep
                        ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-xl scale-110'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                    whileHover={{ scale: step <= currentStep ? 1.1 : 1 }}
                  >
                    {step < currentStep ? <Check className="w-6 h-6" /> : step}
                  </motion.div>
                  <span className="text-xs mt-2 text-gray-600 hidden sm:block">
                    {step === 1 && (language === 'en' ? 'Personal' : 'Personal')}
                    {step === 2 && (language === 'en' ? 'Coverage' : 'Cobertura')}
                    {step === 3 && (language === 'en' ? 'Details' : 'Detalles')}
                    {step === 4 && (language === 'en' ? 'Preferences' : 'Preferencias')}
                    {step === 5 && (language === 'en' ? 'Review' : 'Revisar')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content - Enhanced */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                      <User className="w-8 h-8 text-primary-600" />
                      {language === 'en' ? 'Personal Information' : 'Información Personal'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Let\'s start with some basic information about you.'
                        : 'Comencemos con información básica sobre ti.'}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'First Name *' : 'Nombre *'}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                            errors.firstName ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder={language === 'en' ? 'John' : 'Juan'}
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Last Name *' : 'Apellido *'}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                            errors.lastName ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder={language === 'en' ? 'Doe' : 'Pérez'}
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Email Address *' : 'Correo Electrónico *'}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                            errors.email ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Phone Number *' : 'Número de Teléfono *'}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                            errors.phone ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="(786) 123-4567"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Date of Birth *' : 'Fecha de Nacimiento *'}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                            errors.dateOfBirth ? 'border-red-500' : 'border-gray-200'
                          }`}
                        />
                      </div>
                      {errors.dateOfBirth && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.dateOfBirth}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Coverage Type - Enhanced */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                      <Shield className="w-8 h-8 text-primary-600" />
                      {language === 'en' ? 'Select Your Coverage' : 'Selecciona Tu Cobertura'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Choose the type of insurance that best fits your needs.'
                        : 'Elige el tipo de seguro que mejor se adapte a tus necesidades.'}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {insuranceTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <motion.button
                          key={type.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFormData({ ...formData, insuranceType: type.id })}
                          className={`relative p-6 rounded-2xl border-2 transition-all text-left ${
                            formData.insuranceType === type.id
                              ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-purple-50 shadow-lg'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          {formData.insuranceType === type.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-4 right-4"
                            >
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-white" />
                              </div>
                            </motion.div>
                          )}
                          <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </motion.button>
                      )
                    })}
                  </div>

                  {errors.insuranceType && (
                    <p className="mt-4 text-sm text-red-500 flex items-center gap-1 justify-center">
                      <AlertCircle className="w-4 h-4" />
                      {errors.insuranceType}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                      <FileText className="w-8 h-8 text-primary-600" />
                      {language === 'en' ? 'Additional Details' : 'Detalles Adicionales'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Help us customize your quote with a few more details.'
                        : 'Ayúdanos a personalizar tu cotización con algunos detalles más.'}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'ZIP Code *' : 'Código Postal *'}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                            errors.zipCode ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="33166"
                        />
                      </div>
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.zipCode}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Gender *' : 'Género *'}
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                          errors.gender ? 'border-red-500' : 'border-gray-200'
                        }`}
                      >
                        <option value="">{language === 'en' ? 'Select gender' : 'Seleccionar género'}</option>
                        <option value="male">{language === 'en' ? 'Male' : 'Masculino'}</option>
                        <option value="female">{language === 'en' ? 'Female' : 'Femenino'}</option>
                        <option value="other">{language === 'en' ? 'Other' : 'Otro'}</option>
                      </select>
                      {errors.gender && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.gender}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Marital Status' : 'Estado Civil'}
                      </label>
                      <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                      >
                        <option value="">{language === 'en' ? 'Select status' : 'Seleccionar estado'}</option>
                        <option value="single">{language === 'en' ? 'Single' : 'Soltero/a'}</option>
                        <option value="married">{language === 'en' ? 'Married' : 'Casado/a'}</option>
                        <option value="divorced">{language === 'en' ? 'Divorced' : 'Divorciado/a'}</option>
                        <option value="widowed">{language === 'en' ? 'Widowed' : 'Viudo/a'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Number of Dependents' : 'Número de Dependientes'}
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="number"
                          name="dependents"
                          value={formData.dependents}
                          onChange={handleInputChange}
                          min="0"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    {(formData.insuranceType === 'health' || formData.insuranceType === 'life') && (
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          {language === 'en' ? 'Do you use tobacco products?' : '¿Usas productos de tabaco?'}
                        </label>
                        <div className="flex gap-4">
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, smoker: 'no' })}
                            className={`flex-1 py-3 px-6 rounded-xl border-2 font-medium transition-all ${
                              formData.smoker === 'no'
                                ? 'border-green-500 bg-green-50 text-green-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {language === 'en' ? 'No' : 'No'}
                          </motion.button>
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, smoker: 'yes' })}
                            className={`flex-1 py-3 px-6 rounded-xl border-2 font-medium transition-all ${
                              formData.smoker === 'yes'
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {language === 'en' ? 'Yes' : 'Sí'}
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Coverage Preferences */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                      <Target className="w-8 h-8 text-primary-600" />
                      {language === 'en' ? 'Coverage Preferences' : 'Preferencias de Cobertura'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Customize your coverage to match your needs and budget.'
                        : 'Personaliza tu cobertura para que coincida con tus necesidades y presupuesto.'}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {language === 'en' 
                          ? `Do you currently have ${formData.insuranceType} insurance?`
                          : `¿Actualmente tienes seguro de ${formData.insuranceType}?`}
                      </label>
                      <div className="flex gap-4">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData({ ...formData, currentCoverage: 'yes' })}
                          className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                            formData.currentCoverage === 'yes'
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {language === 'en' ? 'Yes, I have coverage' : 'Sí, tengo cobertura'}
                        </motion.button>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData({ ...formData, currentCoverage: 'no' })}
                          className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                            formData.currentCoverage === 'no'
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {language === 'en' ? 'No coverage' : 'Sin cobertura'}
                        </motion.button>
                      </div>
                    </div>

                    {formData.insuranceType === 'life' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          {language === 'en' ? 'Coverage Amount' : 'Monto de Cobertura'}
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['$100k', '$250k', '$500k', '$1M+'].map((amount) => (
                            <motion.button
                              key={amount}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setFormData({ ...formData, coverageAmount: amount })}
                              className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                                formData.coverageAmount === amount
                                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              {amount}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {language === 'en' ? 'Deductible Preference' : 'Preferencia de Deducible'}
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { value: 'low', label: language === 'en' ? 'Low' : 'Bajo', desc: language === 'en' ? 'Higher premium' : 'Prima más alta' },
                          { value: 'medium', label: language === 'en' ? 'Medium' : 'Medio', desc: language === 'en' ? 'Balanced' : 'Balanceado' },
                          { value: 'high', label: language === 'en' ? 'High' : 'Alto', desc: language === 'en' ? 'Lower premium' : 'Prima más baja' }
                        ].map((option) => (
                          <motion.button
                            key={option.value}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, deductiblePreference: option.value })}
                            className={`py-4 px-4 rounded-xl border-2 transition-all ${
                              formData.deductiblePreference === option.value
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-medium mb-1">{option.label}</div>
                            <div className="text-xs text-gray-500">{option.desc}</div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Review & Submit - Enhanced */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      {language === 'en' ? 'Review Your Quote' : 'Revisa Tu Cotización'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'en' 
                        ? 'Please review your information before submitting.'
                        : 'Por favor revisa tu información antes de enviar.'}
                    </p>
                  </div>

                  {/* Premium Estimate Card */}
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-gradient-to-br from-primary-600 to-purple-600 text-white rounded-3xl p-8 mb-8 shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">
                        {language === 'en' ? 'Estimated Monthly Premium' : 'Prima Mensual Estimada'}
                      </h3>
                      <DollarSign className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-5xl font-bold mb-3">
                      ${calculateEstimate()}<span className="text-2xl font-normal">/mo</span>
                    </div>
                    <p className="text-white/80 text-sm">
                      {language === 'en' 
                        ? '* This is an estimate. Final pricing will be provided by our specialist.'
                        : '* Esta es una estimación. El precio final será proporcionado por nuestro especialista.'}
                    </p>
                  </motion.div>

                  {/* Information Summary */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold mb-4">{language === 'en' ? 'Your Information' : 'Tu Información'}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{language === 'en' ? 'Name' : 'Nombre'}</span>
                        <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{language === 'en' ? 'Email' : 'Correo'}</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{language === 'en' ? 'Phone' : 'Teléfono'}</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{language === 'en' ? 'Insurance Type' : 'Tipo de Seguro'}</span>
                        <span className="font-medium capitalize">{formData.insuranceType}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">{language === 'en' ? 'ZIP Code' : 'Código Postal'}</span>
                        <span className="font-medium">{formData.zipCode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800 mb-2">
                          {language === 'en' ? 'What happens next?' : '¿Qué pasa después?'}
                        </p>
                        <ul className="space-y-2 text-sm text-yellow-700">
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>
                              {language === 'en' 
                                ? 'A licensed specialist will contact you within 24 hours'
                                : 'Un especialista licenciado te contactará en 24 horas'}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>
                              {language === 'en' 
                                ? 'Receive personalized quotes from multiple providers'
                                : 'Recibe cotizaciones personalizadas de múltiples proveedores'}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>
                              {language === 'en' 
                                ? 'No obligation to purchase'
                                : 'Sin obligación de compra'}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Agreement Checkboxes */}
                  <div className="space-y-4">
                    {/* Contact Agreement */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreeToContact"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="agreeToContact" className="text-sm text-gray-600">
                        {language === 'en' 
                          ? 'I agree to be contacted by Unity Financial Network regarding my insurance quote. I understand that I am under no obligation to purchase any insurance product.'
                          : 'Acepto ser contactado por Unity Financial Network sobre mi cotización de seguro. Entiendo que no tengo obligación de comprar ningún producto de seguro.'}
                      </label>
                    </div>

                    {/* Terms & Conditions Agreement */}
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
                          ? 'I have read and accept the '
                          : 'He leído y acepto los '}
                        <Link href="/terms" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                          {language === 'en' ? 'Terms and Conditions' : 'Términos y Condiciones'}
                        </Link>
                        {language === 'en' ? ' *' : ' *'}
                      </label>
                    </div>

                    {/* Privacy Policy Agreement */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreeToPrivacy"
                        name="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="agreeToPrivacy" className="text-sm text-gray-600">
                        {language === 'en' 
                          ? 'I have read and accept the '
                          : 'He leído y acepto la '}
                        <Link href="/privacy" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                          {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
                        </Link>
                        {language === 'en' ? ' *' : ' *'}
                      </label>
                    </div>

                    {/* Turnstile Captcha */}
                    <div className="mt-6">
                      <TurnstileWidget
                        onVerify={setTurnstileToken}
                        onError={() => setTurnstileToken('')}
                        onExpire={() => setTurnstileToken('')}
                      />
                    </div>

                    {/* Submit Error Display */}
                    {submitError && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                          <p className="text-sm text-red-700">{submitError}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons - Enhanced */}
            <div className="flex justify-between mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  currentStep === 1
                    ? 'invisible'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                {language === 'en' ? 'Previous' : 'Anterior'}
              </motion.button>

              {currentStep < totalSteps ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all flex items-center gap-2"
                >
                  {language === 'en' ? 'Next' : 'Siguiente'}
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  disabled={!formData.agreeToContact || !formData.agreeToTerms || !formData.agreeToPrivacy || !turnstileToken || isSubmitting}
                  className={`px-10 py-4 font-semibold rounded-xl transition-all flex items-center gap-2 ${
                    formData.agreeToContact && formData.agreeToTerms && formData.agreeToPrivacy && turnstileToken && !isSubmitting
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      {language === 'en' ? 'Sending...' : 'Enviando...'}
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      {language === 'en' ? 'Submit Quote Request' : 'Enviar Solicitud'}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">
                    {language === 'en' ? 'Request Received!' : '¡Solicitud Recibida!'}
                  </h3>
                  <p className="text-green-700">
                    {language === 'en' 
                      ? 'Your quote request has been received. An advisor will contact you soon.'
                      : 'Tu solicitud de cotización ha sido recibida. Un asesor te contactará próximamente.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">
                    {language === 'en' ? 'Submission Error' : 'Error al Enviar'}
                  </h3>
                  <p className="text-red-700">{submitError}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Trust Badges - Enhanced */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="font-medium">{language === 'en' ? 'SSL Secured' : 'SSL Seguro'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-6 h-6 text-blue-500" />
                <span className="font-medium">{language === 'en' ? '24/7 Support' : 'Soporte 24/7'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-6 h-6 text-yellow-500" />
                <span className="font-medium">{language === 'en' ? 'Licensed Agents' : 'Agentes Licenciados'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-6 h-6 text-purple-500" />
                <span className="font-medium">{language === 'en' ? '1000+ Happy Clients' : '1000+ Clientes Felices'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Unity - Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' ? (
                <>Why Choose <span className="gradient-text">Unity Financial?</span></>
              ) : (
                <>¿Por Qué Elegir <span className="gradient-text">Unity Financial?</span></>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {language === 'en'
                ? 'With over 20 years of experience, we\'ve helped thousands of families find the perfect insurance coverage at the best rates.'
                : 'Con más de 20 años de experiencia, hemos ayudado a miles de familias a encontrar la cobertura de seguro perfecta a las mejores tarifas.'}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="tel:7868285576" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg">
                <Phone className="w-6 h-6" />
                (7868285576
              </a>
              <a href="mailto:hello@unityfinancialnetwork.com" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg">
                <Mail className="w-6 h-6" />
                hello@unityfinancialnetwork.com
              </a>
              <div className="flex items-center gap-2 text-gray-600 text-lg">
                <Building className="w-6 h-6" />
                7950 NW 53rd St STE 136, Doral, FL 33166
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}