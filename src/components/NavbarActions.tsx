import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

const NavbarActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <ThemeToggle />
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button 
          variant="default" 
          size="sm" 
          className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-6 py-2 font-medium transition-all duration-200"
          asChild
        >
          <Link to="/team" className="flex items-center space-x-2">
            <span>Get Started</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NavbarActions;
