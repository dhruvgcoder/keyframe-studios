import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalEmbed from '../components/CalEmbed';
import { motion } from 'framer-motion';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 relative overflow-hidden">
          {/* Colorful Background Accents */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"></div>
          
          <div className="border-l border-r border-t border-brand-gray-200 px-6 md:px-8 py-16 relative z-10 bg-white/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-brand-gray-900">Book a Discovery Session</h1>
              <p className="mt-4 text-lg text-brand-gray-600 max-w-2xl mx-auto">
                Choose a time that works for you. We're excited to learn about your project and discuss how we can help bring your vision to life.
              </p>
            </motion.div>
            <CalEmbed />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
