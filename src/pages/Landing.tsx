import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Landing = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const features = [
    {
      title: "Social Media Strategy",
      description: "Comprehensive planning and execution of social media campaigns tailored to your brand's unique voice and goals.",
      icon: "📱",
    },
    {
      title: "Brand Management",
      description: "Consistent brand identity across all platforms with professional content creation and community management.",
      icon: "🎨",
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and detailed performance reports to optimize your social media ROI and growth.",
      icon: "📊",
    },
  ];

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and insights.",
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Your social media growth partner</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Sync Your Business with{' '}
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span 
                    className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent font-extrabold"
                  >
                    AI-powered
                  </span>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
                {' '}social strategies
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                This isn't just another social media service. It's an intelligent growth platform that adapts to you, tracks your progress, and evolves with every campaign.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                    asChild
                  >
                    <Link to="/businesses" className="flex items-center space-x-2">
                      <span>Try it now</span>
                      <svg 
                        width="18" 
                        height="18" 
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
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="ghost" 
                    size="lg"
                    className="rounded-full px-8 py-4 text-lg font-medium hover:bg-white/20 transition-all duration-200"
                    asChild
                  >
                    <Link to="/team" className="flex items-center space-x-2">
                      <span>Build your path</span>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">Social growth score</h3>
                    <span className="text-sm text-muted-foreground">Analytics & Strategy</span>
                  </div>
                  
                  <div className="text-6xl font-bold text-foreground">92%</div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'Engagement', value: 66, color: 'bg-blue-400' },
                      { label: 'Reach', value: 87, color: 'bg-green-400' },
                      { label: 'Growth', value: 92, color: 'bg-accent' },
                      { label: 'Strategy', value: 72, color: 'bg-orange-400' }
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-xs text-muted-foreground mb-2">{metric.label}</div>
                        <div className="text-sm font-semibold text-foreground">{metric.value}%</div>
                        <motion.div 
                          className={`h-16 ${metric.color} rounded-lg mt-2`}
                          initial={{ height: 0 }}
                          animate={{ height: metric.value * 0.6 + 20 }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AI
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="text-xs font-medium text-foreground">Track</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-feature">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your brand's social media presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-card-gradient border-0 shadow-soft hover:shadow-feature transition-all duration-300">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-2xl text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest insights, tips, and updates on social media trends and strategies
            </p>
            
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" size="lg" className="px-8">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;