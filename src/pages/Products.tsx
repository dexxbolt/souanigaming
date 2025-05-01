
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import { Filter, ArrowUpDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

// Mock product data
const products = [
  {
    id: 1,
    name: "Gigabyte RTX 3060 12GB",
    image: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?q=80&w=1470&auto=format&fit=crop",
    price: 4799,
    category: "gpus",
    brand: "Gigabyte",
    specs: ["12GB GDDR6", "192-bit", "15 Gbps"],
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "Kingston FURY Beast 16GB DDR4",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1470&auto=format&fit=crop",
    price: 799,
    category: "storage",
    brand: "Kingston",
    specs: ["16GB (2x8GB)", "3200MHz", "CL16"],
    inStock: true,
    isNew: false
  },
  {
    id: 3,
    name: "Samsung 970 EVO Plus 1TB",
    image: "https://images.unsplash.com/photo-1597338770339-2e2b74a92c70?q=80&w=1632&auto=format&fit=crop",
    price: 1299,
    category: "storage",
    brand: "Samsung",
    specs: ["NVMe", "3500MB/s Read", "PCIe 3.0"],
    inStock: true,
    isNew: false
  },
  {
    id: 4,
    name: "Razer BlackWidow V3",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    price: 1499,
    category: "keyboards",
    brand: "Razer",
    specs: ["Green Switches", "RGB", "Mechanical"],
    inStock: false,
    isNew: false
  },
  {
    id: 5,
    name: "MSI RTX 4060 8GB",
    image: "https://images.unsplash.com/photo-1592977731761-372e314844a4?q=80&w=1470&auto=format&fit=crop",
    price: 5299,
    category: "gpus",
    brand: "MSI",
    specs: ["8GB GDDR6", "128-bit", "17 Gbps"],
    inStock: true,
    isNew: true
  },
  {
    id: 6,
    name: "HyperX Alloy Origins",
    image: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?q=80&w=1454&auto=format&fit=crop",
    price: 899,
    category: "keyboards",
    brand: "HyperX",
    specs: ["HyperX Red Switches", "RGB", "Aircraft-grade aluminum"],
    inStock: true,
    isNew: false
  },
];

const brands = ["All", "Gigabyte", "Kingston", "Samsung", "Razer", "MSI", "HyperX"];
const categories = ["All", "gpus", "storage", "keyboards"];

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [sortOption, setSortOption] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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
  }, [selectedCategory, selectedBrand, priceRange, sortOption]);

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

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Our Products</h1>
        
        {/* Top controls */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Button 
              variant="outline" 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center mr-4 md:hidden"
            >
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
            
            <span className="text-white">
              Showing {filteredProducts.length} products
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Select
              value={sortOption}
              onValueChange={(value) => setSortOption(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className={`w-full md:w-64 md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
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
                      {category.charAt(0).toUpperCase() + category.slice(1)}
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
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white text-lg">No products match your filters.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSelectedBrand("All");
                    setSelectedCategory("All");
                    setPriceRange([0, 6000]);
                  }}
                  className="text-mustang-red mt-2"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Products;
