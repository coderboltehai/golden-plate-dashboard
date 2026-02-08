import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

// Landing
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminVendors from "./pages/admin/AdminVendors";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

// User Pages
import UserProfile from "./pages/user/UserProfile";
import UserOrders from "./pages/user/UserOrders";
import UserFavorites from "./pages/user/UserFavorites";
import UserAddresses from "./pages/user/UserAddresses";
import UserNotifications from "./pages/user/UserNotifications";
import UserSettings from "./pages/user/UserSettings";

// Vendor Pages
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorMenu from "./pages/vendor/VendorMenu";
import VendorOrders from "./pages/vendor/VendorOrders";
import VendorAnalytics from "./pages/vendor/VendorAnalytics";
import VendorReviews from "./pages/vendor/VendorReviews";
import VendorSettings from "./pages/vendor/VendorSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route element={<DashboardLayout variant="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/vendors" element={<AdminVendors />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>

          {/* User Routes */}
          <Route element={<DashboardLayout variant="user" />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/profile/orders" element={<UserOrders />} />
            <Route path="/profile/favorites" element={<UserFavorites />} />
            <Route path="/profile/addresses" element={<UserAddresses />} />
            <Route path="/profile/notifications" element={<UserNotifications />} />
            <Route path="/profile/settings" element={<UserSettings />} />
          </Route>

          {/* Vendor Routes */}
          <Route element={<DashboardLayout variant="vendor" />}>
            <Route path="/vendor" element={<VendorDashboard />} />
            <Route path="/vendor/menu" element={<VendorMenu />} />
            <Route path="/vendor/orders" element={<VendorOrders />} />
            <Route path="/vendor/analytics" element={<VendorAnalytics />} />
            <Route path="/vendor/reviews" element={<VendorReviews />} />
            <Route path="/vendor/settings" element={<VendorSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
