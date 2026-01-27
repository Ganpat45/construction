"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Route,
  Wrench,
  HardHat,
  Target,
  Trees,
  Zap,
  PaintBucket,
  Droplets,
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Sparkles,
  Ruler,
  ClipboardCheck,
  Construction,
  Building,
  Truck,
  Hammer,
  Drill,
  Layers,
  Settings,
  Thermometer,
  Wind,
  Box,
  Key,
  Lock,
  Eye,
  FileText,
  ArrowUp,
  Menu,
  X,
  Search,
  Filter,
} from "lucide-react";

// StatCounter Component for number animations
const StatCounter = ({ value, suffix, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          let step = 0;

          const animate = () => {
            if (step < steps) {
              current += increment;
              setCount(Math.floor(current));
              step++;
              setTimeout(animate, duration / steps);
            } else {
              setCount(value);
              setHasAnimated(true);
            }
          };

          animate();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, hasAnimated, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white font-medium">{label}</div>
    </div>
  );
};

// Special component for 24/7 animation - CHANGED TO STATIC
const SupportCounter = () => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        24/7
      </div>
      <div className="text-white font-medium">Support Available</div>
    </div>
  );
};

const servicesData = [
  {
    id: 1,
    title: "Commercial Construction",
    icon: <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />,
    description:
      "Modern office buildings, shopping malls, and commercial complexes with innovative designs.",
    features: [
      "Office Buildings & Corporate Parks",
      "Shopping Malls & Retail Centers",
      "Hotels & Resorts",
      "Restaurants & Food Courts",
      "Warehouses & Logistics Centers",
    ],
    duration: "3-24 months",
    expertise: "High-rise & Complex",
    image:
      "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
  },
  {
    id: 2,
    title: "Residential Construction",
    icon: <Home className="w-8 h-8 sm:w-10 sm:h-10" />,
    description:
      "Beautiful homes and apartments with premium finishes and modern amenities.",
    features: [
      "Luxury Apartments & Condos",
      "Villas & Independent Houses",
      "Townhouses & Duplexes",
      "Gated Communities",
      "Custom Home Building",
    ],
    duration: "6-18 months",
    expertise: "Custom Design",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
  },
  {
    id: 3,
    title: "Infrastructure Development",
    icon: <Route className="w-8 h-8 sm:w-10 sm:h-10" />,
    description:
      "Robust infrastructure projects including roads, bridges, and public utilities.",
    features: [
      "Roads & Highway Construction",
      "Bridges & Flyovers",
      "Tunnels & Underpasses",
      "Public Transport Systems",
      "Drainage & Water Systems",
    ],
    duration: "12-36 months",
    expertise: "Large-scale Projects",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "infrastructure",
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10" />,
    description:
      "Transform existing spaces with expert renovation and modernization services.",
    features: [
      "Complete Interior Renovation",
      "Structural Upgrades",
      "Facade Improvements",
      "Space Optimization",
      "Heritage Restoration",
    ],
    duration: "1-6 months",
    expertise: "Precision Work",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "renovation",
  },
  {
    id: 5,
    title: "Industrial Construction",
    icon: <HardHat className="w-8 h-8 sm:w-10 sm:h-10" />,
    description:
      "Specialized construction for factories, plants, and industrial facilities.",
    features: [
      "Factories & Manufacturing Plants",
      "Industrial Parks & Zones",
      "Storage & Distribution Centers",
      "Processing & Packaging Units",
      "Industrial Sheds",
    ],
    duration: "6-24 months",
    expertise: "Heavy Industry",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "construction",
  },
  {
    id: 6,
    title: "Project Management",
    icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
    description:
      "Complete project management from planning to execution and delivery.",
    features: [
      "Planning & Scheduling",
      "Budget Management",
      "Quality Control",
      "Risk Management",
      "Team Coordination",
    ],
    duration: "Project Based",
    expertise: "End-to-End",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "management",
  },
  {
    id: 7,
    title: "Interior Design",
    icon: <PaintBucket className="w-8 h-8 sm:w-10 sm:h-10" />,
    description: "Complete interior design and space planning services.",
    features: [
      "Space Planning",
      "Material Selection",
      "Lighting Design",
      "Furniture Layout",
      "Color Schemes",
    ],
    duration: "1-3 months",
    expertise: "Creative Design",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "design",
  },
  {
    id: 8,
    title: "Electrical Works",
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
    description:
      "Professional electrical systems installation and maintenance.",
    features: [
      "Wiring & Cabling",
      "Lighting Systems",
      "Power Distribution",
      "Safety Systems",
      "Smart Home Wiring",
    ],
    duration: "2-8 weeks",
    expertise: "Electrical Systems",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "electrical",
  },
  {
    id: 9,
    title: "Plumbing Solutions",
    icon: <Droplets className="w-8 h-8 sm:w-10 sm:h-10" />,
    description: "Modern plumbing systems and water management solutions.",
    features: [
      "Water Supply Systems",
      "Drainage Systems",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Water Heating",
    ],
    duration: "1-4 weeks",
    expertise: "Plumbing Systems",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "plumbing",
  },
  {
    id: 10,
    title: "HVAC Systems",
    icon: <Thermometer className="w-8 h-8 sm:w-10 sm:h-10" />,
    description: "Heating, ventilation, and air conditioning installation.",
    features: [
      "Air Conditioning",
      "Heating Systems",
      "Ventilation",
      "Ductwork",
      "Maintenance",
    ],
    duration: "2-6 weeks",
    expertise: "Climate Control",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "hvac",
  },
  {
    id: 11,
    title: "Smart Home Automation",
    icon: <Settings className="w-8 h-8 sm:w-10 sm:h-10" />,
    description: "Advanced automation and smart technology integration.",
    features: [
      "Security Systems",
      "Lighting Control",
      "Climate Control",
      "Entertainment Systems",
      "Voice Control",
    ],
    duration: "1-3 weeks",
    expertise: "Automation",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "automation",
  },
  {
    id: 12,
    title: "Safety & Security",
    icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
    description: "Complete safety and security systems installation.",
    features: [
      "CCTV Systems",
      "Access Control",
      "Fire Safety",
      "Emergency Systems",
      "Safety Training",
    ],
    duration: "1-4 weeks",
    expertise: "Safety Standards",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "security",
  },
];

