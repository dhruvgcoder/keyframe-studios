import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Colorful Background Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"></div>
      
      <div className="border-l border-r border-t border-brand-gray-200 px-6 md:px-8 py-16 relative z-10 bg-white/50 backdrop-blur-sm">
        <SectionTitle 
          title="Why Choose Keyframe Studios?" 
          subtitle="We're more than just editors; we're storytellers." 
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="src/assets/kf.svg" 
              alt="Keyframe Studios Logo" 
              className="rounded-lg object-contain w-full h-full max-h-[500px]"
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-brand-gray-600">
              Our passion lies in finding the narrative in every project and bringing it to the forefront. We combine technical expertise with creative intuition to deliver videos that not only look amazing but also resonate with viewers.
            </p>
            <p className="mt-4 text-lg text-brand-gray-600">
              Our process is collaborative and transparent. We work closely with you at every step to ensure your vision is realized, on time and on budget.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
