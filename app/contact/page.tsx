'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  CheckCircle, AlertCircle, Loader2, Building,
  Globe, Users, HeadphonesIcon, ChevronRight
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const TurnstileWidget = dynamic(() => import('@/components/TurnstileWidget'), { ssr: false })

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri 9AM-6PM EST',
    value: '(786) 828-5576',
    link: 'tel:7868285576',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We reply within 24 hours',
    value: 'hello@unityfinancialnetwork.com',
    link: 'mailto:hello@unityfinancialnetwork.com',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our main office',
    value: '7950 NW 53rd St STE 136, Doral, FL 33166',
    link: '#',
    color: 'from-orange-400 to-orange-600'
  }
]

const offices = [
  {
    name: 'Unity Financial Network',
    address: '7950 NW 53rd St STE 136, Doral, FL 33166',
    phone: '(786) 828-5576',
    hours: 'Mon-Fri: 9AM-6PM'
  }
]

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      setSubmitStatus('error')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          language,
          turnstileToken
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            acceptTerms: false
          })
          setTurnstileToken(null)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-40 pb-20 overflow-hidden">
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
            <HeadphonesIcon className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get in{' '}
            <span className="gradient-text">Touch</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're here to help with all your insurance needs. Reach out to our 
            friendly team and get the support you deserve.
          </motion.p>
        </motion.div>

        {/* Animated decorations */}
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
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-200 to-purple-200 rounded-full opacity-20 blur-3xl"
        />
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <HeadphonesIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl font-bold mb-2">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help with all your insurance needs. Reach out to our friendly team
              and get the support you deserve.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.title}
                  href={method.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                  <p className="text-primary-600 font-semibold">{method.value}</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800">Your message has been sent successfully!</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800">Something went wrong. Please try again.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Subject' : 'Asunto'} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder={language === 'en' ? 'How can we help you?' : '¿Cómo podemos ayudarte?'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Message' : 'Mensaje'} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                      placeholder={language === 'en' ? 'Tell us more about your inquiry...' : 'Cuéntanos más sobre tu consulta...'}
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
                  onError={() => setSubmitStatus('error')}
                  onExpire={() => setTurnstileToken(null)}
                />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">24/7 Emergency Claims:</span> (786) 963-6399
                  </p>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-600" />
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for updates and insurance tips
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, color: 'hover:bg-blue-600', link: '#' },
                    { icon: Twitter, color: 'hover:bg-sky-500', link: '#' },
                    { icon: Instagram, color: 'hover:bg-pink-600', link: '#' },
                    { icon: Linkedin, color: 'hover:bg-blue-700', link: '#' },
                    { icon: Youtube, color: 'hover:bg-red-600', link: '#' }
                  ].map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center ${social.color} hover:text-white transition-all`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
              Our Location
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Visit Our{' '}
              <span className="gradient-text">Office</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Doral, Florida to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 max-w-md mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{office.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    {office.hours}
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=7950+NW+53rd+St+STE+136,+Doral,+FL+33166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1 inline-block"
                >
                  Get Directions
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1823459290486!2d-80.37376892397845!3d25.797638077354516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bf8c8f8d5999%3A0x5b8c8f8d8f8d8f8d!2s7950%20NW%2053rd%20St%20STE%20136%2C%20Doral%2C%20FL%2033166!5e0!3m2!1sen!2sus!4v1704316800000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Unity Financial Network Office Location"
        />
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
              FAQs
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Common{' '}
              <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: language === 'en' ? 'What are your customer service hours?' : '¿Cuáles son sus horarios de atención al cliente?',
                answer: language === 'en' 
                  ? 'Our customer service team is available Monday through Friday from 9 AM to 6 PM EST, and Saturday from 10 AM to 2 PM EST.'
                  : 'Nuestro equipo de atención al cliente está disponible de lunes a viernes de 9 AM a 6 PM EST, y los sábados de 10 AM a 2 PM EST.'
              },
              {
                question: language === 'en' ? 'How quickly will I receive a response?' : '¿Qué tan rápido recibiré una respuesta?',
                answer: language === 'en'
                  ? 'We aim to respond to all inquiries within 24 hours during business days. Urgent matters are prioritized.'
                  : 'Nuestro objetivo es responder a todas las consultas dentro de las 24 horas durante los días hábiles. Los asuntos urgentes son priorizados.'
              },
              {
                question: language === 'en' ? 'Can I schedule an in-person appointment?' : '¿Puedo programar una cita en persona?',
                answer: language === 'en'
                  ? 'Yes! You can schedule an appointment at our Doral office location. Call us or use our online booking system.'
                  : '¡Sí! Puedes programar una cita en nuestra oficina de Doral. Llámanos o usa nuestro sistema de reservas en línea.'
              },
              {
                question: language === 'en' ? 'Do you offer virtual consultations?' : '¿Ofrecen consultas virtuales?',
                answer: language === 'en'
                  ? 'Absolutely! We offer video consultations for your convenience. Schedule one through our website or by calling us.'
                  : '¡Por supuesto! Ofrecemos consultas por video para tu conveniencia. Programa una a través de nuestro sitio web o llamándonos.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}