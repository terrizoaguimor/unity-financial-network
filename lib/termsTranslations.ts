export const getTermsTranslations = (lang: 'en' | 'es') => ({
  hero: {
    title: lang === 'en' ? 'Terms of' : 'Términos de',
    titleHighlight: lang === 'en' ? 'Service' : 'Servicio',
    subtitle: lang === 'en' 
      ? 'Please read these terms carefully before using our services. By using Unity Financial Network, you agree to be bound by these terms.'
      : 'Por favor lea estos términos cuidadosamente antes de usar nuestros servicios. Al usar Unity Financial Network, usted acepta estar sujeto a estos términos.',
    effectiveDate: lang === 'en' 
      ? 'Effective Date: January 1, 2024 | Last Updated: March 15, 2024'
      : 'Fecha de Vigencia: 1 de enero, 2024 | Última Actualización: 15 de marzo, 2024'
  },
  
  sections: [
    { 
      id: 'acceptance', 
      title: lang === 'en' ? 'Acceptance of Terms' : 'Aceptación de Términos', 
      icon: 'FileText' 
    },
    { 
      id: 'use-of-services', 
      title: lang === 'en' ? 'Use of Services' : 'Uso de Servicios', 
      icon: 'Users' 
    },
    { 
      id: 'user-accounts', 
      title: lang === 'en' ? 'User Accounts' : 'Cuentas de Usuario', 
      icon: 'Shield' 
    },
    { 
      id: 'prohibited-uses', 
      title: lang === 'en' ? 'Prohibited Uses' : 'Usos Prohibidos', 
      icon: 'Ban' 
    },
    { 
      id: 'intellectual-property', 
      title: lang === 'en' ? 'Intellectual Property' : 'Propiedad Intelectual', 
      icon: 'BookOpen' 
    },
    { 
      id: 'payment-terms', 
      title: lang === 'en' ? 'Payment Terms' : 'Términos de Pago', 
      icon: 'CreditCard' 
    },
    { 
      id: 'disclaimers', 
      title: lang === 'en' ? 'Disclaimers' : 'Descargos de Responsabilidad', 
      icon: 'AlertCircle' 
    },
    { 
      id: 'limitation-liability', 
      title: lang === 'en' ? 'Limitation of Liability' : 'Limitación de Responsabilidad', 
      icon: 'Scale' 
    },
    { 
      id: 'governing-law', 
      title: lang === 'en' ? 'Governing Law' : 'Ley Aplicable', 
      icon: 'Gavel' 
    },
    { 
      id: 'contact', 
      title: lang === 'en' ? 'Contact Information' : 'Información de Contacto', 
      icon: 'Mail' 
    }
  ],

  sidebar: {
    tableOfContents: lang === 'en' ? 'Table of Contents' : 'Tabla de Contenidos',
    quickActions: lang === 'en' ? 'Quick Actions' : 'Acciones Rápidas',
    viewPrivacy: lang === 'en' ? 'View Privacy Policy' : 'Ver Política de Privacidad',
    cookiePolicy: lang === 'en' ? 'Cookie Policy' : 'Política de Cookies',
    printTerms: lang === 'en' ? 'Print Terms' : 'Imprimir Términos'
  },

  notice: {
    title: lang === 'en' ? 'Important Notice' : 'Aviso Importante',
    text: lang === 'en'
      ? 'These Terms of Service constitute a legally binding agreement between you and Unity Financial Network. If you do not agree to these terms, you may not access or use our services.'
      : 'Estos Términos de Servicio constituyen un acuerdo legalmente vinculante entre usted y Unity Financial Network. Si no está de acuerdo con estos términos, no podrá acceder o usar nuestros servicios.'
  },

  acceptance: {
    title: lang === 'en' ? '1. Acceptance of Terms' : '1. Aceptación de Términos',
    content1: lang === 'en'
      ? 'By accessing and using the Unity Financial Network website and services ("Services"), you accept and agree to be bound by the terms and provision of this agreement.'
      : 'Al acceder y usar el sitio web y servicios de Unity Financial Network ("Servicios"), usted acepta y acuerda estar sujeto a los términos y disposiciones de este acuerdo.',
    content2: lang === 'en'
      ? 'These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.'
      : 'Estos Términos de Servicio se aplican a todos los usuarios del sitio, incluidos, entre otros, usuarios que son navegadores, proveedores, clientes, comerciantes y/o colaboradores de contenido.',
    represent: lang === 'en' ? 'By using our Services, you represent that:' : 'Al usar nuestros Servicios, usted declara que:',
    requirements: [
      lang === 'en' ? 'You are at least 18 years of age' : 'Tiene al menos 18 años de edad',
      lang === 'en' ? 'You have the legal capacity to enter into binding contracts' : 'Tiene la capacidad legal para celebrar contratos vinculantes',
      lang === 'en' ? 'You are not prohibited from using our Services under applicable laws' : 'No tiene prohibido usar nuestros Servicios según las leyes aplicables'
    ]
  },

  useOfServices: {
    title: lang === 'en' ? '2. Use of Services' : '2. Uso de Servicios',
    content: lang === 'en'
      ? 'Unity Financial Network provides insurance brokerage and related financial services. Our Services are designed to help you find and purchase insurance products that meet your needs.'
      : 'Unity Financial Network proporciona servicios de corretaje de seguros y servicios financieros relacionados. Nuestros Servicios están diseñados para ayudarle a encontrar y comprar productos de seguros que satisfagan sus necesidades.',
    permitted: lang === 'en' ? 'Permitted Uses' : 'Usos Permitidos',
    permittedList: [
      lang === 'en' ? 'Request insurance quotes' : 'Solicitar cotizaciones de seguros',
      lang === 'en' ? 'Purchase insurance policies' : 'Comprar pólizas de seguros',
      lang === 'en' ? 'Manage your account' : 'Administrar su cuenta',
      lang === 'en' ? 'Access educational resources' : 'Acceder a recursos educativos',
      lang === 'en' ? 'Contact customer support' : 'Contactar soporte al cliente'
    ],
    restrictions: lang === 'en' ? 'Restrictions' : 'Restricciones',
    restrictionsList: [
      lang === 'en' ? 'No unauthorized access' : 'Sin acceso no autorizado',
      lang === 'en' ? 'No false information' : 'Sin información falsa',
      lang === 'en' ? 'No harmful activities' : 'Sin actividades dañinas',
      lang === 'en' ? 'No commercial exploitation' : 'Sin explotación comercial',
      lang === 'en' ? 'No automated data collection' : 'Sin recopilación automatizada de datos'
    ],
    reserve: lang === 'en'
      ? 'We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.'
      : 'Nos reservamos el derecho de rechazar el servicio, cancelar cuentas, eliminar o editar contenido, o cancelar pedidos a nuestra sola discreción.'
  },

  userAccounts: {
    title: lang === 'en' ? '3. User Accounts' : '3. Cuentas de Usuario',
    content: lang === 'en'
      ? 'When you create an account with us, you must provide information that is accurate, complete, and current at all times.'
      : 'Cuando crea una cuenta con nosotros, debe proporcionar información precisa, completa y actualizada en todo momento.',
    security: lang === 'en' ? 'Account Security' : 'Seguridad de la Cuenta',
    securityText: lang === 'en'
      ? 'You are responsible for safeguarding the password and for all activities that occur under your account.'
      : 'Usted es responsable de proteger la contraseña y de todas las actividades que ocurran bajo su cuenta.',
    accurate: lang === 'en' ? 'Accurate Information' : 'Información Precisa',
    accurateText: lang === 'en'
      ? 'Providing false or misleading information may result in termination of your account.'
      : 'Proporcionar información falsa o engañosa puede resultar en la terminación de su cuenta.',
    notification: lang === 'en' ? 'Notification' : 'Notificación',
    notificationText: lang === 'en'
      ? 'You must notify us immediately of any unauthorized access or security breach.'
      : 'Debe notificarnos inmediatamente sobre cualquier acceso no autorizado o violación de seguridad.',
    liability: lang === 'en'
      ? 'We will not be liable for any loss or damage arising from your failure to comply with these security obligations.'
      : 'No seremos responsables por ninguna pérdida o daño que surja de su incumplimiento con estas obligaciones de seguridad.'
  },

  contact: {
    title: lang === 'en' ? '10. Contact Information' : '10. Información de Contacto',
    subtitle: lang === 'en' 
      ? 'If you have any questions about these Terms of Service, please contact us:'
      : 'Si tiene alguna pregunta sobre estos Términos de Servicio, contáctenos:',
    legalDept: lang === 'en' ? 'Legal Department' : 'Departamento Legal',
    mailingAddress: lang === 'en' ? 'Mailing Address' : 'Dirección Postal'
  },

  modifications: {
    title: lang === 'en' ? 'Modifications to Terms' : 'Modificaciones a los Términos',
    text: lang === 'en'
      ? 'We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Services after any changes constitutes acceptance of the new Terms.'
      : 'Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio material publicando los nuevos Términos en esta página y actualizando la fecha de "Última Actualización". Su uso continuado de los Servicios después de cualquier cambio constituye la aceptación de los nuevos Términos.'
  },

  acknowledgment: {
    title: lang === 'en' ? 'Acknowledgment and Acceptance' : 'Reconocimiento y Aceptación',
    text: lang === 'en'
      ? 'By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.'
      : 'Al usar nuestros Servicios, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos de Servicio.',
    checkboxLabel: lang === 'en' 
      ? 'I have read and accept the Terms of Service'
      : 'He leído y acepto los Términos de Servicio'
  }
})