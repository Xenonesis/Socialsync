import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { CookieConsentProvider } from "@/providers/CookieConsentProvider";
import { trackPageView, initializeTracking } from "@/utils/tracking";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import Landing from "./pages/Landing";
import Businesses from "./pages/Businesses";
import Team from "./pages/Team";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle page view tracking
const PageViewTracker = () => {
  const location = useLocation();
  const { consent } = useCookieConsent();

  useEffect(() => {
    // Initialize tracking based on consent
    initializeTracking(consent);
    
    // Track page view
    trackPageView(location.pathname + location.search, consent);
  }, [location, consent]);

  return null;
};

const AppContent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/team" element={<Team />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AIAssistant />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="socialsync-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CookieConsentProvider>
            <AppContent />
          </CookieConsentProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
