
import React from 'react';
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import SortSelector from './SortSelector';

interface ProductControlsProps {
  productCount: number;
  sortOption: string;
  onSortChange: (value: string) => void;
  onToggleFilters: () => void;
  mobileFiltersOpen: boolean;
}

const ProductControls: React.FC<ProductControlsProps> = ({
  productCount,
  sortOption,
  onSortChange,
  onToggleFilters,
  mobileFiltersOpen
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <div className="flex items-center mb-4 md:mb-0">
        <Button 
          variant="outline" 
          onClick={onToggleFilters}
          className="flex items-center mr-4 md:hidden"
        >
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
        
        <span className="text-white">
          Showing {productCount} products
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <SortSelector sortOption={sortOption} onSortChange={onSortChange} />
      </div>
    </div>
  );
};

export default ProductControls;
