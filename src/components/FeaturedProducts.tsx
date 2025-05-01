
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Monster Keyboard RGB",
    price: 129.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    category: "Keyboards",
    rating: 4.8,
    reviewCount: 124,
    path: "/product/monster-keyboard-rgb"
  },
  {
    id: 2,
    name: "Raptor Gaming Mouse",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1528&auto=format&fit=crop",
    category: "Mice",
    rating: 4.9,
    reviewCount: 86,
    path: "/product/raptor-gaming-mouse"
  },
  {
    id: 3,
    name: "Thunder X7 Headset",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1470&auto=format&fit=crop",
    category: "Headsets",
    rating: 4.7,
    reviewCount: 53,
    path: "/product/thunder-x7-headset"
  },
  {
    id: 4,
    name: "Cobra Gaming Chair",
    price: 299.99,
    originalPrice: 349.99,
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
          <h2 className="section-title">FEATURED PRODUCTS</h2>
          <Link to="/products" className="text-mustang-red hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card">
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
                    <span className="text-mustang-red">★</span>
                    <span className="text-white ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-mustang-red font-bold text-lg">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-gray-400 text-sm line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="icon" className="border-mustang-red hover:bg-mustang-red hover:text-white">
                    <ShoppingCart size={16} />
                  </Button>
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
