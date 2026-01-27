import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Increased height for better visual impact */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/aboutCover.png"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-white">
          
          {/* Main Title with Border - Centered */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block border-2 sm:border-[3px] border-white px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                About us
              </h1>
            </div>
          </div>

          {/* Breadcrumb Navigation - Simple */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center" aria-hidden="true">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mx-2 sm:mx-3 text-gray-300"
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
                <span className="text-gray-200 font-medium">About us</span>
              </li>
            </ol>
          </nav>

          {/* Simple Divider Line - Made larger */}
          <div className="mt-6 sm:mt-8 h-px w-48 sm:w-60 md:w-72 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}