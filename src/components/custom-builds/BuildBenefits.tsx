
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWhatsApp } from '@/context/WhatsAppContext';

const BuildBenefits: React.FC = () => {
  const { sendWhatsAppMessage } = useWhatsApp();

  const benefits = [
    'Expert component selection tailored to your needs',
    'Free assembly and testing',
    'Latest hardware with full warranty',
    'After-sale technical support',
    'Customized RGB lighting (optional)',
    'Cable management and optimization'
  ];

  return (
    <div className="bg-mustang-gray rounded-lg p-8">
      <h2 className="text-xl font-bold text-white mb-6">Why Choose Our Custom Builds</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-mustang-red mt-0.5 mr-2 shrink-0" />
            <span className="text-white">{benefit}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-700 text-center">
        <p className="text-white font-medium mb-4">Need help deciding? Chat with our experts</p>
        <Button 
          className="btn-mustang"
          onClick={() => sendWhatsAppMessage("Hi, I need advice about a custom PC build. Can you help me choose the right components?")}
        >
          Get Expert Advice
        </Button>
      </div>
    </div>
  );
};

export default BuildBenefits;
