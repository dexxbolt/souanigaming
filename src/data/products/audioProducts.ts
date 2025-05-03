
import { Product } from '../types/product';

export const headsetProducts: Product[] = [
  {
    id: 7,
    name: "Logitech G Pro X Wireless",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1470&auto=format&fit=crop",
    price: 1999,
    category: "headsets",
    brand: "Logitech",
    specs: ["7.1 Surround Sound", "20h Battery", "PRO-G Drivers"],
    inStock: true,
    isNew: true
  },
  {
    id: 29,
    name: "SteelSeries Arctis Pro",
    image: "https://images.unsplash.com/photo-1642790551116-18e150f248d5?q=80&w=1472&auto=format&fit=crop",
    price: 1999,
    category: "headsets",
    brand: "SteelSeries",
    specs: ["Hi-Res Audio", "RGB", "DTS Headphone:X v2.0"],
    inStock: false,
    isPopular: true
  },
  {
    id: 32,
    name: "AKG K712 Pro Studio Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
    price: 2499,
    category: "headsets",
    brand: "AKG",
    specs: ["Open-Back Design", "Studio Quality", "Wide Soundstage"],
    inStock: true,
    isPopular: false
  }
];

export const audioProducts: Product[] = [
  {
    id: 39,
    name: "Creative Sound BlasterX G6",
    image: "https://images.unsplash.com/photo-1631406920877-057d4767cc10?q=80&w=1470&auto=format&fit=crop",
    price: 999,
    category: "audio",
    brand: "Creative",
    specs: ["External DAC/Amp", "Virtual 7.1", "Scout Mode"],
    inStock: true,
    isNew: false
  }
];
