import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import VideoModal from './VideoModal';

const portfolioItems = [
  { id: 1, category: 'Corporate', title: 'Innovate Corp Brand Film', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop', youtubeVideoId: '6_pru8U2R1E', badgeColor: 'bg-gradient-to-r from-purple-500 to-purple-600' },
  { id: 2, category: 'Social Media', title: 'Quantum Leap Product Launch', image: 'https://images.unsplash.com/photo-1611162617213-6d22e709c6d6?q=80&w=1974&auto=format&fit=crop', youtubeVideoId: 'ysz5S6PUM-U', badgeColor: 'bg-gradient-to-r from-blue-500 to-blue-600' },
  { id: 3, category: 'Event', title: 'Nexus Conference Highlights', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1974&auto=format&fit=crop', youtubeVideoId: 'DB_3s_p43fI', badgeColor: 'bg-gradient-to-r from-green-500 to-green-600' },
  { id: 4, category: 'YouTube', title: 'Shashank Chutiya Presentation', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop', youtubeVideoId: 'fGAymthRfgY', badgeColor: 'bg-gradient-to-r from-pink-500 to-pink-600' },
  { id: 5, category: 'Real Estate', title: 'Luxury Villa Showcase', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', youtubeVideoId: 'y9peY3qK0_s', badgeColor: 'bg-gradient-to-r from-orange-500 to-orange-600' },
  { id: 6, category: 'Creative', title: '"Odyssey" Short Film', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop', youtubeVideoId: 'aqz-KE-bpKQ', badgeColor: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500' },
];

const Portfolio: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <>
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 bg-brand-gray-50">
        <div className="border-l border-r border-t border-brand-gray-200 px-6 md:px-8 py-16">
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
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedVideoId(item.youtubeVideoId)}
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <div className="transition-all duration-500 group-hover:scale-110">
                    <div className="relative">
                      <PlayCircle className="w-20 h-20 opacity-90 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                      <div className={`absolute inset-0 ${item.badgeColor} opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-500`}></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className={`inline-block px-3 py-1 ${item.badgeColor} backdrop-blur-sm text-xs font-semibold rounded-full mb-3 shadow-lg`}>{item.category}</span>
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
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
