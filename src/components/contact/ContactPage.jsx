"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  User,
  Send,
  MapPin,
  MessageCircle,
  Calendar,
  DollarSign,
  Wrench,
  Building,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    location: "",
    workType: "",
    workDescription: "",
    startDate: "",
    budget: "",
    propertyType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const workTypes = [
    "Plumbing",
    "Electrical Work",
    "Carpentry",
    "Masonry & Plastering",
    "Painting",
    "Flooring & Tiling",
    "Roofing",
    "Iron & Steel Work",
    "Glass & Aluminum",
    "Civil Construction",
    "Renovation",
    "Demolition",
    "Other",
  ];

  const propertyTypes = [
    "Residential House",
    "Apartment",
    "Commercial Building",
    "Office Space",
    "Shop/Retail",
    "Factory/Warehouse",
    "Renovation Project",
    "New Construction",
    "Other",
  ];

  const budgetRanges = [
    "Select budget range",
    "₹10,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000 - ₹25,00,000",
    "₹25,00,000 - ₹50,00,000",
    "₹50,00,000+",
    "Custom Budget",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        location: "",
        workType: "",
        workDescription: "",
        startDate: "",
        budget: "",
        propertyType: "",
      });
      setSubmitted(false);
    }, 3000);
    
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Main Contact Form Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
           
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Construction Services Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form to get connected with construction professionals
            </p>
          </div>

          {/* Main Content Grid - Form Left, Map Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Get a Free Quote</h2>
                      <p className="text-yellow-100">Complete the form for construction services</p>
                    </div>
                  </div>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="bg-green-50 border border-green-200 p-4 m-6 rounded-lg flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-bold text-green-900">Request Submitted</h3>
                      <p className="text-green-700">We will contact you soon</p>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Row 1: Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <User className="w-4 h-4 text-yellow-600" />
                        Full Name 
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="w-4 h-4 text-yellow-600" />
                        Mobile Number 
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="w-4 h-4 text-yellow-600" />
                        Email Address 
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                        placeholder="Enter email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 text-yellow-600" />
                        Project Location 
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                        placeholder="Enter project address"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 3: Work Type & Property Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Wrench className="w-4 h-4 text-yellow-600" />
                        Type of Work 
                      </label>
                      <select
                        name="workType"
                        value={formData.workType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition bg-white"
                        required
                      >
                        <option value="">Select work type</option>
                        {workTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Building className="w-4 h-4 text-yellow-600" />
                        Property Type 
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition bg-white"
                        required
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Start Date & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 text-yellow-600" />
                        Project Start Date
                        <span className="text-gray-400 font-normal"> (Optional)</span>
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <DollarSign className="w-4 h-4 text-yellow-600" />
                        Estimated Budget Range
                        <span className="text-gray-400 font-normal"> (Optional)</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition bg-white"
                      >
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Work Description */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 text-yellow-600" />
                      Project Description 
                    </label>
                    <textarea
                      name="workDescription"
                      value={formData.workDescription}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Describe your construction project requirements in detail"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        <span className="text-lg">REQUEST QUOTE</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Map Container */}
                <div className="flex-1 min-h-[400px] relative">
                  <div className="absolute inset-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3140443945867!2d78.48661497570302!3d17.444648299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9122577d6f8f%3A0xaa4a52cb2c7dddd8!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1703323456789!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title="Service Area Map"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Map Footer Info */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-50 flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Service Coverage</h4>
                        <p className="text-sm text-gray-600">City-wide & suburban areas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-50 flex-shrink-0">
                        <Phone className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Emergency Service</h4>
                        <p className="text-sm text-gray-600">Available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}