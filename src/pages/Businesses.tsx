import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Businesses = () => {
  const services = [
    {
      id: 1,
      title: "Social Media Strategy & Planning",
      description: "Comprehensive social media strategies tailored to your business goals, target audience analysis, and content planning that drives engagement.",
      image: "🎯",
      features: ["Target Audience Analysis", "Content Calendar Planning", "Platform Optimization", "Competitor Research"],
    },
    {
      id: 2,
      title: "Brand Management & Design",
      description: "Professional brand identity development, visual content creation, and consistent brand messaging across all social platforms.",
      image: "🎨",
      features: ["Brand Identity Design", "Visual Content Creation", "Brand Guidelines", "Consistent Messaging"],
    },
    {
      id: 3,
      title: "Analytics & Performance Tracking",
      description: "Data-driven insights with detailed reporting, ROI tracking, and optimization recommendations to maximize your social media investment.",
      image: "📊",
      features: ["Performance Analytics", "ROI Tracking", "Growth Metrics", "Optimization Reports"],
    },
    {
      id: 4,
      title: "Community Management",
      description: "Active community engagement, customer support through social channels, and building lasting relationships with your audience.",
      image: "👥",
      features: ["24/7 Community Support", "Engagement Management", "Crisis Management", "Customer Relations"],
    },
    {
      id: 5,
      title: "Paid Social Advertising",
      description: "Strategic paid advertising campaigns across multiple platforms with optimized targeting and budget management for maximum ROI.",
      image: "💰",
      features: ["Campaign Strategy", "Ad Creative Development", "Budget Optimization", "A/B Testing"],
    },
    {
      id: 6,
      title: "Influencer Partnerships",
      description: "Connect with relevant influencers in your industry, manage partnership campaigns, and leverage authentic endorsements for brand growth.",
      image: "⭐",
      features: ["Influencer Sourcing", "Campaign Management", "Performance Tracking", "Relationship Building"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Social Sync transformed our online presence completely. Our engagement rates increased by 300% in just 3 months!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Growth Marketing Co.",
      text: "The analytics and insights provided by Social Sync helped us understand our audience better and optimize our strategies effectively.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      text: "Professional, responsive, and results-driven. Social Sync is the partner every business needs for social media success.",
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
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Solutions That Drive Results
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive social media services designed to elevate your brand and connect with your audience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-feature">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we provide end-to-end social media solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="h-full bg-card-gradient border-0 shadow-soft hover:shadow-feature transition-all duration-300">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="text-5xl mb-4"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {service.image}
                    </motion.div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full bg-card-gradient border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">⭐</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Social Presence?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how Social Sync can help your business thrive in the digital world
            </p>
            <Button size="lg" variant="secondary" className="px-8 py-6">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Businesses;