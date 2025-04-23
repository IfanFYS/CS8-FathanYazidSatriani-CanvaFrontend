import { useState, useEffect, useRef } from 'react';
import canvaLogoLight from './assets/canva.svg';
import canvaLogoDark from './assets/canvadark.svg';
import sunIcon from './assets/sun.svg';
import moonIcon from './assets/moon.svg';
import menuIconLight from './assets/menu_light.svg';
import menuIconDark from './assets/menu_dark.svg';
import crossIconLight from './assets/cross_light.svg';
import crossIconDark from './assets/cross_dark.svg';
import accountIconLight from './assets/account_light.svg';
import accountIconDark from './assets/account_dark.svg';

function Navbar({ scrollToSection }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupAnimation, setPopupAnimation] = useState(false);
  
  const popupRef = useRef(null);
  const menuRef = useRef(null);

  // Choose the appropriate SVG based on current mode
  const canvaLogo = darkMode ? canvaLogoDark : canvaLogoLight;
  const menuIconSrc = darkMode ? menuIconDark : menuIconLight;
  const crossIconSrc = darkMode ? crossIconDark : crossIconLight;
  const accountIconSrc = darkMode ? accountIconDark : accountIconLight;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    // Close the login popup when clicking outside
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeLoginPopup();
      }
      
      // Close menu when clicking outside
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          !event.target.closest('button[aria-label="Menu"]')) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, menuRef]);

  // Effect to animate popup when opened
  useEffect(() => {
    if (loginPopupOpen) {
      // Slight delay to ensure DOM is ready for animation
      setTimeout(() => {
        setPopupAnimation(true);
      }, 10);
    } else {
      setPopupAnimation(false);
    }
  }, [loginPopupOpen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLoginPopup = () => {
    setLoginPopupOpen(true);
  };
  
  const closeLoginPopup = () => {
    // Start closing animation
    setPopupAnimation(false);
    // Wait for animation to finish before removing from DOM
    setTimeout(() => {
      setLoginPopupOpen(false);
    }, 300);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', username, password);
    setUsername('');
    setPassword('');
    closeLoginPopup();
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 shadow-md z-50 transition-colors">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <button onClick={() => handleNavClick('home')} className="flex items-center text-black dark:text-white hover:scale-110 transition-transform px-2">
          <img src={canvaLogo} alt="Canva Logo" className="h-6" />
        </button>
        <button onClick={() => handleNavClick('design')} className="hidden md:block text-black dark:text-white font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Design
        </button>
        <button onClick={() => handleNavClick('business')} className="hidden md:block text-black dark:text-white font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Business
        </button>
        <button onClick={() => handleNavClick('education')} className="hidden md:block text-black dark:text-white font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Education
        </button>
        <button onClick={() => handleNavClick('plans')} className="hidden md:block text-black dark:text-white font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Plans
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <img
            src={darkMode ? sunIcon : moonIcon}
            alt="Toggle Dark Mode"
            className="h-6"
          />
        </button>
        <button
          onClick={toggleLoginPopup}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <img
            src={accountIconSrc}
            alt="Account"
            className="h-6"
          />
        </button>
        <button
          aria-label="Menu"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors md:hidden"
          onClick={toggleMenu}
        >
          <img
            src={menuOpen ? crossIconSrc : menuIconSrc}
            alt="Menu"
            className="h-6"
          />
        </button>
      </div>

      {/* Dropdown Menu for Mobile/Tablet with animation */}
      {menuOpen && (
        <div 
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden overflow-hidden"
          style={{
            maxHeight: '300px', // Maximum height for animation
            animation: 'slideDown 0.3s ease-out forwards',
          }}
        >
          <button onClick={() => handleNavClick('design')} className="block w-full text-left p-4 text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Design
          </button>
          <button onClick={() => handleNavClick('business')} className="block w-full text-left p-4 text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Business
          </button>
          <button onClick={() => handleNavClick('education')} className="block w-full text-left p-4 text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Education
          </button>
          <button onClick={() => handleNavClick('plans')} className="block w-full text-left p-4 text-black dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Plans
          </button>
        </div>
      )}

      {/* Login Popup with animation */}
      {loginPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300" style={{ opacity: popupAnimation ? 1 : 0 }}>
          <div 
            ref={popupRef}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md transition-all duration-300"
            style={{ 
              transform: popupAnimation ? 'scale(1)' : 'scale(0.9)',
              opacity: popupAnimation ? 1 : 0
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black dark:text-white">Sign in to Canva</h2>
              <button 
                onClick={closeLoginPopup}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-left">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="text-left">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 text-left">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white hover:text-purple-100 bg-purple-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <a href="#" className="text-purple-600 hover:text-blue-400 hover:underline transition-colors">
                Don't have an account? Sign up here!
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;