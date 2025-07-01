import { createContext, useContext } from 'react';
import { CookieConsent } from '@/types/cookieConsent';

export type CookieConsentContextType = {
  consent: CookieConsent;
  isBannerVisible: boolean;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openSettings: () => void;
  closeBanner: () => void;
};

export const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

export default CookieConsentContext;
