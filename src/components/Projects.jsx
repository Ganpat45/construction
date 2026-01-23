"use client";

import { useState } from "react";
import { Grid3x3, Menu } from "lucide-react";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("Show All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filters = [
    "Show All",
    "Hospitals",
    "Schools",
    "Houses",
    "Flats",
    "Offices",
    "Universities",
  ];

  const projects = [
    {
      id: 1,
      title: "Central Hospital",
      subtitle: "building",
      category: "Houses",
      image: "/project1.png",
    },
    {
      id: 2,
      title: "Construction CEO",
      subtitle: "ceo, architect",
      category: "Hospitals",
      image: "/project2.png",
    },
    {
      id: 3,
      title: "Workder Accessories",
      subtitle: "tools, accessories",
      category: "Flats",
      image: "/project3.png",
    },
    {
      id: 4,
      title: "Rebuilding an old University",
      subtitle: "university, building",
      category: "Schools",
      image: "/project4.png",
    },
    {
      id: 5,
      title: "Safety Boots",
      subtitle: "safety, equipment",
      category: "Universities",
      image: "/project5.png",
    },
    {
      id: 6,
      title: "Big Trucks on Action",
      subtitle: "cat, building",
      category: "Offices",
      image: "/project6.png",
    },
  ];

  const filteredProjects =
    activeFilter === "Show All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white py-8 md:py-16 text-center border-b border-gray-200 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Projects
        </h1>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="h-px w-12 md:w-24 bg-gray-400"></div>
          <span className="text-gray-600 text-sm md:text-lg">latest works</span>
          <div className="h-px w-12 md:w-24 bg-gray-400"></div>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-gray-700 font-medium transition-colors ${
            showMobileFilters ? "bg-orange-50" : "bg-gray-50"
          }`}
        >
          <Menu size={20} />
          Filter: {activeFilter}
          <span className="ml-auto text-sm font-normal text-gray-500">
            {showMobileFilters ? "▲" : "▼"}
          </span>
        </button>
      </div>

      {/* Filter Navigation */}
      <div
        className={`bg-white border-b border-gray-200 transition-all duration-300 ${
          showMobileFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
        } overflow-hidden md:overflow-visible md:block md:py-6`}
      >
        <div className="container mx-auto px-4 py-4 md:py-0">
          {/* Mobile Filters Grid */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setShowMobileFilters(false);
                  }}
                  className={`py-3 px-2 rounded-lg text-sm transition-all ${
                    activeFilter === filter
                      ? "bg-orange-500 text-white font-medium shadow-sm"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {filter === "Show All" && <Grid3x3 size={14} className="mr-1" />}
                    <span className="truncate">{filter}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-2 lg:gap-8">
            {filters.map((filter, index) => (
              <div key={filter} className="flex items-center gap-2 lg:gap-8">
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center gap-2 text-sm lg:text-base transition-colors whitespace-nowrap ${
                    activeFilter === filter
                      ? "text-orange-500 font-medium"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {filter === "Show All" && <Grid3x3 size={18} />}
                  {filter}
                </button>
                {index < filters.length - 1 && (
                  <span className="text-gray-300 hidden lg:inline">||</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* "Show All" View - Fixed 2 rows layout */}
        {activeFilter === "Show All" ? (
          <div className="space-y-6 md:space-y-8">
            {/* First Row: 1-2-3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {/* Second Row: 4-5-6 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {projects.slice(3, 6).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ) : (
          /* Filtered Results View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer aspect-[4/3]">
      {/* Project Image */}
      <div className="absolute inset-0 bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Project Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 md:p-6">
        <h3 className="text-white text-lg md:text-xl font-light mb-1 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-sm line-clamp-1">
          {project.subtitle}
        </p>
      </div>
      
      {/* Hover Overlay */}
      </div>
  );
}