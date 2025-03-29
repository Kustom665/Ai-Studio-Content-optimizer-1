import React from 'react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  icon: React.ReactNode;
}

export function ChatMessage({ message, isBot, icon }: ChatMessageProps) {
  return (
    <div className={`flex space-x-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          {icon}
        </div>
      )}
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot
            ? 'bg-gray-100 text-gray-800'
            : 'bg-indigo-600 text-white'
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
          {icon}
        </div>
      )}
    </div>
  );
}