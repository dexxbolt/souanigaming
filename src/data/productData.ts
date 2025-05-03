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

// Expanded product data with new products
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
  },
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
    id: 15,
    name: "Glorious Mouse Pad XXL",
    image: "https://images.unsplash.com/photo-1624705475858-28a6ab052299?q=80&w=1632&auto=format&fit=crop",
    price: 249,
    category: "accessories",
    brand: "Glorious",
    specs: ["900x400mm", "3mm Thickness", "Cloth Surface"],
    inStock: true,
    isNew: false
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
    id: 21,
    name: "Logitech G502 Hero Mouse",
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=1374&auto=format&fit=crop",
    price: 799,
    category: "mice",
    brand: "Logitech",
    specs: ["25K DPI Sensor", "11 Programmable Buttons", "Adjustable Weights"],
    inStock: true,
    isNew: true
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
    id: 25,
    name: "ROG Strix Z690-E Gaming",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1470&auto=format&fit=crop",
    price: 3999,
    category: "motherboards",
    brand: "ASUS",
    specs: ["Intel Z690", "DDR5", "PCIe 5.0", "WiFi 6E"],
    inStock: true,
    isNew: true
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
    id: 30,
    name: "EVGA GeForce RTX 4080 Super",
    image: "https://images.unsplash.com/photo-1587431572088-a93c694aaecc?q=80&w=1438&auto=format&fit=crop",
    price: 12999,
    category: "gpus",
    brand: "EVGA",
    specs: ["16GB GDDR6X", "256-bit", "23 Gbps", "DLSS 3"],
    inStock: true,
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
  },
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
  },
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
  },
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

export const brands = ["All", "Gigabyte", "Kingston", "Samsung", "Razer", "MSI", "HyperX", "Logitech", "ASUS", "Intel", "Corsair", "NZXT", "AMD", "Cooler Master", "SteelSeries", "Glorious", "ViewSonic", "Blue", "Elgato", "EVGA", "ASRock", "Fractal Design", "Crucial", "Thermaltake", "Secretlab", "Lenovo", "Creative", "Lian Li", "AKG", "Keychron", "Dell"];
export const categories = ["All", "gpus", "storage", "keyboards", "headsets", "monitors", "processors", "power_supplies", "cases", "cooling", "mice", "accessories", "streaming", "motherboards", "laptops", "chairs", "audio"];
