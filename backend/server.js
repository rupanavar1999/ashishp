// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/invoices', express.static('invoices'));
app.use('/logos', express.static('logos'));

// Create directories
const dirs = ['./uploads', './invoices', './logos'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/quotation_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB error:', err.message));

// ==================== SCHEMAS ====================

const quotationSchema = new mongoose.Schema({
  quotationNumber: { type: String, unique: true },
  clientName: { type: String, required: true },
  clientCompany: String,
  clientEmail: { type: String, required: true },
  clientPhone: { type: String, required: true },
  clientAddress: String,
  clientGST: String,
  projectName: { type: String, required: true },
  services: [{
    name: String,
    quantity: Number,
    rate: Number,
    tax: Number,
    total: Number
  }],
  subtotal: Number,
  gst: Number,
  totalAmount: Number,
  advanceAmount: Number,
  balanceAmount: Number,
  discount: { type: Number, default: 0 },
  quotationStatus: { type: String, default: 'pending' },
  pdfUrl: String,
  validUntil: Date,
  createdAt: { type: Date, default: Date.now }
});

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, unique: true },
  quotationReference: { type: mongoose.Schema.Types.ObjectId, ref: 'Quotation' },
  clientName: String,
  clientEmail: String,
  services: Array,
  totalAmount: Number,
  paidAmount: { type: Number, default: 0 },
  pendingAmount: Number,
  paymentStatus: { type: String, default: 'pending' },
  paymentDate: Date,
  invoicePdfUrl: String,
  createdAt: { type: Date, default: Date.now }
});

const Quotation = mongoose.model('Quotation', quotationSchema);
const Invoice = mongoose.model('Invoice', invoiceSchema);

// ==================== HELPER FUNCTIONS ====================

async function generateQuotationNumber() {
  const year = new Date().getFullYear();
  const count = await Quotation.countDocuments();
  return `QUO-${year}-${String(count + 1).padStart(4, '0')}`;
}

async function generateInvoiceNumber() {
  const year = new Date().getFullYear();
  const count = await Invoice.countDocuments();
  return `INV-${year}-${String(count + 1).padStart(4, '0')}`;
}

