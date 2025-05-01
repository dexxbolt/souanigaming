
import React from 'react';

// Brand logos would ideally be unique brand SVGs or images
const brands = [
  { id: 1, name: "RAZER", logo: "RAZER" },
  { id: 2, name: "LOGITECH", logo: "LOGITECH" },
  { id: 3, name: "HYPERX", logo: "HYPERX" },
  { id: 4, name: "STEELSERIES", logo: "STEELSERIES" },
  { id: 5, name: "CORSAIR", logo: "CORSAIR" },
  { id: 6, name: "ASUS", logo: "ASUS" },
];

const Brands: React.FC = () => {
  return (
    <section className="py-12 bg-mustang-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-white mb-8">TOP BRANDS</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.id} className="opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-xl md:text-2xl font-bold text-white">{brand.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
