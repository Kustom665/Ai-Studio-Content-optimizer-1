import React from 'react';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { MarketingTools } from './components/marketing/MarketingTools';
import { MarketingInsights } from './components/marketing/MarketingInsights';
import { SeoAnalytics } from './components/seo/SeoAnalytics';
import { ContentOptimizer } from './components/seo/ContentOptimizer';
import { VideoStudio } from './components/video/VideoStudio';
import { Templates } from './components/video/Templates';
import { RecentProjects } from './components/video/RecentProjects';
import { ChatInterface } from './components/chat/ChatInterface';
import { Header } from './components/layout/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main>
        {/* Marketing & Analytics */}
        <MarketingTools />
        <MarketingInsights />
        
        {/* SEO Tools */}
        <SeoAnalytics />
        <ContentOptimizer />
        
        {/* Video Creation Studio */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <VideoStudio />
            <Templates />
            <RecentProjects />
          </div>
        </section>

        {/* AI Chat Support */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ChatInterface />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">Features</a></li>
                <li><a href="#" className="hover:text-indigo-400">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-400">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">About</a></li>
                <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">Documentation</a></li>
                <li><a href="#" className="hover:text-indigo-400">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-400">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-400">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 AI Marketing Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;