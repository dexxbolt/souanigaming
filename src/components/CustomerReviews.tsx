
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Youssef",
    text: "I bought a GPU here, and it arrived the next day! Excellent service and great prices.",
    rating: 5
  },
  {
    id: 2,
    name: "Amine",
    text: "Best price in Casablanca, 100% legit. The WhatsApp support is really helpful.",
    rating: 5
  },
  {
    id: 3,
    name: "Malika",
    text: "They built my setup from scratch. Amazing work and professional service!",
    rating: 5
  }
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">WHAT OUR CUSTOMERS SAY</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-mustang-gray rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-white mb-4 italic">"{review.text}"</p>
              <p className="text-mustang-red font-semibold">- {review.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="/reviews" className="text-white border-b-2 border-mustang-red hover:text-mustang-red transition-colors">
            See all reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
