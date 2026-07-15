// pages/WebsiteMaintenancePage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const WebsiteMaintenancePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ uptime: 0, clients: 0, issues: 0 });
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

    const targets = [99.9, 500, 10000];
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        let newCount;
        if (idx === 0) {
          // For decimal number (99.9)
          newCount = Math.min(count + increments[idx], targets[idx]);
          return parseFloat(newCount.toFixed(1));
        } else {
          // For whole numbers
          newCount = Math.min(count + increments[idx], targets[idx]);
          return Math.floor(newCount);
        }
      });
      setCounters({ uptime: currentCounts[0], clients: currentCounts[1], issues: currentCounts[2] });

      if (currentStep >= steps) {
        setCounters({ uptime: 99.9, clients: 500, issues: 10000 });
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
    { icon: '🛡️', title: '24/7 Security Monitoring', desc: 'Protect your website from hackers & malware' },
    { icon: '⚡', title: '99.9% Uptime', desc: 'Keep your website always accessible' },
    { icon: '🚀', title: 'Speed Optimization', desc: 'Faster loading times for better UX' },
    { icon: '💾', title: 'Daily Backups', desc: 'Never lose your valuable data' },
    { icon: '🔧', title: 'Bug Fixes', desc: 'Quick resolution of technical issues' },
    { icon: '📊', title: 'Performance Reports', desc: 'Monthly detailed analytics' }
  ];

  const maintenancePlans = [
    { name: 'Basic Care', price: '₹5,000', period: '/month', originalPrice: '₹8,000', features: ['Weekly Backups', 'Security Monitoring', 'Basic SEO Check', 'Uptime Monitoring', 'Email Support', 'Monthly Report'], icon: '🛡️', popular: false },
    { name: 'Professional Care', price: '₹10,000', period: '/month', originalPrice: '₹15,000', features: ['Daily Backups', 'Advanced Security', 'Speed Optimization', 'Plugin Updates', 'Bug Fixes', 'Priority Support', 'Weekly Reports'], icon: '⭐', popular: true },
    { name: 'Enterprise Care', price: '₹20,000', period: '/month', originalPrice: '₹30,000', features: ['Real-time Backups', 'Premium Security', 'Full Optimization', 'Content Updates', 'Emergency Fixes', '24/7 Phone Support', 'Dedicated Manager', 'Daily Reports'], icon: '🏆', popular: false }
  ];

  const services = [
    { name: 'Security Monitoring', icon: '🔒', desc: '24/7 protection against threats', included: true },
    { name: 'Daily Backups', icon: '💾', desc: 'Automatic data backup', included: true },
    { name: 'Speed Optimization', icon: '⚡', desc: 'Improve loading times', included: true },
    { name: 'Plugin Updates', icon: '🔄', desc: 'Keep software updated', included: true },
    { name: 'Bug Fixes', icon: '🐛', desc: 'Quick issue resolution', included: true },
    { name: 'Uptime Monitoring', icon: '📊', desc: '99.9% uptime guarantee', included: true },
    { name: 'SEO Monitoring', icon: '📈', desc: 'Track search rankings', included: true },
    { name: 'Content Updates', icon: '✏️', desc: 'Minor content changes', included: false }
  ];

  const processSteps = [
    { number: '01', title: 'Website Audit', description: 'Complete analysis of your website' },
    { number: '02', title: 'Security Setup', description: 'Install security measures' },
    { number: '03', title: 'Backup System', description: 'Configure automatic backups' },
    { number: '04', title: 'Monitoring', description: '24/7 active monitoring' },
    { number: '05', title: 'Reporting', description: 'Detailed monthly reports' },
    { number: '06', title: 'Support', description: 'Ongoing maintenance & support' }
  ];

  const whyChooseItems = [
    { icon: '⚡', title: 'Fast Response', desc: 'Under 2 hours response time' },
    { icon: '👨‍💻', title: 'Expert Team', desc: 'Certified professionals' },
    { icon: '💰', title: 'Affordable', desc: 'Best value for money' },
    { icon: '🔄', title: 'Proactive', desc: 'Fix issues before they occur' }
  ];

  const faqs = [
    { question: 'Why do I need website maintenance?', answer: 'Regular maintenance keeps your website secure, fast, and up-to-date. It prevents hacking, fixes bugs, and ensures optimal performance.' },
    { question: 'How often do you backup my website?', answer: 'We perform daily backups for Professional and Enterprise plans, and weekly backups for Basic plan.' },
    { question: 'What happens if my website goes down?', answer: 'We monitor your website 24/7 and will fix any issues immediately. Our goal is 99.9% uptime.' },
    { question: 'Can you update my content?', answer: 'Yes! Professional and Enterprise plans include content updates. Basic plan users can request paid content updates.' },
    { question: 'Do you provide security reports?', answer: 'Yes, we provide detailed monthly reports including security scans, uptime statistics, and performance metrics.' },
    { question: 'What CMS platforms do you support?', answer: 'We support WordPress, Shopify, Webflow, Wix, and custom HTML/CSS websites.' }
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
      { "@type": "ListItem", "position": 3, "name": "Website Maintenance", "item": "https://apexwebsitesolutions.in/services/website-maintenance" }
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
    "name": "Website Maintenance Services",
    "description": "Professional website maintenance services including security monitoring, daily backups, speed optimization, and 24/7 support.",
    "provider": { "@type": "Organization", "name": "ApexWeb Solutions" },
    "areaServed": "India",
    "priceRange": "₹5,000 - ₹20,000"
  };

  return (
    <HelmetProvider>
     <Helmet>
  <title>Website Maintenance Services | WordPress & Website Support | Apex Website Solutions</title>

  <meta
    name="description"
    content="Keep your website secure, fast, and up to date with professional website maintenance services from Apex Website Solutions. We provide WordPress maintenance, website security, backups, speed optimization, bug fixes, and ongoing technical support."
  />

  <meta
    name="keywords"
    content="website maintenance services, WordPress maintenance, website support services, website security, website backup services, website updates, speed optimization, website monitoring, website care plans, website bug fixes, website maintenance company"
  />

  <meta name="author" content="Apex Website Solutions" />
  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://apexwebsitesolutions.in/services/website-maintenance"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Website Maintenance Services | Apex Website Solutions"
  />

  <meta
    property="og:description"
    content="Professional website maintenance services including security updates, backups, WordPress maintenance, speed optimization, bug fixes, and technical support."
  />

  <meta
    property="og:url"
    content="https://apexwebsitesolutions.in/services/website-maintenance"
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
    content="Website Maintenance Services | Apex Website Solutions"
  />

  <meta
    name="twitter:description"
    content="Professional website maintenance including WordPress updates, backups, website security, performance optimization, and technical support."
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
                ⭐ WEBSITE MAINTENANCE - STARTING ₹5,000/MONTH ⭐
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                Keep Your Website
                <br />
                <span className="font-bold">Secure & Fast</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
                24/7 monitoring, daily backups, security protection, and performance optimization. 
                Starting at just ₹5,000/month with 99.9% uptime guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Website Maintenance')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free Audit</button>
                <button onClick={() => handleWhatsAppRedirect('Maintenance Plans')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}>View Plans</button>
              </div>
            </div>
          </section>

          {/* Stats Section - Fixed Uptime display */}
          <section ref={statsRef} className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { value: statsInView ? (counters.uptime === 99.9 ? counters.uptime.toFixed(1) : counters.uptime) : '99.9', suffix: '%', label: 'Uptime Guarantee', icon: '📊' },
              { value: statsInView ? counters.clients : 0, suffix: '+', label: 'Websites Protected', icon: '🛡️' },
              { value: statsInView ? counters.issues : 0, suffix: '+', label: 'Issues Fixed', icon: '🔧' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Why Maintenance Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Why Your Website Needs <span className="text-sky-500">Regular Maintenance?</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">47% of website owners don't maintain their sites - don't be one of them</p>
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

          {/* Maintenance Plans */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>Maintenance <span className="font-bold">Plans</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>Choose the perfect plan for your website needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {maintenancePlans.map((plan, index) => (
                <div key={index} className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative ${plan.popular ? 'border-2' : 'border'}`} style={{ backgroundColor: 'white', borderColor: plan.popular ? '#38BDF8' : '#E2E8F0' }}>
                  {plan.popular && <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>BEST VALUE</div>}
                  <div className="p-8">
                    <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{plan.icon}</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold" style={{ color: '#38BDF8' }}>{plan.price}</span>
                      <span className="text-sm" style={{ color: '#4A5568' }}>{plan.period}</span>
                      {plan.originalPrice && <span className="text-sm line-through ml-2" style={{ color: '#94A3B8' }}>{plan.originalPrice}</span>}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}>
                          <svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => handleWhatsAppRedirect(plan.name)} className="w-full px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Started</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>What's <span className="font-bold">Included?</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: '#F8FAFC' }}>
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#0F172A' }}>{service.name}</h3>
                    <p className="text-xs" style={{ color: '#4A5568' }}>{service.desc}</p>
                  </div>
                  {service.included && <div className="ml-auto text-green-500">✓</div>}
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

          {/* Why Choose Us */}
          <section className="mb-20">
            <div className="rounded-3xl p-12 text-center" style={{ backgroundColor: '#0F172A' }}>
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose ApexWeb?</h2>
              <div className="grid md:grid-cols-4 gap-8 mt-8">
                {whyChooseItems.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <div className="text-white font-bold">{item.title}</div>
                    <div className="text-white/60 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Warning Section */}
          <section className="mb-20">
            <div className="rounded-2xl p-8 text-center border-2 border-red-200" style={{ backgroundColor: '#FEF2F2' }}>
              <div className="text-5xl mb-3">⚠️</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#DC2626' }}>Did You Know?</h3>
              <p className="text-lg mb-2" style={{ color: '#991B1B' }}>
                60% of small businesses go out of business within 6 months of a cyber attack.
              </p>
              <p className="text-md" style={{ color: '#7F1D1D' }}>
                Don't let your website become vulnerable. Get protected today starting at just ₹5,000/month.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Secure Your Website?</h2>
              <p className="text-xl mb-6 text-white/80">Get a free website audit and maintenance plan recommendation</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Free Website Audit')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Free Audit</button>
                <button onClick={() => handleWhatsAppRedirect('Maintenance Plans')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}>View All Plans</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default WebsiteMaintenancePage;