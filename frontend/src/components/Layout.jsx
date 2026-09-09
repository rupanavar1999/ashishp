// components/Layout.jsx
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white" style={{ backgroundColor: 'white' }}>
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
          style={{ backgroundColor: '#0F172A' }}
        >
          <div className="text-center">
            <div className="text-4xl font-light tracking-wider text-white mb-4" role="status" aria-label="ApexWeb Solutions">
              APEXWEB
            </div>
            <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        </div>
      )}
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;