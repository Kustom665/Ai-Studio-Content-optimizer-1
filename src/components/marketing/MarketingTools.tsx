import React from 'react';
import { TrendingUp, Target, BarChart, Search, Globe, Users } from 'lucide-react';
import { MarketingCard } from './MarketingCard';
import { SectionTitle } from '../shared/SectionTitle';

export function MarketingTools() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Marketing Solutions"
          subtitle="Boost your online presence with AI-powered marketing tools"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <MarketingCard
            icon={<TrendingUp />}
            title="Performance Analytics"
            description="Track and analyze your marketing campaigns with real-time insights"
          />
          <MarketingCard
            icon={<Target />}
            title="Audience Targeting"
            description="Identify and reach your ideal customers with precision"
          />
          <MarketingCard
            icon={<BarChart />}
            title="Conversion Optimization"
            description="Improve your conversion rates with AI-driven recommendations"
          />
          <MarketingCard
            icon={<Search />}
            title="SEO Optimization"
            description="Enhance your search rankings with advanced SEO tools"
          />
          <MarketingCard
            icon={<Globe />}
            title="Content Strategy"
            description="Generate engaging content ideas tailored to your audience"
          />
          <MarketingCard
            icon={<Users />}
            title="Social Media Management"
            description="Streamline your social media presence across platforms"
          />
        </div>
      </div>
    </section>
  );
}