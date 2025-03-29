import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

export function SeoChecklist() {
  const checklistItems = [
    { status: 'complete', text: 'Meta titles optimized' },
    { status: 'complete', text: 'Meta descriptions updated' },
    { status: 'complete', text: 'Header tags structured' },
    { status: 'pending', text: 'Image alt tags needed' },
    { status: 'complete', text: 'URL structure optimized' },
    { status: 'pending', text: 'Mobile responsiveness' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">SEO Checklist</h3>
      <div className="space-y-3">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            {item.status === 'complete' ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <AlertCircle className="w-5 h-5 text-orange-500" />
            )}
            <span className={item.status === 'complete' ? 'text-gray-700' : 'text-gray-500'}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}