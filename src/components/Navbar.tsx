
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="flex items-center">
              <span className="font-poppins font-bold text-2xl text-white">Learn<span className="text-violet-400">Hub</span></span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:bg-dark-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#courses" className="text-gray-300 hover:bg-dark-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</a>
              <a href="#features" className="text-gray-300 hover:bg-dark-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:bg-dark-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="secondary" className="mr-2">Log in</Button>
            <Button className="bg-violet-600 hover:bg-violet-700">Sign up</Button>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button */}
            <Button variant="ghost">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
