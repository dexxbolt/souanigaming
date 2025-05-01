
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CTABlock: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-gray">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Have Questions? Click to Chat Instantly
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          Our team is ready to help with product information, availability, and orders. Get answers in minutes!
        </p>
        <WhatsAppButton 
          label="Chat on WhatsApp" 
          message="Hi, I have a question about your products."
          className="text-lg py-3 px-8"
        />
      </div>
    </section>
  );
};

export default CTABlock;
