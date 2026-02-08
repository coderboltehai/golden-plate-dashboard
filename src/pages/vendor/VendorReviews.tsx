import { motion } from "framer-motion";
import { 
  Star, 
  ThumbsUp, 
  MessageSquare,
  TrendingUp,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { StatCard } from "@/components/dashboard/StatCard";

const reviews = [
  { id: 1, customer: "John Doe", rating: 5, comment: "Best pizza in town! The crust was perfectly crispy and the toppings were fresh. Will definitely order again!", date: "Feb 5, 2026", order: "Margherita Pizza, Garlic Bread", helpful: 12, replied: true },
  { id: 2, customer: "Jane Smith", rating: 5, comment: "Amazing food and super fast delivery. The pepperoni pizza was delicious!", date: "Feb 4, 2026", order: "Pepperoni Pizza x2", helpful: 8, replied: false },
  { id: 3, customer: "Mike Johnson", rating: 4, comment: "Good pizza overall. Could use a bit more cheese but still tasty.", date: "Feb 3, 2026", order: "Hawaiian Pizza", helpful: 3, replied: true },
  { id: 4, customer: "Sarah Wilson", rating: 5, comment: "Absolutely love this place! The meat lovers pizza is incredible.", date: "Feb 2, 2026", order: "Meat Lovers Pizza, Wings", helpful: 15, replied: false },
  { id: 5, customer: "Tom Brown", rating: 3, comment: "Delivery was a bit late but the food was still warm. Taste was good.", date: "Feb 1, 2026", order: "Margherita Pizza", helpful: 2, replied: true },
];

const ratingDistribution = [
  { stars: 5, count: 156, percentage: 65 },
  { stars: 4, count: 58, percentage: 24 },
  { stars: 3, count: 18, percentage: 8 },
  { stars: 2, count: 5, percentage: 2 },
  { stars: 1, count: 3, percentage: 1 },
];

export default function VendorReviews() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Reviews</h1>
          <p className="text-muted-foreground mt-1">Customer feedback and ratings</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Overall Rating"
          value="4.8"
          change={2.5}
          changeLabel="vs last month"
          icon={Star}
          variant="primary"
          delay={0}
        />
        <StatCard
          title="Total Reviews"
          value="240"
          change={18}
          changeLabel="this month"
          icon={MessageSquare}
          delay={0.1}
        />
        <StatCard
          title="Response Rate"
          value="85%"
          change={5}
          changeLabel="improvement"
          icon={ThumbsUp}
          delay={0.2}
        />
        <StatCard
          title="5-Star Reviews"
          value="65%"
          change={3.2}
          changeLabel="vs last month"
          icon={TrendingUp}
          delay={0.3}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Rating Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="section-card"
        >
          <div className="section-header">
            <h3 className="text-lg font-semibold">Rating Distribution</h3>
          </div>
          <div className="section-content space-y-4">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16">
                  <span className="font-medium">{item.stars}</span>
                  <Star className="w-4 h-4 text-primary fill-primary" />
                </div>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="h-full bg-gradient-golden rounded-full"
                  />
                </div>
                <span className="text-sm text-muted-foreground w-12 text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reviews List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="section-card xl:col-span-2"
        >
          <div className="section-header">
            <h3 className="text-lg font-semibold">Recent Reviews</h3>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="section-content space-y-4 max-h-[500px] overflow-y-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {review.customer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{review.customer}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-3 h-3",
                                i < review.rating ? "text-primary fill-primary" : "text-muted"
                              )}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  {review.replied && (
                    <Badge variant="outline" className="text-xs">Replied</Badge>
                  )}
                </div>
                
                <p className="text-sm mb-3">{review.comment}</p>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Ordered: {review.order}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      {review.helpful} helpful
                    </button>
                    {!review.replied && (
                      <Button variant="ghost" size="sm" className="text-xs h-7">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Reply
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
