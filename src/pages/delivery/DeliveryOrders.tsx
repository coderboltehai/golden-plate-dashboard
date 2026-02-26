import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Phone, Navigation, Package, Check } from "lucide-react";

const activeOrder = {
  id: "#ORD-1235", restaurant: "Pizza Palace", restaurantAddress: "123 Main St", customer: "John Doe",
  customerAddress: "456 Oak Avenue, Apt 3B", items: "2x Margherita, 1x Garlic Bread", total: "$33.00",
  status: 2, // 0=confirmed, 1=picked, 2=on the way, 3=delivered
};

const deliveryHistory = [
  { id: "#DEL-100", restaurant: "Burger Barn", customer: "Sarah M.", amount: "$6.00", date: "Today, 2:30 PM", status: "Delivered" },
  { id: "#DEL-099", restaurant: "Sushi Express", customer: "Priya S.", amount: "$10.00", date: "Today, 1:15 PM", status: "Delivered" },
  { id: "#DEL-098", restaurant: "Taco Town", customer: "James K.", amount: "$7.50", date: "Today, 11:45 AM", status: "Delivered" },
  { id: "#DEL-097", restaurant: "Noodle House", customer: "Maria L.", amount: "$8.00", date: "Yesterday, 8:30 PM", status: "Delivered" },
  { id: "#DEL-096", restaurant: "Curry Kingdom", customer: "Alex C.", amount: "$9.50", date: "Yesterday, 7:00 PM", status: "Delivered" },
];

const steps = ["Order Confirmed", "Picked Up", "On the Way", "Delivered"];

const DeliveryOrders = () => {
  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold">My Deliveries</h1>

      <Tabs defaultValue="active">
        <TabsList><TabsTrigger value="active">Active</TabsTrigger><TabsTrigger value="history">History</TabsTrigger></TabsList>

        <TabsContent value="active" className="mt-6 space-y-6">
          {/* Status Stepper */}
          <div className="section-card">
            <div className="section-header">
              <h3 className="font-semibold">Order {activeOrder.id}</h3>
              <Badge className="bg-warning/15 text-warning border-0">In Progress</Badge>
            </div>
            <div className="section-content">
              <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute top-4 left-0 right-0 h-0.5 bg-border" />
                {steps.map((step, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-2 z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i <= activeOrder.status ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {i <= activeOrder.status ? <Check className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className={`text-xs text-center max-w-[80px] ${i <= activeOrder.status ? "font-medium" : "text-muted-foreground"}`}>{step}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center mt-0.5"><Package className="w-4 h-4 text-success" /></div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pickup</p>
                      <p className="font-medium text-sm">{activeOrder.restaurant}</p>
                      <p className="text-xs text-muted-foreground">{activeOrder.restaurantAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mt-0.5"><MapPin className="w-4 h-4 text-destructive" /></div>
                    <div>
                      <p className="text-xs text-muted-foreground">Drop-off</p>
                      <p className="font-medium text-sm">{activeOrder.customer}</p>
                      <p className="text-xs text-muted-foreground">{activeOrder.customerAddress}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm"><span className="text-muted-foreground">Items:</span> {activeOrder.items}</p>
                  <p className="text-sm"><span className="text-muted-foreground">Total:</span> <span className="font-semibold">{activeOrder.total}</span></p>
                  <div className="flex gap-2">
                    <Button size="sm" className="btn-golden"><Navigation className="w-4 h-4 mr-1" /> Navigate</Button>
                    <Button size="sm" variant="outline"><Phone className="w-4 h-4 mr-1" /> Call</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <div className="section-card">
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead><tr><th>ID</th><th>Restaurant</th><th>Customer</th><th>Earnings</th><th>Date</th><th>Status</th></tr></thead>
                <tbody>
                  {deliveryHistory.map((d) => (
                    <tr key={d.id}>
                      <td className="font-medium text-sm">{d.id}</td>
                      <td className="text-sm">{d.restaurant}</td>
                      <td className="text-sm">{d.customer}</td>
                      <td className="text-sm font-medium text-primary">{d.amount}</td>
                      <td className="text-sm text-muted-foreground">{d.date}</td>
                      <td><span className="status-badge status-active">{d.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeliveryOrders;
