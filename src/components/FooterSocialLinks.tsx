import React from 'react';
import { Instagram, MessageCircle, Twitter, Linkedin } from 'lucide-react';

const FooterSocialLinks = () => {
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

  return (
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
  );
};

export default FooterSocialLinks;
