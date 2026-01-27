'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Calendar,
  TrendingUp,
  ChevronRight,
  Grid,
  List,
  Building2,
  Home,
  Users,
  Target,
  DollarSign,
  Clock,
  Square,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Route,
  Star,
  Filter,
  X,
  Heart,
  Share2,
  Eye,
  Download,
  ChevronLeft,
  Loader2,
  Sparkles
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Skyline Tower Complex',
    category: 'Commercial',
    type: 'High-rise Building',
    location: 'Downtown, New York',
    duration: '36 months',
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art commercial tower with sustainable features and smart technology integration.',
    completionDate: '2024-12-15',
    client: 'Global Real Estate Group',
    featured: true,
    rating: 4.8,
    likes: 142,
    views: 1250,
    contractor: 'Elite Construction Co.',
    architect: 'Modern Design Architects'
  },
  {
    id: 2,
    title: 'Riverside Residential Park',
    category: 'Residential',
    type: 'Luxury Apartments',
    location: 'River District, Chicago',
    duration: '24 months',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury waterfront apartments with premium amenities and panoramic views.',
    completionDate: '2023-08-20',
    client: 'Urban Living Developers',
    featured: true,
    rating: 4.9,
    likes: 189,
    views: 1560,
    contractor: 'Premium Builders Inc',
    architect: 'Riverfront Designs'
  },
  {
    id: 3,
    title: 'Highway 101 Expansion',
    category: 'Infrastructure',
    type: 'Road Construction',
    location: 'State Route 101, California',
    duration: '30 months',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Major highway expansion project with smart traffic management systems.',
    completionDate: '2025-06-30',
    client: 'State Transportation Dept',
    featured: false,
    rating: 4.7,
    likes: 98,
    views: 890,
    contractor: 'Infra Build Corp',
    architect: 'Civil Engineering Group'
  },
  {
    id: 4,
    title: 'Metro General Hospital',
    category: 'Institutional',
    type: 'Medical Facility',
    location: 'Medical District, Houston',
    duration: '28 months',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete renovation and expansion of regional medical center.',
    completionDate: '2024-10-15',
    client: 'Health Care Authority',
    featured: false,
    rating: 4.6,
    likes: 112,
    views: 1100,
    contractor: 'Health Builders Ltd',
    architect: 'Medical Design Studio'
  },
  {
    id: 5,
    title: 'Eco-Friendly Shopping Mall',
    category: 'Commercial',
    type: 'Shopping Center',
    location: 'Suburban Area, Seattle',
    duration: '32 months',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sustainable shopping center with green technology and energy-efficient design.',
    completionDate: '2025-12-01',
    client: 'Retail Space Developers',
    featured: true,
    rating: 4.8,
    likes: 156,
    views: 1420,
    contractor: 'Green Construction Co',
    architect: 'Eco Design Partners'
  },
  {
    id: 6,
    title: 'Sports Arena Complex',
    category: 'Institutional',
    type: 'Stadium & Arena',
    location: 'Sports Complex, Miami',
    duration: '42 months',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Multi-purpose sports and entertainment arena with advanced facilities.',
    completionDate: '2023-05-10',
    client: 'City Sports Authority',
    featured: true,
    rating: 4.9,
    likes: 210,
    views: 1890,
    contractor: 'Arena Builders Inc',
    architect: 'Sports Architecture Group'
  },
  {
    id: 7,
    title: 'Tech Campus Phase 2',
    category: 'Commercial',
    type: 'Office Park',
    location: 'Silicon Valley, CA',
    duration: '30 months',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern tech campus with collaborative spaces and innovation labs.',
    completionDate: '2024-08-30',
    client: 'Tech Giants Inc',
    featured: false,
    rating: 4.7,
    likes: 124,
    views: 1150,
    contractor: 'Tech Build Corp',
    architect: 'Innovation Architects'
  },
  {
    id: 8,
    title: 'Luxury Condominiums',
    category: 'Residential',
    type: 'Condominium',
    location: 'Beverly Hills, LA',
    duration: '26 months',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium luxury condominiums with world-class amenities and security.',
    completionDate: '2023-12-20',
    client: 'Luxury Living Group',
    featured: false,
    rating: 4.8,
    likes: 178,
    views: 1620,
    contractor: 'Luxury Builders Ltd',
    architect: 'Prestige Designs'
  },
  {
    id: 9,
    title: 'Bridge Construction',
    category: 'Infrastructure',
    type: 'Suspension Bridge',
    location: 'River Crossing, Portland',
    duration: '24 months',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Suspension bridge connecting two major districts with pedestrian walkways.',
    completionDate: '2024-06-15',
    client: 'City Infrastructure Dept',
    featured: true,
    rating: 4.7,
    likes: 132,
    views: 1250,
    contractor: 'Bridge Masters Inc',
    architect: 'Structural Design Co'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: <Grid size={20} />, count: 9, color: 'from-yellow-400 to-yellow-500' },
  { id: 'commercial', label: 'Commercial', icon: <Building2 size={20} />, count: 4, color: 'from-yellow-400 to-yellow-500' },
  { id: 'residential', label: 'Residential', icon: <Home size={20} />, count: 3, color: 'from-yellow-400 to-yellow-500' },
  { id: 'infrastructure', label: 'Infrastructure', icon: <Route size={20} />, count: 2, color: 'from-yellow-400 to-yellow-500' },
  { id: 'institutional', label: 'Institutional', icon: <Users size={20} />, count: 2, color: 'from-yellow-400 to-yellow-500' },
];

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'rating-high', label: 'Rating: High to Low' },
  { value: 'popular', label: 'Most Popular' },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [likedProjects, setLikedProjects] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile and scroll
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter and search logic
  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      let filtered = [...projectsData];
      
      if (activeCategory !== 'all') {
        filtered = filtered.filter(project => 
          project.category.toLowerCase() === activeCategory.toLowerCase()
        );
      }
      
      if (searchTerm) {
        filtered = filtered.filter(project =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.client.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      switch (sortBy) {
        case 'newest':
          filtered.sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate));
          break;
        case 'oldest':
          filtered.sort((a, b) => new Date(a.completionDate) - new Date(b.completionDate));
          break;
        case 'rating-high':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'popular':
          filtered.sort((a, b) => b.views - a.views);
          break;
      }
      
      setProjects(filtered);
      setVisibleProjects(6);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm, sortBy]);

  // Add scroll lock for mobile filters
  useEffect(() => {
    if (showMobileFilters && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileFilters, isMobile]);

  const handleLike = (id) => {
    if (likedProjects.includes(id)) {
      setLikedProjects(likedProjects.filter(projectId => projectId !== id));
    } else {
      setLikedProjects([...likedProjects, id]);
    }
  };

  const stats = {
    totalProjects: projectsData.length,
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Commercial': return <Building2 className="w-4 h-4 md:w-5 md:h-5" />;
      case 'Residential': return <Home className="w-4 h-4 md:w-5 md:h-5" />;
      case 'Infrastructure': return <Route className="w-4 h-4 md:w-5 md:h-5" />;
      case 'Institutional': return <Users className="w-4 h-4 md:w-5 md:h-5" />;
      default: return <Building2 className="w-4 h-4 md:w-5 md:h-5" />;
    }
  };

  const getActiveCategoryColor = () => {
    const category = categories.find(c => c.id === activeCategory);
    return category ? category.color : 'from-amber-500 to-yellow-500';
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSortBy('newest');
    setShowMobileFilters(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 via-yellow-800/85 to-yellow-900/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 md:mb-8">
              <nav className="flex items-center space-x-2 text-sm md:text-base">
                <Link href="/" className="text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-white" />
                <span className="text-white font-medium">Projects</span>
              </nav>
            </div>
            
            {/* Hero Content */}
            <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
              <div className="lg:flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 md:mb-8"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Our Construction
                    <span className="block text-white">Projects Portfolio</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white max-w-3xl mx-auto lg:mx-0">
                    Discover our innovative construction projects delivering excellence across commercial, residential, and infrastructure sectors worldwide.
                  </p>
                </motion.div>
              </div>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:w-96 lg:pl-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Start Your Project</h3>
                  <p className="text-white mb-6">Let&apos;s build something amazing together.</p>
                  <div className="space-y-3">
                    <Link 
                      href="/contact-us"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white text-amber-900 rounded-lg hover:bg-amber-50 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Phone className="w-5 h-5" />
                      Get Free Consultation
                    </Link>
                    <Link 
                      href="/service"
                      className="flex items-center justify-center gap-2 w-full py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold transition-all"
                    >
                      <ArrowRight className="w-5 h-5" />
                      View Our Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Header */}
      {isMobile && (
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: isScrolled ? 0 : -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white border-b border-gray-200 shadow-lg px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-amber-600" />
                <span className="font-bold text-gray-900">Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg font-medium active:scale-95 transition-transform"
                >
                  <Filter size={18} />
                  {showMobileFilters ? 'Close' : 'Filter'}
                </button>
                {viewMode === 'grid' ? (
                  <button 
                    onClick={() => setViewMode('list')}
                    className="p-2 rounded-lg bg-gray-100 active:scale-95 transition-transform"
                  >
                    <List size={18} />
                  </button>
                ) : (
                  <button 
                    onClick={() => setViewMode('grid')}
                    className="p-2 rounded-lg bg-gray-100 active:scale-95 transition-transform"
                  >
                    <Grid size={18} />
                  </button>
                )}
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-between mt-2 text-xs">
              <span className="text-gray-600">
                {projects.length} projects
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {showMobileFilters && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Filters Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl overflow-y-auto md:hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors active:scale-95"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" size={20} />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base bg-gray-50"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setShowMobileFilters(false);
                        }}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all active:scale-95 ${
                          activeCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                        }`}
                      >
                        {category.icon}
                        <span className="text-sm mt-1">{category.label}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full mt-1 ${
                          activeCategory === category.id
                            ? 'bg-white/30 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Sort */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowMobileFilters(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all active:scale-95 ${
                          sortBy === option.value
                            ? 'bg-amber-50 text-amber-700 border border-amber-200 font-medium'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="sticky bottom-0 bg-white pt-6 border-t border-gray-200">
                  <button
                    onClick={clearFilters}
                    className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 font-medium mb-3 active:scale-95"
                  >
                    Clear All Filters
                  </button>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="w-full py-3 border-2 border-amber-500 text-amber-500 rounded-lg hover:bg-amber-50 font-medium active:scale-95"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Desktop Filters */}
          <div className="hidden md:block mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-4 z-40">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500" size={20} />
                  <input
                    type="text"
                    placeholder="Search projects by name, location, client..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-10 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base bg-gray-50"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              </div>

              {/* Desktop Filters Row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Category Filter */}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Project Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all text-sm ${
                          activeCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                        }`}
                      >
                        {category.icon}
                        <span>{category.label}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                          activeCategory === category.id
                            ? 'bg-white/30 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* View and Sort Controls */}
                <div className="flex items-center gap-4">
                  {/* View Toggle */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">View:</span>
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded transition-all ${
                          viewMode === 'grid' 
                            ? 'bg-white text-amber-600 shadow' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        title="Grid View"
                      >
                        <Grid size={18} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded transition-all ${
                          viewMode === 'list' 
                            ? 'bg-white text-amber-600 shadow' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        title="List View"
                      >
                        <List size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="flex-1 md:flex-none">
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm appearance-none"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(activeCategory !== 'all' || searchTerm) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2.5 rounded-lg bg-gray-800 text-white hover:bg-gray-900 text-sm font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Results Info */}
          <div className={`${isMobile ? 'mt-20' : ''} mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3`}>
            {!loading && projects.length > 0 && (
              <>
                <div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Showing <span className="font-semibold text-amber-600">{Math.min(visibleProjects, projects.length)}</span> of{' '}
                    <span className="font-semibold text-amber-600">{projects.length}</span> projects
                    {(activeCategory !== 'all' || searchTerm) && (
                      <span className="text-gray-500"> (filtered)</span>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{projects.filter(p => p.featured).length} featured projects</span>
                </div>
              </>
            )}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-16 md:py-24">
              <div className="inline-flex flex-col items-center">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mb-4"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-amber-600 animate-spin" />
                  </div>
                </div>
                <p className="text-gray-600 mt-4">Loading projects...</p>
                <p className="text-sm text-gray-500 mt-2">Please wait a moment</p>
              </div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12 md:py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="max-w-md mx-auto">
                <div className="text-amber-500 mb-4">
                  <Search size={isMobile ? 48 : 64} className="mx-auto" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 mb-6 px-4">
                  {searchTerm 
                    ? `No projects match "${searchTerm}"` 
                    : 'Try adjusting your search or filter criteria'}
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all font-medium shadow-lg hover:shadow-xl active:scale-95"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Projects Grid/List */}
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8' 
                : 'space-y-4 md:space-y-6'
              }>
                {projects.slice(0, visibleProjects).map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: isMobile ? 0 : -5 }}
                    transition={{ duration: 0.3 }}
                    className="touch-manipulation"
                  >
                    <Link href={`/projects/${project.id}`} className="block">
                      <div className={`
                        ${viewMode === 'grid' 
                          ? 'h-full hover:shadow-xl md:hover:shadow-2xl' 
                          : 'flex flex-col lg:flex-row gap-4 md:gap-6 lg:hover:bg-gradient-to-r lg:hover:from-amber-50 lg:hover:to-yellow-50 p-4 md:p-6'
                        }
                        bg-white rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 group relative active:scale-[0.99]
                      `}>
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 right-3 md:top-4 md:right-4 z-30">
                            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium shadow-lg">
                              <Star size={10} className="fill-white" />
                              <span>Featured</span>
                            </div>
                          </div>
                        )}

                        {/* Project Image */}
                        <div className={`
                          ${viewMode === 'grid' 
                            ? 'h-48 sm:h-56 md:h-64' 
                            : 'h-56 lg:h-72 lg:w-96 flex-shrink-0'
                          }
                          relative overflow-hidden rounded-lg md:rounded-xl
                        `}>
                          <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                            style={{ 
                              backgroundImage: `url(${project.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20">
                            <span className="flex items-center gap-1 md:gap-2 text-white bg-black/60 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm backdrop-blur-sm">
                              <span className="text-amber-300">{getCategoryIcon(project.category)}</span>
                              {project.category}
                            </span>
                          </div>
                          
                          {/* Social Actions */}
                          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 flex gap-1 md:gap-2">
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleLike(project.id);
                              }}
                              className="p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all hover:scale-110 active:scale-95"
                            >
                              <Heart 
                                size={14} 
                                className={`${
                                  likedProjects.includes(project.id) 
                                    ? 'fill-red-500 text-red-500' 
                                    : 'text-gray-600'
                                }`}
                              />
                            </button>
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              className="p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all hover:scale-110 active:scale-95"
                            >
                              <Share2 size={14} className="text-gray-600" />
                            </button>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className={viewMode === 'grid' ? 'p-4 md:p-6' : 'flex-1'}>
                          <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="mb-3 md:mb-4">
                              <div className="flex items-start justify-between mb-2 md:mb-3">
                                <div className="flex-1">
                                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2 line-clamp-1 group-hover:text-amber-700 transition-colors">
                                    {project.title}
                                  </h3>
                                  <div className="flex items-center gap-2 md:gap-3 text-gray-600 mb-2 md:mb-3 flex-wrap">
                                    <span className="flex items-center gap-1 text-xs md:text-sm">
                                      <MapPin size={12} className="text-amber-500" />
                                      {project.location}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs md:text-sm">
                                      <Calendar size={12} className="text-amber-500" />
                                      {project.duration}
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right ml-3 md:ml-4">
                                  <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs">
                                    <Star size={10} className="fill-amber-500" />
                                    <span>{project.rating}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Description */}
                              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                                {project.description}
                              </p>
                            </div>

                            {/* Project Specs */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5 pt-3 md:pt-4 border-t border-gray-100">
                              <div>
                                <p className="text-xs text-gray-500 mb-0.5 md:mb-1">Type</p>
                                <p className="font-semibold text-gray-900 text-sm">{project.type}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-0.5 md:mb-1">Client</p>
                                <p className="font-semibold text-gray-900 text-sm truncate">{project.client}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-0.5 md:mb-1">Contractor</p>
                                <p className="font-semibold text-gray-900 text-sm truncate">{project.contractor}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-0.5 md:mb-1">Views</p>
                                <div className="flex items-center gap-1">
                                  <Eye size={10} className="text-gray-400" />
                                  <span className="font-semibold text-gray-900 text-sm">{project.views.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Actions */}
                            <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1 group text-sm md:text-base">
                                View Details
                                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                              </span>
                              <div className="flex items-center gap-2 md:gap-3">
                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                  <Heart size={10} className={`${
                                    likedProjects.includes(project.id) 
                                      ? 'fill-red-500 text-red-500' 
                                      : 'text-gray-400'
                                  }`} />
                                  {likedProjects.includes(project.id) ? project.likes + 1 : project.likes}
                                </span>
                                <button 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.open(project.image, '_blank');
                                  }}
                                  className="p-1 hover:bg-amber-100 rounded-full transition-colors active:scale-95"
                                  title="Download Image"
                                >
                                  <Download size={12} className="text-amber-500" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleProjects < projects.length && (
                <div className="text-center mt-8 md:mt-16">
                  <button
                    onClick={loadMoreProjects}
                    className="px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg md:rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all font-medium shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base"
                  >
                    Load More Projects ({projects.length - visibleProjects} remaining)
                  </button>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3">
                    Showing {visibleProjects} of {projects.length} projects
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-yellow-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Start Your Project?</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Let&apos;s Build Something
                <span className="block text-amber-300">Amazing Together</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Contact our expert team for a free consultation and project estimate.
                We deliver excellence in construction with innovative solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg md:rounded-xl hover:from-amber-600 hover:to-yellow-600 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>Schedule a Consultation</span>
              </Link>
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-lg md:rounded-xl hover:bg-white/20 font-semibold transition-all text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span>Request a Quote</span>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 text-amber-400 mb-2 md:mb-3">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <p className="text-white font-medium text-sm md:text-base">Call Us</p>
                  <p className="text-white text-sm md:text-base">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 text-amber-400 mb-2 md:mb-3">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <p className="text-white font-medium text-sm md:text-base">Email Us</p>
                  <p className="text-white text-sm md:text-base">info@construction.com</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 text-amber-400 mb-2 md:mb-3">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <p className="text-white font-medium text-sm md:text-base">Working Hours</p>
                  <p className="text-white text-sm md:text-base">Mon-Fri: 8AM-6PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}