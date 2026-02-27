import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, ArrowRight, Sparkles, Search, Clock, Truck, Star,
  Pizza, Coffee, Salad, IceCream, Sandwich, Soup,
  Users, Store, ShoppingBag, Quote, ChefHat, Shield, Zap,
  MapPin, Gift, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ─── Data ─── */
const categories = [
  { name: "Pizza", icon: Pizza, emoji: "🍕" },
  { name: "Coffee", icon: Coffee, emoji: "☕" },
  { name: "Salads", icon: Salad, emoji: "🥗" },
  { name: "Desserts", icon: IceCream, emoji: "🍨" },
  { name: "Burgers", icon: Sandwich, emoji: "🍔" },
  { name: "Soups", icon: Soup, emoji: "🍲" },
];

const restaurants = [
  { name: "Pizza Palace", cuisine: "Italian", rating: 4.8, time: "25-35 min", emoji: "🍕", popular: "Margherita" },
  { name: "Burger Barn", cuisine: "American", rating: 4.6, time: "20-30 min", emoji: "🍔", popular: "Classic Smash" },
  { name: "Sushi Express", cuisine: "Japanese", rating: 4.9, time: "30-40 min", emoji: "🍣", popular: "Dragon Roll" },
  { name: "Taco Town", cuisine: "Mexican", rating: 4.7, time: "15-25 min", emoji: "🌮", popular: "Al Pastor" },
  { name: "Noodle House", cuisine: "Chinese", rating: 4.5, time: "25-35 min", emoji: "🍜", popular: "Dan Dan" },
  { name: "Curry Kingdom", cuisine: "Indian", rating: 4.8, time: "30-40 min", emoji: "🍛", popular: "Butter Chicken" },
];

const steps = [
  { icon: Search, title: "Browse & Discover", desc: "Explore hundreds of restaurants and cuisines near you with smart recommendations" },
  { icon: ShoppingBag, title: "Order & Customize", desc: "Build your perfect meal with easy customizations and secure checkout" },
  { icon: Truck, title: "Track & Enjoy", desc: "Watch your order in real-time and enjoy hot, fresh food at your doorstep" },
];

const testimonials = [
  { name: "Sarah M.", text: "TasteYHeart changed how I order food! The live tracking is incredible and the food always arrives hot.", rating: 5, role: "Food Lover" },
  { name: "James K.", text: "As a restaurant owner, joining TasteYHeart boosted our sales by 40%. The vendor dashboard is fantastic.", rating: 5, role: "Restaurant Partner" },
  { name: "Priya S.", text: "I deliver with TasteYHeart and the earnings are great. The app makes navigation so smooth!", rating: 5, role: "Delivery Partner" },
  { name: "David L.", text: "The variety of restaurants is amazing. I discover new favourites every week. Best delivery app hands down.", rating: 5, role: "Regular Customer" },
];

