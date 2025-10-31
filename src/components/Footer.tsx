import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 px-8">
          <p className="text-brand-gray-500 text-sm">
            © {currentYear} Keyframe Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-brand-gray-500 hover:text-brand-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-gray-500 hover:text-brand-gray-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
