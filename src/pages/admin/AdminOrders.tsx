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
  Calendar,
  Download,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { StatCard } from "@/components/dashboard/StatCard";
import { ShoppingBag, DollarSign, Clock, CheckCircle } from "lucide-react";

const orders = [
  { id: "#ORD-001", customer: "John Doe", restaurant: "Pizza Palace", items: ["Margherita Pizza", "Garlic Bread"], total: "$45.00", status: "pending", date: "Feb 8, 2026", time: "2:30 PM", address: "123 Main St, NYC" },
  { id: "#ORD-002", customer: "Jane Smith", restaurant: "Burger Barn", items: ["Double Cheese Burger", "Fries"], total: "$28.50", status: "preparing", date: "Feb 8, 2026", time: "2:15 PM", address: "456 Oak Ave, NYC" },
  { id: "#ORD-003", customer: "Mike Johnson", restaurant: "Sushi Express", items: ["Salmon Roll", "Tuna Roll", "Miso Soup"], total: "$82.00", status: "delivered", date: "Feb 8, 2026", time: "1:45 PM", address: "789 Pine Rd, NYC" },
  { id: "#ORD-004", customer: "Sarah Wilson", restaurant: "Taco Town", items: ["Beef Tacos x3", "Guacamole"], total: "$36.00", status: "on_the_way", date: "Feb 8, 2026", time: "1:30 PM", address: "321 Elm St, NYC" },
  { id: "#ORD-005", customer: "Tom Brown", restaurant: "Pizza Palace", items: ["Pepperoni Pizza"], total: "$24.00", status: "cancelled", date: "Feb 8, 2026", time: "1:00 PM", address: "654 Maple Dr, NYC" },
  { id: "#ORD-006", customer: "Emily Davis", restaurant: "Curry House", items: ["Butter Chicken", "Naan", "Rice"], total: "$42.00", status: "delivered", date: "Feb 8, 2026", time: "12:30 PM", address: "987 Cedar Ln, NYC" },
];

const statusConfig = {
  pending: { label: "Pending", className: "bg-warning/15 text-warning" },
  preparing: { label: "Preparing", className: "bg-info/15 text-info" },
  on_the_way: { label: "On the way", className: "bg-primary/15 text-primary" },
  delivered: { label: "Delivered", className: "bg-success/15 text-success" },
  cancelled: { label: "Cancelled", className: "bg-destructive/15 text-destructive" },
};

export default function AdminOrders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.restaurant.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Orders Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage all orders</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button className="btn-golden">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Today's Orders"
          value="156"
          change={12}
          changeLabel="vs yesterday"
          icon={ShoppingBag}
          delay={0}
        />
        <StatCard
          title="Today's Revenue"
          value="$4,280"
          change={8.5}
          changeLabel="vs yesterday"
          icon={DollarSign}
          delay={0.1}
        />
        <StatCard
          title="Pending Orders"
          value="23"
          icon={Clock}
          delay={0.2}
        />
        <StatCard
          title="Completed"
          value="133"
          icon={CheckCircle}
          variant="success"
          delay={0.3}
        />
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
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
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="on_the_way">On the way</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="section-card"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Order</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Customer</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4 hidden lg:table-cell">Restaurant</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4 hidden xl:table-cell">Items</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Total</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Status</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4 hidden md:table-cell">Date</th>
                <th className="text-right text-sm font-medium text-muted-foreground px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-mono font-semibold">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                          {order.customer.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{order.customer}</p>
                        <p className="text-xs text-muted-foreground lg:hidden">{order.restaurant}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm">{order.restaurant}</span>
                  </td>
                  <td className="px-6 py-4 hidden xl:table-cell">
                    <span className="text-sm text-muted-foreground">{order.items.join(", ")}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold">{order.total}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={cn("text-xs", statusConfig[order.status as keyof typeof statusConfig].className)}>
                      {statusConfig[order.status as keyof typeof statusConfig].label}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="text-sm">
                      <p>{order.date}</p>
                      <p className="text-muted-foreground">{order.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
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
                        <DropdownMenuItem className="cursor-pointer text-success">
                          <Check className="w-4 h-4 mr-2" />
                          Mark Complete
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">
                          <X className="w-4 h-4 mr-2" />
                          Cancel Order
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
