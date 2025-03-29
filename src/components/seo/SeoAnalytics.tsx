import React from 'react';
import { SectionTitle } from '../shared/SectionTitle';
import { MetricsGrid } from './MetricsGrid';
import { SeoChecklist } from './SeoChecklist';

export function SeoAnalytics() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="SEO Assistance"
          subtitle="Optimize your content for search engines with AI-powered tools"
        />
        
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <MetricsGrid />
          <SeoChecklist />
        </div>
      </div>
    </section>
  );
}