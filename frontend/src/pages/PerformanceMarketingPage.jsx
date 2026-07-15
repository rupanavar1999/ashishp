// pages/PerformanceMarketingPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PerformanceMarketingPage = () => {
  const [activePlatform, setActivePlatform] = useState('google');
  const [isVisible, setIsVisible] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [counters, setCounters] = useState({ roi: 0, conversion: 0, roas: 0, efficiency: 0 });
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          heroObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);
    return () => heroObserver.disconnect();
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
    if (statsRef.current) statsObserver.observe(statsRef.current);
    return () => statsObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!statsInView) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const targets = [12, 85, 250, 99.9];
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        if (idx === 3) {
          // For decimal number (99.9)
          let newCount = count + increments[idx];
          return parseFloat(Math.min(newCount, targets[idx]).toFixed(1));
        } else {
          let newCount = Math.min(count + increments[idx], targets[idx]);
          return Math.floor(newCount);
        }
      });
      setCounters({ 
        roi: currentCounts[0], 
        conversion: currentCounts[1], 
        roas: currentCounts[2], 
        efficiency: currentCounts[3] 
      });

      if (currentStep >= steps) {
        setCounters({ roi: 12, conversion: 85, roas: 250, efficiency: 99.9 });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [statsInView]);

  // WhatsApp redirect
  const handleWhatsAppRedirect = (service) => {
    const phoneNumber = "919890685066";
    const message = `Hello! I'm interested in your ${service} services. Could you please share more details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const perfStats = [
    { value: statsInView ? counters.roi : 12, suffix: 'x', label: 'Average ROI', icon: '💰' },
    { value: statsInView ? counters.conversion : 85, suffix: '%', label: 'Conversion Rate Lift', icon: '📊' },
    { value: statsInView ? counters.roas : 250, suffix: '%', label: 'ROAS Increase', icon: '🎯' },
    { value: statsInView ? (counters.efficiency === 99.9 ? counters.efficiency.toFixed(1) : counters.efficiency) : 99.9, suffix: '%', label: 'Ad Spend Efficiency', icon: '⚡' }
  ];

  const platforms = [
    {
      id: 'google',
      name: 'Google Ads',
      icon: '🔵',
      color: '#4285F4',
      description: 'Capture intent-driven traffic with strategic Google Ads campaigns.',
      features: ['Search Ads', 'Display Advertising', 'Shopping Campaigns', 'YouTube Ads', 'Remarketing', 'Performance Max', 'App Campaigns', 'Smart Bidding'],
      results: ['3x ROAS Improvement', '65% Lower CPA', '200% Traffic Growth']
    },
    {
      id: 'meta',
      name: 'Meta Ads',
      icon: '📱',
      color: '#1877F2',
      description: 'Scale your business with precise targeting on Facebook & Instagram.',
      features: ['Feed Ads', 'Story Ads', 'Reels Ads', 'Carousel Ads', 'Collection Ads', 'Lead Generation', 'Dynamic Creative', 'Retargeting'],
      results: ['85% Lower CPL', '4x ROAS', '150% Scale Growth']
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Ads',
      icon: '🔗',
      color: '#0A66C2',
      description: 'Reach decision-makers and generate high-quality B2B leads.',
      features: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Lead Gen Forms', 'Account Targeting', 'Matched Audiences', 'Conversion Tracking', 'A/B Testing'],
      results: ['₹2Cr+ Pipeline', '45% Conversion Rate', '500+ Qualified Leads']
    }
  ];

  const campaigns = [
    { platform: 'Google Ads', client: 'E-commerce Fashion Brand', budget: '₹15L/month', result: '₹2.5Cr Revenue', roas: '4.5x', metrics: ['65% ROAS increase', '42% lower CPA', '2x conversion rate'] },
    { platform: 'Meta Ads', client: 'SaaS Startup', budget: '₹8L/month', result: '1500+ Demo Bookings', roas: '6x', metrics: ['3x lead volume', '55% lower CPL', '40% higher CTR'] },
    { platform: 'LinkedIn Ads', client: 'B2B Software Company', budget: '₹10L/month', result: '₹4Cr Pipeline', roas: '8x', metrics: ['1200+ leads', '25% demo conversion', '90% SQL rate'] }
  ];

  const pricingPlans = [
    { name: 'Starter Performance', price: '₹30,000', period: '/month', minBudget: '₹1L', features: ['Google + Meta Ads', 'Up to 3 Campaigns', 'Basic Targeting', 'Weekly Optimization', 'Monthly Reporting', 'Email Support'], recommended: false },
    { name: 'Professional Performance', price: '₹50,000', period: '/month', minBudget: '₹2L', features: ['All Platforms Available', 'Up to 10 Campaigns', 'Advanced Targeting', 'Daily Optimization', 'Real-time Dashboard', 'Priority Support', 'Creative Testing', 'A/B Testing'], recommended: true },
    { name: 'Enterprise Performance', price: '₹99,000', period: '/month', minBudget: '₹5L', features: ['Full-Service Management', 'Unlimited Campaigns', 'AI-Powered Bidding', 'Custom Attribution', 'Dedicated Account Director', '24/7 Phone Support', 'Cross-Platform Sync', 'API Integration'], recommended: false }
  ];

  const faqs = [
    { question: 'What is the minimum ad budget required?', answer: 'We typically recommend a minimum monthly ad spend of ₹1L to generate meaningful data and results. However, we customize based on your goals and industry.' },
    { question: 'How long until I see results?', answer: 'Initial results can be seen within 7-14 days. Significant optimization and scaling typically takes 30-60 days of consistent campaign management.' },
    { question: 'How do you measure success?', answer: 'We track key metrics like ROAS, CPA, CTR, conversion rates, and revenue generated. You get full transparency with real-time dashboards.' },
    { question: 'Can you manage our existing campaigns?', answer: 'Absolutely! We audit existing campaigns, identify optimization opportunities, and implement proven strategies to improve performance immediately.' }
  ];

  // Schema markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexWeb Solutions",
    "url": "https://apexwebsitesolutions.in/",
    "logo": "https://apexwebsitesolutions.in/logo.png",
    "sameAs": ["https://linkedin.com/company/apexweb", "https://twitter.com/apexweb", "https://facebook.com/apexweb"],
    "contactPoint": { "@type": "ContactPoint", "telephone": "+91- 98906-85066", "contactType": "customer service", "availableLanguage": ["English", "Hindi"] }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://apexwebsitesolutions.in/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://apexwebsitesolutions.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Performance Marketing", "item": "https://apexwebsitesolutions.in/services/performance-marketing" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Marketing Services",
    "description": "Professional performance marketing services including Google Ads, Meta Ads, and LinkedIn Ads management.",
    "provider": { "@type": "Organization", "name": "ApexWeb Solutions" },
    "areaServed": "India",
    "priceRange": "₹30,000 - ₹99,000"
  };

  // ROI Calculator state
  const [budget, setBudget] = useState(500000);
  const estimatedRevenue = budget * 4.5;

  return (
    <HelmetProvider>
     <Helmet>
  <title>Performance Marketing Services | Google Ads & Meta Ads Management | Apex Website Solutions</title>

  <meta
    name="description"
    content="Grow your business with performance marketing services from Apex Website Solutions. We manage Google Ads, Meta Ads, LinkedIn Ads, and PPC campaigns to generate quality leads and maximize your marketing ROI."
  />

  <meta
    name="keywords"
    content="performance marketing services, performance marketing agency, Google Ads management, Meta Ads management, Facebook Ads services, Instagram Ads services, LinkedIn Ads management, PPC management, paid advertising services, lead generation services, digital advertising agency"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://apexwebsitesolutions.in/services/performance-marketing"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Performance Marketing Services | Google Ads & Meta Ads | Apex Website Solutions"
  />

  <meta
    property="og:description"
    content="Professional performance marketing services including Google Ads, Meta Ads, LinkedIn Ads, and PPC campaign management to help businesses generate more leads."
  />

  <meta
    property="og:url"
    content="https://apexwebsitesolutions.in/services/performance-marketing"
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:site_name"
    content="Apex Website Solutions"
  />

  {/* Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Performance Marketing Services | Apex Website Solutions"
  />

  <meta
    name="twitter:description"
    content="Google Ads, Meta Ads, LinkedIn Ads, and PPC management services to grow your business and generate quality leads."
  />

  <script type="application/ld+json">
    {JSON.stringify(organizationSchema)}
  </script>

  <script type="application/ld+json">
    {JSON.stringify(breadcrumbSchema)}
  </script>

  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>

  <script type="application/ld+json">
    {JSON.stringify(serviceSchema)}
  </script>
</Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section ref={heroRef} className="text-center mb-16">
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                ⭐ PERFORMANCE MARKETING - STARTING ₹30,000 ⭐
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                Data-Driven Advertising
                <br />
                <span className="font-bold">That Delivers ROI</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
                Performance marketing strategies that maximize your ad spend, drive conversions, and deliver measurable business results. <span className="font-semibold text-sky-600">12x average ROI!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Performance Marketing')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free ROI Analysis</button>
                <button onClick={() => handleWhatsAppRedirect('Performance Case Studies')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}>View Case Studies</button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {perfStats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>{stat.value}{stat.suffix}</div>
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Why Performance Marketing Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Why <span className="text-sky-500">Performance Marketing?</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Pay only for results - the most cost-effective way to grow your business</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Pay for Results', desc: 'Only pay when someone clicks or converts', icon: '💰' },
                { title: 'Real-time Data', desc: 'Track every rupee spent', icon: '📊' },
                { title: 'Targeted Reach', desc: 'Reach your ideal customers', icon: '🎯' },
                { title: 'Scalable Growth', desc: 'Scale what works, stop what doesn\'t', icon: '📈' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROI Calculator */}
          <section className="mb-20">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#0F172A' }}>
              <div className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">ROI Calculator</h2>
                <p className="text-white/70 text-center mb-8">Estimate your potential returns with performance marketing</p>
                
                <div className="max-w-2xl mx-auto space-y-6">
                  <div>
                    <label className="text-white mb-2 block">Monthly Ad Budget: ₹{(budget / 100000).toFixed(1)}L</label>
                    <input 
                      type="range" 
                      min="50000" 
                      max="2000000" 
                      step="50000"
                      value={budget}
                      onChange={(e) => setBudget(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <div className="text-white/60 text-sm mb-1">Estimated Monthly Revenue</div>
                      <div className="text-2xl font-bold text-white">₹{(estimatedRevenue / 100000).toFixed(1)}L</div>
                    </div>
                    <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <div className="text-white/60 text-sm mb-1">Projected ROAS</div>
                      <div className="text-2xl font-bold text-white">4.5x</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Tabs */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Multi-Platform <span className="font-bold">Expertise</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>We optimize campaigns across all major advertising platforms</p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {platforms.map((platform) => (
                <button key={platform.id} onClick={() => setActivePlatform(platform.id)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activePlatform === platform.id ? 'shadow-lg' : ''}`} style={{ backgroundColor: activePlatform === platform.id ? '#0F172A' : 'white', color: activePlatform === platform.id ? 'white' : '#4A5568', border: activePlatform === platform.id ? 'none' : '1px solid #E2E8F0' }}>
                  <span className="mr-2">{platform.icon}</span>{platform.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {platforms.map((platform) => (activePlatform === platform.id && (
              <div key={platform.id} className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>{platform.name}</h3>
                  <p className="text-lg mb-6 leading-relaxed" style={{ color: '#4A5568' }}>{platform.description}</p>
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>Campaign Types:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {platform.features.map((feature, idx) => (<li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}><svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{feature}</li>))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#F8FAFC' }}>
                    <h4 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>Proven Results:</h4>
                    <div className="space-y-4 mb-8">
                      {platform.results.map((result, idx) => (<div key={idx} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#38BDF8' }} /><span className="font-medium" style={{ color: '#0F172A' }}>{result}</span></div>))}
                    </div>
                    <div className="border-t pt-6" style={{ borderColor: '#E2E8F0' }}>
                      <div className="text-center"><div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-3" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>Managed ₹50Cr+ Ad Spend</div><div className="text-sm" style={{ color: '#4A5568' }}>Across 1000+ Successful Campaigns</div></div>
                    </div>
                  </div>
                </div>
              </div>
            )))}
          </section>

          {/* Campaign Showcase */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Performance <span className="font-bold">Showcase</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {campaigns.map((campaign, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>{campaign.platform}</div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>{campaign.client}</h3>
                    <div className="mb-4"><div className="text-sm" style={{ color: '#4A5568' }}>Budget: {campaign.budget}</div><div className="text-2xl font-bold mt-2" style={{ color: '#38BDF8' }}>{campaign.result}</div><div className="text-sm font-medium" style={{ color: '#0F172A' }}>ROAS: {campaign.roas}</div></div>
                    <div className="space-y-1">{campaign.metrics.map((metric, idx) => (<div key={idx} className="text-xs flex items-center gap-2" style={{ color: '#4A5568' }}><svg className="w-3 h-3" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{metric}</div>))}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Performance <span className="font-bold">Pricing</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>Affordable management fees starting at just ₹30,000/month</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`rounded-2xl overflow-hidden shadow-lg relative transition-all hover:-translate-y-2 ${plan.recommended ? 'border-2' : 'border'}`} style={{ backgroundColor: 'white', borderColor: plan.recommended ? '#38BDF8' : '#E2E8F0' }}>
                  {plan.recommended && <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>BEST VALUE</div>}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{plan.name}</h3>
                    <div className="mb-2"><span className="text-3xl font-bold" style={{ color: '#38BDF8' }}>{plan.price}</span><span className="text-sm" style={{ color: '#4A5568' }}>{plan.period}</span></div>
                    <div className="mb-6"><span className="text-sm" style={{ color: '#38BDF8' }}>Min Ad Spend: {plan.minBudget}</span></div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (<li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}><svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{feature}</li>))}
                    </ul>
                    <button onClick={() => handleWhatsAppRedirect(plan.name)} className="w-full px-6 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: plan.recommended ? '#075E54' : '#0F172A', color: 'white' }}>💬 Get Started</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Frequently Asked <span className="font-bold">Questions</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl p-6 hover:shadow-lg transition-all" style={{ backgroundColor: '#F8FAFC' }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>{faq.question}</h3>
                  <p className="leading-relaxed" style={{ color: '#4A5568' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="rounded-3xl p-12 shadow-2xl transition-all hover:scale-105" style={{ backgroundColor: '#0F172A' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Scale Your Advertising?</h2>
              <p className="text-xl mb-6 text-white/80">Get a free ROI analysis and discover your growth potential</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Free ROI Analysis')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free ROI Analysis</button>
                <button onClick={() => handleWhatsAppRedirect('Performance Expert Consultation')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}>Talk to Performance Expert</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PerformanceMarketingPage;