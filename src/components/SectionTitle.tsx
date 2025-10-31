import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative inline-block">
        <h2 className="text-4xl font-bold text-brand-gray-900">{title}</h2>
        <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-pink-500 to-orange-500"></div>
      </div>
      <p className="mt-8 text-lg text-brand-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};

export default SectionTitle;
