import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AIAssistantInputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: (message: string) => void;
}

const AIAssistantInput: React.FC<AIAssistantInputProps> = ({ inputValue, onInputChange, onSendMessage }) => {
  return (
    <div className="flex space-x-2">
      <Input
        placeholder="Ask me anything..."
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSendMessage(inputValue)}
      />
      <Button onClick={() => onSendMessage(inputValue)}>Send</Button>
    </div>
  );
};

export default AIAssistantInput;
