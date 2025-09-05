"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users, Sparkles, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { translations } from "@/lib/translations";

interface HeroSectionProps {
  language: "en" | "es";
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-gradient-to-br from-primary/5 via-white to-orange-50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-xl" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full filter blur-xl" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-xl" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                {t.welcome}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-1 mb-4 sm:mb-6"
            >
              {t.title} <span className="gradient-text">{t.subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="body-text text-primary-700 mb-6 sm:mb-8"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/schedule">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary group"
                >
                  {t.consultation}
                  <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/schedule">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary"
                >
                  {t.getQuote}
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-8 sm:mt-12"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-900">
                    11+
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-primary-700">
                  {language === 'en' ? 'Insurance Plans' : 'Planes de Seguro'}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-900">
                    10,000+
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-primary-700">
                  {language === 'en' ? 'Happy Clients' : 'Clientes Felices'}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-900">
                    24/7
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-primary-700">
                  {language === 'en' ? 'Support Available' : 'Soporte Disponible'}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Protected 100% Card - Top Right */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 bg-white rounded-2xl shadow-2xl p-6 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-600">Protected</p>
                    <p className="text-xl font-bold text-primary-900">100%</p>
                  </div>
                </div>
              </motion.div>

              {/* Insurance Plans Card - Bottom Left */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-2xl p-6 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-600">{language === 'en' ? 'Insurance Plans' : 'Planes de Seguro'}</p>
                    <p className="text-xl font-bold text-primary-900">11+</p>
                  </div>
                </div>
              </motion.div>

              {/* Support 24/7 Card - Top Left */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-8 left-8 bg-white rounded-2xl shadow-2xl p-6 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-600">{language === 'en' ? 'Support' : 'Soporte'}</p>
                    <p className="text-xl font-bold text-primary-900">24/7</p>
                  </div>
                </div>
              </motion.div>

              {/* Happy Clients Card - Bottom Right */}
              <motion.div
                animate={{
                  y: [0, 25, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-2xl p-6 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-600">{language === 'en' ? 'Happy Clients' : 'Clientes Felices'}</p>
                    <p className="text-xl font-bold text-primary-900">10,000+</p>
                  </div>
                </div>
              </motion.div>

              {/* Licensed Professionals Card - Top Center */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5,
                }}
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 -ml-28 bg-white rounded-2xl shadow-2xl p-6 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-600">{language === 'en' ? 'Licensed' : 'Licenciados'}</p>
                    <p className="text-xl font-bold text-primary-900">{language === 'en' ? 'Professionals' : 'Profesionales'}</p>
                  </div>
                </div>
              </motion.div>

              {/* Central Circle with Gradient */}
              <div className="relative w-96 h-96 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-4 rounded-full bg-accent/10"
                />
                <div className="absolute inset-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                  <Image
                    src="/images/logo-main.svg"
                    alt="Unity Financial"
                    width={200}
                    height={80}
                    className="w-48 h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0 120V60C240 20 480 20 720 60C960 100 1200 100 1440 60V120H0Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#512783" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#f18918" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#512783" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
