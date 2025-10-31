import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import VideoModal from './VideoModal';

const portfolioItems = [
  { id: 1, category: 'Corporate', title: 'Innovate Corp Brand Film', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop', youtubeVideoId: '6_pru8U2R1E', badgeColor: 'bg-gradient-to-r from-purple-500 to-purple-600', bgColor: 'bg-purple-50/50' },
  { id: 2, category: 'Social Media', title: 'Quantum Leap Product Launch', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop', youtubeVideoId: 'ysz5S6PUM-U', badgeColor: 'bg-gradient-to-r from-blue-500 to-blue-600', bgColor: 'bg-purple-50/50' },
  { id: 3, category: 'Event', title: 'Nexus Conference Highlights', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop', youtubeVideoId: 'DB_3s_p43fI', badgeColor: 'bg-gradient-to-r from-green-500 to-green-600', bgColor: 'bg-purple-50/50' },
  { id: 4, category: 'YouTube', title: 'Presentation', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop', youtubeVideoId: 'fGAymthRfgY', badgeColor: 'bg-gradient-to-r from-pink-500 to-pink-600', bgColor: 'bg-purple-50/50' },
  { id: 5, category: 'Real Estate', title: 'Luxury Villa Showcase', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop', youtubeVideoId: 'y9peY3qK0_s', badgeColor: 'bg-gradient-to-r from-orange-500 to-orange-600', bgColor: 'bg-purple-50/50' },
  { id: 6, category: 'Creative', title: '"Odyssey" Short Film', image: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=2070&auto=format&fit=crop', youtubeVideoId: 'aqz-KE-bpKQ', badgeColor: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500', bgColor: 'bg-purple-50/50' },
  { id: 7, category: 'Marketing', title: 'Brand Story Documentary', image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop', youtubeVideoId: 'dQw4w9WgXcQ', badgeColor: 'bg-gradient-to-r from-blue-500 to-blue-600', bgColor: 'bg-purple-50/50' },
  { id: 8, category: 'Tutorial', title: 'Product Demo Video', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop', youtubeVideoId: 'ScMzIvxBSi4', badgeColor: 'bg-gradient-to-r from-green-500 to-green-600', bgColor: 'bg-purple-50/50' },
  { id: 9, category: 'Testimonial', title: 'Client Success Stories', image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1972&auto=format&fit=crop', youtubeVideoId: 'jNQXAC9IVRw', badgeColor: 'bg-gradient-to-r from-pink-500 to-pink-600', bgColor: 'bg-purple-50/50' },
];

const Portfolio: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <>
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Colorful Background Accents */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"></div>
        
        <div className="border-l border-r border-t border-brand-gray-200 px-6 md:px-8 py-16 relative z-10 bg-white/50 backdrop-blur-sm">
          <SectionTitle 
            title="Our Work"
            subtitle="A showcase of our finest video editing projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${item.bgColor} rounded-xl border border-brand-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer p-6`}
                onClick={() => setSelectedVideoId(item.youtubeVideoId)}
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-4 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="transition-all duration-500 group-hover:scale-110 flex flex-col items-center gap-2">
                      <PlayCircle className="w-16 h-16 text-white drop-shadow-2xl" strokeWidth={1.5} />
                      <span className="text-white font-semibold text-sm uppercase tracking-wider drop-shadow-lg">Play</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-brand-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <VideoModal videoId={selectedVideoId} onClose={() => setSelectedVideoId(null)} />
    </>
  );
};

export default Portfolio;
