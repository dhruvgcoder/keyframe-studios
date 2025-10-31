import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Left Side - Uneven Patches - Blue, Purple, Pink */}
      <div className="absolute top-[10%] left-[35%] w-64 h-64 bg-purple-400/25 rounded-full blur-3xl"></div>
      <div className="absolute top-[15%] left-[48%] w-48 h-48 bg-sky-400/27 rounded-full blur-3xl"></div>
      <div className="absolute top-[30%] left-[30%] w-72 h-72 bg-sky-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-[45%] left-[38%] w-68 h-68 bg-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-[40%] left-[45%] w-52 h-52 bg-purple-400/24 rounded-full blur-3xl"></div>
      <div className="absolute top-[60%] left-[42%] w-56 h-56 bg-sky-500/27 rounded-full blur-3xl"></div>
      <div className="absolute top-[55%] left-[35%] w-48 h-48 bg-pink-500/17 rounded-full blur-3xl"></div>
      
      {/* Right Side - Mirrored Patches - Same Colors */}
      <div className="absolute top-[10%] right-[35%] w-64 h-64 bg-purple-400/25 rounded-full blur-3xl"></div>
      <div className="absolute top-[15%] right-[48%] w-48 h-48 bg-sky-400/27 rounded-full blur-3xl"></div>
      <div className="absolute top-[30%] right-[30%] w-72 h-72 bg-sky-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-[45%] right-[38%] w-68 h-68 bg-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-[40%] right-[45%] w-52 h-52 bg-purple-400/24 rounded-full blur-3xl"></div>
      <div className="absolute top-[60%] right-[42%] w-56 h-56 bg-sky-500/27 rounded-full blur-3xl"></div>
      <div className="absolute top-[55%] right-[35%] w-48 h-48 bg-pink-500/17 rounded-full blur-3xl"></div>
      
      {/* Center Patches */}
      <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-56 h-56 bg-pink-400/19 rounded-full blur-3xl"></div>
      <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-80 h-80 bg-pink-500/25 rounded-full blur-3xl"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 w-64 h-64 bg-sky-400/28 rounded-full blur-3xl"></div>
      <div className="absolute top-[65%] left-[50%] -translate-x-1/2 w-60 h-60 bg-purple-500/28 rounded-full blur-3xl"></div>
      
      {/* Far Left Side - Green, Pink, Orange */}
      <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-green-300/35 rounded-full blur-3xl"></div>
      <div className="absolute top-[40%] left-[18%] w-56 h-56 bg-pink-300/19 rounded-full blur-3xl"></div>
      <div className="absolute top-[55%] left-[12%] w-60 h-60 bg-orange-300/22 rounded-full blur-3xl"></div>
      
      {/* Far Right Side - Mirrored Green, Pink, Orange */}
      <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-green-300/35 rounded-full blur-3xl"></div>
      <div className="absolute top-[40%] right-[18%] w-56 h-56 bg-pink-300/19 rounded-full blur-3xl"></div>
      <div className="absolute top-[55%] right-[12%] w-60 h-60 bg-orange-300/22 rounded-full blur-3xl"></div>
      
      <div className="border-l border-r border-brand-gray-200 relative z-10 bg-white/50 backdrop-blur-sm" style={{ backgroundImage: 'linear-gradient(to right, rgba(229, 231, 235, 1) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 231, 235, 1) 1px, transparent 1px)', backgroundSize: '10% 100px' }}>
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
              className="bg-white font-semibold tracking-wider px-8 py-3.5 rounded-md transition-all shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300"
            >
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 bg-clip-text text-transparent">
                VIEW OUR WORK
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
