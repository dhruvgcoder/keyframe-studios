import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const navItems = ['SERVICES', 'PORTFOLIO', 'ABOUT', 'CONTACT'];

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState('HOME');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setActiveItem('');
      return;
    }

    const sections = navItems.map(item => document.getElementById(item.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id.toUpperCase());
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Trigger when section is in the middle of the viewport
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isHomePage]);

  return (
    <header className="sticky top-0 bg-white/75 backdrop-blur-md z-50">
      <div className="h-1.5 flex w-full">
        <div className="w-1/5 bg-[#8B5CF6]"></div>
        <div className="w-1/5 bg-[#3B82F6]"></div>
        <div className="w-1/5 bg-[#10B981]"></div>
        <div className="w-1/5 bg-[#F778BA]"></div>
        <div className="w-1/5 bg-[#F97316]"></div>
      </div>
      <div className="border-b border-brand-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-l border-r border-brand-gray-200 h-16">
            <Link to="/" className="flex items-center ml-2" onClick={() => setActiveItem('HOME')}>
              <span className="font-bold text-lg tracking-wider text-brand-gray-900">KEYFRAME STUDIOS</span>
            </Link>
            
            <nav className="hidden md:flex items-center">
              {isHomePage && navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveItem(item)}
                  className={`relative text-sm font-semibold tracking-wider py-4 px-5 transition-colors duration-200 ${
                    activeItem === item ? 'text-brand-gray-900' : 'text-brand-gray-500 hover:text-brand-gray-900'
                  }`}
                >
                  {item}
                  {activeItem === item && (
                    <motion.span 
                      layoutId="active-nav-item"
                      className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-brand-blue"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              {!isHomePage && (
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-sm font-semibold tracking-wider py-4 px-5 text-brand-gray-900 hover:text-brand-blue transition-colors mr-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>BACK TO HOME</span>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
