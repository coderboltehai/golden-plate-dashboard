import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiveTrackingMap } from "@/components/tracking/LiveTrackingMap";

const OrderTracking = () => {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-card/90 backdrop-blur-sm border-b border-border px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/profile/orders">
              <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
            </Link>
            <div>
              <h1 className="font-bold">Track Order</h1>
              <p className="text-sm text-muted-foreground">#{orderId || "ORD-1234"}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon"><Phone className="w-4 h-4" /></Button>
            <Button variant="outline" size="icon"><MessageSquare className="w-4 h-4" /></Button>
          </div>
        </div>
      </header>

      {/* Map */}
      <div className="container mx-auto px-6 py-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <LiveTrackingMap variant="full" orderInfo={{ orderId: `#${orderId || "ORD-1234"}`, restaurant: "Pizza Palace", customer: "John Doe", status: "On the Way", eta: "12 min", distance: "2.4 km" }} />
        </motion.div>

        {/* Order Details */}
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="section-card">
            <div className="section-header"><h3 className="font-semibold">Delivery Partner</h3></div>
            <div className="section-content flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-golden flex items-center justify-center text-primary-foreground font-bold">R</div>
              <div>
                <p className="font-medium">Rahul S.</p>
                <p className="text-sm text-muted-foreground">⭐ 4.9 · 1200+ deliveries</p>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="outline" size="sm"><Phone className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
          <div className="section-card">
            <div className="section-header"><h3 className="font-semibold">Order Summary</h3></div>
            <div className="section-content space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">2x Margherita Pizza</span><span>$24.00</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">1x Garlic Bread</span><span>$6.00</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">1x Coke</span><span>$3.00</span></div>
              <div className="border-t border-border pt-2 flex justify-between font-semibold"><span>Total</span><span>$33.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
