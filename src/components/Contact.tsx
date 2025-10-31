import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, X } from 'lucide-react';
import SectionTitle from './SectionTitle';

const serviceOptions = [
  'Corporate Videos',
  'Social Media Clips',
  'Event Highlights',
  'YouTube Content',
  'Real Estate Tours',
  'Personal Projects',
  'Other',
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Create JSON object with timestamp
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    
    try {
      // Send to server API
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log('Form submitted successfully:', result.data);
        
        // Store submitted data for display
        setSubmittedData(result.data);
        
        // Show success animation
        setIsSubmitted(true);
        
        // Reset form
        setFormData({ name: '', email: '', service: '', message: '' });
        
        // Hide success message after 2 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setIsSubmitting(false);
        }, 2000);
      } else {
        console.error('Submission failed:', result.message);
        alert('Failed to submit form. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please make sure the server is running.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Colorful Background Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"></div>
      
      <div className="border-l border-r border-t border-brand-gray-200 px-6 md:px-8 py-12 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-3">Let's Create Together</h2>
          <p className="text-base text-brand-gray-600 max-w-2xl mx-auto">Have a project in mind? Fill out the form below and let's start the conversation.</p>
        </div>
        
        {/* Success Message Animation */}
        <AnimatePresence>
          {isSubmitted && (
            <>
              {/* Backdrop Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-md z-[100] flex items-center justify-center"
                onClick={() => setIsSubmitted(false)}
              >
                {/* Success Modal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4"
                  style={{ width: '450px', maxWidth: '100%' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                  
                  {/* Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-pink-500 to-orange-500 origin-left"
                  />
                  
                  <div className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
                      className="inline-block mb-6"
                    >
                      <div className="relative">
                        <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={2} />
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ delay: 0.4, duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                          className="absolute inset-0 bg-green-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-2xl font-bold text-gray-900 mb-2"
                    >
                      Thank You, {submittedData?.name}!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="text-gray-600"
                    >
                      Your message has been received. We'll get back to you soon!
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brand-gray-700 mb-1">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border-2 border-brand-gray-300 rounded-md py-2 px-4 text-brand-gray-900 focus:ring-2 focus:ring-transparent focus:border-transparent focus:outline-none transition focus:shadow-[0_0_0_2px_rgba(168,85,247,0.4)] hover:border-purple-300" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border-2 border-brand-gray-300 rounded-md py-2 px-4 text-brand-gray-900 focus:ring-2 focus:ring-transparent focus:border-transparent focus:outline-none transition focus:shadow-[0_0_0_2px_rgba(59,130,246,0.4)] hover:border-blue-300" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="service" className="block text-sm font-semibold text-brand-gray-700 mb-1">Service of Interest</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full bg-white border-2 border-brand-gray-300 rounded-md py-2 px-4 text-brand-gray-900 focus:ring-2 focus:ring-transparent focus:border-transparent focus:outline-none transition focus:shadow-[0_0_0_2px_rgba(34,197,94,0.4)] hover:border-green-300">
              <option value="" disabled>Select a service</option>
              {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-semibold text-brand-gray-700 mb-1">Project Details</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} required className="w-full bg-white border-2 border-brand-gray-300 rounded-md py-2 px-4 text-brand-gray-900 focus:ring-2 focus:ring-transparent focus:border-transparent focus:outline-none transition focus:shadow-[0_0_0_2px_rgba(236,72,153,0.4)] hover:border-pink-300"></textarea>
          </div>
          <div className="mt-6 text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm tracking-wide px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              whileHover={!isSubmitting ? { scale: 1.03 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    SEND MESSAGE
                  </>
                )}
              </span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
