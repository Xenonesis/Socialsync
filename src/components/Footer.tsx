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
    { href: "#", label: "Blog" },
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
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {logo}
              <span className="text-xl font-bold text-foreground">Social Sync</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional web development and social media management services.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
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
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Social Sync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterWrapper;