
import { Product } from '../types/product';

export const storageProducts: Product[] = [
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
    id: 22,
    name: "Corsair Vengeance RGB Pro 32GB",
    image: "https://images.unsplash.com/photo-1592864431314-20c74e92fab7?q=80&w=1470&auto=format&fit=crop",
    price: 1499,
    category: "storage",
    brand: "Corsair",
    specs: ["32GB (2x16GB)", "3600MHz", "RGB Lighting"],
    inStock: true,
    isPopular: true
  },
  {
    id: 26,
    name: "Crucial P5 Plus 2TB SSD",
    image: "https://images.unsplash.com/photo-1597338770339-2e2b74a92c70?q=80&w=1632&auto=format&fit=crop",
    price: 2799,
    originalPrice: 2999,
    category: "storage",
    brand: "Crucial",
    specs: ["PCIe 4.0", "6600MB/s Read", "NVMe"],
    inStock: true,
    discount: 8
  }
];
