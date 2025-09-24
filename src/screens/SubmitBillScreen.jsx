import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import TopBar from '../components/TopBar';
import { Camera, Upload, CheckCircle } from 'lucide-react';

const SubmitBillScreen = ({ onNavigate, onBack }) => {
  const [step, setStep] = useState('upload'); // 'upload', 'preview', 'submitted'
  const [uploadedFile, setUploadedFile] = useState(null);
  const [billData, setBillData] = useState({
    vendorName: '',
    billDate: '',
    billNumber: '',
    totalAmount: '',
  });

  const handleFileUpload = (type) => {
    setUploadedFile(`${type}-upload.jpg`);
    setTimeout(() => {
      setBillData({
        vendorName: 'Sample Vendor',
        billDate: '2025-01-15',
        billNumber: 'INV-2025-001',
        totalAmount: '125.50',
      });
      setStep('preview');
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('submitted');
  };

  const handleChange = (field) => (e) => {
    setBillData({ ...billData, [field]: e.target.value });
  };

  if (step === 'submitted') {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopBar title="Bill Submitted" onBack={onBack} />
        
        <div className="max-w-mobile mx-auto px-4 py-6 flex flex-col justify-center h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <CheckCircle size={48} className="text-white" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Success!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg"
            >
              Your bill has been submitted for approval.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-white shadow-lg border-0 p-6 mb-6">
              <h3 className="font-bold text-lg text-center text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
                Expense Receipt
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600 font-medium">Vendor:</span>
                  <span className="font-semibold text-gray-900">{billData.vendorName}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600 font-medium">Date:</span>
                  <span className="font-semibold text-gray-900">{billData.billDate}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600 font-medium">Bill #:</span>
                  <span className="font-semibold text-gray-900">{billData.billNumber}</span>
                </div>
                <div className="flex justify-between items-center border-t-2 border-gray-200 pt-3 mt-3">
                  <span className="text-gray-900 font-bold text-lg">Total:</span>
                  <span className="text-2xl font-bold text-primary">${billData.totalAmount}</span>
                </div>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button
                onClick={() => onNavigate('dashboard')}
                className="w-full font-bold py-3 text-base"
              >
                Continue to Dashboard
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (step === 'preview') {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopBar title="Review Bill" onBack={() => setStep('upload')} />
        
        <div className="max-w-mobile mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-100 rounded-xl p-4 mb-6"
              >
                <p className="text-sm text-gray-600 mb-2 font-medium">Uploaded: {uploadedFile}</p>
                <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Receipt Preview</span>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Vendor Name"
                  value={billData.vendorName}
                  onChange={handleChange('vendorName')}
                  placeholder="Enter vendor name"
                  required
                />
                <Input
                  label="Bill Date"
                  type="date"
                  value={billData.billDate}
                  onChange={handleChange('billDate')}
                  required
                />
                <Input
                  label="Bill Number"
                  value={billData.billNumber}
                  onChange={handleChange('billNumber')}
                  placeholder="Enter bill number"
                  required
                />
                <Input
                  label="Total Amount"
                  type="number"
                  step="0.01"
                  value={billData.totalAmount}
                  onChange={handleChange('totalAmount')}
                  placeholder="Enter total amount"
                  required
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex space-x-3 pt-4"
                >
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setStep('upload')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1"
                  >
                    Submit Bill
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar title="Submit Bill" onBack={onBack} />
      
      <div className="max-w-mobile mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 mb-6">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-semibold text-gray-900 mb-6 text-center"
            >
              Upload Receipt
            </motion.h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={() => handleFileUpload('camera')}
                  className="w-full flex items-center justify-center"
                >
                  <Camera size={20} className="mr-2" />
                  Take Photo
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="secondary"
                  onClick={() => handleFileUpload('gallery')}
                  className="w-full flex items-center justify-center"
                >
                  <Upload size={20} className="mr-2" />
                  Choose from Gallery
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SubmitBillScreen;
