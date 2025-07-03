import React from 'react';
import { Button } from '@/components/ui/button';

interface AIAssistantQuickQuestionsProps {
  quickQuestions: string[];
  onQuestionClick: (question: string) => void;
}

const AIAssistantQuickQuestions: React.FC<AIAssistantQuickQuestionsProps> = ({ quickQuestions, onQuestionClick }) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Quick questions:</p>
      <div className="grid grid-cols-1 gap-2">
        {quickQuestions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-left justify-start h-auto py-2"
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AIAssistantQuickQuestions;
