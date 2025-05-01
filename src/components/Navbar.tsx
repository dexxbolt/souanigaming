
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User, Headphones, Settings, PanelRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-mustang-dark border-b border-mustang-gray">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white mr-2">SOUANI</h1>
            <span className="text-mustang-red text-2xl font-bold">GAMING</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/products" className="nav-link font-medium">Products</Link>
            <Link to="/repair-services" className="nav-link font-medium">Repair Services</Link>
            <Link to="/custom-builds" className="nav-link font-medium">Custom Builds</Link>
            <Link to="/how-to-order" className="nav-link font-medium">How To Order</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-mustang-red" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-white hover:text-mustang-red relative" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-mustang-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-mustang-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-mustang-gray animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/products" className="nav-link font-medium">Products</Link>
            <Link to="/repair-services" className="nav-link font-medium">Repair Services</Link>
            <Link to="/custom-builds" className="nav-link font-medium">Custom Builds</Link>
            <Link to="/how-to-order" className="nav-link font-medium">How To Order</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
            <hr className="border-mustang-gray" />
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-mustang-red" aria-label="Search">
                <Search size={20} />
              </button>
              <Link to="/cart" className="text-white hover:text-mustang-red relative" aria-label="Cart">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-mustang-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
