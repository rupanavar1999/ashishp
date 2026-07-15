// pages/services/GoogleBusinessProfile.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GoogleBusinessProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: '📈',
      title: 'Increase Visibility',
      description: 'Appear in local search results and Google Maps when customers search for your services'
    },
    {
      icon: '👥',
      title: 'Build Trust',
      description: 'Showcase reviews, ratings, and business information to build credibility'
    },
    {
      icon: '📱',
      title: 'Mobile Optimization',
      description: 'Reach customers on mobile devices with easy access to your business info'
    },
    {
      icon: '💬',
      title: 'Customer Engagement',
      description: 'Respond to reviews, answer questions, and post updates directly'
    },
    {
      icon: '📊',
      title: 'Insights & Analytics',
      description: 'Track how customers find your listing and what actions they take'
    },
    {
      icon: '⏰',
      title: '24/7 Presence',
      description: 'Your business information is always available to potential customers'
    }
  ];

  const features = [
    {
      title: 'Complete Profile Optimization',
      items: [
        'Business name, address, and phone number (NAP) optimization',
        'Category and attribute selection',
        'Business description optimization',
        'Hours of operation setup (including special hours)'
      ]
    },
    {
      title: 'Visual Content Enhancement',
      items: [
        'Professional photo upload and optimization',
        'Video content addition',
        'Logo and cover image setup',
        'Virtual tour integration (if applicable)'
      ]
    },
    {
      title: 'Review Management',
      items: [
        'Review response templates',
        'Automated review requests',
        'Negative review handling strategy',
        'Review analytics and tracking'
      ]
    },
    {
      title: 'Google Posts & Updates',
      items: [
        'Regular post creation (offers, events, products)',
        'Update scheduling',
        'Performance tracking',
        'Engagement optimization'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current Google presence and identify opportunities for improvement'
    },
    {
      step: '02',
      title: 'Profile Setup/Optimization',
      description: 'Complete optimization of your Google Business Profile with accurate information'
    },
    {
      step: '03',
      title: 'Verification',
      description: 'We help you verify your business with Google through their verification process'
    },
    {
      step: '04',
      title: 'Content Enhancement',
      description: 'Add high-quality photos, videos, and compelling business descriptions'
    },
    {
      step: '05',
      title: 'Review Strategy',
      description: 'Implement a system to collect and manage customer reviews effectively'
    },
    {
      step: '06',
      title: 'Ongoing Management',
      description: 'Continuous monitoring, updates, and optimization of your profile'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: 'one-time',
      features: [
        'Basic profile setup/optimization',
        'NAP consistency check',
        'Category optimization',
        'Basic photo upload (up to 10 photos)',
        'Business hours setup',
        'Verification assistance'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: 'one-time',
      features: [
        'Everything in Starter',
        'Advanced profile optimization',
        'Professional photo editing (up to 30 photos)',
        'Review management setup',
        'Google Posts strategy (1 month)',
        'Competitor analysis',
        'Q&A optimization'
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: '$199',
      period: '/month',
      features: [
        'Everything in Professional',
        'Monthly performance reporting',
        'Weekly Google Posts',
        'Review monitoring & response',
        'Ongoing optimization',
        'Local SEO recommendations',
        'Priority support',
        'Monthly strategy calls'
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: 'Is Google Business Profile free?',
      answer: 'Yes, Google Business Profile is completely free. However, our optimization and management services help you maximize its potential and stand out from competitors.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Most businesses see improvements in visibility within 2-4 weeks after optimization. Review collection and engagement may take 1-2 months to show significant results.'
    },
    {
      question: 'Do I need to verify my business?',
      answer: 'Yes, Google requires verification to ensure business authenticity. We guide you through the entire verification process, which typically takes 5-7 business days.'
    },
    {
      question: 'Can you help if my business has multiple locations?',
      answer: 'Absolutely! We specialize in multi-location Google Business Profile management and can help optimize all your locations for consistent branding and local visibility.'
    },
    {
      question: 'What information do I need to provide?',
      answer: 'You\'ll need your business name, address, phone number, website, category, business hours, and access to your Google account. We\'ll guide you through everything needed.'
    },
    {
      question: 'Do you guarantee first-page rankings?',
      answer: 'While we can\'t guarantee specific rankings, our proven strategies consistently improve local visibility. We focus on sustainable optimization that delivers real results.'
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-6">
                <span className="mr-2">📍</span>
                Google Business Profile Optimization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#0F172A' }}>
                Dominate Local Search with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  Google Business Profile
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get found by local customers, showcase your business, and stand out from competitors with a fully optimized Google Business Profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: '#0F172A', color: 'white' }}
                >
                  Get Started
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/budget-calculator"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 hover:shadow-lg"
                  style={{ borderColor: '#0F172A', color: '#0F172A' }}
                >
                  Calculate Your Budget
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full p-3 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl"></div>
                    <div>
                      <div className="font-bold">Your Business</div>
                      <div className="text-sm text-gray-500">★★★★★ (128 reviews)</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <span>📍</span>
                      <span>123 Business St, City</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span>📞</span>
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span>🌐</span>
                      <span>www.yourbusiness.com</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm font-semibold mb-2">Hours</div>
                    <div className="text-sm text-green-600">Open now</div>
                    <div className="text-xs text-gray-500">Mon-Fri: 9AM-6PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Why Optimize Your Google Business Profile?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of local search and connect with customers ready to buy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive Google Business Profile optimization services
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to optimizing your Google Business Profile
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-4xl font-bold text-sky-200 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.recommended ? 'border-2 border-sky-500' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold" style={{ color: '#0F172A' }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <svg className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      plan.recommended
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-lg'
                        : 'border-2 border-gray-300 hover:border-sky-500 hover:shadow-lg'
                    }`}
                    style={!plan.recommended ? { color: '#0F172A' } : {}}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our Google Business Profile services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#0F172A' }}>
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-lg text-white opacity-90 mb-8">
            Let's optimize your Google Business Profile and attract more local customers today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 bg-white"
              style={{ color: '#0F172A' }}
            >
              Get Started Now
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/budget-calculator"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2 border-white text-white"
            >
              Calculate Your Budget
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleBusinessProfile;