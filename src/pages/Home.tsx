import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UtensilsCrossed, ArrowRight, Sparkles, Search, Clock, Truck, Star,
  Pizza, Coffee, Salad, IceCream, Sandwich, Soup,
  Users, Store, ShoppingBag, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Pizza", icon: Pizza },
  { name: "Coffee", icon: Coffee },
  { name: "Salads", icon: Salad },
  { name: "Desserts", icon: IceCream },
  { name: "Burgers", icon: Sandwich },
  { name: "Soups", icon: Soup },
];

const restaurants = [
  { name: "Pizza Palace", cuisine: "Italian", rating: 4.8, time: "25-35 min", image: "🍕" },
  { name: "Burger Barn", cuisine: "American", rating: 4.6, time: "20-30 min", image: "🍔" },
  { name: "Sushi Express", cuisine: "Japanese", rating: 4.9, time: "30-40 min", image: "🍣" },
  { name: "Taco Town", cuisine: "Mexican", rating: 4.7, time: "15-25 min", image: "🌮" },
  { name: "Noodle House", cuisine: "Chinese", rating: 4.5, time: "25-35 min", image: "🍜" },
  { name: "Curry Kingdom", cuisine: "Indian", rating: 4.8, time: "30-40 min", image: "🍛" },
];

const steps = [
  { icon: Search, title: "Browse", desc: "Explore hundreds of restaurants near you" },
  { icon: ShoppingBag, title: "Order", desc: "Add your favourite items and checkout" },
  { icon: Truck, title: "Enjoy", desc: "Fast delivery right to your doorstep" },
];

const testimonials = [
  { name: "Sarah M.", text: "Best food delivery app ever! Always on time and the food is always hot.", rating: 5 },
  { name: "James K.", text: "Love the variety of restaurants. The tracking feature is super helpful.", rating: 5 },
  { name: "Priya S.", text: "Great experience every single time. The delivery partners are very professional.", rating: 4 },
];

const stats = [
  { value: "500+", label: "Restaurants", icon: Store },
  { value: "50K+", label: "Happy Customers", icon: Users },
  { value: "1M+", label: "Orders Delivered", icon: ShoppingBag },
  { value: "4.8", label: "Average Rating", icon: Star },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="relative container mx-auto px-6 py-20 lg:py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Delivering Happiness Daily</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Craving Something?
              <span className="text-gradient-golden block mt-2">We've Got You Covered</span>
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Order from the best restaurants in your city. Fresh food delivered to your door in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Enter your delivery address" className="pl-11 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20" />
              </div>
              <Button className="btn-golden h-12 px-8 w-full sm:w-auto">
                Order Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl lg:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-3">How It <span className="text-gradient-golden">Works</span></h2>
            <p className="text-muted-foreground mb-12 max-w-md mx-auto">Three simple steps to get your food delivered</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }}
                className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-gradient-golden text-primary-foreground text-sm font-bold flex items-center justify-center shadow-golden">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Popular <span className="text-gradient-golden">Categories</span></h2>
            <p className="text-muted-foreground">Explore food by your favorite cuisine</p>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {categories.map((cat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-golden transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Featured <span className="text-gradient-golden">Restaurants</span></h2>
            <p className="text-muted-foreground">Handpicked top-rated restaurants in your area</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {restaurants.map((r, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="food-card p-5 cursor-pointer">
                <div className="w-full h-32 rounded-lg bg-muted flex items-center justify-center text-5xl mb-4">{r.image}</div>
                <h3 className="font-semibold text-lg">{r.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{r.cuisine}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-primary font-medium"><Star className="w-4 h-4 fill-primary" />{r.rating}</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><Clock className="w-4 h-4" />{r.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Our <span className="text-gradient-golden">Customers</span> Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-golden flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-warm p-10 lg:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">Join thousands of happy customers and partner restaurants on FoodHub</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/auth">
                  <Button className="btn-golden h-12 px-8">
                    Order Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/join">
                  <Button variant="outline" className="h-12 px-8 border-white/20 text-white hover:bg-white/10">
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
