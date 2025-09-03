'use client';

import { useIntercom } from 'react-use-intercom';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function IntercomWidget() {
  const { boot, show } = useIntercom();
  const { language } = useLanguage();

  useEffect(() => {
    // Boot Intercom when component mounts
    boot();
  }, [boot]);

  const handleShowChat = () => {
    show();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleShowChat}
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label={language === 'es' ? 'Abrir chat en vivo' : 'Open live chat'}
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
          {language === 'es' ? '💬 ¿Necesitas ayuda?' : '💬 Need help?'}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
}