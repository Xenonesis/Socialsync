import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AIAssistantTrigger from './AIAssistantTrigger';
import AIAssistantMessages from './AIAssistantMessages';
import AIAssistantQuickQuestions from './AIAssistantQuickQuestions';
import AIAssistantInput from './AIAssistantInput';

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
        aiResponse = "Our team includes full-stack developers, frontend specialists, backend engineers, DevOps experts, mobile developers, and QA engineers. Each member brings unique technical expertise to deliver exceptional web solutions. Visit our Team & Contact page to meet our talented developers.";
      } else {
        aiResponse = "Thanks for your question! I'd be happy to connect you with our team for more detailed information. You can reach us at hello@socialsync.com or through our contact form on the Team & Contact page to discuss your web development needs.";
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

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <AIAssistantTrigger onOpen={() => setIsOpen(true)} />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Social Sync AI Assistant</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <AIAssistantMessages messages={messages} />
          <AIAssistantQuickQuestions quickQuestions={quickQuestions} onQuestionClick={handleQuickQuestion} />
          <AIAssistantInput inputValue={inputValue} onInputChange={handleInputChange} onSendMessage={handleSendMessage} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIAssistant;
