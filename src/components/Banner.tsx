
import React from 'react';
import { Button } from './ui/button';

const Banner: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop')",
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SUMMER SALE IS LIVE
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-lg">
              Up to 40% off on selected gaming peripherals. Limited time offer.
            </p>
            <Button className="btn-mustang font-bold px-8">
              SHOP THE SALE
            </Button>
          </div>
          
          <div className="bg-mustang-red rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rotate-12 shadow-lg">
            <div className="-rotate-12">
              <p className="text-white font-bold">UP TO</p>
              <p className="text-4xl md:text-5xl font-bold text-white">40%</p>
              <p className="text-white font-bold">OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
