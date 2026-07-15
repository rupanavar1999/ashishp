// pages/HomePage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import AgencyStory from '../components/AgencyStory';
import ServicesOverview from '../components/ServicesOverview';
import FeaturedProjects from '../components/FeaturedProjects';
import ClientResults from '../components/ClientResults';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', component: HeroSection },
    { id: 'story', component: AgencyStory },
    { id: 'services', component: ServicesOverview },
    { id: 'projects', component: FeaturedProjects },
    { id: 'results', component: ClientResults },
    { id: 'testimonials', component: Testimonials },
    { id: 'cta', component: FinalCTA },

  ];

  // Schema markup for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ApexWeb Solutions",
    "url": " ",
    "logo": " /logo.png",
    "description": "Premium digital agency offering web development, SEO, and digital marketing services in India.",
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
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "India"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ApexWeb Solutions",
    "url": " ",
    "description": "Premium digital agency providing web development, SEO services, and digital marketing solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": " /search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ApexWeb Solutions - Digital Agency",
    "description": "Premium digital agency providing web development, SEO services, and digital marketing solutions in India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panaji",
      "addressRegion": "Goa",
      "addressCountry": "IN"
    },
    "priceRange": "₹15,000 - ₹1,00,000",
    "telephone": "+91- 98906-85066",
    "openingHours": "Mo-Fr 09:00-19:00",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>ApexWeb Solutions | #1 Digital Agency in India | Web Development, SEO, Marketing</title>
        <meta name="description" content="India's leading digital agency offering website development, SEO services, and digital marketing. 500+ websites delivered, 98% client satisfaction. Free consultation!" />
        <meta name="keywords" content="digital agency, web development company, website design services, SEO services, digital marketing agency, Google Ads services, social media marketing, WordPress development, Shopify development, UI UX design, ecommerce website development, local SEO services, performance marketing, lead generation, online marketing agency" />
        <meta name="author" content="ApexWeb Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://apexwebsitesolutions.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content=" " />
        <meta property="og:title" content="ApexWeb Solutions - #1 Digital Agency in India" />
        <meta property="og:description" content="Get a stunning website, rank higher on Google, and grow your business with our expert digital solutions. Free consultation available!" />
        <meta property="og:image" content=" /og-image-home.jpg" />
        <meta property="og:site_name" content="ApexWeb Solutions" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content=" " />
        <meta name="twitter:title" content="ApexWeb Solutions - #1 Digital Agency in India" />
        <meta name="twitter:description" content="Premium digital solutions for business growth. Get your free consultation today!" />
        <meta name="twitter:image" content=" /twitter-image-home.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-GA" />
        <meta name="geo.placename" content="Panaji" />
        <meta name="geo.position" content="15.4989;73.8278" />
        <meta name="ICBM" content="15.4989, 73.8278" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="homepage-container">
        {/* Progress indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="flex flex-col gap-3">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                className="progress-dot"
                style={{
                  backgroundColor: activeSection === idx ? '#38BDF8' : '#E2E8F0',
                  width: activeSection === idx ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                }}
                onClick={() => {
                  sectionsRef.current[idx]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                aria-label={`Go to ${section.id} section`}
              />
            ))}
          </div>
        </div>

        {/* Sections - No animations */}
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          
          return (
            <section
              key={section.id}
              ref={(el) => {
                sectionsRef.current[index] = el;
              }}
              className="page-section"
              id={`section-${section.id}`}
            >
              <SectionComponent />
            </section>
          );
        })}

        <style>{`
          .homepage-container {
            overflow-x: hidden;
            scroll-behavior: smooth;
          }

          .page-section {
            position: relative;
            width: 100%;
            min-height: 100vh;
          }

          /* Progress dot styles */
          .progress-dot {
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .progress-dot:hover {
            background-color: #38BDF8 !important;
            width: 32px !important;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: #38BDF8;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #0F172A;
          }
        `}</style>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;