import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
  lastUpdated: string;
}

export const PolicyLayout = ({ title, children, lastUpdated }: PolicyLayoutProps) => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-sm border border-border">
            <div className="prose prose-sm sm:prose-base max-w-none text-foreground">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PolicyLayout;
