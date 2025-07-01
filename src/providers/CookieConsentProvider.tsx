import React, { useState, useEffect } from 'react';
import { CookieConsentContext } from '@/contexts/CookieConsentContext';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { CookieSettingsModal } from '@/components/CookieSettingsModal';
import { CookieConsent, defaultConsent, COOKIE_CONSENT_KEY, COOKIE_BANNER_KEY } from '@/types/cookieConsent';

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Check for existing consent
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const hasSeenBanner = localStorage.getItem(COOKIE_BANNER_KEY);

    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
    }

    if (!hasSeenBanner) {
      setIsBannerVisible(true);
    }
  }, []);

  const updateConsent = (updates: Partial<CookieConsent>) => {
    const newConsent = {
      ...consent,
      ...updates,
      necessary: true // Always keep necessary cookies enabled
    };
    setConsent(newConsent);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
  };

  const acceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(newConsent);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    localStorage.setItem(COOKIE_BANNER_KEY, 'true');
    setIsBannerVisible(false);
  };

  const rejectAll = () => {
    const newConsent = {
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setConsent(newConsent);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    localStorage.setItem(COOKIE_BANNER_KEY, 'true');
    setIsBannerVisible(false);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeBanner = () => {
    setIsBannerVisible(false);
    localStorage.setItem(COOKIE_BANNER_KEY, 'true');
  };

  const handleSaveSettings = (newConsent: CookieConsent) => {
    updateConsent(newConsent);
    setIsSettingsOpen(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        isBannerVisible,
        updateConsent,
        acceptAll,
        rejectAll,
        openSettings,
        closeBanner,
      }}
    >
      {children}
      {isBannerVisible && (
        <CookieConsentBanner
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onCustomize={openSettings}
          onClose={closeBanner}
        />
      )}
      {isSettingsOpen && (
        <CookieSettingsModal
          consent={consent}
          onSave={handleSaveSettings}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentProvider;
