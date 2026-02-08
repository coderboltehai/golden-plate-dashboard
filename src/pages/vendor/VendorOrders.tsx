import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye,
  Check,
  X,
  Printer,
  Clock,
  Package,
  Truck,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const orders = [
  { id: "#ORD-156", customer: "John Doe", phone: "+1 234 567 890", items: ["Margherita Pizza", "Garlic Bread", "Coke"], total: "$32.00", status: "pending", time: "2 min ago", address: "123 Main St, Apt 4B" },
  { id: "#ORD-155", customer: "Jane Smith", phone: "+1 345 678 901", items: ["Pepperoni Pizza x2", "Wings"], total: "$48.00", status: "preparing", time: "8 min ago", address: "456 Oak Ave, Suite 12" },
  { id: "#ORD-154", customer: "Mike Johnson", phone: "+1 456 789 012", items: ["Hawaiian Pizza", "Caesar Salad"], total: "$25.00", status: "ready", time: "15 min ago", address: "789 Pine Rd" },
  { id: "#ORD-153", customer: "Sarah Wilson", phone: "+1 567 890 123", items: ["Meat Lovers Pizza", "Tiramisu"], total: "$29.00", status: "out_for_delivery", time: "25 min ago", address: "321 Elm St" },
  { id: "#ORD-152", customer: "Tom Brown", phone: "+1 678 901 234", items: ["Margherita Pizza"], total: "$15.00", status: "delivered", time: "45 min ago", address: "654 Maple Dr" },
  { id: "#ORD-151", customer: "Emily Davis", phone: "+1 789 012 345", items: ["Pepperoni Pizza", "Garlic Bread"], total: "$23.00", status: "delivered", time: "1 hour ago", address: "987 Cedar Ln" },
];

const statusConfig = {
  pending: { label: "New Order", className: "bg-warning/15 text-warning", icon: Clock, nextAction: "Accept Order" },
  preparing: { label: "Preparing", className: "bg-info/15 text-info", icon: Package, nextAction: "Mark Ready" },
  ready: { label: "Ready", className: "bg-success/15 text-success", icon: CheckCircle, nextAction: "Hand to Delivery" },
  out_for_delivery: { label: "Out for Delivery", className: "bg-primary/15 text-primary", icon: Truck, nextAction: "Complete" },
  delivered: { label: "Delivered", className: "bg-muted text-muted-foreground", icon: CheckCircle, nextAction: null },
};

export default function VendorOrders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("active");

  const activeOrders = orders.filter(o => ["pending", "preparing", "ready", "out_for_delivery"].includes(o.status));
  const completedOrders = orders.filter(o => o.status === "delivered");

  const filteredOrders = (activeTab === "active" ? activeOrders : completedOrders).filter((order) => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground mt-1">Manage incoming and active orders</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium">{activeOrders.length} Active Orders</span>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="active" className="relative">
              Active Orders
              {activeOrders.length > 0 && (
                <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {activeOrders.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <TabsContent value="active" className="space-y-4">
          {filteredOrders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-card p-12 text-center"
            >
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
              <p className="text-muted-foreground">No active orders at the moment.</p>
            </motion.div>
          ) : (
            filteredOrders.map((order, index) => {
              const config = statusConfig[order.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;
              
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "section-card hover:shadow-medium transition-all",
                    order.status === "pending" && "ring-2 ring-warning"
                  )}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", config.className)}>
                          <StatusIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="font-mono font-bold">{order.id}</h3>
                            <Badge className={cn("text-xs", config.className)}>
                              {config.label}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{order.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {config.nextAction && (
                          <Button className="btn-golden">
                            {config.nextAction}
                          </Button>
                        )}
                        {order.status === "pending" && (
                          <Button variant="outline" className="text-destructive hover:text-destructive">
                            <X className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-popover">
                            <DropdownMenuItem className="cursor-pointer">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Printer className="w-4 h-4 mr-2" />
                              Print Receipt
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Phone className="w-4 h-4 mr-2" />
                              Call Customer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Customer</p>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Items</p>
                        <p className="text-sm">{order.items.join(", ")}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Total</p>
                        <p className="text-2xl font-bold text-primary">{order.total}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="section-card"
            >
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-success/15 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold">{order.id}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{order.customer}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.items.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">{order.total}</p>
                    <p className="text-xs text-muted-foreground">{order.time}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
