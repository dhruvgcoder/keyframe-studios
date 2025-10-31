import React from 'react';
import { Briefcase, Share2, PartyPopper, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const services = [
  { icon: Briefcase, title: 'Corporate Videos', description: 'Professional editing for internal and external communications.', color: 'from-purple-500 to-purple-600' },
  { icon: Share2, title: 'Social Media Clips', description: 'Engaging, short-form content optimized for all platforms.', color: 'from-blue-500 to-blue-600' },
  { icon: PartyPopper, title: 'Event Highlights', description: 'Capturing the energy and key moments of your events.', color: 'from-green-500 to-green-600' },
  { icon: Youtube, title: 'YouTube Content', description: 'Full-service editing to grow your channel and audience.', color: 'from-pink-500 to-pink-600' },
  { icon: Briefcase, title: 'Real Estate Tours', description: 'Stunning property videos that attract potential buyers.', color: 'from-orange-500 to-orange-600' },
  { icon: Share2, title: 'Personal Projects', description: 'Bringing your personal stories and creative visions to life.', color: 'from-purple-500 to-blue-500' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="border-l border-r border-brand-gray-200 px-6 md:px-8 py-16">
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
              className="relative bg-gradient-to-br from-white to-brand-gray-50 p-10 rounded-xl text-center border-2 border-brand-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-flex p-5 bg-gradient-to-br ${service.color} bg-opacity-10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-10 h-10 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} strokeWidth={1.5} style={{ stroke: `url(#gradient-${index})` }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className={service.color.split(' ')[0].replace('from-', '')} />
                        <stop offset="100%" className={service.color.split(' ')[1].replace('to-', '')} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-blue-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{service.title}</h3>
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
