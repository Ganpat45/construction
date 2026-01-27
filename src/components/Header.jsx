"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';

const ConstructionHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState('HOME');

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Update active nav on pathname change
  useEffect(() => {
    if (pathname === '/') {
      setActiveNav('HOME');
    } else if (pathname.startsWith('/about-us')) {
      setActiveNav('ABOUT');
    } else if (pathname.startsWith('/projects')) {
      setActiveNav('PROJECTS');
    } else if (pathname.startsWith('/service')) {
      setActiveNav('SERVICES');
    } else if (pathname.startsWith('/contact-us')) {
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

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full">
      {/* Top Contact Bar - Desktop के लिए */}
      <div className={`bg-gray-800 transition-all duration-300 ${
        isSticky ? 'hidden lg:block' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-6 gap-4 lg:gap-0">
            {/* Logo - RESPONSIVE SIZING ONLY */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <Link href="/" className="block w-full lg:w-auto">
                <div className="relative w-40 h-12 sm:w-48 sm:h-16 md:w-56 md:h-20 lg:w-60 lg:h-20 xl:w-64 xl:h-24 mx-auto lg:mx-0">
                  <Image
                    src={logo}
                    alt="CONSTRUCTION"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm font-semibold">CALL US</p>
                  <a 
                    href="tel:1234-5678-9012" 
                    className="text-base font-bold hover:text-yellow-400 transition whitespace-nowrap"
                  >
                    1234-5678-9012
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm font-semibold">EMAIL</p>
                  <a 
                    href="mailto:info@domain.com" 
                    className="text-base font-bold hover:text-yellow-400 transition"
                  >
                    info@domain.com
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Contact Info - Only show when header not sticky */}
            {!isSticky && (
              <div className="lg:hidden w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="flex items-center justify-center gap-2 bg-gray-900/80 px-4 py-3 rounded-lg w-full sm:w-auto">
                  <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                  <a 
                    href="tel:1234-5678-9012" 
                    className="text-white text-sm font-medium hover:text-yellow-400 transition"
                  >
                    1234-5678-9012
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-900/80 px-4 py-3 rounded-lg w-full sm:w-auto">
                  <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@domain.com" 
                    className="text-white text-sm font-medium hover:text-yellow-400 transition"
                  >
                    info@domain.com
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Sticky Logo - Desktop के लिए */}
            {isSticky && (
              <div className="hidden lg:flex items-center mr-8"> {/* यहाँ mr-8 add किया है */}
                <Link href="/" className="block">
                  <div className="relative w-48 h-12">
                    <Image
                      src={logo}
                      alt="CONSTRUCTION"
                      fill
                      className="object-contain"
                      style={{ 
                        filter: 'brightness(0) saturate(100%) invert(30%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%) contrast(100%)' 
                      }}
                    />
                  </div>
                </Link>
              </div>
            )}

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-stretch h-full ${
              isSticky ? 'flex-1' : 'flex-1' 
            }`}>
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <div key={item.name} className="relative flex items-stretch flex-1">
                    <Link
                      href={item.href}
                      className={`relative w-full ${isSticky ? 'py-4' : 'py-6'} text-sm font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center ${
                        active 
                          ? 'text-white' 
                          : 'text-gray-700 hover:bg-gray-50'
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
                      <span className="relative z-10 px-4">
                        {item.name}
                      </span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="w-px bg-gray-200 self-stretch"></div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Header - Always visible */}
            <div className="lg:hidden w-full flex items-center justify-between py-3">
              {/* Current Page Title */}
              <div className="flex items-center">
                <span className="text-gray-800 font-bold text-lg">
                  {activeNav}
                </span>
              </div>
              
              {/* Menu Button */}
              <button 
                className={`p-2 rounded-lg transition-colors ${
                  isSticky ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl overflow-hidden flex flex-col">
              {/* Menu Header - RESPONSIVE LOGO SIZING */}
              <div className="bg-gray-800 p-6 flex items-center justify-between border-b border-gray-700">
                <div className="relative w-full h-12">
                  <Image
                    src={logo}
                    alt="CONSTRUCTION"
                    fill
                    className="object-contain object-left"
                    sizes="100%"
                  />
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-700/50 text-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <div key={item.name} className="px-2 mb-1 last:mb-0">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between w-full text-left px-4 py-4 font-semibold text-lg rounded-lg transition-all duration-200 ${
                          active 
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight size={20} className={active ? 'text-white' : 'text-gray-400'} />
                      </Link>
                    </div>
                  );
                })}

                {/* Contact Info in Mobile Menu */}
                <div className="mt-8 px-6">
                  <div className="bg-gray-900 rounded-2xl p-5">
                    <h3 className="text-white font-bold text-lg mb-4 text-center">CONTACT US</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-xl">
                        <div className="flex-shrink-0">
                          <div className="bg-yellow-500 rounded-full p-2">
                            <Phone size={18} className="text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-300 text-xs font-semibold uppercase">CALL US</p>
                          <a 
                            href="tel:1234-5678-9012" 
                            className="text-white font-bold text-base hover:text-yellow-400 transition block truncate"
                          >
                            1234-5678-9012
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-xl">
                        <div className="flex-shrink-0">
                          <div className="bg-yellow-500 rounded-full p-2">
                            <Mail size={18} className="text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-300 text-xs font-semibold uppercase">EMAIL</p>
                          <a 
                            href="mailto:info@domain.com" 
                            className="text-white font-bold text-base hover:text-yellow-400 transition block truncate"
                          >
                            info@domain.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Shadow */}
        {isSticky && (
          <div className="h-1 bg-gradient-to-b from-gray-300/50 to-transparent"></div>
        )}
      </div>

      {/* Add padding to content when header is sticky */}
      {isSticky && (
        <div className="h-[61px] lg:h-[73px]"></div>
      )}
    </header>
  );
};

export default ConstructionHeader;