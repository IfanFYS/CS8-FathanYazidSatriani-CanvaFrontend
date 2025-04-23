import { useState, useRef } from 'react';
// Import templete images
import template1 from '../assets/template2.jfif';
import template2 from '../assets/template1.jpg';
import template3 from '../assets/template3.jpg';
import template4 from '../assets/template4.jpg';
import template5 from '../assets/template5.jpg';
import template6 from '../assets/template6.jpg';
import template7 from '../assets/template7.jpg';
import template8 from '../assets/template8.jpg';

function DesignPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef(null);
  
  // Function to scroll the templates container
  const scrollTemplates = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  // Design categories based on the image provided
  const designCategories = [
    { name: 'For you', icon: '👤' },
    { name: 'Docs', icon: '📄' },
    { name: 'Whiteboards', icon: '🖌️' },
    { name: 'Presentations', icon: '📊' },
    { name: 'Social media', icon: '📱' },
    { name: 'Video', icon: '🎥' },
    { name: 'Print products', icon: '🖨️' },
    { name: 'Websites', icon: '🌐' },
    { name: 'More', icon: '•••' }
  ];

  // Template images array
  const templateImages = [
    { src: template1, title: "Presentation" },
    { src: template2, title: "Social Media Post" },
    { src: template3, title: "Poster Design" },
    { src: template4, title: "Academic Report" },
    { src: template5, title: "Future Planner" },
    { src: template6, title: "Presentation Template" },
    { src: template7, title: "Online Course" },
    { src: template8, title: "Assignment Template" }
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-12 px-6 md:px-12">
      {/* Hero Section with proper spacing */}
      <div className="text-center mb-10 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-8 leading-normal py-2">
          What will you design today?
        </h1>
        
        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for templates..."
            className="w-full px-5 py-4 pr-12 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Design Categories */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
        {designCategories.map((category, index) => (
          <button 
            key={index}
            className="flex flex-col items-center group no-underline"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-purple-600 hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl mb-3 transition-all transform group-hover:scale-105">
              {category.icon}
            </div>
            <span className="text-sm md:text-base text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Templates Section with improved horizontal scrolling and visible navigation arrows */}
      <div className="w-full mb-16">
        <div className="flex justify-center items-center mb-6 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Templates for you
          </h2>
        </div>
        
        {/* Container for templates with navigation arrows */}
        <div className="relative w-full">
          {/* Left arrow navigation - prominent and visible */}
          <button 
            onClick={() => scrollTemplates('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
            style={{ transform: 'translate(-10%, -50%)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Horizontally scrollable templates container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar pb-8 gap-4 px-4 py-2"
          >
            {templateImages.map((template, index) => (
              <div 
                key={index}
                className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={template.src} 
                  alt={template.title} 
                  className="w-[320px] h-[180px] object-cover rounded-lg shadow-md hover:shadow-xl transition-all"
                />
              </div>
            ))}
          </div>
          
          {/* Right arrow navigation - prominent and visible */}
          <button 
            onClick={() => scrollTemplates('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
            style={{ transform: 'translate(10%, -50%)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Edge shadows to indicate more content */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none opacity-75"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none opacity-75"></div>
        </div>
      </div>
      
      {/* Custom size and Upload buttons - matching reference design */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
          Custom size
        </button>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
          Upload
        </button>
      </div>
    </div>
  );
}

export default DesignPage;