const additionalServices = [
  {
    id: 1,
    title: "Landscaping",
    icon: <Trees className="w-6 h-6" />,
    description: "Garden design",
  },
  {
    id: 2,
    title: "Flooring",
    icon: <Layers className="w-6 h-6" />,
    description: "Floor installation",
  },
  {
    id: 3,
    title: "Painting",
    icon: <PaintBucket className="w-6 h-6" />,
    description: "Interior/exterior",
  },
  {
    id: 4,
    title: "Carpentry",
    icon: <Hammer className="w-6 h-6" />,
    description: "Custom woodwork",
  },
  {
    id: 5,
    title: "Tiling",
    icon: <Box className="w-6 h-6" />,
    description: "Tile installation",
  },
  {
    id: 6,
    title: "Waterproofing",
    icon: <Droplets className="w-6 h-6" />,
    description: "Waterproof solutions",
  },
  {
    id: 7,
    title: "Demolition",
    icon: <Construction className="w-6 h-6" />,
    description: "Safe demolition",
  },
  {
    id: 8,
    title: "Consultation",
    icon: <Users className="w-6 h-6" />,
    description: "Expert advice",
  },
  {
    id: 9,
    title: "Permit Assistance",
    icon: <FileText className="w-6 h-6" />,
    description: "Permits & approvals",
  },
  {
    id: 10,
    title: "Site Preparation",
    icon: <Truck className="w-6 h-6" />,
    description: "Land clearing",
  },
  {
    id: 11,
    title: "Material Supply",
    icon: <Box className="w-6 h-6" />,
    description: "Quality materials",
  },
  {
    id: 12,
    title: "Warranty Service",
    icon: <Shield className="w-6 h-6" />,
    description: "Post-construction",
  },
];

