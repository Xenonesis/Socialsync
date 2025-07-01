import { motion } from 'framer-motion';
import { FlipWords } from '@/components/ui/flip-words';

const ServicesInfo = () => {
  return (
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
        <div className="text-lg text-muted-foreground leading-relaxed">
          We create
          <FlipWords 
            words={["modern", "responsive", "fast", "scalable"]} 
            className="text-primary font-semibold mx-1 inline-block" 
            duration={2000}
          />
          web development projects at affordable cost
        </div>
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
        <div className="text-lg text-muted-foreground leading-relaxed">
          We manage all social media accounts with
          <FlipWords 
            words={["engaging", "strategic", "effective", "professional"]} 
            className="text-accent font-semibold mx-1 inline-block" 
            duration={2200}
          />
          strategies at affordable cost
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Content Creation", "Analytics", "Growth Strategy", "Community Management"].map((service, index) => (
            <span key={index} className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
              {service}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesInfo;