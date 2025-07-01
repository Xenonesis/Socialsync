import React from 'react';
import { Github, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Footer as UIFooter } from '@/components/ui/footer';

const FooterWrapper = () => {

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/social._.sync?igsh=MWs3N2c0ZGdmOHozaA%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/message/GDKO46FNFXKBC1",
      label: "WhatsApp",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/socialsync",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/socialsync",
      label: "LinkedIn",
    },
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/businesses", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/team", label: "Contact" },
    { href: "#", label: "Blog" },
  ];

  const legalLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ];

  const logo = (
    <div 
      className="w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, hsl(15 85% 55%) 0%, hsl(25 90% 60%) 100%)' }}
    >
      <span className="text-white font-bold text-lg">SS</span>
    </div>
  );

  return (
    <footer className="bg-muted/50">
      <UIFooter
        logo={logo}
        brandName="Social Sync"
        socialLinks={socialLinks}
        mainLinks={mainLinks}
        legalLinks={legalLinks}
        copyright={{
          text: "© 2025 Social Sync",
          license: "All rights reserved",
        }}
      />
    </footer>
  );
};

export default FooterWrapper;