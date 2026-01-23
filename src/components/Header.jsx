"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

const ConstructionHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState('HOME');

  // Pathname change pachhi active nav update karva
  useEffect(() => {
    const currentPath = pathname;
    
    if (currentPath === '/') {
      setActiveNav('HOME');
    } else if (currentPath === '/about-us' || currentPath.startsWith('/about-us/')) {
      setActiveNav('ABOUT');
    } else if (currentPath === '/projects' || currentPath.startsWith('/projects/')) {
      setActiveNav('PROJECTS');
    } else if (currentPath === '/services' || currentPath.startsWith('/services/')) {
      setActiveNav('SERVICES');
    } else if (currentPath === '/contact-us' || currentPath.startsWith('/contact-us/')) {
      setActiveNav('CONTACT');
    }
  }, [pathname]);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about-us' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'SERVICES', href: '/service' },
    { name: 'CONTACT', href: '/contact-us' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full">
      {/* Logo and Contact Info Section - ORIGINAL DESKTOP LAYOUT */}
      <div className="bg-gray-800 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {/* Logo - Left side - Mobile size fixed */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Link href="/">
                <div className="relative w-40 h-14 sm:w-48 sm:h-16 md:w-56 md:h-20">
                  <Image
                    src={logo}
                    alt="CONSTRUCTION"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Phone and Email - Right side (desktop) - ORIGINAL */}
            <div className="hidden md:flex items-center gap-8">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full p-2">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm font-semibold">CALL US</p>
                  <a href="tel:1234-5678-9012" className="text-base font-bold hover:text-yellow-400 transition">
                    1234-5678-9012
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full p-2">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm font-semibold">EMAIL</p>
                  <a href="mailto:info@domain.com" className="text-base font-bold hover:text-yellow-400 transition">
                    info@domain.com
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile - Below logo - IMPROVED LAYOUT */}
            <div className="md:hidden w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-2 rounded-lg">
                <Phone size={14} className="text-yellow-400 flex-shrink-0" />
                <a href="tel:1234-5678-9012" className="text-white text-xs sm:text-sm font-medium hover:text-yellow-400 transition whitespace-nowrap">
                  1234-5678-9012
                </a>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-2 rounded-lg">
                <Mail size={14} className="text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@domain.com" className="text-white text-xs sm:text-sm font-medium hover:text-yellow-400 transition truncate">
                  info@domain.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - ORIGINAL DESKTOP WITH MOBILE IMPROVEMENTS */}
      <div className="bg-white shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation - ORIGINAL */}
            <nav className="hidden lg:flex items-stretch h-full w-full">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <div key={item.name} className="relative flex items-stretch flex-1">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`relative w-full py-8 text-base font-semibold tracking-wider transition-all duration-300 flex items-center justify-center ${
                        active 
                          ? 'text-gray-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {active && (
                        <div 
                          className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-yellow-500" 
                          style={{
                            clipPath: 'polygon(0 0, 100% 0, 87% 100%, 0% 100%)'
                          }}
                        />
                      )}
                      <span className="relative z-10">
                        {item.name}
                      </span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="w-px bg-gray-300 self-stretch"></div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Navigation - IMPROVED */}
            <div className="lg:hidden w-full flex justify-between items-center py-4">
              <span className="text-gray-800 font-bold text-base sm:text-lg">
                {navItems.find(item => isActive(item.href))?.name || 'HOME'}
              </span>
              <button 
                className="text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown - IMPROVED */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden absolute top-full left-0 right-0 z-50 bg-white shadow-xl border-t border-gray-200 animate-fadeIn">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full text-left px-6 py-4 font-semibold text-base transition-all duration-200 ${
                        active 
                          ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 text-gray-800 border-l-4 border-yellow-500' 
                          : 'text-gray-700 hover:bg-gray-50 hover:pl-8'
                      }`}
                    >
                      {item.name}
                      {active && (
                        <span className="ml-2 text-yellow-600 text-sm">●</span>
                      )}
                    </Link>
                  </div>
                );
              })}
              
              {/* Mobile Contact Info in Menu - OPTIONAL, can remove if not needed */}
              <div className="bg-gray-800 p-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-yellow-400" />
                    <a href="tel:1234-5678-9012" className="text-white text-sm font-medium hover:text-yellow-400 transition">
                      Call Now
                    </a>
                  </div>
                  <div className="h-4 w-px bg-gray-600 hidden sm:block"></div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-yellow-400" />
                    <a href="mailto:info@domain.com" className="text-white text-sm font-medium hover:text-yellow-400 transition">
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
        
        {/* Bottom Shadow */}
        <div className="h-1 bg-gradient-to-b from-gray-300 to-transparent"></div>
      </div>
    </header>
  );
};

export default ConstructionHeader;