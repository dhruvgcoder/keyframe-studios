import React from 'react';
import { Youtube, Instagram, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const services = [
  { icon: Youtube, title: 'YouTube Videos', description: 'Professional editing for long-form content, tutorials, and vlogs to grow your channel.', color: 'from-red-500 to-red-600', bgColor: 'bg-red-50' },
  { icon: Instagram, title: 'Social Media Clips', description: 'Engaging short-form content for Instagram, TikTok, and all social platforms.', color: 'from-pink-500 to-purple-500', bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50' },
  { icon: PartyPopper, title: 'Event Highlights', description: 'Capturing the energy and key moments of your events.', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-16">
      {/* Colorful Background Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"></div>
      
      <div className="border-l border-r border-t border-brand-gray-200 px-6 md:px-8 py-16 relative z-10 bg-white/50 backdrop-blur-sm">
        <SectionTitle 
          title="Our Services"
          subtitle="Everything you need to create stunning video content."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${service.bgColor} p-10 rounded-xl text-center border border-brand-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3">{service.title}</h3>
                <p className="text-base text-brand-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
