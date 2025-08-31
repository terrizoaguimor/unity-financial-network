/**
 * @fileoverview Comprehensive translation system for Unity Financial Network
 * 
 * This file contains all text content for the bilingual website supporting
 * English and Spanish languages. The translations are organized by sections
 * and components for easy maintenance and scalability.
 * 
 * Features:
 * - Complete English and Spanish translations
 * - Organized by UI sections (nav, hero, about, services, contact, footer)
 * - Nested structure for logical grouping
 * - Type-safe language selection
 * - Utility hook for component integration
 * 
 * Translation Structure:
 * - nav: Navigation menu items and labels
 * - hero: Homepage hero section content
 * - about: About page content including mission, vision, values
 * - services: Insurance service descriptions and CTAs
 * - contact: Contact form and information
 * - footer: Footer links and newsletter content
 * 
 * Each section contains both simple strings and nested objects for
 * complex UI components with multiple text elements.
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About us',
      insurancePlans: 'Insurance Plans',
      getQuote: 'Get a free quote',
      blog: 'Blog',
      joinUnity: 'Join Unity',
      contact: 'Contact',
      freeConsultation: 'Free Consultation',
    },
    
    // Hero Section
    hero: {
      welcome: 'Welcome to Unity Financial Network',
      title: 'More than insurance',
      subtitle: 'your personal financial concierge!',
      description: 'Protection, security, and peace of mind, designed just for you.',
      consultation: 'Free Consultation',
      getQuote: 'Get a Quote',
      stats: {
        plans: 'Insurance Plans',
        clients: 'Happy Clients',
        support: 'Support Available'
      }
    },

    // About Page
    about: {
      badge: 'About Unity',
      title: 'Empowering Your',
      titleHighlight: 'Financial Future',
      description: 'At Unity Financial Network, we believe financial empowerment is the key to a thriving community. Our mission is to redefine financial accessibility, equipping individuals and businesses with the tools, knowledge, and resources needed for lasting financial stability. With unmatched service, personalized solutions, and deep client connections, we\'ve built a trusted reputation and a high retention rate.',
      missionTitle: 'Our Mission',
      missionText: 'To redefine financial accessibility, equipping individuals and businesses with the tools, knowledge, and resources needed for lasting financial stability.',
      visionTitle: 'Our Vision',
      visionText: 'To be the trusted financial partner that prioritizes relationships, giving our clients the clarity and confidence to make informed financial decisions for their businesses and lives.',
      valuesTitle: 'Our Values',
      valuesText: 'Integrity, transparency, and personalized service guide every interaction with our clients.',
      learnMore: 'Learn More About Us',
      impactTitle: 'Our Impact',
      trustedBy: 'Trusted by families across',
      location: 'Florida & Beyond',
      pageTitle: 'About Unity Financial Network',
      heroTitle: 'Your Trusted',
      heroSubtitle: 'Insurance Partner',
      heroDescription: 'With over a decade of experience, we\'ve been helping families and businesses protect what matters most with comprehensive insurance solutions.',
      
      mission: {
        title: 'Our Mission',
        description: 'To make quality insurance accessible and affordable for everyone, while providing exceptional service that exceeds expectations.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be the most trusted insurance partner in America, known for our integrity, innovation, and commitment to our clients\' success.'
      },
      
      timeline: {
        title: 'Our Journey',
        subtitle: 'Building Trust Since 2015'
      },
      
      team: {
        title: 'Meet Our Leadership Team',
        subtitle: 'Experienced professionals dedicated to your success',
        viewProfile: 'View Profile'
      },
      
      values: {
        title: 'Our Values',
        subtitle: 'What drives us every day',
        integrity: {
          title: 'Integrity',
          description: 'We build trust through transparency and honest communication in every interaction.'
        },
        service: {
          title: 'Service Excellence',
          description: 'Going above and beyond to ensure our clients receive the best possible experience.'
        },
        innovation: {
          title: 'Innovation',
          description: 'Continuously improving our services with the latest technology and industry best practices.'
        },
        community: {
          title: 'Community',
          description: 'Supporting and giving back to the communities we serve across the nation.'
        }
      }
    },

    // Services
    services: {
      badge: 'Our Services',
      title: 'Insurance Solutions',
      titleHighlight: 'For Every Need',
      subtitle: 'Comprehensive Insurance Solutions',
      viewAll: 'View All Services',
      learnMore: 'Learn More',
      getQuote: 'Get Your Free Quote Now',
      
      aca: {
        title: 'Affordable Care Act (ACA)',
        description: 'Comprehensive health coverage that meets your needs and budget'
      },
      medicare: {
        title: 'Medicare',
        description: 'Navigate Medicare with confidence and find the right plan'
      },
      medicareAdvantage: {
        title: 'Medicare Advantage',
        description: 'Enhanced coverage with additional benefits beyond Original Medicare'
      },
      termLife: {
        title: 'Term Life Insurance',
        description: 'Affordable protection for your loved ones when they need it most'
      },
      permanentLife: {
        title: 'Permanent Life Insurance',
        description: 'Lifetime coverage with cash value accumulation benefits'
      },
      iul: {
        title: 'Index Universal Life (IUL)',
        description: 'Build wealth while protecting your family\'s future'
      },
      finalExpense: {
        title: 'Final Expense Insurance',
        description: 'Peace of mind for end-of-life expenses'
      },
      commercialTrucking: {
        title: 'Commercial Trucking Insurance',
        description: 'Comprehensive coverage for your trucking business'
      },
      auto: {
        title: 'Personal Auto Insurance',
        description: 'Protect yourself and your vehicle on the road'
      },
      home: {
        title: 'Home & Property Insurance',
        description: 'Safeguard your home and belongings'
      },
      supplemental: {
        title: 'Supplemental Insurance',
        description: 'Extra coverage for unexpected medical expenses'
      }
    },

    // Contact
    contact: {
      badge: 'Contact Us',
      title: 'Let\'s Start Your',
      titleHighlight: 'Financial Journey',
      subtitle: 'Get in touch with our expert team for a free consultation',
      formTitle: 'Get Your Free Quote',
      placeholders: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Select Service',
        message: 'Tell us about your needs...'
      },
      sendButton: 'Send Message',
      callTitle: 'Call Us',
      callHours: 'Mon-Fri 9:00 AM - 6:00 PM',
      emailTitle: 'Email Us',
      emailSupport: '24/7 Support Available',
      visitTitle: 'Visit Us',
      chatTitle: 'Need Immediate Help?',
      chatSubtitle: 'Chat with our experts now',
      heroTitle: 'Get in Touch',
      heroDescription: 'We\'re here to help with all your insurance needs. Reach out to our friendly team and get the support you deserve.',
      
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        department: 'Department',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'Something went wrong. Please try again.'
      },
      
      info: {
        callUs: 'Call Us',
        emailUs: 'Email Us',
        visitUs: 'Visit Us',
        liveChat: 'Live Chat',
        businessHours: 'Business Hours',
        weekdays: 'Monday - Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        closed: 'Closed'
      }
    },

    // Footer
    footer: {
      description: 'Your trusted partner for comprehensive insurance solutions. Protecting what matters most to you.',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      quickLinks: 'Quick Links',
      services: 'Services',
      company: 'Company',
      resources: 'Resources',
      newsletter: {
        title: 'Stay Updated',
        description: 'Subscribe to our newsletter for insurance tips and updates',
        placeholder: 'Enter your email',
        button: 'Subscribe'
      }
    }
  },
  
  es: {
    // Navegación
    nav: {
      about: 'Nosotros',
      insurancePlans: 'Planes de Seguro',
      getQuote: 'Cotización gratis',
      blog: 'Blog',
      joinUnity: 'Únete a Unity',
      contact: 'Contacto',
      payments: 'Pagos',
      freeConsultation: 'Consulta Gratis',
    },
    
    // Sección Hero
    hero: {
      welcome: 'Bienvenido a la Libertad Financiera',
      title: 'Más que un seguro',
      subtitle: '¡tu conserje financiero personal!',
      description: 'En Unity Financial Network, nos asociamos con las mejores aseguradoras para brindar cobertura personalizada que se adapte a sus necesidades y prioridades únicas.',
      consultation: 'Consulta Gratis',
      getQuote: 'Obtener Cotización',
      stats: {
        plans: 'Planes de Seguro',
        clients: 'Clientes Felices',
        support: 'Soporte Disponible'
      }
    },

    // Página Acerca de
    about: {
      badge: 'Acerca de Unity',
      title: 'Potenciando Tu',
      titleHighlight: 'Futuro Financiero',
      description: 'En Unity Financial Network, creemos que el empoderamiento financiero es la clave para una comunidad próspera. Nuestra misión es redefinir la accesibilidad financiera, equipando a individuos y empresas con las herramientas, conocimientos y recursos necesarios para una estabilidad financiera duradera.',
      missionTitle: 'Nuestra Misión',
      missionText: 'Proporcionar soluciones financieras accesibles y completas que protejan y hagan crecer la riqueza de cada cliente.',
      visionTitle: 'Nuestra Visión',
      visionText: 'Ser el servicio de conserjería financiera líder, transformando la forma en que las familias abordan los seguros y la construcción de riqueza.',
      valuesTitle: 'Nuestros Valores',
      valuesText: 'Integridad, transparencia y servicio personalizado guían cada interacción con nuestros clientes.',
      learnMore: 'Conoce Más Sobre Nosotros',
      impactTitle: 'Nuestro Impacto',
      trustedBy: 'Confianza de familias en',
      location: 'Florida y Más Allá',
      pageTitle: 'Acerca de Unity Financial Network',
      heroTitle: 'Tu Socio de',
      heroSubtitle: 'Seguros de Confianza',
      heroDescription: 'Con más de una década de experiencia, hemos estado ayudando a familias y empresas a proteger lo que más importa con soluciones de seguros integrales.',
      
      mission: {
        title: 'Nuestra Misión',
        description: 'Hacer que los seguros de calidad sean accesibles y asequibles para todos, brindando un servicio excepcional que supere las expectativas.'
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Ser el socio de seguros más confiable en América, conocido por nuestra integridad, innovación y compromiso con el éxito de nuestros clientes.'
      },
      
      timeline: {
        title: 'Nuestro Viaje',
        subtitle: 'Construyendo Confianza Desde 2015'
      },
      
      team: {
        title: 'Conoce a Nuestro Equipo de Liderazgo',
        subtitle: 'Profesionales experimentados dedicados a tu éxito',
        viewProfile: 'Ver Perfil'
      },
      
      values: {
        title: 'Nuestros Valores',
        subtitle: 'Lo que nos impulsa cada día',
        integrity: {
          title: 'Integridad',
          description: 'Construimos confianza a través de la transparencia y la comunicación honesta en cada interacción.'
        },
        service: {
          title: 'Excelencia en el Servicio',
          description: 'Ir más allá para garantizar que nuestros clientes reciban la mejor experiencia posible.'
        },
        innovation: {
          title: 'Innovación',
          description: 'Mejorando continuamente nuestros servicios con la última tecnología y las mejores prácticas de la industria.'
        },
        community: {
          title: 'Comunidad',
          description: 'Apoyando y retribuyendo a las comunidades que servimos en todo el país.'
        }
      }
    },

    // Servicios
    services: {
      badge: 'Nuestros Servicios',
      title: 'Planes de Seguro',
      titleHighlight: 'Hechos a tu Medida',
      subtitle: 'Encuentra el plan adecuado para ti con nuestra amplia gama de soluciones de seguros',
      viewAll: 'Ver Todos los Servicios',
      learnMore: 'Saber Más',
      getQuote: 'Obtén Tu Cotización Gratis Ahora',
      
      aca: {
        title: 'Ley de Cuidado de Salud Asequible (ACA)',
        description: 'Cobertura de salud integral que satisface tus necesidades y presupuesto'
      },
      medicare: {
        title: 'Medicare',
        description: 'Navega Medicare con confianza y encuentra el plan adecuado'
      },
      medicareAdvantage: {
        title: 'Medicare Advantage',
        description: 'Cobertura mejorada con beneficios adicionales más allá del Medicare Original'
      },
      termLife: {
        title: 'Seguro de Vida a Término',
        description: 'Protección asequible para tus seres queridos cuando más lo necesiten'
      },
      permanentLife: {
        title: 'Seguro de Vida Permanente',
        description: 'Cobertura de por vida con beneficios de acumulación de valor en efectivo'
      },
      iul: {
        title: 'Vida Universal Indexada (IUL)',
        description: 'Construye riqueza mientras proteges el futuro de tu familia'
      },
      finalExpense: {
        title: 'Seguro de Gastos Finales',
        description: 'Tranquilidad para los gastos del final de la vida'
      },
      commercialTrucking: {
        title: 'Seguro Comercial para Camiones',
        description: 'Cobertura integral para tu negocio de camiones'
      },
      auto: {
        title: 'Seguro de Auto Personal',
        description: 'Protégete a ti mismo y a tu vehículo en la carretera'
      },
      home: {
        title: 'Seguro de Hogar y Propiedad',
        description: 'Protege tu hogar y pertenencias'
      },
      supplemental: {
        title: 'Seguro Suplementario',
        description: 'Cobertura adicional para gastos médicos inesperados'
      }
    },

    // Contacto
    contact: {
      badge: 'Contáctanos',
      title: 'Comencemos Tu',
      titleHighlight: 'Viaje Financiero',
      subtitle: 'Ponte en contacto con nuestro equipo de expertos para una consulta gratuita',
      formTitle: 'Obtén tu Cotización Gratis',
      placeholders: {
        name: 'Tu Nombre',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        service: 'Selecciona un Servicio',
        message: 'Cuéntanos sobre tus necesidades...'
      },
      sendButton: 'Enviar Mensaje',
      callTitle: 'Llámanos',
      callHours: 'Lun-Vie 9:00 AM - 6:00 PM',
      emailTitle: 'Envíanos un Email',
      emailSupport: 'Soporte Disponible 24/7',
      visitTitle: 'Visítanos',
      chatTitle: '¿Necesitas Ayuda Inmediata?',
      chatSubtitle: 'Chatea con nuestros expertos ahora',
      heroTitle: 'Ponte en Contacto',
      heroDescription: 'Estamos aquí para ayudarte con todas tus necesidades de seguros. Comunícate con nuestro amable equipo y obtén el apoyo que mereces.',
      
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        subject: 'Asunto',
        message: 'Mensaje',
        department: 'Departamento',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Tu mensaje ha sido enviado exitosamente!',
        error: 'Algo salió mal. Por favor intenta de nuevo.'
      },
      
      info: {
        callUs: 'Llámanos',
        emailUs: 'Envíanos un Email',
        visitUs: 'Visítanos',
        liveChat: 'Chat en Vivo',
        businessHours: 'Horario de Atención',
        weekdays: 'Lunes - Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo',
        closed: 'Cerrado'
      }
    },

    // Pie de página
    footer: {
      description: 'Tu socio de confianza para soluciones de seguros integrales. Protegiendo lo que más te importa.',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      company: 'Empresa',
      resources: 'Recursos',
      newsletter: {
        title: 'Mantente Actualizado',
        description: 'Suscríbete a nuestro boletín para consejos y actualizaciones de seguros',
        placeholder: 'Ingresa tu correo',
        button: 'Suscribirse'
      }
    }
  }
}

/**
 * Type definition for supported languages
 * 
 * @typedef {'en' | 'es'} Language
 */
export type Language = 'en' | 'es'

/**
 * Translation utility hook
 * 
 * Provides type-safe access to translations for the specified language.
 * Used throughout components to get localized text content.
 * 
 * @param language - The language code to get translations for
 * @returns Object containing all translations for the specified language
 * 
 * @example
 * ```tsx
 * function MyComponent({ language }: { language: Language }) {
 *   const t = useTranslation(language)
 *   
 *   return (
 *     <div>
 *       <h1>{t.hero.title}</h1>
 *       <p>{t.hero.description}</p>
 *       <button>{t.hero.consultation}</button>
 *     </div>
 *   )
 * }
 * ```
 */
export function useTranslation(language: Language) {
  return translations[language]
}