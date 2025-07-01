import { CookieConsent } from '@/contexts/CookieConsentContext';

// Track page views if analytics is enabled
export const trackPageView = (path: string, consent: CookieConsent) => {
  if (typeof window !== 'undefined' && consent.analytics) {
    // Replace with your actual analytics tracking code
    console.log(`[Analytics] Page view: ${path}`);
    
    // Example: Google Analytics
    if (window.gtag) {
      window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
        page_path: path,
      });
    }
  }
};

// Track events if analytics is enabled
export const trackEvent = (eventName: string, eventParams: Record<string, any>, consent: CookieConsent) => {
  if (typeof window !== 'undefined' && consent.analytics) {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
    
    // Example: Google Analytics event tracking
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  }
};

// Initialize marketing pixels if marketing consent is given
export const initializeMarketingPixels = (consent: CookieConsent) => {
  if (typeof window === 'undefined' || !consent.marketing) return;

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('init', 'YOUR_FB_PIXEL_ID');
    window.fbq('track', 'PageView');
  }

  // Add other marketing pixels here
};

// Set up event listeners for tracking
const setupEventListeners = (consent: CookieConsent) => {
  if (typeof window === 'undefined') return;

  // Track outbound links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href && link.hostname !== window.location.hostname) {
      trackEvent('outbound_click', {
        url: link.href,
        text: link.innerText,
      }, consent);
    }
  });

  // Track form submissions
  document.addEventListener('submit', (e) => {
    const form = e.target as HTMLFormElement;
    if (form.tagName === 'FORM') {
      trackEvent('form_submit', {
        form_id: form.id || 'unnamed_form',
        form_action: form.action || 'unknown',
      }, consent);
    }
  });
};

// Initialize all tracking
export const initializeTracking = (consent: CookieConsent) => {
  if (typeof window === 'undefined') return;

  // Initialize analytics
  if (consent.analytics) {
    // Initialize Google Analytics if not already loaded
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
      });
    }
  }

  // Initialize marketing pixels
  if (consent.marketing) {
    initializeMarketingPixels(consent);
  }

  // Set up event listeners
  setupEventListeners(consent);
};

// Get user's consent status
export const getConsentStatus = (): CookieConsent => {
  if (typeof window === 'undefined') {
    return {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
  }

  const savedConsent = localStorage.getItem('cookie_consent');
  return savedConsent 
    ? JSON.parse(savedConsent)
    : {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
      };
};
