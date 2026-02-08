import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Camera,
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const recentOrders = [
  { id: "#ORD-001", restaurant: "Pizza Palace", items: 3, total: "$45.00", status: "delivered", date: "Feb 5, 2026" },
  { id: "#ORD-002", restaurant: "Sushi Express", items: 5, total: "$82.00", status: "delivered", date: "Feb 3, 2026" },
  { id: "#ORD-003", restaurant: "Burger Barn", items: 2, total: "$28.50", status: "delivered", date: "Feb 1, 2026" },
];

const favoriteRestaurants = [
  { name: "Pizza Palace", category: "Italian", rating: 4.8, orders: 12 },
  { name: "Sushi Express", category: "Japanese", rating: 4.9, orders: 8 },
  { name: "Taco Town", category: "Mexican", rating: 4.5, orders: 5 },
];

export default function UserProfile() {
  return (
    <div className="page-container">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-card"
      >
        <div className="p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <Avatar className="w-24 h-24 avatar-ring">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-golden">
                <Camera className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <Badge className="bg-primary/15 text-primary w-fit mx-auto sm:mx-0">Premium Member</Badge>
              </div>
              <p className="text-muted-foreground mb-4">Member since January 2024</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  john.doe@example.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 234 567 890
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  New York, USA
                </div>
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Edit Profile
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card text-center"
        >
          <ShoppingBag className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-3xl font-bold">45</p>
          <p className="text-sm text-muted-foreground">Total Orders</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stat-card text-center"
        >
          <Heart className="w-8 h-8 text-destructive mx-auto mb-3" />
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">Favorites</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="stat-card text-center"
        >
          <Star className="w-8 h-8 text-primary fill-primary mx-auto mb-3" />
          <p className="text-3xl font-bold">4.8</p>
          <p className="text-sm text-muted-foreground">Avg. Rating Given</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="section-card"
        >
          <div className="section-header">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </div>
          <div className="section-content space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{order.restaurant}</p>
                    <p className="text-sm text-muted-foreground">{order.items} items • {order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{order.total}</p>
                  <Badge className="bg-success/15 text-success text-xs">{order.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Favorite Restaurants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="section-card"
        >
          <div className="section-header">
            <h3 className="text-lg font-semibold">Favorite Restaurants</h3>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </div>
          <div className="section-content space-y-4">
            {favoriteRestaurants.map((restaurant) => (
              <div key={restaurant.name} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-destructive fill-destructive" />
                  </div>
                  <div>
                    <p className="font-medium">{restaurant.name}</p>
                    <p className="text-sm text-muted-foreground">{restaurant.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{restaurant.orders} orders</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
