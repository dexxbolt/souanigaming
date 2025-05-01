
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, Fire } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const specialOffers = [
  {
    id: 1,
    name: "Gaming PC Bundle",
    description: "RTX 4060, i5-13400F, 16GB RAM, 1TB SSD",
    price: 12999,
    originalPrice: 14999,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1470&auto=format&fit=crop",
    discount: "13%",
    endsIn: "2 days"
  },
  {
    id: 2,
    name: "SteelSeries Bundle",
    description: "Arctis 7 Headset + Apex Pro Keyboard",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1615672968447-770597db99f3?q=80&w=1470&auto=format&fit=crop",
    discount: "16%",
    endsIn: "4 days"
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title">SPECIAL OFFERS</h2>
          <Link to="/products" className="text-mustang-red hover:underline flex items-center">
            View all offers
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <Card key={offer.id} className="bg-mustang-dark border border-mustang-red/30 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <img 
                    src={offer.image} 
                    alt={offer.name} 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-mustang-red text-white flex items-center gap-1">
                    <Fire size={14} /> {offer.discount} OFF
                  </Badge>
                </div>
                
                <CardContent className="p-6 md:w-3/5">
                  <div className="flex items-center mb-2">
                    <Clock size={16} className="text-mustang-red mr-1" />
                    <span className="text-gray-400 text-sm">Offer ends in {offer.endsIn}</span>
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-2">{offer.name}</h3>
                  <p className="text-gray-300 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-mustang-red font-bold text-2xl mr-2">{offer.price} MAD</span>
                    <span className="text-gray-400 line-through">{offer.originalPrice} MAD</span>
                  </div>
                  
                  <WhatsAppButton 
                    label="Get This Offer"
                    message={`Hi, I'm interested in the special offer: ${offer.name} for ${offer.price} MAD. Is it still available?`}
                    productName={offer.name}
                    className="w-full"
                  />
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
