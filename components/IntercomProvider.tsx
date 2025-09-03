'use client';

import { IntercomProvider as IntercomProviderBase } from 'react-use-intercom';
import { ReactNode } from 'react';

interface IntercomProviderProps {
  children: ReactNode;
}

export default function IntercomProvider({ children }: IntercomProviderProps) {
  const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID || 'zqj106zj';

  return (
    <IntercomProviderBase appId={INTERCOM_APP_ID} shouldInitialize={true}>
      {children}
    </IntercomProviderBase>
  );
}