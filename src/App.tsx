import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PublicLayout } from "@/components/layout/PublicLayout";

// Public Pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import OrderTracking from "./pages/OrderTracking";
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

// Delivery Pages
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";
import DeliveryOrders from "./pages/delivery/DeliveryOrders";
import DeliveryEarnings from "./pages/delivery/DeliveryEarnings";
import DeliveryMap from "./pages/delivery/DeliveryMap";
import DeliveryRatings from "./pages/delivery/DeliveryRatings";
import DeliverySettings from "./pages/delivery/DeliverySettings";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  // Public Routes
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth", element: <Auth /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/join", element: <Join /> },
    ],
  },
  // Order Tracking (standalone)
  { path: "/track/:orderId", element: <OrderTracking /> },
  // Admin Routes
  {
    element: <DashboardLayout variant="admin" />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/users", element: <AdminUsers /> },
      { path: "/admin/vendors", element: <AdminVendors /> },
      { path: "/admin/orders", element: <AdminOrders /> },
      { path: "/admin/analytics", element: <AdminAnalytics /> },
      { path: "/admin/settings", element: <AdminSettings /> },
    ],
  },
  // User Routes
  {
    element: <DashboardLayout variant="user" />,
    children: [
      { path: "/profile", element: <UserProfile /> },
      { path: "/profile/orders", element: <UserOrders /> },
      { path: "/profile/favorites", element: <UserFavorites /> },
      { path: "/profile/addresses", element: <UserAddresses /> },
      { path: "/profile/notifications", element: <UserNotifications /> },
      { path: "/profile/settings", element: <UserSettings /> },
    ],
  },
  // Vendor Routes
  {
    element: <DashboardLayout variant="vendor" />,
    children: [
      { path: "/vendor", element: <VendorDashboard /> },
      { path: "/vendor/menu", element: <VendorMenu /> },
      { path: "/vendor/orders", element: <VendorOrders /> },
      { path: "/vendor/analytics", element: <VendorAnalytics /> },
      { path: "/vendor/reviews", element: <VendorReviews /> },
      { path: "/vendor/settings", element: <VendorSettings /> },
    ],
  },
  // Delivery Partner Routes
  {
    element: <DashboardLayout variant="delivery" />,
    children: [
      { path: "/delivery", element: <DeliveryDashboard /> },
      { path: "/delivery/orders", element: <DeliveryOrders /> },
      { path: "/delivery/earnings", element: <DeliveryEarnings /> },
      { path: "/delivery/map", element: <DeliveryMap /> },
      { path: "/delivery/ratings", element: <DeliveryRatings /> },
      { path: "/delivery/settings", element: <DeliverySettings /> },
    ],
  },
  // 404
  { path: "*", element: <NotFound /> },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
