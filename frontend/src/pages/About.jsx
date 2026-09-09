import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });
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

    const targets = [500, 300, 10, 98];
    const increments = targets.map(t => t / steps);
    let currentCounts = [0, 0, 0, 0];

    const timer = setInterval(() => {
      currentStep++;
      currentCounts = currentCounts.map((count, idx) => {
        let newCount = Math.min(count + increments[idx], targets[idx]);
        return idx === 3 ? Math.floor(newCount) : Math.floor(newCount);
      });
      setCounters({
        projects: currentCounts[0],
        clients: currentCounts[1],
        years: currentCounts[2],
        satisfaction: currentCounts[3]
      });

      if (currentStep >= steps) {
        setCounters({ projects: 500, clients: 300, years: 10, satisfaction: 98 });
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [statsInView]);

  // WhatsApp redirect
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919890685066";
    const message = "Hello! I'm interested in learning more about ApexWeb Solutions. Could you please share more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const teamMembers = [
    { name: 'Ashish Rupanavar', role: 'Founder & CEO', icon: '👨‍💻', bio: '10+ years of experience in web development and digital marketing' },
    { name: 'Priya Sharma', role: 'Lead Developer', icon: '👩‍💻', bio: 'Full-stack expert specializing in React and Node.js' },
    { name: 'Rajesh Mehta', role: 'SEO Director', icon: '📈', bio: 'SEO specialist with 500+ successful campaigns' },
    { name: 'Anita Desai', role: 'Creative Head', icon: '🎨', bio: 'UI/UX designer with award-winning portfolio' }
  ];

  const values = [
    { icon: '💎', title: 'Excellence', description: 'We strive for perfection in every project we deliver' },
    { icon: '🤝', title: 'Integrity', description: 'Honest and transparent communication with clients' },
    { icon: '🚀', title: 'Innovation', description: 'Embracing cutting-edge technologies and trends' },
    { icon: '❤️', title: 'Client First', description: 'Your success is our ultimate goal' }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started our journey in Goa' },
    { year: '2022', title: 'First 50+ Clients', description: 'Reached 100+ happy clients milestone' },
    { year: '2024', title: 'Expansion', description: 'Opened second office in Mumbai' },
    { year: '2026', title: '500+ Projects', description: 'Delivered 500+ successful projects' }
  ];

  // Schema markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexWeb Solutions",
    "url": "https://apexwebsitesolutions.in/",
    "logo": "https://apexwebsitesolutions.in/logo.png",
    "description": "Premium digital agency offering web development, SEO, and digital marketing services in India.",
    "founder": {
      "@type": "Person",
      "name": "Ashish Rupanavar"
    },
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panaji",
      "addressRegion": "Goa",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98906-85066",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://linkedin.com/company/apexweb",
      "https://twitter.com/apexweb",
      "https://facebook.com/apexweb",
      "https://instagram.com/apexweb"
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://apexwebsitesolutions.in/about#webpage",
    "url": "https://apexwebsitesolutions.in/about",
    "name": "About ApexWeb Solutions | Website Development & Digital Marketing Agency",
    "description": "Learn about ApexWeb Solutions, our journey, mission, team, and digital agency services.",
    "isPartOf": {
      "@id": "https://apexwebsitesolutions.in/#website"
    },
    "breadcrumb": {
      "@id": "https://apexwebsitesolutions.in/about#breadcrumb"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://apexwebsitesolutions.in/about#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://apexwebsitesolutions.in/" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://apexwebsitesolutions.in/about" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About ApexWeb Solutions | Website Development & Digital Marketing Agency</title>
        <meta name="title" content="About ApexWeb Solutions | Website Development & Digital Marketing Agency" />
        <meta
          name="description"
          content="Learn about ApexWeb Solutions, a professional website development and digital marketing agency. We help businesses grow with web development, SEO, Google Ads, social media marketing, and custom digital solutions."
        />
        <meta
          name="keywords"
          content="about ApexWeb Solutions, website development company, digital marketing agency, SEO company, WordPress development, Google Ads services, social media marketing, web design company, digital solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://apexwebsitesolutions.in/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apexwebsitesolutions.in/about" />
        <meta property="og:title" content="About ApexWeb Solutions | Website Development & Digital Marketing Agency" />
        <meta
          property="og:description"
          content="Learn about ApexWeb Solutions and how we help businesses grow with professional website development, SEO, Google Ads, and digital marketing services."
        />
        <meta property="og:image" content="https://apexwebsitesolutions.in/og-image.jpg" />
        <meta property="og:site_name" content="ApexWeb Solutions" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://apexwebsitesolutions.in/about" />
        <meta name="twitter:title" content="About ApexWeb Solutions | Digital Agency" />
        <meta
          name="twitter:description"
          content="Discover our journey, expertise, and commitment to delivering professional website development and digital marketing solutions."
        />
        <meta name="twitter:image" content="https://apexwebsitesolutions.in/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section ref={heroRef} className="text-center mb-16">
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                OUR STORY
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6" style={{ color: '#0F172A' }}>
                About <span className="font-bold">ApexWeb Solutions</span>
              </h1>
              <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
                We are a team of passionate digital experts dedicated to helping businesses grow online.
                <span className="font-semibold text-sky-600"> 10+ years of excellence and 500+ successful projects.</span>
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section ref={statsRef} className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { value: statsInView ? counters.projects : 0, suffix: '+', label: 'Projects Completed', icon: '✅' },
              { value: statsInView ? counters.clients : 0, suffix: '+', label: 'Happy Clients', icon: '😊' },
              { value: statsInView ? counters.years : 0, suffix: '+', label: 'Years Experience', icon: '📅' },
              { value: statsInView ? counters.satisfaction : 0, suffix: '%', label: 'Client Satisfaction', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0F172A' }}>{stat.value}{stat.suffix}</div>
                <div className="text-sm font-medium" style={{ color: '#4A5568' }}>{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Our Story Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Our <span className="text-sky-500">Journey</span></h2>
                <div className="w-16 h-px mb-6" style={{ backgroundColor: '#38BDF8' }} />
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2020, ApexWeb Solutions started as a small team of passionate developers with a vision 
                  to help businesses establish a strong digital presence. Over the years, we've grown into a full-service 
                  digital agency serving clients across India and internationally.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our journey has been marked by continuous learning, innovation, and a commitment to delivering 
                  exceptional results. We've had the privilege of working with over 300 clients, from startups to 
                  established enterprises, helping them achieve their digital goals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to be recognized as one of India's leading digital agencies, with a team of 
                  experts dedicated to your success.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="p-4 rounded-xl text-center" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-2xl font-bold text-sky-600">{milestone.year}</div>
                    <div className="font-semibold mt-1" style={{ color: '#0F172A' }}>{milestone.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{milestone.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that drive growth, 
                  enhance brand visibility, and deliver measurable results. We strive to be the 
                  most trusted digital partner for our clients.
                </p>
              </div>
              <div className="rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div className="text-5xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India's most innovative and reliable digital agency, recognized for excellence, 
                  integrity, and transformative impact on businesses worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Our Core <span className="text-sky-500">Values</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                  <div className="text-5xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          {/* <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>Meet Our <span className="text-sky-500">Leadership Team</span></h2>
              <div className="w-20 h-px mx-auto" style={{ backgroundColor: '#38BDF8' }} />
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">The experts behind our success</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}>
                  <div className="text-5xl mb-3">{member.icon}</div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#0F172A' }}>{member.name}</h3>
                  <div className="text-sm text-sky-600 mb-2">{member.role}</div>
                  <p className="text-xs text-gray-500">{member.bio}</p>
                </div>
              ))}
            </div>
          </section> */}

          {/* Why Choose Us */}
          <section className="mb-20">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#0F172A' }}>
              <div className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose <span className="text-sky-400">Us?</span></h2>
                <div className="w-20 h-px mx-auto mb-8" style={{ backgroundColor: '#38BDF8' }} />
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: 'Expert Team', desc: 'Certified professionals with years of experience', icon: '👨‍💻' },
                    { title: 'Client-Centric', desc: 'Solutions tailored to your business needs', icon: '❤️' },
                    { title: 'Result-Driven', desc: 'Focus on measurable outcomes and ROI', icon: '📈' }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-5xl mb-3">{item.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="rounded-2xl p-10" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>Ready to Work Together?</h3>
              <p className="text-gray-600 mb-4">Let's discuss how we can help your business grow</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#075E54', color: 'white' }}
                >
                  Start a Project
                </button>
                <Link to="/contact">
                  <button
                    className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: '#0F172A', color: 'white' }}
                  >
                    Contact Us →
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;