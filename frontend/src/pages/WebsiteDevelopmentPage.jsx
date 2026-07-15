// pages/WebsiteDevelopmentPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const WebsiteDevelopmentPage = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  // WhatsApp redirect function
  const handleWhatsAppRedirect = (serviceName, price) => {
    const phoneNumber = "919890685066";
    const message = `Hello! I'm interested in your ${serviceName} service (Starting at ${price}). Could you please share more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const websiteTypes = [
    { name: 'Basic Business Website', price: '₹12,000', originalPrice: '₹25,000', features: ['5 Pages', 'Mobile Responsive', 'Contact Form', 'Social Media Integration', 'Basic SEO Setup', '1 Month Support'], icon: '🏢', popular: false },
    { name: 'Professional Website', price: '₹20,000', originalPrice: '₹45,000', features: ['10 Pages', 'Custom Design', 'Blog Setup', 'Advanced SEO', 'WhatsApp Chat Integration', '3 Months Support'], icon: '💼', popular: true },
    { name: 'Portfolio Website', price: '₹8,000', originalPrice: '₹20,000', features: ['Creative Design', 'Project Gallery', 'Client Testimonials', 'Resume/CV Section', 'Contact Form', '1 Month Support'], icon: '🎨', popular: false },
    { name: 'Real Estate Website', price: '₹20,000', originalPrice: '₹50,000', features: ['Property Listings', 'Property Search', 'Virtual Tours', 'Mortgage Calculator', 'Agent Profiles', '3 Months Support'], icon: '🏠', popular: false },
    { name: 'E-commerce Website', price: '₹30,000', originalPrice: '₹70,000', features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management', 'Customer Accounts', '6 Months Support'], icon: '🛒', popular: true },
    { name: 'Custom Web App', price: '₹45,000', originalPrice: '₹90,000', features: ['Custom Features', 'Database Integration', 'API Development', 'Admin Panel', 'User Authentication', '6 Months Support'], icon: '⚙️', popular: false },
  ];

  const processSteps = [
    { number: '01', title: 'Discovery Call', description: 'Understanding your goals and requirements' },
    { number: '02', title: 'Design', description: 'Creating beautiful, intuitive interfaces' },
    { number: '03', title: 'Development', description: 'Building robust, scalable solutions' },
    { number: '04', title: 'Launch & Support', description: 'Deploying and providing ongoing support' }
  ];

  const benefits = [
    { icon: '⚡', title: 'Fast Delivery', description: 'Get your website in 7-14 days' },
    { icon: '🎨', title: 'Modern Design', description: 'Trendy, professional layouts' },
    { icon: '📱', title: '100% Responsive', description: 'Perfect on all devices' },
    { icon: '🔧', title: 'Free Support', description: '1-6 months free maintenance' },
    { icon: '📈', title: 'SEO Ready', description: 'Built for search engines' },
    { icon: '🔒', title: 'Secure', description: 'SSL & security features' }
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
      { "@type": "ListItem", "position": 3, "name": "Website Development", "item": "https://apexwebsitesolutions.netlify.app/services/website-development" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How long does it take to build a website?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 7-14 days depending on the complexity of your project." } },
      { "@type": "Question", "name": "Will my website be mobile-friendly?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! All our websites are 100% responsive and look great on all devices." } },
      { "@type": "Question", "name": "Do you offer maintenance after launch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide free support for 1-6 months depending on your package." } }
    ]
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Affordable Website Development | Professional Websites Starting at ₹12,000 | ApexWeb Solutions</title>
        <meta name="description" content="Get a professional, mobile-friendly website starting at just ₹12,000. Fast delivery, SEO-ready, and free support. Trusted by 500+ businesses. Free quote!" />
        <meta name="keywords" content="affordable website development, cheap website design, professional website, business website, ecommerce website, custom web development, website design India, responsive website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://apexwebsitesolutions.netlify.app/services/website-development" />
        
        <meta property="og:title" content="Affordable Website Development | Professional Websites Starting at ₹12,000" />
        <meta property="og:description" content="Get a stunning, high-performance website without breaking the bank. Starting at just ₹12,000!" />
        <meta property="og:url" content="https://apexwebsitesolutions.netlify.app/services/website-development" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Affordable Website Development | Starting at ₹12,000" />
        <meta name="twitter:description" content="Professional websites at affordable prices. Get your online presence today!" />
        
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Optimized */}
          <div ref={headerRef} className="text-center mb-16">
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                AFFORDABLE WEB DEVELOPMENT
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4" style={{ color: '#0F172A' }}>
                Professional Websites
                <br />
                <span className="font-bold">Starting at ₹12,000</span>
              </h1>
              <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
              <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#4A5568' }}>
                Get a stunning, high-performance website without breaking the bank. Perfect for businesses, startups, and entrepreneurs.
              </p>
              <button onClick={() => handleWhatsAppRedirect('Website Development', '₹12,000')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>
                💬 Chat on WhatsApp → Get Free Quote
              </button>
            </div>
          </div>

          {/* Benefits Section - Optimized */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#0F172A' }}>
              Why Choose <span className="text-sky-500">Us?</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center p-4 rounded-xl hover:shadow-lg transition-all" style={{ backgroundColor: '#F8FAFC' }}>
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="font-semibold text-sm" style={{ color: '#0F172A' }}>{benefit.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#4A5568' }}>{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Stats Section - NEW for SEO */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '500+', label: 'Websites Delivered', icon: '🌐' },
                { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { value: '7-14', label: 'Days Delivery', icon: '⚡' },
                { value: '24/7', label: 'Support', icon: '🛡️' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Packages Grid - Simplified animations for performance */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: '#0F172A' }}>
              Our <span className="font-bold">Packages</span>
            </h2>
            <p className="text-center mb-10" style={{ color: '#4A5568' }}>Choose the perfect package for your business needs</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteTypes.map((type, index) => (
                <div key={index} className={`group rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 relative ${type.popular ? 'border-2' : 'border'}`} style={{ backgroundColor: 'white', borderColor: type.popular ? '#38BDF8' : '#E2E8F0' }}>
                  {type.popular && <div className="absolute top-4 right-4 z-10"><div className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>MOST POPULAR</div></div>}
                  <div className="p-8">
                    <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{type.icon}</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>{type.name}</h3>
                    <div className="mb-2"><span className="text-3xl font-bold" style={{ color: '#38BDF8' }}>{type.price}</span>{type.originalPrice && <span className="text-sm line-through ml-2" style={{ color: '#94A3B8' }}>{type.originalPrice}</span>}</div>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, i) => (<li key={i} className="text-sm flex items-center gap-2" style={{ color: '#4A5568' }}><svg className="w-4 h-4 flex-shrink-0" fill="#38BDF8" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{feature}</li>))}
                    </ul>
                    <button onClick={() => handleWhatsAppRedirect(type.name, type.price)} className="w-full px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Get Started on WhatsApp</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section - Optimized */}
          <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: '#0F172A' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Simple 4-Step Process</h2>
            <p className="text-white/70 mb-10">Get your website up and running in no time</p>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="group transition-all hover:scale-105">
                  <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#38BDF8' }}>{step.number}</div>
                  <div className="text-white font-semibold text-lg mb-2">{step.title}</div>
                  <div className="text-white/60 text-sm">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#0F172A' }}>Frequently Asked <span className="text-sky-500">Questions</span></h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "How long does it take to build a website?", a: "Typically 7-14 days depending on the complexity of your project." },
                { q: "Do I need to provide content?", a: "We can help with content creation, but any content you provide speeds up the process." },
                { q: "Will my website be mobile-friendly?", a: "Yes! All our websites are 100% responsive and look great on all devices." },
                { q: "Do you offer maintenance after launch?", a: "Yes, we provide free support for 1-6 months depending on your package." },
                { q: "Can I update the website myself?", a: "Yes, we provide an easy-to-use CMS so you can make updates yourself." },
                { q: "What about SEO?", a: "All websites come with basic SEO setup to help you rank better." }
              ].map((faq, idx) => (
                <div key={idx} className="rounded-xl p-6 transition-all hover:shadow-lg" style={{ backgroundColor: '#F8FAFC' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#0F172A' }}>{faq.q}</h3>
                  <p className="text-sm" style={{ color: '#4A5568' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-16 text-center">
            <div className="rounded-2xl p-10 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Ready to Get Started?</h3>
              <p className="mb-6 text-white/80">Get a professional website at an affordable price. Contact us today!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => handleWhatsAppRedirect('Website Development', '₹12,000')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#075E54', color: 'white' }}>💬 Chat on WhatsApp</button>
                <button onClick={() => handleWhatsAppRedirect('Free Consultation', 'Free')} className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}>📞 Get Free Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default WebsiteDevelopmentPage;