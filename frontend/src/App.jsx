// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage';
import SEOPage from './pages/SEOPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage.jsx';
import GoogleBusinessPage from './pages/GoogleBusinessPage';
import PerformanceMarketingPage from './pages/PerformanceMarketingPage';
import BudgetCalculatorPage from './pages/BudgetCalculatorPage';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import UIUXDesignPage from './pages/UIUXDesignPage';
import LandingPage from './pages/LandingPageDesignPage.jsx';
import MaintenancePage from './pages/WebsiteMaintenancePage.jsx';
import ScrollToTop from './components/ScrollToTop';
import QuotationForm from './components/QuotationForm.jsx';
import QuotationList from './components/QuotationList.jsx';
import AboutUsPage from './pages/About.jsx';
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThnakYou.jsx';
import SEONewPages from './pages/SEONewPages.jsx';
import WebsiteNewPages from './pages/WebsiteNewPages.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/budget-calculator" element={<BudgetCalculatorPage />} />
          
          {/* Service Pages */}
          <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="/services/google-business-profile" element={<GoogleBusinessPage />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
          <Route path="/services/landing-page-design" element={<LandingPage />} />
          <Route path="/services/website-maintenance" element={<MaintenancePage />} />  
          
          {/* Dynamic SEO pages - LAST */}
          <Route path="/seo/:slug" element={<SEONewPages />} />
          <Route path="/website/:slug" element={<WebsiteNewPages />} />
          

          {/* Quotation Routes */}
          <Route path="/quotation" element={<QuotationForm />} />
          <Route path="/quotations" element={<QuotationList />} />
          
          {/* 404 Page - Must be LAST */}
          <Route path="*" element={<NotFound />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;