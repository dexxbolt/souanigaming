
import { Product } from '../types/product';

export const monitorProducts: Product[] = [
  {
    id: 8,
    name: "ASUS TUF Gaming Monitor",
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=1470&auto=format&fit=crop",
    price: 2799,
    category: "monitors",
    brand: "ASUS",
    specs: ["27\" IPS", "165Hz", "1ms Response Time"],
    inStock: true,
    isPopular: true
  },
  {
    id: 16,
    name: "ViewSonic XG2401 24\" Monitor",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1471&auto=format&fit=crop",
    price: 1999,
    category: "monitors",
    brand: "ViewSonic",
    specs: ["144Hz", "1ms Response Time", "FreeSync"],
    inStock: true,
    isPopular: false
  },
  {
    id: 23,
    name: "Samsung Odyssey G7 Monitor",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1674&auto=format&fit=crop",
    price: 4999,
    originalPrice: 5499,
    category: "monitors",
    brand: "Samsung",
    specs: ["32\" Curved", "240Hz", "1ms Response Time", "QLED"],
    inStock: true,
    discount: 10
  },
  {
    id: 35,
    name: "Dell Alienware AW3423DW",
    image: "https://images.unsplash.com/photo-1635768696374-841c66525809?q=80&w=1429&auto=format&fit=crop",
    price: 12999,
    originalPrice: 13999,
    category: "monitors",
    brand: "Dell",
    specs: ["34\" QD-OLED", "175Hz", "G-SYNC Ultimate"],
    inStock: false,
    discount: 8
  }
];
