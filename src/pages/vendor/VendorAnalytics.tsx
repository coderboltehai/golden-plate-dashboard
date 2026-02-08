import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingBag, 
  Users,
  Star,
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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { day: "Mon", revenue: 420, orders: 28 },
  { day: "Tue", revenue: 380, orders: 24 },
  { day: "Wed", revenue: 520, orders: 35 },
  { day: "Thu", revenue: 480, orders: 31 },
  { day: "Fri", revenue: 680, orders: 45 },
  { day: "Sat", revenue: 890, orders: 58 },
  { day: "Sun", revenue: 750, orders: 48 },
];

const hourlyData = [
  { hour: "10AM", orders: 5 },
  { hour: "11AM", orders: 12 },
  { hour: "12PM", orders: 28 },
  { hour: "1PM", orders: 32 },
  { hour: "2PM", orders: 18 },
  { hour: "3PM", orders: 8 },
  { hour: "4PM", orders: 6 },
  { hour: "5PM", orders: 10 },
  { hour: "6PM", orders: 25 },
  { hour: "7PM", orders: 38 },
  { hour: "8PM", orders: 42 },
  { hour: "9PM", orders: 28 },
];

const ratingTrend = [
  { month: "Sep", rating: 4.5 },
  { month: "Oct", rating: 4.6 },
  { month: "Nov", rating: 4.7 },
  { month: "Dec", rating: 4.6 },
  { month: "Jan", rating: 4.8 },
  { month: "Feb", rating: 4.8 },
];

export default function VendorAnalytics() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-1">Track your restaurant performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            This Week
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
          title="Total Revenue"
          value="$4,120"
          change={12.5}
          changeLabel="vs last week"
          icon={DollarSign}
          variant="primary"
          delay={0}
        />
        <StatCard
          title="Total Orders"
          value="269"
          change={8.2}
          changeLabel="vs last week"
          icon={ShoppingBag}
          delay={0.1}
        />
        <StatCard
          title="New Customers"
          value="45"
          change={15.3}
          changeLabel="vs last week"
          icon={Users}
          delay={0.2}
        />
        <StatCard
          title="Avg. Rating"
          value="4.8"
          change={2.5}
          changeLabel="vs last month"
          icon={Star}
          delay={0.3}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="section-card"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Revenue Overview</h3>
              <p className="text-sm text-muted-foreground">Daily revenue this week</p>
            </div>
          </div>
          <div className="section-content">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorVendorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(45, 88%, 54%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(45, 88%, 54%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `$${v}`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`$${value}`, "Revenue"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(45, 88%, 54%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorVendorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Peak Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="section-card"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Peak Hours</h3>
              <p className="text-sm text-muted-foreground">Order distribution by hour</p>
            </div>
          </div>
          <div className="section-content">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" fontSize={10} />
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

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Rating Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="section-card"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Rating Trend</h3>
              <p className="text-sm text-muted-foreground">Monthly average rating</p>
            </div>
          </div>
          <div className="section-content">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ratingTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis domain={[4, 5]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rating"
                    stroke="hsl(45, 88%, 54%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(45, 88%, 54%)", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="section-card xl:col-span-2"
        >
          <div className="section-header">
            <div>
              <h3 className="text-lg font-semibold">Performance Metrics</h3>
              <p className="text-sm text-muted-foreground">Key indicators</p>
            </div>
          </div>
          <div className="section-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Avg. Order Value</span>
                  <span className="metric-up text-sm">
                    <TrendingUp className="w-4 h-4" /> +5.8%
                  </span>
                </div>
                <p className="text-3xl font-bold">$15.32</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Order Completion</span>
                  <span className="metric-up text-sm">
                    <TrendingUp className="w-4 h-4" /> +1.2%
                  </span>
                </div>
                <p className="text-3xl font-bold">98.5%</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Avg. Prep Time</span>
                  <span className="metric-up text-sm">
                    <TrendingDown className="w-4 h-4" /> -8%
                  </span>
                </div>
                <p className="text-3xl font-bold">12 min</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Repeat Customers</span>
                  <span className="metric-up text-sm">
                    <TrendingUp className="w-4 h-4" /> +12%
                  </span>
                </div>
                <p className="text-3xl font-bold">64%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
