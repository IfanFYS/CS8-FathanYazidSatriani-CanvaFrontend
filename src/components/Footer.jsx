function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 w-full py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Templates</a></li>
              <li><a href="https://www.canva.com/free/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Free</a></li>
              <li><a href="https://www.canva.com/pro/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Pro</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="https://www.canva.com/for-teams/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Teams</a></li>
              <li><a href="https://www.canva.com/education/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Education</a></li>
              <li><a href="https://www.canva.com/solutions/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Business</a></li>
              <li><a href="https://www.canva.com/enterprise/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Enterprise</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Help Center</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Webinars</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Contact</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Partners</a></li>
            </ul>
          </div>
        </div>
        
        {/* Updated bottom section with centered copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center">
          {/* Centered copyright */}
          <div className="mb-4">
            <span className="text-gray-600 dark:text-gray-400 text-sm">© 2025 Canva</span>
          </div>
          
          {/* Other links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm">Terms</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm">Privacy</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
