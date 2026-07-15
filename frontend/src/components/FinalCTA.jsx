// components/FinalCTA.jsx
import React, { useEffect, useRef, useState } from 'react';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // WhatsApp redirect
  const handleWhatsAppRedirect = (type) => {
    const phoneNumber = "919890685066";
    const message = type === 'call' 
      ? "Hello! I'd like to book a strategy call to discuss my business goals. Could you please share available time slots?"
      : "Hello! I'm interested in your pricing plans. Could you please share more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className="relative flex items-center justify-center bg-white py-24 overflow-hidden"
    >
      {/* Modern Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full transition-all duration-1000"
          style={{ 
            background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(15,23,42,0.05) 100%)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)'
          }}
        />
        
        {/* Floating Particles */}
        <div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full transition-all duration-700 delay-200 animate-float"
          style={{ 
            background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)',
            opacity: isVisible ? 0.1 : 0
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-60 h-60 rounded-full transition-all duration-700 delay-400 animate-float-delayed"
          style={{ 
            background: 'radial-gradient(circle, #0F172A 0%, transparent 70%)',
            opacity: isVisible ? 0.08 : 0
          }}
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230F172A' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-500"
            style={{ 
              backgroundColor: '#E0F2FE', 
              color: '#0284C7'
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            LIMITED TIME OFFER
          </div>

          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Your Digital Presence?
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let's create something extraordinary together. 
            <span className="font-semibold text-sky-600"> Get a free strategy call</span> today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => handleWhatsAppRedirect('call')}
              className="group relative px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
              style={{ backgroundColor: '#075E54', color: 'white' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                💬 Book Strategy Call
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={() => handleWhatsAppRedirect('pricing')}
              className="group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0F172A';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#0F172A';
              }}
            >
              <span className="flex items-center gap-2">
                📊 View Pricing Plans
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust Indicators - Modern Cards */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: '🚀', label: 'No Upfront Payment', color: '#10B981' },
              { icon: '🎯', label: 'Free Consultation', color: '#3B82F6' },
              { icon: '📋', label: '30-Day Strategy', color: '#F59E0B' },
              { icon: '💬', label: '24/7 Support', color: '#8B5CF6' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 border border-gray-100">
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-medium" style={{ color: item.color }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Social Proof Section */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['👩‍💼', '👨‍💻', '👨‍🎨', '👩‍🎨'].map((avatar, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                      {avatar}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="#F59E0B" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">⭐ 98% Client Retention</span>
              </div>
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
            <span className="text-lg">✅</span>
            <span className="text-sm font-medium text-green-700">100% Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(4px);
        }
        
        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;