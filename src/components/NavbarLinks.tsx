import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Users } from 'lucide-react';

const NavbarLinks = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Businesses', url: '/businesses', icon: Building2 },
    { name: 'Team & Contact', url: '/team', icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
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
  );
};

export default NavbarLinks;
