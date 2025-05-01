
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Send, CheckCircle, Truck, CreditCard } from 'lucide-react';

const HowToOrder: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="w-12 h-12 text-mustang-red" />,
      title: "Browse our products",
      description: "Explore our wide range of gaming peripherals, PC components, and accessories."
    },
    {
      id: 2,
      icon: <Send className="w-12 h-12 text-mustang-red" />,
      title: "Click 'Order via WhatsApp'",
      description: "Select the product you want and click the WhatsApp button to send an inquiry."
    },
    {
      id: 3,
      icon: <CheckCircle className="w-12 h-12 text-mustang-red" />,
      title: "Confirm availability and price",
      description: "Our team will quickly confirm product availability and the final price."
    },
    {
      id: 4,
      icon: <Truck className="w-12 h-12 text-mustang-red" />,
      title: "Share delivery details",
      description: "Provide your address and preferred delivery time."
    },
    {
      id: 5,
      icon: <CreditCard className="w-12 h-12 text-mustang-red" />,
      title: "Get it delivered – pay on delivery",
      description: "Receive your order and pay cash on delivery – no advance payment required."
    }
  ];

  const faqs = [
    {
      question: "What cities do you deliver to?",
      answer: "We deliver to all major cities in Morocco including Casablanca, Rabat, Marrakech, Tangier, Fes, Agadir, and more. Delivery times may vary depending on your location."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 24-72 hours for major cities. For remote areas, it may take up to 5 business days."
    },
    {
      question: "Do you offer warranty?",
      answer: "Yes, all our products come with the official manufacturer warranty. Additionally, we offer a 1-month exchange guarantee on certain items."
    },
    {
      question: "What are your business hours?",
      answer: "Our physical store is open Monday to Saturday, 9am to 7pm. Our online service is available 7 days a week."
    },
    {
      question: "Can I return a product?",
      answer: "Yes, you can return unopened products within 7 days of delivery. For defective products, our warranty policy applies."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we offer installation and setup services for an additional fee. Please inquire about this when placing your order."
    }
  ];

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How To Order</h1>
        <p className="text-gray-300 max-w-3xl mb-12">
          Ordering from Mustang Gaming is quick and easy. Follow these simple steps to get your gaming gear delivered to your doorstep.
        </p>
        
        {/* Order Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {steps.map(step => (
            <div key={step.id} className="bg-mustang-gray rounded-lg p-6 relative flex flex-col items-center text-center">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-mustang-red flex items-center justify-center text-white font-bold">
                {step.id}
              </div>
              <div className="mb-4">
                {step.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{step.title}</h2>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="bg-mustang-gray rounded-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        {/* Reassurance Section */}
        <div className="bg-mustang-gray rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Our team is ready to assist you with any questions you may have about ordering, products, or delivery.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="btn-mustang mr-4"
            >
              Contact Us
            </a>
            <a 
              href="https://wa.me/212600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default HowToOrder;
