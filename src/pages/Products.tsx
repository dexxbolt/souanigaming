import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import FilterSidebar from '../components/products/FilterSidebar';
import ProductGrid from '../components/products/ProductGrid';
import ProductControls from '../components/products/ProductControls';
import { products, brands, categories } from '../data/productData';
import { useProductFilters } from '../hooks/useProductFilters';

const Products: React.FC = () => {
  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const {
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
    sortOption,
    setSortOption,
    resetFilters
  } = useProductFilters({ products });

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Our Products</h1>
        
        {/* Product Controls - Sort and Filter toggles */}
        <ProductControls 
          productCount={filteredProducts.length}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onToggleFilters={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          mobileFiltersOpen={mobileFiltersOpen}
        />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop and Mobile */}
          <div className={`w-full md:w-64 md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
            <FilterSidebar
              categories={categories}
              brands={brands}
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              setSelectedCategory={setSelectedCategory}
              setSelectedBrand={setSelectedBrand}
            />
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid 
              products={filteredProducts} 
              resetFilters={resetFilters}
            />
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Products;
