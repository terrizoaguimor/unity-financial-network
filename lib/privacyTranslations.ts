export const getPrivacyTranslations = (lang: 'en' | 'es') => ({
  hero: {
    title: lang === 'en' ? 'Privacy' : 'Política de',
    titleHighlight: lang === 'en' ? 'Policy' : 'Privacidad',
    subtitle: lang === 'en' 
      ? 'Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.'
      : 'Su privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos su información personal.',
    effectiveDate: lang === 'en' 
      ? 'Effective Date: January 1, 2024 | Last Updated: March 15, 2024'
      : 'Fecha de Vigencia: 1 de enero, 2024 | Última Actualización: 15 de marzo, 2024'
  },

  sections: [
    { 
      id: 'information-we-collect', 
      title: lang === 'en' ? 'Information We Collect' : 'Información que Recopilamos',
      icon: 'Database' 
    },
    { 
      id: 'how-we-use', 
      title: lang === 'en' ? 'How We Use Your Information' : 'Cómo Usamos su Información',
      icon: 'Eye' 
    },
    { 
      id: 'information-sharing', 
      title: lang === 'en' ? 'Information Sharing' : 'Compartir Información',
      icon: 'Users' 
    },
    { 
      id: 'data-security', 
      title: lang === 'en' ? 'Data Security' : 'Seguridad de Datos',
      icon: 'Lock' 
    },
    { 
      id: 'your-rights', 
      title: lang === 'en' ? 'Your Rights' : 'Sus Derechos',
      icon: 'UserCheck' 
    },
    { 
      id: 'cookies', 
      title: lang === 'en' ? 'Cookies & Tracking' : 'Cookies y Seguimiento',
      icon: 'Cookie' 
    },
    { 
      id: 'third-party', 
      title: lang === 'en' ? 'Third-Party Services' : 'Servicios de Terceros',
      icon: 'Globe' 
    },
    { 
      id: 'contact', 
      title: lang === 'en' ? 'Contact Us' : 'Contáctenos',
      icon: 'Mail' 
    }
  ],

  sidebar: {
    quickNavigation: lang === 'en' ? 'Quick Navigation' : 'Navegación Rápida',
    ourCommitments: lang === 'en' ? 'Our Commitments' : 'Nuestros Compromisos',
    encryption: lang === 'en' ? '256-bit Encryption' : 'Encriptación de 256 bits',
    gdprCompliant: lang === 'en' ? 'GDPR Compliant' : 'Cumple con GDPR',
    ccpaCompliant: lang === 'en' ? 'CCPA Compliant' : 'Cumple con CCPA'
  },

  introduction: lang === 'en'
    ? 'Unity Financial Network ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.'
    : 'Unity Financial Network ("nosotros", "nuestro") está comprometido a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web o usa nuestros servicios. Por favor lea esta política de privacidad cuidadosamente. Si no está de acuerdo con los términos de esta política de privacidad, por favor no acceda al sitio.',

  informationWeCollect: {
    title: lang === 'en' ? 'Information We Collect' : 'Información que Recopilamos',
    personalInfo: lang === 'en' ? 'Personal Information' : 'Información Personal',
    personalInfoText: lang === 'en'
      ? 'We may collect personal information that you provide directly to us, including:'
      : 'Podemos recopilar información personal que usted nos proporciona directamente, incluyendo:',
    personalInfoList: [
      lang === 'en' ? 'Name, email address, and phone number' : 'Nombre, dirección de correo electrónico y número de teléfono',
      lang === 'en' ? 'Mailing address and ZIP code' : 'Dirección postal y código postal',
      lang === 'en' ? 'Date of birth and Social Security Number (for insurance purposes)' : 'Fecha de nacimiento y Número de Seguro Social (para fines de seguro)',
      lang === 'en' ? 'Insurance policy information and claim history' : 'Información de póliza de seguro e historial de reclamos',
      lang === 'en' ? 'Payment and billing information' : 'Información de pago y facturación'
    ],
    automaticInfo: lang === 'en' ? 'Automatically Collected Information' : 'Información Recopilada Automáticamente',
    automaticInfoText: lang === 'en'
      ? 'When you visit our website, we automatically collect certain information:'
      : 'Cuando visita nuestro sitio web, recopilamos automáticamente cierta información:',
    automaticInfoList: [
      lang === 'en' ? 'IP address and browser type' : 'Dirección IP y tipo de navegador',
      lang === 'en' ? 'Device information and operating system' : 'Información del dispositivo y sistema operativo',
      lang === 'en' ? 'Pages visited and time spent on our site' : 'Páginas visitadas y tiempo en nuestro sitio',
      lang === 'en' ? 'Referring website addresses' : 'Direcciones de sitios web de referencia'
    ]
  },

  howWeUse: {
    title: lang === 'en' ? 'How We Use Your Information' : 'Cómo Usamos su Información',
    text: lang === 'en'
      ? 'We use the information we collect for various purposes, including:'
      : 'Usamos la información que recopilamos para varios propósitos, incluyendo:',
    purposes: [
      lang === 'en' ? 'Provide and maintain our services' : 'Proporcionar y mantener nuestros servicios',
      lang === 'en' ? 'Process insurance applications and claims' : 'Procesar aplicaciones y reclamos de seguros',
      lang === 'en' ? 'Send you important updates and notifications' : 'Enviarle actualizaciones y notificaciones importantes',
      lang === 'en' ? 'Respond to your inquiries and support requests' : 'Responder a sus consultas y solicitudes de soporte',
      lang === 'en' ? 'Improve our website and services' : 'Mejorar nuestro sitio web y servicios',
      lang === 'en' ? 'Comply with legal obligations' : 'Cumplir con obligaciones legales',
      lang === 'en' ? 'Prevent fraud and enhance security' : 'Prevenir fraude y mejorar la seguridad',
      lang === 'en' ? 'Marketing and promotional purposes (with consent)' : 'Fines de marketing y promocionales (con consentimiento)'
    ]
  },

  informationSharing: {
    title: lang === 'en' ? 'Information Sharing' : 'Compartir Información',
    text: lang === 'en'
      ? 'We may share your information in the following situations:'
      : 'Podemos compartir su información en las siguientes situaciones:',
    serviceProviders: lang === 'en' ? 'With Service Providers' : 'Con Proveedores de Servicios',
    serviceProvidersText: lang === 'en'
      ? 'We share information with third-party vendors who perform services on our behalf, such as payment processing, data analysis, and customer service.'
      : 'Compartimos información con proveedores externos que realizan servicios en nuestro nombre, como procesamiento de pagos, análisis de datos y servicio al cliente.',
    insurancePartners: lang === 'en' ? 'With Insurance Partners' : 'Con Socios de Seguros',
    insurancePartnersText: lang === 'en'
      ? 'We share necessary information with insurance carriers to process your applications, quotes, and claims.'
      : 'Compartimos información necesaria con compañías de seguros para procesar sus aplicaciones, cotizaciones y reclamos.',
    legalReasons: lang === 'en' ? 'For Legal Reasons' : 'Por Razones Legales',
    legalReasonsText: lang === 'en'
      ? 'We may disclose information if required by law, court order, or to protect our rights and safety.'
      : 'Podemos divulgar información si lo requiere la ley, orden judicial, o para proteger nuestros derechos y seguridad.',
    withConsent: lang === 'en' ? 'With Your Consent' : 'Con Su Consentimiento',
    withConsentText: lang === 'en'
      ? 'We may share your information for any other purpose with your explicit consent.'
      : 'Podemos compartir su información para cualquier otro propósito con su consentimiento explícito.',
    noSelling: lang === 'en'
      ? 'We never sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.'
      : 'Nunca vendemos, alquilamos o intercambiamos su información personal a terceros para sus fines de marketing sin su consentimiento explícito.'
  },

  dataSecurity: {
    title: lang === 'en' ? 'Data Security' : 'Seguridad de Datos',
    text: lang === 'en'
      ? 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
      : 'Implementamos medidas de seguridad técnicas y organizacionales apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.',
    encryption: lang === 'en' ? 'Encryption' : 'Encriptación',
    encryptionText: lang === 'en'
      ? 'All data transmissions are encrypted using SSL/TLS protocols'
      : 'Todas las transmisiones de datos están encriptadas usando protocolos SSL/TLS',
    secureStorage: lang === 'en' ? 'Secure Storage' : 'Almacenamiento Seguro',
    secureStorageText: lang === 'en'
      ? 'Data is stored in secure, access-controlled environments'
      : 'Los datos se almacenan en entornos seguros con acceso controlado',
    accessControl: lang === 'en' ? 'Access Control' : 'Control de Acceso',
    accessControlText: lang === 'en'
      ? 'Limited access on a need-to-know basis'
      : 'Acceso limitado según sea necesario',
    regularAudits: lang === 'en' ? 'Regular Audits' : 'Auditorías Regulares',
    regularAuditsText: lang === 'en'
      ? 'Periodic security assessments and updates'
      : 'Evaluaciones de seguridad y actualizaciones periódicas'
  },

  yourRights: {
    title: lang === 'en' ? 'Your Rights' : 'Sus Derechos',
    text: lang === 'en'
      ? 'You have certain rights regarding your personal information:'
      : 'Usted tiene ciertos derechos con respecto a su información personal:',
    rights: [
      {
        title: lang === 'en' ? 'Access' : 'Acceso',
        description: lang === 'en' 
          ? 'Request access to your personal information that we hold'
          : 'Solicitar acceso a su información personal que tenemos'
      },
      {
        title: lang === 'en' ? 'Correction' : 'Corrección',
        description: lang === 'en'
          ? 'Request correction of inaccurate or incomplete information'
          : 'Solicitar corrección de información inexacta o incompleta'
      },
      {
        title: lang === 'en' ? 'Deletion' : 'Eliminación',
        description: lang === 'en'
          ? 'Request deletion of your personal information, subject to legal obligations'
          : 'Solicitar eliminación de su información personal, sujeto a obligaciones legales'
      },
      {
        title: lang === 'en' ? 'Portability' : 'Portabilidad',
        description: lang === 'en'
          ? 'Request a copy of your data in a structured, machine-readable format'
          : 'Solicitar una copia de sus datos en un formato estructurado y legible por máquina'
      },
      {
        title: lang === 'en' ? 'Opt-Out' : 'Exclusión',
        description: lang === 'en'
          ? 'Opt-out of marketing communications at any time'
          : 'Optar por no recibir comunicaciones de marketing en cualquier momento'
      },
      {
        title: lang === 'en' ? 'Restriction' : 'Restricción',
        description: lang === 'en'
          ? 'Request restriction of processing your personal information'
          : 'Solicitar restricción del procesamiento de su información personal'
      }
    ]
  },

  cookies: {
    title: lang === 'en' ? 'Cookies & Tracking Technologies' : 'Cookies y Tecnologías de Seguimiento',
    text: lang === 'en'
      ? 'We use cookies and similar tracking technologies to enhance your experience on our website.'
      : 'Usamos cookies y tecnologías de seguimiento similares para mejorar su experiencia en nuestro sitio web.',
    typesTitle: lang === 'en' ? 'Types of Cookies We Use' : 'Tipos de Cookies que Usamos',
    essential: lang === 'en' ? 'Essential Cookies' : 'Cookies Esenciales',
    essentialText: lang === 'en' ? 'Required for website functionality' : 'Requeridas para la funcionalidad del sitio web',
    analytics: lang === 'en' ? 'Analytics Cookies' : 'Cookies de Análisis',
    analyticsText: lang === 'en' ? 'Help us understand website usage' : 'Nos ayudan a entender el uso del sitio web',
    marketing: lang === 'en' ? 'Marketing Cookies' : 'Cookies de Marketing',
    marketingText: lang === 'en' ? 'Used to deliver relevant ads' : 'Usadas para entregar anuncios relevantes',
    preference: lang === 'en' ? 'Preference Cookies' : 'Cookies de Preferencia',
    preferenceText: lang === 'en' ? 'Remember your settings and preferences' : 'Recuerdan sus configuraciones y preferencias',
    control: lang === 'en'
      ? 'You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.'
      : 'Puede controlar las cookies a través de la configuración de su navegador. Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web.'
  },

  contact: {
    title: lang === 'en' ? 'Contact Us' : 'Contáctenos',
    text: lang === 'en'
      ? 'If you have any questions about this Privacy Policy or our data practices, please contact us:'
      : 'Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos:',
    privacyOfficer: lang === 'en' ? 'Privacy Officer' : 'Oficial de Privacidad',
    mailingAddress: lang === 'en' ? 'Mailing Address' : 'Dirección Postal'
  },

  updates: {
    title: lang === 'en' ? 'Policy Updates' : 'Actualizaciones de la Política',
    text: lang === 'en'
      ? 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.'
      : 'Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última Actualización". Le recomendamos revisar esta Política de Privacidad periódicamente.'
  }
})