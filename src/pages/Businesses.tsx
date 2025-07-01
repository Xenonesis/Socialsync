import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { FlipWords } from '@/components/ui/flip-words';
import { Check, Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

const Businesses = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online store with payment integration, inventory management, and responsive design.",
      image: "🛒",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "ecommerce",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and user management system.",
      image: "📊",
      techStack: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      category: "saas",
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Professional business website with CMS integration and SEO optimization.",
      image: "🏢",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      category: "corporate",
    },
    {
      id: 4,
      title: "Mobile App Landing",
      description: "Responsive landing page for mobile app with download tracking and user analytics.",
      image: "📱",
      techStack: ["React", "Framer Motion", "Firebase", "Tailwind CSS"],
      category: "mobile",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Creative portfolio showcase with interactive galleries and contact forms.",
      image: "🎨",
      techStack: ["Gatsby", "GraphQL", "Netlify CMS", "SCSS"],
      category: "portfolio",
    },
    {
      id: 6,
      title: "Learning Platform",
      description: "Online education platform with course management and progress tracking.",
      image: "📚",
      techStack: ["React", "Express.js", "MySQL", "Socket.io"],
      category: "education",
    },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Nexus Digital delivered an exceptional e-commerce platform that increased our online sales by 250%. The user experience is outstanding!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      text: "The SaaS dashboard they built for us is intuitive and powerful. Our team productivity has improved significantly with the real-time analytics.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      text: "Professional, responsive, and results-driven. Nexus Digital created a stunning portfolio website that perfectly showcases our work.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 dark:text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Professional web development and social media management at affordable costs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 sm:py-20 bg-feature">
        <div className="container mx-auto mobile-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Tabs defaultValue="webdev" className="w-full">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-12 gap-2 sm:gap-0">
                <TabsTrigger value="webdev" className="text-sm sm:text-base py-3">Web Development</TabsTrigger>
                <TabsTrigger value="social" className="text-sm sm:text-base py-3">Social Media</TabsTrigger>
              </TabsList>
              
              <TabsContent value="webdev" className="space-y-12">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Web Development Projects
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
                    We create
                    <FlipWords 
                      words={[" modern", " responsive", " fast", " scalable"]} 
                      className="text-primary font-semibold" 
                      duration={2000}
                    />
                    web development projects at affordable cost
                  </p>
                </motion.div>

                {/* Filter Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-12"
                >
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Projects</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce</SelectItem>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="portfolio">Portfolio</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* CardSpotlight Services */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mb-12 sm:mb-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, staggerChildren: 0.2 }}
                >
                  <WebDevCard 
                    title="Frontend Development"
                    icon={<Code className="h-8 w-8 text-blue-500" />}
                    services={[
                      "React & Next.js Applications",
                      "Responsive UI/UX Design",
                      "Modern CSS Frameworks",
                      "Interactive Animations"
                    ]}
                    description="Create stunning, responsive user interfaces with modern frontend technologies."
                  />
                  <WebDevCard 
                    title="Backend Development"
                    icon={<Database className="h-8 w-8 text-green-500" />}
                    services={[
                      "RESTful API Development",
                      "Database Design & Management",
                      "Server Architecture",
                      "Authentication Systems"
                    ]}
                    description="Build robust, scalable backend systems and APIs for your applications."
                  />
                  <WebDevCard 
                    title="Full-Stack Solutions"
                    icon={<Globe className="h-8 w-8 text-purple-500" />}
                    services={[
                      "End-to-End Development",
                      "Cloud Deployment",
                      "Performance Optimization",
                      "Maintenance & Support"
                    ]}
                    description="Complete web solutions from concept to deployment and beyond."
                  />
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <Card className="h-full bg-card-gradient border-0 shadow-soft hover:shadow-feature transition-all duration-500 hover-lift group">
                        <CardHeader className="text-center">
                          <motion.div 
                            className="text-5xl mb-4"
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: [0, -10, 10, -10, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            {project.image}
                          </motion.div>
                          <CardTitle className="text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {project.description}
                          </CardDescription>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, index) => (
                                <motion.span 
                                  key={index}
                                  className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                                  whileHover={{ scale: 1.1 }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button className="w-full mt-4 hover-lift" variant="outline">
                              Learn More
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="social" className="space-y-12">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Social Media Management
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
                    We manage all social media accounts with
                    <FlipWords 
                      words={[" engaging", " strategic", " effective", " professional"]} 
                      className="text-primary font-semibold" 
                      duration={2200}
                    />
                    strategies at affordable cost
                  </p>
                </motion.div>
                
                {/* Social Media CardSpotlight Services */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mb-12 sm:mb-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, staggerChildren: 0.2 }}
                >
                  <SocialMediaCard 
                    title="Content Creation"
                    icon={<Palette className="h-8 w-8 text-pink-500" />}
                    services={[
                      "Visual Content Design",
                      "Copywriting & Captions",
                      "Video Production",
                      "Brand Consistency"
                    ]}
                    description="Create engaging, on-brand content that resonates with your audience."
                  />
                  <SocialMediaCard 
                    title="Account Management"
                    icon={<Smartphone className="h-8 w-8 text-blue-500" />}
                    services={[
                      "Daily Posting & Scheduling",
                      "Community Engagement",
                      "Customer Support",
                      "Profile Optimization"
                    ]}
                    description="Complete management of your social media presence across all platforms."
                  />
                  <SocialMediaCard 
                    title="Growth & Analytics"
                    icon={<Zap className="h-8 w-8 text-yellow-500" />}
                    services={[
                      "Follower Growth Strategies",
                      "Performance Analytics",
                      "Competitor Analysis",
                      "ROI Tracking"
                    ]}
                    description="Data-driven strategies to grow your social media presence and engagement."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <Card className="bg-card-gradient border-0 shadow-soft">
                    <CardContent className="p-12 text-center">
                      <motion.div 
                        className="text-6xl mb-6"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        📱
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Complete Social Media Solutions
                      </h3>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        From content creation to community management, we handle all aspects of your social media presence across all platforms at competitive rates.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="text-center">
                          <div className="text-2xl mb-2">📊</div>
                          <p className="text-sm text-muted-foreground">Analytics</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">✍️</div>
                          <p className="text-sm text-muted-foreground">Content Creation</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">💬</div>
                          <p className="text-sm text-muted-foreground">Community Management</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">📈</div>
                          <p className="text-sm text-muted-foreground">Growth Strategy</p>
                        </div>
                      </div>
                      <Button 
                        size="lg" 
                        className="px-8 py-6"
                        onClick={() => window.open('https://wa.me/message/GDKO46FNFXKBC1', '_blank')}
                      >
                        Contact Us on WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto mobile-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Build Your Next Project?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's discuss how Nexus Digital can bring your web development vision to life
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-6 sm:px-8 py-4 sm:py-6 text-base hover-lift"
                onClick={() => window.open('https://wa.me/message/GDKO46FNFXKBC1', '_blank')}
              >
                Contact Us on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const WebDevCard = ({ title, icon, services, description }: { 
  title: string;
  icon: React.ReactNode;
  services: string[]; 
  description: string; 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <CardSpotlight className="h-80 sm:h-96 w-full max-w-sm mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 relative z-20 mt-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <p className="text-lg sm:text-xl font-bold text-foreground">
            {title}
          </p>
        </div>
        <div className="text-muted-foreground mt-4 relative z-20">
          <p className="text-sm mb-4">{description}</p>
          <ul className="list-none mt-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceStep title={service} />
              </motion.div>
            ))}
          </ul>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

const SocialMediaCard = ({ title, icon, services, description }: { 
  title: string;
  icon: React.ReactNode;
  services: string[]; 
  description: string; 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <CardSpotlight className="h-80 sm:h-96 w-full max-w-sm mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 relative z-20 mt-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <p className="text-lg sm:text-xl font-bold text-foreground">
            {title}
          </p>
        </div>
        <div className="text-muted-foreground mt-4 relative z-20">
          <p className="text-sm mb-4">{description}</p>
          <ul className="list-none mt-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceStep title={service} />
              </motion.div>
            ))}
          </ul>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

const ServiceStep = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start mb-2">
      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
      <p className="text-foreground text-sm">{title}</p>
    </li>
  );
};

export default Businesses;