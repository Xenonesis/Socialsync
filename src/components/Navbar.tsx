import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Users } from 'lucide-react';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarActions from './NavbarActions';

const Navbar = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Businesses', url: '/businesses', icon: Building2 },
    { name: 'Team & Contact', url: '/team', icon: Users },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 md:block hidden"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <NavbarLogo />
            <NavbarLinks />
            <NavbarActions />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Tubelight Navbar */}
      <div className="md:hidden">
        <TubelightNavBar items={navItems} />
      </div>

      {/* Mobile Header with Logo and Theme Toggle */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-b border-border/50 md:hidden"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <NavbarLogo isMobile={true} />
            <NavbarActions />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
