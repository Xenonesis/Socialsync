import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Social Sync AI assistant. I can help you learn about our web development services, projects, or partnership opportunities. How can I help you today?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    "What web development services do you offer?",
    "Show me your recent projects.",
    "What technologies do you use?",
    "How can I start a project?",
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: message,
      isUser: true,
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "";
      
      if (message.toLowerCase().includes("services") || message.toLowerCase().includes("development")) {
        aiResponse = "We offer comprehensive web development services including: 1) E-commerce platforms with payment integration, 2) SaaS dashboards with real-time analytics, 3) Corporate websites with CMS, 4) Mobile app landing pages, 5) Portfolio websites, and 6) Learning platforms. Each project is built with modern technologies like React, Next.js, and Node.js.";
      } else if (message.toLowerCase().includes("projects") || message.toLowerCase().includes("portfolio")) {
        aiResponse = "Our recent projects include e-commerce platforms, SaaS dashboards, corporate websites, and mobile app landing pages. Each project showcases modern design, responsive layouts, and cutting-edge technology stacks. Visit our Businesses page to explore our complete portfolio with detailed case studies.";
      } else if (message.toLowerCase().includes("technologies") || message.toLowerCase().includes("tech")) {
        aiResponse = "We work with modern technologies including React, Next.js, Vue.js, Node.js, Python, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best tech stack for each project based on your specific requirements and goals.";
      } else if (message.toLowerCase().includes("start") || message.toLowerCase().includes("project")) {
        aiResponse = "Starting a project is easy! First, we'll discuss your requirements and goals. Then we'll propose a technical solution and timeline. Our process includes planning, design, development, testing, and deployment. Contact us through our Team & Contact page to schedule a consultation.";
      } else if (message.toLowerCase().includes("team")) {
        aiResponse = "Our  team includes full-stack developers, frontend specialists, backend engineers, DevOps experts, mobile developers, and QA engineers. Each member brings unique technical expertise to deliver exceptional web solutions. Visit our Team & Contact page to meet our talented developers.";
      } else {
        aiResponse = "Thanks for your question! I'd be happy to connect you with our  team for more detailed information. You can reach us at hello@socialsync.com or through our contact form on the Team & Contact page to discuss your web development needs.";
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-hero-gradient rounded-full shadow-feature flex items-center justify-center text-white font-bold"
            >
              AI
            </motion.button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Social Sync AI Assistant</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <ScrollArea className="h-64 pr-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
                    >
                      <div
                        className={`inline-block max-w-[80%] p-3 rounded-lg ${
                          message.isUser
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Quick questions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start h-auto py-2"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                />
                <Button onClick={() => handleSendMessage(inputValue)}>Send</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </>
  );
};

export default AIAssistant;