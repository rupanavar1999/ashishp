// components/AgencyStory.jsx
import React, { useRef, useEffect, useState } from 'react';

const AgencyStory = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // WhatsApp redirect
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919890685066";
    const message = "Hello! I'm interested in learning more about ApexWeb Solutions. Could you please share more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={targetRef} className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-sky-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
            OUR PURPOSE
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#0F172A' }}>
            Mission & <span className="font-bold">Vision</span>
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Driving digital excellence with purpose and passion
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div 
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-500 to-blue-500" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E0F2FE' }}>
                  <span className="text-2xl">🎯</span>
                </div>
                <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                  OUR MISSION
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F172A' }}>
                Empowering Businesses Through Digital Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To provide cutting-edge digital solutions that help businesses grow, 
                scale, and succeed in the digital age. We are committed to delivering 
                measurable results through innovation, expertise, and unwavering dedication 
                to our clients' success.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>100% Client Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Result-Driven</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div 
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F3E8FF' }}>
                  <span className="text-2xl">👁️</span>
                </div>
                <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#8B5CF6', color: 'white' }}>
                  OUR VISION
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F172A' }}>
                To Be India's Most Trusted Digital Agency
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To become the leading digital agency in India, recognized for excellence, 
                innovation, and integrity. We envision a future where every business, 
                regardless of size, has access to world-class digital solutions that 
                drive sustainable growth.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Innovation First</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Global Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#0F172A' }}>
              Our Core <span className="font-bold">Values</span>
            </h3>
            <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💎', title: 'Excellence', desc: 'We strive for perfection in everything we do' },
              { icon: '🤝', title: 'Integrity', desc: 'Honest and transparent with our clients' },
              { icon: '🚀', title: 'Innovation', desc: 'Always learning and implementing new technologies' },
              { icon: '❤️', title: 'Client First', desc: 'Your success is our success' }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div className="text-4xl mb-3">{value.icon}</div>
                <div className="font-bold mb-2" style={{ color: '#0F172A' }}>{value.title}</div>
                <div className="text-sm text-gray-500">{value.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Projects Completed', icon: '✅' },
            { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { value: '50+', label: 'Expert Team', icon: '👥' },
            { value: '24/7', label: 'Support Available', icon: '🕒' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#07080a' }}>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
              {[
                { title: '10+ Years', desc: 'Of Industry Experience', icon: '📅' },
                { title: '500+ Projects', desc: 'Successfully Delivered', icon: '🚀' },
                { title: '50+ Experts', desc: 'Dedicated Professionals', icon: '👨‍💻' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-8">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div 
            className="rounded-2xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Let's discuss how we can help you achieve your business goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#075E54', color: 'white' }}
                >
                  💬 Chat on WhatsApp
                </button>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}
                >
                  📞 Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style>{`
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .hover\\:-translate-y-2:hover {
          transform: translateY(-8px);
        }
        
        .hover\\:-translate-y-1:hover {
          transform: translateY(-4px);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default AgencyStory;