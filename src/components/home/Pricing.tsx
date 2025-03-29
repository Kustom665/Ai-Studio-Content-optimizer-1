import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="$29"
            features={[
              "5,000 API calls/month",
              "Basic AI models",
              "Email support",
              "API access",
              "Basic analytics"
            ]}
            buttonText="Start Free Trial"
            highlighted={false}
          />
          
          <PricingCard
            title="Professional"
            price="$99"
            features={[
              "50,000 API calls/month",
              "Advanced AI models",
              "Priority support",
              "API access",
              "Advanced analytics",
              "Custom training"
            ]}
            buttonText="Get Started"
            highlighted={true}
          />
          
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited API calls",
              "All AI models",
              "24/7 support",
              "API access",
              "Full analytics suite",
              "Custom training",
              "Dedicated account manager"
            ]}
            buttonText="Contact Sales"
            highlighted={false}
          />
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

function PricingCard({ title, price, features, buttonText, highlighted }: PricingCardProps) {
  return (
    <div className={`
      p-8 rounded-xl 
      ${highlighted 
        ? 'bg-indigo-600 text-white shadow-xl scale-105' 
        : 'bg-white text-gray-900 border'
      }
    `}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-sm">/month</span>}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="w-5 h-5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`
        w-full py-2 rounded-lg transition-colors
        ${highlighted
          ? 'bg-white text-indigo-600 hover:bg-gray-100'
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }
      `}>
        {buttonText}
      </button>
    </div>
  );
}