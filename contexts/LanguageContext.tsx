/**
 * @fileoverview Language Context for Unity Financial Network bilingual support
 * 
 * This context provides internationalization (i18n) functionality for the entire
 * application, supporting English and Spanish languages with persistent storage.
 * 
 * Features:
 * - Bilingual support (English/Spanish)
 * - Persistent language preference via localStorage
 * - Type-safe language switching
 * - Automatic language restoration on app reload
 * - Global accessibility through React Context
 * 
 * The language context is used throughout the application to:
 * - Display content in the user's preferred language
 * - Switch between languages dynamically
 * - Maintain language preference across sessions
 * 
 * @author Unity Financial Network Development Team
 * @version 4.0
 */

'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

/**
 * Supported language types for the application
 * @typedef {'en' | 'es'} Language
 */
type Language = 'en' | 'es'

/**
 * Language context interface defining available methods and state
 * 
 * @interface LanguageContextType
 * @property {Language} language - Current active language
 * @property {function} setLanguage - Function to change the active language
 */
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

/**
 * React context for language state management
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * Language Provider Component
 * 
 * Provides language context to all child components and manages:
 * 1. Current language state (default: English)
 * 2. Language persistence via localStorage
 * 3. Language switching functionality
 * 4. Automatic language restoration on app initialization
 * 
 * The provider automatically loads the user's preferred language from
 * localStorage on mount and saves any language changes for future sessions.
 * 
 * @param props - Component properties
 * @param props.children - Child components that will have access to language context
 * @returns JSX provider element wrapping children with language context
 * 
 * @example
 * ```tsx
 * <LanguageProvider>
 *   <App />
 * </LanguageProvider>
 * ```
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize with English as default language
  const [language, setLanguage] = useState<Language>('en')

  /**
   * Effect to restore saved language preference from localStorage
   * Runs once on component mount to check for existing language preference
   */
  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  /**
   * Language change handler with persistence
   * 
   * Updates the current language state and saves the preference
   * to localStorage for future sessions.
   * 
   * @param lang - The new language to set ('en' | 'es')
   */
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('preferredLanguage', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Language Context Hook
 * 
 * Custom hook to access the language context from any component.
 * Must be used within a LanguageProvider wrapper.
 * 
 * Provides access to:
 * - Current language state
 * - Language switching function
 * 
 * @returns {LanguageContextType} Language context object with current language and setter
 * @throws {Error} When used outside of LanguageProvider
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { language, setLanguage } = useLanguage()
 *   
 *   return (
 *     <div>
 *       <p>Current language: {language}</p>
 *       <button onClick={() => setLanguage('es')}>
 *         Switch to Spanish
 *       </button>
 *     </div>
 *   )
 * }
 * ```
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}