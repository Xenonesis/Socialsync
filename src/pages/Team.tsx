import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Send, Mail, Phone, MapPin, Globe, ArrowDown, ChevronDown, Sparkles, Clock } from 'lucide-react';
import { teamMembers } from '@/data/teamMembers';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
          
          // Connect particles
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 100})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.8;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-20"
      aria-hidden="true"
    />
  );
};

// Scroll Down Indicator Component
const ScrollDownIndicator = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center"
    >
      <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ChevronDown className="h-6 w-6 text-primary" />
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto py-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Meet Our Talented Team</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text">Expert</span> Team
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The brilliant minds behind our innovative solutions. We're a diverse team of experts passionate about creating exceptional digital experiences.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button className="px-8 py-6 text-base font-medium rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all transform hover:-translate-y-0.5">
                Join Our Team
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base font-medium rounded-xl border-2 border-border/50 hover:border-primary/50 transition-colors">
                View Open Positions
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Scroll Down Indicator */}
          <ScrollDownIndicator />
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              Our Experts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Meet the Team
            </h2>
            <p className="text-muted-foreground">
              A diverse team of passionate individuals working together to create amazing experiences.
            </p>
          </motion.div>
          

          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <TeamMemberCard key={member.name} member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/95" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.1))]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Ready to work with us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Card className="relative p-6 sm:p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    Send us a message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Input 
                        placeholder="First Name" 
                        className="h-12 px-4 border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <Input 
                        placeholder="Last Name" 
                        className="h-12 px-4 border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Input 
                      placeholder="Email" 
                      type="email" 
                      className="h-12 px-4 border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <Input 
                      placeholder="Phone" 
                      type="tel" 
                      className="h-12 px-4 border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <Textarea 
                      placeholder="Your Message" 
                      rows={4} 
                      className="p-4 border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Have questions? Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-foreground">Email</h4>
                    <a href="mailto:contact@socialsync.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      contact@socialsync.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-foreground">Phone</h4>
                    <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      123 Business Street, Suite 100<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-foreground">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>    
          </div>
        </div>
      </section>
    </div>
  );
};

// Team Member Card Component with 3D Tilt Effect
const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = ((x - centerX) / 20);
      const rotateX = ((centerY - y) / 20);
      
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      }
    };
    
    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <motion.div
      variants={{
        hidden: { y: 40, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { 
            type: 'spring',
            stiffness: 100,
            damping: 15
          }
        }
      }}
      whileHover={{ 
        y: -10,
        transition: { 
          type: 'spring',
          stiffness: 300,
          damping: 15
        } 
      }}
      className="h-full"
    >
      <Card 
        ref={cardRef}
        className="h-full overflow-hidden border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group/card"
      >
        {/* Card Header with Gradient */}
        <div className="h-2 bg-gradient-to-r from-primary to-accent" />
        
        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            {/* Avatar with Glow Effect */}
            <div className="relative mb-5 group-hover/card:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-md -z-10 group-hover/card:opacity-100 opacity-0 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 -z-10 animate-pulse" />
              
              <Avatar className="w-24 h-24 border-4 border-background shadow-lg group-hover/card:shadow-primary/20 transition-all duration-500">
                <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-primary to-accent text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              {/* Online Status Indicator */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
            </div>
            
            {/* Name and Role */}
            <h3 className="text-xl font-semibold text-foreground mb-1.5 group-hover/card:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {member.role}
            </p>
            
            {/* Expertise Chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {member.expertise.slice(0, 2).map((skill, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground group-hover/card:bg-primary/10 group-hover/card:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
              {member.expertise.length > 2 && (
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  +{member.expertise.length - 2}
                </span>
              )}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-5">
              <motion.a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              {member.portfolio && (
                <motion.a 
                  href={member.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label={`${member.name}'s Website`}
                >
                  <Globe className="h-4 w-4" />
                </motion.a>
              )}
            </div>
            
            {/* Contact Button */}
            <motion.div 
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-primary/30 text-primary dark:text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group/button relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="group-hover/button:translate-x-1 transition-transform duration-300 text-foreground dark:text-inherit">Contact Me</span>
                  <Send className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover/button:opacity-100 group-hover/button:translate-x-0 transition-all duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Team;