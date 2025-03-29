import React from 'react';
import { Play } from 'lucide-react';

export function Templates() {
  const templates = [
    {
      title: "Product Demo",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      duration: "1:30"
    },
    {
      title: "Educational Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&q=80",
      duration: "2:00"
    },
    {
      title: "Marketing Video",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
      duration: "1:45"
    },
    {
      title: "Company Introduction",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80",
      duration: "2:30"
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Video Templates</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <div key={index} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={template.thumbnail}
              alt={template.title}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white text-indigo-600 p-3 rounded-full">
                <Play className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold">{template.title}</h3>
              <p className="text-sm text-gray-500">{template.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}