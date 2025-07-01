// Extend the Window interface to include Google Analytics and Facebook Pixel
declare global {
  interface Window {
    // Google Analytics
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    
    // Facebook Pixel
    fbq: (...args: any[]) => void;
    
    // Add other third-party tracking scripts here
  }
}

export {}; // This file needs to be a module
