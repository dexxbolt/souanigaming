
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import CustomBuildForm from '../components/custom-builds/CustomBuildForm';
import BuildProcess from '../components/custom-builds/BuildProcess';
import BuildBenefits from '../components/custom-builds/BuildBenefits';

const CustomBuilds: React.FC = () => {
  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Custom PC Builds</h1>
        <p className="text-gray-300 max-w-3xl mb-12">
          Get a personalized PC built specifically for your needs. We'll help you select the perfect components within your budget.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Form */}
          <CustomBuildForm />
          
          {/* Right Side: Info */}
          <div>
            <BuildProcess />
            <BuildBenefits />
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default CustomBuilds;
