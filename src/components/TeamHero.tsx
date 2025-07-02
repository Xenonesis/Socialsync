import { motion } from 'framer-motion';
import { FlipWords } from '@/components/ui/flip-words';

const TeamHero = () => {
  return (
    <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-hero-gradient">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-foreground"
        >
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight"
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
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
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