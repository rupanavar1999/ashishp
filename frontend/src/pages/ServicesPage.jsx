import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardTilts, setCardTilts] = useState({});
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Subtle card tilt effect on scroll
  useEffect(() => {
    const handleTilt = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          const distanceFromCenter = (rect.top + rect.height / 2) - (windowHeight / 2);
          const maxDistance = windowHeight / 2;
          
          let tiltY = (distanceFromCenter / maxDistance) * 2;
          tiltY = Math.max(-2, Math.min(2, tiltY));
          
          const scale = 1 - Math.abs(distanceFromCenter / maxDistance) * 0.01;
          
          setCardTilts(prev => ({
            ...prev,
            [index]: { tiltY, scale }
          }));
        }
      });
    };

    window.addEventListener('scroll', handleTilt);
    handleTilt();
    
    return () => window.removeEventListener('scroll', handleTilt);
  }, []);

  const services = [
    {
      id: 'website-development',
      name: 'Website Development',
      icon: '💻',
      price: '₹1,50,000+',
      description: 'Custom websites that convert visitors into customers. Built with modern technologies and responsive design.',
      features: [
        'Custom Design & Development',
        'Responsive Mobile-First Approach',
        'SEO Optimized Architecture',
        'Fast Loading Performance',
        'Secure & Scalable Solutions',
        'CMS Integration'
      ],
      popular: true,
      rankingKeywords: 'website development services, custom web design'
    },
    {
      id: 'seo',
      name: 'SEO Services',
      icon: '📈',
      price: '₹25,000/month',
      description: 'Dominate search rankings with data-driven SEO strategies that deliver sustainable organic growth.',
      features: [
        'Technical SEO Audit',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Link Building Campaigns',
        'Local SEO Optimization',
        'Monthly Performance Reports'
      ],
      popular: false,
      rankingKeywords: 'SEO services, search engine optimization, rank higher on Google'
    },
    {
      id: 'social-media-marketing',
      name: 'Social Media Marketing',
      icon: '📱',
      price: '₹30,000/month',
      description: 'Build meaningful connections with your audience through strategic social media campaigns.',
      features: [
        'Content Strategy & Creation',
        'Community Management',
        'Paid Social Campaigns',
        'Influencer Collaborations',
        'Analytics & Insights',
        'Competitor Analysis'
      ],
      popular: false,
      rankingKeywords: 'social media marketing, SMM services'
    },
    {
      id: 'google-business-profile',
      name: 'Google Business Profile',
      icon: '📍',
      price: '₹15,000/month',
      description: 'Optimize your local presence and attract more customers with comprehensive GMB management.',
      features: [
        'Profile Optimization',
        'Review Management',
        'Post Scheduling',
        'Insights & Analytics',
        'Local Ranking Improvement',
        'Q&A Management'
      ],
      popular: false,
      rankingKeywords: 'Google Business Profile optimization, GMB services, local SEO'
    },
    {
      id: 'performance-marketing',
      name: 'Performance Marketing',
      icon: '🎯',
      price: '₹50,000/month',
      description: 'Data-driven advertising campaigns that deliver measurable ROI and drive targeted traffic.',
      features: [
        'Google Ads Management',
        'Social Media Advertising',
        'Remarketing Campaigns',
        'Conversion Optimization',
        'A/B Testing',
        'ROI Tracking & Reporting'
      ],
      popular: true,
      rankingKeywords: 'performance marketing, PPC management, Google Ads'
    },
    {
      id: 'website-maintenance',
      name: 'Website Maintenance',
      icon: '🔧',
      price: '₹20,000/month',
      description: 'Keep your website secure, updated, and performing at its best with comprehensive maintenance.',
      features: [
        'Security Monitoring',
        'Regular Backups',
        'Plugin/Theme Updates',
        'Performance Optimization',
        'Bug Fixes',
        '24/7 Support'
      ],
      popular: false,
      rankingKeywords: 'website maintenance services, site security'
    },
    {
      id: 'landing-page-design',
      name: 'Landing Page Design',
      icon: '📄',
      price: '₹40,000+',
      description: 'High-converting landing pages designed to capture leads and drive specific campaign goals.',
      features: [
        'Conversion-Focused Design',
        'A/B Testing Setup',
        'Fast Loading Speed',
        'Mobile Optimized',
        'Analytics Integration',
        'Form Optimization'
      ],
      popular: false,
      rankingKeywords: 'landing page design, conversion rate optimization'
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      icon: '🎨',
      price: '₹75,000+',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design System',
        'Interactive Prototypes',
        'Usability Testing',
        'Design Handoff'
      ],
      popular: false,
      rankingKeywords: 'UI/UX design services, user experience design'
    }
  ];

  // Schema markup for services
  // Schema markup for services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://apexwebsitesolutions.in/services#serviceslist",
    "name": "Digital Services Offered by ApexWeb Solutions",
    "description": "Comprehensive digital services including website development, SEO, social media marketing, and more.",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.name,
      "description": service.description,
      "url": `https://apexwebsitesolutions.in/services/${service.id}`,
      "offers": {
        "@type": "Offer",
        "price": service.price.replace(/[^0-9]/g, ''),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://apexwebsitesolutions.in/#organization",
    "name": "ApexWeb Solutions",
    "url": "https://apexwebsitesolutions.in/",
    "logo": "https://apexwebsitesolutions.in/logo.png",
    "sameAs": [
      "https://linkedin.com/company/apexweb",
      "https://twitter.com/apexweb",
      "https://facebook.com/apexweb"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98906-85066",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://apexwebsitesolutions.in/services#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://apexwebsitesolutions.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://apexwebsitesolutions.in/services"
      }
    ]
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://apexwebsitesolutions.in/services#webpage",
    "url": "https://apexwebsitesolutions.in/services",
    "name": "Digital Marketing & Website Development Services | ApexWeb Solutions",
    "description": "Explore professional website development, SEO services, social media marketing, and performance marketing from ApexWeb Solutions.",
    "isPartOf": {
      "@id": "https://apexwebsitesolutions.in/#website"
    },
    "breadcrumb": {
      "@id": "https://apexwebsitesolutions.in/services#breadcrumb"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Digital Marketing & Website Development Services | ApexWeb Solutions</title>
        <meta name="title" content="Digital Marketing & Website Development Services | ApexWeb Solutions" />
        <meta
          name="description"
          content="Explore professional website development, SEO services, social media marketing, Google Business Profile optimization, performance marketing, UI/UX design, landing page design, and website maintenance services from ApexWeb Solutions."
        />
        <meta
          name="keywords"
          content="website development services, SEO services, digital marketing services, social media marketing services, Google Business Profile optimization, performance marketing services, UI UX design, landing page design, WordPress development, ecommerce website development, website maintenance, local SEO services"
        />
        <meta name="author" content="ApexWeb Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical */}
        <link rel="canonical" href="https://apexwebsitesolutions.in/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apexwebsitesolutions.in/services" />
        <meta property="og:title" content="Digital Marketing & Website Development Services | ApexWeb Solutions" />
        <meta
          property="og:description"
          content="Professional website development, SEO, Google Ads, social media marketing, Google Business Profile optimization, UI/UX design, and performance marketing services."
        />
        <meta property="og:image" content="https://apexwebsitesolutions.in/og-image.jpg" />
        <meta property="og:site_name" content="ApexWeb Solutions" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://apexwebsitesolutions.in/services" />
        <meta name="twitter:title" content="Digital Marketing & Website Development Services | ApexWeb Solutions" />
        <meta
          name="twitter:description"
          content="Professional website development, SEO, social media marketing, Google Business Profile optimization, and performance marketing services."
        />
        <meta name="twitter:image" content="https://apexwebsitesolutions.in/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(collectionPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24 overflow-hidden">
        {/* Hero Section */}
        <div ref={heroRef} className="relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#0F172A' }} />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-5 animate-pulse delay-1000" style={{ backgroundColor: '#0F172A' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium tracking-wider animate-fade-in" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                ⭐ INDIA'S TOP DIGITAL AGENCY ⭐
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 animate-slide-up" style={{ color: '#0F172A' }}>
                Get Your Business
                <br />
                <span className="font-bold">Ranked on Google's #1 Page</span>
              </h1>
              
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed" style={{ color: '#4A5568' }}>
                From strategy to execution, we provide end-to-end digital services that drive real business growth, 
                increase website traffic, and boost your search engine rankings.
              </p>
            </div>
          </div>
        </div>

        {/* Ranking Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Websites Ranked', icon: '📊' },
              { value: '50K+', label: 'Keywords Ranked', icon: '🎯' },
              { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { value: '4.9', label: 'Google Rating', icon: '🏆' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Ranking Benefits */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Why Your Business Needs <span className="text-sky-500">Top Rankings?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              75% of users never scroll past the first page of Google. Don't let your business get left behind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'More Traffic', desc: 'Rank #1 on Google and get 30%+ more organic traffic', icon: '🚀' },
              { title: 'Higher Conversions', desc: 'First-page results have 8x higher click-through rates', icon: '💰' },
              { title: 'Brand Authority', desc: 'Top rankings build trust and credibility with customers', icon: '🏆' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Our Premium <span className="text-sky-500">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of digital services designed to boost your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const tilt = cardTilts[index] || { tiltY: 0, scale: 1 };
              const rotateDirection = index % 2 === 0 ? 1 : -1;
              
              return (
                <div
                  key={service.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl"
                  style={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E2E8F0',
                    transform: `perspective(800px) rotateX(${tilt.tiltY * 0.3}deg) rotateY(${rotateDirection * tilt.tiltY}deg) scale(${tilt.scale})`,
                    transition: 'transform 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1), box-shadow 0.3s ease',
                    transformStyle: 'preserve-3d',
                    opacity: isVisible ? 1 : 0,
                    transformOrigin: 'center center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 40px -12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `perspective(800px) rotateX(${tilt.tiltY * 0.3}deg) rotateY(${rotateDirection * tilt.tiltY}deg) scale(${tilt.scale})`;
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1 rounded-full text-xs font-bold animate-pulse" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundColor: '#0F172A' }} />

                  <div className="p-8 relative z-10">
                    <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-sky-800" style={{ color: '#0F172A' }}>
                      {service.name}
                    </h3>

                    <div className="text-xl font-bold mb-4 transition-all duration-300 group-hover:scale-105" style={{ color: '#38BDF8' }}>
                      {service.price}
                    </div>

                    <p className="mb-6 leading-relaxed text-sm" style={{ color: '#4A5568' }}>
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1" style={{ color: '#4A5568' }}>
                          <svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={`/services/${service.id}`}>
                      <button
                        className="w-full px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                        style={{ backgroundColor: '#0F172A', color: 'white' }}
                      >
                        Learn More →
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl" style={{ backgroundColor: '#0F172A' }}>
            <div className="p-12 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                  Why Choose <span className="font-bold">ApexWeb?</span>
                </h2>
                <div className="w-20 h-px mx-auto animate-expand" style={{ backgroundColor: '#38BDF8' }} />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: '01', title: 'Strategic SEO Approach', description: 'Data-driven strategies that actually rank your website on Google\'s first page.' },
                  { number: '02', title: 'Proven Results', description: '500+ websites ranked, 50K+ keywords optimized, and 98% client satisfaction.' },
                  { number: '03', title: 'Premium Support', description: '24/7 dedicated account managers to ensure your digital success.' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                    <div className="text-5xl font-bold mb-4 transition-all duration-300 hover:scale-110" style={{ color: '#38BDF8' }}>{item.number}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ranking Guarantee Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <div className="rounded-2xl p-8 shadow-xl transition-all duration-500 hover:scale-105" style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #0F172A 100%)' }}>
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-2xl font-bold mb-2 text-white">First Page Ranking Guarantee</h3>
            <p className="text-white/90 mb-4">
              We don't just promise results. We deliver them. Get a free SEO audit and discover how we can rank your business on Google's first page.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/919890685066?text=Hi! I want a free SEO audit for my website', '_blank')}
              className="px-6 py-2 rounded-full bg-white text-navy font-semibold hover:scale-105 transition-all"
            >
              Get Free SEO Audit →
            </button>
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <div className="rounded-2xl p-12 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2" style={{ border: '1px solid #E2E8F0', backgroundColor: 'white' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Need a Custom Package?
            </h3>
            <p className="text-lg mb-8" style={{ color: '#4A5568' }}>
              Let's create a tailored solution that perfectly fits your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/budget-calculator">
                <button className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95" style={{ backgroundColor: '#0F172A', color: 'white' }}>
                  Calculate Budget
                </button>
              </Link>
              <button 
                onClick={() => window.open('https://wa.me/919890685066?text=Hi! I want to book a free consultation for my business', '_blank')}
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95" 
                style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 80px; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .animate-fade-in { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up-delayed { animation: slideUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-expand { animation: expandWidth 0.8s ease-out 0.6s forwards; width: 0; }
        .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
        .group:hover .group-hover\\:rotate-6 { transform: rotate(6deg); }
        .group:hover .group-hover\\:translate-x-1 { transform: translateX(4px); }
        .hover\\:shadow-3xl:hover { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
      `}</style>
    </>
  );
};

export default ServicesPage;