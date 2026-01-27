"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Star,
  Quote,
  Heart,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    role: "Patient",
    content: "",
    rating: 5,
  });
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [displayCount, setDisplayCount] = useState(10);

  // Different avatar images for each user
  const AVATARS = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh&backgroundColor=ffdfbf&hair=short&glasses=none",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita&backgroundColor=ffd5dc&hair=long&glasses=none",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit&backgroundColor=b6e3f4&hair=short&glasses=square",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=c0aede&hair=long&glasses=round",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&backgroundColor=ffdfbf&hair=short&glasses=none",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=ffd5dc&hair=long&glasses=round",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil&backgroundColor=b6e3f4&hair=short&glasses=square",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&backgroundColor=c0aede&hair=long&glasses=none",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh&backgroundColor=ffdfbf&hair=short&glasses=round",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita&backgroundColor=ffd5dc&hair=long&glasses=square",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4&hair=short&glasses=none",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Shweta&backgroundColor=c0aede&hair=long&glasses=round",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&backgroundColor=ffdfbf&hair=short&glasses=square",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&backgroundColor=ffd5dc&hair=long&glasses=none",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Manoj&backgroundColor=b6e3f4&hair=short&glasses=round",
  ];

  // Function to get avatar based on name
  const getAvatar = (name) => {
    const index = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return AVATARS[index % AVATARS.length];
  };

  // Dynamic testimonials data with different images
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Patient",
      content:
        "Excellent service and accurate reports. The staff is very cooperative and the facility is hygienic.",
      rating: 5,
      avatar: getAvatar("Rajesh Kumar"),
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Sunita Sharma",
      role: "Patient",
      content:
        "Got my mammography done here. Very professional approach and early detection helped in timely treatment.",
      rating: 5,
      avatar: getAvatar("Sunita Sharma"),
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Dr. Amit Gupta",
      role: "Referring Doctor",
      content:
        "Reliable diagnostic center with accurate reporting. I regularly refer my patients here.",
      rating: 5,
      avatar: getAvatar("Amit Gupta"),
      date: "2024-01-05",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Patient",
      content:
        "The MRI experience was smooth and comfortable. Staff explained everything clearly and made me feel at ease.",
      rating: 4,
      avatar: getAvatar("Priya Patel"),
      date: "2023-12-28",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Patient",
      content:
        "Quick service with accurate results. The whole process was very efficient and professional.",
      rating: 5,
      avatar: getAvatar("Vikram Singh"),
      date: "2023-12-20",
    },
    {
      id: 6,
      name: "Neha Desai",
      role: "Patient",
      content:
        "Excellent pediatric care. My child was comfortable throughout the ultrasound procedure.",
      rating: 5,
      avatar: getAvatar("Neha Desai"),
      date: "2023-12-15",
    },
    {
      id: 7,
      name: "Anil Verma",
      role: "Healthcare Professional",
      content:
        "As a healthcare professional, I appreciate the precision and reliability of their diagnostic services.",
      rating: 4,
      avatar: getAvatar("Anil Verma"),
      date: "2023-12-10",
    },
    {
      id: 8,
      name: "Meera Reddy",
      role: "Patient",
      content:
        "The CT scan was done professionally. Clean facility and caring staff made the experience comfortable.",
      rating: 5,
      avatar: getAvatar("Meera Reddy"),
      date: "2023-12-05",
    },
    {
      id: 9,
      name: "Suresh Nair",
      role: "Patient",
      content:
        "Accurate blood test reports with quick turnaround. Highly recommended for routine checkups.",
      rating: 5,
      avatar: getAvatar("Suresh Nair"),
      date: "2023-11-30",
    },
    {
      id: 10,
      name: "Kavita Joshi",
      role: "Patient",
      content:
        "Excellent cardiology services. The echocardiogram was thorough and the doctor explained everything clearly.",
      rating: 5,
      avatar: getAvatar("Kavita Joshi"),
      date: "2023-11-25",
    },
    {
      id: 11,
      name: "Rahul Mehta",
      role: "Patient",
      content:
        "Professional team with state-of-the-art equipment. My biopsy procedure went smoothly.",
      rating: 4,
      avatar: getAvatar("Rahul Mehta"),
      date: "2023-11-20",
    },
    {
      id: 12,
      name: "Shweta Kapoor",
      role: "Patient",
      content:
        "The staff was very supportive during my pregnancy ultrasound. Made the experience memorable.",
      rating: 5,
      avatar: getAvatar("Shweta Kapoor"),
      date: "2023-11-15",
    },
    {
      id: 13,
      name: "Sanjay Rao",
      role: "Referring Doctor",
      content:
        "Consistently reliable reports. I trust their diagnostics for my patients' critical cases.",
      rating: 5,
      avatar: getAvatar("Sanjay Rao"),
      date: "2023-11-10",
    },
    {
      id: 14,
      name: "Pooja Shah",
      role: "Patient",
      content:
        "Excellent dental X-ray services. Quick and painless procedure with accurate results.",
      rating: 5,
      avatar: getAvatar("Pooja Shah"),
      date: "2023-11-05",
    },
    {
      id: 15,
      name: "Manoj Tiwari",
      role: "Patient",
      content:
        "Professional and caring staff. The physiotherapy sessions helped me recover quickly.",
      rating: 4,
      avatar: getAvatar("Manoj Tiwari"),
      date: "2023-10-30",
    },
  ]);

  // Always use all testimonials for slider
  const displayedTestimonials = testimonials;

  // Fix: Reset currentIndex when testimonials change or when showing all
  useEffect(() => {
    if (currentIndex >= displayedTestimonials.length) {
      setCurrentIndex(0);
    }
  }, [displayedTestimonials.length, currentIndex]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => {
      if (displayedTestimonials.length === 0) return 0;
      return (prev + 1) % displayedTestimonials.length;
    });
  }, [displayedTestimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      if (displayedTestimonials.length === 0) return 0;
      return (
        (prev - 1 + displayedTestimonials.length) % displayedTestimonials.length
      );
    });
  };

  // Auto-play every 2 seconds (2000 milliseconds) - FIXED
  useEffect(() => {
    if (!isAutoPlaying || displayedTestimonials.length === 0) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial, displayedTestimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();

    const newTestimonial = {
      id: testimonials.length + 1,
      name: newFeedback.name,
      role: newFeedback.role,
      content: newFeedback.content,
      rating: newFeedback.rating,
      avatar: getAvatar(newFeedback.name),
      date: new Date().toISOString().split("T")[0],
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setNewFeedback({
      name: "",
      role: "Patient",
      content: "",
      rating: 5,
    });
    setShowFeedbackForm(false);

    // Reset to show the new testimonial
    setCurrentIndex(0);

    alert("Thank you for your feedback! It will be visible after review.");
  };

  const handleViewMore = () => {
    setShowAllTestimonials(true);
    setDisplayCount(testimonials.length);
  };

  const handleViewLess = () => {
    setShowAllTestimonials(false);
    setDisplayCount(10);
  };

  // If no testimonials, show empty state
  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-12 md:py-20 text-black">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-600">
            No testimonials yet
          </h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Be the first to share your experience!
          </p>
          <button
            onClick={() => setShowFeedbackForm(true)}
            className="mt-4 sm:mt-6 bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm sm:text-base"
          >
            Share Your Experience
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 md:mb-6">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            PATIENT FEEDBACK
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Client Testimonials & Reviews
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-600">
            Real stories from patients who trusted us with their health
          </p>
        </div>

        {/* Main Content with Slider and Cards */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Left Column - Main Slider */}
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Main Testimonial Card (Slider) */}
              <div
                className="relative bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg overflow-hidden border border-gray-100"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 opacity-10">
                  <Quote className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-400" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex justify-center items-center mb-6 md:mb-8">
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex]?.rating || 5)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                          />
                        ),
                      )}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 text-center italic leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
                    "{testimonials[currentIndex]?.content || ""}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-500 bg-white">
                        <img
                          src={testimonials[currentIndex]?.avatar || AVATARS[0]}
                          alt={testimonials[currentIndex]?.name || "User"}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                          {testimonials[currentIndex]?.name || "User"}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <p className="text-gray-600 text-sm sm:text-base">
                            {testimonials[currentIndex]?.role || "Patient"}
                          </p>
                          <span className="text-gray-400 text-xs sm:text-sm">
                            {testimonials[currentIndex]?.date || ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-0">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-600" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Bar (2 seconds) */}
                <div className="mt-8 md:mt-12">
                  <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-2000"
                      style={{
                        animation: isAutoPlaying
                          ? "progress 2s linear infinite"
                          : "none",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Dots Navigation (without numbers) */}
              <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-3">
                {testimonials.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`group ${
                      currentIndex === index
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <div
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                        currentIndex === index
                          ? "bg-yellow-500 scale-125"
                          : "bg-gray-300 group-hover:bg-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Feedback Form/Cards */}
          <div className="lg:w-1/3 text-black">
            {showFeedbackForm ? (
              /* Feedback Form */
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-yellow-200 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  Share Your Experience
                </h3>
                <form onSubmit={handleSubmitFeedback}>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newFeedback.name}
                        onChange={(e) =>
                          setNewFeedback({
                            ...newFeedback,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm sm:text-base"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        You are a
                      </label>
                      <select
                        value={newFeedback.role}
                        onChange={(e) =>
                          setNewFeedback({
                            ...newFeedback,
                            role: e.target.value,
                          })
                        }
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm sm:text-base"
                      >
                        <option value="Patient">Patient</option>
                        <option value="Referring Doctor">Doctor</option>
                        <option value="Healthcare Professional">
                          Healthcare Professional
                        </option>
                        <option value="Family Member">Family Member</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Rating
                      </label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() =>
                              setNewFeedback({ ...newFeedback, rating: star })
                            }
                            className="text-2xl"
                          >
                            <Star
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${star <= newFeedback.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Your Feedback
                      </label>
                      <textarea
                        required
                        value={newFeedback.content}
                        onChange={(e) =>
                          setNewFeedback({
                            ...newFeedback,
                            content: e.target.value,
                          })
                        }
                        rows="3"
                        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm sm:text-base"
                        placeholder="Share your experience..."
                      />
                    </div>

                    <div className="flex gap-2 md:gap-3 pt-3 md:pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-yellow-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm sm:text-base"
                      >
                        Submit Feedback
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowFeedbackForm(false)}
                        className="px-3 sm:px-4 py-2 sm:py-3 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              /* Latest Testimonials Cards */
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Latest Reviews ({displayCount} of {testimonials.length})
                  </h3>
                  <button
                    onClick={() => setShowFeedbackForm(true)}
                    className="text-yellow-600 hover:text-yellow-700 text-xs sm:text-sm font-semibold"
                  >
                    + Add Review
                  </button>
                </div>

                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-200 hover:border-yellow-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2 md:mb-3">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-sm mb-3 md:mb-4 line-clamp-3">
                      "{testimonial.content.substring(0, 100)}..."
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-yellow-500">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-sm">
                            {testimonial.name}
                          </h5>
                          <p className="text-xs text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                ))}

                {/* View More/Less Button */}
                {testimonials.length > 10 && (
                  <div className="pt-1 md:pt-2">
                    {!showAllTestimonials ? (
                      <button
                        onClick={handleViewMore}
                        className="w-full flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold py-2 sm:py-3 border border-yellow-200 rounded-lg md:rounded-xl hover:bg-yellow-50 transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                        View More Reviews ({testimonials.length - 10} more)
                      </button>
                    ) : (
                      <button
                        onClick={handleViewLess}
                        className="w-full flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold py-2 sm:py-3 border border-yellow-200 rounded-lg md:rounded-xl hover:bg-yellow-50 transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        View Less (Show only 10)
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* All Testimonials Grid (Visible when showAllTestimonials is true) */}
        {showAllTestimonials && (
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Customer Feedback ({testimonials.length})
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {testimonials.slice(0, displayCount).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 hover:border-yellow-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 md:mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden border border-yellow-500">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View Less Button at bottom */}
            <div className="mt-6 md:mt-8 text-center">
              <button
                onClick={handleViewLess}
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold px-4 sm:px-6 py-2 sm:py-3 border border-yellow-300 rounded-lg md:rounded-xl hover:bg-yellow-50 transition-colors text-xs sm:text-sm md:text-base"
              >
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
                Show Less Reviews
              </button>
            </div>
          </div>
        )}

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes progress {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
