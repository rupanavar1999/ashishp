// pages/LandingPageDesignPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const LandingPageDesignPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ conversion: 0, speed: 0, clients: 0 });
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

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

    const targets = [300, 50, 500];
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        const newCount = Math.min(count + increments[idx], targets[idx]);
        return Math.floor(newCount);
      });
      setCounters({ conversion: currentCounts[0], speed: currentCounts[1], clients: currentCounts[2] });

      if (currentStep >= steps) {
        setCounters({ conversion: 300, speed: 50, clients: 500 });
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

  const benefits = [
    { icon: '🚀', title: 'Higher Conversions', desc: 'Increase conversion rates by up to 300%' },
    { icon: '⚡', title: 'Fast Loading', desc: 'Optimized for speed & performance' },
    { icon: '📱', title: 'Mobile First', desc: 'Perfect experience on all devices' },
    { icon: '🎯', title: 'Focused Design', desc: 'Single goal, clear call-to-action' },
    { icon: '🔍', title: 'SEO Ready', desc: 'Built for search engines' },
    { icon: '📊', title: 'Analytics Ready', desc: 'Track every conversion' }
  ];

  const landingTypes = [
    { name: 'Lead Generation', price: '₹8,000', originalPrice: '₹15,000', features: ['Lead Capture Forms', 'Email Integration', 'CRM Integration', 'A/B Testing', 'Analytics Setup', 'Mobile Optimized'], icon: '📝', popular: true },
    { name: 'Product Launch', price: '₹10,000', originalPrice: '₹20,000', features: ['Countdown Timer', 'Product Showcase', 'Pre-order Form', 'Social Proof', 'Launch Strategy', 'Email Marketing'], icon: '🎉', popular: false },
    { name: 'Event Registration', price: '₹7,000', originalPrice: '₹12,000', features: ['Event Details', 'Registration Form', 'Payment Gateway', 'Ticket Management', 'Calendar Integration', 'Reminder Setup'], icon: '📅', popular: false },
    { name: 'SaaS Landing', price: '₹12,000', originalPrice: '₹25,000', features: ['Feature Showcase', 'Pricing Tables', 'Free Trial Signup', 'Testimonials', 'Integration Logos', 'Demo Request'], icon: '☁️', popular: true },
    { name: 'E-commerce Promo', price: '₹9,000', originalPrice: '₹18,000', features: ['Product Display', 'Discount Codes', 'Shopping Cart', 'Trust Badges', 'Urgency Timer', 'Checkout Optimized'], icon: '🛍️', popular: false },
    { name: 'App Download', price: '₹6,000', originalPrice: '₹10,000', features: ['App Showcase', 'Download Buttons', 'QR Codes', 'Feature List', 'Rating Display', 'Store Links'], icon: '📱', popular: false }
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Understanding your goals & target audience' },
    { number: '02', title: 'Strategy', description: 'Planning conversion-focused design' },
    { number: '03', title: 'Design', description: 'Creating high-converting layouts' },
    { number: '04', title: 'Development', description: 'Building fast, responsive pages' },
    { number: '05', title: 'Testing', description: 'A/B testing & optimization' },
    { number: '06', title: 'Launch', description: 'Deploy & monitor performance' }
  ];

  const portfolioItems = [
    { name: 'SaaS Product Launch', industry: 'Software', result: '245% increase in signups', image: '☁️' },
    { name: 'Real Estate Lead Gen', industry: 'Real Estate', result: '300+ qualified leads/month', image: '🏠' },
    { name: 'E-commerce Sale Page', industry: 'Retail', result: '₹50L+ revenue generated', image: '🛒' },
    { name: 'Event Registration', industry: 'Events', result: '2000+ registrations', image: '🎫' }
  ];

  const pricingPlans = [
    { name: 'Single Landing Page', price: '₹8,000', period: '/page', features: ['1 Landing Page', 'Mobile Responsive', 'Contact Form', 'Basic SEO', 'Analytics Setup', '1 Round of Revisions'], recommended: false },
    { name: 'Starter Package', price: '₹18,000', period: '/3 pages', features: ['3 Landing Pages', 'A/B Testing Setup', 'Advanced SEO', 'CRM Integration', 'Heatmap Setup', '3 Rounds of Revisions'], recommended: true },
    { name: 'Business Package', price: '₹35,000', period: '/unlimited', features: ['Unlimited Pages', 'Full Conversion Strategy', 'Dedicated Manager', 'Priority Support', 'Monthly Optimization', '24/7 Support'], recommended: false }
  ];

  const faqs = [
    { question: 'How long does it take to design a landing page?', answer: 'Typically 3-7 business days depending on complexity. Rush delivery available for urgent projects.' },
    { question: 'Do you offer A/B testing?', answer: 'Yes! We set up A/B testing to optimize your page for maximum conversions.' },
    { question: 'Will the page be mobile-friendly?', answer: 'Absolutely! All our landing pages are 100% responsive and mobile-optimized.' },
    { question: 'Can I make changes after launch?', answer: 'Yes, we provide easy-to-use CMS or can handle changes for you with our maintenance plans.' },
    { question: 'Do you integrate with my CRM?', answer: 'Yes, we integrate with popular CRMs like HubSpot, Salesforce, Zoho, and more.' },
    { question: 'What about SEO?', answer: 'All landing pages are built with SEO best practices including meta tags, schema markup, and fast loading.' }
  ];

  // Schema markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexWeb Solutions",
    "url": " ",
    "logo": " /logo.png",
    "sameAs": ["https://linkedin.com/company/apexweb", "https://twitter.com/apexweb", "https://facebook.com/apexweb"],
    "contactPoint": { "@type": "ContactPoint", "telephone": "+91- 98906-85066", "contactType": "customer service", "availableLanguage": ["English", "Hindi"] }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": " " },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": " /services" },
      { "@type": "ListItem", "position": 3, "name": "Landing Page Design", "item": " /landing-page-design" }
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
    "name": "Landing Page Design Services",
    "description": "Professional landing page design services that convert visitors into customers. High-converting, mobile-responsive pages.",
    "provider": { "@type": "Organization", "name": "ApexWeb Solutions" },
    "areaServed": "India",
    "priceRange": "₹6,000 - ₹35,000"
  };

  return (
    <HelmetProvider>
     <Helmet>
  <title>Landing Page Design Services | High-Converting Landing Pages | Apex Website Solutions</title>

  <meta
    name="description"
    content="Get professional landing page design services from Apex Website Solutions. We create fast, responsive, SEO-friendly, and high-converting landing pages for lead generation, products, startups, and businesses."
  />

  <meta
    name="keywords"
    content="landing page design services, landing page designer, landing page development, high converting landing pages, responsive landing page design, lead generation landing pages, business landing pages, custom landing page design, SEO landing pages, landing page developer"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://apexwebsitesolutions.in/services/landing-page-design"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Landing Page Design Services | Apex Website Solutions"
  />

  <meta
    property="og:description"
    content="Professional landing page design services for businesses, startups, and marketing campaigns. Fast, responsive, SEO-friendly, and conversion-focused landing pages."
  />

  <meta
    property="og:url"
    content="https://apexwebsitesolutions.in/services/landing-page-design"
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
    content="Landing Page Design Services | Apex Website Solutions"
  />

  <meta
    name="twitter:description"
    content="Professional landing page design services for lead generation, marketing campaigns, and business growth."
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
                ⭐ AFFORDABLE LANDING PAGES - STARTING ₹6,000 ⭐
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                Turn Visitors Into
                <br />
                <span className="font-bold">Customers from ₹6,000</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
                Professional landing page designs that convert. Increase your conversion rate by up to 300% without breaking the bank.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Landing Page Design')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free Consultation</button>
                <button onClick={() => handleWhatsAppRedirect('Landing Page Portfolio')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}>View Portfolio</button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { value: counters.conversion, suffix: '%', label: 'Avg Conversion Increase', icon: '📈' },
              { value: counters.speed, suffix: '%', label: 'Faster Load Times', icon: '⚡' },
              { value: counters.clients, suffix: '+', label: 'Happy Clients', icon: '😊' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>{statsInView ? stat.value : 0}{stat.suffix}</div>
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Why Choose <span className="text-sky-500">Us?</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Get premium quality landing pages at affordable prices</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Landing Page Types */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Landing Page <span className="font-bold">Packages</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>Choose the perfect package for your business goals</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingTypes.map((type, index) => (
                <div key={index} className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative ${type.popular ? 'border-2' : 'border'}`} style={{ backgroundColor: 'white', borderColor: type.popular ? '#38BDF8' : '#E2E8F0' }}>
                  {type.popular && <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>POPULAR</div>}
                  <div className="p-8">
                    <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{type.icon}</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{type.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold" style={{ color: '#38BDF8' }}>{type.price}</span>
                      {type.originalPrice && <span className="text-sm line-through ml-2" style={{ color: '#94A3B8' }}>{type.originalPrice}</span>}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {type.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}>
                          <svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => handleWhatsAppRedirect(type.name)} className="w-full px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Started</button>
                  </div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center p-6 rounded-2xl transition-all hover:scale-105" style={{ backgroundColor: '#F8FAFC' }}>
                  <div className="text-4xl font-bold mb-3" style={{ color: '#38BDF8' }}>{step.number}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Showcase */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Our <span className="font-bold">Success Stories</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.map((item, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                  <div className="h-32 flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
                    <div className="text-5xl transition-transform group-hover:scale-110">{item.image}</div>
                  </div>
                  <div className="p-5">
                    <div className="inline-block px-2 py-1 rounded-full text-xs font-medium mb-2" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>{item.industry}</div>
                    <h3 className="font-bold mb-1" style={{ color: '#0F172A' }}>{item.name}</h3>
                    <p className="text-xs text-green-600">📈 {item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Simple <span className="font-bold">Pricing</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}> Affordable plans for every budget</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`rounded-2xl overflow-hidden shadow-lg relative transition-all hover:-translate-y-2 ${plan.recommended ? 'border-2' : 'border'}`} style={{ backgroundColor: 'white', borderColor: plan.recommended ? '#38BDF8' : '#E2E8F0' }}>
                  {plan.recommended && <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>BEST VALUE</div>}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{plan.name}</h3>
                    <div className="mb-6"><span className="text-4xl font-bold" style={{ color: '#0F172A' }}>{plan.price}</span><span className="text-sm" style={{ color: '#4A5568' }}>{plan.period}</span></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Boost Your Conversions?</h2>
              <p className="text-xl mb-6 text-white/80">Get a free consultation starting at just ₹6,000</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Landing Page Consultation')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Free Consultation</button>
                <button onClick={() => handleWhatsAppRedirect('Landing Page Portfolio')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}>View Our Work</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default LandingPageDesignPage;