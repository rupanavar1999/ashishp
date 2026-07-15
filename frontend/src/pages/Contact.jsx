// pages/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Kalamboli Navi Mumbai,', 'Sector 2E, Panvel Maharashtra, India'],
      link: null
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 98906 85066'],
      link: 'tel:+919890685066'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['ashishwebmakesite@gmail.com' ],
      link: 'mailto:ashishwebmakesite@gmail.com'
    },
    {
      icon: '🕒',
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      link: null
    }
  ];

  const services = [
    'Website Development',
    'SEO Services',
    'Social Media Marketing',
    'Google Business Profile',
    'Performance Marketing',
    'Website Maintenance',
    'Landing Page Design',
    'UI/UX Design'
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div ref={headerRef} className="text-center mb-16">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium tracking-wider" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
              GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4" style={{ color: '#0F172A' }}>
              Let's Start a <span className="font-bold">Conversation</span>
            </h1>
            <div 
              className="w-20 h-px mx-auto mb-6 transition-all duration-600" 
              style={{ 
                backgroundColor: '#38BDF8',
                width: isVisible ? '80px' : '0px'
              }} 
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>
              Have a project in mind? We'd love to hear about it. 
              Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#0F172A' }}>
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ 
                        borderColor: '#E2E8F0',
                        backgroundColor: '#F8FAFC',
                        color: '#0F172A'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ 
                        borderColor: '#E2E8F0',
                        backgroundColor: '#F8FAFC',
                        color: '#0F172A'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{ 
                        borderColor: '#E2E8F0',
                        backgroundColor: '#F8FAFC',
                        color: '#0F172A'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all appearance-none"
                      style={{ 
                        borderColor: '#E2E8F0',
                        backgroundColor: '#F8FAFC',
                        color: '#0F172A'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ 
                      borderColor: '#E2E8F0',
                      backgroundColor: '#F8FAFC',
                      color: '#0F172A'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#38BDF8'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#0F172A', color: 'white' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#E8F5E9', color: '#2E7D32' }}>
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>{info.title}</h3>
                      {info.details.map((detail, i) => (
                        info.link ? (
                          <a
                            key={i}
                            href={info.link}
                            className="block text-sm transition-colors duration-300 hover:text-sky-500"
                            style={{ color: '#4A5568' }}
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-sm" style={{ color: '#4A5568' }}>{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9272.5259153614!2d73.09838219478205!3d19.025231286026642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9ccd3da97ad%3A0xbbaa7f0f16c1cb30!2sAW%20Solutions%20%7C%20Web%20Developer%20%26%20SEO%20Specialist%20Navi%20Mumbai!5e1!3m2!1sen!2sin!4v1781514832599!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>


            {/* Social Links */}
            <div className="mt-8 text-center">
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: '#0F172A' }}>
                Connect With Us
              </h3>
              <div className="flex justify-center gap-4">
                {[
                  { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com' },
                  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
                  { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
                  { name: 'Instagram', icon: '📷', url: 'https://instagram.com' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
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
                    <span className="text-lg transition-colors duration-300" style={{ color: '#4A5568' }}>
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How quickly can you start on my project?",
                a: "We typically can start within 1-2 weeks after initial consultation and agreement. For urgent projects, we can discuss accelerated timelines."
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes! We offer various maintenance and support packages to ensure your website continues to perform optimally after launch."
              },
              {
                q: "What is your pricing structure?",
                a: "We offer fixed-price quotes for projects based on your specific requirements. We also offer monthly retainer packages for ongoing services."
              },
              {
                q: "Do you work with clients internationally?",
                a: "Absolutely! We work with clients worldwide. Our processes are designed for seamless remote collaboration regardless of location."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="group rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{ backgroundColor: '#F8FAFC' }}
              >
                <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-sky-600" style={{ color: '#0F172A' }}>
                  {faq.q}
                </h3>
                <p className="leading-relaxed" style={{ color: '#4A5568' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\\:text-sky-600 {
          color: #0284C7;
        }
        
        .hover\\:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .hover\\:-translate-y-2:hover {
          transform: translateY(-8px);
        }
        
        /* Smooth transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Contact;