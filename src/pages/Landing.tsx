import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { FlipWords } from '@/components/ui/flip-words';

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
      title: "Web Development Projects",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies to elevate your online presence.",
      icon: "💻",
    },
    {
      title: "Analytics & Branding",
      description: "Data-driven insights and comprehensive branding solutions to optimize your digital strategy and growth.",
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
                className="inline-flex items-center space-x-2 bg-white/80 dark:bg-card backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Your social media growth partner</span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transform Your Business with{' '}
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span 
                    className="bg-gradient-to-r from-accent via-primary to-orange-500 bg-clip-text text-transparent font-extrabold animate-gradient-shift"
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    Digital Excellence
                  </span>
                  <motion.div
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-accent animate-pulse-glow"
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
              </motion.h1>
              
                            <motion.div 
                className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-white max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span>Professional web development and social media management solutions that deliver</span>
                <span className="inline-block">
                  <FlipWords 
                    words={['exceptional results', 'stunning websites', 'powerful branding', 'digital growth']} 
                    className="text-accent font-semibold mx-1 inline-block" 
                  />
                </span>
                <span>at affordable prices.</span>
              </motion.div>

              <motion.div 
                className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                    <Link to="/businesses">View Our Work</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to="/team" className="text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    Get Started Today
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Card */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="bg-card-gradient shadow-lg border-0 w-full max-w-lg mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex justify-between items-center">
                    <span>Social Growth Score</span>
                    <span className="text-sm font-medium text-muted-foreground">Analytics & Strategy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-7xl font-bold text-foreground mb-4">92%</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="font-semibold text-lg">66%</p>
                        <p className="text-sm text-muted-foreground">Engagement</p>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">87%</p>
                        <p className="text-sm text-muted-foreground">Reach</p>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">92%</p>
                        <p className="text-sm text-muted-foreground">Growth</p>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">72%</p>
                        <p className="text-sm text-muted-foreground">Strategy</p>
                      </div>
                    </div>
                    <div className="h-20 w-full bg-muted/50 rounded-lg p-2 flex items-end gap-2">
                      {[66, 87, 92, 72].map((val, i) => (
                        <motion.div
                          key={i}
                          className="w-1/4 bg-primary rounded-t-md"
                          style={{ height: `${val}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${val}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.1, type: 'spring' }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <motion.div 
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 200 }}
              >
                AI
              </motion.div>

              <motion.div 
                className="absolute -bottom-8 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 lg:-bottom-12 lg:-right-12 bg-white/50 backdrop-blur-md p-4 rounded-2xl shadow-lg dark:bg-card/50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <p className="font-bold">Track</p>
                    <p className="text-xs text-muted-foreground">Real-time analytics</p>
                  </div>
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white/80 hover:bg-white dark:bg-primary dark:hover:bg-primary-hover">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-foreground dark:text-primary-foreground"><path d="m9 18 6-6-6-6"/></svg>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 mobile-padding"
          >
            <motion.h2 
              className="responsive-heading font-bold text-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Core Services
            </motion.h2>
            <motion.p 
              className="responsive-text text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive digital solutions designed to transform your business presence and drive measurable growth
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mobile-padding">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-soft hover:shadow-feature transition-all duration-500 hover-lift group bg-card-gradient hover:bg-gradient-to-br hover:from-background hover:to-muted/50">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="text-4xl sm:text-5xl mb-4 group-hover:animate-bounce-in"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300 text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
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
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto mobile-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay Connected
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get the latest insights, tips, and updates on digital trends and strategies
            </motion.p>
            
            <motion.form 
              onSubmit={handleNewsletterSignup} 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div className="flex-1" whileFocus={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 sm:h-14 text-base transition-all duration-300 focus:shadow-lg"
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button type="submit" size="lg" className="px-6 sm:px-8 h-12 sm:h-14 text-base hover-lift">
                  Subscribe
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;