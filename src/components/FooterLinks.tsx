import React from 'react';

const FooterLinks = () => {
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

  return (
    <>
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
    </>
  );
};

export default FooterLinks;
