// components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // WhatsApp redirect function
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919890685066";
    const message = "Hello! I'm interested in a free consultation for my business. Could you please share more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexWeb Solutions",
    "url": " ",
    "logo": " /logo.png",
    "description": "Premium digital agency offering web development, SEO, and digital marketing services.",
    "sameAs": [
      "https://linkedin.com/company/apexweb",
      "https://twitter.com/apexweb",
      "https://facebook.com/apexweb",
      "https://instagram.com/apexweb"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91- 98906-85066",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "India"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ApexWeb Solutions - Digital Agency",
    "description": "Premium digital agency providing web development, SEO services, and digital marketing solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panaji",
      "addressRegion": "Goa",
      "addressCountry": "IN"
    },
    "priceRange": "₹15,000 - ₹1,00,000",
    "telephone": "+91- 98906-85066"
  };

  return (
    <>
      <Helmet>
        <title>ApexWeb Solutions | #1 Digital Agency in India | Web Development, SEO, Marketing</title>
        <meta name="description" content="India's leading digital agency offering website development, SEO, and digital marketing. 500+ projects delivered. Free consultation available!" />
        <meta name="keywords" content="digital agency, web development company, website design services, SEO services, digital marketing agency, Google Ads services, social media marketing, WordPress development, Shopify development, UI UX design, ecommerce website development, local SEO services, performance marketing, lead generation, online marketing agency" />
        <meta property="og:title" content="ApexWeb Solutions - #1 Digital Agency in India" />
        <meta property="og:description" content="Building digital experiences that generate real business growth. Free consultation available!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ApexWeb Solutions - #1 Digital Agency" />
        <meta name="twitter:description" content="Get a free consultation and grow your business with our expert digital solutions." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <section className="py-30 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-sky-200/30 to-blue-200/30 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/30 to-pink-200/30 blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-100/20 blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230F172A' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-200/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-medium" style={{ color: '#0F172A' }}>⭐ INDIA'S TOP DIGITAL AGENCY 2024</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Building Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                 Experiences
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                That Generate Growth
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
              We help businesses scale with <span className="font-semibold text-sky-600">data-driven</span> web development, 
              <span className="font-semibold text-sky-600"> SEO</span>, and 
              <span className="font-semibold text-sky-600"> digital marketing</span> solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppRedirect}
                className="group relative px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden"
                style={{ backgroundColor: '#075E54', color: 'white' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button
                onClick={handleWhatsAppRedirect}
                className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 border-2"
                style={{ borderColor: '#0F172A', color: '#0F172A', backgroundColor: 'transparent' }}
              >
                View Our Portfolio
              </button>
            </div>

            {/* Trust Indicators - Modern Cards */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {[
                { value: '500+', label: 'Projects Delivered', icon: '✅' },
                { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { value: '50+', label: 'Expert Team', icon: '👥' },
                { value: '24/7', label: 'Support', icon: '🕒' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#0F172A' }}>{item.value}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Logos Section */}
            <div className="mt-10 pt-20 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-6">Trusted by 500+ Businesses Worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                {['🏢', '🏦', '🏨', '🛍️', '🏭', '📱'].map((logo, idx) => (
                  <div key={idx} className="text-2xl grayscale hover:grayscale-0 transition-all">{logo}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Modern Scroll Indicator */}
          <div className={`absolute bottom-8 p-15 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs tracking-wider text-gray-400">SCROLL TO EXPLORE</span>
              <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center">
                <div className="w-1 h-2 bg-sky-500 rounded-full mt-2 animate-scroll" />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(20px, -20px) scale(1.1);
            }
          }
          
          @keyframes float-delayed {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-20px, 20px) scale(1.1);
            }
          }
          
          @keyframes scroll {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(20px);
              opacity: 0;
            }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 10s ease-in-out infinite;
          }
          
          .animate-scroll {
            animation: scroll 2s ease-in-out infinite;
          }
          
          .group:hover .group-hover\\:translate-x-1 {
            transform: translateX(4px);
          }
          
          .hover\\:scale-105:hover {
            transform: scale(1.05);
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;