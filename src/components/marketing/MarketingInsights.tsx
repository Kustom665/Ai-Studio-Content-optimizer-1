import React from 'react';
import { LineChart, BarChart2, PieChart, TrendingUp } from 'lucide-react';
import { SectionTitle } from '../shared/SectionTitle';

export function MarketingInsights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Marketing Insights"
          subtitle="Data-driven insights to power your marketing decisions"
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <InsightCard
            title="Campaign Performance"
            value="87%"
            trend="+12%"
            isPositive={true}
            chart={<LineChart className="w-6 h-6" />}
          />
          <InsightCard
            title="Conversion Rate"
            value="4.2%"
            trend="+0.8%"
            isPositive={true}
            chart={<BarChart2 className="w-6 h-6" />}
          />
          <InsightCard
            title="Market Share"
            value="23%"
            trend="-2%"
            isPositive={false}
            chart={<PieChart className="w-6 h-6" />}
          />
          <InsightCard
            title="Revenue Growth"
            value="$12.4K"
            trend="+18%"
            isPositive={true}
            chart={<TrendingUp className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}

interface InsightCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  chart: React.ReactNode;
}

function InsightCard({ title, value, trend, isPositive, chart }: InsightCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="text-indigo-600">{chart}</div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
          <TrendingUp className={`w-4 h-4 ml-1 ${!isPositive && 'rotate-180'}`} />
        </div>
      </div>
    </div>
  );
}