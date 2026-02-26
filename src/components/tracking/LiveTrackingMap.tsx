import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone, UtensilsCrossed, User, Bike } from "lucide-react";

interface LiveTrackingMapProps {
  variant?: "compact" | "full";
  orderInfo?: {
    orderId: string;
    restaurant: string;
    customer: string;
    status: string;
    eta: string;
    distance: string;
  };
}

export function LiveTrackingMap({ variant = "compact", orderInfo }: LiveTrackingMapProps) {
  const defaultOrder = {
    orderId: "#ORD-1234",
    restaurant: "Pizza Palace",
    customer: "John Doe",
    status: "On the Way",
    eta: "12 min",
    distance: "2.4 km",
    ...orderInfo,
  };

  return (
    <div className={`relative bg-muted rounded-2xl overflow-hidden ${variant === "full" ? "min-h-[500px]" : "min-h-[300px]"}`}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      {/* Animated SVG Route */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
        {/* Route path */}
        <motion.path
          d="M 100 320 Q 150 280 200 250 Q 280 200 350 180 Q 420 160 480 100"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeDasharray="8 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Route glow */}
        <motion.path
          d="M 100 320 Q 150 280 200 250 Q 280 200 350 180 Q 420 160 480 100"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="8"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Pickup Marker */}
      <div className="absolute" style={{ left: "14%", top: "72%" }}>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center shadow-lg">
            <UtensilsCrossed className="w-5 h-5 text-success-foreground" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-2 py-1 rounded text-xs font-medium shadow border border-border">
            {defaultOrder.restaurant}
          </div>
          <motion.div animate={{ scale: [1, 1.8, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-full bg-success/30" />
        </div>
      </div>

      {/* Drop-off Marker */}
      <div className="absolute" style={{ left: "76%", top: "18%" }}>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center shadow-lg">
            <MapPin className="w-5 h-5 text-destructive-foreground" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-2 py-1 rounded text-xs font-medium shadow border border-border">
            Drop-off
          </div>
        </div>
      </div>

      {/* Delivery Partner (animated along route) */}
      <motion.div
        className="absolute"
        initial={{ left: "14%", top: "72%" }}
        animate={{ left: "55%", top: "38%" }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-golden flex items-center justify-center shadow-golden">
            <Bike className="w-5 h-5 text-primary-foreground" />
          </div>
          <motion.div animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 rounded-full bg-primary/30" />
        </div>
      </motion.div>

      {/* Info Overlay Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:w-72">
        <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-medium">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-muted-foreground">{defaultOrder.orderId}</span>
            <span className="status-badge status-active">{defaultOrder.status}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-medium">{defaultOrder.eta}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-primary" />
              <span className="font-medium">{defaultOrder.distance}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Stepper (full variant) */}
      {variant === "full" && (
        <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-medium w-56">
          <p className="text-xs font-medium text-muted-foreground mb-3">Order Status</p>
          {["Order Confirmed", "Picked Up", "On the Way", "Delivered"].map((step, i) => {
            const active = i <= 2;
            return (
              <div key={i} className="flex items-center gap-3 mb-2 last:mb-0">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {active ? "✓" : i + 1}
                </div>
                <span className={`text-xs ${active ? "font-medium" : "text-muted-foreground"}`}>{step}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
