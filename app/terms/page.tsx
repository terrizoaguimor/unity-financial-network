/**
 * @fileoverview Terms and Conditions Page
 * 
 * Legal terms and conditions for Unity Financial Network
 * Bilingual support (English/Spanish)
 * 
 * @module TermsPage
 * @author Unity Financial Network
 * @version 1.0.0
 */

'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { 
  FileText, Shield, Users, Globe, CreditCard,
  Scale, AlertCircle, Link2, Gavel, Mail,
  Phone, MapPin, Calendar, ChevronRight, Info,
  CheckCircle, XCircle, Building, ScrollText
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'

export default function TermsPage() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState('acceptance')
  
  const content = {
    en: {
      title: 'Terms and Conditions',
      subtitle: 'Terms of Service Agreement',
      lastUpdated: 'Last Updated: August 31, 2025',
      description: 'These Terms and Conditions govern your use of Unity Financial Network\'s website and services. By accessing our site, you agree to be bound by these terms.',
      sections: [
        {
          id: 'acceptance',
          title: '1. Acceptance',
          icon: CheckCircle,
          content: `
            <p>By accessing <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a>, you accept these Terms and our Privacy Policy/Cookie Policy.</p>
          `
        },
        {
          id: 'who-we-are',
          title: '2. Who We Are',
          icon: Building,
          content: `
            <p>Unity Financial Network LLC, with contact address at 7950 NW 53rd St, STE 136, Doral, FL 33166.</p>
            <p>Website: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'permitted-use',
          title: '3. Permitted Use',
          icon: Shield,
          content: `
            <p>You agree to use the site lawfully, without violating third-party rights, and not to perform aggressive scraping, reverse engineering, or introduce malware.</p>
          `
        },
        {
          id: 'content-information',
          title: '4. Content and Information',
          icon: Info,
          content: `
            <p>The information on the site is informative and general; it does not constitute financial, legal, or tax advice. Quotes and coverage descriptions are referential and subject to underwriting, eligibility, insurer terms, and applicable policy documents.</p>
          `
        },
        {
          id: 'accounts-forms',
          title: '5. Accounts and Forms',
          icon: Users,
          content: `
            <p>You must provide accurate data and keep it updated. We may reject or terminate applications that violate policies or laws.</p>
          `
        },
        {
          id: 'payments',
          title: '6. Payments',
          icon: CreditCard,
          content: `
            <p>Payments are made through an authorized external payment portal (Input1). Any processing, tokenization, and storage of payment methods are governed by the payment provider's conditions and policies.</p>
            <p>Website: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'intellectual-property',
          title: '7. Intellectual Property',
          icon: ScrollText,
          content: `
            <p>All site content (brand, logos, texts, graphics) belongs to Unity or its licensors. No license is granted except as necessary for normal navigation.</p>
          `
        },
        {
          id: 'third-party-links',
          title: '8. Third-Party Links',
          icon: Link2,
          content: `
            <p>External links (including the payment portal) are offered for convenience; we do not control their content and assume no responsibility for them.</p>
            <p>Website: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'limitation-liability',
          title: '9. Limitation of Liability',
          icon: Scale,
          content: `
            <p>To the maximum extent permitted by law, Unity will not be liable for indirect, incidental, punitive, or consequential damages arising from site use. Nothing limits liabilities that cannot be excluded by law.</p>
          `
        },
        {
          id: 'indemnification',
          title: '10. Indemnification',
          icon: Shield,
          content: `
            <p>You agree to indemnify Unity for claims arising from your misuse of the site, violation of these Terms, or third-party rights.</p>
          `
        },
        {
          id: 'governing-law',
          title: '11. Governing Law and Jurisdiction',
          icon: Gavel,
          content: `
            <p>These Terms are governed by the laws of the State of Florida (USA). Any dispute is subject to the competent state or federal courts in Miami-Dade, Florida, unless we agree to another resolution mechanism (e.g., arbitration).</p>
          `
        },
        {
          id: 'changes',
          title: '12. Changes',
          icon: AlertCircle,
          content: `
            <p>We may update these Terms; the current version will be the one published with its date.</p>
          `
        },
        {
          id: 'contact',
          title: '13. Contact',
          icon: Mail,
          content: `
            <p><a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a> | (7868285576 | 7950 NW 53rd St, STE 136, Doral, FL 33166.</p>
          `
        }
      ]
    },
    es: {
      title: 'Términos y Condiciones',
      subtitle: 'Términos y Condiciones de Uso',
      lastUpdated: 'Última actualización: 31 de agosto de 2025',
      description: 'Estos Términos y Condiciones rigen el uso del sitio web y los servicios de Unity Financial Network. Al acceder a nuestro sitio, aceptas estar sujeto a estos términos.',
      sections: [
        {
          id: 'acceptance',
          title: '1. Aceptación',
          icon: CheckCircle,
          content: `
            <p>Al acceder a <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a> aceptas estos Términos y nuestra Política de Privacidad/Política de Cookies.</p>
          `
        },
        {
          id: 'who-we-are',
          title: '2. Quiénes somos',
          icon: Building,
          content: `
            <p>Unity Financial Network LLC, con domicilio de contacto en 7950 NW 53rd St, STE 136, Doral, FL 33166.</p>
            <p>Sitio web: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'permitted-use',
          title: '3. Uso permitido',
          icon: Shield,
          content: `
            <p>Te comprometes a usar el sitio de forma lícita, sin vulnerar derechos de terceros, y a no realizar scraping agresivo, ingeniería inversa ni introducir malware.</p>
          `
        },
        {
          id: 'content-information',
          title: '4. Contenido e información',
          icon: Info,
          content: `
            <p>La información del sitio es informativa y general; no constituye asesoría financiera, legal ni fiscal. Las cotizaciones y descripciones de cobertura son referenciales y están sujetas a suscripción, elegibilidad, términos de la aseguradora y documentos de póliza aplicables.</p>
          `
        },
        {
          id: 'accounts-forms',
          title: '5. Cuentas y formularios',
          icon: Users,
          content: `
            <p>Debes proporcionar datos veraces y mantenerlos actualizados. Podemos rechazar o dar de baja solicitudes que incumplan políticas o leyes.</p>
          `
        },
        {
          id: 'payments',
          title: '6. Pagos',
          icon: CreditCard,
          content: `
            <p>Los pagos se realizan mediante un portal de pagos externo autorizado (Input1). Cualquier procesamiento, tokenización y almacenamiento de medios de pago se rige por las condiciones y políticas del proveedor de pagos.</p>
            <p>Sitio web: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'intellectual-property',
          title: '7. Propiedad intelectual',
          icon: ScrollText,
          content: `
            <p>Todo el contenido del sitio (marca, logotipos, textos, gráficos) es de Unity o de sus licenciantes. No se concede licencia alguna salvo lo necesario para la navegación normal.</p>
          `
        },
        {
          id: 'third-party-links',
          title: '8. Enlaces a terceros',
          icon: Link2,
          content: `
            <p>Los enlaces externos (incluido el portal de pagos) se ofrecen por conveniencia; no controlamos su contenido y no asumimos responsabilidad por ellos.</p>
            <p>Sitio web: <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
          `
        },
        {
          id: 'limitation-liability',
          title: '9. Limitación de responsabilidad',
          icon: Scale,
          content: `
            <p>En la medida máxima permitida por la ley, Unity no será responsable de daños indirectos, incidentales, punitivos o consecuentes derivados del uso del sitio. Nada limita responsabilidades que no puedan excluirse por ley.</p>
          `
        },
        {
          id: 'indemnification',
          title: '10. Indemnización',
          icon: Shield,
          content: `
            <p>Te comprometes a indemnizar a Unity por reclamaciones derivadas de tu uso indebido del sitio, infracción de estos Términos o de derechos de terceros.</p>
          `
        },
        {
          id: 'governing-law',
          title: '11. Ley aplicable y jurisdicción',
          icon: Gavel,
          content: `
            <p>Estos Términos se rigen por las leyes del Estado de Florida (EE. UU.). Cualquier disputa se somete a los tribunales estatales o federales competentes en Miami-Dade, Florida, salvo que acordemos otro mecanismo de resolución (p. ej., arbitraje).</p>
          `
        },
        {
          id: 'changes',
          title: '12. Cambios',
          icon: AlertCircle,
          content: `
            <p>Podemos actualizar estos Términos; la versión vigente será la publicada con su fecha.</p>
          `
        },
        {
          id: 'contact',
          title: '13. Contacto',
          icon: Mail,
          content: `
            <p><a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a> | (7868285576 | 7950 NW 53rd St, STE 136, Doral, FL 33166.</p>
          `
        }
      ]
    }
  }
  
  const t = content[language]
  const sections = t.sections

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="overflow-hidden">
      <HeaderSimple />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
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
            <FileText className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">{t.title}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-4"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            {t.lastUpdated}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="font-bold text-lg mb-4">
                    {language === 'en' ? 'Table of Contents' : 'Tabla de Contenidos'}
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon as React.ComponentType<{ className?: string }>
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                            activeSection === section.id
                              ? 'bg-primary-100 text-primary-700 font-medium'
                              : 'hover:bg-primary/10 text-gray-600'
                          }`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{section.title.replace(/^\d+\.\s*/, '')}</span>
                        </button>
                      )
                    })}
                  </nav>
                </motion.div>

                {/* Important Notice */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mt-6 border border-yellow-200"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    {language === 'en' ? 'Important' : 'Importante'}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {language === 'en' 
                      ? 'By using our services, you acknowledge that you have read and understood these terms.'
                      : 'Al usar nuestros servicios, reconoces que has leído y entendido estos términos.'}
                  </p>
                </motion.div>

                {/* Legal Compliance */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-6 mt-6"
                >
                  <h4 className="font-semibold mb-3">
                    {language === 'en' ? 'Legal Compliance' : 'Cumplimiento Legal'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-green-600" />
                      <span className="text-sm">
                        {language === 'en' ? 'Florida State Law' : 'Ley del Estado de Florida'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">
                        {language === 'en' ? 'Consumer Protection' : 'Protección al Consumidor'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gavel className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">
                        {language === 'en' ? 'Fair Business Practices' : 'Prácticas Comerciales Justas'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'Introduction' : 'Introducción'}
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.description}
                </p>
              </motion.div>

              {/* Dynamic Sections */}
              {sections.map((section, index) => {
                const Icon = section.icon as React.ComponentType<{ className?: string }>
                const iconColors = [
                  'from-blue-400 to-cyan-600',
                  'from-green-400 to-emerald-600',
                  'from-purple-400 to-pink-600',
                  'from-orange-400 to-red-600',
                  'from-indigo-400 to-purple-600',
                  'from-teal-400 to-blue-600',
                  'from-yellow-400 to-orange-600',
                  'from-pink-400 to-rose-600',
                  'from-cyan-400 to-blue-600',
                  'from-emerald-400 to-green-600',
                  'from-red-400 to-pink-600',
                  'from-violet-400 to-purple-600',
                  'from-amber-400 to-yellow-600'
                ]
                
                return (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${iconColors[index]} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                    <div 
                      className="prose prose-gray max-w-none text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </motion.div>
                )
              })}

              {/* Agreement Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 border-2 border-primary-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'en' ? 'Your Agreement' : 'Tu Acuerdo'}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'en' 
                    ? 'By continuing to use our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.'
                    : 'Al continuar usando nuestro sitio web y servicios, reconoces que has leído, entendido y aceptas estar sujeto a estos Términos y Condiciones.'}
                </p>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    {language === 'en'
                      ? 'These terms are legally binding and constitute an agreement between you and Unity Financial Network LLC.'
                      : 'Estos términos son legalmente vinculantes y constituyen un acuerdo entre tú y Unity Financial Network LLC.'}
                  </p>
                </div>
              </motion.div>

              {/* Last Updated Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6"
              >
                <div className="flex gap-3">
                  <Calendar className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2">
                      {language === 'en' ? 'Document Version' : 'Versión del Documento'}
                    </h3>
                    <p className="text-sm text-yellow-800">
                      {t.lastUpdated}
                    </p>
                    <p className="text-sm text-yellow-700 mt-2">
                      {language === 'en' 
                        ? 'We reserve the right to update these terms at any time. Please check this page periodically for changes.'
                        : 'Nos reservamos el derecho de actualizar estos términos en cualquier momento. Por favor revisa esta página periódicamente para ver los cambios.'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'Questions About These Terms?' : '¿Preguntas sobre estos Términos?'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6">
                  {language === 'en'
                    ? 'If you have any questions about these Terms and Conditions, please contact us:'
                    : 'Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor contáctanos:'}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <a href="tel:7868285576" className="text-primary-600 hover:text-primary-700 font-semibold">
                        (7868285576
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <a href="mailto:hello@unityfinancialnetwork.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                        hello@unityfinancialnetwork.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <address className="not-italic text-gray-700">
                      Unity Financial Network LLC<br />
                      7950 NW 53rd St, STE 136<br />
                      Doral, FL 33166<br />
                      United States
                    </address>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </main>
  )
}