import { 
  Heart, Shield, Users, Home, Car, Truck, DollarSign, 
  TrendingUp, Award, FileText, Briefcase, HeartHandshake
} from 'lucide-react'

export const getServicesData = (lang: 'en' | 'es') => [
  {
    id: 'aca',
    category: 'health',
    title: lang === 'en' ? 'Affordable Care Act (ACA)' : 'Ley de Cuidado de Salud Asequible (ACA)',
    shortDesc: lang === 'en' 
      ? 'Comprehensive health coverage that meets your needs and budget'
      : 'Cobertura de salud completa que satisface tus necesidades y presupuesto',
    fullDesc: lang === 'en'
      ? 'Get quality health insurance through the Health Insurance Marketplace with potential subsidies to lower your costs.'
      : 'Obtén seguro de salud de calidad a través del Mercado de Seguros de Salud con posibles subsidios para reducir tus costos.',
    icon: Heart,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    features: lang === 'en' ? [
      'Preventive care at no cost',
      'Pre-existing conditions covered',
      'Essential health benefits',
      'Subsidies available based on income',
      'No annual or lifetime limits'
    ] : [
      'Cuidado preventivo sin costo',
      'Condiciones preexistentes cubiertas',
      'Beneficios de salud esenciales',
      'Subsidios disponibles según ingresos',
      'Sin límites anuales o de por vida'
    ],
    startingPrice: lang === 'en' ? '$150/month' : '$150/mes',
    popularPlan: true
  },
  {
    id: 'medicare',
    category: 'health',
    title: 'Medicare',
    shortDesc: lang === 'en'
      ? 'Navigate Medicare with confidence and find the right plan'
      : 'Navega Medicare con confianza y encuentra el plan adecuado',
    fullDesc: lang === 'en'
      ? 'Comprehensive Medicare coverage for those 65+ or with qualifying disabilities. We help you understand and choose the best options.'
      : 'Cobertura completa de Medicare para personas de 65+ o con discapacidades calificadas. Te ayudamos a entender y elegir las mejores opciones.',
    icon: Shield,
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    features: lang === 'en' ? [
      'Part A & B coverage guidance',
      'Prescription drug plans (Part D)',
      'Medicare Supplement options',
      'Annual enrollment assistance',
      'Provider network access'
    ] : [
      'Guía de cobertura Parte A y B',
      'Planes de medicamentos recetados (Parte D)',
      'Opciones de Suplemento de Medicare',
      'Asistencia en inscripción anual',
      'Acceso a red de proveedores'
    ],
    startingPrice: lang === 'en' ? '$0-170/month' : '$0-170/mes',
    popularPlan: true
  },
  {
    id: 'medicare-advantage',
    category: 'health',
    title: lang === 'en' ? 'Medicare Advantage' : 'Medicare Advantage',
    shortDesc: lang === 'en'
      ? 'Enhanced coverage with additional benefits beyond Original Medicare'
      : 'Cobertura mejorada con beneficios adicionales más allá del Medicare Original',
    fullDesc: lang === 'en'
      ? 'All-in-one alternative to Original Medicare with extra benefits like dental, vision, and hearing coverage.'
      : 'Alternativa todo en uno al Medicare Original con beneficios extra como cobertura dental, visión y audición.',
    icon: Award,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    features: lang === 'en' ? [
      'All Original Medicare benefits',
      'Dental, vision, hearing coverage',
      'Prescription drug coverage included',
      'Gym memberships',
      'Transportation benefits'
    ] : [
      'Todos los beneficios del Medicare Original',
      'Cobertura dental, visión, audición',
      'Cobertura de medicamentos recetados incluida',
      'Membresías de gimnasio',
      'Beneficios de transporte'
    ],
    startingPrice: lang === 'en' ? '$0-50/month' : '$0-50/mes',
    popularPlan: false
  },
  {
    id: 'term-life',
    category: 'life',
    title: lang === 'en' ? 'Term Life Insurance' : 'Seguro de Vida a Término',
    shortDesc: lang === 'en'
      ? 'Affordable protection for your loved ones when they need it most'
      : 'Protección asequible para tus seres queridos cuando más lo necesitan',
    fullDesc: lang === 'en'
      ? 'Pure life insurance protection for a specific period at the most affordable rates.'
      : 'Protección de seguro de vida pura por un período específico a las tarifas más asequibles.',
    icon: Users,
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50',
    features: lang === 'en' ? [
      '10, 20, or 30-year terms',
      'Level premiums guaranteed',
      'Convertible to permanent life',
      'No medical exam options',
      'Coverage up to $2 million'
    ] : [
      'Términos de 10, 20 o 30 años',
      'Primas niveladas garantizadas',
      'Convertible a vida permanente',
      'Opciones sin examen médico',
      'Cobertura hasta $2 millones'
    ],
    startingPrice: lang === 'en' ? '$20/month' : '$20/mes',
    popularPlan: true
  },
  {
    id: 'permanent-life',
    category: 'life',
    title: lang === 'en' ? 'Permanent Life Insurance' : 'Seguro de Vida Permanente',
    shortDesc: lang === 'en'
      ? 'Lifetime coverage with cash value accumulation benefits'
      : 'Cobertura de por vida con beneficios de acumulación de valor en efectivo',
    fullDesc: lang === 'en'
      ? 'Permanent protection with the added benefit of cash value growth you can access during your lifetime.'
      : 'Protección permanente con el beneficio adicional del crecimiento del valor en efectivo al que puedes acceder durante tu vida.',
    icon: HeartHandshake,
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
    features: lang === 'en' ? [
      'Lifetime coverage guarantee',
      'Cash value accumulation',
      'Tax-deferred growth',
      'Policy loans available',
      'Estate planning benefits'
    ] : [
      'Garantía de cobertura de por vida',
      'Acumulación de valor en efectivo',
      'Crecimiento con impuestos diferidos',
      'Préstamos de póliza disponibles',
      'Beneficios de planificación patrimonial'
    ],
    startingPrice: lang === 'en' ? '$100/month' : '$100/mes',
    popularPlan: false
  },
  {
    id: 'iul',
    category: 'life',
    title: lang === 'en' ? 'Index Universal Life (IUL)' : 'Seguro de Vida Universal Indexado (IUL)',
    shortDesc: lang === 'en'
      ? 'Build wealth while protecting your family\'s future'
      : 'Construye riqueza mientras proteges el futuro de tu familia',
    fullDesc: lang === 'en'
      ? 'Combines life insurance protection with investment potential linked to market indices.'
      : 'Combina protección de seguro de vida con potencial de inversión vinculado a índices del mercado.',
    icon: TrendingUp,
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    features: lang === 'en' ? [
      'Market-linked growth potential',
      'Downside protection',
      'Flexible premiums',
      'Tax-free retirement income',
      'Living benefits included'
    ] : [
      'Potencial de crecimiento vinculado al mercado',
      'Protección contra pérdidas',
      'Primas flexibles',
      'Ingresos de jubilación libres de impuestos',
      'Beneficios en vida incluidos'
    ],
    startingPrice: lang === 'en' ? '$150/month' : '$150/mes',
    popularPlan: false
  },
  {
    id: 'final-expense',
    category: 'life',
    title: lang === 'en' ? 'Final Expense Insurance' : 'Seguro de Gastos Finales',
    shortDesc: lang === 'en'
      ? 'Peace of mind for end-of-life expenses'
      : 'Tranquilidad para los gastos de fin de vida',
    fullDesc: lang === 'en'
      ? 'Affordable whole life insurance designed to cover funeral costs and final expenses.'
      : 'Seguro de vida entera asequible diseñado para cubrir costos funerarios y gastos finales.',
    icon: FileText,
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    features: lang === 'en' ? [
      'Guaranteed acceptance options',
      'No medical exam required',
      'Coverage from $5,000-$50,000',
      'Fixed premiums for life',
      'Quick benefit payout'
    ] : [
      'Opciones de aceptación garantizada',
      'No requiere examen médico',
      'Cobertura de $5,000-$50,000',
      'Primas fijas de por vida',
      'Pago rápido de beneficios'
    ],
    startingPrice: lang === 'en' ? '$30/month' : '$30/mes',
    popularPlan: false
  },
  {
    id: 'commercial-trucking',
    category: 'commercial',
    title: lang === 'en' ? 'Commercial Trucking Insurance' : 'Seguro de Camiones Comerciales',
    shortDesc: lang === 'en'
      ? 'Comprehensive coverage for your trucking business'
      : 'Cobertura completa para tu negocio de transporte',
    fullDesc: lang === 'en'
      ? 'Protect your trucking business with customized insurance solutions for owner-operators and fleets.'
      : 'Protege tu negocio de transporte con soluciones de seguro personalizadas para propietarios-operadores y flotas.',
    icon: Truck,
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    features: lang === 'en' ? [
      'Primary liability coverage',
      'Physical damage protection',
      'Cargo insurance',
      'Non-trucking liability',
      'Occupational accident coverage'
    ] : [
      'Cobertura de responsabilidad primaria',
      'Protección de daños físicos',
      'Seguro de carga',
      'Responsabilidad no comercial',
      'Cobertura de accidentes ocupacionales'
    ],
    startingPrice: lang === 'en' ? '$400/month' : '$400/mes',
    popularPlan: false
  },
  {
    id: 'auto',
    category: 'property',
    title: lang === 'en' ? 'Personal Auto Insurance' : 'Seguro de Auto Personal',
    shortDesc: lang === 'en'
      ? 'Protect yourself and your vehicle on the road'
      : 'Protégete a ti y a tu vehículo en la carretera',
    fullDesc: lang === 'en'
      ? 'Comprehensive auto insurance with competitive rates and excellent coverage options.'
      : 'Seguro de auto completo con tarifas competitivas y excelentes opciones de cobertura.',
    icon: Car,
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    features: lang === 'en' ? [
      'Liability coverage',
      'Collision and comprehensive',
      'Uninsured motorist protection',
      'Roadside assistance',
      'Rental car coverage'
    ] : [
      'Cobertura de responsabilidad',
      'Colisión y cobertura completa',
      'Protección contra conductores sin seguro',
      'Asistencia en carretera',
      'Cobertura de auto de alquiler'
    ],
    startingPrice: lang === 'en' ? '$100/month' : '$100/mes',
    popularPlan: false
  },
  {
    id: 'home',
    category: 'property',
    title: lang === 'en' ? 'Home & Property Insurance' : 'Seguro de Hogar y Propiedad',
    shortDesc: lang === 'en'
      ? 'Safeguard your home and belongings'
      : 'Protege tu hogar y pertenencias',
    fullDesc: lang === 'en'
      ? 'Complete protection for your home, personal property, and liability coverage.'
      : 'Protección completa para tu hogar, propiedad personal y cobertura de responsabilidad.',
    icon: Home,
    color: 'from-teal-400 to-teal-600',
    bgColor: 'bg-teal-50',
    features: lang === 'en' ? [
      'Dwelling coverage',
      'Personal property protection',
      'Liability insurance',
      'Additional living expenses',
      'Natural disaster coverage'
    ] : [
      'Cobertura de vivienda',
      'Protección de propiedad personal',
      'Seguro de responsabilidad',
      'Gastos de vida adicionales',
      'Cobertura de desastres naturales'
    ],
    startingPrice: lang === 'en' ? '$150/month' : '$150/mes',
    popularPlan: false
  },
  {
    id: 'supplemental',
    category: 'health',
    title: lang === 'en' ? 'Supplemental Insurance' : 'Seguro Suplementario',
    shortDesc: lang === 'en'
      ? 'Extra coverage for unexpected medical expenses'
      : 'Cobertura adicional para gastos médicos inesperados',
    fullDesc: lang === 'en'
      ? 'Additional insurance to help cover costs that your primary health insurance doesn\'t.'
      : 'Seguro adicional para ayudar a cubrir costos que tu seguro de salud primario no cubre.',
    icon: Briefcase,
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-50',
    features: lang === 'en' ? [
      'Accident insurance',
      'Critical illness coverage',
      'Hospital indemnity',
      'Disability income protection',
      'Cancer insurance'
    ] : [
      'Seguro de accidentes',
      'Cobertura de enfermedades críticas',
      'Indemnización hospitalaria',
      'Protección de ingresos por discapacidad',
      'Seguro contra el cáncer'
    ],
    startingPrice: lang === 'en' ? '$25/month' : '$25/mes',
    popularPlan: false
  }
]