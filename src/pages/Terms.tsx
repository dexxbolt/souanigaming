
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Terms & Policies</h1>
        
        <div className="bg-mustang-gray rounded-lg p-8">
          {/* Warranty Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Warranty Policy</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                All products sold by Mustang Gaming come with the manufacturer's warranty. In addition, we offer the following warranty terms:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                <li>New products carry a 1-month Mustang Gaming exchange guarantee in case of manufacturer defects.</li>
                <li>Custom PC builds include a 3-month service warranty for assembly-related issues.</li>
                <li>Warranty is void if products show signs of physical damage, misuse, or unauthorized repair attempts.</li>
                <li>For warranty claims, customers must provide proof of purchase and the original packaging.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To make a warranty claim, please contact us via WhatsApp with your order details and a description of the issue.
              </p>
            </div>
          </div>
          
          {/* Return Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Return Policy</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                We want you to be completely satisfied with your purchase. Our return policy includes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                <li>Unopened products may be returned within 7 days of delivery for a full refund or exchange.</li>
                <li>Defective products can be returned within 30 days for repair, replacement, or refund.</li>
                <li>Custom-built PCs are eligible for component replacements if defective, but not full returns unless agreed upon.</li>
                <li>Return shipping costs are the responsibility of the customer unless the product is defective.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To initiate a return, contact us via WhatsApp with your order details and the reason for the return.
              </p>
            </div>
          </div>
          
          {/* Privacy Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                At Mustang Gaming, we respect your privacy and are committed to protecting your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                <li>We collect only necessary information for processing orders and providing customer support.</li>
                <li>Your contact information is used solely for order fulfillment and important updates.</li>
                <li>We do not sell or share your personal information with third parties for marketing purposes.</li>
                <li>WhatsApp conversations are kept confidential and are only used for customer service purposes.</li>
                <li>You may request deletion of your personal information by contacting our support team.</li>
              </ul>
            </div>
          </div>
          
          {/* Payment Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Payment Policy</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                We offer flexible payment options to make your shopping experience convenient:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                <li>Cash on Delivery (COD) is available for all orders within Morocco.</li>
                <li>For custom builds, a 30% advance payment may be required.</li>
                <li>In-store payments can be made in cash or by bank transfer.</li>
                <li>All prices are in Moroccan Dirhams (MAD) and include applicable taxes.</li>
                <li>Price quotes are valid for 24 hours due to market fluctuations.</li>
              </ul>
            </div>
          </div>
          
          {/* Delivery Policy */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Delivery Policy</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                We strive to deliver your products as quickly and safely as possible:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                <li>Standard delivery times are 24-72 hours for major Moroccan cities.</li>
                <li>Remote areas may require additional 2-3 business days.</li>
                <li>Delivery fees vary based on location and order value.</li>
                <li>Free delivery is available for orders over 2000 MAD within Casablanca.</li>
                <li>Customers are responsible for verifying the condition of products upon delivery.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                For specific delivery inquiries, please contact our customer service via WhatsApp.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact for questions */}
        <div className="bg-mustang-gray rounded-lg p-8 mt-8 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Have Questions About Our Policies?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            If you have any questions or need clarification about our terms and policies, our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="btn-mustang inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Terms;
