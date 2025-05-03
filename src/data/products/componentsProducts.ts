
import { Product } from '../types/product';

export const processorProducts: Product[] = [
  {
    id: 9,
    name: "Intel Core i9-13900K",
    image: "https://images.unsplash.com/photo-1555618568-bdf5fe3a7ac6?q=80&w=1470&auto=format&fit=crop",
    price: 6999,
    category: "processors",
    brand: "Intel",
    specs: ["24 Cores", "5.8GHz Turbo", "LGA1700"],
    inStock: false,
    isNew: true
  },
  {
    id: 12,
    name: "AMD Ryzen 9 7900X",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1470&auto=format&fit=crop",
    price: 5999,
    category: "processors",
    brand: "AMD",
    specs: ["12 Cores", "5.6GHz Boost", "AM5 Socket"],
    inStock: true,
    isNew: true
  },
  {
    id: 33,
    name: "AMD Ryzen 7 7800X3D",
    image: "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=1469&auto=format&fit=crop",
    price: 4999,
    originalPrice: 5499,
    category: "processors",
    brand: "AMD",
    specs: ["8 Cores / 16 Threads", "5.0GHz Boost", "96MB Cache"],
    inStock: true,
    discount: 10
  }
];

export const powerSupplyProducts: Product[] = [
  {
    id: 10,
    name: "Corsair RM850x PSU",
    image: "https://images.unsplash.com/photo-1584937091918-37d1c07a6a66?q=80&w=1470&auto=format&fit=crop",
    price: 1799,
    category: "power_supplies",
    brand: "Corsair",
    specs: ["850W", "80+ Gold", "Fully Modular"],
    inStock: true,
    discount: 10
  },
  {
    id: 19,
    name: "EVGA SuperNOVA 650 G5",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1470&auto=format&fit=crop",
    price: 999,
    category: "power_supplies",
    brand: "EVGA",
    specs: ["650W", "80+ Gold", "Fully Modular"],
    inStock: true,
    discount: 15,
    originalPrice: 1199
  },
  {
    id: 36,
    name: "Thermaltake Toughpower GF3 850W",
    image: "https://images.unsplash.com/photo-1558210652-b46d5839a34b?q=80&w=1374&auto=format&fit=crop",
    price: 1599,
    category: "power_supplies",
    brand: "Thermaltake",
    specs: ["850W", "Fully Modular", "80+ Gold"],
    inStock: true,
    isNew: false
  }
];

export const caseProducts: Product[] = [
  {
    id: 11,
    name: "NZXT H510 Case",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1471&auto=format&fit=crop",
    price: 999,
    category: "cases",
    brand: "NZXT",
    specs: ["Mid Tower", "Tempered Glass", "USB-C"],
    inStock: true,
    isPopular: true
  },
  {
    id: 24,
    name: "Fractal Design Meshify C",
    image: "https://images.unsplash.com/photo-1587202372683-35c7a8280c0b?q=80&w=1470&auto=format&fit=crop",
    price: 899,
    category: "cases",
    brand: "Fractal Design",
    specs: ["Mid Tower", "Tempered Glass", "High Airflow"],
    inStock: true,
    isNew: false
  },
  {
    id: 40,
    name: "Lian Li PC-O11 Dynamic",
    image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=1374&auto=format&fit=crop",
    price: 1499,
    category: "cases",
    brand: "Lian Li",
    specs: ["Mid Tower", "Dual Chamber Design", "Tempered Glass"],
    inStock: true,
    isPopular: true
  }
];

export const motherboardProducts: Product[] = [
  {
    id: 20,
    name: "ASRock B550M-ITX/ac",
    image: "https://images.unsplash.com/photo-1563770660941-10958cec9bc1?q=80&w=1470&auto=format&fit=crop",
    price: 1299,
    category: "motherboards",
    brand: "ASRock",
    specs: ["AMD B550", "Mini-ITX", "Wi-Fi"],
    inStock: true,
    isNew: false
  },
  {
    id: 25,
    name: "ROG Strix Z690-E Gaming",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1470&auto=format&fit=crop",
    price: 3999,
    category: "motherboards",
    brand: "ASUS",
    specs: ["Intel Z690", "DDR5", "PCIe 5.0", "WiFi 6E"],
    inStock: true,
    isNew: true
  }
];

export const coolingProducts: Product[] = [
  {
    id: 13,
    name: "Cooler Master Hyper 212",
    image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=1374&auto=format&fit=crop",
    price: 349,
    category: "cooling",
    brand: "Cooler Master",
    specs: ["120mm Fan", "Direct Contact", "Universal Socket Support"],
    inStock: true,
    isPopular: false
  },
  {
    id: 27,
    name: "NZXT Kraken X73 RGB",
    image: "https://images.unsplash.com/photo-1587202372255-21c7845ece37?q=80&w=1470&auto=format&fit=crop",
    price: 2499,
    category: "cooling",
    brand: "NZXT",
    specs: ["360mm Radiator", "RGB Infinity Mirror", "CAM Software"],
    inStock: true,
    isPopular: true
  }
];
