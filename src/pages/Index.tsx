import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  UtensilsCrossed, 
  Shield, 
  User, 
  Store,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Food Delivery Platform</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Delicious Food,
              <span className="text-gradient-golden block">Delivered Fast</span>
            </h1>
            
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              A complete food ordering platform with dashboards for admins, users, and restaurant vendors.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-gradient-golden flex items-center justify-center shadow-golden">
                <UtensilsCrossed className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </motion.div>

          {/* Dashboard Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <Link to="/admin" className="group">
              <div className="p-6 rounded-2xl bg-card/10 backdrop-blur border border-white/10 hover:bg-card/20 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Shield className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Admin Dashboard</h3>
                <p className="text-white/60 text-sm mb-4">Manage users, vendors, orders, and analytics</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  Enter Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/profile" className="group">
              <div className="p-6 rounded-2xl bg-card/10 backdrop-blur border border-white/10 hover:bg-card/20 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <User className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">User Profile</h3>
                <p className="text-white/60 text-sm mb-4">View orders, favorites, addresses & settings</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  View Profile
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/vendor" className="group">
              <div className="p-6 rounded-2xl bg-card/10 backdrop-blur border border-white/10 hover:bg-card/20 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Store className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Vendor Dashboard</h3>
                <p className="text-white/60 text-sm mb-4">Manage menu, orders, reviews & analytics</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  Manage Restaurant
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
