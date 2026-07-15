// pages/SocialMediaMarketingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SocialMediaMarketingPage = () => {
  const [activePlatform, setActivePlatform] = useState('instagram');
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    engagement: 0,
    followers: 0,
    satisfaction: 0,
    roi: 0
  });
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

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

  // Counter animation for stats
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => statsObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!statsInView) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const targets = [450, 250, 95, 12];
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        const newCount = Math.min(count + increments[idx], targets[idx]);
        return Math.floor(newCount);
      });
      setCounters({
        engagement: currentCounts[0],
        followers: currentCounts[1],
        satisfaction: currentCounts[2],
        roi: currentCounts[3]
      });

      if (currentStep >= steps) {
        setCounters({
          engagement: 450,
          followers: 250,
          satisfaction: 95,
          roi: 12
        });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [statsInView]);

  // WhatsApp redirect function
  const handleWhatsAppRedirect = (serviceName) => {
    const phoneNumber = "919890685066"; // Replace with your WhatsApp number
    const message = `Hello! I'm interested in your ${serviceName} services. Could you please share more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const socialStats = [
    { value: counters.engagement, suffix: '%', label: 'Average Engagement Rate', icon: '❤️', key: 'engagement' },
    { value: counters.followers, suffix: 'K+', label: 'Followers Generated', icon: '👥', key: 'followers' },
    { value: counters.satisfaction, suffix: '%', label: 'Client Satisfaction', icon: '⭐', key: 'satisfaction' },
    { value: counters.roi, suffix: 'x', label: 'Average ROI', icon: '📈', key: 'roi' }
  ];

  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram Marketing',
      icon: '📷',
      color: '#E4405F',
      description: 'Visual storytelling that builds brand identity and drives engagement.',
      features: [
        'Content Strategy & Planning',
        'High-Quality Visual Content',
        'Reels & Stories Optimization',
        'Hashtag Strategy',
        'Influencer Collaborations',
        'Instagram Shopping Setup',
        'Engagement Tracking',
        'Analytics & Reporting'
      ],
      results: ['300%+ Engagement Increase', '50K+ Monthly Reach', '25%+ Conversion Rate']
    },
    {
      id: 'facebook',
      name: 'Facebook Marketing',
      icon: '📘',
      color: '#1877F2',
      description: 'Build community and drive conversions through strategic Facebook campaigns.',
      features: [
        'Page Management & Optimization',
        'Content Calendar Creation',
        'Facebook Ads Management',
        'Community Engagement',
        'Event Promotion',
        'Group Management',
        'Retargeting Campaigns',
        'Performance Analytics'
      ],
      results: ['200%+ Lead Generation', '75K+ Page Followers', '40%+ Ad ROI']
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Marketing',
      icon: '🔗',
      color: '#0A66C2',
      description: 'B2B lead generation and professional brand building on LinkedIn.',
      features: [
        'Company Page Optimization',
        'Thought Leadership Content',
        'LinkedIn Ads Management',
        'Sales Navigator Integration',
        'Employee Advocacy',
        'Lead Generation Forms',
        'Industry Networking',
        'ROI Tracking'
      ],
      results: ['500+ Quality Leads/Month', '150%+ Connection Growth', '35%+ Conversion Rate']
    }
  ];

  const campaigns = [
    {
      platform: 'Instagram',
      brand: 'Luxury Fashion Brand',
      result: '2M+ Reach',
      engagement: '8.5% Engagement Rate',
      image: '👗'
    },
    {
      platform: 'Facebook',
      brand: 'Real Estate Agency',
      result: '500+ Qualified Leads',
      engagement: '12% Conversion Rate',
      image: '🏠'
    },
    {
      platform: 'LinkedIn',
      brand: 'SaaS Company',
      result: '₹2Cr+ Pipeline Value',
      engagement: '45% Open Rate',
      image: '💼'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter Social',
      price: '₹20,000',
      period: '/month',
      platforms: ['Instagram', 'Facebook'],
      features: [
        '10 Posts/Month',
        'Daily Engagement',
        'Monthly Strategy Report',
        'Basic Analytics',
        'Community Management',
        'Email Support'
      ],
      recommended: false
    },
    {
      name: 'Professional Social',
      price: '₹40,000',
      period: '/month',
      platforms: ['Instagram', 'Facebook', 'LinkedIn'],
      features: [
        '20 Posts/Month',
        'Daily Engagement + Ads',
        'Weekly Strategy Reports',
        'Advanced Analytics Dashboard',
        'Influencer Outreach',
        'Priority Support',
        'Content Creation'
      ],
      recommended: true
    },
    {
      name: 'Enterprise Social',
      price: '₹80,000',
      period: '/month',
      platforms: ['All Platforms'],
      features: [
        'Unlimited Posts',
        '24/7 Engagement + Ads',
        'Real-time Analytics',
        'Dedicated Account Manager',
        'Full-Service Content Studio',
        '24/7 Phone Support',
        'Custom Strategy',
        'API Integration'
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: 'How long until I see results from social media marketing?',
      answer: 'Most clients see initial engagement increases within 2-4 weeks, with significant business results (leads, sales) within 2-3 months of consistent strategy execution.'
    },
    {
      question: 'Do you create content or do we provide it?',
      answer: 'We offer full-service content creation including graphic design, copywriting, video editing, and photography. You can choose the level of involvement that works best for your team.'
    },
    {
      question: 'Which platforms should my business focus on?',
      answer: 'We analyze your target audience, industry, and goals to recommend the most effective platforms. We typically focus on 2-3 platforms for optimal results.'
    },
    {
      question: 'How do you measure social media ROI?',
      answer: 'We track engagement metrics, reach, leads generated, website traffic, and actual sales/conversions attributed to social media efforts through advanced tracking and analytics.'
    }
  ];

  // Schema markup for services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Social Media Marketing Services by ApexWeb Solutions",
    "description": "Comprehensive social media marketing services including Instagram, Facebook, and LinkedIn marketing.",
    "numberOfItems": platforms.length,
    "itemListElement": platforms.map((platform, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": platform.name,
      "description": platform.description,
      "url": `https://apexwebsitesolutions.netlify.app/services/social-media-marketing#${platform.id}`
    }))
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexWeb Solutions",
    "url": "https://apexwebsitesolutions.netlify.app",
    "logo": "https://apexwebsitesolutions.netlify.app/logo.png",
    "sameAs": [
      "https://linkedin.com/company/apexweb",
      "https://twitter.com/apexweb",
      "https://facebook.com/apexweb",
      "https://instagram.com/apexweb"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91- 98906-85066",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://apexwebsitesolutions.netlify.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://apexwebsitesolutions.netlify.app/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Social Media Marketing",
        "item": "https://apexwebsitesolutions.netlify.app/services/social-media-marketing"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Social Media Marketing Agency | Instagram, Facebook, LinkedIn Marketing | ApexWeb Solutions</title>
        <meta name="title" content="Social Media Marketing Agency | Grow Your Brand Online | ApexWeb Solutions" />
        <meta name="description" content="Top-rated social media marketing agency in India. Get Instagram, Facebook & LinkedIn marketing services. Increase engagement, followers & sales. Free social audit!" />
        <meta name="keywords" content="social media marketing, Instagram marketing, Facebook marketing, LinkedIn marketing, social media agency India, SMM services, social media management, content creation, social media strategy, brand building, engagement growth, follower growth, social media advertising" />
        <meta name="author" content="ApexWeb Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://apexwebsitesolutions.netlify.app/services/social-media-marketing" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apexwebsitesolutions.netlify.app/services/social-media-marketing" />
        <meta property="og:title" content="Social Media Marketing Agency | Grow Your Brand Online | ApexWeb Solutions" />
        <meta property="og:description" content="Boost your brand's social presence with our expert SMM services. Instagram, Facebook & LinkedIn marketing. 450% avg engagement increase. Get free audit today!" />
        <meta property="og:image" content="https://apexwebsitesolutions.netlify.app/og-social-media-marketing.jpg" />
        <meta property="og:site_name" content="ApexWeb Solutions" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://apexwebsitesolutions.netlify.app/services/social-media-marketing" />
        <meta name="twitter:title" content="Social Media Marketing Agency | ApexWeb Solutions" />
        <meta name="twitter:description" content="Expert social media marketing services. Grow your brand on Instagram, Facebook & LinkedIn. 95% client satisfaction. Book free consultation!" />
        <meta name="twitter:image" content="https://apexwebsitesolutions.netlify.app/twitter-social-media-marketing.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-GA" />
        <meta name="geo.placename" content="Panaji" />
        <meta name="geo.position" content="15.4989;73.8278" />
        <meta name="ICBM" content="15.4989, 73.8278" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24 overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#0F172A' }} />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 animate-pulse delay-1000" style={{ backgroundColor: '#0F172A' }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium tracking-wider" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                ⭐ INDIA'S TOP SMM AGENCY ⭐
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                Grow Your Brand
                <br />
                <span className="font-bold">Social Media Presence</span>
              </h1>
              
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
                Strategic social media marketing that builds meaningful connections, 
                drives engagement, and converts followers into loyal customers. 
                <span className="font-semibold text-sky-600"> 450% average engagement increase!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleWhatsAppRedirect('Social Media Marketing')}
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#075E54', color: 'white' }}
                >
                  Get Free Social Audit
                </button>
                <button
                  onClick={() => handleWhatsAppRedirect('Social Media Case Studies')}
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}
                >
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
                  {statsInView ? stat.value : 0}{stat.suffix}
                </div>
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Social Media Marketing Section - NEW for SEO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Why Your Business Needs <span className="text-sky-500">Social Media Marketing?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              4.9 billion people use social media worldwide. Don't miss out on potential customers!
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Brand Awareness', desc: 'Reach millions of potential customers', icon: '🎯' },
              { title: 'Customer Engagement', desc: 'Build lasting relationships', icon: '💬' },
              { title: 'Lead Generation', desc: 'Convert followers into customers', icon: '📊' },
              { title: 'Competitive Edge', desc: 'Stay ahead of competitors', icon: '🏆' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Platform-Specific <span className="font-bold">Strategies</span>
            </h2>
            <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>
              Tailored strategies for each social platform to maximize your brand's potential
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activePlatform === platform.id ? 'shadow-lg' : ''
                }`}
                style={{
                  backgroundColor: activePlatform === platform.id ? '#0F172A' : 'white',
                  color: activePlatform === platform.id ? 'white' : '#4A5568',
                  border: activePlatform === platform.id ? 'none' : '1px solid #E2E8F0'
                }}
              >
                <span className="mr-2">{platform.icon}</span>
                {platform.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {platforms.map((platform) => (
            activePlatform === platform.id && (
              <div key={platform.id} className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>{platform.name}</h3>
                  <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4A5568' }}>{platform.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}>
                          <svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#F8FAFC' }}>
                    <h4 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>Proven Results:</h4>
                    <div className="space-y-4 mb-8">
                      {platform.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#38BDF8' }} />
                          <span className="font-medium" style={{ color: '#0F172A' }}>{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-6" style={{ borderColor: '#E2E8F0' }}>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2" style={{ color: '#38BDF8' }}>98%</div>
                        <div className="text-sm" style={{ color: '#4A5568' }}>Client Retention Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </section>

        {/* Campaign Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Successful <span className="font-bold">Campaigns</span>
            </h2>
            <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
              >
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
                  <div className="text-7xl transform transition-transform duration-300 group-hover:scale-110">
                    {campaign.image}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                    {campaign.platform}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>{campaign.brand}</h3>
                  <p className="text-sm mb-2" style={{ color: '#4A5568' }}>📊 {campaign.result}</p>
                  <p className="text-sm" style={{ color: '#4A5568' }}>🎯 {campaign.engagement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Creation Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl" style={{ backgroundColor: '#0F172A' }}>
            <div className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Premium Content Creation
              </h2>
              <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
                Professional content that stops the scroll and drives engagement
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 mb-10">
                {[
                  { name: 'Graphic Design', icon: '🎨', description: 'Custom visuals & branding' },
                  { name: 'Video Production', icon: '🎥', description: 'Reels, stories & ads' },
                  { name: 'Copywriting', icon: '✍️', description: 'Compelling captions' },
                  { name: 'Photography', icon: '📸', description: 'Professional shots' }
                ].map((service, idx) => (
                  <div key={idx} className="text-center transition-all duration-300 hover:scale-105">
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <div className="text-white font-medium">{service.name}</div>
                    <div className="text-white/60 text-sm">{service.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Flexible <span className="font-bold">Pricing Plans</span>
            </h2>
            <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ backgroundColor: 'white', border: plan.recommended ? `2px solid #38BDF8` : '1px solid #E2E8F0' }}
              >
                {plan.recommended && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                    BEST VALUE
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{ color: '#0F172A' }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: '#4A5568' }}>{plan.period}</span>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm font-medium mb-2" style={{ color: '#4A5568' }}>Platforms:</div>
                    <div className="flex flex-wrap gap-2">
                      {plan.platforms.map((platform, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#F8FAFC', color: '#0F172A' }}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}>
                        <svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleWhatsAppRedirect(plan.name)}
                    className="w-full px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: plan.recommended ? '#075E54' : '#0F172A', color: 'white' }}
                  >
                    Get Started on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl p-6 cursor-pointer group hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#F8FAFC' }}
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-sky-600 transition-colors" style={{ color: '#0F172A' }}>{faq.question}</h3>
                <p className="leading-relaxed" style={{ color: '#4A5568' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="rounded-3xl p-12 text-center shadow-2xl transition-all duration-500 hover:scale-105" style={{ backgroundColor: '#0F172A' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Go Viral?
            </h2>
            <p className="text-xl mb-6 text-white/80">
              Get a free social media audit and discover your brand's potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppRedirect('Free Social Audit')}
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#075E54', color: 'white' }}
              >
                Get Free Social Audit
              </button>
              <button
                onClick={() => handleWhatsAppRedirect('Social Media Expert Consultation')}
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}
              >
                Talk to Social Expert
              </button>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
        .hover\\:shadow-3xl:hover { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
      `}</style>
    </HelmetProvider>
  );
};

export default SocialMediaMarketingPage;