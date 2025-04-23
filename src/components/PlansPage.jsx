function PlansPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative py-16">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text mb-6">
          Pricing Plans
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Choose the perfect Canva plan for you or your team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Design made easy, and free.</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              Create amazing visual content with no design experience. Start by yourself, or invite others to collaborate.
            </p>
            <a 
              href="https://www.canva.com/free/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary w-full py-3 mt-auto text-center"
            >
              Get Started
            </a>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full border-2 border-pink-500 transition-transform hover:scale-105">
            <div className="bg-pink-500 text-white text-sm font-bold py-1 px-3 rounded-full self-start mb-2">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-4">$12.99</p>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Design like a pro</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              Your all-in-one solution for designing and managing your work. Access premium content, brand tools, and AI features to reach your goals faster.
            </p>
            <a 
              href="https://www.canva.com/pro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary-pink w-full py-3 mt-auto text-center"
            >
              Try Free for 30 Days
            </a>
          </div>
          
          {/* Teams Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Teams</h3>
            <p className="text-4xl font-bold mb-4">$14.99</p>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Team collaboration</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              Unlock tools to grow your brand, cut costs, and engage more customers—with the all-in-one visual communication platform designed for work.
            </p>
            <a 
              href="https://www.canva.com/for-teams/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary w-full py-3 mt-auto text-center"
            >
              Try Free for 30 Days
            </a>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col h-full transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">Custom</p>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Scale with confidence</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              Enable your organization to create, collaborate, and publish visual content with a secure platform designed for enterprise.
            </p>
            <a 
              href="https://www.canva.com/enterprise/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary w-full py-3 mt-auto text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
        
        {/* Feature comparison link */}
        <div className="mt-12">
          <a href="#" className="text-pink-600 dark:text-pink-400 hover:underline font-medium">
            Compare all features →
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator mt-12" onClick={scrollToTop}>
        <p className="text-gray-500 dark:text-gray-400">Back to top ↑</p>
      </div>
    </div>
  );
}

export default PlansPage;
