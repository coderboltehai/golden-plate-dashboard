import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Eye,
  RotateCcw,
  Star,
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const orders = [
  { id: "#ORD-045", restaurant: "Pizza Palace", items: ["Margherita Pizza", "Garlic Bread", "Coke"], total: "$45.00", status: "delivered", date: "Feb 5, 2026", rating: 5 },
  { id: "#ORD-044", restaurant: "Sushi Express", items: ["Salmon Roll", "Tuna Roll", "Miso Soup", "Edamame", "Green Tea"], total: "$82.00", status: "delivered", date: "Feb 3, 2026", rating: 4 },
  { id: "#ORD-043", restaurant: "Burger Barn", items: ["Double Cheese Burger", "Fries"], total: "$28.50", status: "delivered", date: "Feb 1, 2026", rating: 5 },
  { id: "#ORD-042", restaurant: "Taco Town", items: ["Beef Tacos x3", "Guacamole", "Churros"], total: "$36.00", status: "on_the_way", date: "Feb 8, 2026" },
  { id: "#ORD-041", restaurant: "Curry House", items: ["Butter Chicken", "Naan", "Rice"], total: "$42.00", status: "preparing", date: "Feb 8, 2026" },
  { id: "#ORD-040", restaurant: "Dragon Wok", items: ["Kung Pao Chicken", "Fried Rice"], total: "$32.00", status: "cancelled", date: "Jan 28, 2026" },
];

const statusConfig = {
  pending: { label: "Pending", className: "bg-warning/15 text-warning", icon: Clock },
  preparing: { label: "Preparing", className: "bg-info/15 text-info", icon: Package },
  on_the_way: { label: "On the way", className: "bg-primary/15 text-primary", icon: Truck },
  delivered: { label: "Delivered", className: "bg-success/15 text-success", icon: CheckCircle },
  cancelled: { label: "Cancelled", className: "bg-destructive/15 text-destructive", icon: XCircle },
};

export default function UserOrders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.restaurant.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Order History</h1>
          <p className="text-muted-foreground mt-1">Track and review your orders</p>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-card"
      >
        <div className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="on_the_way">On the way</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order, index) => {
          const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon;
          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="section-card hover:shadow-medium transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      statusConfig[order.status as keyof typeof statusConfig].className
                    )}>
                      <StatusIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{order.restaurant}</h3>
                        <Badge className={cn("text-xs", statusConfig[order.status as keyof typeof statusConfig].className)}>
                          {statusConfig[order.status as keyof typeof statusConfig].label}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.id} • {order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xl font-bold">{order.total}</p>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reorder
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    {order.items.join(", ")}
                  </p>
                  {order.rating && (
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-muted-foreground mr-2">Your rating:</span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < order.rating ? "text-primary fill-primary" : "text-muted"
                          )}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
