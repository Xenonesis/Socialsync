import React from 'react';
import { Github, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const FooterWrapper = () => {

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/Social Sync",
      label: "Instagram",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/message/GDKO46FNFXKBC1",
      label: "WhatsApp",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/Social Sync",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/Social Sync",
      label: "LinkedIn",
    },
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/businesses", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/team", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
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
    <footer className="bg-muted/50 py-6 xs:py-8 sm:py-12">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          <div className="space-y-3 xs:space-y-4 xs:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3">
              {logo}
              <span className="text-lg xs:text-xl font-bold text-foreground">Social Sync</span>
            </div>
            <p className="text-muted-foreground text-xs xs:text-sm leading-relaxed">
              Professional web development and social media management services.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base">Quick Links</h3>
            <ul className="space-y-1.5 xs:space-y-2">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base">Legal</h3>
            <ul className="space-y-1.5 xs:space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="xs:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-foreground mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base">Follow Us</h3>
            <div className="flex space-x-3 xs:space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
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