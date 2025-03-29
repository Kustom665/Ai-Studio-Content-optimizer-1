import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 text-lg">{subtitle}</p>
    </div>
  );
}