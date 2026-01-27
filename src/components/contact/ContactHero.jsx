import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Fixed height for all screens */}
       <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contactCover.png"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
          
          {/* Main Title with Border - Centered */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-block border-2 border-white px-6 py-3 sm:px-8 sm:py-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
                Contact us
              </h1>
            </div>
          </div>

          {/* Breadcrumb Navigation - Simple */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm sm:text-base">
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
                  className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-gray-300"
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
                <span className="text-gray-200">Contact us</span>
              </li>
            </ol>
          </nav>

          {/* Simple Divider Line */}
          <div className="mt-4 sm:mt-6 h-px w-32 sm:w-40 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}