// Professional PDF Generation
async function generateQuotationPDF(quotation) {
  return new Promise((resolve, reject) => {
    const fileName = `${quotation.quotationNumber}.pdf`;
    const filePath = path.join(__dirname, 'uploads', fileName);
    
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    
    let yPosition = 50;
    
    // Logo
    const logoPath = path.join(__dirname, 'logos', 'logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 50, yPosition, { width: 80 });
    } else {
      doc.fontSize(20).font('Helvetica-Bold').fillColor('#0F172A').text('APEXWEB', 50, yPosition);
    }
    
    // Company Details (Right side)
    doc.fontSize(10).font('Helvetica').fillColor('#4A5568');
    doc.text('ApexWeb Solutions', 400, yPosition, { align: 'right' });
    doc.text('Kalamboli Navi Mumbai', 400, yPosition + 15, { align: 'right' });
    doc.text('Sector 2E, Panvel', 400, yPosition + 30, { align: 'right' });
    doc.text('Maharashtra 410218', 400, yPosition + 45, { align: 'right' });
    doc.text('Phone: +91 98765 43210', 400, yPosition + 60, { align: 'right' });
    doc.text('Email: hello@apexweb.com', 400, yPosition + 75, { align: 'right' });
    doc.text('Web: www.apexweb.com', 400, yPosition + 90, { align: 'right' });
    doc.text('GST: 27AAHCA1234F1ZR', 400, yPosition + 105, { align: 'right' });
    
    yPosition = 180;
    
    // Horizontal Line
    doc.strokeColor('#E2E8F0').lineWidth(1).moveTo(50, yPosition).lineTo(550, yPosition).stroke();
    yPosition += 20;
    
    // QUOTATION Title
    doc.fontSize(22).font('Helvetica-Bold').fillColor('#38BDF8').text('QUOTATION', 50, yPosition);
    
    // Quotation Details (Right side)
    doc.fontSize(10).font('Helvetica').fillColor('#0F172A');
    doc.text(`Quotation No: ${quotation.quotationNumber}`, 350, yPosition);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 350, yPosition + 15);
    const validDate = new Date();
    validDate.setDate(validDate.getDate() + 15);
    doc.text(`Valid Until: ${validDate.toLocaleDateString()}`, 350, yPosition + 30);
    
    yPosition += 60;
    
    // Client Details
    doc.fontSize(12).font('Helvetica-Bold').fillColor('#0F172A').text('Bill To:', 50, yPosition);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Name: ${quotation.clientName}`, 50, yPosition + 20);
    if (quotation.clientCompany) doc.text(`Company: ${quotation.clientCompany}`, 50, yPosition + 35);
    doc.text(`Email: ${quotation.clientEmail}`, 50, yPosition + 50);
    doc.text(`Phone: ${quotation.clientPhone}`, 50, yPosition + 65);
    if (quotation.clientAddress) doc.text(`Address: ${quotation.clientAddress}`, 50, yPosition + 80);
    if (quotation.clientGST) doc.text(`GSTIN: ${quotation.clientGST}`, 50, yPosition + 95);
    
    yPosition += 130;
    
    // Services Table Header
    doc.fontSize(10).font('Helvetica-Bold').fillColor('#0F172A');
    doc.rect(50, yPosition, 500, 25).fill('#F8FAFC').stroke();
    doc.fillColor('#0F172A');
    doc.text('Service', 60, yPosition + 8);
    doc.text('Qty', 280, yPosition + 8);
    doc.text('Rate (₹)', 340, yPosition + 8);
    doc.text('Tax', 410, yPosition + 8);
    doc.text('Amount (₹)', 470, yPosition + 8);
    
    let tableY = yPosition + 25;
    doc.font('Helvetica');
    quotation.services.forEach((service, index) => {
      if (tableY > 700) {
        doc.addPage();
        tableY = 50;
      }
      doc.rect(50, tableY, 500, 25).stroke();
      doc.text(service.name.length > 35 ? service.name.substring(0, 32) + '...' : service.name, 60, tableY + 8);
      doc.text(service.quantity.toString(), 290, tableY + 8);
      doc.text(`₹${service.rate.toLocaleString()}`, 350, tableY + 8);
      doc.text(`${service.tax}%`, 420, tableY + 8);
      doc.text(`₹${service.total.toLocaleString()}`, 480, tableY + 8);
      tableY += 25;
    });
    
    tableY += 10;
    
    // Totals
    doc.font('Helvetica-Bold');
    doc.text(`Subtotal: ₹${quotation.subtotal.toLocaleString()}`, 400, tableY);
    doc.text(`GST (18%): ₹${quotation.gst.toLocaleString()}`, 400, tableY + 20);
    doc.fontSize(14).fillColor('#38BDF8');
    doc.text(`Grand Total: ₹${quotation.totalAmount.toLocaleString()}`, 380, tableY + 45);
    
    tableY += 80;
    
    // GST Benefit Section (if GST number provided)
    if (quotation.clientGST) {
      doc.fontSize(10).font('Helvetica-Bold').fillColor('#0F172A').text('GST Benefit Information:', 50, tableY);
      doc.fontSize(9).font('Helvetica');
      doc.fillColor('#10B981');
      doc.text(`✓ You can claim Input Tax Credit (ITC) of ₹${quotation.gst.toLocaleString()}`, 50, tableY + 15);
      doc.fillColor('#4A5568');
      doc.text(`✓ Effective project cost after GST claim: ₹${quotation.subtotal.toLocaleString()}`, 50, tableY + 30);
      doc.text(`✓ Businesses registered under GST may claim Input Tax Credit and reduce their effective project cost.`, 50, tableY + 45);
      doc.fillColor('#0F172A');
      tableY += 70;
    }
    
    // Payment Terms
    doc.fontSize(10).font('Helvetica-Bold').text('Payment Schedule:', 50, tableY);
    doc.font('Helvetica');
    doc.text(`Total Project Cost: ₹${quotation.totalAmount.toLocaleString()}`, 50, tableY + 20);
    doc.text(`Advance Payment (50%): ₹${quotation.advanceAmount.toLocaleString()}`, 50, tableY + 35);
    doc.text(`Balance Payment: ₹${quotation.balanceAmount.toLocaleString()}`, 50, tableY + 50);
    
    tableY += 80;
    
    // Terms & Conditions
    doc.fontSize(10).font('Helvetica-Bold').text('Terms & Conditions:', 50, tableY);
    doc.fontSize(9).font('Helvetica');
    doc.text('1. Quotation is valid for 15 days from the date of issue.', 50, tableY + 15);
    doc.text('2. 50% advance payment is required before project commencement.', 50, tableY + 28);
    doc.text('3. Advance payment is non-refundable once project planning, design, development,', 50, tableY + 41);
    doc.text('   marketing, or strategy work has started.', 50, tableY + 54);
    doc.text('4. Cancellation charges: 25% of total project value or actual work completed cost,', 50, tableY + 67);
    doc.text('   whichever is higher.', 50, tableY + 80);
    doc.text('5. All payments are to be made via bank transfer or approved payment gateway.', 50, tableY + 93);
    
    tableY += 120;
    
    // Signature Section
    if (tableY > 700) {
      doc.addPage();
      tableY = 50;
    }
    
    doc.lineWidth(0.5);
    doc.moveTo(50, tableY).lineTo(200, tableY).stroke();
    doc.text('Authorized Signature', 60, tableY + 5);
    
    doc.moveTo(350, tableY).lineTo(500, tableY).stroke();
    doc.text('Client Signature', 420, tableY + 5);
    
    tableY += 40;
    
    // Footer
    doc.fontSize(8).fillColor('#666666');
    doc.text('Thank you for choosing ApexWeb Solutions!', 50, tableY, { align: 'center' });
    doc.text('Kalamboli Navi Mumbai | Sector 2E, Panvel | Maharashtra 410218', 50, tableY + 12, { align: 'center' });
    doc.text('This is a computer-generated document. No signature is required.', 50, tableY + 24, { align: 'center' });
    
    doc.end();
    
    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
}

// Generate Invoice PDF
async function generateInvoicePDF(invoice, quotation) {
  return new Promise((resolve, reject) => {
    const fileName = `${invoice.invoiceNumber}.pdf`;
    const filePath = path.join(__dirname, 'invoices', fileName);
    
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    
    let yPosition = 50;
    
    // Logo
    const logoPath = path.join(__dirname, 'logos', 'logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 50, yPosition, { width: 80 });
    } else {
      doc.fontSize(20).font('Helvetica-Bold').text('APEXWEB', 50, yPosition);
    }
    
    // Company Details
    doc.fontSize(10).font('Helvetica').fillColor('#4A5568');
    doc.text('ApexWeb Solutions', 400, yPosition, { align: 'right' });
    doc.text('Kalamboli Navi Mumbai', 400, yPosition + 15, { align: 'right' });
    doc.text('Sector 2E, Panvel', 400, yPosition + 30, { align: 'right' });
    doc.text('Maharashtra 410218', 400, yPosition + 45, { align: 'right' });
    
    yPosition = 180;
    
    doc.strokeColor('#E2E8F0').lineWidth(1).moveTo(50, yPosition).lineTo(550, yPosition).stroke();
    yPosition += 20;
    
    // INVOICE Title
    doc.fontSize(22).font('Helvetica-Bold').fillColor('#38BDF8').text('INVOICE', 50, yPosition);
    
    // Invoice Details
    doc.fontSize(10).font('Helvetica').fillColor('#0F172A');
    doc.text(`Invoice No: ${invoice.invoiceNumber}`, 350, yPosition);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 350, yPosition + 15);
    doc.text(`Payment Status: ${invoice.paymentStatus.toUpperCase()}`, 350, yPosition + 30);
    
    yPosition += 60;
    
    // Client Details
    doc.fontSize(12).font('Helvetica-Bold').text('Bill To:', 50, yPosition);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Name: ${invoice.clientName}`, 50, yPosition + 20);
    doc.text(`Email: ${invoice.clientEmail}`, 50, yPosition + 35);
    
    yPosition += 80;
    
    // Services Table
    doc.fontSize(10).font('Helvetica-Bold');
    doc.rect(50, yPosition, 500, 25).fill('#F8FAFC').stroke();
    doc.fillColor('#0F172A');
    doc.text('Service', 60, yPosition + 8);
    doc.text('Amount (₹)', 470, yPosition + 8);
    
    let tableY = yPosition + 25;
    doc.font('Helvetica');
    invoice.services.forEach((service) => {
      doc.rect(50, tableY, 500, 25).stroke();
      doc.text(service.name, 60, tableY + 8);
      doc.text(`₹${service.total.toLocaleString()}`, 480, tableY + 8);
      tableY += 25;
    });
    
    tableY += 10;
    
    // Payment Summary
    doc.font('Helvetica-Bold');
    doc.text(`Total Amount: ₹${invoice.totalAmount.toLocaleString()}`, 400, tableY);
    doc.text(`Amount Paid: ₹${invoice.paidAmount.toLocaleString()}`, 400, tableY + 20);
    doc.text(`Pending Amount: ₹${invoice.pendingAmount.toLocaleString()}`, 400, tableY + 40);
    doc.fontSize(12).fillColor('#38BDF8');
    doc.text(`Status: ${invoice.paymentStatus.toUpperCase()}`, 380, tableY + 65);
    
    tableY += 100;
    
    // Footer
    doc.fontSize(8).fillColor('#666666');
    doc.text('Thank you for your business!', 50, tableY, { align: 'center' });
    doc.text('Kalamboli Navi Mumbai | Sector 2E, Panvel | Maharashtra 410218', 50, tableY + 12, { align: 'center' });
    
    doc.end();
    
    stream.on('finish', () => resolve(filePath));
    stream.on('error', reject);
  });
}

