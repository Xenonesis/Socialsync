import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';
import { ThemeToggle } from '@/components/theme-toggle';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Businesses', url: '/businesses', icon: Building2 },
    { name: 'Team & Contact', url: '/team', icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

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
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, hsl(15 85% 55%) 0%, hsl(25 90% 60%) 100%)' }}
              >
                <span className="text-white font-bold text-lg">SS</span>
              </motion.div>
              <span className="text-2xl font-bold text-foreground">Social Sync</span>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  className={`relative text-sm font-medium transition-all duration-200 ${
                    isActive(item.url) 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {isActive(item.url) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'hsl(var(--warm-accent))' }}
                    />
                  )}
                </Link>
              ))}
            </div>

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
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, hsl(15 85% 55%) 0%, hsl(25 90% 60%) 100%)' }}
              >
                <span className="text-white font-bold text-sm">SS</span>
              </motion.div>
              <span className="text-xl font-bold text-foreground">Social Sync</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;