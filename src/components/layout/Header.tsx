import React from 'react';
import { Video, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white border-b z-50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Video className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">AI Video Studio</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Templates</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              New Project
            </button>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}