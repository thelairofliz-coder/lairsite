import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Feather, Phone, Mail, MapPin, Heart, Instagram, Facebook } from 'lucide-react';
import { siteInfo } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#5D4E6D] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Moon className="w-8 h-8 text-[#D7C49E]" />
                <Feather className="w-4 h-4 text-[#B38E5D] absolute -bottom-1 -right-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-xl font-semibold text-white">
                  {siteInfo.name}
                </span>
                <span className="text-xs text-[#D7C49E] tracking-widest uppercase font-montserrat">
                  Sanctuary
                </span>
              </div>
            </Link>
            <p className="text-[#D7C49E] font-montserrat text-sm leading-relaxed mb-6">
              A 12-acre spiritual sanctuary where every soul is welcome. Create your own sacred gathering in the heart of Michigan's beautiful woodlands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B38E5D] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B38E5D] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6 text-[#D7C49E]">Explore</h3>
            <ul className="space-y-3 font-montserrat text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-[#B38E5D] transition-colors duration-300">About Us</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-[#B38E5D] transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-[#B38E5D] transition-colors duration-300">Pricing & Packages</Link></li>
              <li><Link to="/amenities" className="text-white/80 hover:text-[#B38E5D] transition-colors duration-300">Amenities & Vibes</Link></li>
              <li><Link to="/booking" className="text-white/80 hover:text-[#B38E5D] transition-colors duration-300">Book Your Stay</Link></li>
              <li><Link to="/reviews" className="text-white/80 hover:text-[#B38E5D] transition-colors duration-300">Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6 text-[#D7C49E]">Connect</h3>
            <ul className="space-y-4 font-montserrat text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B38E5D] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{siteInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#B38E5D] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{siteInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B38E5D] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{siteInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* All Are Welcome */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6 text-[#D7C49E]">All Are Welcome</h3>
            <p className="text-white/80 font-montserrat text-sm leading-relaxed mb-4">
              We proudly welcome all groups: family reunions, spiritual retreats, LGBTQ+ gatherings, wedding parties, RV clubs, and more.
            </p>
            <div className="flex items-center gap-2 text-[#B38E5D]">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-montserrat">We honor your journey</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 font-montserrat text-sm">
              © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
            </p>
            <p className="text-white/60 font-montserrat text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-[#B38E5D] fill-current" /> in Chase, Michigan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
