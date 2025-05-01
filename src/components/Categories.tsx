
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: "Keyboards",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    path: "/category/keyboards"
  },
  {
    id: 2,
    name: "Mice",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1528&auto=format&fit=crop",
    path: "/category/mice"
  },
  {
    id: 3,
    name: "Headsets",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1470&auto=format&fit=crop",
    path: "/category/headsets"
  },
  {
    id: 4,
    name: "Chairs",
    image: "https://images.unsplash.com/photo-1616626298060-8d071eb359f6?q=80&w=1470&auto=format&fit=crop",
    path: "/category/chairs"
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">SHOP BY CATEGORY</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              to={category.path} 
              key={category.id} 
              className="relative overflow-hidden rounded-lg group h-48 md:h-64"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 w-full p-4 text-center">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <span className="inline-block mt-2 text-sm font-medium text-mustang-red opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
