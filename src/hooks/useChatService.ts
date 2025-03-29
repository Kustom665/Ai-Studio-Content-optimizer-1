import { useState } from 'react';
import OpenAI from 'openai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChatService() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI customer service assistant. How can I help you today?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userMessage: string) => {
    setIsLoading(true);
    
    // Add user message to chat
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);

    try {
      // Initialize OpenAI client
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      // Get AI response
      const completion = await openai.chat.completions.create({
        messages: newMessages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
        max_tokens: 150
      });

      // Add AI response to chat
      const aiMessage = completion.choices[0]?.message?.content || 'Sorry, I couldn\'t process that.';
      setMessages([...newMessages, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'I apologize, but I encountered an error. Please try again later.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, sendMessage };
}