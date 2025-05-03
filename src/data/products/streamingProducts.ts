
import { Product } from '../types/product';

export const streamingProducts: Product[] = [
  {
    id: 17,
    name: "Blue Yeti Microphone",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1470&auto=format&fit=crop",
    price: 1299,
    category: "streaming",
    brand: "Blue",
    specs: ["Condenser", "USB", "Multiple Patterns"],
    inStock: true,
    isPopular: true
  },
  {
    id: 18,
    name: "Elgato Stream Deck",
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=1470&auto=format&fit=crop",
    price: 1499,
    category: "streaming",
    brand: "Elgato",
    specs: ["15 LCD Keys", "Customizable", "Stream Control"],
    inStock: false,
    isNew: true
  },
  {
    id: 31,
    name: "Razer Kiyo Pro Webcam",
    image: "https://images.unsplash.com/photo-1618173745198-42b34701886a?q=80&w=1470&auto=format&fit=crop",
    price: 1899,
    category: "streaming",
    brand: "Razer",
    specs: ["1080p 60FPS", "Adaptive Light Sensor", "Wide Angle Lens"],
    inStock: true,
    isNew: true
  }
];
