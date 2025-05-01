
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from './WhatsAppButton';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  brand: string;
  specs: string[];
  inStock: boolean;
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="bg-mustang-gray border-none overflow-hidden product-card">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-mustang-red text-white">
            New In
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{product.brand}</p>
        <ul className="text-gray-300 text-sm mb-3">
          {product.specs.map((spec, index) => (
            <li key={index} className="mb-1">• {spec}</li>
          ))}
        </ul>
        <p className="text-mustang-red text-xl font-bold">{product.price} MAD</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <WhatsAppButton 
          label={product.inStock ? "Buy on WhatsApp" : "Check Availability"}
          message={`Hi, I'm interested in the ${product.name} for ${product.price} MAD. Is it available?`}
          productName={product.name}
          className="w-full"
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
