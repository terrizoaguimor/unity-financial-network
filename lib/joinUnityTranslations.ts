export const getJoinUnityTranslations = (lang: 'en' | 'es') => ({
  hero: {
    badge: lang === 'en' ? 'Join Our Team' : 'Únete a Nuestro Equipo',
    title: lang === 'en' ? 'Build Your Career at' : 'Construye tu Carrera en',
    titleHighlight: lang === 'en' ? 'Unity Financial' : 'Unity Financial',
    subtitle: lang === 'en' 
      ? "Join a team that's passionate about making insurance accessible and helping families achieve financial security."
      : 'Únete a un equipo apasionado por hacer los seguros accesibles y ayudar a las familias a lograr seguridad financiera.',
    viewPositions: lang === 'en' ? 'View Open Positions' : 'Ver Posiciones Abiertas',
    submitResume: lang === 'en' ? 'Submit Resume' : 'Enviar Currículum'
  },

  whyUnity: {
    badge: lang === 'en' ? 'Why Unity?' : '¿Por qué Unity?',
    title: lang === 'en' ? 'More Than Just a Job,' : 'Más que un Trabajo,',
    titleHighlight: lang === 'en' ? "It's a Mission" : 'Es una Misión',
    subtitle: lang === 'en'
      ? "At Unity Financial Network, we're not just selling insurance – we're building lasting relationships and securing futures for families across America."
      : 'En Unity Financial Network, no solo vendemos seguros: construimos relaciones duraderas y aseguramos el futuro de familias en todo Estados Unidos.'
  },

  values: [
    { 
      title: lang === 'en' ? 'Purpose-Driven' : 'Propósito Claro',
      description: lang === 'en' 
        ? 'We help families secure their future' 
        : 'Ayudamos a las familias a asegurar su futuro'
    },
    { 
      title: lang === 'en' ? 'Excellence' : 'Excelencia',
      description: lang === 'en' 
        ? 'We strive for the best in everything we do' 
        : 'Nos esforzamos por lo mejor en todo lo que hacemos'
    },
    { 
      title: lang === 'en' ? 'Innovation' : 'Innovación',
      description: lang === 'en' 
        ? 'We embrace new ideas and technologies' 
        : 'Adoptamos nuevas ideas y tecnologías'
    },
    { 
      title: lang === 'en' ? 'Growth' : 'Crecimiento',
      description: lang === 'en' 
        ? 'We invest in your personal and professional development' 
        : 'Invertimos en tu desarrollo personal y profesional'
    }
  ],

  benefitsSection: {
    badge: lang === 'en' ? 'Benefits & Perks' : 'Beneficios y Ventajas',
    title: lang === 'en' ? 'We Take Care of' : 'Cuidamos de',
    titleHighlight: lang === 'en' ? 'Our Team' : 'Nuestro Equipo'
  },

  benefits: [
    {
      title: lang === 'en' ? 'Health & Wellness' : 'Salud y Bienestar',
      description: lang === 'en'
        ? 'Comprehensive health, dental, and vision insurance for you and your family'
        : 'Seguro médico, dental y de visión integral para ti y tu familia'
    },
    {
      title: lang === 'en' ? 'Competitive Compensation' : 'Compensación Competitiva',
      description: lang === 'en'
        ? 'Industry-leading salaries with performance bonuses and commission structures'
        : 'Salarios líderes en la industria con bonos de desempeño y estructuras de comisión'
    },
    {
      title: lang === 'en' ? 'Professional Development' : 'Desarrollo Profesional',
      description: lang === 'en'
        ? 'Continuous training, certifications, and career advancement opportunities'
        : 'Capacitación continua, certificaciones y oportunidades de avance profesional'
    },
    {
      title: lang === 'en' ? 'Work-Life Balance' : 'Balance Vida-Trabajo',
      description: lang === 'en'
        ? 'Flexible schedules, remote options, and generous PTO policy'
        : 'Horarios flexibles, opciones remotas y generosa política de tiempo libre'
    },
    {
      title: lang === 'en' ? 'Team Culture' : 'Cultura de Equipo',
      description: lang === 'en'
        ? 'Collaborative environment with team events and recognition programs'
        : 'Ambiente colaborativo con eventos de equipo y programas de reconocimiento'
    },
    {
      title: lang === 'en' ? 'Retirement Planning' : 'Planificación de Jubilación',
      description: lang === 'en'
        ? '401(k) with company match and financial planning resources'
        : '401(k) con aporte de la empresa y recursos de planificación financiera'
    }
  ],

  positionsSection: {
    badge: lang === 'en' ? 'Open Positions' : 'Posiciones Abiertas',
    title: lang === 'en' ? 'Find Your' : 'Encuentra tu',
    titleHighlight: lang === 'en' ? 'Perfect Role' : 'Rol Perfecto',
    subtitle: lang === 'en'
      ? "We're always looking for talented individuals who share our passion for helping families achieve financial security."
      : 'Siempre estamos buscando personas talentosas que compartan nuestra pasión por ayudar a las familias a lograr seguridad financiera.'
  },

  positions: {
    seniorAgent: {
      title: lang === 'en' ? 'Senior Insurance Agent' : 'Agente de Seguros Senior',
      department: lang === 'en' ? 'Sales' : 'Ventas',
      type: lang === 'en' ? 'Full-time' : 'Tiempo completo',
      level: lang === 'en' ? 'Senior' : 'Senior',
      salary: lang === 'en' ? '$60k - $120k + Commission' : '$60k - $120k + Comisión',
      description: lang === 'en'
        ? 'We are looking for experienced insurance agents to join our growing team and help clients find the perfect coverage.'
        : 'Buscamos agentes de seguros experimentados para unirse a nuestro equipo en crecimiento y ayudar a los clientes a encontrar la cobertura perfecta.',
      requirements: [
        lang === 'en' ? '3+ years of insurance sales experience' : '3+ años de experiencia en ventas de seguros',
        lang === 'en' ? 'Active insurance license' : 'Licencia de seguros activa',
        lang === 'en' ? 'Excellent communication skills' : 'Excelentes habilidades de comunicación',
        lang === 'en' ? 'Bilingual (English/Spanish) preferred' : 'Bilingüe (Inglés/Español) preferido'
      ]
    },
    customerSuccess: {
      title: lang === 'en' ? 'Customer Success Manager' : 'Gerente de Éxito del Cliente',
      department: lang === 'en' ? 'Customer Service' : 'Servicio al Cliente',
      type: lang === 'en' ? 'Full-time' : 'Tiempo completo',
      level: lang === 'en' ? 'Mid-level' : 'Nivel medio',
      salary: '$50k - $70k',
      description: lang === 'en'
        ? 'Help our clients navigate their insurance journey and ensure they have an exceptional experience with Unity.'
        : 'Ayuda a nuestros clientes a navegar su viaje de seguros y asegura que tengan una experiencia excepcional con Unity.',
      requirements: [
        lang === 'en' ? '2+ years customer service experience' : '2+ años de experiencia en servicio al cliente',
        lang === 'en' ? 'Knowledge of insurance products' : 'Conocimiento de productos de seguros',
        lang === 'en' ? 'Problem-solving skills' : 'Habilidades de resolución de problemas',
        lang === 'en' ? 'CRM experience' : 'Experiencia con CRM'
      ]
    },
    digitalMarketing: {
      title: lang === 'en' ? 'Digital Marketing Specialist' : 'Especialista en Marketing Digital',
      department: lang === 'en' ? 'Marketing' : 'Marketing',
      type: lang === 'en' ? 'Full-time' : 'Tiempo completo',
      level: lang === 'en' ? 'Mid-level' : 'Nivel medio',
      salary: '$45k - $65k',
      description: lang === 'en'
        ? 'Drive our digital marketing efforts to reach more families and help them secure their financial future.'
        : 'Impulsa nuestros esfuerzos de marketing digital para llegar a más familias y ayudarlas a asegurar su futuro financiero.',
      requirements: [
        lang === 'en' ? 'Experience with SEO/SEM' : 'Experiencia con SEO/SEM',
        lang === 'en' ? 'Social media marketing skills' : 'Habilidades de marketing en redes sociales',
        lang === 'en' ? 'Google Ads certification' : 'Certificación de Google Ads',
        lang === 'en' ? 'Analytics expertise' : 'Experiencia en análisis'
      ]
    },
    underwriter: {
      title: lang === 'en' ? 'Insurance Underwriter' : 'Suscriptor de Seguros',
      department: lang === 'en' ? 'Operations' : 'Operaciones',
      type: lang === 'en' ? 'Full-time' : 'Tiempo completo',
      level: lang === 'en' ? 'Senior' : 'Senior',
      salary: '$70k - $90k',
      description: lang === 'en'
        ? 'Evaluate insurance applications and determine coverage terms for our diverse client base.'
        : 'Evalúa aplicaciones de seguros y determina términos de cobertura para nuestra diversa base de clientes.',
      requirements: [
        lang === 'en' ? '5+ years underwriting experience' : '5+ años de experiencia en suscripción',
        lang === 'en' ? 'Knowledge of insurance regulations' : 'Conocimiento de regulaciones de seguros',
        lang === 'en' ? 'Analytical skills' : 'Habilidades analíticas',
        lang === 'en' ? 'Attention to detail' : 'Atención al detalle'
      ]
    },
    juniorAgent: {
      title: lang === 'en' ? 'Junior Insurance Agent' : 'Agente de Seguros Junior',
      department: lang === 'en' ? 'Sales' : 'Ventas',
      type: lang === 'en' ? 'Full-time' : 'Tiempo completo',
      level: lang === 'en' ? 'Entry-level' : 'Nivel inicial',
      salary: lang === 'en' ? '$35k - $50k + Commission' : '$35k - $50k + Comisión',
      description: lang === 'en'
        ? 'Start your career in insurance sales with comprehensive training and mentorship.'
        : 'Comienza tu carrera en ventas de seguros con capacitación integral y mentoría.',
      requirements: [
        lang === 'en' ? 'High school diploma' : 'Diploma de escuela secundaria',
        lang === 'en' ? 'Willingness to obtain insurance license' : 'Disposición para obtener licencia de seguros',
        lang === 'en' ? 'Customer-focused mindset' : 'Mentalidad enfocada en el cliente',
        lang === 'en' ? 'Eager to learn' : 'Deseos de aprender'
      ]
    }
  },

  positionDetails: {
    location: lang === 'en' ? 'Location' : 'Ubicación',
    moreInfo: lang === 'en' ? 'More Info' : 'Más Info',
    lessInfo: lang === 'en' ? 'Less Info' : 'Menos Info',
    applyNow: lang === 'en' ? 'Apply Now' : 'Aplicar Ahora',
    requirements: lang === 'en' ? 'Requirements:' : 'Requisitos:',
    remote: lang === 'en' ? 'Remote' : 'Remoto'
  },

  applicationForm: {
    badge: lang === 'en' ? 'Apply Now' : 'Aplicar Ahora',
    title: lang === 'en' ? 'Start Your Journey' : 'Comienza tu Viaje',
    titleHighlight: lang === 'en' ? 'With Us' : 'Con Nosotros',
    fullName: lang === 'en' ? 'Full Name *' : 'Nombre Completo *',
    email: lang === 'en' ? 'Email Address *' : 'Correo Electrónico *',
    phone: lang === 'en' ? 'Phone Number *' : 'Número de Teléfono *',
    position: lang === 'en' ? 'Position Applying For *' : 'Posición a la que Aplica *',
    selectPosition: lang === 'en' ? 'Select a position' : 'Selecciona una posición',
    resumeLink: lang === 'en' ? 'Resume/CV Link' : 'Enlace a Currículum/CV',
    resumePlaceholder: lang === 'en' 
      ? 'Link to your resume (Google Drive, Dropbox, etc.)' 
      : 'Enlace a tu currículum (Google Drive, Dropbox, etc.)',
    coverLetter: lang === 'en' 
      ? 'Cover Letter / Additional Information' 
      : 'Carta de Presentación / Información Adicional',
    coverLetterPlaceholder: lang === 'en'
      ? "Tell us why you'd be a great fit for Unity Financial Network..."
      : 'Cuéntanos por qué serías ideal para Unity Financial Network...',
    submitApplication: lang === 'en' ? 'Submit Application' : 'Enviar Aplicación'
  }
})