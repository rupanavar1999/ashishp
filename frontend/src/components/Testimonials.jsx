// components/Testimonials.jsx
import React, { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Luxury Estates',
      content: 'ApexWeb transformed our digital presence completely. Our organic traffic has tripled and we\'re getting more qualified leads than ever before.',
      rating: 5,
      avatar: '👩‍💼',
      company: 'Luxury Estates'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, TechStart',
      content: 'The team at ApexWeb is exceptional. Their strategic approach to SEO and web development has given us a significant competitive advantage.',
      rating: 5,
      avatar: '👨‍💻',
      company: 'TechStart'
    },
    {
      name: 'David Williams',
      role: 'Founder, FashionHub',
      content: 'Working with ApexWeb has been a game-changer for our business. Their expertise in digital marketing helped us scale 3x in just 6 months.',
      rating: 5,
      avatar: '👨‍🎨',
      company: 'FashionHub'
    },
    {
      name: 'Priya Sharma',
      role: 'Owner, Wellness Spa',
      content: 'The website they built for us is stunning! Our bookings have increased by 200% since launch. Highly recommended!',
      rating: 5,
      avatar: '🧘‍♀️',
      company: 'Wellness Spa'
    },
    {
      name: 'Rajesh Mehta',
      role: 'Director, Mehta Group',
      content: 'Professional, responsive, and results-driven. They understood our requirements perfectly and delivered beyond expectations.',
      rating: 5,
      avatar: '👨‍💼',
      company: 'Mehta Group'
    },
    {
      name: 'Anita Desai',
      role: 'Founder, Desai Creations',
      content: 'Best decision we made for our business. The SEO results have been phenomenal. Our organic traffic grew by 400%!',
      rating: 5,
      avatar: '👩‍🎨',
      company: 'Desai Creations'
    }
  ];

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

        {/* Testimonials Grid - Modern Card Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E2E8F0',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">"</div>
              
              <div className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="#38BDF8" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-600 leading-relaxed mb-5 line-clamp-4">
                  "{testimonial.content}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#E2E8F0' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: '#F8FAFC' }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0F172A' }}>{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { value: '500+', label: 'Happy Clients', icon: '😊' },
            { value: '4.9', label: 'Google Rating', icon: '🏆' },
            { value: '50+', label: '5-Star Reviews', icon: '🌟' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
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
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
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

export default Testimonials;