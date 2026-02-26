import { LiveTrackingMap } from "@/components/tracking/LiveTrackingMap";
import { Button } from "@/components/ui/button";
import { Navigation, Phone, MessageSquare } from "lucide-react";

const DeliveryMap = () => {
  return (
    <div className="page-container">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Live Map</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Phone className="w-4 h-4 mr-1" /> Call Customer</Button>
          <Button size="sm" className="btn-golden"><Navigation className="w-4 h-4 mr-1" /> Navigate</Button>
        </div>
      </div>
      <LiveTrackingMap variant="full" orderInfo={{ orderId: "#ORD-1235", restaurant: "Pizza Palace", customer: "John Doe", status: "On the Way", eta: "8 min", distance: "1.2 km" }} />
    </div>
  );
};

export default DeliveryMap;
