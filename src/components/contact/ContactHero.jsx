import React from "react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Fixed height for all screens */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        {/* Background Image - NEW IMAGE */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
          {/* Main Title with Glow Effect */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg">
                Contact us
              </h1>
              <div className="h-1 w-20 sm:w-24 md:w-32 mx-auto mt-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Breadcrumb Navigation - Modern */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors duration-200 bg-black/40 px-3 py-1 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center" aria-hidden="true">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-yellow-500"
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
                <span className="text-yellow-400 font-medium bg-black/40 px-3 py-1 rounded-md">
                  Contact us
                </span>
              </li>
            </ol>
          </nav>

          {/* Contact Tagline */}
          <p className="mt-4 text-center text-sm sm:text-base md:text-lg text-gray-200 max-w-md mx-auto px-4">
            Get in touch with our construction experts
          </p>
        </div>
      </div>
    </section>
  );
}
