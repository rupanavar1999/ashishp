// components/ClientResults.jsx
import React, { useState, useEffect, useRef } from 'react';

const ClientResults = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { label: 'Organic Traffic Growth', target: 340, suffix: '%', icon: '📈', color: '#3B82F6', bgColor: '#EFF6FF' },
    { label: 'Leads Generated', target: 12500, suffix: '+', icon: '🎯', color: '#10B981', bgColor: '#ECFDF5' },
    { label: 'Projects Completed', target: 500, suffix: '+', icon: '✅', color: '#F59E0B', bgColor: '#FFFBEB' },
    { label: 'Client Satisfaction', target: 98, suffix: '%', icon: '⭐', color: '#8B5CF6', bgColor: '#F5F3FF' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHeaderVisible(true);
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

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const targets = stats.map(s => s.target);
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        const newCount = Math.min(count + increments[idx], targets[idx]);
        return Math.floor(newCount);
      });
      setCounts([...currentCounts]);

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  // WhatsApp redirect
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919890685066";
    const message = "Hello! I'm interested in learning more about your results and services. Could you please share more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} id="results-section" className="relative bg-white py-20 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-sky-50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
            OUR IMPACT
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#0F172A' }}>
            Results That <span className="font-bold">Speak</span>
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real numbers from real clients. We deliver measurable results that drive business growth.
          </p>
        </div>

        {/* Stats Grid - Modern Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E2E8F0',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Colored top bar */}
              <div className="h-1 w-full" style={{ backgroundColor: stat.color }} />
              
              <div className="p-6 text-center">
                {/* Icon with background */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: stat.bgColor }}>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                
                {/* Counter */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold" style={{ color: '#0F172A' }}>
                    {formatNumber(counts[index])}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold" style={{ color: stat.color }}>
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Label */}
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>
                  {stat.label}
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#E2E8F0' }}>
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      backgroundColor: stat.color,
                      width: headerVisible ? `${(counts[index] / stat.target) * 100}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="text-center p-8">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-gray-400 text-sm">Client Retention</div>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-gray-400 text-sm">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Client Growth Chart - Visual Representation */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light mb-2" style={{ color: '#0F172A' }}>
              Client Growth <span className="font-bold">Journey</span>
            </h3>
            <div className="w-16 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
          </div>
          
          <div className="relative h-64 bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
            <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-around px-4">
              {[
                { year: '2020', clients: 50, height: '20%' },
                { year: '2021', clients: 120, height: '40%' },
                { year: '2022', clients: 250, height: '65%' },
                { year: '2023', clients: 400, height: '85%' },
                { year: '2024', clients: 500, height: '100%' }
              ].map((item, idx) => (
                <div key={idx} className="text-center w-16">
                  <div className="relative h-40 flex items-end justify-center">
                    <div 
                      className="w-10 rounded-t-lg transition-all duration-1000 hover:w-12"
                      style={{ 
                        height: item.height, 
                        backgroundColor: '#38BDF8',
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'bottom',
                        transitionDelay: `${idx * 150}ms`
                      }}
                    />
                  </div>
                  <div className="mt-2 text-xs font-semibold" style={{ color: '#0F172A' }}>{item.year}</div>
                  <div className="text-xs text-gray-500">{item.clients}+</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">Client growth over the years</p>
        </div>

        {/* Testimonial Highlight */}
        {/* <div className="mb-16">
          <div className="rounded-2xl p-8 text-center relative overflow-hidden" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
            <div className="absolute top-4 right-4 text-6xl opacity-5">"</div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="#F59E0B" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic max-w-2xl mx-auto mb-4">
                "Working with ApexWeb has been transformative. Their data-driven approach delivered measurable results that exceeded our expectations."
              </p>
              <div className="font-semibold" style={{ color: '#0F172A' }}>— Rajesh Mehta</div>
              <div className="text-sm text-gray-500">Director, Mehta Group</div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#0F172A' }}>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-300 mb-4 max-w-md mx-auto">
              Let's discuss how we can help your business grow
            </p>
            <button
              onClick={handleWhatsAppRedirect}
              className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#075E54', color: 'white' }}
            >
              💬 Start Your Journey Today
            </button>
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
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\\:rotate-6 {
          transform: rotate(6deg);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .hover\\:w-12:hover {
          width: 3rem;
        }
      `}</style>
    </section>
  );
};

export default ClientResults;