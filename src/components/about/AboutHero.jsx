import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative h-72 w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Cover.png')",
        }}
      >
        {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        {/* Title with Border */}
        <div className="border-2 border-white px-8 py-4 mb-6">
          <h1 className="text-4xl font-bold tracking-wide">About</h1>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm">
          <a href="/" className="hover:text-yellow-400 transition-colors">
            home
          </a>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
          </svg>
          <span className="text-gray-200">About</span>
        </div>

        {/* Decorative Line */}
        <div className="mt-4 h-px w-40 bg-white opacity-50"></div>
      </div>
    </div>
  );
}
