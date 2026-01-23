import React from 'react';
import { Laptop, Film, Clock, Building2 } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Architecture Plans',
    },
    {
      icon: <Film className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Construction Designs',
    },
    {
      icon: <Clock className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Fast Building',
    },
    {
      icon: <Building2 className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'House Rebuilding',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="h-px w-12 md:w-24 bg-gray-400"></div>
            <span className="text-gray-600 text-sm md:text-lg">what we offer</span>
            <div className="h-px w-12 md:w-24 bg-gray-400"></div>
          </div>
        </div>

        {/* Services Grid - 2 columns on mobile arranged as 1-2, 3-4 */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
            >
              {/* Circular Icon Container */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-4 md:mb-6">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full border-8 md:border-[12px] border-amber-400"></div>
                
                {/* Inner Circle - with hover effect */}
                <div className="absolute inset-4 md:inset-6 rounded-full border-2 border-amber-300 flex flex-col items-center justify-center bg-white transition-all duration-500 group-hover:bg-amber-400">
                  {/* Icon */}
                  <div className="text-amber-400 transition-colors duration-500 group-hover:text-white mb-2 md:mb-3">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center px-2 md:px-4 transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}