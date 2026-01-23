'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// ALL components ko dynamic import karo
const HeroSlider = dynamic(
  () => import('@/components/Heropage'),
  { 
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[90vh] sm:h-screen overflow-hidden bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400">Loading Hero Slider...</div>
        </div>
      </div>
    )
  }
);

const ServicesSection = dynamic(
  () => import('@/components/ServicesSection'),
  { ssr: false }
);

const Projects = dynamic(
  () => import('@/components/Projects'),
  { ssr: false }
);

const Blogpage = dynamic(
  () => import('@/components/Blogpage'),
  { ssr: false }
);

const Accordionpage = dynamic(
  () => import('@/components/Accordionpage'),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import('@/components/Testimonials'),
  { ssr: false }
);

const CTApage = dynamic(
  () => import('@/components/CTApage'),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <Projects />
      <Blogpage />
       <Accordionpage />
      <Testimonials />
      <CTApage />
    </div>
  );
};

export default Page;