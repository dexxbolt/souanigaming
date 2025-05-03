
import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, HardDrive, Keyboard, Wrench, Cpu, Headphones, Mouse, Fan } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "GPUs",
    icon: <Monitor className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=gpus",
    description: "Graphics cards from leading brands"
  },
  {
    id: 2,
    name: "Storage",
    icon: <HardDrive className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=storage",
    description: "SSDs, HDDs & RAM upgrades"
  },
  {
    id: 3,
    name: "Peripherals",
    icon: <Keyboard className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=keyboards",
    description: "Keyboards, mice & accessories"
  },
  {
    id: 4,
    name: "Repairs",
    icon: <Wrench className="w-12 h-12 text-mustang-red" />,
    path: "/repair-services",
    description: "Expert technical support"
  },
  {
    id: 5,
    name: "Processors",
    icon: <Cpu className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=processors",
    description: "Intel & AMD CPUs"
  },
  {
    id: 6,
    name: "Audio",
    icon: <Headphones className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=headsets",
    description: "Gaming headsets & speakers"
  },
  {
    id: 7,
    name: "Mice",
    icon: <Mouse className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=mice",
    description: "Gaming & precision mice"
  },
  {
    id: 8,
    name: "Cooling",
    icon: <Fan className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=cooling",
    description: "Fans, coolers & liquid cooling"
  }
];

const QuickCategories: React.FC = () => {
  return (
    <section className="py-12 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link 
              to={category.path} 
              key={category.id}
              className="bg-mustang-gray rounded-lg p-4 flex flex-col items-center justify-center transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-mustang-red/20 text-center"
            >
              <div className="mb-3">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
              <p className="text-xs text-gray-400 hidden md:block">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;
