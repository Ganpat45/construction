import React from 'react';
import { Calendar } from 'lucide-react';

const BlogPost = ({ date, image, title, description, color, delay }) => {
  return (
    <div 
      className="flex flex-col bg-white shadow-lg overflow-hidden group"
      style={{
        animation: `slideIn 0.6s ease-out ${delay}s backwards`
      }}
    >
      {/* Date Header */}
      <div className={`${color} px-6 py-4 flex items-center gap-3 relative`}>
        <div className={`${color} absolute -right-4 top-0 bottom-0 w-8`} 
             style={{clipPath: 'polygon(0 0, 100% 50%, 0 100%)'}}>
        </div>
        <Calendar className="w-6 h-6 text-white" />
        <span className="text-white text-sm font-medium">{date}</span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
       
      </div>
    </div>
  );
};

export default function LatestPosts() {
  const posts = [
    {
      date: "18 November 2014, 11:50 AM",
      image: "/blog1.png",
      title: "Faceted Search Has Landed",
      description: "This year in our 2014 roadmap one of our goals was to improve financial tooling for authors. A big part of that is the withdrawal cycle.",
      color: "bg-yellow-500"
    },
    {
      date: "16 November 2014, 12:20 AM",
      image: "/blog2.png",
      title: "Vat and Global Marketplace",
      description: "This year in our 2014 roadmap one of our goals was to improve financial tooling for authors. A big part of that is the withdrawal cycle.",
      color: "bg-yellow-500"
    },
    {
      date: "14 November 2014, 10:50 AM",
      image: "/blog3.png",
      title: "Default withdrawal option",
      description: "This year in our 2014 roadmap one of our goals was to improve financial tooling for authors. A big part of that is the withdrawal cycle.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Latest Posts
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gray-300"></div>
          <span className="text-gray-600 text-lg">what we offer</span>
          <div className="h-px w-24 bg-gray-300"></div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogPost 
            key={index}
            {...post}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
}