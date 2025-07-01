export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const COOKIE_CONSENT_KEY = 'cookie_consent';
export const COOKIE_BANNER_KEY = 'cookie_banner_seen';
