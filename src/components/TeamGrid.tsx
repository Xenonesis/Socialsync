import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

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
    <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 xs:mb-4"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8"
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
              <Card className="h-full bg-gradient-to-b from-card to-card/80 backdrop-blur-sm border border-border/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 group relative">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500 group-hover:duration-200" />
                
                <CardHeader className="p-0 relative z-10">
                  <div className="relative w-full h-40 xs:h-48 sm:h-56 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <motion.div 
                      className="relative z-10"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { type: 'spring', stiffness: 400, damping: 10 }
                      }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 blur-md transition duration-500 group-hover:duration-200" />
                        <Avatar className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 border-2 xs:border-4 border-white/90 dark:border-gray-800 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                          <AvatarImage 
                            src={member.avatar} 
                            alt={member.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="text-lg xs:text-2xl sm:text-3xl font-bold bg-gradient-to-br from-primary to-accent text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </motion.div>
                  </div>
                  <div className="pt-16 xs:pt-20 sm:pt-24 pb-4 xs:pb-6 px-4 xs:px-6 sm:px-8">
                    <motion.div 
                      className="text-center mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <CardTitle className="text-lg xs:text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                        {member.name}
                      </CardTitle>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-2 xs:px-3 py-0.5 xs:py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs xs:text-sm font-semibold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-500">
                        {member.role}
                      </span>
                    </motion.div>
                    
                    <motion.p 
                      className="text-xs xs:text-sm text-muted-foreground text-center leading-relaxed mb-4 xs:mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {member.bio}
                    </motion.p>
                    <motion.div 
                      className="flex justify-center gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm border-border/30 shadow-sm hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 group/icon"
                        asChild
                      >
                        <a 
                          href={`tel:${member.contact?.replace(/[^0-9+]/g, '')}`}
                          title={`Call ${member.name}`}
                          aria-label={`Call ${member.name}`}
                        >
                          <span className="sr-only">Call {member.name}</span>
                          <Phone className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm border-border/30 shadow-sm hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 group/icon"
                        asChild
                      >
                        <a 
                          href={`mailto:${member.email || 'contact@socialsync.com'}`}
                          title={`Email ${member.name}`}
                          aria-label={`Email ${member.name}`}
                        >
                          <span className="sr-only">Email {member.name}</span>
                          <Mail className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm border-border/30 shadow-sm hover:bg-blue-500/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group/icon"
                        asChild
                      >
                        <a 
                          href={member.linkedin || '#'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title={`${member.name}'s LinkedIn profile`}
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <span className="sr-only">{member.name}'s LinkedIn profile</span>
                          <Linkedin className="h-4 w-4 text-muted-foreground group-hover/icon:text-[#0A66C2] transition-colors" aria-hidden="true" />
                        </a>
                      </Button>
                      {member.portfolio && (
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm border-border/30 shadow-sm hover:bg-purple-500/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 group/icon"
                          asChild
                        >
                          <a 
                            href={member.portfolio}
                            target="_blank" 
                            rel="noopener noreferrer"
                            title={`${member.name}'s Portfolio`}
                            aria-label={`${member.name}'s Portfolio`}
                          >
                            <span className="sr-only">{member.name}'s Portfolio</span>
                            <svg 
                              className="h-4 w-4 text-muted-foreground group-hover/icon:text-purple-500 transition-colors" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M12 20h9"></path>
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="relative">
                    {/* Animated border */}
                    <motion.div 
                      className="absolute -top-px left-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                      initial={{ width: '0%', x: '-50%' }}
                      whileInView={{ width: '80%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    
                    <div className="pt-4">
                      <motion.h4 
                        className="text-xs font-semibold text-muted-foreground mb-4 text-center uppercase tracking-wider"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        Areas of Expertise
                      </motion.h4>
                      
                      <motion.div 
                        className="flex flex-wrap justify-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, staggerChildren: 0.1 }}
                      >
                        {member.expertise.map((skill, skillIndex) => (
                          <motion.span 
                            key={skillIndex}
                            className="text-xs px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 text-foreground/80 font-medium whitespace-nowrap shadow-sm hover:shadow-md transition-all duration-300 group/skill"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: 'hsl(var(--primary))',
                              borderColor: 'hsl(var(--primary))',
                              color: 'white',
                              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + (skillIndex * 0.05) }}
                          >
                            <span className="relative z-10">{skill}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGrid;