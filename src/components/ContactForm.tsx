import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm p-3 xs:p-4 sm:p-6 md:p-8 shadow-xl border border-border/30 w-full max-w-4xl mx-auto"
    >
      {/* Decorative elements - Hidden on mobile */}
      <div className="hidden sm:block absolute -top-24 -right-24 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="hidden sm:block absolute -bottom-12 -left-12 w-56 h-56 sm:w-72 sm:h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10">
        <motion.div 
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact Us
        </motion.div>
        
        <motion.h2 
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-sm xs:text-base sm:text-lg text-muted-foreground mb-4 xs:mb-6 sm:mb-8 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Have a project in mind or want to discuss how we can help? Drop us a message and we'll get back to you as soon as possible.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 mb-4 xs:mb-6 sm:mb-8">
          <motion.div 
            className="flex items-start space-x-3 sm:space-x-4 p-3 xs:p-3.5 sm:p-4 bg-muted/30 rounded-lg sm:rounded-xl hover:bg-muted/50 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="p-1.5 xs:p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
              <Mail className="h-4 w-4 xs:h-5 xs:w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-medium text-foreground text-sm xs:text-base">Email Us</h4>
              <p className="text-xs xs:text-sm text-muted-foreground break-all">business@socialsync.com</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start space-x-3 sm:space-x-4 p-3 xs:p-3.5 sm:p-4 bg-muted/30 rounded-lg sm:rounded-xl hover:bg-muted/50 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-1.5 xs:p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
              <Phone className="h-4 w-4 xs:h-5 xs:w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-medium text-foreground text-sm xs:text-base">Call Us</h4>
              <p className="text-xs xs:text-sm text-muted-foreground">+91 70617 52337</p>
            </div>
          </motion.div>
        </div>

      </div>
      
      <motion.form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="space-y-3 xs:space-y-4 sm:space-y-5 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <AnimatePresence>
          {isSubmitted ? (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center"
            >
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">Message Sent!</h3>
              <p className="text-green-600 dark:text-green-300">We've received your message and will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-1"
              >
                <Label htmlFor="name" className="text-xs xs:text-sm font-medium text-muted-foreground">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-10 xs:h-11 sm:h-12 pl-8 xs:pl-10 text-sm sm:text-base bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                  <div className="absolute left-2.5 xs:left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user xs:w-[18px] xs:h-[18px]">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-1"
              >
                <Label htmlFor="email" className="text-xs xs:text-sm font-medium text-muted-foreground">Email Address</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-10 xs:h-11 sm:h-12 pl-8 xs:pl-10 text-sm sm:text-base bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="you@example.com"
                  />
                  <div className="absolute left-2.5 xs:left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Mail className="h-4 w-4 xs:h-5 xs:w-5" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-1"
              >
                <Label htmlFor="mobile" className="text-xs xs:text-sm font-medium text-muted-foreground">Mobile Number</Label>
                <div className="relative">
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="h-10 xs:h-11 sm:h-12 pl-8 xs:pl-10 text-sm sm:text-base bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="1234567890"
                    inputMode="numeric"
                  />
                  <div className="absolute left-2.5 xs:left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Phone className="h-4 w-4 xs:h-5 xs:w-5" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-1"
              >
                <Label htmlFor="message" className="text-xs xs:text-sm font-medium text-muted-foreground">Your Message</Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="min-h-[80px] xs:min-h-[100px] sm:min-h-[120px] text-sm sm:text-base bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none p-3"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-2"
              >
                <Button 
                  type="submit" 
                  className="w-full h-10 xs:h-12 sm:h-14 text-xs xs:text-sm sm:text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-1.5 xs:mr-2 h-4 w-4 xs:h-5 xs:w-5 animate-spin" />
                      <span className="hidden xs:inline">Sending...</span>
                      <span className="xs:hidden">Sending</span>
                    </>
                  ) : (
                    <>
                      <Send className="mr-1.5 xs:mr-2 h-4 w-4 xs:h-5 xs:w-5 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;