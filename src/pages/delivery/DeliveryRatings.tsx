import { Star, ThumbsUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ratingBreakdown = [
  { stars: 5, count: 180, pct: 72 },
  { stars: 4, count: 45, pct: 18 },
  { stars: 3, count: 15, pct: 6 },
  { stars: 2, count: 7, pct: 3 },
  { stars: 1, count: 3, pct: 1 },
];

const reviews = [
  { customer: "John D.", rating: 5, comment: "Super fast delivery! The food was still hot. Great service!", date: "2 hours ago" },
  { customer: "Sarah M.", rating: 5, comment: "Very polite and professional. Found the address easily.", date: "5 hours ago" },
  { customer: "Priya S.", rating: 4, comment: "Good delivery, just a couple minutes late but food was fine.", date: "1 day ago" },
  { customer: "James K.", rating: 5, comment: "Best delivery partner in the area! Always on time.", date: "2 days ago" },
  { customer: "Maria L.", rating: 5, comment: "Excellent service. Will definitely order again.", date: "3 days ago" },
];

const DeliveryRatings = () => {
  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold">My Ratings</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Overall */}
        <div className="section-card lg:col-span-1">
          <div className="section-content text-center py-8">
            <p className="text-6xl font-bold text-primary mb-2">4.9</p>
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Based on 250 ratings</p>
            <div className="mt-6 flex items-center justify-center gap-2 text-success">
              <ThumbsUp className="w-5 h-5" />
              <span className="font-medium">Top Rated Partner</span>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="section-card lg:col-span-2">
          <div className="section-header"><h3 className="font-semibold">Rating Breakdown</h3></div>
          <div className="section-content space-y-3">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-3">
                <span className="text-sm font-medium w-12">{r.stars} star</span>
                <Progress value={r.pct} className="flex-1 h-2.5" />
                <span className="text-sm text-muted-foreground w-16 text-right">{r.count} ({r.pct}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="section-card">
        <div className="section-header"><h3 className="font-semibold">Recent Reviews</h3></div>
        <div className="divide-y divide-border">
          {reviews.map((review, i) => (
            <div key={i} className="p-5 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-golden flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                {review.customer.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm">{review.customer}</p>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryRatings;
