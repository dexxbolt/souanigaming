
import React from 'react';
import ProductCard from '../ProductCard';
import { Button } from "../ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  brand: string;
  specs: string[];
  inStock: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  discount?: number;
  originalPrice?: number;
}

interface ProductGridProps {
  products: Product[];
  resetFilters: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, resetFilters }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white text-lg">No products match your filters.</p>
        <Button 
          variant="link" 
          onClick={resetFilters}
          className="text-mustang-red mt-2"
        >
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
