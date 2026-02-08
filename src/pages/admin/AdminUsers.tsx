import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash2, 
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Calendar,
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

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 234 567 890", location: "New York, USA", orders: 45, spent: "$1,234", status: "active", joined: "Jan 15, 2024" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1 345 678 901", location: "Los Angeles, USA", orders: 32, spent: "$890", status: "active", joined: "Feb 20, 2024" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "+1 456 789 012", location: "Chicago, USA", orders: 28, spent: "$756", status: "inactive", joined: "Mar 5, 2024" },
  { id: 4, name: "Sarah Wilson", email: "sarah@example.com", phone: "+1 567 890 123", location: "Houston, USA", orders: 56, spent: "$1,567", status: "active", joined: "Dec 10, 2023" },
  { id: 5, name: "Tom Brown", email: "tom@example.com", phone: "+1 678 901 234", location: "Phoenix, USA", orders: 12, spent: "$345", status: "blocked", joined: "Apr 1, 2024" },
  { id: 6, name: "Emily Davis", email: "emily@example.com", phone: "+1 789 012 345", location: "Philadelphia, USA", orders: 67, spent: "$2,100", status: "active", joined: "Nov 25, 2023" },
];

const statusConfig = {
  active: { label: "Active", className: "bg-success/15 text-success" },
  inactive: { label: "Inactive", className: "bg-muted text-muted-foreground" },
  blocked: { label: "Blocked", className: "bg-destructive/15 text-destructive" },
};

export default function AdminUsers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Users Management</h1>
          <p className="text-muted-foreground mt-1">Manage all registered users on the platform</p>
        </div>
        <Button className="btn-golden">
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </Button>
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
              placeholder="Search users..."
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
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-card"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">User</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4 hidden lg:table-cell">Contact</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4 hidden md:table-cell">Location</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Orders</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Total Spent</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Status</th>
                <th className="text-right text-sm font-medium text-muted-foreground px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground lg:hidden">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3 h-3 text-muted-foreground" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      {user.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium">{user.orders}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-primary">{user.spent}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={cn("font-medium", statusConfig[user.status as keyof typeof statusConfig].className)}>
                      {statusConfig[user.status as keyof typeof statusConfig].label}
                    </Badge>
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
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete User
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
