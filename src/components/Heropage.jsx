"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  
  // Refs for consistent values
  const slidesRef = useRef([
    {
      id: 1,
      title: "Construction Template",
      subtitle: "Built with Bootstrap",
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. lorem quis bibendum auctor, nisi elit consequant.",
      bgImage: "/slide1.png", // Direct path from public folder
      layout: "center",
      buttonLink: "/contact-us"
    },
    {
      id: 2,
      title: "Flexible and Easy to Use Template",
      subtitle: "Ultra Responsive Layout",
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. lorem quis bibendum auctor, nisi elit consequant.",
      bgImage: "/slide3.png", // Direct path from public folder
      rightImage: "/jcb1.png", // Direct path from public folder
      layout: "left",
      buttonLink: "/contact-us"
    },
    {
      id: 3,
      title: "We Are Construction Company",
      subtitle: "from small houses to big buildings",
      bgImage: "/slide2.png", // Direct path from public folder
      icons: false,
      rightImage: "/jcb2.png", // Direct path from public folder
      layout: "left",
      buttonLink: "/contact-us"
    },
  ]);

  const autoPlayRef = useRef(null);

  // Fixed delay values array
  const subtitleDelays = [0, 100, 200, 300, 400, 500];
  const highlightWords = ["bootstrap", "responsive", "buildings"];

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  useEffect(() => {
    // Clear any existing interval
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    if (mounted && isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlideAuto();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [mounted, isAutoPlaying, currentSlide]); // Added currentSlide to dependencies

  const nextSlideAuto = () => {
    if (!mounted || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slidesRef.current.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slidesRef.current.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slidesRef.current.length) % slidesRef.current.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleButtonClick = (link) => {
    router.push(link);
  };

  // Don't render animations until client-side
  if (!mounted) {
    return (
      <div className="relative w-full h-[90vh] sm:h-screen overflow-hidden bg-gray-900">
        {/* Static placeholder for server */}
        <div className="absolute inset-0 bg-gray-800"></div>
      </div>
    );
  }

  const currentSlideData = slidesRef.current[currentSlide];

  return (
    <div 
      className="relative w-full h-[90vh] sm:h-screen overflow-hidden bg-gray-900"
      suppressHydrationWarning
    >
      {/* Inline style tag with animations */}
      <style jsx>{`
        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes heroFloatSlow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-25px) scale(1.02);
          }
        }
        
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes heroFadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-float {
          animation: heroFloat 6s ease-in-out infinite;
        }
        
        .hero-float-slow {
          animation: heroFloatSlow 8s ease-in-out infinite;
        }
        
        .hero-fadeInUp {
          animation: heroFadeInUp 1s ease-out forwards;
        }
        
        .hero-fadeInDown {
          animation: heroFadeInDown 1s ease-out forwards;
        }
      `}</style>

      {/* Slides */}
      {slidesRef.current.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100 z-0 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
          suppressHydrationWarning
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden" suppressHydrationWarning>
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              suppressHydrationWarning
            ></div>
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-0">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
              {slide.layout === "center" && (
                <div className="flex justify-center items-center h-full">
                  <div className={`max-w-3xl lg:max-w-4xl xl:max-w-5xl text-center px-4 sm:px-8 transform transition-all duration-1000 delay-300 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-10 opacity-0"
                  }`}>
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight tracking-tight hero-fadeInUp">
                      {slide.title}
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-4 md:mb-6 lg:mb-8 font-light">
                      {slide.subtitle.split(" ").map((word, i) => {
                        const delayIndex = Math.min(i, subtitleDelays.length - 1);
                        const isHighlight = highlightWords.includes(word.toLowerCase());
                        return (
                          <span
                            key={i}
                            className={`inline-block transition-all duration-500 ${isHighlight ? "bg-yellow-500 text-white px-2 py-1 transform hover:scale-105" : "text-white"} ${
                              isMobile ? "mx-0.5" : "mx-1"
                            } ${index === currentSlide ? "hero-fadeInUp" : ""}`}
                            style={{
                              animationDelay: `${subtitleDelays[delayIndex]}ms`,
                            }}
                            suppressHydrationWarning
                          >
                            {word}
                          </span>
                        );
                      })}
                    </h2>
                    {slide.description && (
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 transform transition-all duration-1000 delay-500">
                        {slide.description}
                      </p>
                    )}
                    {/* Slide 1 button - SLIDER 1 STYLE */}
                    <div className="flex justify-center">
                      <button 
                        onClick={() => handleButtonClick(slide.buttonLink)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {slide.layout === "left" && (
                <>
                  {/* MOBILE VIEW - SLIDER 1 JESA FONT TEXT */}
                  <div className="lg:hidden flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 md:px-8">
                    <div className="flex-1 flex flex-col justify-center items-center w-full max-w-lg mx-auto pt-4 sm:pt-6 md:pt-8">
                      {/* HEADING SECTION - SLIDER 1 JESA FONT SIZE */}
                      <div className={`text-center w-full mb-4 sm:mb-6 md:mb-8 transform transition-all duration-700 delay-200 ${
                        index === currentSlide 
                          ? "translate-x-0 opacity-100" 
                          : "-translate-x-10 opacity-0"
                      }`}>
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight tracking-tight px-2">
                          {slide.title}
                        </h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-5 md:mb-6 font-light px-2">
                          {slide.subtitle.split(" ").map((word, i) => (
                            <span
                              key={i}
                              className={`inline-block transition-all duration-300 ${
                                highlightWords.includes(word.toLowerCase()) 
                                  ? "bg-yellow-500 text-white px-2 py-1 transform hover:scale-105" 
                                  : "text-white"
                              } mx-1`}
                            >
                              {word}
                            </span>
                          ))}
                        </h2>
                      </div>

                      {/* SLIDER 2 & 3 IMAGE - MOBILE VIEW - LARGER SIZE */}
                      {slide.rightImage && (
                        <div className={`mb-4 sm:mb-6 md:mb-8 flex justify-center w-full transform transition-all duration-700 delay-300 ${
                          index === currentSlide 
                            ? "translate-y-0 opacity-100 scale-100" 
                            : "translate-y-10 opacity-0 scale-95"
                        }`}>
                          <img
                            src={slide.rightImage}
                            alt="Construction"
                            className="w-60 xs:w-65 sm:w-70 md:w-75 h-auto object-contain drop-shadow-2xl hero-float"
                          />
                        </div>
                      )}

                      {/* CONTENT SECTION - SLIDER 1 JESA FONT SIZE */}
                      <div className="w-full max-w-lg">
                        {/* Slide 2 description for mobile - SLIDER 1 STYLE */}
                        {slide.id === 2 && slide.description && (
                          <div className={`mb-4 sm:mb-6 md:mb-8 transform transition-all duration-700 delay-400 ${
                            index === currentSlide 
                              ? "translate-x-0 opacity-100" 
                              : "translate-x-10 opacity-0"
                          }`}>
                            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center px-4 sm:px-6">
                              {slide.description}
                            </p>
                          </div>
                        )}

                        {/* Slide 3 paragraph for mobile - SLIDER 1 STYLE */}
                        {slide.id === 3 && (
                          <div className={`mb-4 sm:mb-6 md:mb-8 transform transition-all duration-700 delay-500 ${
                            index === currentSlide 
                              ? "translate-y-0 opacity-100" 
                              : "translate-y-10 opacity-0"
                          }`}>
                            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center px-4 sm:px-6">
                              We specialize in all types of construction projects from residential to commercial buildings. 
                              Our team ensures quality workmanship and timely completion.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Button - SLIDER 1 JESA STYLE */}
                      <div className={`mt-4 sm:mt-6 md:mt-8 transform transition-all duration-700 delay-600 ${
                        index === currentSlide 
                          ? "translate-y-0 opacity-100" 
                          : "translate-y-10 opacity-0"
                      }`}>
                        <div className="flex justify-center w-full">
                          <button 
                            onClick={() => handleButtonClick(slide.buttonLink)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP VIEW */}
                  <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 h-full">
                    {/* LEFT CONTENT */}
                    <div className={`flex flex-col justify-center transform transition-all duration-1000 delay-200 ${
                      index === currentSlide 
                        ? "translate-x-0 opacity-100" 
                        : "-translate-x-20 opacity-0"
                    }`}>
                      <div className="max-w-lg lg:max-w-xl xl:max-w-2xl">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 lg:mb-3 xl:mb-4 2xl:mb-6 leading-tight tracking-tight hero-fadeInDown">
                          {slide.title}
                        </h1>
                        <h2 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white mb-3 lg:mb-4 xl:mb-5 2xl:mb-8 font-light">
                          {slide.subtitle.split(" ").map((word, i) => {
                            const delayIndex = Math.min(i, subtitleDelays.length - 1);
                            return (
                              <span
                                key={i}
                                className={`inline-block transition-all duration-500 ${highlightWords.includes(word.toLowerCase()) 
                                  ? "bg-yellow-500 text-white px-2 py-1 transform hover:scale-110 hover:rotate-1" 
                                  : "text-white"
                                } mx-1`}
                              >
                                {word}
                              </span>
                            );
                          })}
                        </h2>

                        {/* Slide 2 description for desktop */}
                        {slide.id === 2 && slide.description && (
                          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/90 mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 max-w-lg lg:max-w-xl xl:max-w-2xl leading-relaxed transform transition-all duration-1000 delay-300">
                            {slide.description}
                          </p>
                        )}

                        {/* Slide 3 paragraph for desktop */}
                        {slide.id === 3 && (
                          <div className={`mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 transform transition-all duration-1000 delay-400 ${
                            index === currentSlide 
                              ? "translate-x-0 opacity-100" 
                              : "-translate-x-10 opacity-0"
                          }`}>
                            <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/90 leading-relaxed max-w-lg lg:max-w-xl xl:max-w-2xl">
                              We specialize in all types of construction projects from residential homes to commercial buildings. 
                              Our team ensures quality workmanship, safety standards, and timely completion.
                            </p>
                          </div>
                        )}

                        <div className={`transform transition-all duration-1000 delay-500 ${
                          index === currentSlide 
                            ? "translate-x-0 opacity-100" 
                            : "-translate-x-10 opacity-0"
                        }`}>
                          <button 
                            onClick={() => handleButtonClick(slide.buttonLink)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl px-6 lg:px-7 xl:px-8 2xl:px-10 py-3 lg:py-3.5 xl:py-4 2xl:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SLIDER 2 & 3 IMAGE - DESKTOP VIEW - LARGER SIZE */}
                    {slide.rightImage && (
                      <div className={`flex items-center justify-center transform transition-all duration-1000 delay-300 ${
                        index === currentSlide 
                          ? "translate-x-0 opacity-100 scale-100" 
                          : "translate-x-20 opacity-0 scale-95"
                      }`}>
                        <div className="relative w-full flex justify-center">
                          <img
                            src={slide.rightImage}
                            alt="Construction"
                            className="w-[350px] lg:w-[420px] xl:w-[480px] 2xl:w-[550px] h-auto object-contain drop-shadow-2xl hero-float-slow"
                            style={{
                              maxHeight: "75vh"
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - RESPONSIVE */}
      <button
        onClick={prevSlide}
        className="absolute left-2 xs:left-3 sm:left-4 bottom-20 xs:bottom-22 sm:bottom-24 md:bottom-28 lg:bottom-1/2 lg:left-4 xl:left-6 2xl:left-8 lg:-translate-y-1/2 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-yellow-500 hover:text-yellow-400 transition-all duration-300 z-20 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transform hover:scale-110 hover:-translate-x-1 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 xs:right-3 sm:right-4 bottom-20 xs:bottom-22 sm:bottom-24 md:bottom-28 lg:bottom-1/2 lg:right-4 xl:right-6 2xl:right-8 lg:-translate-y-1/2 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-yellow-500 hover:text-yellow-400 transition-all duration-300 z-20 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transform hover:scale-110 hover:translate-x-1 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </button>

      {/* Dots Indicator - RESPONSIVE */}
      <div className="absolute bottom-20 xs:bottom-22 sm:bottom-24 md:bottom-28 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 z-20">
        {slidesRef.current.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full transform hover:scale-125 active:scale-95 ${
              index === currentSlide
                ? "bg-gray-900 shadow-lg"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            style={{
              width:
                index === currentSlide
                  ? isMobile
                    ? "16px"
                    : "20px"
                  : isMobile
                    ? "5px"
                    : "8px",
              height: isMobile ? "5px" : "8px",
            }}
            aria-label={`Go to slide ${index + 1}`}
            suppressHydrationWarning
          ></button>
        ))}
      </div>

      {/* Slide counter - RESPONSIVE */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-5 left-3 xs:left-4 sm:left-5 z-20 hidden lg:block">
        <div className="text-white/70 text-xs xs:text-sm sm:text-base transform transition-all duration-300 hover:scale-110">
          <span className="font-bold">{currentSlide + 1}</span>
          <span className="mx-0.5 xs:mx-1">/</span>
          <span>{slidesRef.current.length}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;