const stats = [
  { value: "500+", label: "Restaurants", icon: Store },
  { value: "50K+", label: "Happy Customers", icon: Users },
  { value: "1M+", label: "Orders Delivered", icon: ShoppingBag },
  { value: "4.8", label: "Average Rating", icon: Star },
];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Average delivery in under 30 minutes" },
  { icon: Shield, title: "Safe & Secure", desc: "Contactless delivery & secure payments" },
  { icon: Gift, title: "Daily Deals", desc: "Exclusive offers and loyalty rewards" },
  { icon: MapPin, title: "Live Tracking", desc: "Real-time GPS tracking for every order" },
  { icon: ChefHat, title: "Top Chefs", desc: "Curated restaurants with verified quality" },
  { icon: TrendingUp, title: "Smart Picks", desc: "AI-powered recommendations just for you" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce" style={{ animationDuration: "3s" }}>🍕</div>
        <div className="absolute top-40 right-20 text-5xl opacity-10 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>🍔</div>
        <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>🍣</div>
        <div className="absolute bottom-20 right-1/3 text-6xl opacity-10 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}>🌮</div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">🔥 #1 Food Delivery Platform</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                Delicious Food,
                <span className="block mt-2">
                  <span className="text-gradient-golden">Delivered</span> With
                </span>
                <span className="inline-flex items-center gap-3">
                  <Heart className="w-12 h-12 lg:w-16 lg:h-16 text-primary fill-primary" />
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
                From your favourite local restaurants to your doorstep in minutes. Experience food delivery like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    placeholder="Enter your delivery address..."
                    className="pl-12 h-14 bg-white/10 border-white/15 text-white placeholder:text-white/40 focus:bg-white/15 rounded-xl text-base backdrop-blur-sm"
                  />
                </div>
                <Button className="btn-golden h-14 px-8 rounded-xl text-base whitespace-nowrap">
                  Order Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-10 text-white/40 text-sm">
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Secure Payments</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 30min Delivery</span>
              </div>
            </motion.div>

            {/* Right - Floating food cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-[500px]">
                {/* Main card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-10 bg-card/95 backdrop-blur-xl rounded-2xl p-5 shadow-medium border border-border/50 w-64"
                >
                  <div className="text-5xl mb-3">🍕</div>
                  <h3 className="font-bold text-lg">Pizza Palace</h3>
                  <p className="text-sm text-muted-foreground mb-2">Margherita Special</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">$12.99</span>
                    <span className="flex items-center gap-1 text-sm"><Star className="w-3.5 h-3.5 fill-primary text-primary" /> 4.8</span>
                  </div>
                </motion.div>

                {/* Secondary card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-40 right-5 bg-card/95 backdrop-blur-xl rounded-2xl p-5 shadow-medium border border-border/50 w-56"
                >
                  <div className="text-5xl mb-3">🍣</div>
                  <h3 className="font-bold">Sushi Express</h3>
                  <p className="text-sm text-muted-foreground mb-2">Dragon Roll</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">$18.50</span>
                    <span className="flex items-center gap-1 text-sm"><Star className="w-3.5 h-3.5 fill-primary text-primary" /> 4.9</span>
                  </div>
                </motion.div>

                {/* Delivery status card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-20 bg-gradient-golden rounded-2xl p-4 shadow-golden w-60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-bold text-sm">On the way!</p>
                      <p className="text-primary-foreground/70 text-xs">Arriving in 12 min</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="py-16 border-b border-border bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl lg:text-4xl font-extrabold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Simple Process</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">How It <span className="text-gradient-golden">Works</span></h2>
            <p className="text-muted-foreground max-w-md mx-auto text-lg">Three simple steps to get your favourite food delivered</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            {steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-soft text-center hover:shadow-golden hover:border-primary/30 transition-all duration-300 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-golden text-primary-foreground text-sm font-extrabold flex items-center justify-center shadow-golden z-10">
                  {i + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CATEGORIES ═══════ */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Explore Cuisines</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Popular <span className="text-gradient-golden">Categories</span></h2>
            <p className="text-muted-foreground text-lg">What are you craving today?</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 max-w-4xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-golden transition-all duration-300 cursor-pointer group">
                <div className="text-4xl group-hover:scale-125 transition-transform duration-300">{cat.emoji}</div>
                <span className="text-sm font-semibold">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Our Advantages</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Why <span className="text-gradient-golden">TasteYHeart</span>?</h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">We go the extra mile to make every bite unforgettable</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-golden hover:border-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-golden group-hover:shadow-golden transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED RESTAURANTS ═══════ */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Top Rated</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold">Featured <span className="text-gradient-golden">Restaurants</span></h2>
            </div>
            <Button variant="outline" className="rounded-xl border-primary/30 text-primary hover:bg-primary/10">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {restaurants.map((r, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="food-card group cursor-pointer">
                <div className="relative w-full h-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{r.emoji}</span>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" /> {r.rating}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{r.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{r.cuisine} • Popular: {r.popular}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4" />{r.time}
                    </span>
                    <span className="text-primary font-semibold text-xs px-2.5 py-1 bg-primary/10 rounded-full">Free Delivery</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Loved by <span className="text-gradient-golden">Everyone</span></h2>
            <p className="text-muted-foreground text-lg">Hear from our customers, partners, and delivery heroes</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-golden flex items-center justify-center text-sm font-bold text-primary-foreground shadow-golden">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ APP DOWNLOAD / CTA ═══════ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-warm p-12 lg:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
            {/* Floating emojis */}
            <div className="absolute top-8 right-10 text-5xl opacity-15">🍕</div>
            <div className="absolute bottom-10 left-10 text-5xl opacity-15">🍔</div>
            <div className="absolute top-1/2 right-1/4 text-4xl opacity-10">❤️</div>

            <div className="relative text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Join 50,000+ Happy Customers</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Taste the <span className="text-gradient-golden">Difference</span>?
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
                Join TasteYHeart today and discover why thousands choose us for their daily meals. Your next favourite dish is just a tap away.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/auth">
                  <Button className="btn-golden h-14 px-10 rounded-xl text-base">
                    Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/join">
                  <Button variant="outline" className="h-14 px-10 rounded-xl text-base border-white/20 text-white hover:bg-white/10">
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
