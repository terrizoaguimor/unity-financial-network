'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const getTestimonials = (lang: 'en' | 'es') => [
  {
    id: 1,
    name: 'María González',
    role: lang === 'en' ? 'Small Business Owner' : 'Dueña de Pequeño Negocio',
    content: lang === 'en' 
      ? 'I never imagined that a life insurance policy could provide me benefits while I\'m alive. Now I have both protection and savings at the same time.'
      : 'Nunca imaginé que una póliza de seguro de vida pudiera brindarme beneficios mientras estoy viva. Ahora tengo protección y ahorro al mismo tiempo.',
    rating: 5,
    image: '/images/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    role: lang === 'en' ? 'Family Man' : 'Padre de Familia',
    content: lang === 'en'
      ? 'I loved the consultation. They explained everything clearly and without pressure. Now I know that my family and my investment are secure.'
      : 'Me encantó la consulta. Me explicaron todo claramente y sin presión. Ahora sé que mi familia y mi inversión están seguras.',
    rating: 5,
    image: '/images/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: lang === 'en' ? 'Entrepreneur' : 'Emprendedora',
    content: lang === 'en'
      ? 'I always thought life insurance was only useful after passing away, but now I\'m enjoying its benefits while alive.'
      : 'Siempre pensé que el seguro de vida solo era útil después de fallecer, pero ahora estoy disfrutando de sus beneficios en vida.',
    rating: 5,
    image: '/images/avatar3.jpg'
  }
]

interface TestimonialsSectionProps {
  language?: 'en' | 'es'
}

export default function TestimonialsSection({ language = 'en' }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50">
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
            {language === 'en' ? 'Testimonials' : 'Testimonios'}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'What Our' : 'Lo Que Nuestros'}{' '}
            <span className="gradient-text">{language === 'en' ? 'Clients Say' : 'Clientes Dicen'}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Real stories from real people who have transformed their financial future with Unity'
              : 'Historias reales de personas reales que han transformado su futuro financiero con Unity'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {getTestimonials(language).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveIndex(index)}
              className="relative"
            >
              <motion.div
                className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all ${
                  activeIndex === index ? 'ring-2 ring-primary-400 ring-offset-4' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-300 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  animate={{
                    scale: activeIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeIndex === index ? Infinity : 0,
                  }}
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary-200 to-purple-200 rounded-full opacity-20 blur-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            {language === 'en' 
              ? 'Join thousands of satisfied clients who trust Unity Financial Network'
              : 'Únete a miles de clientes satisfechos que confían en Unity Financial Network'}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary"
          >
            {language === 'en' ? 'Start Your Journey Today' : 'Comienza Tu Viaje Hoy'}
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-10 blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full opacity-10 blur-3xl"
      />
    </section>
  )
}