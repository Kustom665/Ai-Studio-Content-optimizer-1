import React from 'react';
import { Clock, Edit2, Trash2 } from 'lucide-react';

export function RecentProjects() {
  const projects = [
    {
      title: "Product Launch Video",
      lastModified: "2 hours ago",
      thumbnail: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=500&q=80"
    },
    {
      title: "Tutorial Series Intro",
      lastModified: "Yesterday",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80"
    },
    {
      title: "Company Overview",
      lastModified: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=500&q=80"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-video">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {project.lastModified}
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 hover:text-indigo-600 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-1 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}