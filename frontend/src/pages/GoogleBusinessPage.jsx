import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GoogleBusinessPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [counters, setCounters] = useState({ visibility: 0, searches: 0, visits: 0, satisfaction: 0 });
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

    const targets = [7, 70, 50, 98];
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        if (idx === 0) {
          let newCount = Math.min(count + increments[idx], targets[idx]);
          return parseFloat(newCount.toFixed(1));
        } else {
          let newCount = Math.min(count + increments[idx], targets[idx]);
          return Math.floor(newCount);
        }
      });
      setCounters({ 
        visibility: currentCounts[0], 
        searches: currentCounts[1], 
        visits: currentCounts[2], 
        satisfaction: currentCounts[3] 
      });

      if (currentStep >= steps) {
        setCounters({ visibility: 7, searches: 70, visits: 50, satisfaction: 98 });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [statsInView]);

  // WhatsApp redirect
  const handleWhatsAppRedirect = (service) => {
    const phoneNumber = "919876543210";
    const message = `Hello! I'm interested in your ${service} services. Could you please share more details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const gmbStats = [
    { value: statsInView ? counters.visibility : 7, suffix: 'x', label: 'More Visibility', icon: '👁️' },
    { value: statsInView ? counters.searches : 70, suffix: '%', label: 'More Local Searches', icon: '📍' },
    { value: statsInView ? counters.visits : 50, suffix: '%', label: 'More Website Visits', icon: '🌐' },
    { value: statsInView ? counters.satisfaction : 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const optimizationServices = [
    { title: 'Profile Setup & Verification', icon: '✅', description: 'Complete GMB profile setup and Google verification process.', features: ['Business verification', 'Category selection', 'Hours & contact setup', 'Service area definition'] },
    { title: 'Profile Optimization', icon: '⚡', description: 'Optimize every section of your GMB profile for maximum visibility.', features: ['Keyword optimization', 'Business description', 'Attributes selection', 'Product/service listing'] },
    { title: 'Photo & Video Optimization', icon: '📸', description: 'Professional visual content that attracts more customers.', features: ['Logo & cover photo', '360° virtual tour', 'Product photos', 'Team photos', 'Video uploads'] },
    { title: 'Review Management', icon: '⭐', description: 'Strategic review generation and response management.', features: ['Review generation system', 'Response templates', 'Review monitoring', 'Sentiment analysis'] },
    { title: 'Post Management', icon: '📝', description: 'Regular engaging posts to keep your profile active.', features: ['Weekly posts', 'Event promotion', 'Offer creation', 'Update scheduling'] },
    { title: 'Q&A Management', icon: '❓', description: 'Active Q&A section management for better engagement.', features: ['Question monitoring', 'Answer optimization', 'FAQ creation', 'User engagement'] }
  ];

  const rankingFactors = [
    { factor: 'Relevance', percentage: 85, description: 'How well your business matches search intent' },
    { factor: 'Distance', percentage: 75, description: "Proximity to the searcher's location" },
    { factor: 'Prominence', percentage: 90, description: 'How well-known your business is locally' },
    { factor: 'Reviews', percentage: 95, description: 'Quantity, quality, and recency of reviews' },
    { factor: 'Categories', percentage: 80, description: 'Primary and secondary category selection' }
  ];

  const pricingPlans = [
    { name: 'Essential GMB', price: '₹9,000', period: '/month', originalPrice: '₹15,000', features: ['Complete Profile Setup', 'Basic Optimization', 'Weekly Posts', 'Review Management', 'Q&A Monitoring', 'Monthly Report'], recommended: false },
    { name: 'Professional GMB', price: '₹15,000', period: '/month', originalPrice: '₹30,000', features: ['Everything in Essential', 'Advanced Optimization', 'Photo/Video Management', 'Review Generation System', 'Competitor Analysis', 'Weekly Reports', 'Priority Support'], recommended: true },
    { name: 'Enterprise GMB', price: '₹25,000', period: '/month', originalPrice: '₹50,000', features: ['Everything in Professional', '360° Virtual Tour', 'Multi-Location Management', 'Citation Building', 'Local SEO Integration', 'Real-time Dashboard', 'Dedicated Account Manager', '24/7 Support'], recommended: false }
  ];

  const faqs = [
    { question: 'How long does GMB optimization take to show results?', answer: 'Initial improvements can be seen in 2-4 weeks, with significant ranking improvements in 2-3 months. Consistent optimization and review management are key to long-term success.' },
    { question: 'Do I need a physical location for GMB?', answer: 'No, service-area businesses can hide their address and serve customers in specified regions. We help optimize for service-area businesses as well.' },
    { question: 'How many reviews do I need to rank well?', answer: 'Quality matters more than quantity. A steady stream of authentic, positive reviews from verified customers is ideal. We help implement systematic review generation.' },
    { question: 'What makes your GMB service different?', answer: 'We provide holistic local SEO integration, not just basic optimization. Our strategies are data-driven, transparent, and focused on actual local ranking improvements.' }
  ];

  // Schema markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://apexwebsitesolutions.in/#organization",
    "name": "ApexWeb Solutions",
    "url": "https://apexwebsitesolutions.in/",
    "logo": "https://apexwebsitesolutions.in/logo.png",
    "contactPoint": { "@type": "ContactPoint", "telephone": "+91-98906-85066", "contactType": "customer service", "availableLanguage": ["English", "Hindi"] }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://apexwebsitesolutions.in/services/google-business-profile#service",
    "name": "Google Business Profile Optimization Services",
    "serviceType": "Local SEO & GMB Optimization",
    "provider": {
      "@id": "https://apexwebsitesolutions.in/#organization"
    },
    "description": "Improve your local search visibility with Google Business Profile Optimization Services. We help businesses optimize profiles, rank higher on Google Maps, and attract local customers.",
    "areaServed": "India"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://apexwebsitesolutions.in/services/google-business-profile#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://apexwebsitesolutions.in/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://apexwebsitesolutions.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Google Business Profile", "item": "https://apexwebsitesolutions.in/services/google-business-profile" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://apexwebsitesolutions.in/services/google-business-profile#faq",
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
    <>
      <Helmet>
        <title>Google Business Profile Optimization & Local SEO | ApexWeb Solutions</title>
        <meta name="title" content="Google Business Profile Optimization & Local SEO | ApexWeb Solutions" />
        <meta
          name="description"
          content="Improve your local search visibility with Google Business Profile Optimization Services. ApexWeb Solutions helps businesses optimize Google Business Profiles, rank higher on Google Maps, and attract more local customers."
        />
        <meta
          name="keywords"
          content="Google Business Profile Optimization, Google Business Profile Services, Google Business Profile Management, Google Business Profile Expert, Google Business Profile SEO, Google Maps SEO, Google Maps Ranking, Local SEO Services, Google Business Profile Agency, Google My Business Optimization"
        />
        <meta name="author" content="ApexWeb Solutions" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://apexwebsitesolutions.in/services/google-business-profile"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Google Business Profile Optimization Services | ApexWeb Solutions"
        />
        <meta
          property="og:description"
          content="Boost your local business visibility with professional Google Business Profile optimization and Google Maps SEO services."
        />
        <meta
          property="og:url"
          content="https://apexwebsitesolutions.in/services/google-business-profile"
        />
        <meta property="og:image" content="https://apexwebsitesolutions.in/og-image.jpg" />
        <meta
          property="og:site_name"
          content="ApexWeb Solutions"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:url"
          content="https://apexwebsitesolutions.in/services/google-business-profile"
        />
        <meta
          name="twitter:title"
          content="Google Business Profile Optimization Services | ApexWeb Solutions"
        />
        <meta
          name="twitter:description"
          content="Optimize your Google Business Profile, improve Google Maps rankings, and generate more local leads with ApexWeb Solutions."
        />
        <meta
          name="twitter:image"
          content="https://apexwebsitesolutions.in/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section ref={heroRef} className="text-center mb-16">
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                ⭐ GOOGLE BUSINESS PROFILE OPTIMIZATION ⭐
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                Dominate Local
                <br />
                <span className="font-bold">Google Search</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
                Optimize your Google Business Profile to attract more local customers, 
                increase visibility, and dominate the local pack rankings. <span className="font-semibold text-sky-600">Starting at ₹9,000/month!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Free GMB Audit')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free GMB Audit</button>
                <button onClick={() => handleWhatsAppRedirect('GMB Success Stories')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}>View Success Stories</button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {gmbStats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>{stat.value}{stat.suffix}</div>
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Why GMB Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Why Your Business Needs <span className="text-sky-500">GMB Optimization?</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">46% of all Google searches are looking for local information</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Increase Visibility', desc: 'Appear in local search results', icon: '👁️' },
                { title: 'More Calls', desc: 'Direct phone calls from search', icon: '📞' },
                { title: 'Store Visits', desc: 'Drive foot traffic to your location', icon: '🏪' },
                { title: 'Website Traffic', desc: 'Get more website visitors', icon: '🌐' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Local Pack Visualization */}
          <section className="mb-20">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#0F172A' }}>
              <div className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Google Local Pack Rankings</h2>
                <p className="text-white/70 text-center mb-8">Where your business appears when customers search locally</p>
                <div className="space-y-4 max-w-2xl mx-auto">
                  {[
                    { position: '#1', color: '#38BDF8', title: 'Your Business - Premium Position', visibility: '65% Click-Through Rate' },
                    { position: '#2', color: '#94A3B8', title: 'Competitor A', visibility: '25% Click-Through Rate' },
                    { position: '#3', color: '#94A3B8', title: 'Competitor B', visibility: '10% Click-Through Rate' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <div className="text-2xl font-bold" style={{ color: item.color }}>{item.position}</div>
                      <div className="flex-1"><div className="text-white font-medium">{item.title}</div><div className="text-white/60 text-sm">{item.visibility}</div></div>
                      {idx === 0 && <div className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>TARGET</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Optimization Services Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Complete GMB <span className="font-bold">Optimization</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {optimizationServices.map((service, index) => (
                <div key={index} className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>{service.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#4A5568' }}>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}>
                        <svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Ranking Factors */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>What Influences Your <span className="font-bold">Local Rankings?</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {rankingFactors.map((factor, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2"><span className="font-medium" style={{ color: '#0F172A' }}>{factor.factor}</span><span className="text-sm font-bold" style={{ color: '#38BDF8' }}>{factor.percentage}%</span></div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#E2E8F0' }}><div className="h-full rounded-full" style={{ width: `${factor.percentage}%`, backgroundColor: '#38BDF8' }} /></div>
                    <p className="text-xs mt-1" style={{ color: '#4A5568' }}>{factor.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F172A' }}>Proven Strategy</h3>
                <p className="mb-6 leading-relaxed" style={{ color: '#4A5568' }}>We optimize ALL ranking factors simultaneously to ensure your business dominates local search results.</p>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>92% Average Ranking Improvement</div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Transparent <span className="font-bold">Pricing</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`rounded-2xl overflow-hidden shadow-lg relative transition-all hover:-translate-y-2 ${plan.recommended ? 'border-2' : 'border'}`} style={{ backgroundColor: 'white', borderColor: plan.recommended ? '#38BDF8' : '#E2E8F0' }}>
                  {plan.recommended && <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>BEST VALUE</div>}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{plan.name}</h3>
                    <div className="mb-2"><span className="text-3xl font-bold" style={{ color: '#38BDF8' }}>{plan.price}</span><span className="text-sm" style={{ color: '#4A5568' }}>{plan.period}</span>{plan.originalPrice && <span className="text-sm line-through ml-2" style={{ color: '#94A3B8' }}>{plan.originalPrice}</span>}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Dominate Local Search?</h2>
              <p className="text-xl mb-6 text-white/80">Get a free GMB audit and discover how to attract more local customers</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Free GMB Audit')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free GMB Audit</button>
                <button onClick={() => handleWhatsAppRedirect('Local SEO Expert Consultation')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}>Talk to Local SEO Expert</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GoogleBusinessPage;