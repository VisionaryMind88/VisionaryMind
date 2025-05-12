import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-primary-bg bg-opacity-90 backdrop-blur-md border-b border-primary-lighter' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium">Home</button>
            <button onClick={() => handleNavClick('over-ons')} className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium">Over ons</button>
            <button onClick={() => handleNavClick('diensten')} className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium">Diensten</button>
            <button onClick={() => handleNavClick('maatwerk')} className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium">Maatwerk</button>
            <button onClick={() => handleNavClick('contact')} className="text-text-primary hover:text-accent-blue transition-colors duration-300 font-medium">Contact</button>
          </div>
          
          <div className="md:flex hidden">
            <Button
              onClick={() => handleNavClick('contact')}
              className="neon-button bg-accent-blue text-white py-2 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-accent-blue/25"
            >
              Plan adviesgesprek
            </Button>
          </div>
          
          <button className="md:hidden text-text-primary hover:text-accent-blue" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-bg bg-opacity-95 backdrop-blur-md">
          <div className="pt-2 pb-4 px-4 space-y-4">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-text-primary hover:text-accent-blue">Home</button>
            <button onClick={() => handleNavClick('over-ons')} className="block w-full text-left py-2 text-text-primary hover:text-accent-blue">Over ons</button>
            <button onClick={() => handleNavClick('diensten')} className="block w-full text-left py-2 text-text-primary hover:text-accent-blue">Diensten</button>
            <button onClick={() => handleNavClick('maatwerk')} className="block w-full text-left py-2 text-text-primary hover:text-accent-blue">Maatwerk</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left py-2 text-text-primary hover:text-accent-blue">Contact</button>
            <Button
              onClick={() => handleNavClick('contact')}
              className="w-full neon-button bg-accent-blue text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-accent-blue/25 mt-4"
            >
              Plan adviesgesprek
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
