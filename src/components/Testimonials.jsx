"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  X,
  User,
  Mail,
  MessageSquare,
  Send,
  ThumbsUp,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  // Common avatar path
  const COMMON_AVATAR = "/photo.png";

  // Initial testimonials
  const initialTestimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO at Evanto",
      content:
        "This company exceeded all our expectations. Their attention to detail and professional approach made our project a huge success. Highly recommended!",
      avatar: COMMON_AVATAR,
      rating: 5,
      date: "2 days ago",
      verified: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "Working with this team has been transformative. They delivered exceptional results that significantly boosted our conversion rates.",
      avatar: COMMON_AVATAR,
      rating: 5,
      date: "1 week ago",
      verified: true,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      content:
        "The quality of work and dedication shown by this team is remarkable. They truly understand business needs and deliver accordingly.",
      avatar: COMMON_AVATAR,
      rating: 4,
      date: "2 weeks ago",
      verified: true,
    },
  ];

  // Initial reviews
  const initialReviews = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO at Evanto",
      content:
        "This company exceeded all our expectations. Their attention to detail and professional approach made our project a huge success. Highly recommended!",
      avatar: COMMON_AVATAR,
      rating: 5,
      date: "2 days ago",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "Working with this team has been transformative. They delivered exceptional results that significantly boosted our conversion rates.",
      avatar: COMMON_AVATAR,
      rating: 5,
      date: "1 week ago",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      content:
        "The quality of work and dedication shown by this team is remarkable. They truly understand business needs and deliver accordingly.",
      avatar: COMMON_AVATAR,
      rating: 4,
      date: "2 weeks ago",
      helpful: 5,
      verified: true,
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Creative Director",
      content:
        "Exceptional service and outstanding results. Their team transformed our vision into reality with precision and creativity.",
      avatar: COMMON_AVATAR,
      rating: 5,
      date: "3 weeks ago",
      helpful: 15,
      verified: true,
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [allReviews, setAllReviews] = useState(initialReviews);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    role: "",
    rating: 0,
    content: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [helpfulCounts, setHelpfulCounts] = useState({});

  const activeTestimonial = testimonials[activeIndex];

  // Auto slider effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleHelpfulClick = (id) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.rating === 0) {
      alert("Please select a rating");
      return;
    }

    // Create new review object - सभी के लिए एक ही फोटो
    const newReviewObj = {
      id: allReviews.length + 1,
      name: newReview.name,
      role: newReview.role || "Customer",
      content: newReview.content,
      avatar: COMMON_AVATAR, // Same photo for everyone
      rating: newReview.rating,
      date: "Just now",
      helpful: 0,
      verified: false,
    };

    // Create new testimonial object - सभी के लिए एक ही फोटो
    const newTestimonialObj = {
      id: testimonials.length + 1,
      name: newReview.name,
      role: newReview.role || "Customer",
      content: newReview.content,
      avatar: COMMON_AVATAR, // Same photo for everyone
      rating: newReview.rating,
      date: "Just now",
      verified: false,
    };

    // Update both testimonials and reviews
    setTestimonials((prev) => [newTestimonialObj, ...prev]);
    setAllReviews((prev) => [newReviewObj, ...prev]);

    // Reset form and close modal
    setNewReview({ name: "", email: "", role: "", rating: 0, content: "" });
    setShowReviewForm(false);

    // Switch to the new testimonial
    setActiveIndex(0);

    // Show success message
    alert("Thank you for your review! Your review has been added.");
  };

  // Calculate average rating
  const averageRating =
    allReviews.length > 0
      ? (
          allReviews.reduce((acc, review) => acc + review.rating, 0) /
          allReviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-8 bg-yellow-500"></div>
            <span className="text-yellow-600 text-base font-medium uppercase tracking-wider">
              Customer Feedback
            </span>
            <div className="h-1 w-8 bg-yellow-500"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3">
            Client Testimonials & Reviews
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT COLUMN: Testimonials Slider (50% width) */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full">
              {/* Section Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Featured Testimonials
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Client stories that inspire us
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials.length} testimonials
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <div className="flex flex-col items-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
                      <Image
                        src={COMMON_AVATAR}
                        alt={activeTestimonial.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-md">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Client Info */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center mb-6"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          {activeTestimonial.name}
                        </h3>
                        {activeTestimonial.verified && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-gray-600 text-base">
                        {activeTestimonial.role}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {activeTestimonial.date}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < activeTestimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-700 font-medium text-base">
                      {activeTestimonial.rating}.0
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative w-full mb-8">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-yellow-100" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pl-4"
                      >
                        <p className="text-gray-700 text-base leading-relaxed text-center">
                          "{activeTestimonial.content}"
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Controls */}
                  <div className="w-full">
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>
                          Testimonial {activeIndex + 1} of {testimonials.length}
                        </span>
                        <span>Auto-play</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          key={activeIndex}
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                          initial={{ width: "0%" }}
                          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={prevTestimonial}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === activeIndex
                                ? "bg-yellow-500"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: All Reviews (50% width) */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full">
              {/* Section Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Customer Reviews
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {allReviews.length} total reviews
                    </p>
                  </div>
                  <button
                    onClick={() => setShowReviewForm(true)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Add Review
                  </button>
                </div>
              </div>

              {/* Reviews List */}
              <div className="p-6">
                <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                  {allReviews.map((review) => (
                    <div
                      key={review.id}
                      className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                            <Image
                              src={COMMON_AVATAR}
                              alt={review.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-gray-800 text-base">
                                {review.name}
                              </h4>
                              {review.verified && (
                                <CheckCircle className="w-3 h-3 text-green-500" />
                              )}
                            </div>
                            <p className="text-gray-600 text-xs">
                              {review.role}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm mb-3">
                        "{review.content}"
                      </p>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleHelpfulClick(review.id)}
                          className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-xs"
                        >
                          <ThumbsUp className="w-3 h-3" />
                          <span>
                            Helpful (
                            {helpfulCounts[review.id] || review.helpful})
                          </span>
                        </button>
                        {!review.verified && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            New Review
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rating Summary */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4">
                    Rating Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">
                        {averageRating}
                      </div>
                      <div className="text-xs text-gray-600">
                        Average Rating
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">
                        {allReviews.length}
                      </div>
                      <div className="text-xs text-gray-600">Total Reviews</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setShowReviewForm(true)}
                      className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                    >
                      Be the next to review!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Form Modal */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowReviewForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    Write a Review
                  </h3>
                  <button
                    onClick={() => setShowReviewForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmitReview} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Your Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setNewReview({ ...newReview, rating: star })
                        }
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= (hoverRating || newReview.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name 
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) =>
                        setNewReview({ ...newReview, name: e.target.value })
                      }
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address 
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={newReview.email}
                      onChange={(e) =>
                        setNewReview({ ...newReview, email: e.target.value })
                      }
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Position
                  </label>
                  <input
                    type="text"
                    value={newReview.role}
                    onChange={(e) =>
                      setNewReview({ ...newReview, role: e.target.value })
                    }
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="e.g., CEO, Marketing Director"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review *
                  </label>
                  <textarea
                    required
                    value={newReview.content}
                    onChange={(e) =>
                      setNewReview({ ...newReview, content: e.target.value })
                    }
                    rows="4"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Share your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}