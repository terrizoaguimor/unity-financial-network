/**
 * @fileoverview About page component for Unity Financial Network
 * 
 * Premium design with comprehensive company information including:
 * - Company mission, vision and legacy
 * - Founder Martin Tuirán complete biography
 * - Core values and principles
 * - Team philosophy
 * - Company achievements and statistics
 * - Interactive elements and animations
 * 
 * @module AboutPage
 * @author Unity Financial Network Development Team
 * @version 3.0.0
 */

'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Shield, Heart, Sparkles, Users, Award, TrendingUp, 
  Building, Clock, Target, Eye, Star, CheckCircle,
  Briefcase, GraduationCap, Lightbulb, HandshakeIcon,
  ArrowRight, Quote, Phone
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

export default function AboutPage() {
  const { language } = useLanguage()
  const containerRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="overflow-hidden" ref={containerRef}>
      <HeaderSimple />
      
      {/* Premium Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
          
          {/* Additional animated elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
              <div className="absolute top-1/4 right-20 w-3 h-3 bg-yellow-400/40 rounded-full animate-pulse delay-300" />
              <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-300/30 rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-700" />
            </div>
          </div>
          
          {/* Floating Orbs with Enhanced Animation */}
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
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Sparkles className="w-4 h-4" />
              {language === 'en' ? 'About Unity Financial Network' : 'Acerca de Unity Financial Network'}
            </span>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {language === 'en' 
                ? <>
                    <span className="block">Empowering</span>
                    <span className="text-accent font-bold">Financial</span>
                    <span className="block">Futures</span>
                  </>
                : <>
                    <span className="block">Empoderando</span>
                    <span className="text-accent font-bold">Futuros</span>
                    <span className="block">Financieros</span>
                  </>}
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              {language === 'en'
                ? 'We believe that financial empowerment is the key to unlocking a brighter future. Our mission is to bridge the gap between financial literacy and financial success.'
                : 'Creemos que el empoderamiento financiero es la clave para desbloquear un futuro más brillante. Nuestra misión es cerrar la brecha entre la educación financiera y el éxito financiero.'}
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { value: '20+', label: language === 'en' ? 'Years Experience' : 'Años de Experiencia' },
                { value: '10,000+', label: language === 'en' ? 'Happy Families' : 'Familias Felices' },
                { value: '11+', label: language === 'en' ? 'Insurance Products' : 'Productos de Seguro' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <motion.div 
                    className="text-4xl font-bold mb-2 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/80 relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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

      {/* Our Mission - Premium Section */}
      <section className="section-padding bg-primary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6">
                  <Target className="w-4 h-4" />
                  {language === 'en' ? 'Our Mission' : 'Nuestra Misión'}
                </span>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  {language === 'en' 
                    ? <>More Than a <span className="gradient-text">Financial Services</span> Provider</>
                    : <>Más Que un Proveedor de <span className="gradient-text">Servicios Financieros</span></>}
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {language === 'en'
                      ? 'We are a movement dedicated to fostering economic resilience through education, strategic planning, and innovative solutions. Our team of experts is committed to guiding our clients with integrity, transparency, and a personalized approach to financial well-being.'
                      : 'Somos un movimiento dedicado a fomentar la resiliencia económica a través de la educación, la planificación estratégica y las soluciones innovadoras. Nuestro equipo de expertos está comprometido a guiar a nuestros clientes con integridad, transparencia y un enfoque personalizado.'}
                  </p>
                  
                  <p>
                    {language === 'en'
                      ? 'Whether you are planning for your future, growing your business, or seeking financial security, Unity Financial Network stands beside you every step of the way. We understand that every financial journey is unique.'
                      : 'Ya sea que esté planificando su futuro, haciendo crecer su negocio o buscando seguridad financiera, Unity Financial Network está a su lado en cada paso del camino. Entendemos que cada viaje financiero es único.'}
                  </p>

                  <div className="pt-4">
                    <h3 className="text-2xl font-bold mb-4 text-primary-800">
                      {language === 'en' ? 'Our Commitment:' : 'Nuestro Compromiso:'}
                    </h3>
                    <ul className="space-y-3">
                      {[
                        language === 'en' ? 'Build wealth through smart planning' : 'Construir riqueza mediante planificación inteligente',
                        language === 'en' ? 'Achieve financial stability' : 'Lograr estabilidad financiera',
                        language === 'en' ? 'Create lasting legacies' : 'Crear legados duraderos',
                        language === 'en' ? 'Foster economic resilience' : 'Fomentar la resiliencia económica'
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
                    >
                      {language === 'en' ? 'Explore Services' : 'Explorar Servicios'}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Premium Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/office.png"
                  alt="Unity Financial Network Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Overlay Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary-600">Unity Financial</div>
                      <div className="text-gray-600">{language === 'en' ? 'Your Trusted Partner' : 'Tu Socio de Confianza'}</div>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Premium Design */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-full"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Award className="w-4 h-4" />
              {language === 'en' ? 'Leadership & Vision' : 'Liderazgo y Visión'}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'en' ? 'Meet Our Founder' : 'Conoce a Nuestro Fundador'}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'The visionary leader who transformed financial services'
                : 'El líder visionario que transformó los servicios financieros'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Images - Premium Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/about/martin-1.png"
                    alt="Martin Tuirán"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl mt-8"
                >
                  <Image
                    src="/images/about/martin-2.png"
                    alt="Martin Tuirán"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Quote below images - smaller and better positioned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm italic text-white/90 leading-relaxed">
                      {language === 'en'
                        ? '"Unity Financial Network was never just a business, it was my purpose, my dream, and my legacy."'
                        : '"Unity Financial Network nunca fue solo un negocio, fue mi propósito, mi sueño y mi legado."'}
                    </p>
                    <p className="text-xs text-yellow-400 font-semibold mt-2">- Martin Tuirán</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Founder Bio - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-4xl font-bold mb-3">Martin Tuirán</h3>
                <p className="text-xl text-yellow-400 font-semibold mb-6">
                  {language === 'en' ? 'Founder, CEO & Visionary' : 'Fundador, CEO y Visionario'}
                </p>
              </div>

              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  {language === 'en'
                    ? 'Martin Tuirán is more than the founder of Unity Financial Network—he is the driving force, visionary leader, and heart of our company. With over 20 years of experience, Martin built a company rooted in personalized service, unwavering dedication, and innovative solutions.'
                    : 'Martin Tuirán es más que el fundador de Unity Financial Network: es la fuerza impulsora, líder visionario y corazón de nuestra empresa. Con más de 20 años de experiencia, Martin construyó una empresa arraigada en el servicio personalizado, dedicación inquebrantable y soluciones innovadoras.'}
                </p>
                
                <p>
                  {language === 'en'
                    ? 'His meticulous attention to his team and clients fueled the company\'s rapid growth, while his empathetic, lightning-fast responses earned the trust and loyalty of those he served. A natural entrepreneur with a deep passion for sales and business operations, Martin devoted countless hours to learning, teaching, and inspiring those around him.'
                    : 'Su meticulosa atención a su equipo y clientes impulsó el rápido crecimiento de la empresa, mientras que sus respuestas empáticas y ultrarrápidas ganaron la confianza y lealtad de aquellos a quienes servía. Un emprendedor natural con una profunda pasión por las ventas y las operaciones comerciales.'}
                </p>

                <p>
                  {language === 'en'
                    ? 'His relentless pursuit of excellence and his ability to see opportunities where others saw obstacles set him apart as a leader in the financial industry. His vision lives on in the team he mentored, the clients who continue to place their trust in Unity, and the principles of excellence, integrity, and service that define the company today.'
                    : 'Su búsqueda incansable de la excelencia y su capacidad para ver oportunidades donde otros veían obstáculos lo distinguieron como líder en la industria financiera. Su visión vive en el equipo que guió, los clientes que continúan confiando en Unity, y los principios de excelencia, integridad y servicio.'}
                </p>
              </div>

              {/* Legacy Points */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Briefcase, label: language === 'en' ? '20+ Years Experience' : '20+ Años de Experiencia' },
                  { icon: Users, label: language === 'en' ? '10,000+ Lives Impacted' : '10,000+ Vidas Impactadas' },
                  { icon: Award, label: language === 'en' ? 'Industry Leader' : 'Líder de la Industria' },
                  { icon: Heart, label: language === 'en' ? 'Client-First Philosophy' : 'Filosofía Cliente Primero' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3"
                  >
                    <item.icon className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Cards */}
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
              {language === 'en' ? 'Our Core Values' : 'Nuestros Valores Fundamentales'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'en' 
                ? <>Principles That <span className="gradient-text">Define Us</span></>
                : <>Principios Que Nos <span className="gradient-text">Definen</span></>}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our values guide every decision, every interaction, and every solution we provide'
                : 'Nuestros valores guían cada decisión, cada interacción y cada solución que brindamos'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: language === 'en' ? 'Integrity' : 'Integridad',
                description: language === 'en' 
                  ? 'We conduct business with honesty, transparency, and unwavering ethical standards'
                  : 'Realizamos negocios con honestidad, transparencia y estándares éticos inquebrantables',
                color: 'bg-primary',
                bgColor: 'bg-primary/5'
              },
              {
                icon: Heart,
                title: language === 'en' ? 'Personalization' : 'Personalización',
                description: language === 'en'
                  ? 'Every client is unique, and we tailor solutions to fit individual needs and dreams'
                  : 'Cada cliente es único, y adaptamos soluciones para satisfacer necesidades y sueños individuales',
                color: 'bg-primary',
                bgColor: 'bg-primary/5'
              },
              {
                icon: Lightbulb,
                title: language === 'en' ? 'Innovation' : 'Innovación',
                description: language === 'en'
                  ? 'We embrace cutting-edge solutions to provide the best financial services'
                  : 'Adoptamos soluciones de vanguardia para brindar los mejores servicios financieros',
                color: 'bg-accent',
                bgColor: 'bg-accent/5'
              },
              {
                icon: HandshakeIcon,
                title: language === 'en' ? 'Partnership' : 'Asociación',
                description: language === 'en'
                  ? 'We build lasting relationships based on trust, respect, and mutual success'
                  : 'Construimos relaciones duraderas basadas en confianza, respeto y éxito mutuo',
                color: 'bg-green-600',
                bgColor: 'bg-green-50'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative ${value.bgColor} p-8 rounded-3xl overflow-hidden group cursor-pointer`}
              >
                {/* Background decoration */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${value.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
                
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Team Section */}
      <section className="section-padding bg-primary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6">
              <Users className="w-4 h-4" />
              {language === 'en' ? 'Our Elite Team' : 'Nuestro Equipo Élite'}
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {language === 'en' 
                ? <>The Foundation of <span className="gradient-text">Our Success</span></>
                : <>La Base de <span className="gradient-text">Nuestro Éxito</span></>}
            </h2>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <Quote className="w-12 h-12 text-primary-600 mx-auto mb-6" />
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                {language === 'en'
                  ? '"At Unity Financial Network, our team is the foundation of our success. Our professional agents are recognized and trusted by a diverse, multicultural market because we prioritize personalized communication and deep client connections. We don\'t just offer financial services—we embody excellence and are committed to a client-first approach."'
                  : '"En Unity Financial Network, nuestro equipo es la base de nuestro éxito. Nuestros agentes profesionales son reconocidos y confiables por un mercado diverso y multicultural porque priorizamos la comunicación personalizada y las conexiones profundas con los clientes. No solo ofrecemos servicios financieros: encarnamos la excelencia y estamos comprometidos con un enfoque de cliente primero."'}
              </p>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  {language === 'en' 
                    ? "At Unity Financial Network, you're not just a client—you're family."
                    : "En Unity Financial Network, no eres solo un cliente—eres familia."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'en' ? 'Our Impact in Numbers' : 'Nuestro Impacto en Números'}
            </h2>
            <p className="text-xl text-white/80">
              {language === 'en' ? 'Real results for real families' : 'Resultados reales para familias reales'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: '20+', 
                label: language === 'en' ? 'Years of Excellence' : 'Años de Excelencia',
                icon: Clock 
              },
              { 
                number: '10,000+', 
                label: language === 'en' ? 'Families Protected' : 'Familias Protegidas',
                icon: Users 
              },
              { 
                number: '11+', 
                label: language === 'en' ? 'Insurance Solutions' : 'Soluciones de Seguro',
                icon: Shield 
              },
              { 
                number: '24/7', 
                label: language === 'en' ? 'Support Available' : 'Soporte Disponible',
                icon: Heart 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <div className="text-4xl md:text-5xl font-bold mb-3">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-6">
              <Sparkles className="w-4 h-4" />
              {language === 'en' ? 'Join Our Journey' : 'Únete a Nuestro Viaje'}
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {language === 'en' 
                ? <>Ready to Build Your <span className="gradient-text">Financial Legacy?</span></>
                : <>¿Listo para Construir Tu <span className="gradient-text">Legado Financiero?</span></>}
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Join thousands of satisfied clients who have found financial security, peace of mind, and a trusted partner with Unity Financial Network.'
                : 'Únete a miles de clientes satisfechos que han encontrado seguridad financiera, tranquilidad y un socio de confianza con Unity Financial Network.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-3 group"
                >
                  {language === 'en' ? 'Get Your Free Quote' : 'Obtén Tu Cotización Gratis'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/join-unity">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-primary-600 text-primary-600 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all"
                >
                  {language === 'en' ? 'Join Our Team' : 'Únete a Nuestro Equipo'}
                </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-16 flex flex-wrap gap-8 justify-center">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary-600" />
                <span className="text-gray-600">7950 NW 53rd St STE 136, Doral, FL 33166</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <a href="tel:(786) 828-5576" className="text-primary-600 font-semibold hover:text-primary-700">
                  ((786) 828-5576
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}