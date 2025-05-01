
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mustang-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <h1 className="text-2xl font-bold text-white mr-1">MUSTANG</h1>
              <span className="text-mustang-red text-2xl font-bold">GAMING</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Morocco's trusted tech supplier. Premium gaming peripherals and accessories for professional gamers and enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mustang-red" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mustang-red" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mustang-red" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mustang-red" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-mustang-red">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-mustang-red">Products</Link>
              </li>
              <li>
                <Link to="/repair-services" className="text-gray-400 hover:text-mustang-red">Repair Services</Link>
              </li>
              <li>
                <Link to="/custom-builds" className="text-gray-400 hover:text-mustang-red">Custom Builds</Link>
              </li>
              <li>
                <Link to="/how-to-order" className="text-gray-400 hover:text-mustang-red">How to Order</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-mustang-red">Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-mustang-red">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-mustang-red">Terms & Policies</Link>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Clock size={16} className="mr-2 text-mustang-red" />
                <span>Monday - Friday: 9AM - 7PM</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock size={16} className="mr-2 text-mustang-red" />
                <span>Saturday: 10AM - 6PM</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock size={16} className="mr-2 text-mustang-red" />
                <span>Sunday: Closed</span>
              </li>
              <li className="mt-4">
                <WhatsAppButton label="Chat on WhatsApp" message="Hi, I'd like to know more about your products." />
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-mustang-red mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Gaming Street, Casablanca, Morocco</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-mustang-red mr-3 flex-shrink-0" />
                <span className="text-gray-400">+212 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-mustang-red mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@mustanggaming.ma</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-mustang-gray">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mustang Gaming. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Payment Methods:</span>
              <div className="flex space-x-2">
                <CreditCard size={20} className="text-gray-400" />
                <CreditCard size={20} className="text-gray-400" />
                <CreditCard size={20} className="text-gray-400" />
                <CreditCard size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
