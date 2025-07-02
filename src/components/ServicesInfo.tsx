import { motion } from 'framer-motion';
import { FlipWords } from '@/components/ui/flip-words';
import { useNavigate } from 'react-router-dom';

const ServicesInfo = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4 xs:space-y-6 sm:space-y-8"
    >
      <motion.div 
        className="bg-gradient-to-br from-primary/5 to-accent/5 p-3 xs:p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-500 hover-lift group"
        whileHover={{ scale: 1.02, y: -5 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
          <motion.div 
            className="w-10 h-10 xs:w-12 xs:h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 flex-shrink-0"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl xs:text-2xl">💻</span>
          </motion.div>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">Web Development Projects</h3>
        </div>
        <div className="text-sm xs:text-base sm:text-lg text-muted-foreground leading-relaxed">
          We create
          <FlipWords 
            words={["modern", "responsive", "fast", "scalable"]} 
            className="text-primary font-semibold mx-1 inline-block" 
            duration={2000}
          />
          web development projects with cutting-edge technology
        </div>
        <button 
          onClick={() => navigate('/businesses')}
          className="mt-2 text-sm font-medium text-primary hover:underline flex items-center gap-1 transition-colors duration-200"
        >
          Learn more <span>→</span>
        </button>
        <div className="flex flex-wrap gap-1.5 xs:gap-2 mt-3 xs:mt-4">
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
            <span key={index} className="bg-primary/10 text-primary text-xs px-2 xs:px-3 py-0.5 xs:py-1 rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="bg-gradient-to-br from-accent/5 to-primary/5 p-3 xs:p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-accent/10 hover:border-accent/20 transition-all duration-500 hover-lift group"
        whileHover={{ scale: 1.02, y: -5 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
          <motion.div 
            className="w-10 h-10 xs:w-12 xs:h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 flex-shrink-0"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl xs:text-2xl">📱</span>
          </motion.div>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">Social Media Management</h3>
        </div>
        <div className="text-sm xs:text-base sm:text-lg text-muted-foreground leading-relaxed">
          We manage all social media accounts with
          <FlipWords 
            words={["engaging", "strategic", "effective", "professional"]} 
            className="text-accent font-semibold mx-1 inline-block" 
            duration={2200}
          />
          strategies for optimal engagement
        </div>
        <button 
          onClick={() => navigate('/businesses')}
          className="mt-2 text-sm font-medium text-accent hover:underline flex items-center gap-1 transition-colors duration-200"
        >
          Learn more <span>→</span>
        </button>
        <div className="flex flex-wrap gap-1.5 xs:gap-2 mt-3 xs:mt-4">
          {["Content Creation", "Analytics", "Growth Strategy", "Community Management"].map((service, index) => (
            <span key={index} className="bg-accent/10 text-accent text-xs px-2 xs:px-3 py-0.5 xs:py-1 rounded-full font-medium">
              {service}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesInfo;