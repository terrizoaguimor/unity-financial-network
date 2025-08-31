/**
 * @fileoverview Join Unity - Insurance Agent Recruitment Page
 * 
 * Focused on recruiting and training insurance agents with:
 * - Agent training programs
 * - Commission structures
 * - Career growth opportunities
 * - Professional development
 * - Application process
 * 
 * @module JoinUnityPage
 * @author Unity Financial Network
 * @version 2.0.0
 */

'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Users, Heart, Star, CheckCircle, MapPin, Phone, Mail,
  Briefcase, TrendingUp, Award, Coffee, Clock, DollarSign, 
  GraduationCap, Send, Zap, Target, Shield, Rocket,
  BookOpen, Trophy, Lightbulb, HandshakeIcon, Building,
  ChevronRight, Quote, BarChart, Calendar, Globe, 
  ArrowUpRight, Percent, UserCheck, FileText
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const TurnstileWidget = dynamic(() => import('@/components/TurnstileWidget'), { ssr: false })
import Image from 'next/image'
import Link from 'next/link'

export default function JoinUnityPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    license: '',
    message: '',
    acceptTerms: false
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!turnstileToken) {
      setSubmitError(language === 'en' ? 'Please complete the verification.' : 'Por favor completa la verificación.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const [firstName, ...lastNameParts] = formData.name.split(' ')
      const lastName = lastNameParts.join(' ') || ''
      
      const response = await fetch('/api/send-join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          state: 'Florida', // Default to Florida, you can add a state field if needed
          experience: formData.experience,
          hasLicense: formData.license,
          language,
          turnstileToken
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        setSubmitSuccess(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            experience: '',
            license: '',
            message: '',
            acceptTerms: false
          })
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError(language === 'en' ? 'Failed to submit application. Please try again.' : 'Error al enviar la aplicación. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(language === 'en' ? 'Failed to submit application. Please try again.' : 'Error al enviar la aplicación. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Training program data
  const trainingPrograms = [
    {
      icon: GraduationCap,
      title: language === 'en' ? 'Insurance Fundamentals' : 'Fundamentos del Seguro',
      duration: language === 'en' ? '2 weeks' : '2 semanas',
      description: language === 'en' 
        ? 'Master the basics of insurance products, regulations, and client consultation'
        : 'Domina los conceptos básicos de productos de seguro, regulaciones y consulta con clientes',
      modules: [
        language === 'en' ? 'Life Insurance Essentials' : 'Fundamentos del Seguro de Vida',
        language === 'en' ? 'Health Insurance Plans' : 'Planes de Seguro de Salud',
        language === 'en' ? 'Medicare & ACA' : 'Medicare y ACA',
        language === 'en' ? 'Compliance & Ethics' : 'Cumplimiento y Ética'
      ]
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Sales Excellence' : 'Excelencia en Ventas',
      duration: language === 'en' ? '3 weeks' : '3 semanas',
      description: language === 'en'
        ? 'Advanced sales techniques, lead generation, and closing strategies'
        : 'Técnicas avanzadas de ventas, generación de leads y estrategias de cierre',
      modules: [
        language === 'en' ? 'Consultative Selling' : 'Venta Consultiva',
        language === 'en' ? 'Digital Marketing' : 'Marketing Digital',
        language === 'en' ? 'Client Relationship Management' : 'Gestión de Relaciones con Clientes',
        language === 'en' ? 'Objection Handling' : 'Manejo de Objeciones'
      ]
    },
    {
      icon: Trophy,
      title: language === 'en' ? 'Leadership Development' : 'Desarrollo de Liderazgo',
      duration: language === 'en' ? '4 weeks' : '4 semanas',
      description: language === 'en'
        ? 'Build your own team and scale your insurance business'
        : 'Construye tu propio equipo y escala tu negocio de seguros',
      modules: [
        language === 'en' ? 'Team Building' : 'Construcción de Equipos',
        language === 'en' ? 'Business Planning' : 'Planificación de Negocios',
        language === 'en' ? 'Financial Management' : 'Gestión Financiera',
        language === 'en' ? 'Mentorship Skills' : 'Habilidades de Mentoría'
      ]
    }
  ]

  // Commission structure - without specific percentages
  const commissionTiers = [
    {
      level: language === 'en' ? 'Entry Level' : 'Nivel Inicial',
      range: language === 'en' ? 'Competitive' : 'Competitivo',
      description: language === 'en' ? 'Starting Agents' : 'Agentes Iniciales',
      color: 'from-blue-400 to-cyan-500',
      icon: TrendingUp
    },
    {
      level: language === 'en' ? 'Professional' : 'Profesional',
      range: language === 'en' ? 'Enhanced' : 'Mejorado',
      description: language === 'en' ? 'Experienced Agents' : 'Agentes Experimentados',
      color: 'from-green-400 to-emerald-500',
      icon: Award
    },
    {
      level: language === 'en' ? 'Senior Agent' : 'Agente Senior',
      range: language === 'en' ? 'Premium' : 'Premium',
      description: language === 'en' ? 'Top Performers' : 'Alto Rendimiento',
      color: 'from-purple-400 to-indigo-500',
      icon: Star
    },
    {
      level: language === 'en' ? 'Elite Producer' : 'Productor Élite',
      range: language === 'en' ? 'Industry-Leading' : 'Líder en la Industria',
      description: language === 'en' ? 'Elite Achievers' : 'Élite de Logros',
      color: 'from-yellow-400 to-orange-500',
      icon: Trophy
    }
  ]

  // Agent benefits
  const agentBenefits = [
    {
      icon: DollarSign,
      title: language === 'en' ? 'Uncapped Commissions' : 'Comisiones Sin Límite',
      description: language === 'en'
        ? 'Earn competitive commissions with no ceiling on your income potential'
        : 'Gana comisiones competitivas sin límite en tu potencial de ingresos'
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Flexible Schedule' : 'Horario Flexible',
      description: language === 'en'
        ? 'Work on your own terms with complete control over your schedule'
        : 'Trabaja en tus propios términos con control completo sobre tu horario'
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Continuous Training' : 'Capacitación Continua',
      description: language === 'en'
        ? 'Access to ongoing education and professional development programs'
        : 'Acceso a programas de educación continua y desarrollo profesional'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Team Support' : 'Apoyo del Equipo',
      description: language === 'en'
        ? 'Join a collaborative team that celebrates your success'
        : 'Únete a un equipo colaborativo que celebra tu éxito'
    },
    {
      icon: Trophy,
      title: language === 'en' ? 'Recognition Programs' : 'Programas de Reconocimiento',
      description: language === 'en'
        ? 'Earn rewards, bonuses, and trips for top performance'
        : 'Gana recompensas, bonos y viajes por alto rendimiento'
    },
    {
      icon: Rocket,
      title: language === 'en' ? 'Career Growth' : 'Crecimiento Profesional',
      description: language === 'en'
        ? 'Clear path to leadership roles and business ownership'
        : 'Camino claro hacia roles de liderazgo y propiedad del negocio'
    }
  ]

  // Success stories - updated without specific amounts
  const successStories = [
    {
      name: 'Maria Rodriguez',
      role: language === 'en' ? 'Senior Agent' : 'Agente Senior',
      achievement: language === 'en' ? 'Top Producer' : 'Productora Destacada',
      quote: language === 'en'
        ? 'Unity Financial gave me the tools and support to build a successful career while helping families protect their future.'
        : 'Unity Financial me dio las herramientas y el apoyo para construir una carrera exitosa mientras ayudo a las familias a proteger su futuro.',
      image: '/images/agent-1.jpg'
    },
    {
      name: 'Carlos Mendez',
      role: language === 'en' ? 'Team Leader' : 'Líder de Equipo',
      achievement: language === 'en' ? 'Agency Builder' : 'Constructor de Agencia',
      quote: language === 'en'
        ? 'From agent to team leader in just 2 years. The growth opportunities here are limitless.'
        : 'De agente a líder de equipo en solo 2 años. Las oportunidades de crecimiento aquí son ilimitadas.',
      image: '/images/agent-2.jpg'
    }
  ]

  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      
      {/* Hero Section with Video Background Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-purple-800 to-primary-700" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-8 border border-white/20"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              {language === 'en' ? 'Join Our Elite Team' : 'Únete a Nuestro Equipo Élite'}
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {language === 'en' ? (
                <>
                  <span className="block">Become an</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%_auto] animate-gradient">
                    Insurance Leader
                  </span>
                  <span className="block">with Unity</span>
                </>
              ) : (
                <>
                  <span className="block">Conviértete en</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%_auto] animate-gradient">
                    Líder de Seguros
                  </span>
                  <span className="block">con Unity</span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {language === 'en'
                ? "At Unity Financial Network, we don't just recruit agents, we empower them. Join a community of support, growth, and unlimited success."
                : "En Unity Financial Network, no solo reclutamos agentes, los empoderamos. Únete a una comunidad de apoyo, crecimiento y éxito ilimitado."}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: '100+', label: language === 'en' ? 'Active Agents' : 'Agentes Activos' },
                { value: '1000+', label: language === 'en' ? 'Families Protected' : 'Familias Protegidas' },
                { value: '95%', label: language === 'en' ? 'Agent Retention' : 'Retención de Agentes' },
                { value: '24/7', label: language === 'en' ? 'Support Available' : 'Soporte Disponible' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl transition-all flex items-center gap-2 justify-center"
              >
                {language === 'en' ? 'Start Your Journey' : 'Comienza Tu Viaje'}
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                {language === 'en' ? 'View Training Programs' : 'Ver Programas de Capacitación'}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

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
      </section>

      {/* Why Join Unity - Enhanced */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6">
              <Star className="w-4 h-4" />
              {language === 'en' ? 'Why Unity Financial' : 'Por Qué Unity Financial'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? (
                <>Your Success is <span className="gradient-text animate-gradient">Our Mission</span></>
              ) : (
                <>Tu Éxito es <span className="gradient-text animate-gradient">Nuestra Misión</span></>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'We provide the tools, training, and support you need to build a thriving insurance business'
                : 'Proporcionamos las herramientas, capacitación y apoyo que necesitas para construir un negocio de seguros próspero'}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="training" className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary-700 mb-6 shadow-md">
              <GraduationCap className="w-4 h-4" />
              {language === 'en' ? 'Comprehensive Training' : 'Capacitación Integral'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? (
                <>World-Class <span className="gradient-text animate-gradient">Training Programs</span></>
              ) : (
                <>Programas de <span className="gradient-text animate-gradient">Capacitación de Clase Mundial</span></>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'From beginner to expert, our training programs ensure your success at every level'
                : 'De principiante a experto, nuestros programas de capacitación aseguran tu éxito en cada nivel'}
            </p>
          </motion.div>

          {/* Training Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="bg-gradient-to-br from-primary-600 to-purple-600 p-8 text-white">
                  <program.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="space-y-3">
                    {program.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/20">
              <DollarSign className="w-4 h-4 text-yellow-400" />
              {language === 'en' ? 'Earning Potential' : 'Potencial de Ganancias'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? (
                <>Rewarding <span className="text-yellow-400">Career Growth</span></>
              ) : (
                <>Crecimiento <span className="text-yellow-400">Profesional Gratificante</span></>
              )}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Build your success with our comprehensive compensation and advancement opportunities'
                : 'Construye tu éxito con nuestra compensación integral y oportunidades de avance'}
            </p>
          </motion.div>

          {/* Commission Tiers - Updated without percentages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color} rounded-t-3xl`} />
                  <div className="text-center">
                    <Icon className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">{tier.level}</h3>
                    <div className="text-2xl font-bold text-yellow-400 mb-2">{tier.range}</div>
                    <div className="text-sm text-white/80">{tier.description}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Percent className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">{language === 'en' ? 'Renewal Commissions' : 'Comisiones de Renovación'}</h4>
                <p className="text-white/80">{language === 'en' ? 'Earn on policy renewals' : 'Gana en renovaciones de pólizas'}</p>
              </div>
              <div>
                <Trophy className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">{language === 'en' ? 'Performance Bonuses' : 'Bonos de Rendimiento'}</h4>
                <p className="text-white/80">{language === 'en' ? 'Monthly & quarterly rewards' : 'Recompensas mensuales y trimestrales'}</p>
              </div>
              <div>
                <Users className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">{language === 'en' ? 'Team Overrides' : 'Comisiones de Equipo'}</h4>
                <p className="text-white/80">{language === 'en' ? 'Build and earn from your team' : 'Construye y gana de tu equipo'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6">
              <Star className="w-4 h-4" />
              {language === 'en' ? 'Agent Success Stories' : 'Historias de Éxito'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? (
                <>Real Agents, <span className="gradient-text animate-gradient">Real Success</span></>
              ) : (
                <>Agentes Reales, <span className="gradient-text animate-gradient">Éxito Real</span></>
              )}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-8 shadow-lg"
              >
                <Quote className="w-10 h-10 text-primary-600 mb-4" />
                <p className="text-lg text-gray-700 italic mb-6">{story.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <p className="text-gray-600">{story.role}</p>
                    <p className="text-primary-600 font-semibold">{story.achievement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-primary-700 mb-6 shadow-md">
              <FileText className="w-4 h-4" />
              {language === 'en' ? 'Join Our Team' : 'Únete a Nuestro Equipo'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? (
                <>Start Your <span className="gradient-text animate-gradient">Success Story</span></>
              ) : (
                <>Comienza Tu <span className="gradient-text animate-gradient">Historia de Éxito</span></>
              )}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en'
                ? 'Take the first step towards a rewarding career in insurance'
                : 'Da el primer paso hacia una carrera gratificante en seguros'}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  placeholder={language === 'en' ? 'John Doe' : 'Juan Pérez'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Email Address *' : 'Correo Electrónico *'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Phone Number *' : 'Número de Teléfono *'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  placeholder="(786) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Years of Experience' : 'Años de Experiencia'}
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                >
                  <option value="">{language === 'en' ? 'Select Experience' : 'Seleccionar Experiencia'}</option>
                  <option value="none">{language === 'en' ? 'No Experience' : 'Sin Experiencia'}</option>
                  <option value="1-2">{language === 'en' ? '1-2 Years' : '1-2 Años'}</option>
                  <option value="3-5">{language === 'en' ? '3-5 Years' : '3-5 Años'}</option>
                  <option value="5+">{language === 'en' ? '5+ Years' : '5+ Años'}</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Insurance License Status' : 'Estado de Licencia de Seguros'}
              </label>
              <select
                name="license"
                value={formData.license}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              >
                <option value="">{language === 'en' ? 'Select Status' : 'Seleccionar Estado'}</option>
                <option value="licensed">{language === 'en' ? 'Currently Licensed' : 'Actualmente Licenciado'}</option>
                <option value="expired">{language === 'en' ? 'License Expired' : 'Licencia Expirada'}</option>
                <option value="studying">{language === 'en' ? 'Studying for License' : 'Estudiando para Licencia'}</option>
                <option value="none">{language === 'en' ? 'Not Licensed' : 'No Licenciado'}</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Why do you want to join Unity Financial?' : '¿Por qué quieres unirte a Unity Financial?'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                placeholder={language === 'en' 
                  ? 'Tell us about your goals and aspirations...' 
                  : 'Cuéntanos sobre tus metas y aspiraciones...'}
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-primary-600 bg-gray-50 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                />
                <span className="text-sm text-gray-600">
                  {language === 'en' ? (
                    <>
                      I accept the{' '}
                      <a href="/terms" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                        Terms and Conditions
                      </a>
                      {' '}and{' '}
                      <a href="/privacy" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                        Privacy Policy
                      </a>
                    </>
                  ) : (
                    <>
                      Acepto los{' '}
                      <a href="/terms" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                        Términos y Condiciones
                      </a>
                      {' '}y la{' '}
                      <a href="/privacy" target="_blank" className="text-primary-600 hover:text-primary-700 underline">
                        Política de Privacidad
                      </a>
                    </>
                  )}
                </span>
              </label>
            </div>

            <TurnstileWidget
              onVerify={(token) => setTurnstileToken(token)}
              onError={() => setSubmitError(language === 'en' ? 'Verification failed. Please try again.' : 'La verificación falló. Por favor intenta de nuevo.')}
              onExpire={() => setTurnstileToken(null)}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full px-8 py-4 font-semibold text-lg rounded-xl transition-all flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-2xl'
              }`}
            >
              {isSubmitting ? (
                <>
                  {language === 'en' ? 'Sending...' : 'Enviando...'}
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </>
              ) : (
                <>
                  {language === 'en' ? 'Submit Application' : 'Enviar Solicitud'}
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">
                      {language === 'en' ? 'Application Received!' : '¡Aplicación Recibida!'}
                    </h3>
                    <p className="text-green-700">
                      {language === 'en' 
                        ? 'Your application has been received. A recruiter will contact you soon.'
                        : 'Tu aplicación ha sido recibida. Un reclutador te contactará próximamente.'}
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
                className="mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">
                      {language === 'en' ? 'Submission Error' : 'Error al Enviar'}
                    </h3>
                    <p className="text-red-700">{submitError}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <p className="text-center text-sm text-gray-500 mt-6">
              {language === 'en' 
                ? 'By submitting this form, you agree to be contacted by Unity Financial Network regarding career opportunities.'
                : 'Al enviar este formulario, aceptas ser contactado por Unity Financial Network sobre oportunidades profesionales.'}
            </p>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 mb-6">
              {language === 'en' ? 'Ready to elevate your career? Contact us today!' : '¿Listo para elevar tu carrera? ¡Contáctanos hoy!'}
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="tel:7869636392" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                <Phone className="w-5 h-5" />
                (786) 963-6392
              </a>
              <a href="mailto:careers@unityfinancialnetwork.com" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                <Mail className="w-5 h-5" />
                careers@unityfinancialnetwork.com
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <Building className="w-5 h-5" />
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