import './App.css';
import Navbar from './Navbar';
import { useEffect } from 'react';
import HomePage from './components/HomePage';
import DesignPage from './components/DesignPage';
import BusinessPage from './components/BusinessPage';
import EducationPage from './components/EducationPage';
import PlansPage from './components/PlansPage';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Create and append animated background elements
    const animatedBg = document.createElement('div');
    animatedBg.className = 'animated-bg';
    
    const shape1 = document.createElement('div');
    shape1.className = 'animated-shape shape-1';
    
    const shape2 = document.createElement('div');
    shape2.className = 'animated-shape shape-2';
    
    const shape3 = document.createElement('div');
    shape3.className = 'animated-shape shape-3';
    
    animatedBg.appendChild(shape1);
    animatedBg.appendChild(shape2);
    animatedBg.appendChild(shape3);
    
    document.body.appendChild(animatedBg);
    
    // Cleanup function
    return () => {
      if (document.body.contains(animatedBg)) {
        document.body.removeChild(animatedBg);
      }
    };
  }, []);

  // Scroll to section function for nav links
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <section id="home" className="section">
          <HomePage />
        </section>
        <section id="design" className="section">
          <DesignPage />
        </section>
        <section id="business" className="section">
          <BusinessPage />
        </section>
        <section id="education" className="section">
          <EducationPage />
        </section>
        <section id="plans" className="section">
          <PlansPage />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
