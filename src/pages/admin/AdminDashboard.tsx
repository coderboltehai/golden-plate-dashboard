import { motion } from "framer-motion";
import { 
  Users, 
  Store, 
  ShoppingBag, 
  DollarSign,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { Button } from "@/components/ui/button";

const recentOrders = [
  { id: "#ORD-001", customer: "John Doe", restaurant: "Pizza Palace", items: 3, total: "$45.00", status: "pending" as const, time: "5 min ago" },
  { id: "#ORD-002", customer: "Jane Smith", restaurant: "Burger Barn", items: 2, total: "$28.50", status: "preparing" as const, time: "12 min ago" },
  { id: "#ORD-003", customer: "Mike Johnson", restaurant: "Sushi Express", items: 5, total: "$82.00", status: "delivered" as const, time: "25 min ago" },
  { id: "#ORD-004", customer: "Sarah Wilson", restaurant: "Taco Town", items: 4, total: "$36.00", status: "preparing" as const, time: "32 min ago" },
  { id: "#ORD-005", customer: "Tom Brown", restaurant: "Pizza Palace", items: 2, total: "$24.00", status: "cancelled" as const, time: "45 min ago" },
];

const topVendors = [
  { name: "Pizza Palace", orders: 156, revenue: "$4,230", growth: 12.5 },
  { name: "Burger Barn", orders: 142, revenue: "$3,890", growth: 8.2 },
  { name: "Sushi Express", orders: 128, revenue: "$5,120", growth: 15.8 },
  { name: "Taco Town", orders: 98, revenue: "$2,450", growth: -3.2 },
];

export default function AdminDashboard() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button className="btn-golden">
          <ArrowUpRight className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          title="Total Revenue"
          value="$48,250"
          change={12.5}
          changeLabel="vs last month"
          icon={DollarSign}
          variant="primary"
          delay={0}
        />
        <StatCard
          title="Total Orders"
          value="1,284"
          change={8.2}
          changeLabel="vs last month"
          icon={ShoppingBag}
          delay={0.1}
        />
        <StatCard
          title="Active Users"
          value="5,432"
          change={3.1}
          changeLabel="vs last month"
          icon={Users}
          delay={0.2}
        />
        <StatCard
          title="Active Vendors"
          value="156"
          change={5.4}
          changeLabel="vs last month"
          icon={Store}
          delay={0.3}
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <SalesChart />
        </div>
        
        {/* Top Vendors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="section-card"
        >
          <div className="section-header">
            <h3 className="text-lg font-semibold">Top Vendors</h3>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
              View All
            </Button>
          </div>
          <div className="section-content space-y-4">
            {topVendors.map((vendor, index) => (
              <motion.div
                key={vendor.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Store className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{vendor.name}</p>
                    <p className="text-xs text-muted-foreground">{vendor.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">{vendor.revenue}</p>
                  <p className={`text-xs flex items-center justify-end gap-1 ${vendor.growth > 0 ? 'text-success' : 'text-destructive'}`}>
                    <TrendingUp className="w-3 h-3" />
                    {vendor.growth > 0 ? '+' : ''}{vendor.growth}%
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Orders */}
      <RecentOrdersTable orders={recentOrders} />
    </div>
  );
}
