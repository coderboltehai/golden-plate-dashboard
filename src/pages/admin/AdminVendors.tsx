import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash2, 
  Store,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const vendors = [
  { id: 1, name: "Pizza Palace", owner: "Mario Bros", category: "Italian", rating: 4.8, reviews: 234, location: "Downtown", orders: 1456, revenue: "$45,230", status: "active", image: "" },
  { id: 2, name: "Burger Barn", owner: "Bob Smith", category: "American", rating: 4.5, reviews: 189, location: "Midtown", orders: 1234, revenue: "$38,900", status: "active", image: "" },
  { id: 3, name: "Sushi Express", owner: "Yuki Tanaka", category: "Japanese", rating: 4.9, reviews: 312, location: "East Side", orders: 987, revenue: "$52,100", status: "active", image: "" },
  { id: 4, name: "Taco Town", owner: "Carlos Rodriguez", category: "Mexican", rating: 4.3, reviews: 156, location: "West End", orders: 756, revenue: "$24,500", status: "pending", image: "" },
  { id: 5, name: "Curry House", owner: "Raj Patel", category: "Indian", rating: 4.6, reviews: 198, location: "South District", orders: 654, revenue: "$31,200", status: "active", image: "" },
  { id: 6, name: "Dragon Wok", owner: "Li Wei", category: "Chinese", rating: 4.2, reviews: 145, location: "Chinatown", orders: 543, revenue: "$28,700", status: "suspended", image: "" },
];

const statusConfig = {
  active: { label: "Active", className: "bg-success/15 text-success", icon: CheckCircle },
  pending: { label: "Pending", className: "bg-warning/15 text-warning", icon: Clock },
  suspended: { label: "Suspended", className: "bg-destructive/15 text-destructive", icon: XCircle },
};

export default function AdminVendors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vendor.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || vendor.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Vendors Management</h1>
          <p className="text-muted-foreground mt-1">Manage restaurants and food vendors</p>
        </div>
        <Button className="btn-golden">
          <Store className="w-4 h-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="stat-card"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-success/10">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">{vendors.filter(v => v.status === 'active').length}</p>
              <p className="text-sm text-muted-foreground">Active Vendors</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-warning/10">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold">{vendors.filter(v => v.status === 'pending').length}</p>
              <p className="text-sm text-muted-foreground">Pending Approval</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stat-card"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-destructive/10">
              <XCircle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-bold">{vendors.filter(v => v.status === 'suspended').length}</p>
              <p className="text-sm text-muted-foreground">Suspended</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="section-card"
      >
        <div className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search vendors..."
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredVendors.map((vendor, index) => (
          <motion.div
            key={vendor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="section-card hover:shadow-medium transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={vendor.image} />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                      {vendor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{vendor.name}</h3>
                    <p className="text-sm text-muted-foreground">{vendor.category}</p>
                  </div>
                </div>
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
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Vendor
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Vendor
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="font-medium text-foreground">{vendor.rating}</span>
                    <span>({vendor.reviews} reviews)</span>
                  </div>
                  <Badge className={cn("text-xs", statusConfig[vendor.status as keyof typeof statusConfig].className)}>
                    {statusConfig[vendor.status as keyof typeof statusConfig].label}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {vendor.location}
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold">{vendor.orders.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Total Orders</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{vendor.revenue}</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
