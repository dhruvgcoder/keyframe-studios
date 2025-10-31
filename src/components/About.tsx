import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      <div className="border-l border-r border-t border-brand-gray-200 px-6 md:px-8 py-16">
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
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1964&auto=format&fit=crop" 
              alt="Video editing suite" 
              className="rounded-lg object-cover w-full h-full max-h-[500px] shadow-subtle"
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
