import React from 'react';
import { 
  Brain, 
  MessageSquare, 
  Image, 
  Code2, 
  FileText, 
  Music 
} from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful AI Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain />}
            title="AI Assistant"
            description="Get intelligent responses and suggestions powered by advanced language models"
          />
          <FeatureCard
            icon={<MessageSquare />}
            title="Chat Bot"
            description="Create custom chatbots trained on your business data"
          />
          <FeatureCard
            icon={<Image />}
            title="Image Generation"
            description="Generate unique images from text descriptions"
          />
          <FeatureCard
            icon={<Code2 />}
            title="Code Assistant"
            description="Get help with coding, debugging, and code optimization"
          />
          <FeatureCard
            icon={<FileText />}
            title="Text Analysis"
            description="Extract insights and analyze sentiment from text"
          />
          <FeatureCard
            icon={<Music />}
            title="Audio Processing"
            description="Convert speech to text and generate natural voice audio"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <div className="text-indigo-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}