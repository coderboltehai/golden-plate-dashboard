import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Store, 
  ShoppingBag, 
  DollarSign,
  Calendar,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/StatCard";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, orders: 890 },
  { month: "Feb", revenue: 52000, orders: 1020 },
  { month: "Mar", revenue: 48000, orders: 950 },
  { month: "Apr", revenue: 61000, orders: 1180 },
  { month: "May", revenue: 55000, orders: 1090 },
  { month: "Jun", revenue: 67000, orders: 1320 },
];

const categoryData = [
  { name: "Italian", value: 35, color: "hsl(45, 88%, 54%)" },
  { name: "American", value: 25, color: "hsl(38, 90%, 48%)" },
  { name: "Japanese", value: 20, color: "hsl(30, 80%, 45%)" },
  { name: "Mexican", value: 12, color: "hsl(25, 85%, 50%)" },
  { name: "Others", value: 8, color: "hsl(40, 15%, 70%)" },
];

const dailyOrdersData = [
  { day: "Mon", orders: 145, revenue: 4200 },
  { day: "Tue", orders: 132, revenue: 3800 },
  { day: "Wed", orders: 167, revenue: 4900 },
  { day: "Thu", orders: 156, revenue: 4500 },
  { day: "Fri", orders: 198, revenue: 5800 },
  { day: "Sat", orders: 234, revenue: 6900 },
  { day: "Sun", orders: 212, revenue: 6200 },
];

export default function AdminAnalytics() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-1">Platform performance and insights</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button className="btn-golden">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value="$328,000"
          change={15.2}
          changeLabel="vs last month"
          icon={DollarSign}
          variant="primary"
          delay={0}
        />
        <StatCard
          title="Total Orders"
          value="6,450"
          change={8.7}
          changeLabel="vs last month"
          icon={ShoppingBag}
          delay={0.1}
        />
        <StatCard
          title="Active Users"
          value="12,847"
          change={12.3}
          changeLabel="vs last month"
          icon={Users}
          delay={0.2}
        />
        <StatCard
          title="Active Vendors"
          value="234"
          change={5.1}
          changeLabel="vs last month"
          icon={Store}
          delay={0.3}
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="section-card"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Revenue Trend</h3>
              <p className="text-sm text-muted-foreground">Monthly revenue over time</p>
            </div>
          </div>
          <div className="section-content">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(45, 88%, 54%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(45, 88%, 54%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(45, 88%, 54%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Daily Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="section-card"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Daily Orders</h3>
              <p className="text-sm text-muted-foreground">Orders distribution by day</p>
            </div>
          </div>
          <div className="section-content">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyOrdersData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="orders" fill="hsl(45, 88%, 54%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="section-card"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Order by Category</h3>
              <p className="text-sm text-muted-foreground">Food category distribution</p>
            </div>
          </div>
          <div className="section-content">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-sm text-muted-foreground">{cat.name} ({cat.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="section-card xl:col-span-2"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Key Metrics</h3>
              <p className="text-sm text-muted-foreground">Performance indicators</p>
            </div>
          </div>
          <div className="section-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Avg. Order Value</span>
                  <span className="metric-up text-sm">
                    <TrendingUp className="w-4 h-4" /> +5.2%
                  </span>
                </div>
                <p className="text-3xl font-bold">$42.50</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Order Completion Rate</span>
                  <span className="metric-up text-sm">
                    <TrendingUp className="w-4 h-4" /> +2.1%
                  </span>
                </div>
                <p className="text-3xl font-bold">94.8%</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Customer Retention</span>
                  <span className="metric-up text-sm">
                    <TrendingUp className="w-4 h-4" /> +8.3%
                  </span>
                </div>
                <p className="text-3xl font-bold">72.4%</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Avg. Delivery Time</span>
                  <span className="metric-down text-sm">
                    <TrendingDown className="w-4 h-4" /> -12%
                  </span>
                </div>
                <p className="text-3xl font-bold">28 min</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
