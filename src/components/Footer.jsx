"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Home,
  Facebook,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showBackToTop = mounted && isVisible;

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#e0951f] to-[#f5a623] hover:from-[#f5a623] hover:to-[#ffb732] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ChevronUp size={24} className="sm:size-7" />
        </button>
      )}

      {/* फ़ुटर - कंस्ट्रक्शन थीम */}
      <footer className="relative text-white overflow-hidden bg-gray-900">
        {/* कंस्ट्रक्शन पैटर्न बैकग्राउंड */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
              {/* Company Info */}
              <div className="text-center sm:text-left lg:text-left">
                <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-white">
                  Build Master{" "}
                  <span className="text-[#e0951f]">Constructions</span>
                </h3>
                <p className="text-gray-200 mb-6 text-base lg:text-lg leading-relaxed">
                  Professional construction services with over 20 years of
                  experience. Building dreams, one project at a time.
                </p>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a
                    href="https://facebook.com"
                    className="bg-white/10 hover:bg-[#e0951f] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="bg-white/10 hover:bg-[#e0951f] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="bg-white/10 hover:bg-[#e0951f] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className="text-center sm:text-left lg:text-left">
                <h4 className="text-xl lg:text-xl font-semibold mb-4 lg:mb-6 text-white border-l-4 border-[#e0951f] pl-3">
                  Our Services
                </h4>
                <div className="space-y-3">
                  <a
                    href=""
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Residential Construction
                  </a>
                  <a
                    href=""
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Commercial Buildings
                  </a>
                  <a
                    href=""
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Renovation & Remodeling
                  </a>
                  <a
                    href=""
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Structural Design
                  </a>
                  <a
                    href=""
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Project Management
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center sm:text-left lg:text-left">
                <h4 className="text-xl lg:text-xl font-semibold mb-4 lg:mb-6 text-white border-l-4 border-[#e0951f] pl-3">
                  Quick Links
                </h4>
                <div className="space-y-3">
                  <a
                    href="/"
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Home
                  </a>
                  <a
                    href="/about-us"
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    About Us
                  </a>
                  <a
                    href="/service"
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Services
                  </a>
                  <a
                    href="/projects"
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Projects
                  </a>
                  <a
                    href="/contact-us"
                    className="text-gray-200 hover:text-[#e0951f] block transition-colors duration-300 hover:translate-x-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-center sm:items-start lg:items-start">
                <h4 className="text-xl lg:text-xl font-semibold mb-6 text-center sm:text-left text-white border-l-4 border-[#e0951f] pl-3">
                  Contact Info
                </h4>
                <div className="space-y-6 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Home size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-200">123 Construction Street</p>
                      <p className="text-gray-200">
                        Industrial Area, City Center
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+1234567890"
                    className="flex items-center hover:text-[#e0951f] transition-colors"
                  >
                    <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Phone size={16} className="text-white" />
                    </div>
                    <span className="text-gray-200">+1 (234) 567-890</span>
                  </a>

                  <a
                    href="mailto:info@buildmaster.com"
                    className="flex items-center hover:text-[#e0951f] transition-colors"
                  >
                    <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Mail size={16} className="text-white" />
                    </div>
                    <span className="text-gray-200">info@buildmaster.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 py-6 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-300 text-sm text-center">
                  © {new Date().getFullYear()} Build Master Constructions. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
