import { motion } from "framer-motion";
import { MoreHorizontal, Eye, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  customer: string;
  restaurant: string;
  items: number;
  total: string;
  status: "pending" | "preparing" | "delivered" | "cancelled";
  time: string;
}

interface RecentOrdersTableProps {
  orders: Order[];
  showRestaurant?: boolean;
  showCustomer?: boolean;
}

const statusConfig = {
  pending: { label: "Pending", className: "bg-warning/15 text-warning" },
  preparing: { label: "Preparing", className: "bg-info/15 text-info" },
  delivered: { label: "Delivered", className: "bg-success/15 text-success" },
  cancelled: { label: "Cancelled", className: "bg-destructive/15 text-destructive" },
};

export function RecentOrdersTable({ orders, showRestaurant = true, showCustomer = true }: RecentOrdersTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="section-card"
    >
      <div className="section-header">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          View All
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Order ID</th>
              {showCustomer && (
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Customer</th>
              )}
              {showRestaurant && (
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Restaurant</th>
              )}
              <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Items</th>
              <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Total</th>
              <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Status</th>
              <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Time</th>
              <th className="text-right text-sm font-medium text-muted-foreground px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="border-b border-border/30 hover:bg-muted/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="font-mono text-sm font-medium">{order.id}</span>
                </td>
                {showCustomer && (
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                          {order.customer.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{order.customer}</span>
                    </div>
                  </td>
                )}
                {showRestaurant && (
                  <td className="px-6 py-4">
                    <span className="text-sm">{order.restaurant}</span>
                  </td>
                )}
                <td className="px-6 py-4">
                  <span className="text-sm text-muted-foreground">{order.items} items</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-sm">{order.total}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                    statusConfig[order.status].className
                  )}>
                    {statusConfig[order.status].label}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-muted-foreground">{order.time}</span>
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
                      <DropdownMenuItem className="cursor-pointer text-success">
                        <Check className="w-4 h-4 mr-2" />
                        Mark Delivered
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
  );
}
