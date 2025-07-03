import React from 'react';

const FooterLogo = () => {
  const logo = (
    <div 
      className="w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, hsl(15 85% 55%) 0%, hsl(25 90% 60%) 100%)' }}
    >
      <span className="text-white font-bold text-lg">SS</span>
    </div>
  );

  return (
    <div className="space-y-3 xs:space-y-4 xs:col-span-2 md:col-span-1">
      <div className="flex items-center space-x-3">
        {logo}
        <span className="text-lg xs:text-xl font-bold text-foreground">Social Sync</span>
      </div>
      <p className="text-muted-foreground text-xs xs:text-sm leading-relaxed">
        Professional web development and social media management services.
      </p>
    </div>
  );
};

export default FooterLogo;
