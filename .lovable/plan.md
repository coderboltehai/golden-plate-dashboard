

# Complete App Expansion Plan

## Overview
Adding a **Delivery Partner Dashboard**, **Live Order Tracking Map UI**, and all public-facing pages (Home, Auth, Contact, About, Join) to create a fully complete food delivery platform.

---

## 1. Public Pages (with Navbar and Footer)

### Shared Layout Components
- **Navbar** (`src/components/layout/Navbar.tsx`): Sticky top nav with logo, links (Home, About, Contact), and Login/Sign Up buttons. Mobile hamburger menu.
- **Footer** (`src/components/layout/Footer.tsx`): Multi-column footer with links, social icons, app download badges, copyright.
- **PublicLayout** (`src/components/layout/PublicLayout.tsx`): Wraps Navbar + Outlet + Footer for all public routes.

### Home Page (redesigned `/`)
Full landing page with:
- Hero section with CTA buttons (Order Now, Join as Partner)
- "How it Works" section (3 steps: Browse, Order, Enjoy)
- Featured Restaurants carousel/grid (mock data)
- Popular Food Categories section
- App download / promotional banner
- Testimonials section
- Stats section (restaurants, deliveries, happy customers)

### Auth Page (`/auth`)
- Login / Sign Up tabs on a single page
- Email + password fields with form validation
- Social login buttons (Google, Apple - UI only)
- "Forgot Password" link
- Clean split-screen design (form on one side, food image/illustration on other)

### About Page (`/about`)
- Company story / mission section
- Team section with avatar cards
- Stats/milestones (cities served, orders delivered, etc.)
- Values section with icons

### Contact Page (`/contact`)
- Contact form (name, email, subject, message)
- Contact info cards (email, phone, address)
- Embedded map placeholder (styled div)
- FAQ accordion section

### Join Page (`/join`)
- "Join as Restaurant Partner" or "Join as Delivery Partner" selection
- Benefits for each role listed with icons
- Application form with relevant fields
- Success stories / testimonials

---

## 2. Delivery Partner Dashboard

### New Route Group: `/delivery/*`
Uses existing `DashboardLayout` with new variant `"delivery"`.

### Sidebar Navigation
- Dashboard (overview)
- My Deliveries (active + history)
- Earnings (income breakdown)
- Live Map (current delivery tracking)
- Ratings (customer feedback)
- Settings (profile, vehicle info, availability)

### Pages to Create

**DeliveryDashboard** (`/delivery`)
- Today's stats: deliveries completed, earnings, distance, online hours
- Current active delivery card (if any) with pickup/dropoff info
- Recent deliveries list
- Earnings chart (weekly)

**DeliveryOrders** (`/delivery/orders`)
- Active delivery with live status stepper (Picked Up > On the Way > Delivered)
- Delivery history table with filters
- Order details with restaurant and customer info

**DeliveryEarnings** (`/delivery/earnings`)
- Earnings summary cards (today, this week, this month)
- Earnings breakdown chart (base pay, tips, bonuses)
- Payment history table
- Payout settings section

**DeliveryMap** (`/delivery/map`)
- Full-screen map UI placeholder (styled container with mock route visualization)
- Current delivery info overlay card
- Pickup and drop-off markers (CSS-styled)
- Estimated time and distance display
- Navigation button

**DeliveryRatings** (`/delivery/ratings`)
- Overall rating display (large star rating)
- Rating breakdown (5-star to 1-star bar chart)
- Recent reviews list with customer comments

**DeliverySettings** (`/delivery/settings`)
- Profile info (name, phone, photo)
- Vehicle details (type, plate number)
- Availability toggle (online/offline)
- Notification preferences
- Document uploads section (license, insurance - UI only)

---

## 3. Live Tracking Map UI

A reusable **LiveTrackingMap** component (`src/components/tracking/LiveTrackingMap.tsx`) that displays a styled mock map with:
- Animated route path (SVG/CSS)
- Pickup point marker (restaurant icon)
- Drop-off point marker (location pin)
- Delivery partner marker (bike/scooter icon) with pulse animation
- ETA display card
- Order status stepper overlay

### Where it will be used:
- **User Orders page**: "Track Order" button on active orders opens a tracking view
- **Vendor Orders page**: See delivery partner location for dispatched orders
- **Delivery Dashboard**: Current active delivery map
- **Delivery Map page**: Full-screen tracking view
- **Admin Orders page**: Monitor any delivery in progress

A new **OrderTracking** page (`/track/:orderId`) will show a full-page tracking experience for users.

---

## 4. Route Updates

New routes to add in `App.tsx`:

```text
Public Routes (inside PublicLayout):
  /            -> Home (redesigned)
  /auth        -> Auth (Login/SignUp)
  /about       -> About
  /contact     -> Contact
  /join        -> Join as Partner

Delivery Partner Routes (inside DashboardLayout variant="delivery"):
  /delivery           -> DeliveryDashboard
  /delivery/orders    -> DeliveryOrders
  /delivery/earnings  -> DeliveryEarnings
  /delivery/map       -> DeliveryMap
  /delivery/ratings   -> DeliveryRatings
  /delivery/settings  -> DeliverySettings

Order Tracking:
  /track/:orderId     -> OrderTracking (standalone page)
```

---

## 5. Component Updates

- **DashboardLayout / DashboardSidebar**: Add `"delivery"` variant with delivery-specific nav items and branding
- **DashboardHeader**: Add delivery partner profile config

---

## Technical Details

### Files to Create (approx. 18 new files):
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/PublicLayout.tsx`
- `src/components/tracking/LiveTrackingMap.tsx`
- `src/pages/Home.tsx` (replaces current Index)
- `src/pages/Auth.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Join.tsx`
- `src/pages/OrderTracking.tsx`
- `src/pages/delivery/DeliveryDashboard.tsx`
- `src/pages/delivery/DeliveryOrders.tsx`
- `src/pages/delivery/DeliveryEarnings.tsx`
- `src/pages/delivery/DeliveryMap.tsx`
- `src/pages/delivery/DeliveryRatings.tsx`
- `src/pages/delivery/DeliverySettings.tsx`

### Files to Modify:
- `src/App.tsx` - Add all new routes
- `src/components/layout/DashboardSidebar.tsx` - Add delivery variant
- `src/components/layout/DashboardHeader.tsx` - Add delivery profile
- `src/pages/Index.tsx` - Redesign into full landing page

### Design Approach:
- All pages use the existing golden `#f1c122` theme and design system
- Framer Motion animations consistent with existing pages
- Fully responsive (mobile-first)
- Mock map uses styled SVG/CSS (no external map library needed)
- All data is mock/static for now

