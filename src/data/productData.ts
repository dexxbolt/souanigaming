
// This file re-exports from the new structure for backwards compatibility
import { Product } from './types/product';
import { allProducts } from './products';
import { brands } from './brands';
import { categories } from './categories';

// Export everything for backwards compatibility
export { type Product, allProducts as products, brands, categories };
