
import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, HardDrive, Keyboard, Wrench } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "GPUs",
    icon: <Monitor className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=gpus"
  },
  {
    id: 2,
    name: "SSDs & RAM",
    icon: <HardDrive className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=storage"
  },
  {
    id: 3,
    name: "Gaming Keyboards",
    icon: <Keyboard className="w-12 h-12 text-mustang-red" />,
    path: "/products?category=keyboards"
  },
  {
    id: 4,
    name: "Repairs",
    icon: <Wrench className="w-12 h-12 text-mustang-red" />,
    path: "/repair-services"
  }
];

const QuickCategories: React.FC = () => {
  return (
    <section className="py-12 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              to={category.path} 
              key={category.id}
              className="bg-mustang-gray rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105"
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;
