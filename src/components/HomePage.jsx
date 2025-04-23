import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.webp';

function HomePage() {
  const scrollToNextSection = () => {
    document.getElementById('design').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16 pb-12 relative">
      {/* Background containers positioned absolutely at the edges */}
      <div 
        className="fixed top-0 left-0 w-1/6 h-full z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxWidth: '250px' // Ensure it stays at the edge
        }}
      />
      
      <div 
        className="fixed top-0 right-0 w-1/6 h-full z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxWidth: '250px' // Ensure it stays at the edge
        }}
      />

      {/* Content area with padding to avoid overlapping with backgrounds */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-4xl mx-auto text-center z-10 px-8">
        {/* Main title with gradient */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6 leading-tight">
          Design Anything. Publish Anywhere.
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Empower your creativity with Canva — no design experience needed.
        </p>
        
        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
          Bring your ideas to life with thousands of templates, millions of free images, and powerful drag-and-drop tools. 
          Whether you're creating social media posts, presentations, posters, or videos — 
          Canva makes professional design simple, fast, and fun.
        </p>
        
        {/* CTA Button - Using purple theme */}
        <button 
          onClick={scrollToNextSection} 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg mb-16 transition-all"
        >
          Start designing now
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator z-10" onClick={scrollToNextSection}>
        <p className="text-gray-500 dark:text-gray-400">Scroll to see more ↓</p>
      </div>
    </div>
  );
}

export default HomePage;
