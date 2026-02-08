import { motion } from "framer-motion";
import { 
  Heart, 
  Star, 
  MapPin, 
  Clock,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const favorites = [
  { id: 1, name: "Pizza Palace", category: "Italian", rating: 4.8, reviews: 234, deliveryTime: "25-35 min", distance: "1.2 km", image: "" },
  { id: 2, name: "Sushi Express", category: "Japanese", rating: 4.9, reviews: 312, deliveryTime: "30-40 min", distance: "2.1 km", image: "" },
  { id: 3, name: "Burger Barn", category: "American", rating: 4.5, reviews: 189, deliveryTime: "20-30 min", distance: "0.8 km", image: "" },
  { id: 4, name: "Taco Town", category: "Mexican", rating: 4.3, reviews: 156, deliveryTime: "25-35 min", distance: "1.5 km", image: "" },
  { id: 5, name: "Curry House", category: "Indian", rating: 4.6, reviews: 198, deliveryTime: "35-45 min", distance: "2.8 km", image: "" },
  { id: 6, name: "Dragon Wok", category: "Chinese", rating: 4.4, reviews: 145, deliveryTime: "30-40 min", distance: "1.9 km", image: "" },
];

export default function UserFavorites() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">My Favorites</h1>
          <p className="text-muted-foreground mt-1">Your saved restaurants</p>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {favorites.map((restaurant, index) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="food-card group"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gradient-golden relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground/30">
                  {restaurant.name.charAt(0)}
                </span>
              </div>
              <button className="absolute top-3 right-3 w-10 h-10 bg-card/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:bg-destructive hover:text-destructive-foreground transition-colors">
                <Heart className="w-5 h-5 fill-destructive text-destructive group-hover:fill-current group-hover:text-current" />
              </button>
              <Badge className="absolute bottom-3 left-3 bg-card/90 backdrop-blur text-foreground">
                {restaurant.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="font-medium text-sm">{restaurant.rating}</span>
                    <span className="text-sm text-muted-foreground">({restaurant.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {restaurant.deliveryTime}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {restaurant.distance}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 btn-golden text-sm py-2">
                  Order Now
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
