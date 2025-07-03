import React from 'react';
import { motion } from 'framer-motion';
import { DialogTrigger } from '@/components/ui/dialog';

interface AIAssistantTriggerProps {
  onOpen: () => void;
}

const AIAssistantTrigger: React.FC<AIAssistantTriggerProps> = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-hero-gradient rounded-full shadow-feature flex items-center justify-center text-white font-bold"
          onClick={onOpen}
        >
          AI
        </motion.button>
      </DialogTrigger>
    </motion.div>
  );
};

export default AIAssistantTrigger;
