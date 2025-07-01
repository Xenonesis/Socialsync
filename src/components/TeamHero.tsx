import { motion } from 'framer-motion';
import { FlipWords } from '@/components/ui/flip-words';

const TeamHero = () => {
  return (
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
  );
};

export default TeamHero;