// pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | ApexWeb Solutions</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to explore our digital services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-white pt-32 pb-24 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="text-9xl font-bold mb-4" style={{ color: '#38BDF8' }}>404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="px-6 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: '#0F172A', color: 'white' }}>
                Go to Homepage
              </button>
            </Link>
            <Link to="/services">
              <button className="px-6 py-3 rounded-full font-medium transition-all hover:scale-105" style={{ border: '2px solid #0F172A', color: '#0F172A', backgroundColor: 'transparent' }}>
                View Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;