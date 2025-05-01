
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  brand: string;
  specs: string[];
  inStock: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  discount?: number;
  originalPrice?: number;
}

// Expanded product data
export const products: Product[] = [
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
    price: 1299,
    originalPrice: 1499,
    category: "keyboards",
    brand: "Razer",
    specs: ["Green Switches", "RGB", "Mechanical"],
    inStock: true,
    discount: 15
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
    id: 12,
    name: "AMD Ryzen 9 7900X",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1470&auto=format&fit=crop",
    price: 5999,
    category: "processors",
    brand: "AMD",
    specs: ["12 Cores", "5.6GHz Boost", "AM5 Socket"],
    inStock: true,
    isNew: true
  }
];

export const brands = ["All", "Gigabyte", "Kingston", "Samsung", "Razer", "MSI", "HyperX", "Logitech", "ASUS", "Intel", "Corsair", "NZXT", "AMD"];
export const categories = ["All", "gpus", "storage", "keyboards", "headsets", "monitors", "processors", "power_supplies", "cases"];
