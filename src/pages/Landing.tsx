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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0z" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies to elevate your online presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600"
    }
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
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-16 xs:pt-20">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 xs:space-y-6 sm:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 dark:bg-card backdrop-blur-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium text-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Your social media growth partner</span>
              </motion.div>

              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
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
                className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-900 dark:text-white max-w-xl leading-relaxed"
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
                <span>for your business needs.</span>
              </motion.div>

              <motion.div 
                className="mt-6 xs:mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-3 xs:gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift w-full sm:w-auto">
                    <Link to="/businesses">View Our Work</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to="/team" className="text-sm xs:text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
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
      <section className="relative py-8 xs:py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgMThjMC0yLjIwOS0xLjc5MS00LTQtNEgxMGMtMi4yMDkgMC00IDEuNzkxLTQgNHYyNGMwIDIuMjA5IDEuNzkxIDQgNCA0aDQwYzIuMjA5IDAgNC0xLjc5MSA0LTRWMTh6IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container relative mx-auto px-3 xs:px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8 xs:mb-12 sm:mb-16 max-w-3xl mx-auto"
          >
            <motion.span 
              className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <motion.h2 
              className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 xs:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transform Your Digital Presence
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-sm xs:text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive digital solutions designed to transform your business presence and drive measurable growth
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
                <Card className="relative h-full bg-background/80 backdrop-blur-sm border border-border/50 overflow-hidden group-hover:border-transparent transition-all duration-300">
                  <CardContent className="p-4 xs:p-6 sm:p-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xl xs:rounded-2xl mb-4 xs:mb-6 bg-gradient-to-br ${feature.color} text-white`}>
                      <motion.div 
                        className="flex items-center justify-center w-full h-full"
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    <CardTitle className="text-lg xs:text-xl font-bold mb-2 xs:mb-3 text-foreground group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </CardTitle>
                    <p className="text-sm xs:text-base text-muted-foreground leading-relaxed mb-4 xs:mb-6 group-hover:text-foreground/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-6 xs:mb-8 sm:mb-12"
          >
            <motion.span 
              className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Got Questions?
            </motion.span>
            <motion.h2 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 xs:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-sm xs:text-base sm:text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Find answers to common questions about our services and how we can help you
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3 xs:space-y-4">
            {[
              {
                question: "What services do you offer?",
                answer: "We specialize in social media strategy and web development, helping businesses establish and grow their online presence with customized solutions."
              },
              {
                question: "How can I get started?",
                answer: "Getting started is easy! Simply reach out to us through our contact form or email, and we'll schedule a consultation to discuss your specific needs and goals."
              },
              {
                question: "What makes you different from other agencies?",
                answer: "Our unique approach combines creative strategy with technical expertise, ensuring that every solution we deliver is both beautiful and effective."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, we provide comprehensive support and maintenance packages to ensure your digital assets continue to perform at their best."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg xs:rounded-xl p-4 xs:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base xs:text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm xs:text-base text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-6 xs:mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm xs:text-base text-muted-foreground mb-3 xs:mb-4">Still have questions?</p>
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300 w-full xs:w-auto"
            >
              <Link to="/team">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;