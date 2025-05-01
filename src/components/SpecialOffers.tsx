
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Clock } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const offers = [
  {
    id: 1,
    name: "Summer Gaming Bundle",
    description: "RTX 3060 + 16GB RAM + 512GB SSD",
    price: 6499,
    originalPrice: 7999,
    discount: 19,
    image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=1374&auto=format&fit=crop",
    expiresIn: "3 days"
  },
  {
    id: 2,
    name: "Streamer Setup Deal",
    description: "Mic + Camera + Ring Light",
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1470&auto=format&fit=crop",
    expiresIn: "5 days"
  },
  {
    id: 3,
    name: "Mechanical Keyboard + Mouse",
    description: "RGB Gaming Combo",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    expiresIn: "Today only"
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Clock className="text-mustang-red" />
            <h2 className="section-title">SPECIAL OFFERS</h2>
          </div>
          <Link to="/products" className="text-mustang-red hover:underline">
            View All Deals
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="bg-mustang-gray border-none overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-mustang-red text-white">
                  {offer.discount}% OFF
                </Badge>
                <div className="absolute bottom-2 left-2 flex items-center bg-black bg-opacity-70 px-2 py-1 rounded">
                  <Clock className="h-4 w-4 text-mustang-red mr-1" />
                  <span className="text-white text-xs">Ends in {offer.expiresIn}</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-bold text-white text-lg">{offer.name}</h3>
                <p className="text-gray-400 mb-2">{offer.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-mustang-red font-bold text-xl">{offer.price} MAD</span>
                    <span className="text-gray-400 line-through ml-2">{offer.originalPrice} MAD</span>
                  </div>
                </div>
                
                <WhatsAppButton 
                  label="Get This Deal"
                  message={`Hi, I'm interested in the special offer: ${offer.name} for ${offer.price} MAD. Is it still available?`}
                  productName={offer.name}
                  className="w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