// ==================== API ROUTES ====================

app.post('/api/quotation', async (req, res) => {
  try {
    const {
      clientName, clientCompany, clientEmail, clientPhone, clientAddress, clientGST,
      projectName, services, subtotal, gst, totalAmount, advanceAmount, balanceAmount
    } = req.body;
    
    const quotationNumber = await generateQuotationNumber();
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 15);
    
    const quotation = new Quotation({
      quotationNumber,
      clientName, clientCompany, clientEmail, clientPhone, clientAddress, clientGST,
      projectName, services, subtotal, gst, totalAmount, advanceAmount, balanceAmount,
      validUntil,
      quotationStatus: 'pending'
    });
    
    await quotation.save();
    
    const pdfPath = await generateQuotationPDF(quotation);
    quotation.pdfUrl = `/uploads/${quotationNumber}.pdf`;
    await quotation.save();
    
    res.status(201).json({ success: true, quotation, pdfUrl: quotation.pdfUrl });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/invoice/:quotationId', async (req, res) => {
  try {
    const quotation = await Quotation.findById(req.params.quotationId);
    if (!quotation) {
      return res.status(404).json({ success: false, error: 'Quotation not found' });
    }
    
    const invoiceNumber = await generateInvoiceNumber();
    const paidAmount = req.body.paidAmount || quotation.advanceAmount;
    const pendingAmount = quotation.totalAmount - paidAmount;
    const paymentStatus = pendingAmount === 0 ? 'paid' : 'partial';
    
    const invoice = new Invoice({
      invoiceNumber,
      quotationReference: quotation._id,
      clientName: quotation.clientName,
      clientEmail: quotation.clientEmail,
      services: quotation.services,
      totalAmount: quotation.totalAmount,
      paidAmount: paidAmount,
      pendingAmount: pendingAmount,
      paymentStatus: paymentStatus,
      paymentDate: new Date()
    });
    
    await invoice.save();
    
    const pdfPath = await generateInvoicePDF(invoice, quotation);
    invoice.invoicePdfUrl = `/invoices/${invoiceNumber}.pdf`;
    await invoice.save();
    
    quotation.quotationStatus = 'approved';
    await quotation.save();
    
    res.status(201).json({ success: true, invoice, pdfUrl: invoice.invoicePdfUrl });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/quotations', async (req, res) => {
  try {
    const quotations = await Quotation.find().sort({ createdAt: -1 });
    res.json({ success: true, quotations });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/invoices', async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.json({ success: true, invoices });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});