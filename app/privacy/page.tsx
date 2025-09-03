/**
 * @fileoverview Privacy Policy Page
 * 
 * Comprehensive privacy policy for Unity Financial Network
 * Bilingual support (English/Spanish)
 * 
 * @module PrivacyPage
 * @author Unity Financial Network
 * @version 1.0.0
 */

'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { 
  Shield, Lock, Eye, Database, Globe, Users, 
  FileText, Mail, Phone, ChevronRight, Info,
  Cookie, Smartphone, CreditCard, UserCheck,
  MapPin, Calendar, AlertCircle, Clock
} from 'lucide-react'
import HeaderSimple from '@/components/HeaderSimple'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState('who-we-are')
  
  const content = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is our priority',
      effectiveDate: 'Effective Date: August 31, 2025',
      description: 'Unity Financial Network LLC ("Unity Financial Network", "Unity", "we" or "the Company") is committed to protecting your privacy. This Policy describes how we collect, use, disclose and protect personal information when you use our sites and services.',
      sections: [
        {
          id: 'who-we-are',
          title: '1. Who We Are and How to Contact Us',
          icon: Users,
          content: `
            <p><strong>Data Controller:</strong> Unity Financial Network LLC (Florida, USA).</p>
            <p><strong>Customer Contact Address:</strong> 7950 NW 53rd St, STE 136, Doral, FL 33166.</p>
            <p><strong>Phone:</strong> (7868285576</p>
            <p><strong>Email:</strong> <a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a></p>
            <p><strong>Website:</strong> <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
            <p><strong>Registered Address (Sunbiz):</strong> 7950 NW 59 Street, STE 136, Doral, FL 33166. (Status: "ACTIVE", LLC in Florida).</p>
          `
        },
        {
          id: 'scope',
          title: '2. Scope',
          icon: Globe,
          content: `
            <p>This policy applies to sites under unityfinancialnetwork.com (including Spanish language sections) and to commercial service interactions (e.g., quotes, forms, calls, emails). It excludes third-party sites we link to (e.g., Input1 payment portal), which have their own policies.</p>
          `
        },
        {
          id: 'information-we-collect',
          title: '3. Information We Collect',
          icon: Database,
          content: `
            <p><strong>Contact and Identity Data:</strong> name, email, phone, postal address.</p>
            <p><strong>Profile/Application Data:</strong> insurance preferences, date of birth, and other information you provide in forms or calls.</p>
            <p><strong>Transaction Data:</strong> payment status and references (payment processing is done through an external portal authorized by Input1).</p>
            <p><strong>Technical Data:</strong> IP address, device identifiers, server logs, cookies/pixels (see Cookie Policy).</p>
            <p><strong>Communications:</strong> recordings or transcriptions where permitted by law, emails, SMS.</p>
            <p>If you send us third-party data (e.g., beneficiaries), you confirm you have legal basis to do so.</p>
          `
        },
        {
          id: 'purposes',
          title: '4. Purposes and Legal Bases',
          icon: FileText,
          content: `
            <ul class="list-disc pl-6 space-y-2">
              <li>Service provision (quoting, advising, processing applications, customer service).</li>
              <li>Communications (responding to inquiries; sending informational/commercial messages with your consent or permitted legitimate interest).</li>
              <li>Payment management (through external Input1 portal).</li>
              <li>Security, fraud prevention, and legal compliance (including response to authorities).</li>
            </ul>
          `
        },
        {
          id: 'data-sharing',
          title: '5. Data Sharing',
          icon: Users,
          content: `
            <p>We may share data with:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Providers/processors (hosting, CRM, analytics, verification, Input1 payment portal).</li>
              <li>Insurers/partners to quote or issue policies.</li>
              <li>Authorities when required by law.</li>
            </ul>
            <p class="mt-4 font-semibold">We do not sell your personal information.</p>
          `
        },
        {
          id: 'retention',
          title: '6. Data Retention',
          icon: Clock,
          content: `
            <p>We retain data while there is a relationship (and for the time necessary for legal/accounting obligations). Then we delete or anonymize it.</p>
          `
        },
        {
          id: 'your-rights',
          title: '7. Your Privacy Rights',
          icon: UserCheck,
          content: `
            <p>Depending on your jurisdiction, you may request: access, correction, deletion, portability, objection or opposition to marketing, and limitation of processing.</p>
            <p><strong>How to exercise them:</strong> write to <a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a> or call us at (7868285576 (reasonably identifying yourself).</p>
          `
        },
        {
          id: 'marketing',
          title: '8. Marketing and SMS/Calls',
          icon: Mail,
          content: `
            <p>You can opt-out of email marketing with the "unsubscribe" link or by writing to us; for SMS, reply "STOP"; for calls, you can request our internal "Do Not Call" list. See "Opt-Out Policy" below for details and timelines.</p>
          `
        },
        {
          id: 'security',
          title: '9. Security',
          icon: Lock,
          content: `
            <p>We apply reasonable technical and organizational measures. No transmission or storage is 100% secure.</p>
          `
        },
        {
          id: 'transfers',
          title: '10. International Transfers',
          icon: Globe,
          content: `
            <p>We process primarily in the USA. If you access from another jurisdiction, you accept the transfer in accordance with this Policy and applicable safeguards.</p>
          `
        },
        {
          id: 'minors',
          title: '11. Minors',
          icon: Shield,
          content: `
            <p>Our sites are not directed at minors without valid consent required by applicable law.</p>
          `
        },
        {
          id: 'changes',
          title: '12. Changes',
          icon: Info,
          content: `
            <p>We will post updates on this page with the "Last Updated" date.</p>
          `
        },
        {
          id: 'contact',
          title: '13. Privacy Contact',
          icon: Mail,
          content: `
            <p><strong>Unity Financial Network LLC – Privacy</strong></p>
            <p>7950 NW 53rd St, STE 136, Doral, FL 33166</p>
            <p><a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a> | (7868285576</p>
          `
        }
      ]
    },
    es: {
      title: 'Política de Privacidad',
      subtitle: 'Tu privacidad es nuestra prioridad',
      effectiveDate: 'Fecha de entrada en vigor: 31 de agosto de 2025',
      description: 'Unity Financial Network LLC ("Unity Financial Network", "Unity", "nosotros" o "la Compañía") se compromete a proteger tu privacidad. Esta Política describe cómo recopilamos, usamos, divulgamos y protegemos la información personal cuando utilizas nuestros sitios y servicios.',
      sections: [
        {
          id: 'who-we-are',
          title: '1. Quiénes somos y cómo contactarnos',
          icon: Users,
          content: `
            <p><strong>Responsable del tratamiento:</strong> Unity Financial Network LLC (Florida, EE. UU.).</p>
            <p><strong>Dirección de contacto para clientes:</strong> 7950 NW 53rd St, STE 136, Doral, FL 33166.</p>
            <p><strong>Teléfono:</strong> (7868285576</p>
            <p><strong>Email:</strong> <a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a></p>
            <p><strong>Sitio web:</strong> <a href="https://unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">unityfinancialnetwork.com</a></p>
            <p><strong>Domicilio registrado (Sunbiz):</strong> 7950 NW 59 Street, STE 136, Doral, FL 33166. (Estado: "ACTIVE", LLC en Florida).</p>
          `
        },
        {
          id: 'scope',
          title: '2. Alcance',
          icon: Globe,
          content: `
            <p>Aplica a los sitios bajo unityfinancialnetwork.com (incluyendo secciones en español) y a las interacciones de atención comercial (p. ej., cotizaciones, formularios, llamadas, emails). Excluye sitios de terceros a los que enlacemos (p. ej., portal de pagos de Input1), que tienen sus propias políticas.</p>
          `
        },
        {
          id: 'information-we-collect',
          title: '3. Información que recopilamos',
          icon: Database,
          content: `
            <p><strong>Datos de contacto y de identidad:</strong> nombre, email, teléfono, dirección postal.</p>
            <p><strong>Datos de perfil/solicitud:</strong> preferencias de seguros, fecha de nacimiento y otra información que nos proporciones en formularios o llamadas.</p>
            <p><strong>Datos transaccionales:</strong> estatus de pagos y referencias (el procesamiento del pago se realiza en un portal externo autorizado por Input1).</p>
            <p><strong>Datos técnicos:</strong> dirección IP, identificadores de dispositivo, logs de servidor, cookies/píxeles (ver Política de Cookies).</p>
            <p><strong>Comunicaciones:</strong> grabaciones o transcripciones donde la ley lo permita, correos, SMS.</p>
            <p>Si nos envías datos de terceros (p. ej., beneficiarios), confirmas que tienes base legal para hacerlo.</p>
          `
        },
        {
          id: 'purposes',
          title: '4. Finalidades y bases legales',
          icon: FileText,
          content: `
            <ul class="list-disc pl-6 space-y-2">
              <li>Prestación de servicios (cotizar, asesorar, tramitar solicitudes, servicio al cliente).</li>
              <li>Comunicaciones (responder consultas; envío de mensajes informativos/comerciales con tu consentimiento o interés legítimo permitido).</li>
              <li>Gestión de pagos (a través del portal externo Input1).</li>
              <li>Seguridad, prevención de fraude y cumplimiento legal (incl. respuesta a autoridades).</li>
            </ul>
          `
        },
        {
          id: 'data-sharing',
          title: '5. Compartición de datos',
          icon: Users,
          content: `
            <p>Podemos compartir datos con:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Proveedores/encargados (alojamiento, CRM, analítica, verificación, portal de pagos Input1).</li>
              <li>Aseguradoras/partners para cotizar o emitir pólizas.</li>
              <li>Autoridades cuando la ley lo exija.</li>
            </ul>
            <p class="mt-4 font-semibold">No vendemos tu información personal.</p>
          `
        },
        {
          id: 'retention',
          title: '6. Conservación',
          icon: Clock,
          content: `
            <p>Conservamos los datos mientras exista una relación (y por el tiempo necesario para obligaciones legales/contables). Luego los eliminamos o anonimizamos.</p>
          `
        },
        {
          id: 'your-rights',
          title: '7. Tus derechos de privacidad',
          icon: UserCheck,
          content: `
            <p>Según tu jurisdicción, puedes solicitar: acceso, corrección, eliminación, portabilidad, objeción u oposición a marketing, y limitación del tratamiento.</p>
            <p><strong>Cómo ejercerlos:</strong> escribe a <a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a> o llámanos al (7868285576 (identificándote razonablemente).</p>
          `
        },
        {
          id: 'marketing',
          title: '8. Marketing y SMS/llamadas',
          icon: Mail,
          content: `
            <p>Puedes opt-out del email marketing con el enlace "unsubscribe" o escribiéndonos; para SMS, responde "STOP"; para llamadas, puedes solicitar nuestra lista interna "Do Not Call". Ver "Política de Opt-Out" abajo para detalles y plazos.</p>
          `
        },
        {
          id: 'security',
          title: '9. Seguridad',
          icon: Lock,
          content: `
            <p>Aplicamos medidas técnicas y organizativas razonables. Ninguna transmisión o almacenamiento es 100% seguro.</p>
          `
        },
        {
          id: 'transfers',
          title: '10. Transferencias internacionales',
          icon: Globe,
          content: `
            <p>Procesamos principalmente en EE. UU. Si accedes desde otra jurisdicción, aceptas la transferencia conforme a esta Política y a las salvaguardas aplicables.</p>
          `
        },
        {
          id: 'minors',
          title: '11. Menores',
          icon: Shield,
          content: `
            <p>Nuestros sitios no están dirigidos a menores sin el consentimiento válido exigido por la ley aplicable.</p>
          `
        },
        {
          id: 'changes',
          title: '12. Cambios',
          icon: Info,
          content: `
            <p>Publicaremos las actualizaciones en esta página con la fecha de "Última actualización".</p>
          `
        },
        {
          id: 'contact',
          title: '13. Contacto de privacidad',
          icon: Mail,
          content: `
            <p><strong>Unity Financial Network LLC – Privacidad</strong></p>
            <p>7950 NW 53rd St, STE 136, Doral, FL 33166</p>
            <p><a href="mailto:hello@unityfinancialnetwork.com" class="text-primary-600 hover:text-primary-700">hello@unityfinancialnetwork.com</a> | (7868285576</p>
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
            <Shield className="w-10 h-10 text-white" />
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
            {t.effectiveDate}
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
                  <h3 className="font-bold text-lg mb-4">{language === 'en' ? 'Quick Navigation' : 'Navegación Rápida'}</h3>
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
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{section.title.replace(/^\d+\.\s*/, '')}</span>
                        </button>
                      )
                    })}
                  </nav>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-6 mt-6"
                >
                  <h4 className="font-semibold mb-3">{language === 'en' ? 'Our Commitments' : 'Nuestros Compromisos'}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{language === 'en' ? 'Data Encryption' : 'Encriptación de Datos'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{language === 'en' ? 'Privacy Compliant' : 'Cumplimiento de Privacidad'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">{language === 'en' ? 'User Rights Protected' : 'Derechos Protegidos'}</span>
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
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.description}
                </p>
              </motion.div>

              {/* Dynamic Sections */}
              {sections.map((section, index) => {
                const Icon = section.icon as React.ComponentType<{ className?: string }>
                return (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl flex items-center justify-center">
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

              {/* Updates to Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6"
              >
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2">
                      {language === 'en' ? 'Policy Updates' : 'Actualizaciones de la Política'}
                    </h3>
                    <p className="text-sm text-yellow-800">
                      {language === 'en' 
                        ? 'This Privacy Policy was last updated on August 31, 2025. We reserve the right to update this policy at any time. We will notify you of any material changes by posting the new Privacy Policy on this page.'
                        : 'Esta Política de Privacidad fue actualizada por última vez el 31 de agosto de 2025. Nos reservamos el derecho de actualizar esta política en cualquier momento. Te notificaremos sobre cualquier cambio material publicando la nueva Política de Privacidad en esta página.'}
                    </p>
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