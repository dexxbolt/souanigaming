
import { Product } from '../types/product';

export const gpuProducts: Product[] = [
  {
    id: 1,
    name: "Gigabyte RTX 3060 12GB",
    image: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?q=80&w=1470&auto=format&fit=crop",
    price: 4799,
    category: "gpus",
    brand: "Gigabyte",
    specs: ["12GB GDDR6", "192-bit", "15 Gbps"],
    inStock: true,
    isPopular: true
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
    id: 30,
    name: "EVGA GeForce RTX 4080 Super",
    image: "https://images.unsplash.com/photo-1587431572088-a93c694aaecc?q=80&w=1438&auto=format&fit=crop",
    price: 12999,
    category: "gpus",
    brand: "EVGA",
    specs: ["16GB GDDR6X", "256-bit", "23 Gbps", "DLSS 3"],
    inStock: true,
    isNew: true
  }
];
