'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: any;
  }
}

export default function IntercomScript() {
  const { language } = useLanguage();
  const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID || 'zqj106zj';

  useEffect(() => {
    // Intercom script injection
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    `;
    document.head.appendChild(script);

    // Initialize Intercom
    window.intercomSettings = {
      app_id: INTERCOM_APP_ID,
      language_override: language === 'es' ? 'es' : 'en',
    };

    // Boot Intercom
    if (window.Intercom) {
      window.Intercom('boot', window.intercomSettings);
    }

    return () => {
      // Cleanup
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [INTERCOM_APP_ID, language]);

  // Update language when it changes
  useEffect(() => {
    if (window.Intercom) {
      window.Intercom('update', {
        language_override: language === 'es' ? 'es' : 'en'
      });
    }
  }, [language]);

  return null; // This component doesn't render anything
}