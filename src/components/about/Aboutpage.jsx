"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Building2,
  Users,
  Award,
  Target,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const [counts, setCounts] = useState({
    projects: 0,
    team: 0,
    awards: 0,
    satisfaction: 0,
    clients: 0,
    experience: 0,
  });
  const statsRef = useRef(null);

  // Count animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCountAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCountAnimation = () => {
    const targetValues = {
      projects: 500,
      team: 200,
      awards: 50,
      satisfaction: 98,
      clients: 1000,
      experience: 15,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targetValues).forEach((key) => {
      let current = 0;
      const target = targetValues[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepDuration);
    });
  };

  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  const stats = [
    {
      icon: Building2,
      value: `${counts.projects}+`,
      label: "Projects Completed",
      key: "projects",
    },
    {
      icon: Users,
      value: `${counts.team}+`,
      label: "Expert Team",
      key: "team",
    },
    {
      icon: Award,
      value: `${counts.awards}+`,
      label: "Awards Won",
      key: "awards",
    },
    {
      icon: Target,
      value: `${counts.satisfaction}%`,
      label: "Client Satisfaction",
      key: "satisfaction",
    },
    {
      icon: CheckCircle2,
      value: `${counts.clients}+`,
      label: "Happy Clients",
      key: "clients",
    },
    {
      icon: Building2,
      value: `${counts.experience}+`,
      label: "Years Experience",
      key: "experience",
    },
  ];

  // Team members with actual images
  const team = [
    {
      name: "Alex Johnson",
      role: "Chief Executive Officer",
      image: "/mem1.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Sarah Williams",
      role: "Lead Architect",
      image: "/mem2.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "/mem3.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  const values = [
    {
      title: "Quality First",
      desc: "Excellence in every project we undertake",
    },
    { title: "Innovation", desc: "Cutting-edge solutions and technologies" },
    {
      title: "Sustainability",
      desc: "Eco-friendly and responsible construction",
    },
    { title: "Integrity", desc: "Transparent and honest business practices" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 overflow-hidden mb-[-50px]">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-grey-900">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Building Tomorrow's Landmarks Today
            </p>
          </div>

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-2 text-yellow-500" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content with Image */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-12 lg:mb-16 items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-grey-900 leading-tight">
                Crafting Excellence Since 2010
              </h2>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  We are a leading construction company dedicated to delivering exceptional quality and innovation in every project. Our commitment to excellence has made us a trusted partner for residential, commercial, and industrial construction.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  With a team of experienced professionals and cutting-edge technology, we transform visions into reality, building structures that stand the test of time while prioritizing sustainability and client satisfaction.
                </p>
              </div>
              
             
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-us.png"
                  alt="About Us - Construction Company"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Stats Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-yellow-600">15+</div>
                  <div className="text-sm text-slate-700 font-medium mt-1">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-grey-900">
              Our Leadership Team
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Meet the experts who lead our vision and execution
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Square Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />

                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                      <a href={member.social.linkedin} className="bg-white/95 p-2.5 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-md">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.social.twitter} className="bg-white/95 p-2.5 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-md">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={member.social.email} className="bg-white/95 p-2.5 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-md">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Let's build something amazing together
            </p>
            <button
              onClick={handleContactClick}
              className="bg-white text-yellow-600 px-8 py-3.5 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}