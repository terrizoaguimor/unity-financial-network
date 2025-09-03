'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import { translations } from '@/lib/translations'

const TurnstileWidget = dynamic(() => import('@/components/TurnstileWidget'), { ssr: false })

interface ContactSectionProps {
  language?: 'en' | 'es'
}

export default function ContactSection({ language = 'en' }: ContactSectionProps) {
  const t = translations[language].contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    acceptTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!turnstileToken) {
      setSubmitError(language === 'en' ? 'Please complete the verification.' : 'Por favor completa la verificación.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
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
          subject: formData.service || (language === 'en' ? 'General Inquiry' : 'Consulta General'),
          message: formData.message,
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
            service: '',
            message: '',
            acceptTerms: false
          })
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setSubmitError(language === 'en' ? 'Failed to send message. Please try again.' : 'Error al enviar el mensaje. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(language === 'en' ? 'Failed to send message. Please try again.' : 'Error al enviar el mensaje. Por favor intenta de nuevo.')
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

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-purple-50">
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 rounded-full text-sm font-semibold text-primary-700 mb-4"
          >
            {t.badge}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.title}{' '}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">{t.formTitle}</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.placeholders.name}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.placeholders.email}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.placeholders.phone}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all appearance-none"
                    required
                  >
                    <option value="">{t.placeholders.service}</option>
                    <option value="aca">{language === 'en' ? 'Affordable Care Act' : 'Ley de Cuidado de Salud Asequible'}</option>
                    <option value="medicare">Medicare</option>
                    <option value="life">{language === 'en' ? 'Life Insurance' : 'Seguro de Vida'}</option>
                    <option value="auto">{language === 'en' ? 'Auto Insurance' : 'Seguro de Auto'}</option>
                    <option value="home">{language === 'en' ? 'Home Insurance' : 'Seguro de Hogar'}</option>
                    <option value="commercial">{language === 'en' ? 'Commercial Insurance' : 'Seguro Comercial'}</option>
                    <option value="other">{language === 'en' ? 'Other' : 'Otro'}</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mb-6"
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.placeholders.message}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                />
              </motion.div>

              <motion.div
                className="mb-6"
              >
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
              </motion.div>

              <TurnstileWidget
                onVerify={(token) => setTurnstileToken(token)}
                onError={() => setSubmitError(language === 'en' ? 'Verification failed. Please try again.' : 'La verificación falló. Por favor intenta de nuevo.')}
                onExpire={() => setTurnstileToken(null)}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 ${
                  isSubmitting ? 'button-disabled' : 'button-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    {language === 'en' ? 'Sending...' : 'Enviando...'}
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    {t.sendButton}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">
                        {language === 'en' ? 'Message Sent!' : '¡Mensaje Enviado!'}
                      </h4>
                      <p className="text-green-700 text-sm">
                        {language === 'en' 
                          ? 'Your message has been received. An advisor will contact you soon.'
                          : 'Tu mensaje ha sido recibido. Un asesor te contactará próximamente.'}
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
                  className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">
                        {language === 'en' ? 'Error' : 'Error'}
                      </h4>
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{t.callTitle}</h4>
                  <p className="text-gray-600">{t.callHours}</p>
                  <a href="tel:7868285576" className="text-primary-600 font-semibold hover:text-primary-700">
                    (7868285576
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{t.emailTitle}</h4>
                  <p className="text-gray-600">{t.emailSupport}</p>
                  <a href="mailto:hello@unityfinancialnetwork.com" className="text-primary-600 font-semibold hover:text-primary-700">
                    hello@unityfinancialnetwork.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{t.visitTitle}</h4>
                  <p className="text-gray-600">
                    7950 NW 53rd St STE 136<br />
                    Doral, FL 33166
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Live Chat Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xl mb-2">{t.chatTitle}</h4>
                  <p className="text-white/90">{t.chatSubtitle}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <MessageCircle className="w-7 h-7" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
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
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-200 to-purple-200 rounded-full opacity-20 blur-2xl"
      />
    </section>
  )
}