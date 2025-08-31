import { 
  HealthIcon as Heart, 
  LifeIcon as Shield, 
  TeamIcon as Users, 
  HomeIcon as Home, 
  AutoIcon as Car, 
  CommercialIcon as Truck
} from '@/components/icons/UnityIcons'
import { DollarSign, TrendingUp, Award, FileText, Briefcase, HeartHandshake } from 'lucide-react'

export const getServiceDetails = (lang: 'en' | 'es', slug: string) => {
  const details: { [key: string]: any } = {
    'aca': {
      id: 'aca',
      icon: Heart,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      title: lang === 'en' ? 'Affordable Care Act (ACA)' : 'Ley de Cuidado de Salud Asequible (ACA)',
      subtitle: lang === 'en' ? 'Comprehensive Health Coverage for Everyone' : 'Cobertura de Salud Integral para Todos',
      description: lang === 'en' 
        ? 'The Affordable Care Act provides quality health insurance through the Health Insurance Marketplace with potential subsidies to lower your costs. Get comprehensive coverage that includes essential health benefits, preventive care, and protection for pre-existing conditions.'
        : 'La Ley de Cuidado de Salud Asequible proporciona seguro médico de calidad a través del Mercado de Seguros de Salud con posibles subsidios para reducir sus costos. Obtenga cobertura integral que incluye beneficios de salud esenciales, atención preventiva y protección para condiciones preexistentes.',
      
      keyFeatures: lang === 'en' ? [
        'Preventive care at no cost',
        'Pre-existing conditions covered',
        'Essential health benefits',
        'Subsidies available based on income',
        'No annual or lifetime limits',
        'Young adults can stay on parent\'s plan until 26'
      ] : [
        'Atención preventiva sin costo',
        'Condiciones preexistentes cubiertas',
        'Beneficios de salud esenciales',
        'Subsidios disponibles según ingresos',
        'Sin límites anuales o de por vida',
        'Los adultos jóvenes pueden permanecer en el plan de sus padres hasta los 26'
      ],
      
      coverageDetails: {
        title: lang === 'en' ? 'What\'s Covered' : 'Qué Está Cubierto',
        items: lang === 'en' ? [
          'Doctor visits and hospital stays',
          'Emergency services',
          'Prescription drugs',
          'Laboratory services',
          'Mental health and substance abuse treatment',
          'Maternity and newborn care',
          'Pediatric services including dental and vision',
          'Rehabilitative services and devices'
        ] : [
          'Visitas al médico y estancias hospitalarias',
          'Servicios de emergencia',
          'Medicamentos recetados',
          'Servicios de laboratorio',
          'Tratamiento de salud mental y abuso de sustancias',
          'Atención de maternidad y recién nacidos',
          'Servicios pediátricos incluyendo dental y visión',
          'Servicios y dispositivos de rehabilitación'
        ]
      },
      
      eligibility: {
        title: lang === 'en' ? 'Who Can Apply' : 'Quién Puede Aplicar',
        items: lang === 'en' ? [
          'U.S. citizens and legal residents',
          'Not currently incarcerated',
          'Not enrolled in Medicare',
          'Income between 100% - 400% of Federal Poverty Level for subsidies'
        ] : [
          'Ciudadanos estadounidenses y residentes legales',
          'No estar actualmente encarcelado',
          'No estar inscrito en Medicare',
          'Ingresos entre 100% - 400% del Nivel Federal de Pobreza para subsidios'
        ]
      },
      
      pricingPlans: [
        {
          name: lang === 'en' ? 'Bronze Plan' : 'Plan Bronce',
          price: '$150',
          period: lang === 'en' ? '/month' : '/mes',
          features: lang === 'en' ? [
            '60% coverage after deductible',
            'Lower monthly premiums',
            'Higher out-of-pocket costs',
            'Free preventive care'
          ] : [
            '60% de cobertura después del deducible',
            'Primas mensuales más bajas',
            'Costos de bolsillo más altos',
            'Atención preventiva gratuita'
          ]
        },
        {
          name: lang === 'en' ? 'Silver Plan' : 'Plan Plata',
          price: '$250',
          period: lang === 'en' ? '/month' : '/mes',
          recommended: true,
          features: lang === 'en' ? [
            '70% coverage after deductible',
            'Moderate monthly premiums',
            'Moderate out-of-pocket costs',
            'Cost-sharing reductions available'
          ] : [
            '70% de cobertura después del deducible',
            'Primas mensuales moderadas',
            'Costos de bolsillo moderados',
            'Reducciones de costos compartidos disponibles'
          ]
        },
        {
          name: lang === 'en' ? 'Gold Plan' : 'Plan Oro',
          price: '$350',
          period: lang === 'en' ? '/month' : '/mes',
          features: lang === 'en' ? [
            '80% coverage after deductible',
            'Higher monthly premiums',
            'Lower out-of-pocket costs',
            'Best for frequent medical care'
          ] : [
            '80% de cobertura después del deducible',
            'Primas mensuales más altas',
            'Costos de bolsillo más bajos',
            'Mejor para atención médica frecuente'
          ]
        }
      ],
      
      faqs: [
        {
          question: lang === 'en' ? 'When can I enroll in ACA coverage?' : '¿Cuándo puedo inscribirme en la cobertura ACA?',
          answer: lang === 'en' 
            ? 'You can enroll during the annual Open Enrollment Period (November 1 - January 15) or during a Special Enrollment Period if you qualify due to a life event like marriage, birth, or loss of other coverage.'
            : 'Puede inscribirse durante el Período de Inscripción Abierta anual (1 de noviembre - 15 de enero) o durante un Período de Inscripción Especial si califica debido a un evento de vida como matrimonio, nacimiento o pérdida de otra cobertura.'
        },
        {
          question: lang === 'en' ? 'How do subsidies work?' : '¿Cómo funcionan los subsidios?',
          answer: lang === 'en'
            ? 'Subsidies are tax credits that lower your monthly premium based on your household income and family size. They are available for those earning between 100% and 400% of the Federal Poverty Level.'
            : 'Los subsidios son créditos fiscales que reducen su prima mensual según los ingresos de su hogar y el tamaño de la familia. Están disponibles para aquellos que ganan entre el 100% y el 400% del Nivel Federal de Pobreza.'
        },
        {
          question: lang === 'en' ? 'What if I have pre-existing conditions?' : '¿Qué pasa si tengo condiciones preexistentes?',
          answer: lang === 'en'
            ? 'Under the ACA, insurance companies cannot deny coverage or charge higher premiums based on pre-existing conditions. All plans must cover treatment for pre-existing conditions from day one.'
            : 'Bajo la ACA, las compañías de seguros no pueden negar cobertura o cobrar primas más altas basadas en condiciones preexistentes. Todos los planes deben cubrir el tratamiento de condiciones preexistentes desde el primer día.'
        }
      ]
    },
    
    'medicare': {
      id: 'medicare',
      icon: Shield,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      title: 'Medicare',
      subtitle: lang === 'en' ? 'Federal Health Insurance for Seniors' : 'Seguro de Salud Federal para Personas Mayores',
      description: lang === 'en'
        ? 'Medicare is federal health insurance for people 65 or older, and some people under 65 with certain disabilities or conditions. We help you navigate the complexities of Medicare to find the right coverage.'
        : 'Medicare es un seguro de salud federal para personas de 65 años o más, y algunas personas menores de 65 años con ciertas discapacidades o condiciones. Le ayudamos a navegar las complejidades de Medicare para encontrar la cobertura adecuada.',
      
      keyFeatures: lang === 'en' ? [
        'Hospital Insurance (Part A)',
        'Medical Insurance (Part B)',
        'Prescription Drug Coverage (Part D)',
        'Medicare Advantage Plans (Part C)',
        'Supplement Insurance (Medigap)'
      ] : [
        'Seguro Hospitalario (Parte A)',
        'Seguro Médico (Parte B)',
        'Cobertura de Medicamentos Recetados (Parte D)',
        'Planes Medicare Advantage (Parte C)',
        'Seguro Suplementario (Medigap)'
      ],
      
      coverageDetails: {
        title: lang === 'en' ? 'Medicare Parts Explained' : 'Partes de Medicare Explicadas',
        items: lang === 'en' ? [
          'Part A: Hospital stays, skilled nursing, hospice care',
          'Part B: Doctor visits, outpatient care, preventive services',
          'Part C: Medicare Advantage combines A, B, and usually D',
          'Part D: Prescription drug coverage'
        ] : [
          'Parte A: Estancias hospitalarias, enfermería especializada, cuidados paliativos',
          'Parte B: Visitas al médico, atención ambulatoria, servicios preventivos',
          'Parte C: Medicare Advantage combina A, B, y generalmente D',
          'Parte D: Cobertura de medicamentos recetados'
        ]
      },
      
      eligibility: {
        title: lang === 'en' ? 'Eligibility Requirements' : 'Requisitos de Elegibilidad',
        items: lang === 'en' ? [
          'Age 65 or older',
          'Under 65 with certain disabilities',
          'Any age with End-Stage Renal Disease (ESRD)',
          'Any age with ALS (Lou Gehrig\'s disease)'
        ] : [
          '65 años o más',
          'Menor de 65 con ciertas discapacidades',
          'Cualquier edad con Enfermedad Renal en Etapa Terminal (ESRD)',
          'Cualquier edad con ELA (enfermedad de Lou Gehrig)'
        ]
      },
      
      pricingPlans: [
        {
          name: lang === 'en' ? 'Original Medicare' : 'Medicare Original',
          price: '$0-170',
          period: lang === 'en' ? '/month' : '/mes',
          features: lang === 'en' ? [
            'Part A: Usually free if worked 40+ quarters',
            'Part B: Standard premium $170/month',
            '80% coverage after deductible',
            'Freedom to see any doctor'
          ] : [
            'Parte A: Generalmente gratis si trabajó 40+ trimestres',
            'Parte B: Prima estándar $170/mes',
            '80% de cobertura después del deducible',
            'Libertad para ver cualquier médico'
          ]
        },
        {
          name: lang === 'en' ? 'Medicare + Supplement' : 'Medicare + Suplemento',
          price: '$270-420',
          period: lang === 'en' ? '/month' : '/mes',
          recommended: true,
          features: lang === 'en' ? [
            'Original Medicare coverage',
            'Medigap fills coverage gaps',
            'Predictable out-of-pocket costs',
            'No network restrictions'
          ] : [
            'Cobertura de Medicare Original',
            'Medigap llena los vacíos de cobertura',
            'Costos de bolsillo predecibles',
            'Sin restricciones de red'
          ]
        }
      ],
      
      faqs: [
        {
          question: lang === 'en' ? 'When should I enroll in Medicare?' : '¿Cuándo debo inscribirme en Medicare?',
          answer: lang === 'en'
            ? 'Your Initial Enrollment Period starts 3 months before your 65th birthday month and ends 3 months after. Missing this window may result in penalties.'
            : 'Su Período de Inscripción Inicial comienza 3 meses antes del mes de su cumpleaños 65 y termina 3 meses después. Perder esta ventana puede resultar en penalizaciones.'
        },
        {
          question: lang === 'en' ? 'Do I need Part D if I have other drug coverage?' : '¿Necesito la Parte D si tengo otra cobertura de medicamentos?',
          answer: lang === 'en'
            ? 'If you have creditable drug coverage from another source (like employer insurance), you may not need Part D. However, ensure your coverage is considered creditable to avoid penalties.'
            : 'Si tiene cobertura de medicamentos acreditable de otra fuente (como seguro del empleador), puede que no necesite la Parte D. Sin embargo, asegúrese de que su cobertura se considere acreditable para evitar penalizaciones.'
        }
      ]
    },
    
    'term-life': {
      id: 'term-life',
      icon: Users,
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      title: lang === 'en' ? 'Term Life Insurance' : 'Seguro de Vida a Término',
      subtitle: lang === 'en' ? 'Affordable Protection for Your Loved Ones' : 'Protección Asequible para Sus Seres Queridos',
      description: lang === 'en'
        ? 'Term life insurance provides pure life insurance protection for a specific period at the most affordable rates. Perfect for protecting your family during your working years.'
        : 'El seguro de vida a término proporciona protección de seguro de vida pura por un período específico a las tarifas más asequibles. Perfecto para proteger a su familia durante sus años de trabajo.',
      
      keyFeatures: lang === 'en' ? [
        'Coverage for 10, 20, or 30 years',
        'Fixed premiums for entire term',
        'Death benefit paid tax-free',
        'Convertible to permanent insurance',
        'No cash value accumulation',
        'Most affordable life insurance option'
      ] : [
        'Cobertura por 10, 20 o 30 años',
        'Primas fijas durante todo el término',
        'Beneficio por muerte pagado libre de impuestos',
        'Convertible a seguro permanente',
        'Sin acumulación de valor en efectivo',
        'Opción de seguro de vida más asequible'
      ],
      
      coverageDetails: {
        title: lang === 'en' ? 'Coverage Options' : 'Opciones de Cobertura',
        items: lang === 'en' ? [
          'Death benefit from $100,000 to $2 million+',
          'Level term (same coverage amount)',
          'Decreasing term (for mortgage protection)',
          'Return of premium options',
          'Riders for disability or critical illness'
        ] : [
          'Beneficio por muerte desde $100,000 hasta $2 millones+',
          'Término nivelado (misma cantidad de cobertura)',
          'Término decreciente (para protección hipotecaria)',
          'Opciones de devolución de prima',
          'Cláusulas adicionales para discapacidad o enfermedad crítica'
        ]
      },
      
      eligibility: {
        title: lang === 'en' ? 'Who Should Consider Term Life' : 'Quién Debería Considerar Vida a Término',
        items: lang === 'en' ? [
          'Young families with children',
          'Homeowners with mortgages',
          'Business owners and partners',
          'Anyone with financial dependents',
          'Those seeking maximum coverage at minimum cost'
        ] : [
          'Familias jóvenes con hijos',
          'Propietarios con hipotecas',
          'Dueños de negocios y socios',
          'Cualquiera con dependientes financieros',
          'Aquellos que buscan máxima cobertura al mínimo costo'
        ]
      },
      
      pricingPlans: [
        {
          name: lang === 'en' ? '10-Year Term' : 'Término de 10 Años',
          price: '$20',
          period: lang === 'en' ? '/month' : '/mes',
          features: lang === 'en' ? [
            '$250,000 coverage',
            'Healthy 35-year-old',
            'Fixed premium for 10 years',
            'Convertible to permanent'
          ] : [
            '$250,000 de cobertura',
            'Persona saludable de 35 años',
            'Prima fija por 10 años',
            'Convertible a permanente'
          ]
        },
        {
          name: lang === 'en' ? '20-Year Term' : 'Término de 20 Años',
          price: '$35',
          period: lang === 'en' ? '/month' : '/mes',
          recommended: true,
          features: lang === 'en' ? [
            '$500,000 coverage',
            'Healthy 35-year-old',
            'Fixed premium for 20 years',
            'Most popular choice'
          ] : [
            '$500,000 de cobertura',
            'Persona saludable de 35 años',
            'Prima fija por 20 años',
            'Opción más popular'
          ]
        },
        {
          name: lang === 'en' ? '30-Year Term' : 'Término de 30 Años',
          price: '$55',
          period: lang === 'en' ? '/month' : '/mes',
          features: lang === 'en' ? [
            '$500,000 coverage',
            'Healthy 35-year-old',
            'Fixed premium for 30 years',
            'Maximum term length'
          ] : [
            '$500,000 de cobertura',
            'Persona saludable de 35 años',
            'Prima fija por 30 años',
            'Duración máxima del término'
          ]
        }
      ],
      
      faqs: [
        {
          question: lang === 'en' ? 'What happens when my term ends?' : '¿Qué pasa cuando termina mi término?',
          answer: lang === 'en'
            ? 'You have several options: convert to permanent insurance without a medical exam, renew for another term (at higher rates), or let the coverage end if no longer needed.'
            : 'Tiene varias opciones: convertir a seguro permanente sin examen médico, renovar por otro término (a tarifas más altas), o dejar que la cobertura termine si ya no es necesaria.'
        },
        {
          question: lang === 'en' ? 'Can I increase my coverage later?' : '¿Puedo aumentar mi cobertura más tarde?',
          answer: lang === 'en'
            ? 'You can purchase additional policies, but they will be priced based on your age and health at that time. Some policies offer riders that allow you to increase coverage at specific life events.'
            : 'Puede comprar pólizas adicionales, pero se cotizarán según su edad y salud en ese momento. Algunas pólizas ofrecen cláusulas que le permiten aumentar la cobertura en eventos específicos de la vida.'
        }
      ]
    }
  }
  
  return details[slug] || null
}