import { motion } from "framer-motion";
import { 
  DollarSign, 
  ShoppingBag, 
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowUpRight,
  UtensilsCrossed,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const recentOrders = [
  { id: "#ORD-156", customer: "John Doe", items: ["Margherita Pizza", "Garlic Bread"], total: "$32.00", status: "pending", time: "2 min ago" },
  { id: "#ORD-155", customer: "Jane Smith", items: ["Pepperoni Pizza", "Coke"], total: "$28.00", status: "preparing", time: "8 min ago" },
  { id: "#ORD-154", customer: "Mike Johnson", items: ["Hawaiian Pizza"], total: "$18.00", status: "ready", time: "15 min ago" },
  { id: "#ORD-153", customer: "Sarah Wilson", items: ["Meat Lovers Pizza", "Wings"], total: "$45.00", status: "delivered", time: "25 min ago" },
];

const topItems = [
  { name: "Margherita Pizza", orders: 156, revenue: "$2,340", trend: 12 },
  { name: "Pepperoni Pizza", orders: 134, revenue: "$2,010", trend: 8 },
  { name: "Hawaiian Pizza", orders: 98, revenue: "$1,470", trend: -3 },
  { name: "Garlic Bread", orders: 87, revenue: "$435", trend: 15 },
];

const statusConfig = {
  pending: { label: "New", className: "bg-warning/15 text-warning" },
  preparing: { label: "Preparing", className: "bg-info/15 text-info" },
  ready: { label: "Ready", className: "bg-success/15 text-success" },
  delivered: { label: "Delivered", className: "bg-muted text-muted-foreground" },
};

export default function VendorDashboard() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Welcome back, Pizza Palace! 🍕</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your restaurant today.</p>
        </div>
        <Button className="btn-golden">
          <ArrowUpRight className="w-4 h-4 mr-2" />
          View Public Page
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          title="Today's Revenue"
          value="$1,284"
          change={15.2}
          changeLabel="vs yesterday"
          icon={DollarSign}
          variant="primary"
          delay={0}
        />
        <StatCard
          title="Today's Orders"
          value="47"
          change={8.5}
          changeLabel="vs yesterday"
          icon={ShoppingBag}
          delay={0.1}
        />
        <StatCard
          title="Avg. Rating"
          value="4.8"
          change={2.1}
          changeLabel="this month"
          icon={Star}
          delay={0.2}
        />
        <StatCard
          title="Active Orders"
          value="8"
          icon={Clock}
          delay={0.3}
        />
      </div>

      {/* Charts and Recent Orders */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <SalesChart />
        </div>

        {/* Live Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="section-card"
        >
          <div className="section-header">
            <h3 className="text-lg font-semibold">Live Orders</h3>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </div>
          <div className="section-content space-y-3">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-semibold text-sm">{order.id}</span>
                  <Badge className={cn("text-xs", statusConfig[order.status as keyof typeof statusConfig].className)}>
                    {statusConfig[order.status as keyof typeof statusConfig].label}
                  </Badge>
                </div>
                <p className="font-medium text-sm">{order.customer}</p>
                <p className="text-xs text-muted-foreground truncate">{order.items.join(", ")}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold text-sm">{order.total}</span>
                  <span className="text-xs text-muted-foreground">{order.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Selling Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="section-card"
      >
        <div className="section-header">
          <h3 className="text-lg font-semibold">Top Selling Items</h3>
          <Button variant="ghost" size="sm" className="text-primary">View Menu</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Item</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Orders</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Revenue</th>
                <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">Trend</th>
              </tr>
            </thead>
            <tbody>
              {topItems.map((item, index) => (
                <motion.tr
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <UtensilsCrossed className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{item.orders}</td>
                  <td className="px-6 py-4 font-semibold text-primary">{item.revenue}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "flex items-center gap-1 text-sm font-medium",
                      item.trend > 0 ? "text-success" : "text-destructive"
                    )}>
                      <TrendingUp className={cn("w-4 h-4", item.trend < 0 && "rotate-180")} />
                      {item.trend > 0 ? "+" : ""}{item.trend}%
                    </span>
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
