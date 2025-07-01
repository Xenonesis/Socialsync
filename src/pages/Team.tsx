import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { FlipWords } from '@/components/ui/flip-words';


const Team = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const teamMembers = [
    {
      name: "Himanshu",
      role: "Owner",
      bio: "Founder and owner of Social Sync, dedicated to providing innovative web solutions and social media management services.",
      avatar: "H",
      contact: "+91 7061752337",
      expertise: ["Business Leadership", "Web Development", "Social Media Strategy"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-hero-gradient">
        <div className="container mx-auto mobile-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-foreground"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Meet Our
              <FlipWords 
                words={[" Creative", " Expert", " Talented", " Innovative"]} 
                className="text-accent font-extrabold" 
                duration={2500}
              />
              Team
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The talented developers and engineers behind Social Sync's innovative web solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto mobile-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Team
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="h-full bg-card-gradient border-0 shadow-soft hover:shadow-feature transition-all duration-500 hover-lift group animate-slide-up">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="mb-4 flex justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`} />
                        <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium group-hover:text-accent transition-colors duration-300">
                      {member.role}
                    </CardDescription>
                    {member.contact && (
                      <motion.p 
                        className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        Contact: {member.contact}
                      </motion.p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {member.bio}
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <motion.span 
                            key={skillIndex}
                            className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto mobile-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Get In Touch
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ready to start your next web development project? Let's discuss how we can bring your vision to life.
              </motion.p>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-10 sm:h-12 transition-all duration-300 focus:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-10 sm:h-12 transition-all duration-300 focus:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 transition-all duration-300 focus:scale-105"
                    rows={4}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full h-12 sm:h-14 text-base hover-lift">
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Services Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-500 hover-lift group"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">💻</span>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Web Development Projects</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create
                  <FlipWords 
                    words={["modern", "responsive", "fast", "scalable"]} 
                    className="text-primary font-semibold mx-1" 
                    duration={2000}
                  />
                  web development projects at affordable cost
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 sm:p-8 rounded-2xl border border-accent/10 hover:border-accent/20 transition-all duration-500 hover-lift group"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">📱</span>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">Social Media Management</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We manage all social media accounts with
                  <FlipWords 
                    words={["engaging", "strategic", "effective", "professional"]} 
                    className="text-accent font-semibold mx-1" 
                    duration={2200}
                  />
                  strategies at affordable cost
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Content Creation", "Analytics", "Growth Strategy", "Community Management"].map((service, index) => (
                    <span key={index} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};



export default Team;