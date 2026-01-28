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
  Phone,
  Calendar,
  Heart,
  Shield,
  Clock,
  Globe,
  Sparkles,
  ChevronRight,
  Home,
  Lightbulb,
  ThumbsUp,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const [counts, setCounts] = useState({
    projects: 0,
    team: 0,
    awards: 0,
    satisfaction: 0,
    clients: 0,
    experience: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Count animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCountAnimation();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

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

  const stats = [
    {
      icon: Building2,
      value: `${counts.projects}+`,
      label: "Projects Completed",
      key: "projects",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Users,
      value: `${counts.team}+`,
      label: "Expert Team",
      key: "team",
      gradient: "from-emerald-500 to-green-400",
    },
    {
      icon: Award,
      value: `${counts.awards}+`,
      label: "Awards Won",
      key: "awards",
      gradient: "from-amber-500 to-yellow-400",
    },
    {
      icon: Target,
      value: `${counts.satisfaction}%`,
      label: "Client Satisfaction",
      key: "satisfaction",
      gradient: "from-rose-500 to-pink-400",
    },
    {
      icon: CheckCircle2,
      value: `${counts.clients}+`,
      label: "Happy Clients",
      key: "clients",
      gradient: "from-violet-500 to-purple-400",
    },
    {
      icon: Calendar,
      value: `${counts.experience}+`,
      label: "Years Experience",
      key: "experience",
      gradient: "from-orange-500 to-red-400",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity First",
      description: "We build trust through transparency and honest communication in every project.",
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      icon: Shield,
      title: "Safety & Quality",
      description: "Uncompromising commitment to the highest safety standards and quality control.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver exceptional projects on schedule, every time.",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description: "Implementing eco-friendly practices for a greener, more sustainable tomorrow.",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Embracing cutting-edge technology and creative solutions in construction.",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      icon: ThumbsUp,
      title: "Client Focus",
      description: "Your vision is our priority, with personalized solutions and continuous support.",
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Chief Executive Officer",
      image: "/mem1.png", // Changed from "mem1" to "/mem1.png"
      description: "20+ years in construction management",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Sarah Williams",
      role: "Lead Architect",
      image: "/mem2.png", // Changed from "mem1" to "/mem2.png"
      description: "Award-winning architectural designer",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Project Director",
      image: "/mem3.png", // Changed from "mem1" to "/mem3.png"
      description: "Specialized in sustainable construction",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Engineering",
      image: "/mem1.png", // You can change this to mem4.png if you have it
      description: "Structural engineering expert",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
   
      {/* Hero Section: Crafting Excellence Since 2010 */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-blue-400/5 to-yellow-400/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-6 md:mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              Building Excellence Since 2010
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Crafting Excellence
              </span>
              <span className="block text-yellow-600 mt-2">Since 2010</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We are pioneers in transforming visionary ideas into architectural marvels that stand 
              the test of time through innovation, precision, and unwavering passion for excellence.
            </p>
          </div>

          {/* Stats Counter */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 text-center group border border-gray-100"
              >
                <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 md:mb-4`}>
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section: From Vision to Legacy */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl md:rounded-3xl blur-xl opacity-20" />
              <div className="relative grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=600&fit=crop"
                      alt="Construction site"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=400&fit=crop"
                      alt="Team collaboration"
                      className="w-full h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1487956382158-bb926046304a?w=500&h=500&fit=crop"
                      alt="Modern building"
                      className="w-full h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&h=600&fit=crop"
                      alt="Architect planning"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold mb-3 md:mb-4 text-sm md:text-base">
                  <div className="w-6 md:w-8 h-1 bg-yellow-600 rounded-full" />
                  OUR JOURNEY
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                  From Vision to Legacy
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                  Founded in 2010 with a single vision: to redefine construction standards through 
                  innovation, integrity, and exceptional craftsmanship. What began as a small team 
                  with big dreams has evolved into an industry leader, transforming skylines and 
                  communities across the globe.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Our journey is marked by relentless pursuit of excellence, embracing cutting-edge 
                  technology while maintaining traditional values of quality and reliability.
                </p>
              </div>

              {/* Timeline Milestones */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">2010</div>
                  <div className="font-semibold text-gray-900 text-lg mb-2">Humble Beginnings</div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Started with residential projects and a vision for excellence
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">2023</div>
                  <div className="font-semibold text-gray-900 text-lg mb-2">Global Recognition</div>
                  <p className="text-gray-600 text-sm md:text-base">
                    International projects & multiple industry awards
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all duration-300 text-sm md:text-base group"
                >
                  Explore Our Success Stories
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: Our Core Values */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold mb-3 md:mb-4 text-sm md:text-base">
              <div className="w-6 md:w-8 h-1 bg-yellow-600 rounded-full" />
              OUR FOUNDATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The guiding principles that shape every decision, project, and relationship we build. 
              These values are the foundation of our success and your trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${value.bg} w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                  <value.icon className={`w-6 h-6 md:w-7 md:h-7 ${value.color}`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Team Section - Square Full Images */}
<section className="py-16 md:py-24 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12 md:mb-16">
      <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold mb-3 md:mb-4 text-sm md:text-base">
        <div className="w-6 md:w-8 h-1 bg-yellow-600 rounded-full" />
        MEET THE VISIONARIES
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
        Leadership That Builds Dreams
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        Guided by industry veterans who blend decades of experience with innovative thinking 
        to bring your vision to life.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {team.map((member, idx) => (
        <div
          key={idx}
          className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
        >
          {/* Square Image Container - Full display */}
          <div className="relative aspect-square w-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain bg-gray-100 p-2 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Gradient Overlay for social links */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Social Links */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <a
                href={member.social.linkedin}
                className="bg-white p-2 md:p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href={member.social.twitter}
                className="bg-white p-2 md:p-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href={member.social.email}
                className="bg-white p-2 md:p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div className="p-4 md:p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
              {member.name}
            </h3>
            <p className="text-yellow-600 font-semibold text-sm md:text-base mb-2 md:mb-3">{member.role}</p>
            <p className="text-gray-600 text-xs md:text-sm">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
            <div className="relative z-10 px-6 py-12 md:px-16 md:py-20 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                  Ready to Build Your Legacy?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">
                  Let's collaborate to turn your vision into an architectural masterpiece that 
                  stands the test of time.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                  <Link
                    href="/contact"
                    className="group bg-white text-gray-900 font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-2xl hover:scale-105"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform" />
                  </Link>
                  
                  <a
                    href="tel:+395003219548"
                    className="group border-2 border-white text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-lg md:rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    Schedule a Call
                  </a>
                </div>
                
                <p className="text-gray-400 mt-6 md:mt-8 text-sm md:text-base">
                  Get a comprehensive quote and consultation within 24 hours
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-yellow-500/10 rounded-full blur-2xl md:blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-2xl md:blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}