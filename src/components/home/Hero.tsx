import React from 'react';
import { Sparkles, Zap, Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Transform Your Ideas with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Harness the power of artificial intelligence to create, innovate, and accelerate your projects with our cutting-edge AI tools.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 transition-colors w-full sm:w-auto">
            Watch Demo
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={<Sparkles className="w-6 h-6 text-indigo-600" />}
            title="Smart AI"
            description="Advanced algorithms that learn and adapt to your needs"
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-indigo-600" />}
            title="Lightning Fast"
            description="Get results in milliseconds with our optimized infrastructure"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-indigo-600" />}
            title="Secure & Private"
            description="Enterprise-grade security to protect your data"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}