"use client";

import {
  Droplets,
  Zap,
  HardHat,
  BrickWall,
  PaintBucket,
  Home,
  Wrench,
  Building,
} from "lucide-react";

export default function ConstructionServicesSection() {
  const services = [
    { 
      name: "Plumbing", 
      icon: <Droplets className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "Water supply, drainage, pipe installation"
    },
    { 
      name: "Electrical", 
      icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "Wiring, fixtures, electrical systems"
    },
    { 
      name: "Carpentry", 
      icon: <HardHat className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "Woodwork, furniture, structural work"
    },
    { 
      name: "Masonry", 
      icon: <BrickWall className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "Brickwork, plastering, concrete"
    },
    { 
      name: "Painting", 
      icon: <PaintBucket className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "Interior & exterior painting"
    },
    { 
      name: "Roofing", 
      icon: <Home className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "Roof installation & repair"
    },
    { 
      name: "Renovation", 
      icon: <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "Home & office renovations"
    },
    { 
      name: "Construction", 
      icon: <Building className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      description: "New building construction"
    },
  ];

  return (
    <div className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Construction Services
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Professional services for all your construction and renovation needs
          </p>
        </div>

        {/* Services Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-yellow-200 group cursor-pointer hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-yellow-50 mx-auto mb-3 sm:mb-4 md:mb-5 group-hover:bg-yellow-100 transition-colors duration-300">
                {service.icon}
              </div>
              
              {/* Service Name */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center mb-2 sm:mb-3 group-hover:text-yellow-700 transition-colors line-clamp-1">
                {service.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-center text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}