// components/Footer.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_apexweb.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Observer for footer animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Back to top button visibility
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const footerLinks = {
    services: [
      { name: 'Website Development', path: '/services/website-development' },
      { name: 'SEO Services', path: '/services/seo' },
      { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
      { name: 'Google Business Profile', path: '/services/google-business-profile' },
      { name: 'Performance Marketing', path: '/services/performance-marketing' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      // { name: 'Portfolio', path: '/portfolio' },
      // { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Budget Calculator', path: '/budget-calculator' },
      { name: 'Free SEO Audit', path: '/' },
      { name: 'Marketing Guides', path: '/' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Privacy Policy', path: '/' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative border-t overflow-hidden" 
      style={{ backgroundColor: 'white', borderColor: '#E2E8F0' }}
    >
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #38BDF8 0%, #0F172A 100%)' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div 
            className="lg:col-span-1 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <Link to="/">
              <img src={Logo} alt="APEXWEB Logo" className="h-20 mb-3" />
            </Link>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4A5568' }}>
              Premium digital agency delivering exceptional results for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-navy"
                  style={{ backgroundColor: '#F8FAFC' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0F172A';
                    e.currentTarget.querySelector('span').style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.querySelector('span').style.color = '#4A5568';
                  }}
                >
                  <span className="text-sm transition-colors duration-300" style={{ color: '#4A5568' }}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div
            className="transition-all duration-700 delay-100"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: '#0F172A' }}>
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: '#4A5568' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div
            className="transition-all duration-700 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: '#0F172A' }}>
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: '#4A5568' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div
            className="transition-all duration-700 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: '#0F172A' }}>
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((resource, idx) => (
                <li key={idx}>
                  <Link
                    to={resource.path}
                    className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: '#4A5568' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div
            className="transition-all duration-700 delay-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: '#0F172A' }}>
              Contact
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm">📧</span>
                <a 
                  href="mailto:ashishwebmakesite@gmail.com"
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#4A5568' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
                >
                  ashishwebmakesite@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">📞</span>
                <a 
                  href="tel:+919890685066"
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#4A5568' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
                >
                  +91 98906 85066
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">📍</span>
                <span className="text-sm" style={{ color: '#4A5568' }}>
                  Navi Mumbai, India
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-4">
              <h5 className="text-sm font-bold mb-2" style={{ color: '#0F172A' }}>
                Subscribe to Newsletter
              </h5>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    borderColor: '#E2E8F0',
                    backgroundColor: 'white',
                    color: '#0F172A'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                />
                <button
                  className="px-3 py-2 text-sm rounded-lg font-medium transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95"
                  style={{ backgroundColor: '#0F172A', color: 'white' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 mt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 delay-500"
          style={{ 
            borderColor: '#E2E8F0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="text-sm" style={{ color: '#4A5568' }}>
            © {currentYear} ApexWeb Solutions. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <Link 
              to="/privacy-policy" 
              className="text-xs transition-colors duration-300"
              style={{ color: '#4A5568' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-xs transition-colors duration-300"
              style={{ color: '#4A5568' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-xs transition-colors duration-300"
              style={{ color: '#4A5568' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#38BDF8'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#4A5568'}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: '#0F172A', color: 'white' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#38BDF8'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;