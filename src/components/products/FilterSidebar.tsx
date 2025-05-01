
import React from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface FilterSidebarProps {
  categories: string[];
  brands: string[];
  selectedCategory: string;
  selectedBrand: string;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedBrand: (brand: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  priceRange,
  setPriceRange,
  setSelectedCategory,
  setSelectedBrand,
}) => {
  return (
    <div className="bg-mustang-gray rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
      <div className="space-y-2 mb-6">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="radio"
              id={`category-${category}`}
              name="category"
              className="mr-2"
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            <label htmlFor={`category-${category}`} className="text-white">
              {category === "All" ? category : category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
            </label>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4">Brands</h3>
      <div className="space-y-2 mb-6">
        {brands.map((brand) => (
          <div key={brand} className="flex items-center">
            <input
              type="radio"
              id={`brand-${brand}`}
              name="brand"
              className="mr-2"
              checked={selectedBrand === brand}
              onChange={() => setSelectedBrand(brand)}
            />
            <label htmlFor={`brand-${brand}`} className="text-white">
              {brand}
            </label>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4">Price Range</h3>
      <div className="px-2">
        <Slider
          defaultValue={[0, 6000]}
          max={6000}
          step={100}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2 text-white">
          <span>{priceRange[0]} MAD</span>
          <span>{priceRange[1]} MAD</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4 mt-6">Availability</h3>
      <div className="space-y-2 mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="in-stock"
            className="mr-2"
          />
          <label htmlFor="in-stock" className="text-white">
            In Stock Only
          </label>
        </div>
      </div>
      
      <Button
        variant="outline" 
        className="w-full mt-6"
        onClick={() => {
          setSelectedBrand("All");
          setSelectedCategory("All");
          setPriceRange([0, 6000]);
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
