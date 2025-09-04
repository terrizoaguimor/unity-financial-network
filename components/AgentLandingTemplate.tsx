'use client'

import { ReactNode } from 'react'

export interface AgentData {
  name: string
  title: {
    en: string
    es: string
  }
  license: string
  photo?: string
  bio: {
    en: string
    es: string
  }
  specializations: {
    en: string[]
    es: string[]
  }
  languages: string[]
  phone: string
  email: string
  whatsapp?: string
  schedule: {
    en: string
    es: string
  }
  social?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    youtube?: string
    twitter?: string
  }
  customContent?: ReactNode
}

interface AgentService {
  icon: any
  title: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  color: string
}

interface AgentTestimonial {
  name: string
  rating: number
  text: {
    en: string
    es: string
  }
  image?: string
}

interface AgentStats {
  number: string
  label: {
    en: string
    es: string
  }
  icon: any
}

export interface AgentPageConfig {
  agent: AgentData
  services: AgentService[]
  testimonials?: AgentTestimonial[]
  stats?: AgentStats[]
  customSections?: ReactNode
}

// This template can be used to quickly create new agent pages
// Just import and pass the agent configuration