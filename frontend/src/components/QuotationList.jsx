// components/QuotationList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuotationList = () => {
  const [quotations, setQuotations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  useEffect(() => {
    fetchQuotations();
  }, []);

  const fetchQuotations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quotations');
      setQuotations(response.data.quotations);
    } catch (error) {
      console.error('Error fetching quotations:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateInvoice = async (quotationId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/invoice/${quotationId}`, {
        paidAmount: parseFloat(invoiceAmount)
      });
      alert('Invoice generated successfully! Check your email.');
      setSelectedQuotation(null);
      fetchQuotations();
    } catch (error) {
      console.error('Error generating invoice:', error);
      alert('Error generating invoice. Please try again.');
    }
  };

  const sendWhatsApp = async (type, id) => {
    if (!whatsappNumber) {
      alert('Please enter WhatsApp number');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/api/whatsapp/${type}/${id}?phone=${whatsappNumber}`);
      window.open(response.data.whatsappUrl, '_blank');
    } catch (error) {
      console.error('Error sending WhatsApp:', error);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#F59E0B';
      case 'approved': return '#10B981';
      default: return '#6B7280';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6" style={{ color: '#0F172A' }}>Quotations</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Quotation No</th>
              <th className="px-6 py-3 text-left">Client</th>
              <th className="px-6 py-3 text-left">Project</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotations.map((quotation) => (
              <tr key={quotation._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-sm">{quotation.quotationNumber}</td>
                <td className="px-6 py-4">{quotation.clientName}</td>
                <td className="px-6 py-4">{quotation.projectName}</td>
                <td className="px-6 py-4">₹{quotation.totalAmount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: getStatusColor(quotation.quotationStatus) }}>
                    {quotation.quotationStatus}
                  </span>
                </td>
                <td className="px-6 py-4">{new Date(quotation.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {quotation.pdfUrl && (
                      <a href={`http://localhost:5000${quotation.pdfUrl}`} target="_blank" rel="noopener noreferrer"
                        className="px-2 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600">
                        PDF
                      </a>
                    )}
                    {quotation.quotationStatus === 'pending' && (
                      <button
                        onClick={() => setSelectedQuotation(quotation)}
                        className="px-2 py-1 text-sm rounded bg-green-500 text-white hover:bg-green-600"
                      >
                        Create Invoice
                      </button>
                    )}
                    <button
                      onClick={() => {
                        const number = prompt('Enter WhatsApp number (with country code):');
                        if (number) sendWhatsApp('quotation', quotation._id, number);
                      }}
                      className="px-2 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
                    >
                      WhatsApp
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invoice Modal */}
      {selectedQuotation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Generate Invoice</h3>
            <p className="text-gray-600 mb-2">
              Quotation: {selectedQuotation.quotationNumber}
            </p>
            <p className="text-gray-600 mb-4">
              Total Amount: ₹{selectedQuotation.totalAmount.toLocaleString()}
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Amount Paid (₹)</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg"
                value={invoiceAmount}
                onChange={(e) => setInvoiceAmount(e.target.value)}
                placeholder={`Min: ${selectedQuotation.advanceAmount}`}
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum advance payment: ₹{selectedQuotation.advanceAmount.toLocaleString()}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => generateInvoice(selectedQuotation._id)}
                className="flex-1 py-2 rounded-full font-semibold text-white"
                style={{ backgroundColor: '#0F172A' }}
              >
                Generate Invoice
              </button>
              <button
                onClick={() => setSelectedQuotation(null)}
                className="flex-1 py-2 rounded-full font-semibold border"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationList;