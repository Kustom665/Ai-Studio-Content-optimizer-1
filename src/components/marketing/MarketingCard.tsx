import React from 'react';

interface MarketingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function MarketingCard({ icon, title, description }: MarketingCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
        <div className="text-indigo-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}