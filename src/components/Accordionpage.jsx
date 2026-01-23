'use client';

import { useState } from 'react';
import { 
  HelpCircle, 
  LayoutDashboard, 
  Briefcase, 
  Video,
  ShoppingCart,
  BookOpen,
  FileText,
  Shield,
  Users
} from 'lucide-react';

export default function AccordionTabs() {
  const [activeAccordion, setActiveAccordion] = useState('marketplace');
  const [activeTab, setActiveTab] = useState('responsive');

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const tabs = [
    {
      id: 'responsive',
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: 'Responsive Layout',
      content: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.'
    },
    {
      id: 'portfolio',
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Multiple Portfolios',
      content: 'Create and manage multiple portfolio layouts with ease. Showcase different projects in unique ways tailored to specific clients or industries.'
    },
    {
      id: 'video',
      icon: <Video className="w-5 h-5" />,
      title: 'Video Support',
      content: 'Embed videos from various platforms with automatic optimization. Our system ensures perfect playback quality across all devices and screen sizes.'
    }
  ];

  const accordionItems = [
    {
      id: 'marketplace',
      icon: <ShoppingCart className="w-5 h-5" />,
      title: 'Marketplace Basics',
      content: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate'
    },
    {
      id: 'author',
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Author Resources',
      content: 'Access comprehensive resources for authors including writing guides, style templates, and publishing tools to help you create compelling content.'
    },
    {
      id: 'authoring',
      icon: <FileText className="w-5 h-5" />,
      title: 'Authoring Requirements',
      content: 'Learn about the technical and content requirements for publishing on our platform, including formatting guidelines and quality standards.'
    },
    {
      id: 'copyright',
      icon: <Shield className="w-5 h-5" />,
      title: 'Copyright & Legal',
      content: 'Understand copyright laws, licensing options, and legal considerations for protecting your intellectual property and using third-party content.'
    },
    {
      id: 'affiliate',
      icon: <Users className="w-5 h-5" />,
      title: 'Affiliate Program',
      content: 'Join our affiliate program to earn commissions by promoting our products. Access marketing materials, tracking tools, and performance analytics.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        {/* Header with animation */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Accordion & Tabs
          </h1>
          <div className="flex items-center justify-center gap-8 mt-4">
           <span className="text-gray-600 text-lg">elements</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slideUp">
          {/* Accordion Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            {accordionItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`border-b border-gray-200 last:border-b-0 transition-all duration-300 ${
                  activeAccordion === item.id ? 'bg-gray-50' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <span className={`transform transition-transform duration-300 group-hover:scale-110 ${
                      activeAccordion === item.id ? 'text-yellow-600' : 'text-gray-500'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="text-gray-800 font-medium group-hover:text-yellow-600 transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-2xl font-semibold text-gray-600 transform transition-transform duration-500">
                    {activeAccordion === item.id ? '−' : '+'}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeAccordion === item.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 animate-slideIn">
                    <div className="flex gap-4 items-start">
                      <p className="text-gray-600 text-base font-semibold leading-relaxed pt-2">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Tab Headers */}
            <div className="flex flex-col">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center gap-3 p-5 text-left border-b border-gray-200 transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className={`transform transition-transform duration-300 group-hover:scale-110 ${
                    activeTab === tab.id ? 'text-white' : 'text-gray-400'
                  }`}>
                    {tab.icon}
                  </span>
                  <span className="font-medium transition-all duration-300 group-hover:translate-x-2">
                    {tab.title}
                  </span>
                  <span className={`ml-auto transform transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}>
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content with animation */}
            <div className="p-6 relative overflow-hidden min-h-[200px]">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-700 ease-in-out ${
                    activeTab === tab.id
                      ? 'opacity-100 translate-y-0'
                      : 'absolute opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <p className="text-gray-600 text-base font-semibold leading-relaxed animate-fadeIn">
                    {tab.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes lineExpand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 5rem;
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.3s both;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out 0.2s both;
        }

        .animate-lineExpand {
          animation: lineExpand 1s ease-out 0.5s both;
        }

        .delay-100 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}