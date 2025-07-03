import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavbarLogo = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`w-${isMobile ? '8' : '10'} h-${isMobile ? '8' : '10'} rounded-xl overflow-hidden`}
      >
        <img src="/logo.jpg" alt="Social Sync" className="w-full h-full object-cover" />
      </motion.div>
      <span className={`text-${isMobile ? 'lg sm:text-xl' : 'xl sm:text-2xl'} font-bold text-foreground`}>Social Sync</span>
    </Link>
  );
};

export default NavbarLogo;
