
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "GAMING PERIPHERALS",
    subtitle: "ULTIMATE GAMING GEAR",
    description: "Discover our premium gaming equipment for the ultimate gaming experience",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1470&auto=format&fit=crop",
    ctaText: "SHOP NOW"
  },
  {
    id: 2,
    title: "NEW GAMING KEYBOARDS",
    subtitle: "MECHANICAL PRECISION",
    description: "Experience the precision and speed of our mechanical keyboards",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
    ctaText: "DISCOVER"
  },
  {
    id: 3,
    title: "GAMING CHAIRS",
    subtitle: "COMFORT & STYLE",
    description: "Game in comfort with our ergonomic gaming chairs",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1470&auto=format&fit=crop",
    ctaText: "EXPLORE"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slide.image})`, 
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          
          <div className="container mx-auto h-full px-4 relative z-10">
            <div className="flex flex-col justify-center h-full max-w-xl">
              <span className="text-mustang-red font-bold tracking-wider mb-2">
                {slide.subtitle}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h2>
              <p className="text-white/80 text-lg mb-6">
                {slide.description}
              </p>
              <div>
                <Button className="btn-mustang font-bold">
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-mustang-red p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-mustang-red p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-mustang-red" : "bg-gray-400"
            } transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
