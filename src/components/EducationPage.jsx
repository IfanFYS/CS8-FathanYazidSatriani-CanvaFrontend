import educationImage from '../assets/CanvaEducation.webp'; // Import the education image

function EducationPage() {
  const scrollToNextSection = () => {
    document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative">
      <div className="text-center max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-8">
          {/* Text content - note we're using flex-row-reverse above so text appears on right */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text mb-6">
              Canva for Education
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Inspire learning with free visual communication tools for schools and universities.
            </p>
            {/* Yellow themed button with redirect */}
            <a 
              href="https://www.canva.com/education/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary-yellow px-8 py-4 text-lg inline-block"
            >
              Learn About Education
            </a>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={educationImage} 
              alt="Canva for Education" 
              className="rounded-lg shadow-lg max-w-full h-auto" 
            />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <p className="text-gray-500 dark:text-gray-400">Scroll for Plans ↓</p>
      </div>
    </div>
  );
}

export default EducationPage;
