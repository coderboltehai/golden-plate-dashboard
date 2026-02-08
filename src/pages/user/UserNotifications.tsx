import { motion } from "framer-motion";
import { 
  Bell, 
  ShoppingBag, 
  Star, 
  Gift, 
  Megaphone,
  Check,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const notifications = [
  { id: 1, type: "order", title: "Order Delivered", message: "Your order #ORD-042 from Taco Town has been delivered!", time: "5 min ago", read: false },
  { id: 2, type: "promo", title: "Weekend Special! 🎉", message: "Get 20% off on all orders above $30. Use code WEEKEND20", time: "1 hour ago", read: false },
  { id: 3, type: "order", title: "Order Confirmed", message: "Your order #ORD-041 from Curry House is being prepared", time: "2 hours ago", read: false },
  { id: 4, type: "review", title: "Rate Your Order", message: "How was your experience with Pizza Palace? Leave a review!", time: "1 day ago", read: true },
  { id: 5, type: "reward", title: "Points Earned!", message: "You earned 45 points from your last order. Redeem for rewards!", time: "2 days ago", read: true },
  { id: 6, type: "promo", title: "New Restaurant Alert", message: "Sushi Paradise just joined! Get 15% off your first order", time: "3 days ago", read: true },
];

const typeConfig = {
  order: { icon: ShoppingBag, className: "bg-info/15 text-info" },
  promo: { icon: Megaphone, className: "bg-primary/15 text-primary" },
  review: { icon: Star, className: "bg-warning/15 text-warning" },
  reward: { icon: Gift, className: "bg-success/15 text-success" },
};

export default function UserNotifications() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground mt-1">{unreadCount} unread notifications</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Check className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" className="text-destructive hover:text-destructive">
            <Trash2 className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const config = typeConfig[notification.type as keyof typeof typeConfig];
          const Icon = config.icon;
          
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "section-card hover:shadow-medium transition-all cursor-pointer",
                !notification.read && "border-l-4 border-l-primary"
              )}
            >
              <div className="p-4 flex items-start gap-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", config.className)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={cn("font-medium", !notification.read && "font-semibold")}>{notification.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                  </div>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
