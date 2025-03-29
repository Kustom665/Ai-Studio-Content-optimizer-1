import React from 'react';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { SectionTitle } from '../shared/SectionTitle';

export function ContentOptimizer() {
  const contentSuggestions = [
    {
      type: 'success',
      text: 'Keywords are well-distributed throughout the content',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      type: 'warning',
      text: 'Consider adding more internal links',
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />
    },
    {
      type: 'success',
      text: 'Content length meets recommended guidelines',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      type: 'warning',
      text: 'Header structure could be improved',
      icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Content Optimizer"
          subtitle="AI-powered suggestions to improve your content's SEO performance"
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-semibold">Content Analysis</h3>
            </div>
            
            <div className="space-y-4">
              {contentSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50"
                >
                  {suggestion.icon}
                  <p className="text-gray-700">{suggestion.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Generate Optimization Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}