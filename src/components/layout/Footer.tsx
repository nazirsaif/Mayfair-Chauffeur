import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { coverageAreas } from '../../data/coverageAreas';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="text-2xl font-serif text-[#f5f5f5] tracking-wide block mb-4">
              Mayfair <span className="text-[#c9a769]">Executive</span>
            </Link>
            <p className="text-[#a3a3a3] text-sm mb-6 leading-relaxed">
              Premium executive chauffeur, private hire, and coach travel company based in the UK. Setting the standard for luxury transportation.
            </p>
            <div className="inline-block px-3 py-1 border border-[#c9a769]/30 rounded-full bg-[#c9a769]/10">
              <span className="text-xs font-medium text-[#c9a769]">24/7 Availability</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f5f5f5] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Fleet', 'Coaches', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-[#a3a3a3] hover:text-[#c9a769] transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/book" className="text-[#c9a769] font-medium hover:text-[#b59556] transition-colors text-sm">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-[#f5f5f5] font-semibold mb-4">Coverage Areas</h4>
            <ul className="grid grid-cols-2 gap-2">
              {coverageAreas.slice(0, 8).map((area) => (
                <li key={area} className="text-[#a3a3a3] text-sm flex items-center">
                  <span className="w-1 h-1 bg-[#c9a769] rounded-full mr-2"></span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#f5f5f5] font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+448001234567" className="flex items-start text-[#a3a3a3] hover:text-[#c9a769] transition-colors group">
                  <Phone className="w-5 h-5 mr-3 text-[#c9a769] group-hover:scale-110 transition-transform" />
                  <span className="text-sm mt-0.5">0800 123 4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@mayfairexecutivechauffeurs.com" className="flex items-start text-[#a3a3a3] hover:text-[#c9a769] transition-colors group">
                  <Mail className="w-5 h-5 mr-3 text-[#c9a769] group-hover:scale-110 transition-transform" />
                  <span className="text-sm mt-0.5">info@mayfairexecutivechauffeurs.com</span>
                </a>
              </li>
              <li className="flex items-start text-[#a3a3a3]">
                <MapPin className="w-5 h-5 mr-3 text-[#c9a769] flex-shrink-0" />
                <span className="text-sm mt-0.5">Mayfair, London, UK<br/>Nationwide Service</span>
              </li>
            </ul>
            
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-[#a3a3a3] hover:bg-[#c9a769] hover:text-black transition-colors font-bold text-xs">FB</a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-[#a3a3a3] hover:bg-[#c9a769] hover:text-black transition-colors font-bold text-xs">IG</a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-[#a3a3a3] hover:bg-[#c9a769] hover:text-black transition-colors font-bold text-xs">TW</a>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#666666] text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mayfair Executive Chauffeurs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-[#666666] hover:text-[#a3a3a3] text-xs transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-[#666666] hover:text-[#a3a3a3] text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
