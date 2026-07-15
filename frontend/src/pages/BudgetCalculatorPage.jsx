// pages/BudgetCalculatorPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BudgetCalculatorPage = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({
    websiteType: '',
    websiteTypeName: '',
    pages: '',
    pagesCount: '',
    seo: false,
    digitalMarketing: false,
    socialMediaMarketing: false,
  });

  const calculateBudget = () => {
    let base = 0;
    let websiteTypeName = '';
    
    switch(selectedOptions.websiteType) {
      case 'basic': 
        base = 12000;
        websiteTypeName = 'Basic Business Website';
        break;
      case 'business': 
        base = 25000;
        websiteTypeName = 'Business Website';
        break;
      case 'ecommerce': 
        base = 45000;
        websiteTypeName = 'E-commerce Website';
        break;
      case 'custom': 
        base = 50000;
        websiteTypeName = 'Custom Web Application';
        break;
      default: base = 0;
    }
    
    let pagesCount = 0;
    let pagesCost = 0;
    if (selectedOptions.pages === '5-10') {
      pagesCost = 12000;
      pagesCount = 5;
    }
    if (selectedOptions.pages === '11-20') {
      pagesCost = 25000;
      pagesCount = 11;
    }
    if (selectedOptions.pages === '20+') {
      pagesCost = 30000;
      pagesCount = 20;
    }
    
    const seoCost = selectedOptions.seo ? 10000 : 0;
    const digitalCost = selectedOptions.digitalMarketing ? 15000 : 0;
    const socialCost = selectedOptions.socialMediaMarketing ? 20000 : 0;
    
    const total = base + pagesCost + seoCost + digitalCost + socialCost;
    
    return { total, base, pagesCost, seoCost, digitalCost, socialCost, websiteTypeName, pagesCount };
  };

  const handleGetQuote = () => {
    const budgetDetails = calculateBudget();
    
    // Prepare services based on selections
    const services = [];
    
    if (budgetDetails.websiteTypeName) {
      services.push({
        name: budgetDetails.websiteTypeName,
        quantity: 1,
        rate: budgetDetails.base,
        tax: 18,
        total: budgetDetails.base * 1.18
      });
    }
    
    if (budgetDetails.pagesCount > 0) {
      services.push({
        name: `${budgetDetails.pagesCount}+ Pages Development`,
        quantity: 1,
        rate: budgetDetails.pagesCost,
        tax: 18,
        total: budgetDetails.pagesCost * 1.18
      });
    }
    
    if (selectedOptions.seo) {
      services.push({
        name: 'SEO Services (Monthly)',
        quantity: 1,
        rate: 10000,
        tax: 18,
        total: 10000 * 1.18
      });
    }
    
    if (selectedOptions.digitalMarketing) {
      services.push({
        name: 'Digital Marketing (Monthly)',
        quantity: 1,
        rate: 15000,
        tax: 18,
        total: 15000 * 1.18
      });
    }
    
    if (selectedOptions.socialMediaMarketing) {
      services.push({
        name: 'Social Media Marketing (Monthly)',
        quantity: 1,
        rate: 20000,
        tax: 18,
        total: 20000 * 1.18
      });
    }
    
    // Store in sessionStorage for persistence
    sessionStorage.setItem('quotationServices', JSON.stringify(services));
    sessionStorage.setItem('estimatedBudget', budgetDetails.total.toString());
    
    navigate('/quotation', { 
      state: { 
        estimatedBudget: budgetDetails.total,
        preloadedServices: services
      } 
    });
  };

  const budgetDetails = calculateBudget();

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#0F172A' }}>
            Budget <span className="font-bold">Calculator</span>
          </h1>
          <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: '#38BDF8' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5568' }}>
            Get an instant estimate for your digital project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>Website Type</label>
              <select
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                style={{ borderColor: '#E2E8F0', backgroundColor: 'white' }}
                onChange={(e) => setSelectedOptions({
                  ...selectedOptions, 
                  websiteType: e.target.value,
                  websiteTypeName: e.target.options[e.target.selectedIndex]?.text
                })}
              >
                <option value="">Select type</option>
                <option value="basic">Basic Business Website (₹12,000+)</option>
                <option value="business">Business Website (₹25,000+)</option>
                <option value="ecommerce">E-commerce Website (₹45,000+)</option>
                <option value="custom">Custom Web Application (₹50,000+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#0F172A' }}>Number of Pages</label>
              <select
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ borderColor: '#E2E8F0', backgroundColor: 'white' }}
                onChange={(e) => setSelectedOptions({...selectedOptions, pages: e.target.value})}
              >
                <option value="">Select pages</option>
                <option value="1-5">1-5 pages</option>
                <option value="5-10">5-10 pages (+₹12,000)</option>
                <option value="11-20">11-20 pages (+₹25,000)</option>
                <option value="20+">20+ pages (+₹30,000)</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded"
                  style={{ accentColor: '#0F172A' }}
                  onChange={(e) => setSelectedOptions({...selectedOptions, seo: e.target.checked})}
                />
                <span style={{ color: '#0F172A' }}>SEO Services (+₹10,000/month)</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded"
                  style={{ accentColor: '#0F172A' }}
                  onChange={(e) => setSelectedOptions({...selectedOptions, digitalMarketing: e.target.checked})}
                />
                <span style={{ color: '#0F172A' }}>Digital Marketing (+₹15,000/month)</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded"
                  style={{ accentColor: '#0F172A' }}
                  onChange={(e) => setSelectedOptions({...selectedOptions, socialMediaMarketing: e.target.checked})}
                />
                <span style={{ color: '#0F172A' }}>Social Media Marketing (+₹20,000/month)</span>
              </label>
            </div>
            
            {/* Price Breakdown */}
            {budgetDetails.total > 0 && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Price Breakdown:</h4>
                <div className="space-y-1 text-sm">
                  {budgetDetails.base > 0 && <div className="flex justify-between"><span>Base Website:</span><span>₹{budgetDetails.base.toLocaleString()}</span></div>}
                  {budgetDetails.pagesCost > 0 && <div className="flex justify-between"><span>Pages Cost:</span><span>₹{budgetDetails.pagesCost.toLocaleString()}</span></div>}
                  {selectedOptions.seo && <div className="flex justify-between"><span>SEO Services:</span><span>₹10,000/month</span></div>}
                  {selectedOptions.digitalMarketing && <div className="flex justify-between"><span>Digital Marketing:</span><span>₹15,000/month</span></div>}
                  {selectedOptions.socialMediaMarketing && <div className="flex justify-between"><span>Social Media:</span><span>₹20,000/month</span></div>}
                </div>
              </div>
            )}
          </div>

          {/* Pricing Card */}
          <div>
            <div className="rounded-2xl shadow-2xl p-8 text-center" style={{ backgroundColor: '#0F172A' }}>
              <h3 className="text-2xl font-light mb-4 text-white">Estimated Investment</h3>
              <div className="text-5xl md:text-6xl font-bold mb-6 text-white">
                ₹{budgetDetails.total.toLocaleString()}
              </div>
              <p className="text-white/70 mb-8">One-time setup + monthly retainer as selected</p>
              <button 
                onClick={handleGetQuote}
                className="w-full px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}
              >
                Get Detailed Quote →
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                *Final price may vary based on specific requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculatorPage;