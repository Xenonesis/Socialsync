import React from 'react';
import { Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterSocialLinks from './FooterSocialLinks';

const FooterWrapper = () => {
  return (
    <footer className="bg-muted/50 py-6 xs:py-8 sm:py-12">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          <FooterLogo />
          <FooterLinks />
          <FooterSocialLinks />
        </div>
        
        <div className="border-t border-border mt-6 xs:mt-8 pt-4 xs:pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-xs xs:text-sm">
            © 2025 Social Sync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;
