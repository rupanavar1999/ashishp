// pages/UIUXDesignPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UIUXDesignPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('ui');
  const heroRef = useRef(null);

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

  // WhatsApp redirect function
  const handleWhatsAppRedirect = (serviceName) => {
    const phoneNumber = "919890685066"; // Replace with your WhatsApp number
    const message = `Hello! I'm interested in your ${serviceName} services. Could you please share more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const uiuxBenefits = [
    { icon: '🎨', title: 'Better User Experience', desc: 'Increase user satisfaction by 40%' },
    { icon: '💰', title: 'Higher Conversions', desc: 'Boost conversion rates by 200%' },
    { icon: '📱', title: 'Mobile-First Design', desc: 'Optimized for all devices' },
    { icon: '⚡', title: 'Faster Load Times', desc: 'Improve performance by 50%' },
    { icon: '🔍', title: 'Better SEO Rankings', desc: 'Google loves great UX' },
    { icon: '💼', title: 'Reduced Costs', desc: 'Lower development & support costs' }
  ];

  const portfolioItems = [
    { name: 'E-commerce App', category: 'UI/UX Design', image: '🛍️', result: '200% increase in conversions' },
    { name: 'Banking Dashboard', category: 'UX Research', image: '🏦', result: '95% user satisfaction' },
    { name: 'Healthcare Portal', category: 'UI Design', image: '🏥', result: '50% faster task completion' },
    { name: 'Real Estate Platform', category: 'Prototyping', image: '🏠', result: '300% more leads' }
  ];

  const processSteps = [
    { number: '01', title: 'Research & Discovery', description: 'Understanding user needs & business goals' },
    { number: '02', title: 'Wireframing', description: 'Creating structural layouts & user flows' },
    { number: '03', title: 'UI Design', description: 'Crafting beautiful, brand-aligned interfaces' },
    { number: '04', title: 'Prototyping', description: 'Interactive mockups for testing' },
    { number: '05', title: 'Testing', description: 'User testing & iterative improvements' },
    { number: '06', title: 'Handoff', description: 'Developer-friendly design specs' }
  ];

  const pricingPlans = [
    {
      name: 'UI Design Package',
      price: '₹20,000',
      period: '/project',
      features: [
        '10-15 Screens Design',
        'Responsive Layouts',
        'UI Kit & Components',
        'Figma/Sketch Files',
        'Design System',
        'Developer Handoff'
      ],
      recommended: false
    },
    {
      name: 'UX Design Package',
      price: '₹50,000',
      period: '/project',
      features: [
        'User Research',
        'Wireframing',
        'User Flows',
        'Information Architecture',
        'Usability Testing',
        'UX Strategy'
      ],
      recommended: true
    },
    {
      name: 'Complete UI/UX Package',
      price: '₹70,000',
      period: '/project',
      features: [
        'Full UI/UX Design',
        'User Research',
        'High-Fidelity Prototypes',
        'Design System',
        'User Testing',
        'Developer Support',
        'Priority Support'
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between UI and UX design?',
      answer: 'UX (User Experience) design focuses on how a product feels and functions, while UI (User Interface) design focuses on how it looks. Both are essential for creating successful digital products.'
    },
    {
      question: 'How long does UI/UX design take?',
      answer: 'Typically 2-6 weeks depending on project complexity. A simple mobile app might take 2-3 weeks, while a complex web application could take 4-6 weeks.'
    },
    {
      question: 'Do you conduct user research?',
      answer: 'Yes! User research is a crucial part of our process. We conduct interviews, surveys, and usability testing to ensure designs meet real user needs.'
    },
    {
      question: 'What tools do you use?',
      answer: 'We primarily use Figma for UI/UX design, along with Adobe XD, Sketch, and prototyping tools like InVision and Framer.'
    },
    {
      question: 'Do you provide design assets for developers?',
      answer: 'Absolutely! We provide comprehensive design specs, assets, style guides, and interactive prototypes to ensure smooth developer handoff.'
    }
  ];

  // Schema markup
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design Services",
    "description": "Professional UI/UX design services including user research, wireframing, prototyping, and high-fidelity design.",
    "provider": {
      "@type": "Organization",
      "name": "ApexWeb Solutions"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UI/UX Design Packages",
      "itemListElement": pricingPlans.map((plan, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": plan.name
        },
        "price": plan.price.replace('₹', ''),
        "priceCurrency": "INR"
      }))
    }
  };

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
      "https://dribbble.com/apexweb",
      "https://behance.net/apexweb"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91- 98906-85066",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    }
  };

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
        "name": "UI/UX Design",
        "item": "https://apexwebsitesolutions.netlify.app/services/ui-ux-design"
      }
    ]
  };

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
        <title>UI/UX Design Services | Professional UI UX Design Agency | ApexWeb Solutions</title>
        <meta name="title" content="UI/UX Design Services | Professional UI UX Design Agency India | ApexWeb Solutions" />
        <meta name="description" content="Expert UI/UX design services in India. Get user-centered designs that increase conversions by 200%. Free consultation. Figma prototypes. Top-rated agency." />
        <meta name="keywords" content="UI/UX design, UI design services, UX design agency, user interface design, user experience design, Figma design, prototype design, wireframing, mobile app design, web design, product design, design system, user research, usability testing" />
        <meta name="author" content="ApexWeb Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://apexwebsitesolutions.netlify.app/services/ui-ux-design" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apexwebsitesolutions.netlify.app/services/ui-ux-design" />
        <meta property="og:title" content="UI/UX Design Services | Professional UI UX Design Agency | ApexWeb Solutions" />
        <meta property="og:description" content="Transform your digital products with our expert UI/UX design services. User-centered designs that drive results. 200% conversion increase guaranteed." />
        <meta property="og:image" content="https://apexwebsitesolutions.netlify.app/og-uiux-design.jpg" />
        <meta property="og:site_name" content="ApexWeb Solutions" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://apexwebsitesolutions.netlify.app/services/ui-ux-design" />
        <meta name="twitter:title" content="UI/UX Design Services | ApexWeb Solutions" />
        <meta name="twitter:description" content="Professional UI/UX design agency. Get beautiful, user-friendly designs that convert. Free consultation available!" />
        <meta name="twitter:image" content="https://apexwebsitesolutions.netlify.app/twitter-uiux-design.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-GA" />
        <meta name="geo.placename" content="Panaji" />
        <meta name="geo.position" content="15.4989;73.8278" />
        <meta name="ICBM" content="15.4989, 73.8278" />
        
        {/* Schema.org markup */}
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
                ⭐ TOP UI/UX DESIGN AGENCY ⭐
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                Beautiful Design,
                <br />
                <span className="font-bold">Exceptional Experience</span>
              </h1>
              
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
                We create user-centered digital products that users love. 
                Our UI/UX design services help businesses increase conversions by <span className="font-semibold text-sky-600">up to 200%</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleWhatsAppRedirect('UI/UX Design')}
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#075E54', color: 'white' }}
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => handleWhatsAppRedirect('UI/UX Portfolio')}
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Why <span className="text-sky-500">UI/UX Design</span> Matters?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Great design isn't just about looks—it's about results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiuxBenefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 bg-white">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UI vs UX Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>
              UI Design <span className="text-sky-500">vs</span> UX Design
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Two sides of the same coin—both essential for success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: '#F8FAFC' }}>
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>UI Design</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>Focuses on the visual elements users interact with—colors, typography, buttons, and spacing.</p>
              <ul className="space-y-2">
                {['Visual Design', 'Color Theory', 'Typography', 'Iconography', 'Layout & Spacing', 'Animations'].map((item, idx) => (
                  <li key={idx} className="text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="#38BDF8" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: '#F8FAFC' }}>
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>UX Design</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>Focuses on how users feel and interact with your product—usability, accessibility, and satisfaction.</p>
              <ul className="space-y-2">
                {['User Research', 'Information Architecture', 'Wireframing', 'User Flows', 'Usability Testing', 'Accessibility'].map((item, idx) => (
                  <li key={idx} className="text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="#38BDF8" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Our <span className="font-bold">Design Process</span>
            </h2>
            <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
            <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>
              A proven, user-centered approach to design excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
              >
                <div className="text-4xl font-bold mb-3" style={{ color: '#38BDF8' }}>{step.number}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: '#4A5568' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Our <span className="font-bold">Recent Work</span>
            </h2>
            <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
              >
                <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
                  <div className="text-6xl transform transition-transform duration-300 group-hover:scale-110">
                    {item.image}
                  </div>
                </div>
                <div className="p-5">
                  <div className="inline-block px-2 py-1 rounded-full text-xs font-medium mb-2" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                    {item.category}
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: '#0F172A' }}>{item.name}</h3>
                  <p className="text-xs" style={{ color: '#4A5568' }}>📈 {item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools We Use */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl" style={{ backgroundColor: '#0F172A' }}>
            <div className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Tools We Use
              </h2>
              <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
                Industry-leading design tools for pixel-perfect results
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: 'Figma', icon: '🎨', color: '#F24E1E' },
                  { name: 'Adobe XD', icon: '🎨', color: '#FF61F6' },
                  { name: 'Sketch', icon: '✏️', color: '#F7B500' },
                  { name: 'InVision', icon: '👁️', color: '#FF3366' },
                  { name: 'Zeplin', icon: '📱', color: '#F5C542' },
                  { name: 'Miro', icon: '📊', color: '#FFD02F' }
                ].map((tool, idx) => (
                  <div key={idx} className="text-center transition-all duration-300 hover:scale-110">
                    <div className="text-4xl mb-2">{tool.icon}</div>
                    <div className="text-white font-medium text-sm">{tool.name}</div>
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
                  Get Started
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
          <div className="rounded-3xl p-12 text-center shadow-2xl transition-all duration-500 hover:scale-105" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Digital Product?
            </h2>
            <p className="text-xl mb-6 text-white/80">
              Let's create something beautiful together. Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppRedirect('UI/UX Design Consultation')}
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#075E54', color: 'white' }}
              >
                Free Consultation
              </button>
              <button
                onClick={() => handleWhatsAppRedirect('UI/UX Portfolio')}
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ border: '2px solid #38BDF8', color: '#38BDF8', backgroundColor: 'transparent' }}
              >
                View Our Portfolio
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

export default UIUXDesignPage;