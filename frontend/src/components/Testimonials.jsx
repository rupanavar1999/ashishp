// pages/Testimonials.jsx
import React, { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const elfsightScript = document.querySelector('script[src*="elfsightcdn"]');
      if (elfsightScript) {
        elfsightScript.remove();
      }
    };
  }, []);

  // WhatsApp redirect
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919890685066";
    const message = "Hello! I'm interested in learning more about your services. Could you please share more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-10 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-sky-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#0F172A' }}>
            What Our <span className="font-bold">Clients Say</span>
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients.
          </p>
        </div>

        {/* Real Google Reviews - Elfsight Widget */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl">⭐</div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: '#0F172A' }}>Google Reviews</h3>
                <p className="text-sm text-gray-500">Real reviews from our clients</p>
              </div>
            </div>
            
            {/* Elfsight Google Reviews Widget */}
            <div className="elfsight-app-0d98876c-f80b-4fb2-88d3-c87bc9de83dc" data-elfsight-app-lazy></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4.9', label: 'Google Rating', icon: '⭐' },
            { value: '50+', label: '5-Star Reviews', icon: '🌟' },
            { value: '500+', label: 'Happy Clients', icon: '😊' },
            { value: '98%', label: 'Client Satisfaction', icon: '🏆' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Review Section */}
        <div className="mt-16">
          <div 
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🏆</div>
                <div>
                  <div className="text-white font-bold text-xl">Featured on Google Reviews</div>
                  <div className="text-gray-300 text-sm">Rated 4.9/5 based on 50+ reviews</div>
                </div>
              </div>
              <button
                onClick={handleWhatsAppRedirect}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}
              >
                Leave a Review →
              </button>
            </div>
          </div>
        </div>

        {/* Video Testimonial Section */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <div className="text-4xl mb-3">🎥</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>
              See What Our Clients Are Saying
            </h3>
            <p className="text-gray-500 mb-4 max-w-md mx-auto">
              Watch video testimonials from our satisfied clients
            </p>
            <button
              onClick={handleWhatsAppRedirect}
              className="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#0F172A', color: 'white' }}
            >
              Watch Video Testimonials →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .hover\\:-translate-y-1:hover {
          transform: translateY(-4px);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        /* Elfsight widget styling */
        .elfsight-app-0d98876c-f80b-4fb2-88d3-c87bc9de83dc {
          min-height: 400px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;