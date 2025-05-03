
import { Product } from '../types/product';

export const laptopProducts: Product[] = [
  {
    id: 38,
    name: "Lenovo Legion 5 Pro",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1632&auto=format&fit=crop",
    price: 15999,
    originalPrice: 16999,
    category: "laptops",
    brand: "Lenovo",
    specs: ["RTX 4070", "AMD Ryzen 9", "16\" 240Hz Display"],
    inStock: true,
    discount: 6
  }
];

export const chairProducts: Product[] = [
  {
    id: 37,
    name: "Secretlab TITAN Evo 2022",
    image: "https://images.unsplash.com/photo-1616626298060-8d071eb359f6?q=80&w=1470&auto=format&fit=crop",
    price: 4299,
    category: "chairs",
    brand: "Secretlab",
    specs: ["Premium Leather", "4D Armrests", "Magnetic Memory Foam"],
    inStock: true,
    isPopular: true
  }
];
