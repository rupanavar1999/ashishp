// components/FeaturedProjects.jsx
import React, { useEffect, useRef, useState } from 'react';

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Luxury Real Estate Platform',
      category: 'Website Development',
      result: '300% increase in leads',
      image: '🏰',
      description: 'A premium real estate platform that connects luxury property buyers with sellers. Features include virtual tours, AI-powered property recommendations, and seamless booking system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      client: 'Elite Estates Group',
      duration: '3 months'
    },
    {
      title: 'E-commerce Fashion Brand',
      category: 'SEO & Marketing',
      result: '450% organic growth',
      image: '👗',
      description: 'Complete digital transformation for a leading fashion brand. Achieved #1 rankings for 500+ keywords and increased revenue by 300%.',
      technologies: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
      client: 'FashionHub',
      duration: '6 months'
    },
    {
      title: 'Corporate Banking Solution',
      category: 'Web Application',
      result: '2M+ transactions processed',
      image: '🏦',
      description: 'Enterprise-grade banking solution with advanced security features, real-time transaction monitoring, and intuitive dashboard for financial management.',
      technologies: ['Angular', 'Java', 'PostgreSQL', 'AWS'],
      client: 'Global Finance Bank',
      duration: '8 months'
    }
  ];

  // Coding Languages & AI Tools Section Data
  const codingLanguages = [
    { name: 'React.js', icon: '⚛️', level: 'Expert', color: '#61DAFB', projects: 45 },
    { name: 'Node.js', icon: '💚', level: 'Expert', color: '#68A063', projects: 38 },
    { name: 'Python', icon: '🐍', level: 'Advanced', color: '#3776AB', projects: 32 },
    { name: 'JavaScript', icon: '📜', level: 'Expert', color: '#F7DF1E', projects: 52 },
    { name: 'TypeScript', icon: '📘', level: 'Advanced', color: '#3178C6', projects: 28 },
    { name: 'PHP', icon: '🐘', level: 'Advanced', color: '#777BB4', projects: 25 },
    // { name: 'Java', icon: '☕', level: 'Expert', color: '#007396', projects: 30 },
    { name: 'Next.js', icon: '▲', level: 'Advanced', color: '#000000', projects: 22 },
    {
      name: 'WordPress',
      icon: 'W',
      level: 'Advanced',
      color: '#21759B',
      projects: 22
    },
    {
      name: 'Shopify',
      icon: '🛍️',
      level: 'Advanced',
      color: '#95BF47',
      projects: 22
    },

  ];

  const aiTools = [
    { name: 'OpenAI GPT-4', icon: '🤖', use: 'Content Generation, Chatbots', projects: 15 },
    { name: 'Claude AI', icon: '🧠', use: 'Code Assistant, Documentation', projects: 12 },
    { name: 'Midjourney', icon: '🎨', use: 'Image Generation, UI Design', projects: 18 },
    { name: 'TensorFlow', icon: '🔷', use: 'ML Models, Predictions', projects: 8 },
    { name: 'GitHub Copilot', icon: '👨‍💻', use: 'Code Acceleration', projects: 35 },
    { name: 'DALL-E', icon: '🖼️', use: 'Visual Content Creation', projects: 14 }
  ];

  // WhatsApp redirect
  const handleWhatsAppRedirect = (projectTitle) => {
    const phoneNumber = "919890685066";
    const message = `Hello! I'm interested in learning more about the "${projectTitle}" project. Could you please share more details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
            OUR SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#0F172A' }}>
            Featured <span className="font-bold">Projects</span>
          </h2>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences with cutting-edge technology
          </p>
        </div>

        {/* Project Showcase - Card Style */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: 'white', border: '1px solid #E2E8F0' }}
            >
              {/* Image/Icon Section */}
              <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
                <div className="text-7xl transition-transform duration-500 group-hover:scale-110">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.duration}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-sky-600 transition-colors" style={{ color: '#0F172A' }}>
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-lg font-bold text-sky-600">{project.result}</div>
                  <div className="text-xs text-gray-400 mt-1">Client: {project.client}</div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#F8FAFC', color: '#4A5568' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleWhatsAppRedirect(project.title)}
                  className="w-full px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#0F172A', color: 'white' }}
                >
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coding Languages Section */}
        <div className="mb-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
              OUR TECH STACK
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              Coding Languages & <span className="font-bold">Technologies</span>
            </h2>
            <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use the most modern and powerful technologies to build exceptional digital products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {codingLanguages.map((lang, idx) => (
              <div
                key={idx}
                className="group text-center p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  {lang.icon}
                </div>
                <div className="font-semibold text-sm" style={{ color: '#0F172A' }}>{lang.name}</div>
                <div className="text-xs mt-1" style={{ color: '#38BDF8' }}>{lang.level}</div>
                <div className="text-xs text-gray-400 mt-1">{lang.projects}+ projects</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
              AI-POWERED DEVELOPMENT
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0F172A' }}>
              AI Tools We <span className="font-bold">Leverage</span>
            </h2>
            <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrating cutting-edge AI tools to deliver faster, smarter, and more innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: '#0F172A' }}>{tool.name}</div>
                  <div className="text-xs text-gray-500">{tool.use}</div>
                  <div className="text-xs text-sky-500 mt-1">{tool.projects}+ projects</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Projects Completed', icon: '✅' },
            { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { value: '30+', label: 'Happy Clients', icon: '😊' },
            { value: '4.9', label: 'Google Rating', icon: '🏆' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#0F172A' }}>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Ready to Build Your Next Project?
            </h3>
            <p className="text-gray-300 mb-4">
              Let's discuss how we can use our expertise to bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppRedirect('New Project')}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#075E54', color: 'white' }}
              >
                💬 Start a Project on WhatsApp
              </button>
              <button
                onClick={() => handleWhatsAppRedirect('Technical Consultation')}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}
              >
                🚀 Get Technical Consultation
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .hover\\:-translate-y-2:hover {
          transform: translateY(-8px);
        }
        
        .hover\\:-translate-y-1:hover {
          transform: translateY(-4px);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\\:text-sky-600 {
          color: #0284C7;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;