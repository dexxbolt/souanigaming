
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import WhatsAppButton from './WhatsAppButton';
import { Card, CardContent, CardFooter } from './ui/card';
import { products } from '../data/productData';

// Filter for new products
const newProducts = products
  .filter(product => product.isNew)
  .slice(0, 3);

const NewArrivals: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">JUST ARRIVED</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newProducts.map((product) => (
            <Card key={product.id} className="bg-mustang-gray border-none overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                  New Arrival
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                <ul className="text-gray-300 text-sm mb-3">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="mb-1">• {spec}</li>
                  ))}
                </ul>
                <p className="text-mustang-red text-xl font-bold">{product.price} MAD</p>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <WhatsAppButton 
                  label="Buy on WhatsApp"
                  message={`Hi, I'm interested in the ${product.name} for ${product.price} MAD. Is it available?`}
                  productName={product.name}
                  className="w-full"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/products" className="text-white border-b-2 border-mustang-red hover:text-mustang-red transition-colors">
            View all new arrivals →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
