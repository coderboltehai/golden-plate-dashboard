import { motion } from "framer-motion";
import { Package, DollarSign, Clock, MapPin, TrendingUp, Bike, Navigation } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { LiveTrackingMap } from "@/components/tracking/LiveTrackingMap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const recentDeliveries = [
  { id: "#DEL-101", restaurant: "Pizza Palace", customer: "John D.", amount: "$8.50", status: "Delivered", time: "25 min" },
  { id: "#DEL-100", restaurant: "Burger Barn", customer: "Sarah M.", amount: "$6.00", status: "Delivered", time: "18 min" },
  { id: "#DEL-099", restaurant: "Sushi Express", customer: "Priya S.", amount: "$10.00", status: "Delivered", time: "32 min" },
];

const DeliveryDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="page-container">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Delivery Dashboard</h1>
          <p className="text-muted-foreground text-sm">Welcome back, Rider!</p>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 shadow-soft">
          <span className="text-sm font-medium">{isOnline ? "Online" : "Offline"}</span>
          <Switch checked={isOnline} onCheckedChange={setIsOnline} />
          <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? "bg-success animate-pulse" : "bg-muted-foreground"}`} />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Today's Deliveries" value="12" change={3} changeLabel="from yesterday" icon={Package} />
        <StatCard title="Today's Earnings" value="$156.00" change={18} changeLabel="vs last week" icon={DollarSign} />
        <StatCard title="Distance Covered" value="34.5 km" changeLabel="Today" icon={MapPin} />
        <StatCard title="Online Hours" value="6.5 hrs" changeLabel="Active" icon={Clock} />
      </div>

      {/* Active Delivery + Map */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="section-card">
          <div className="section-header">
            <h3 className="font-semibold">Current Delivery</h3>
            <Badge className="bg-success/15 text-success border-0">Active</Badge>
          </div>
          <div className="section-content space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bike className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Order #ORD-1235</p>
                <p className="text-xs text-muted-foreground">Pizza Palace → 456 Oak Ave</p>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" /> 8 min ETA</span>
              <span className="flex items-center gap-1"><Navigation className="w-4 h-4 text-primary" /> 1.2 km left</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="btn-golden flex-1">Navigate</Button>
              <Button size="sm" variant="outline" className="flex-1">Mark Delivered</Button>
            </div>
          </div>
        </div>
        <LiveTrackingMap variant="compact" />
      </div>

      {/* Earnings Chart */}
      <div className="section-card">
        <div className="section-header"><h3 className="font-semibold">Weekly Earnings</h3></div>
        <div className="section-content">
          <SalesChart />
        </div>
      </div>

      {/* Recent Deliveries */}
      <div className="section-card">
        <div className="section-header"><h3 className="font-semibold">Recent Deliveries</h3></div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Restaurant</th><th>Customer</th><th>Earnings</th><th>Time</th><th>Status</th></tr></thead>
            <tbody>
              {recentDeliveries.map((d) => (
                <tr key={d.id}>
                  <td className="font-medium text-sm">{d.id}</td>
                  <td className="text-sm">{d.restaurant}</td>
                  <td className="text-sm">{d.customer}</td>
                  <td className="text-sm font-medium text-primary">{d.amount}</td>
                  <td className="text-sm text-muted-foreground">{d.time}</td>
                  <td><span className="status-badge status-active">{d.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
