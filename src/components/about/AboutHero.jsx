import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Increased height for better visual impact */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        {/* Background Image - NEW IMAGE URL */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 via-amber-900/60 to-yellow-900/70"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-white">
          
          {/* Main Title with Border - Centered */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block border-2 sm:border-[3px] border-white/80 px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 bg-black/40 backdrop-blur-sm rounded-lg">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-yellow-50">
                About us
              </h1>
            </div>
          </div>

          {/* Breadcrumb Navigation - Simple */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl backdrop-blur-sm bg-black/30 px-6 py-3 rounded-full border border-white/30">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center" aria-hidden="true">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mx-2 sm:mx-3 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li aria-current="page">
                <span className="text-yellow-300 font-semibold">About us</span>
              </li>
            </ol>
          </nav>

          {/* Simple Divider Line - Made larger */}
          <div className="mt-6 sm:mt-8 h-px w-48 sm:w-60 md:w-72 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent"></div>

          {/* Construction Icon */}
         

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f59e0b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '200px'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}