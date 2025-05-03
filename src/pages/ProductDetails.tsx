
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import WhatsAppButton from '../components/WhatsAppButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '../data/productData';
import ProductReviews from '../components/products/ProductReviews';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  // Find the product with the matching ID
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen bg-mustang-dark">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white">Product not found</h1>
          <p className="text-gray-300 mt-4">The product you are looking for does not exist.</p>
          <Button className="btn-mustang mt-8" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Mock additional images
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587202372583-49d0d0c71c58?q=80&w=1470&auto=format&fit=crop"
  ];
  
  // Technical specifications
  const specifications = {
    gpus: {
      "Memory Type": product.specs[0],
      "Memory Bus": product.specs[1],
      "Memory Speed": product.specs[2],
      "DirectX": "12 Ultimate",
      "CUDA Cores/Stream Processors": "Varies by model",
      "Interface": "PCI Express 4.0",
      "Power Connectors": "8-pin",
    },
    keyboards: {
      "Switch Type": product.specs[0],
      "Lighting": product.specs[1],
      "Type": product.specs[2],
      "Layout": "104-key",
      "Anti-ghosting": "Yes",
      "N-key rollover": "Yes",
      "Cable": "USB 2.0, Braided"
    }
  };
  
  // Choose the right specs based on category, fallback to generic if not found
  const specs = specifications[product.category as keyof typeof specifications] || {
    "Feature 1": product.specs[0],
    "Feature 2": product.specs[1],
    "Feature 3": product.specs[2],
  };

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <a href="/products" className="text-gray-400 hover:text-white">Products</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <a href={`/products?category=${product.category}`} className="text-gray-400 hover:text-white">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('_', ' ')}
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-white">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="bg-mustang-gray rounded-lg overflow-hidden mb-4">
              <img 
                src={productImages[activeImage]} 
                alt={product.name} 
                className="w-full h-auto object-contain aspect-square"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  className={`bg-mustang-gray rounded-lg overflow-hidden cursor-pointer ${
                    activeImage === index ? 'ring-2 ring-mustang-red' : ''
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                  <p className="text-gray-400">Brand: <span className="text-white">{product.brand}</span></p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white">(4.8)</span>
              <span className="mx-2 text-gray-500">|</span>
              <span className="text-gray-400">12 reviews</span>
            </div>
            
            <div className="mb-6">
              {product.discount ? (
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-mustang-red mr-3">{product.price} MAD</span>
                  <span className="text-xl text-gray-400 line-through">{product.originalPrice || Math.round(product.price / (1 - product.discount / 100))} MAD</span>
                  <Badge className="ml-3 bg-mustang-red text-white">{product.discount}% OFF</Badge>
                </div>
              ) : (
                <div className="text-3xl font-bold text-mustang-red mb-2">{product.price} MAD</div>
              )}
              
              <p className="text-green-500">
                {product.inStock ? "✓ In Stock" : "× Out of Stock"}
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <WhatsAppButton
                label="Buy via WhatsApp"
                message={`Hello, I'm interested in purchasing the ${product.name} for ${product.price} MAD. Is it available?`}
                productName={product.name}
                className="flex-1"
              />
              
              <Button className="flex-1 bg-mustang-dark hover:bg-mustang-gray" disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
            
            <div className="bg-mustang-gray rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Shipping & Returns:</h3>
              <p className="text-gray-300 text-sm">
                • Free shipping to all major Moroccan cities<br />
                • Delivery within 24-72 hours<br />
                • 7-day return policy for unopened items<br />
                • Standard manufacturer warranty applies
              </p>
            </div>
          </div>
        </div>
        
        {/* Tabs for additional info */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="w-full justify-start bg-mustang-gray mb-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-gray-300">
            <div className="bg-mustang-gray rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">{product.name}</h2>
              <p className="mb-4">
                Experience exceptional performance with the {product.name}. Designed for demanding users and gaming enthusiasts 
                who require reliable hardware for their daily computing needs.
              </p>
              <p className="mb-4">
                The {product.name} features cutting-edge technology to deliver outstanding performance in all scenarios, 
                whether you're gaming, creating content, or running multiple applications simultaneously.
              </p>
              <p>
                Built with premium components and backed by {product.brand}'s reputation for quality, 
                this product offers the perfect balance of performance, efficiency, and value.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications">
            <div className="bg-mustang-gray rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">General</h3>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 pr-4 text-gray-400">Brand</td>
                        <td className="py-2 text-white">{product.brand}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 pr-4 text-gray-400">Model</td>
                        <td className="py-2 text-white">{product.name}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 pr-4 text-gray-400">Category</td>
                        <td className="py-2 text-white">{product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('_', ' ')}</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 pr-4 text-gray-400">Warranty</td>
                        <td className="py-2 text-white">Manufacturer's warranty</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Product Specific</h3>
                  <table className="w-full text-left">
                    <tbody>
                      {Object.entries(specs).map(([key, value], index) => (
                        <tr key={key} className={`${index < Object.entries(specs).length - 1 ? 'border-b border-gray-700' : ''}`}>
                          <td className="py-2 pr-4 text-gray-400">{key}</td>
                          <td className="py-2 text-white">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <ProductReviews productId={product.id} />
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default ProductDetails;
