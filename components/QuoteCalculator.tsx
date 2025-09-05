'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { X, Plus, Minus, Users, Calculator, ChevronRight } from 'lucide-react'

interface Person {
  id: number
  type: 'you' | 'spouse' | 'dependent'
  age: string
  needsCoverage: boolean
  usesTobacco: boolean
}

export default function QuoteCalculator({ onClose }: { onClose?: () => void }) {
  const { language } = useLanguage()
  const [step, setStep] = useState(1)
  const [people, setPeople] = useState<Person[]>([
    { id: 1, type: 'you', age: '', needsCoverage: true, usesTobacco: false }
  ])
  const [income, setIncome] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [coverageYear, setCoverageYear] = useState('2025')
  const [errors, setErrors] = useState<string[]>([])

  const addPerson = (type: 'spouse' | 'dependent') => {
    const newId = Math.max(...people.map(p => p.id)) + 1
    setPeople([...people, {
      id: newId,
      type,
      age: '',
      needsCoverage: false,
      usesTobacco: false
    }])
  }

  const removePerson = (id: number) => {
    setPeople(people.filter(p => p.id !== id))
  }

  const updatePerson = (id: number, updates: Partial<Person>) => {
    setPeople(people.map(p => 
      p.id === id ? { ...p, ...updates } : p
    ))
  }

  const validateForm = () => {
    const newErrors = []
    
    const you = people.find(p => p.type === 'you')
    if (!you?.age) {
      newErrors.push(language === 'es' ? 'La edad es requerida' : 'Age is required')
    }
    
    if (!income) {
      newErrors.push(language === 'es' ? 'El ingreso anual es requerido' : 'Annual income is required')
    }
    
    if (!zipCode || zipCode.length !== 5) {
      newErrors.push(language === 'es' ? 'Código postal válido requerido' : 'Valid zip code required')
    }
    
    const hasAnyCoverage = people.some(p => p.needsCoverage)
    if (!hasAnyCoverage) {
      newErrors.push(language === 'es' ? 'Al menos una persona necesita cobertura' : 'At least one person needs coverage')
    }

    people.forEach(person => {
      if (person.age && (parseInt(person.age) < 0 || parseInt(person.age) > 120)) {
        newErrors.push(language === 'es' ? 'Edad inválida' : 'Invalid age')
      }
    })

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    // Build ACA marketplace URL with parameters
    const params = {
      people: people.map(p => ({
        age: p.age,
        uses_tobacco: p.usesTobacco,
        has_mec: !p.needsCoverage,
        is_pregnant: false,
        is_parent: false,
        aptc_eligible: true,
        isPrincipal: p.type === 'you',
        isSpouse: p.type === 'spouse',
        isDependent: p.type === 'dependent'
      })),
      income,
      zip: zipCode,
      year: coverageYear
    }

    // Redirect to ACA marketplace or Unity's quote system
    const url = `https://aca.enterate.com/site/enterate/find-plan?data=${encodeURIComponent(JSON.stringify(params))}`
    window.open(url, '_blank')
    
    if (onClose) onClose()
  }

  return (
    <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-primary-800">
            {language === 'es' ? '¿Quién está en su hogar?' : 'Who is in your household?'}
          </h2>
          <p className="text-gray-600 mt-2">
            {language === 'es' 
              ? 'Inclúyase a usted mismo, a su cónyuge y a todas las personas que declarará como dependientes en su declaración de impuestos.'
              : 'Include yourself, your spouse, and everyone you\'ll claim as a dependent on your tax return.'
            }
          </p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <ul className="list-disc list-inside text-red-600">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* People List */}
      <div className="space-y-4 mb-6">
        {people.map((person) => (
          <div key={person.id} className="bg-primary/5 rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-primary-700">
                {person.type === 'you' ? (language === 'es' ? 'Usted' : 'You') :
                 person.type === 'spouse' ? (language === 'es' ? 'Esposo(a)' : 'Spouse') :
                 `${language === 'es' ? 'Dependiente' : 'Dependent'} ${people.filter(p => p.type === 'dependent').findIndex(p => p.id === person.id) + 1}`}
              </h3>
              {person.type !== 'you' && (
                <button
                  onClick={() => removePerson(person.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'es' ? 'Edad *' : 'Age *'}
                </label>
                <input
                  type="number"
                  value={person.age}
                  onChange={(e) => updatePerson(person.id, { age: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  min="0"
                  max="120"
                />
              </div>

              <div className="flex items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={person.needsCoverage}
                    onChange={(e) => updatePerson(person.id, { needsCoverage: e.target.checked })}
                    className="w-4 h-4 text-primary-600 rounded"
                  />
                  <span className="text-sm">
                    {language === 'es' ? 'Necesita Cobertura' : 'Needs Coverage'}
                  </span>
                </label>
              </div>

              <div className="flex items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={person.usesTobacco}
                    onChange={(e) => updatePerson(person.id, { usesTobacco: e.target.checked })}
                    className="w-4 h-4 text-primary-600 rounded"
                  />
                  <span className="text-sm">
                    {language === 'es' ? 'Fumador' : 'Tobacco User'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add People Buttons */}
      <div className="flex gap-4 mb-6">
        {!people.find(p => p.type === 'spouse') && (
          <button
            onClick={() => addPerson('spouse')}
            className="flex items-center gap-2 px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {language === 'es' ? 'Agregar Esposo(a)' : 'Add Spouse'}
          </button>
        )}
        
        {people.filter(p => p.type === 'dependent').length < 8 && (
          <button
            onClick={() => addPerson('dependent')}
            className="flex items-center gap-2 px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {language === 'es' ? 'Agregar Dependiente' : 'Add Dependent'}
          </button>
        )}
      </div>

      {/* Income and Zip Code */}
      <div className="bg-primary/5 rounded-xl p-4 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'es' ? 'Ingreso Anual del Hogar *' : 'Annual Household Income *'}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="50,000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'es' ? 'Código Postal *' : 'Zip Code *'}
            </label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="33178"
              maxLength={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'es' ? 'Año de Cobertura' : 'Coverage Year'}
            </label>
            <select
              value={coverageYear}
              onChange={(e) => setCoverageYear(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all text-lg"
        >
          <Calculator className="w-6 h-6" />
          {language === 'es' ? 'Ver Planes y Precios' : 'View Plans & Pricing'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}