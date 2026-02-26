import { useState } from "react";
import { motion } from "framer-motion";
import { Store, Bike, Check, ArrowRight, TrendingUp, Clock, DollarSign, Shield, Users, BarChart3, Headphones, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const restaurantBenefits = [
  { icon: TrendingUp, title: "Grow Revenue", desc: "Reach thousands of new customers in your area" },
  { icon: BarChart3, title: "Smart Dashboard", desc: "Powerful tools to manage menu, orders & analytics" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated account manager and support team" },
  { icon: Shield, title: "Secure Payments", desc: "Fast, reliable payouts directly to your account" },
];

const deliveryBenefits = [
  { icon: DollarSign, title: "Earn More", desc: "Competitive pay with tips and bonuses" },
  { icon: Clock, title: "Flexible Hours", desc: "Work whenever you want, be your own boss" },
  { icon: MapPin, title: "Live Navigation", desc: "Real-time maps and optimised delivery routes" },
  { icon: Users, title: "Community", desc: "Join a supportive community of delivery partners" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Join = () => {
  const [selectedRole, setSelectedRole] = useState<"restaurant" | "delivery">("restaurant");
  const benefits = selectedRole === "restaurant" ? restaurantBenefits : deliveryBenefits;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-warm py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Join <span className="text-gradient-golden">FoodHub</span></h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">Partner with us to grow your business or earn money delivering food</p>
          </motion.div>
        </div>
      </section>

      {/* Role Selector */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-6">How would you like to partner?</h2>
            <div className="inline-flex gap-4">
              <button
                onClick={() => setSelectedRole("restaurant")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all ${
                  selectedRole === "restaurant"
                    ? "border-primary bg-primary/10 shadow-golden"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <Store className={`w-6 h-6 ${selectedRole === "restaurant" ? "text-primary" : "text-muted-foreground"}`} />
                <div className="text-left">
                  <p className="font-semibold text-sm">Restaurant Partner</p>
                  <p className="text-xs text-muted-foreground">List your restaurant</p>
                </div>
              </button>
              <button
                onClick={() => setSelectedRole("delivery")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all ${
                  selectedRole === "delivery"
                    ? "border-primary bg-primary/10 shadow-golden"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <Bike className={`w-6 h-6 ${selectedRole === "delivery" ? "text-primary" : "text-muted-foreground"}`} />
                <div className="text-left">
                  <p className="font-semibold text-sm">Delivery Partner</p>
                  <p className="text-xs text-muted-foreground">Deliver with us</p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold">Why Partner with <span className="text-gradient-golden">Us?</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={`${selectedRole}-${i}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft">
            <h2 className="text-xl font-bold mb-6">
              {selectedRole === "restaurant" ? "Register Your Restaurant" : "Apply as Delivery Partner"}
            </h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{selectedRole === "restaurant" ? "Restaurant Name" : "Full Name"}</Label>
                  <Input placeholder={selectedRole === "restaurant" ? "Pizza Palace" : "John Doe"} />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input placeholder="you@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label>{selectedRole === "restaurant" ? "Restaurant Address" : "City"}</Label>
                <Input placeholder={selectedRole === "restaurant" ? "123 Main St, NYC" : "New York"} />
              </div>
              {selectedRole === "restaurant" && (
                <div className="space-y-2">
                  <Label>Cuisine Type</Label>
                  <Input placeholder="Italian, Chinese, Indian..." />
                </div>
              )}
              {selectedRole === "delivery" && (
                <div className="space-y-2">
                  <Label>Vehicle Type</Label>
                  <Input placeholder="Bike, Scooter, Car..." />
                </div>
              )}
              <div className="space-y-2">
                <Label>Tell us more</Label>
                <Textarea placeholder={selectedRole === "restaurant" ? "Tell us about your restaurant..." : "Why do you want to deliver with us?"} rows={3} />
              </div>
              <Button className="w-full btn-golden h-11">
                Submit Application <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16">
            <h3 className="text-xl font-bold text-center mb-8">Success <span className="text-gradient-golden">Stories</span></h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: selectedRole === "restaurant" ? "Pizza Palace" : "Raj K.", quote: selectedRole === "restaurant" ? "Since joining FoodHub, our orders increased by 40%. The dashboard makes everything easy!" : "I earn great money with flexible hours. Best decision I ever made!", emoji: selectedRole === "restaurant" ? "🍕" : "🛵" },
                { name: selectedRole === "restaurant" ? "Sushi Express" : "Maria L.", quote: selectedRole === "restaurant" ? "The analytics tools helped us understand our customers better. Revenue is up 60%!" : "The app is super easy to use and the support team is always helpful.", emoji: selectedRole === "restaurant" ? "🍣" : "🚴" },
              ].map((story, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{story.emoji}</span>
                    <p className="font-semibold">{story.name}</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{story.quote}"</p>
                  <div className="flex gap-0.5 mt-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Check key={j} className="w-4 h-4 text-primary" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Join;
