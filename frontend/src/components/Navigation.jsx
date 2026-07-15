// components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_apexweb.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Website Development', path: '/services/website-development', icon: '💻', description: 'Custom web applications & sites' },
    { name: 'SEO Services', path: '/services/seo', icon: '🔍', description: 'Boost your search rankings' },
    { name: 'Social Media Marketing', path: '/services/social-media-marketing', icon: '📱', description: 'Engage your audience' },
    { name: 'Google Business Profile', path: '/services/google-business-profile', icon: '📍', description: 'Optimize local presence' },
    { name: 'Performance Marketing', path: '/services/performance-marketing', icon: '📊', description: 'Data-driven campaigns' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design', icon: '🎨', description: 'Beautiful user experiences' },
    { name: 'Landing Page Design', path: '/services/landing-page-design', icon: '📄', description: 'High-converting pages' },
    { name: 'Website Maintenance', path: '/services/website-maintenance', icon: '🔧', description: '24/7 support & updates' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Budget Calculator', path: '/budget-calculator' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-lg bg-opacity-95' : 'bg-transparent'
      }`}
      style={{
        transform: 'translateY(0)',
        transition: 'all 0.6s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <img src={logo} alt="ApexWeb Solutions" className="h-18 w-auto" />
            <div className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#38BDF8' }} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.path} className="relative group/services">
                  <Link
                    to={link.path}
                    className="relative group text-sm font-medium transition-colors duration-300 flex items-center space-x-1"
                    style={{ color: '#0F172A' }}
                  >
                    <span>{link.name}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/services:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <div className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#38BDF8' }} />
                  </Link>

                  {/* Desktop Dropdown Menu - Hover based */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300">
                    <div className="w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden"
                      style={{
                        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(56, 189, 248, 0.1)'
                      }}
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service, index) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="group relative overflow-hidden rounded-xl p-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50"
                              style={{
                                animation: `fadeInUp 0.3s ease-out ${index * 0.03}s both`
                              }}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-sm" style={{ color: '#0F172A' }}>
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                              <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-200 rounded-xl transition-all duration-300" />
                            </Link>
                          ))}
                        </div>
                        
                        {/* View All Services Link */}
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <Link
                            to="/services"
                            className="flex items-center justify-between text-sm font-medium transition-all duration-300 hover:text-sky-500 group"
                            style={{ color: '#0F172A' }}
                          >
                            <span>View All Services</span>
                            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group text-sm font-medium transition-colors duration-300"
                  style={{ color: '#0F172A' }}
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#38BDF8' }} />
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link to="/contact" className="hidden md:block">
          <button
            className="hidden md:block px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 relative overflow-hidden group"
            style={{ backgroundColor: '#0F172A', color: 'white' }}
          >
            <span className="relative z-10">Book Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button></Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-100"
            style={{ color: '#0F172A' }}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'top-3 opacity-100'}`} />
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ borderColor: '#E2E8F0' }}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.path} className="space-y-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-sky-500 py-2"
                  style={{ color: '#0F172A' }}
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Services Dropdown */}
                <div
                  className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                    mobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 group"
                    >
                      <div className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium" style={{ color: '#0F172A' }}>
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {service.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  {/* View All Services Link for Mobile */}
                  <Link
                    to="/services"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="flex items-center justify-between p-3 text-sm font-medium transition-colors duration-300 hover:text-sky-500"
                    style={{ color: '#0F172A' }}
                  >
                    <span>View All Services</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium transition-colors hover:text-sky-500 py-2"
                style={{ color: '#0F172A' }}
              >
                {link.name}
              </Link>
            )
          ))}
          
          <button className="w-full mt-4 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg relative overflow-hidden group" style={{ backgroundColor: '#0F172A', color: 'white' }}>
            <span className="relative z-10">Book Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;