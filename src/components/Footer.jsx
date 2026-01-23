"use client";
import React from 'react';
import { Phone, Mail, Home, Facebook, Instagram, Linkedin, } from 'lucide-react';

const CTAFooter = () => {
  return (
    <div>
    
  

      {/* Footer */}
      <footer className="bg-[#333333] text-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Construction Co.</h3>
              <p className="text-gray-300 mb-6">
                Professional construction services with over 20 years of experience. 
                We deliver quality workmanship on time and within budget.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-[#354547] hover:bg-[#f5a623] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Facebook size={20} className="text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="bg-[#354547] hover:bg-[#f5a623] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Instagram size={20} className="text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="bg-[#354547] hover:bg-[#f5a623] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin size={20} className="text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-300 hover:text-white block hover:translate-x-2 transition-all duration-300">Home</a>
                <a href="#" className="text-gray-300 hover:text-white block hover:translate-x-2 transition-all duration-300">About Us</a>
                <a href="#" className="text-gray-300 hover:text-white block hover:translate-x-2 transition-all duration-300">Services</a>
                <a href="#" className="text-gray-300 hover:text-white block hover:translate-x-2 transition-all duration-300">Projects</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-center group cursor-pointer">
                  <div className="bg-[#354547] hover:bg-[#f5a623] w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300">
                    <Home size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      3 Pawsar, Bicrompur
                    </p>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Munshigonj
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <a href="tel:+3995003219548" className="flex items-center group cursor-pointer">
                  <div className="bg-[#354547] hover:bg-[#f5a623] w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300">
                    <Phone size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    +399 (500) 321 9548
                  </span>
                </a>
                
                {/* Email */}
                <a href="mailto:support@construction.com" className="flex items-center group cursor-pointer">
                  <div className="bg-[#354547] hover:bg-[#f5a623] w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300">
                    <Mail size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    support@construction.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#252f31] py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2014 Construction Co. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CTAFooter;