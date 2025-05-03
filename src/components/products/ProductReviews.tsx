
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ReviewProps {
  productId: number;
}

const reviews = {
  1: [
    {
      id: 1,
      name: "Ahmed K.",
      avatar: "AK",
      rating: 5,
      date: "2025-03-15",
      comment: "This GPU is amazing! I'm getting great frame rates on all my games at 1440p. The 12GB VRAM is future-proof and the build quality is excellent."
    },
    {
      id: 2,
      name: "Sophia L.",
      avatar: "SL",
      rating: 4,
      date: "2025-02-28",
      comment: "Very good performance for the price. Runs cool and quiet even under load. I removed one star because the RGB software is a bit finicky."
    },
    {
      id: 3,
      name: "Mohammed R.",
      avatar: "MR",
      rating: 5,
      date: "2025-02-10",
      comment: "Perfect for my gaming needs. Easy installation and works right out of the box. Would definitely recommend!"
    }
  ],
  5: [
    {
      id: 1,
      name: "Yasmine M.",
      avatar: "YM",
      rating: 5,
      date: "2025-04-02",
      comment: "The RTX 4060 is a significant upgrade from my old card. DLSS 3.0 is a game-changer, and I'm very impressed with the performance."
    },
    {
      id: 2,
      name: "Karim B.",
      avatar: "KB",
      rating: 5,
      date: "2025-03-21",
      comment: "Very energy efficient while delivering excellent performance. Great for 1080p gaming with high refresh rates."
    }
  ],
  8: [
    {
      id: 1,
      name: "Leila T.",
      avatar: "LT",
      rating: 4,
      date: "2025-04-05",
      comment: "Great monitor for gaming. Colors are vibrant and the 165Hz refresh rate makes everything smooth. Only complaint is the stand could be more adjustable."
    },
    {
      id: 2,
      name: "Hassan J.",
      avatar: "HJ",
      rating: 5,
      date: "2025-03-12",
      comment: "Perfect monitor for my setup. The 1ms response time eliminates ghosting completely, and the colors are accurate right out of the box."
    }
  ]
};

// Default reviews for products without specific reviews
const defaultReviews = [
  {
    id: 1,
    name: "Customer",
    avatar: "CU",
    rating: 4,
    date: "2025-03-28",
    comment: "Good product, works as expected. Fast shipping and good communication from the seller."
  }
];

const ProductReviews: React.FC<ReviewProps> = ({ productId }) => {
  const productReviews = reviews[productId as keyof typeof reviews] || defaultReviews;
  
  const averageRating = productReviews.reduce((acc, review) => acc + review.rating, 0) / productReviews.length;
  
  const ratingCounts = {
    5: productReviews.filter(r => r.rating === 5).length,
    4: productReviews.filter(r => r.rating === 4).length,
    3: productReviews.filter(r => r.rating === 3).length,
    2: productReviews.filter(r => r.rating === 2).length,
    1: productReviews.filter(r => r.rating === 1).length,
  };
  
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-white mb-6">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Rating Summary */}
        <div className="lg:col-span-1">
          <div className="bg-mustang-gray rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-white">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center my-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                  />
                ))}
              </div>
              <div className="text-gray-400 text-sm">{productReviews.length} reviews</div>
            </div>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center">
                  <div className="w-12 text-gray-300 text-sm">{rating} stars</div>
                  <div className="flex-1 mx-2">
                    <Progress 
                      value={(ratingCounts[rating as keyof typeof ratingCounts] / productReviews.length) * 100} 
                      className="h-2"
                    />
                  </div>
                  <div className="w-8 text-right text-gray-300 text-sm">
                    {ratingCounts[rating as keyof typeof ratingCounts]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Review List */}
        <div className="lg:col-span-3 space-y-4">
          {productReviews.map(review => (
            <Card key={review.id} className="bg-mustang-gray border-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-mustang-dark text-white">{review.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-gray-400 text-sm">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
