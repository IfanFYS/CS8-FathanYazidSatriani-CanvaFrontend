import businessImage from '../assets/CanvaBusiness.webp'; // Import the business image

function BusinessPage() {
  const scrollToNextSection = () => {
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative">
      <div className="text-center max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Text content */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text mb-6">
              Canva for Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Empower your team with Canva's collaboration tools and brand management solutions.
            </p>
            {/* Blue themed button with redirect */}
            <a 
              href="https://www.canva.com/solutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-blue px-8 py-4 text-lg inline-block"
            >
              Explore Business Solutions
            </a>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={businessImage} 
              alt="Canva for Business" 
              className="rounded-lg shadow-lg max-w-full h-auto" 
            />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <p className="text-gray-500 dark:text-gray-400">Scroll for Education ↓</p>
      </div>
    </div>
  );
}

export default BusinessPage;
