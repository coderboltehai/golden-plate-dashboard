import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Store,
  ShoppingBag,
  Settings,
  BarChart3,
  UtensilsCrossed,
  Heart,
  MapPin,
  Bell,
  HelpCircle,
  LogOut,
  ChevronLeft,
  User,
  Receipt,
  ClipboardList,
  TrendingUp,
  Package,
  Star,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface DashboardSidebarProps {
  variant: "admin" | "user" | "vendor";
  onClose: () => void;
}

const adminNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Users", icon: Users, href: "/admin/users" },
  { label: "Vendors", icon: Store, href: "/admin/vendors" },
  { label: "Orders", icon: ShoppingBag, href: "/admin/orders" },
  { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

const userNavItems = [
  { label: "My Profile", icon: User, href: "/profile" },
  { label: "Order History", icon: Receipt, href: "/profile/orders" },
  { label: "Favorites", icon: Heart, href: "/profile/favorites" },
  { label: "Addresses", icon: MapPin, href: "/profile/addresses" },
  { label: "Notifications", icon: Bell, href: "/profile/notifications" },
  { label: "Settings", icon: Settings, href: "/profile/settings" },
];

const vendorNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/vendor" },
  { label: "Menu", icon: UtensilsCrossed, href: "/vendor/menu" },
  { label: "Orders", icon: ClipboardList, href: "/vendor/orders" },
  { label: "Analytics", icon: TrendingUp, href: "/vendor/analytics" },
  { label: "Reviews", icon: Star, href: "/vendor/reviews" },
  { label: "Settings", icon: Settings, href: "/vendor/settings" },
];

const navConfigs = {
  admin: { items: adminNavItems, title: "Admin Panel", subtitle: "Manage your platform" },
  user: { items: userNavItems, title: "My Account", subtitle: "Manage your profile" },
  vendor: { items: vendorNavItems, title: "Restaurant", subtitle: "Manage your business" },
};

export function DashboardSidebar({ variant, onClose }: DashboardSidebarProps) {
  const location = useLocation();
  const config = navConfigs[variant];

  const isActive = (href: string) => {
    if (href === `/${variant === "user" ? "profile" : variant}`) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-golden flex items-center justify-center shadow-golden">
            <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-sidebar-foreground text-lg">{config.title}</h2>
            <p className="text-xs text-sidebar-foreground/60">{config.subtitle}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {config.items.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 relative group",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-golden"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              {active && (
                <motion.div
                  layoutId={`sidebar-active-${variant}`}
                  className="absolute inset-0 bg-sidebar-primary rounded-lg"
                  transition={{ duration: 0.2 }}
                />
              )}
              <item.icon className={cn("w-5 h-5 relative z-10", active && "text-sidebar-primary-foreground")} />
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <Separator className="bg-sidebar-border" />

      {/* Footer */}
      <div className="p-4 space-y-1">
        <Link
          to="/help"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Help & Support</span>
        </Link>
        <button
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive/80 hover:text-destructive hover:bg-destructive/10 transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
