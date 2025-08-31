'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { useLanguage } from '@/contexts/LanguageContext'

interface TurnstileWidgetProps {
  onVerify: (token: string) => void
  onError?: () => void
  onExpire?: () => void
}

export default function TurnstileWidget({ onVerify, onError, onExpire }: TurnstileWidgetProps) {
  const { language } = useLanguage()
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAABxARgHmGCOgbqUe'

  return (
    <div className="flex flex-col items-center gap-2 my-4">
      <Turnstile
        siteKey={siteKey}
        onSuccess={onVerify}
        onError={onError}
        onExpire={onExpire}
        options={{
          theme: 'light',
          size: 'normal',
          action: 'submit-form',
          language: language === 'es' ? 'es' : 'en'
        }}
      />
      <p className="text-xs text-gray-500 text-center">
        {language === 'en' 
          ? 'Please verify you are human to continue.' 
          : 'Por favor verifica que eres humano para continuar.'}
      </p>
    </div>
  )
}