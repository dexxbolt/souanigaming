
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Send, CheckCircle, Truck, CreditCard, Clock, MapPin, ShoppingBag } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import OrderTracking from '../components/OrderTracking';

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
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery, bank transfers, and mobile payment services like Cash Plus and Inwi Money."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order is confirmed, you'll receive updates via WhatsApp about your order status and delivery progress."
    }
  ];

  const paymentMethods = [
    {
      name: "Cash on Delivery",
      description: "Pay when your order arrives at your doorstep.",
      icon: <ShoppingBag className="w-12 h-12 text-mustang-red" />
    },
    {
      name: "Bank Transfer",
      description: "Secure payment via direct bank transfer.",
      icon: <CreditCard className="w-12 h-12 text-mustang-red" />
    },
    {
      name: "Mobile Payment",
      description: "Use Cash Plus, Inwi Money or similar services.",
      icon: <Send className="w-12 h-12 text-mustang-red" />
    }
  ];

  const deliveryInformation = [
    {
      city: "Tangier",
      time: "24 hours",
      fee: "Free"
    },
    {
      city: "Casablanca",
      time: "48 hours",
      fee: "30 MAD"
    },
    {
      city: "Rabat",
      time: "48 hours",
      fee: "30 MAD"
    },
    {
      city: "Marrakech",
      time: "48-72 hours",
      fee: "40 MAD"
    },
    {
      city: "Agadir",
      time: "72 hours",
      fee: "50 MAD"
    },
    {
      city: "Other Cities",
      time: "3-5 days",
      fee: "Varies"
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
        
        {/* Order Process Tabs */}
        <Tabs defaultValue="steps" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="steps">Order Steps</TabsTrigger>
            <TabsTrigger value="payment">Payment Methods</TabsTrigger>
            <TabsTrigger value="delivery">Delivery Information</TabsTrigger>
            <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
          </TabsList>
          
          <TabsContent value="steps">
            {/* Order Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
          </TabsContent>
          
          <TabsContent value="payment">
            {/* Payment Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-mustang-gray rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {method.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{method.name}</h2>
                  <p className="text-gray-300">{method.description}</p>
                </div>
              ))}
            </div>
            
            <Alert className="mt-8 bg-mustang-gray border-mustang-red">
              <AlertTitle className="text-white">Secure Payments</AlertTitle>
              <AlertDescription className="text-gray-300">
                All payment information is handled securely. We never store your payment details.
              </AlertDescription>
            </Alert>
          </TabsContent>
          
          <TabsContent value="delivery">
            {/* Delivery Information */}
            <div className="bg-mustang-gray rounded-lg p-6">
              <div className="grid grid-cols-3 text-white font-bold border-b border-mustang-red pb-2 mb-4">
                <div>City</div>
                <div>Delivery Time</div>
                <div>Delivery Fee</div>
              </div>
              
              {deliveryInformation.map((info, index) => (
                <div key={index} className="grid grid-cols-3 text-gray-300 border-b border-gray-700 py-3">
                  <div>{info.city}</div>
                  <div>{info.time}</div>
                  <div>{info.fee}</div>
                </div>
              ))}
            </div>
            
            <Alert className="mt-8 bg-mustang-gray border-mustang-red">
              <AlertTitle className="text-white">Order Tracking</AlertTitle>
              <AlertDescription className="text-gray-300">
                Track your order status via WhatsApp updates. You'll receive notifications at each step of the delivery process.
              </AlertDescription>
            </Alert>
          </TabsContent>
          
          <TabsContent value="tracking">
            {/* Order Tracking */}
            <OrderTracking />
          </TabsContent>
        </Tabs>
        
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
            <WhatsAppButton 
              label="WhatsApp Us"
              message="Hi, I have a question about ordering." 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
            />
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default HowToOrder;
