
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import { Star, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Youssef",
      city: "Casablanca",
      date: "April 15, 2025",
      text: "I bought a GPU here, and it arrived the next day! Excellent service and great prices. The team was very helpful in choosing the right model for my PC.",
      rating: 5,
      product: "Gigabyte RTX 3060",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=987&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Amine",
      city: "Rabat",
      date: "April 10, 2025",
      text: "Best price in Morocco, 100% legit. The WhatsApp support is really helpful and they answered all my questions right away.",
      rating: 5,
      product: "Kingston RAM",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Malika",
      city: "Marrakech",
      date: "April 5, 2025",
      text: "They built my gaming setup from scratch. Amazing work and professional service! Everything was delivered on time and works perfectly.",
      rating: 5,
      product: "Custom PC Build",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Omar",
      city: "Tangier",
      date: "March 28, 2025",
      text: "Fast delivery to Tangier, just 2 days! Product was well packaged and exactly as described. Will order again.",
      rating: 5,
      product: "SteelSeries Headset",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Layla",
      city: "Agadir",
      date: "March 22, 2025",
      text: "The customer service is outstanding. They helped me troubleshoot an issue with my keyboard via WhatsApp video call. Impressive!",
      rating: 5,
      product: "Razer Keyboard",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Karim",
      city: "Fes",
      date: "March 18, 2025",
      text: "Ordered a gaming mouse that was hard to find elsewhere in Morocco. Fair price and fast shipping. Very satisfied.",
      rating: 4,
      product: "Logitech Gaming Mouse",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1528&auto=format&fit=crop"
    },
  ];

  // Group reviews by rating for statistics
  const fiveStars = reviews.filter(review => review.rating === 5).length;
  const fourStars = reviews.filter(review => review.rating === 4).length;
  const threeStars = reviews.filter(review => review.rating === 3).length;
  const twoStars = reviews.filter(review => review.rating === 2).length;
  const oneStars = reviews.filter(review => review.rating === 1).length;
  const totalReviews = reviews.length;
  
  // Calculate average rating
  const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-mustang-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Customer Reviews</h1>
        <p className="text-gray-300 max-w-3xl mb-12">
          See what our customers are saying about us. We pride ourselves on excellent service and quality products.
        </p>
        
        {/* Rating Summary */}
        <div className="bg-mustang-gray rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side: Overall rating */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-lg mb-2">Overall Rating</p>
              <div className="text-5xl font-bold text-white mb-2">{avgRating.toFixed(1)}</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < Math.round(avgRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}`}
                  />
                ))}
              </div>
              <p className="text-gray-400">Based on {totalReviews} reviews</p>
            </div>
            
            {/* Right side: Rating breakdown */}
            <div>
              {/* 5 stars */}
              <div className="flex items-center mb-2">
                <div className="flex w-24">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <div className="w-full bg-mustang-dark rounded-full h-2.5 mx-2">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(fiveStars / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="text-white w-10 text-right">{fiveStars}</span>
              </div>
              
              {/* 4 stars */}
              <div className="flex items-center mb-2">
                <div className="flex w-24">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                  <Star className="w-4 h-4 text-gray-500" />
                </div>
                <div className="w-full bg-mustang-dark rounded-full h-2.5 mx-2">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(fourStars / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="text-white w-10 text-right">{fourStars}</span>
              </div>
              
              {/* 3 stars */}
              <div className="flex items-center mb-2">
                <div className="flex w-24">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-500" />
                  ))}
                </div>
                <div className="w-full bg-mustang-dark rounded-full h-2.5 mx-2">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(threeStars / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="text-white w-10 text-right">{threeStars}</span>
              </div>
              
              {/* 2 stars */}
              <div className="flex items-center mb-2">
                <div className="flex w-24">
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-500" />
                  ))}
                </div>
                <div className="w-full bg-mustang-dark rounded-full h-2.5 mx-2">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(twoStars / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="text-white w-10 text-right">{twoStars}</span>
              </div>
              
              {/* 1 star */}
              <div className="flex items-center">
                <div className="flex w-24">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-500" />
                  ))}
                </div>
                <div className="w-full bg-mustang-dark rounded-full h-2.5 mx-2">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(oneStars / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="text-white w-10 text-right">{oneStars}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map(review => (
            <Card key={review.id} className="bg-mustang-gray border-none overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{review.name}</h3>
                    <p className="text-gray-400 text-sm">{review.city} • {review.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}`}
                    />
                  ))}
                  <span className="ml-2 text-mustang-red text-sm font-semibold">
                    {review.product}
                  </span>
                </div>
                
                <p className="text-white mb-4">{review.text}</p>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span>Verified Purchase</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Reviews;
