import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Star, Award, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  contact?: string;
  expertise: string[];
  email?: string;
  linkedin?: string;
  portfolio?: string;
}

interface TeamGridProps {
  teamMembers: TeamMember[];
}

const TeamGrid = ({ teamMembers }: TeamGridProps) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Meet Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6">
            Creative Minds Behind
            <br />
            <span className="text-primary">Social Sync</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to transforming your digital presence with innovative solutions
          </p>
        </motion.div>

        {/* Enhanced Team Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-card/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <CardHeader className="relative z-10 text-center p-8">
                  {/* Enhanced Avatar Section */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Avatar className="w-32 h-32 mx-auto border-4 border-white/50 shadow-2xl relative z-10">
                        <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                        <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent p-2 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                        <Award className="w-3 h-3 text-primary" />
                        <span className="text-sm font-medium text-primary">{member.role}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 px-8 pb-8">
                  {/* Enhanced Action Buttons */}
                  <div className="flex justify-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/50 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                      asChild
                    >
                      <a href={`tel:${member.contact}`}>
                        <Phone className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/50 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                      asChild
                    >
                      <a href={`mailto:${member.email || 'contact@socialsync.com'}`}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/50 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                      asChild
                    >
                      <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work With Us?</h3>
            <p className="text-muted-foreground mb-6">
              Let's bring your vision to life with our expertise and creativity
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGrid;