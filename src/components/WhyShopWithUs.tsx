
import React from 'react';
import { MapPin, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Local Moroccan Service 🇲🇦",
    description: "Shop local with a trusted Moroccan business",
    icon: <MapPin className="w-10 h-10 text-mustang-red" />
  },
  {
    id: 2,
    title: "COD & WhatsApp Confirmation",
    description: "Pay on delivery after WhatsApp verification",
    icon: <ShieldCheck className="w-10 h-10 text-mustang-red" />
  },
  {
    id: 3,
    title: "Fast Delivery 24-72 Hours",
    description: "Quick shipping to major Moroccan cities",
    icon: <Clock className="w-10 h-10 text-mustang-red" />
  },
  {
    id: 4,
    title: "Real-time Support",
    description: "Get instant answers via WhatsApp",
    icon: <MessageCircle className="w-10 h-10 text-mustang-red" />
  },
];

const WhyShopWithUs: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">WHY SHOP WITH US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-mustang-dark rounded-lg p-6 text-center hover:shadow-lg hover:shadow-mustang-red/20 transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
