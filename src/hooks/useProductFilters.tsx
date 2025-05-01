
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../data/productData';

export interface UseProductFiltersProps {
  products: Product[];
}

export interface UseProductFiltersResult {
  filteredProducts: Product[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  resetFilters: () => void;
}

export const useProductFilters = ({ products }: UseProductFiltersProps): UseProductFiltersResult => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Apply brand filter
    if (selectedBrand !== "All") {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    // Apply price filter
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortOption) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Default is "featured", no additional sorting
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrand, priceRange, sortOption, products]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory !== "All") {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  // Check for category in URL on initial load
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const resetFilters = () => {
    setSelectedBrand("All");
    setSelectedCategory("All");
    setPriceRange([0, 6000]);
  };

  return {
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
  };
};
