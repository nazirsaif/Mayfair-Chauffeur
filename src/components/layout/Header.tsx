import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Coaches', path: '/coaches' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif text-[#f5f5f5] tracking-wide">
          Mayfair <span className="text-[#c9a769]">Executive</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-[#c9a769] ${
                location.pathname === link.path ? 'text-[#c9a769]' : 'text-[#f5f5f5]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+448001234567" className="flex items-center text-[#f5f5f5] hover:text-[#c9a769] transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">0800 123 4567</span>
          </a>
          <Button to="/book">Book Now</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#f5f5f5] hover:text-[#c9a769] transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 py-4 px-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-base font-medium transition-colors ${
                location.pathname === link.path ? 'text-[#c9a769]' : 'text-[#f5f5f5]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-neutral-800 flex flex-col space-y-4">
            <a href="tel:+448001234567" className="flex items-center text-[#f5f5f5]">
              <Phone className="w-5 h-5 mr-3 text-[#c9a769]" />
              <span className="text-base font-medium">0800 123 4567</span>
            </a>
            <Button to="/book" className="w-full">Book Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};
