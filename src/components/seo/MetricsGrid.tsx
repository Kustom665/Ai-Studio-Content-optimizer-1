import React from 'react';
import { ArrowUp, Search, MousePointer, Clock } from 'lucide-react';

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <MetricCard
        icon={<ArrowUp className="w-5 h-5 text-green-500" />}
        label="Rankings"
        value="+45%"
        trend="Improved"
      />
      <MetricCard
        icon={<Search className="w-5 h-5 text-blue-500" />}
        label="Keywords"
        value="250+"
        trend="Tracked"
      />
      <MetricCard
        icon={<MousePointer className="w-5 h-5 text-purple-500" />}
        label="CTR"
        value="4.8%"
        trend="Average"
      />
      <MetricCard
        icon={<Clock className="w-5 h-5 text-orange-500" />}
        label="Time on Site"
        value="3:45"
        trend="Minutes"
      />
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}

function MetricCard({ icon, label, value, trend }: MetricCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm">{label}</span>
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{trend}</div>
    </div>
  );
}