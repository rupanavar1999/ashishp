// pages/SEOPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEOPage = () => {
  const [statsInView, setStatsInView] = useState(false);
  const [counters, setCounters] = useState({ traffic: 0, retention: 0, keywords: 0 });
  const statsRef = useRef(null);
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    const targets = [340, 95, 500];
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        const newCount = Math.min(count + increments[idx], targets[idx]);
        return Math.floor(newCount);
      });
      setCounters({ traffic: currentCounts[0], retention: currentCounts[1], keywords: currentCounts[2] });

      if (currentStep >= steps) {
        setCounters({ traffic: 340, retention: 95, keywords: 500 });
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

  const seoStats = [
    { value: counters.traffic, suffix: '%', label: 'Average Traffic Growth', icon: '📈' },
    { value: counters.retention, suffix: '%', label: 'Client Retention Rate', icon: '⭐' },
    { value: counters.keywords, suffix: '+', label: 'Keywords Ranked #1', icon: '🎯' },
    { value: 24, suffix: '/7', label: 'Support', icon: '🕒' }
  ];

  const seoServices = [
    { title: 'Technical SEO', icon: '⚙️', description: 'Optimize your website\'s technical foundation for better crawling and indexing.', features: ['Site Speed Optimization', 'Mobile Friendliness', 'XML Sitemaps', 'Schema Markup', 'Core Web Vitals', 'HTTPS Security'] },
    { title: 'Local SEO', icon: '📍', description: 'Dominate local search results and attract customers in your area.', features: ['Google Maps Ranking', 'Local Citations', 'Review Management', 'Local Keywords', 'Neighborhood Targeting', 'GMB Optimization'] },
    { title: 'On-Page SEO', icon: '📄', description: 'Optimize individual pages to rank higher and earn relevant traffic.', features: ['Meta Tags Optimization', 'Header Structure', 'Content Optimization', 'Internal Linking', 'Image Optimization', 'URL Structure'] },
    { title: 'Off-Page SEO', icon: '🔗', description: 'Build authority and trust through strategic external optimization.', features: ['Link Building', 'Guest Posting', 'Social Signals', 'Brand Mentions', 'Influencer Outreach', 'Digital PR'] },
    { title: 'Google Maps Ranking', icon: '🗺️', description: 'Get your business on the map - literally. Dominate local pack results.', features: ['Map Pack Optimization', 'Local Grid Rankings', 'Proximity Targeting', 'Citation Building', 'Review Generation', 'Local Content'] },
    { title: 'GMB Optimization', icon: '🏢', description: 'Maximize your Google Business Profile for maximum visibility.', features: ['Profile Completion', 'Post Optimization', 'Q&A Management', 'Photo Optimization', 'Insights Analysis', 'Competitor Tracking'] }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery & Audit', description: 'Comprehensive analysis of your current SEO performance and competitor landscape.' },
    { step: '02', title: 'Strategy Development', description: 'Data-driven SEO strategy tailored to your business goals and target audience.' },
    { step: '03', title: 'Implementation', description: 'Execute optimization across technical, on-page, and off-page elements.' },
    { step: '04', title: 'Monitoring & Reporting', description: 'Track rankings, traffic, and conversions with detailed monthly reports.' }
  ];

  const faqs = [
    { question: 'How long does SEO take to show results?', answer: 'Typically, you can start seeing improvements in 3-6 months, with significant results in 6-12 months. SEO is a long-term investment that compounds over time.' },
    { question: 'Do you guarantee #1 rankings?', answer: 'No ethical SEO agency can guarantee #1 rankings. We guarantee data-driven strategies, transparent reporting, and continuous improvement toward your goals.' },
    { question: 'What makes your SEO different?', answer: 'We focus on holistic SEO that drives real business results - not just rankings. Our strategies are tailored, transparent, and focused on ROI.' },
    { question: 'How do you measure SEO success?', answer: 'We track organic traffic, keyword rankings, conversion rates, leads generated, and revenue attributed to SEO efforts.' }
  ];

  // Schema markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexWeb Solutions",
    "url": "https://apexwebsitesolutions.netlify.app",
    "logo": "https://apexwebsitesolutions.netlify.app/logo.png",
    "sameAs": ["https://linkedin.com/company/apexweb", "https://twitter.com/apexweb", "https://facebook.com/apexweb"],
    "contactPoint": { "@type": "ContactPoint", "telephone": "+91- 98906-85066", "contactType": "customer service", "availableLanguage": ["English", "Hindi"] }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://apexwebsitesolutions.netlify.app" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://apexwebsitesolutions.netlify.app/services" },
      { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://apexwebsitesolutions.netlify.app/services/seo" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ApexWeb Solutions - SEO Services",
    "description": "Professional SEO services in India. Get your website ranked on Google's first page.",
    "address": { "@type": "PostalAddress", "addressLocality": "Panaji", "addressRegion": "Goa", "addressCountry": "IN" },
    "priceRange": "₹25,000 - ₹99,000"
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>SEO Services India | #1 SEO Agency | Rank Higher on Google | ApexWeb Solutions</title>
        <meta name="description" content="Top-rated SEO agency in India. Get your website ranked on Google's first page. Technical SEO, Local SEO, Link Building. 500+ keywords ranked. Free SEO audit!" />
        <meta name="keywords" content="SEO services, SEO agency India, search engine optimization, Google ranking, local SEO, technical SEO, link building, on-page SEO, off-page SEO, GMB optimization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://apexwebsitesolutions.netlify.app/services/seo" />
        
        <meta property="og:title" content="SEO Services India | #1 SEO Agency | Rank Higher on Google" />
        <meta property="og:description" content="Get your website ranked on Google's first page. 500+ keywords ranked, 340% traffic growth. Free SEO audit available!" />
        <meta property="og:url" content="https://apexwebsitesolutions.netlify.app/services/seo" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services India | Rank Higher on Google" />
        <meta name="twitter:description" content="Professional SEO services. Get free SEO audit today!" />
        
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section ref={heroRef} className="text-center mb-16">
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                ⭐ #1 SEO AGENCY IN INDIA ⭐
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                Dominate Search
                <br />
                <span className="font-bold">Rankings</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
                Data-driven SEO strategies that drive organic growth, increase visibility, and deliver measurable ROI for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('SEO Audit')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free SEO Audit</button>
                <button onClick={() => handleWhatsAppRedirect('SEO Pricing')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}>View Pricing</button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {seoStats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>{statsInView ? stat.value : 0}{stat.suffix}</div>
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>{stat.label}</div>
              </div>
            ))}
          </section>

          {/* SEO Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Why Your Business Needs <span className="text-sky-500">SEO?</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">93% of online experiences begin with a search engine. Don't let your competitors take your customers.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Increase Traffic', desc: 'Get 30%+ more organic visitors', icon: '📈' },
                { title: 'Higher ROI', desc: '5x better than paid ads', icon: '💰' },
                { title: 'Build Trust', desc: 'First-page results = credibility', icon: '⭐' },
                { title: '24/7 Promotion', desc: 'Work while you sleep', icon: '🕒' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Services Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Comprehensive <span className="font-bold">SEO Solutions</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>Every aspect of SEO covered to ensure your website achieves maximum visibility</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <div key={index} className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>{service.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#4A5568' }}>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
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

          {/* Process Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Our <span className="font-bold">Process</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center p-6 rounded-2xl transition-all hover:scale-105" style={{ backgroundColor: '#F8FAFC' }}>
                  <div className="text-4xl font-bold mb-3" style={{ color: '#38BDF8' }}>{step.step}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Transparent <span className="font-bold">Pricing</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Starter SEO', price: '₹10,000', period: '/month', features: ['Technical SEO Audit', '5 Keywords Tracking', 'Monthly Report', 'On-Page Optimization', 'Basic Link Building', 'Email Support'], recommended: false },
                { name: 'Professional SEO', price: '₹30,000', period: '/month', features: ['Everything in Starter', '15 Keywords Tracking', 'Weekly Reports', 'Advanced Link Building', 'Local SEO', 'Priority Support', 'Content Strategy'], recommended: true },
                { name: 'Enterprise SEO', price: '₹49,000', period: '/month', features: ['Everything in Professional', '30+ Keywords Tracking', 'Real-time Dashboard', 'Enterprise Link Building', 'Dedicated Account Manager', '24/7 Phone Support', 'Custom Strategy'], recommended: false }
              ].map((plan, index) => (
                <div key={index} className={`rounded-2xl overflow-hidden shadow-lg relative transition-all hover:-translate-y-2 ${plan.recommended ? 'border-2' : 'border'}`} style={{ backgroundColor: 'white', borderColor: plan.recommended ? '#38BDF8' : '#E2E8F0' }}>
                  {plan.recommended && <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>BEST VALUE</div>}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{plan.name}</h3>
                    <div className="mb-6"><span className="text-4xl font-bold" style={{ color: '#0F172A' }}>{plan.price}</span><span className="text-sm" style={{ color: '#4A5568' }}>{plan.period}</span></div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (<li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}><svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{feature}</li>))}
                    </ul>
                    <button onClick={() => handleWhatsAppRedirect(plan.name)} className="w-full px-6 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: plan.recommended ? '#075E54' : '#0F172A', color: 'white' }}>Get Started on WhatsApp</button>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Rank Higher?</h2>
              <p className="text-xl mb-6 text-white/80">Get a free SEO audit and discover your website's potential</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Free SEO Audit')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free SEO Audit</button>
                <button onClick={() => handleWhatsAppRedirect('SEO Expert Consultation')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}>Talk to SEO Expert</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SEOPage;