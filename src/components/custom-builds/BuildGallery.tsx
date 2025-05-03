
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from '../WhatsAppButton';

const builds = [
  {
    id: 1,
    name: "GAMING BEAST",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1470&auto=format&fit=crop",
    specs: [
      "Intel Core i9-13900K",
      "NVIDIA RTX 4080 16GB",
      "32GB DDR5 RAM",
      "2TB NVMe SSD",
      "Custom RGB Cooling"
    ],
    price: 22999,
    category: "High-End Gaming"
  },
  {
    id: 2,
    name: "CREATOR PRO",
    image: "https://images.unsplash.com/photo-1587202372562-9e5bf5c40201?q=80&w=1470&auto=format&fit=crop",
    specs: [
      "AMD Ryzen 9 7950X",
      "NVIDIA RTX 4070 Ti",
      "64GB DDR5 RAM",
      "4TB NVMe SSD",
      "Liquid Cooling"
    ],
    price: 19999,
    category: "Content Creation"
  },
  {
    id: 3,
    name: "BUDGET GAMER",
    image: "https://images.unsplash.com/photo-1587202372583-49d0d0c71c58?q=80&w=1470&auto=format&fit=crop",
    specs: [
      "Intel Core i5-13600K",
      "NVIDIA RTX 3060 12GB",
      "16GB DDR4 RAM",
      "1TB NVMe SSD",
      "RGB Air Cooling"
    ],
    price: 8999,
    category: "Budget Gaming"
  },
  {
    id: 4,
    name: "COMPACT POWERHOUSE",
    image: "https://images.unsplash.com/photo-1587202372699-6bc3ebdf55a1?q=80&w=1470&auto=format&fit=crop",
    specs: [
      "AMD Ryzen 7 7700X",
      "NVIDIA RTX 4060 Ti",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "ITX Form Factor"
    ],
    price: 12999,
    category: "Small Form Factor"
  }
];

const BuildGallery: React.FC = () => {
  return (
    <div className="bg-mustang-gray rounded-lg p-8">
      <h2 className="text-xl font-bold text-white mb-6">Featured Custom Builds</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {builds.map((build) => (
          <Card key={build.id} className="bg-mustang-dark border-none overflow-hidden">
            <div className="relative">
              <img 
                src={build.image} 
                alt={build.name} 
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-mustang-red text-white">
                {build.category}
              </Badge>
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{build.name}</h3>
              <ul className="text-gray-300 mb-4 text-sm space-y-1">
                {build.specs.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mustang-red mr-2">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-mustang-red">{build.price} MAD</div>
                <span className="text-gray-400 text-sm">Customizable</span>
              </div>
              
              <WhatsAppButton
                label="Inquire About This Build"
                message={`Hi, I'm interested in the ${build.name} custom build for ${build.price} MAD. Can I get more details?`}
                productName={build.name}
                className="w-full"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BuildGallery;
