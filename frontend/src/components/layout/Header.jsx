import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Feather } from 'lucide-react';
import { Button } from '../ui/button';
import { siteInfo } from '../../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/booking', label: 'Booking' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F2]/95 backdrop-blur-md border-b border-[#D7C49E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Moon className="w-8 h-8 text-[#5D4E6D] group-hover:text-[#6B8CBE] transition-colors duration-300" />
              <Feather className="w-4 h-4 text-[#B38E5D] absolute -bottom-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-semibold text-[#5D4E6D] tracking-wide">
                {siteInfo.name}
              </span>
              <span className="text-xs text-[#8A9B68] tracking-widest uppercase font-montserrat">
                Sanctuary
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#5D4E6D] text-white'
                    : 'text-[#5D4E6D] hover:bg-[#5D4E6D]/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/booking">
              <Button className="bg-[#B38E5D] hover:bg-[#8A9B68] text-white font-montserrat font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                Book Your Stay
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#5D4E6D]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F8F5F2] border-t border-[#D7C49E]/30">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-montserrat font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#5D4E6D] text-white'
                    : 'text-[#5D4E6D] hover:bg-[#5D4E6D]/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-2 bg-[#B38E5D] hover:bg-[#8A9B68] text-white font-montserrat font-medium py-3 rounded-full">
                Book Your Stay
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
