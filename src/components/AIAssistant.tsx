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
      text: "Hello! I'm your Social Sync AI assistant. I can help you learn about our services or partnership opportunities. How can I help you today?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    "How do I partner with Social Sync?",
    "Show me your services.",
    "What makes Social Sync different?",
    "Tell me about your team.",
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
      
      if (message.toLowerCase().includes("partner")) {
        aiResponse = "Great question! We offer flexible partnership models including referral programs, white-label solutions, and strategic alliances. Contact our team at hello@socialsync.com to discuss opportunities that align with your business goals.";
      } else if (message.toLowerCase().includes("services")) {
        aiResponse = "We specialize in three core areas: 1) Social Media Strategy - comprehensive planning and execution, 2) Brand Management - consistent identity across platforms, and 3) Analytics & Reporting - data-driven insights for growth. Each service is customized to your business needs.";
      } else if (message.toLowerCase().includes("different")) {
        aiResponse = "What sets Social Sync apart is our integrated approach combining strategy, execution, and analytics. We don't just manage your social media - we sync your entire business with the social era, ensuring consistent brand experience and measurable results.";
      } else if (message.toLowerCase().includes("team")) {
        aiResponse = "Our team consists of social media strategists, brand experts, data analysts, and creative professionals. Each member brings unique expertise to help your business thrive in the digital landscape. Visit our Team & Contact page to meet the people behind Social Sync.";
      } else {
        aiResponse = "Thanks for your question! I'd be happy to connect you with our team for more detailed information. You can reach us at hello@socialsync.com or through our contact form on the Team & Contact page.";
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