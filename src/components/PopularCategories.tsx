
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight, Monitor, Keyboard, Mouse, Headphones, Cpu, HardDrive } from 'lucide-react';

const categories = [
  {
    name: "Monitors",
    icon: <Monitor className="w-8 h-8 text-mustang-red" />,
    description: "High refresh rate gaming monitors for competitive play",
    count: 12,
    path: "/products?category=monitors"
  },
  {
    name: "Keyboards",
    icon: <Keyboard className="w-8 h-8 text-mustang-red" />,
    description: "Mechanical gaming keyboards with RGB lighting",
    count: 15,
    path: "/products?category=keyboards"
  },
  {
    name: "Mice",
    icon: <Mouse className="w-8 h-8 text-mustang-red" />,
    description: "Precision gaming mice with adjustable DPI",
    count: 10,
    path: "/products?category=mice"
  },
  {
    name: "Headsets",
    icon: <Headphones className="w-8 h-8 text-mustang-red" />,
    description: "Immersive gaming audio with surround sound",
    count: 8,
    path: "/products?category=headsets"
  },
  {
    name: "Processors",
    icon: <Cpu className="w-8 h-8 text-mustang-red" />,
    description: "High-performance CPUs for gaming and productivity",
    count: 6,
    path: "/products?category=processors"
  },
  {
    name: "Storage",
    icon: <HardDrive className="w-8 h-8 text-mustang-red" />,
    description: "Fast SSDs and reliable HDDs for your gaming rig",
    count: 9,
    path: "/products?category=storage"
  }
];

const PopularCategories: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">POPULAR CATEGORIES</h2>
          <Link to="/products" className="text-mustang-red hover:underline flex items-center">
            View All Categories <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={category.path}>
              <Card className="bg-mustang-gray border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="p-6 flex items-start">
                  <div className="mr-4 mt-1">
                    {category.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white text-xl font-bold">{category.name}</h3>
                      <Badge variant="outline" className="bg-mustang-red bg-opacity-20 text-mustang-red border-mustang-red">
                        {category.count} items
                      </Badge>
                    </div>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
