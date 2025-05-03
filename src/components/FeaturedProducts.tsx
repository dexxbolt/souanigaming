
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, Star, Award } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { products } from '../data/productData';

// Select featured products from our product data
const featuredProducts = products
  .filter(product => product.isPopular || product.discount)
  .slice(0, 8);

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card bg-mustang-gray rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <Link to={`/product/${product.id}`} className="block relative group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-mustang-red text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </Link>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-sm text-gray-400">{product.category}</span>
                    <h3 className="font-bold text-white">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-mustang-red text-mustang-red" />
                    <span className="text-white ml-1">{(4.5 + Math.random() * 0.5).toFixed(1)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-mustang-red font-bold text-lg">{product.price} MAD</span>
                    {product.originalPrice && (
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
