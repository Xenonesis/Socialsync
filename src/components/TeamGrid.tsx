import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  contact?: string;
  expertise: string[];
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
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                        {member.name.charAt(0)}
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
  );
};

export default TeamGrid;