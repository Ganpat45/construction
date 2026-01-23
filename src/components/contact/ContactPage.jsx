"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  User,
  Send,
  Globe,
  MapPin,
  MessageCircle,
  Clock,
  Home,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ fullName: "", email: "", website: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
      title: "Our Location",
      details: ["123 Business Street", "NY 10001"],
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567"],
    },
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />,
      title: "Email Address",
      details: ["contact@example.com"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Get In <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            We're here to help! Reach out with any questions or project
            inquiries.
          </p>
        </div>

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-4">
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-50">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600 truncate">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-50">
                    <Clock className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      {[
                        { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
                        { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                        { day: "Sunday", time: "Closed" },
                      ].map((schedule, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm text-gray-600">
                            {schedule.day}
                          </span>
                          <span className="text-sm font-medium">
                            {schedule.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Form */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 h-full">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-50 mr-3">
                    <MessageCircle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Send Message
                  </h2>
                </div>
                <p className="text-gray-500 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-yellow-500" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-12 w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-yellow-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-12 w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-yellow-500" />
                    </div>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="pl-12 w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageCircle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="pl-12 w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none resize-none transition min-h-[120px]"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold text-base py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full flex flex-col">
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-50 mr-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Our Location
                  </h2>
                </div>

                <div className="mb-4">
                  <div className="flex items-start mb-2">
                    <Home className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base">
                      123 Business Street, New York, NY 10001
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm pl-8">
                    Easily accessible via public transport
                  </p>
                </div>
              </div>

              {/* Map Container */}
              <div className="flex-1 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent z-10 pointer-events-none"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183950688192!2d-73.98784428459374!3d40.757978679327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1678884567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Google Map Location"
                />

                {/* Map Hint */}
              </div>

              {/* Map Footer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
