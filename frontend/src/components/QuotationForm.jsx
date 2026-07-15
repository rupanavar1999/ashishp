// components/QuotationForm.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const QuotationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [generatedQuotation, setGeneratedQuotation] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Get preloaded services from navigation state or sessionStorage
  const getPreloadedServices = () => {
    const stateServices = location.state?.preloadedServices;
    if (stateServices && stateServices.length > 0) {
      return stateServices;
    }
    const savedServices = sessionStorage.getItem('quotationServices');
    if (savedServices) {
      return JSON.parse(savedServices);
    }
    return [{ name: '', quantity: 1, rate: 0, tax: 18, total: 0 }];
  };
  
  const [formData, setFormData] = useState({
    clientName: '',
    clientCompany: '',
    clientEmail: '',
    clientPhone: '',
    clientAddress: '',
    clientGST: '',
    projectName: '',
    services: getPreloadedServices()
  });
  
  const [gstBenefit, setGstBenefit] = useState({ show: false, benefit: 0, effectiveCost: 0 });

  // Available services from website
  const availableServices = [
    { name: 'Basic Business Website', rate: 12000, description: '5-page business website' },
    { name: 'Business Website', rate: 25000, description: '10-page business website' },
    { name: 'E-commerce Website', rate: 45000, description: 'Online store with payment gateway' },
    { name: 'Custom Web Application', rate: 50000, description: 'Custom web application development' },
    { name: 'SEO Services', rate: 10000, description: 'Monthly SEO services' },
    { name: 'Digital Marketing', rate: 15000, description: 'Monthly digital marketing' },
    { name: 'Social Media Marketing', rate: 20000, description: 'Monthly SMM services' },
    { name: 'Website Maintenance', rate: 10000, description: 'Monthly maintenance' },
    { name: 'Landing Page Design', rate: 12000, description: 'High-converting landing page' },
    { name: 'UI/UX Design', rate: 25000, description: 'Complete UI/UX design' }
  ];

  useEffect(() => {
    // Calculate GST benefit when GST number is entered
    if (formData.clientGST && formData.clientGST.length > 10) {
      const subtotal = calculateSubtotal();
      const gstAmount = calculateGST();
      setGstBenefit({
        show: true,
        benefit: gstAmount,
        effectiveCost: subtotal
      });
    } else {
      setGstBenefit({ show: false, benefit: 0, effectiveCost: 0 });
    }
  }, [formData.clientGST, formData.services]);

  const addService = () => {
    setFormData({
      ...formData,
      services: [...formData.services, { name: '', quantity: 1, rate: 0, tax: 18, total: 0 }]
    });
  };

  const addPredefinedService = (serviceName) => {
    const service = availableServices.find(s => s.name === serviceName);
    if (service) {
      const newService = {
        name: service.name,
        quantity: 1,
        rate: service.rate,
        tax: 18,
        total: service.rate * 1.18
      };
      setFormData({
        ...formData,
        services: [...formData.services, newService]
      });
    }
  };

  const removeService = (index) => {
    const newServices = formData.services.filter((_, i) => i !== index);
    setFormData({ ...formData, services: newServices });
  };

  const updateService = (index, field, value) => {
    const newServices = [...formData.services];
    newServices[index][field] = value;
    
    if (field === 'quantity' || field === 'rate' || field === 'tax') {
      const qty = field === 'quantity' ? parseFloat(value) : newServices[index].quantity;
      const rate = field === 'rate' ? parseFloat(value) : newServices[index].rate;
      const tax = field === 'tax' ? parseFloat(value) : newServices[index].tax;
      newServices[index].total = (qty * rate) * (1 + tax / 100);
    }
    
    setFormData({ ...formData, services: newServices });
  };

  const calculateSubtotal = () => {
    return formData.services.reduce((sum, service) => sum + (service.total || 0), 0);
  };

  const calculateGST = () => {
    return calculateSubtotal() * 0.18;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateGST();
  };

  const calculateAdvance = () => {
    return calculateTotal() * 0.5;
  };

  const calculateBalance = () => {
    return calculateTotal() - calculateAdvance();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.clientName || !formData.clientEmail || !formData.clientPhone || !formData.projectName) {
      alert('Please fill in all required fields');
      return;
    }
    
    const hasValidService = formData.services.some(s => s.name && s.rate > 0);
    if (!hasValidService) {
      alert('Please add at least one service');
      return;
    }
    
    setGenerating(true);
    
    const subtotal = calculateSubtotal();
    const gst = calculateGST();
    const totalAmount = calculateTotal();
    const advanceAmount = calculateAdvance();
    const balanceAmount = calculateBalance();
    
    const payload = {
      ...formData,
      subtotal,
      gst,
      totalAmount,
      advanceAmount,
      balanceAmount,
      discount: 0,
      services: formData.services.filter(s => s.name && s.rate > 0)
    };
    
    try {
      const response = await axios.post('http://localhost:5000/api/quotation', payload);
      setGeneratedQuotation(response.data.quotation);
      setShowSuccess(true);
      
      // Clear session storage after successful generation
      sessionStorage.removeItem('quotationServices');
      sessionStorage.removeItem('estimatedBudget');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating quotation: ' + (error.response?.data?.error || error.message));
    } finally {
      setGenerating(false);
    }
  };

  const downloadPDF = () => {
    if (generatedQuotation && generatedQuotation.pdfUrl) {
      window.open(`http://localhost:5000${generatedQuotation.pdfUrl}`, '_blank');
    }
  };

  const generateInvoice = async () => {
    if (!generatedQuotation) return;
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/api/invoice/${generatedQuotation._id}`, {
        paidAmount: generatedQuotation.advanceAmount
      });
      alert(`Invoice ${response.data.invoice.invoiceNumber} generated successfully!`);
      window.open(`http://localhost:5000${response.data.pdfUrl}`, '_blank');
    } catch (error) {
      console.error('Error generating invoice:', error);
      alert('Error generating invoice');
    } finally {
      setLoading(false);
    }
  };

  const totals = {
    subtotal: calculateSubtotal(),
    gst: calculateGST(),
    total: calculateTotal(),
    advance: calculateAdvance(),
    balance: calculateBalance()
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#0F172A' }}>Create Quotation</h1>
          <p className="text-gray-600">Fill in the details to generate a professional quotation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Client Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#0F172A' }}>Client Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Client Name *</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" value={formData.clientName} onChange={(e) => setFormData({...formData, clientName: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" value={formData.clientCompany} onChange={(e) => setFormData({...formData, clientCompany: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input type="email" required className="w-full px-3 py-2 border rounded-lg" value={formData.clientEmail} onChange={(e) => setFormData({...formData, clientEmail: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input type="tel" required className="w-full px-3 py-2 border rounded-lg" value={formData.clientPhone} onChange={(e) => setFormData({...formData, clientPhone: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea rows="2" className="w-full px-3 py-2 border rounded-lg" value={formData.clientAddress} onChange={(e) => setFormData({...formData, clientAddress: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">GST Number (Optional)</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" value={formData.clientGST} onChange={(e) => setFormData({...formData, clientGST: e.target.value})} placeholder="e.g., 27AAHCA1234F1ZR" />
                {gstBenefit.show && (
                  <div className="mt-2 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800 font-medium">💡 GST Benefit Available!</p>
                    <p className="text-xs text-green-700 mt-1">You can claim Input Tax Credit (ITC) of ₹{gstBenefit.benefit.toLocaleString()}</p>
                    <p className="text-xs text-green-700">Effective project cost after GST claim: ₹{gstBenefit.effectiveCost.toLocaleString()}</p>
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Project Name *</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-lg" value={formData.projectName} onChange={(e) => setFormData({...formData, projectName: e.target.value})} />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold" style={{ color: '#0F172A' }}>Services</h2>
              <button type="button" onClick={addService} className="px-3 py-1 text-sm rounded-full text-white" style={{ backgroundColor: '#38BDF8' }}>+ Custom Service</button>
            </div>
            
            {/* Quick Add Services */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-medium mb-2">Quick Add Services:</label>
              <div className="flex flex-wrap gap-2">
                {availableServices.map((service, idx) => (
                  <button key={idx} type="button" onClick={() => addPredefinedService(service.name)} className="px-3 py-1 text-xs rounded-full bg-gray-200 hover:bg-sky-500 hover:text-white transition">
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Service Name</th>
                    <th className="text-left py-2">Qty</th>
                    <th className="text-left py-2">Rate (₹)</th>
                    <th className="text-left py-2">Tax</th>
                    <th className="text-left py-2">Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {formData.services.map((service, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2"><input type="text" className="w-full px-2 py-1 border rounded" placeholder="Service name" value={service.name} onChange={(e) => updateService(index, 'name', e.target.value)} /></td>
                      <td className="py-2"><input type="number" className="w-20 px-2 py-1 border rounded" value={service.quantity} onChange={(e) => updateService(index, 'quantity', parseFloat(e.target.value) || 0)} /></td>
                      <td className="py-2"><input type="number" className="w-24 px-2 py-1 border rounded" value={service.rate} onChange={(e) => updateService(index, 'rate', parseFloat(e.target.value) || 0)} /></td>
                      <td className="py-2"><input type="number" className="w-20 px-2 py-1 border rounded" value={service.tax} onChange={(e) => updateService(index, 'tax', parseFloat(e.target.value) || 0)} /></td>
                      <td className="py-2">₹{service.total.toLocaleString()}</td>
                      <td className="py-2">{formData.services.length > 1 && <button type="button" onClick={() => removeService(index)} className="text-red-500">✕</button>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Quotation Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between"><span>Subtotal:</span><span>₹{totals.subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>GST (18%):</span><span>₹{totals.gst.toLocaleString()}</span></div>
              <div className="border-t border-white/20 my-2 pt-2">
                <div className="flex justify-between font-bold text-lg"><span>Total Amount:</span><span>₹{totals.total.toLocaleString()}</span></div>
                <div className="flex justify-between mt-2"><span>Advance Payment (50%):</span><span>₹{totals.advance.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Balance Amount:</span><span>₹{totals.balance.toLocaleString()}</span></div>
              </div>
            </div>
          </div>

          <button type="submit" disabled={generating} className="w-full py-3 rounded-full font-semibold transition-all hover:scale-105 disabled:opacity-50" style={{ backgroundColor: '#0F172A', color: 'white' }}>
            {generating ? 'Generating Quotation...' : 'Generate Quotation →'}
          </button>
        </form>

        {/* Success Modal */}
        {showSuccess && generatedQuotation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">✅</div>
                <h3 className="text-xl font-bold">Quotation Generated!</h3>
                <p className="text-gray-600 text-sm">Quotation #{generatedQuotation.quotationNumber}</p>
              </div>
              <div className="space-y-3 mb-4">
                <button onClick={downloadPDF} className="w-full py-2 rounded-full font-semibold text-white" style={{ backgroundColor: '#0F172A' }}>📄 Download PDF</button>
                <button onClick={generateInvoice} disabled={loading} className="w-full py-2 rounded-full font-semibold text-white" style={{ backgroundColor: '#10B981' }}>{loading ? 'Generating...' : '💰 Generate Invoice'}</button>
              </div>
              <button onClick={() => { setShowSuccess(false); navigate('/quotations'); }} className="w-full py-2 rounded-full font-semibold border">View All Quotations</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotationForm;