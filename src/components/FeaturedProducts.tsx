
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, Star, Award } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const products = [
  {
    id: 1,
    name: "Souani Pro Keyboard RGB",
    price: 1299,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    category: "Keyboards",
    rating: 4.8,
    reviewCount: 124,
    path: "/product/souani-pro-keyboard-rgb"
  },
  {
    id: 2,
    name: "Zephyr Gaming Mouse",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1528&auto=format&fit=crop",
    category: "Mice",
    rating: 4.9,
    reviewCount: 86,
    path: "/product/raptor-gaming-mouse"
  },
  {
    id: 3,
    name: "Sonic Beast Headset",
    price: 1499,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1470&auto=format&fit=crop",
    category: "Headsets",
    rating: 4.7,
    reviewCount: 53,
    path: "/product/thunder-x7-headset"
  },
  {
    id: 4,
    name: "Supreme Gaming Chair",
    price: 2999,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1616626298060-8d071eb359f6?q=80&w=1470&auto=format&fit=crop",
    category: "Chairs",
    rating: 4.6,
    reviewCount: 42,
    path: "/product/cobra-gaming-chair"
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Award className="text-mustang-red" />
            <h2 className="section-title">FEATURED PRODUCTS</h2>
          </div>
          <Link to="/products" className="text-mustang-red hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-mustang-gray rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <Link to={product.path} className="block relative group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {product.originalPrice > product.price && (
                  <span className="absolute top-2 right-2 bg-mustang-red text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </Link>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-sm text-gray-400">{product.category}</span>
                    <h3 className="font-bold text-white">
                      <Link to={product.path}>{product.name}</Link>
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-mustang-red text-mustang-red" />
                    <span className="text-white ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-mustang-red font-bold text-lg">{product.price} MAD</span>
                    {product.originalPrice > product.price && (
                      <span className="text-gray-400 text-sm line-through ml-2">
                        {product.originalPrice} MAD
                      </span>
                    )}
                  </div>
                  <WhatsAppButton
                    label=""
                    message={`Hi, I'm interested in the ${product.name} for ${product.price} MAD. Is it available?`}
                    productName={product.name}
                    className="p-2"
                    iconOnly={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
