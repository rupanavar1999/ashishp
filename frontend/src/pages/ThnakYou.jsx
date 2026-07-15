// pages/ThankYou.jsx (Updated - No lucide-react dependency)
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { name, email } = location.state || { name: '', email: '' };

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 pt-32 pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card */}
        <div 
          className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-14 h-14 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#0F172A' }}>
              Thank You, {name || 'Valued Customer'}!
            </h1>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#38BDF8' }} />
            <p className="text-lg mt-4" style={{ color: '#4A5568' }}>
              Your message has been sent successfully.
            </p>
          </div>

          {/* Success Message */}
          <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: '#F8FAFC' }}>
            <p className="text-center" style={{ color: '#4A5568' }}>
              We appreciate you reaching out to <strong style={{ color: '#0F172A' }}>AW Solutions</strong>. 
              Our team will review your inquiry and get back to you within 24 hours.
            </p>
            {email && (
              <p className="text-center text-sm mt-2" style={{ color: '#94A3B8' }}>
                A confirmation email has been sent to <strong style={{ color: '#0F172A' }}>{email}</strong>
              </p>
            )}
          </div>

          {/* What Happens Next */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-center mb-6" style={{ color: '#0F172A' }}>
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: '✉️',
                  title: "Check Your Email",
                  description: "You'll receive a confirmation email with your message details"
                },
                {
                  icon: '📞',
                  title: "We'll Call You",
                  description: "Our team will contact you within 24 hours"
                },
                {
                  icon: '📅',
                  title: "Schedule Meeting",
                  description: "We'll schedule a consultation to discuss your project"
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: '#F8FAFC' }}
                >
                  <div className="text-3xl mb-2">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: '#0F172A' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs" style={{ color: '#4A5568' }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2"
              style={{ backgroundColor: '#0F172A', color: 'white' }}
            >
              <span>🏠</span>
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2"
              style={{ backgroundColor: '#38BDF8', color: 'white' }}
            >
              <span>💬</span>
              Send Another Message
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div 
          className={`mt-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: '#94A3B8' }}>
            <div className="flex items-center gap-2">
              <span style={{ color: '#38BDF8' }}>📞</span>
              <span>
                Call us:{' '}
                <a href="tel:+919890685066" className="font-medium hover:underline" style={{ color: '#38BDF8' }}>
                  +91 98906 85066
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#38BDF8' }}>✉️</span>
              <span>
                Email:{' '}
                <a href="mailto:ashishwebmakesite@gmail.com" className="font-medium hover:underline" style={{ color: '#38BDF8' }}>
                  ashishwebmakesite@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#38BDF8' }}>⏰</span>
              <span>Response time: 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Smooth transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default ThankYou;