'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="w-[97%] mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16 rounded-2xl px-4 mb-[50px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Contact us today for a free consultation and quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact-us"
            className="bg-white text-[#f5a623] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center shadow-lg"
          >
            Get Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <a 
            href="tel:+3995003219548"
            className="bg-transparent border-2 border-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;