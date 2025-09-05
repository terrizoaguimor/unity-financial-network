'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Lightbulb, ArrowUpRight, Users, Award, Globe } from 'lucide-react'
import Image from 'next/image'
import { translations } from '@/lib/translations'

interface AboutSectionProps {
  language?: 'en' | 'es'
}

export default function AboutSection({ language = 'en' }: AboutSectionProps) {
  const t = translations[language].about
  
  const stats = [
    { number: '1000+', label: language === 'en' ? 'Happy Clients' : 'Clientes Felices', icon: Users },
    { number: '50+', label: language === 'en' ? 'Partner Carriers' : 'Aseguradoras Asociadas', icon: Globe },
    { number: '10+', label: language === 'en' ? 'Years Experience' : 'Años de Experiencia', icon: Award },
  ]
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-primary/5">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6"
            >
              {t.badge}
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.title}{' '}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            
            <p className="text-lg text-primary-700 mb-8">
              {t.description}
            </p>

            {/* Mission Vision Values */}
            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{t.missionTitle}</h3>
                  <p className="text-sm text-primary-700">
                    {t.missionText}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-50/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{t.visionTitle}</h3>
                  <p className="text-sm text-primary-700">
                    {t.visionText}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{t.valuesTitle}</h3>
                  <p className="text-sm text-primary-700">
                    {t.valuesText}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary group"
            >
              {t.learnMore}
              <ArrowUpRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Decoration */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl"
              />

              {/* Stats Cards */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  Unity
                </div>

                <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
                  {t.impactTitle}
                </h3>

                <div className="space-y-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-orange-50/50 rounded-xl hover:from-primary/10 hover:to-orange-100/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-primary-900">{stat.number}</p>
                            <p className="text-sm text-primary-700">{stat.label}</p>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          className="w-8 h-8 bg-orange-200 rounded-full"
                        />
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-8 p-4 bg-primary rounded-xl text-white text-center">
                  <p className="text-sm font-medium">{t.trustedBy}</p>
                  <p className="text-2xl font-bold">{t.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-20 h-20 bg-orange-300/30 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
      />
    </section>
  )
}