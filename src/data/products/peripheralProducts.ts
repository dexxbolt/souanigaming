
import { Product } from '../types/product';

// Keyboards, mice, and accessories
export const keyboardProducts: Product[] = [
  {
    id: 4,
    name: "Razer BlackWidow V3",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    price: 1299,
    originalPrice: 1499,
    category: "keyboards",
    brand: "Razer",
    specs: ["Green Switches", "RGB", "Mechanical"],
    inStock: true,
    discount: 15
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
  {
    id: 28,
    name: "Razer Huntsman Elite",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    price: 1899,
    category: "keyboards",
    brand: "Razer",
    specs: ["Optical Switches", "RGB", "Wrist Rest"],
    inStock: true,
    isNew: true
  },
  {
    id: 34,
    name: "Keychron Q1 Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?q=80&w=1472&auto=format&fit=crop",
    price: 1799,
    category: "keyboards",
    brand: "Keychron",
    specs: ["Hot-swappable", "QMK/VIA Compatible", "Gasket Mount"],
    inStock: true,
    isNew: true
  }
];

export const mouseProducts: Product[] = [
  {
    id: 14,
    name: "SteelSeries Rival 600",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1528&auto=format&fit=crop",
    price: 899,
    originalPrice: 999,
    category: "mice",
    brand: "SteelSeries",
    specs: ["12,000 DPI", "Dual Optical Sensor", "Weight System"],
    inStock: true,
    discount: 10
  },
  {
    id: 21,
    name: "Logitech G502 Hero Mouse",
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=1374&auto=format&fit=crop",
    price: 799,
    category: "mice",
    brand: "Logitech",
    specs: ["25K DPI Sensor", "11 Programmable Buttons", "Adjustable Weights"],
    inStock: true,
    isNew: true
  }
];

export const accessoryProducts: Product[] = [
  {
    id: 15,
    name: "Glorious Mouse Pad XXL",
    image: "https://images.unsplash.com/photo-1624705475858-28a6ab052299?q=80&w=1632&auto=format&fit=crop",
    price: 249,
    category: "accessories",
    brand: "Glorious",
    specs: ["900x400mm", "3mm Thickness", "Cloth Surface"],
    inStock: true,
    isNew: false
  }
];
