// components/ServicesOverview.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
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

  const services = [
    { 
      name: 'Website Development', 
      path: '/services/website-development', 
      icon: '💻', 
      description: 'Custom websites that convert visitors into customers',
      features: ['React/Next.js', 'Node.js/PHP', 'E-commerce', 'CMS'],
      color: '#3B82F6'
    },
    { 
      name: 'SEO Services', 
      path: '/services/seo', 
      icon: '📈', 
      description: 'Dominate search rankings and drive organic traffic',
      features: ['Technical SEO', 'Local SEO', 'Link Building', 'Analytics'],
      color: '#10B981'
    },
    { 
      name: 'Social Media Marketing', 
      path: '/services/social-media-marketing', 
      icon: '📱', 
      description: 'Build brand awareness and engage your audience',
      features: ['Content Strategy', 'Paid Ads', 'Community Management', 'Analytics'],
      color: '#E4405F'
    },
    { 
      name: 'Google Business Profile', 
      path: '/services/google-business-profile', 
      icon: '📍', 
      description: 'Optimize your local presence on Google',
      features: ['Profile Setup', 'Review Management', 'Local Ranking', 'Insights'],
      color: '#4285F4'
    },
    { 
      name: 'Performance Marketing', 
      path: '/services/performance-marketing', 
      icon: '🎯', 
      description: 'Data-driven ads that deliver measurable ROI',
      features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Retargeting'],
      color: '#8B5CF6'
    },
    { 
      name: 'Website Maintenance', 
      path: '/services/website-maintenance', 
      icon: '🔧', 
      description: 'Keep your website secure and up-to-date',
      features: ['Security', 'Backups', 'Updates', '24/7 Support'],
      color: '#F59E0B'
    },
    { 
      name: 'Landing Page Design', 
      path: '/services/landing-page-design', 
      icon: '📄', 
      description: 'High-converting pages for your campaigns',
      features: ['A/B Testing', 'Mobile Optimized', 'Fast Loading', 'Analytics'],
      color: '#EC4899'
    },
    { 
      name: 'UI/UX Design', 
      path: '/services/ui-ux-design', 
      icon: '🎨', 
      description: 'Beautiful, intuitive interfaces that users love',
      features: ['Figma', 'Prototyping', 'User Testing', 'Design System'],
      color: '#06B6D4'
    }
  ];

  // WhatsApp redirect
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919890685066";
    const message = "Hello! I'm interested in learning more about your services. Could you please share more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
            WHAT WE OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#0F172A' }}>
            Our <span className="font-bold">Services</span>
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid - Modern Card Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <div
                className="group relative h-full rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E2E8F0',
                }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full transition-all duration-300 group-hover:h-1.5" style={{ backgroundColor: service.color }} />
                
                <div className="p-6">
                  {/* Icon with gradient background */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-sky-600 transition-colors" style={{ color: '#0F172A' }}>
                    {service.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm mb-4" style={{ color: '#4A5568' }}>
                    {service.description}
                  </p>
                  
                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: '#F8FAFC', color: '#4A5568' }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 group/link">
                    <span className="text-sm font-medium transition-all duration-300 group-hover/link:mr-1" style={{ color: '#38BDF8' }}>
                      Learn More
                    </span>
                    <svg 
                      className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1" 
                      style={{ color: '#38BDF8' }} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: '🚀', 
              title: 'Fast Delivery', 
              description: 'Get your project delivered on time, every time',
              stat: '7-14 days'
            },
            { 
              icon: '💎', 
              title: 'Premium Quality', 
              description: 'High-quality code and design standards',
              stat: '98% satisfaction'
            },
            { 
              icon: '🛡️', 
              title: 'Ongoing Support', 
              description: 'Dedicated support after project completion',
              stat: '24/7 available'
            }
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="text-sm font-semibold text-sky-600">{item.stat}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div 
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-300 mb-4 max-w-md mx-auto">
                Let's discuss your project requirements and get a free consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#075E54', color: 'white' }}
                >
                  💬 Chat on WhatsApp
                </button>
                <Link to="/budget-calculator">
                  <button
                    className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}
                  >
                    Calculate Budget →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
        
        .group:hover .group-hover\\:text-sky-600 {
          color: #0284C7;
        }
        
        .group/link:hover .group-hover/link\\:translate-x-1 {
          transform: translateX(4px);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ServicesOverview;