import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-br from-brand-blue/10 via-white to-white rounded-full blur-3xl"></div>
      </div>
      <div className="border-l border-r border-brand-gray-200" style={{ backgroundImage: 'linear-gradient(to right, rgba(229, 231, 235, 1) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 231, 235, 1) 1px, transparent 1px)', backgroundSize: '10% 100px' }}>
        <div className="min-h-[calc(100vh-80px)] text-center flex flex-col items-center justify-center py-20 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl font-bold text-brand-gray-900 leading-tight max-w-4xl"
          >
            Luxury Visuals <br /> Timeless Impact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-brand-gray-600 max-w-2xl"
          >
            We transform raw footage into compelling visual narratives that captivate and engage your audience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white font-semibold tracking-wider px-8 py-3.5 rounded-md transition-all shadow-lg hover:shadow-xl"
              >
                BOOK A SESSION
              </motion.button>
            </Link>
            <motion.button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 text-white font-semibold tracking-wider px-8 py-3.5 rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              VIEW OUR WORK
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
