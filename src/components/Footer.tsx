import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Footer as UIFooter } from '@/components/ui/footer';

const FooterWrapper = () => {
  const socialLinks = [
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
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/socialsync",
      label: "Instagram",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/socialsync",
      label: "GitHub",
    },
  ];

  const mainLinks = [
    { href: "/businesses", label: "Services" },
    { href: "/team", label: "About Us" },
    { href: "/team", label: "Contact" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Resources" },
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
  );
};

export default FooterWrapper;