const categories = [
  { id: "all", label: "All Services", icon: <Building2 className="w-4 h-4" /> },
  {
    id: "construction",
    label: "Construction",
    icon: <Construction className="w-4 h-4" />,
  },
  { id: "design", label: "Design", icon: <PaintBucket className="w-4 h-4" /> },
  { id: "electrical", label: "Electrical", icon: <Zap className="w-4 h-4" /> },
  { id: "plumbing", label: "Plumbing", icon: <Droplets className="w-4 h-4" /> },
  { id: "hvac", label: "HVAC", icon: <Thermometer className="w-4 h-4" /> },
  { id: "security", label: "Security", icon: <Shield className="w-4 h-4" /> },
  {
    id: "management",
    label: "Management",
    icon: <Target className="w-4 h-4" />,
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [hoveredService, setHoveredService] = useState(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter services based on search and category
  useEffect(() => {
    let filtered = [...servicesData];

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (service) => service.category === activeCategory,
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.expertise.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredServices(filtered);

    // Reset active service if filtered results change
    if (
      !filtered.some((service) => service.id === activeService) &&
      filtered.length > 0
    ) {
      setActiveService(filtered[0].id);
    }
  }, [searchTerm, activeCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("all-services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory("all");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-700/90 to-amber-800/90 mix-blend-multiply" />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Complete Construction Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Our Services
                <span className="block text-yellow-100 mt-2">
                  Building Excellence
                </span>
              </h1>

              <p className="text-lg md:text-xl text-yellow-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
                Professional construction services with quality craftsmanship,
                timely delivery, and transparent communication.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-yellow-700 rounded-lg hover:bg-yellow-50 font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="w-5 h-5" />
                  View All Services
                </button>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Header */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white shadow-lg border-b border-yellow-100 py-3"
            : "bg-transparent py-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-lg ${
                  isSticky ? "bg-yellow-100" : "bg-white/20"
                }`}
              >
                <Building2
                  className={`w-6 h-6 ${
                    isSticky ? "text-yellow-600" : "text-white"
                  }`}
                />
              </div>
              <h2
                className={`text-xl font-bold ${
                  isSticky ? "text-gray-900" : "text-white"
                }`}
              >
                All Construction Services
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? (
                  <X
                    className={`w-6 h-6 ${
                      isSticky ? "text-gray-700" : "text-white"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      isSticky ? "text-gray-700" : "text-white"
                    }`}
                  />
                )}
              </button>

              <Link
                href="/contact-us"
                className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  isSticky
                    ? "bg-yellow-500 text-white hover:bg-yellow-600"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                {/* Search in mobile menu */}
                <div className="relative mb-4">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {filteredServices.slice(0, 6).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setActiveService(service.id);
                        setMobileMenuOpen(false);
                        scrollToServices();
                      }}
                      className={`flex items-center gap-2 p-2 rounded ${
                        activeService === service.id
                          ? "bg-yellow-50 text-yellow-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-yellow-600">{service.icon}</span>
                      <span className="text-sm font-medium">
                        {service.title}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/contact-us"
                    className="block w-full py-2 bg-yellow-500 text-white text-center rounded-lg font-medium"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-xl border border-yellow-100 p-4 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search construction services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      X
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                      activeCategory === category.id
                        ? "bg-yellow-500 text-white"
                        : "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                  </button>
                ))}
                {(searchTerm || activeCategory !== "all") && (
                  <button
                    onClick={clearFilters}
                    className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-yellow-600">
              {filteredServices.length}
            </span>{" "}
            services
            {searchTerm && (
              <span>
                {" "}
                for "<span className="font-semibold">{searchTerm}</span>"
              </span>
            )}
          </p>
        </div>

        {/* All Services Section */}
        <section id="all-services" className="mb-12">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-yellow-200">
              <div className="text-yellow-500 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No services found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={`service-${service.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setActiveService(service.id)}
                  className={`bg-white rounded-xl border cursor-pointer transition-all ${
                    activeService === service.id
                      ? "border-yellow-400 shadow-lg ring-2 ring-yellow-100"
                      : "border-yellow-100 hover:border-yellow-300 hover:shadow-md"
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          activeService === service.id
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-yellow-50 text-yellow-500"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                            {service.duration}
                          </span>
                          {service.category === "construction" && (
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                              Construction
                            </span>
                          )}
                          {service.category === "design" && (
                            <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                              Design
                            </span>
                          )}
                        </div>
                      </div>
                      {activeService === service.id && (
                        <div className="p-1 bg-yellow-100 rounded-full">
                          <ChevronRight className="w-4 h-4 text-yellow-600" />
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-yellow-600 font-medium">
                        {service.expertise}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          activeService === service.id
                            ? "text-yellow-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Active Service Details */}
        {filteredServices.length > 0 && (
          <section className="mb-12">
            <div className="bg-white rounded-2xl border border-yellow-200 overflow-hidden shadow-lg">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-2/5">
                  <div
                    className="h-64 md:h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${servicesData.find((s) => s.id === activeService)?.image})`,
                    }}
                  />
                </div>

                {/* Details */}
                <div className="md:w-3/5 p-6 md:p-8">
                  {servicesData
                    .filter((service) => service.id === activeService)
                    .map((service) => (
                      <div key={service.id}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {service.title}
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="flex items-center gap-1 text-sm text-gray-600">
                                <Clock className="w-4 h-4" />
                                {service.duration}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-gray-600">
                                <Award className="w-4 h-4" />
                                {service.expertise}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Service Features
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <Link
                            href="/contact-us"
                            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-semibold transition-colors"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Additional Services */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="text-yellow-600">Additional</span> Services
            </h3>
            <p className="text-gray-600 mt-2">
              Complementary services for your construction project
            </p>
          </div>

          {/* Single responsive grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-yellow-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 mb-3">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                  {service.title}
                </h4>
                <p className="text-xs text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section - MIXED ANIMATED & STATIC */}
        <section id="stats-section" className="mb-12">
          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {/* Projects Completed - ANIMATED */}
              <StatCounter
                value={500}
                suffix="+"
                label="Projects Completed"
                duration={2500}
              />

              {/* Client Satisfaction - STATIC */}
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-white font-medium">Client Satisfaction</div>
              </div>

              {/* Expert Team - ANIMATED */}
              <StatCounter
                value={50}
                suffix="+"
                label="Expert Team"
                duration={1500}
              />

              {/* Support Available - STATIC */}
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-white font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Professional Construction Services?
            </h3>
            <p className="text-white mb-6">
              Contact us today for expert solutions and personalized service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:1234-5678-9012"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white text-yellow-700 rounded-lg hover:bg-yellow-50 font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </Link>
              <Link
                href="mailto:info@domain.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}