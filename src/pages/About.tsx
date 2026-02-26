import { motion } from "framer-motion";
import { Target, Heart, Globe, Zap, Users, Award, ShoppingBag, Star } from "lucide-react";

const values = [
  { icon: Target, title: "Mission Driven", desc: "Connecting people with great food and empowering local restaurants." },
  { icon: Heart, title: "Customer First", desc: "Every decision we make starts with how it impacts our customers." },
  { icon: Globe, title: "Local Impact", desc: "Supporting local businesses and building stronger communities." },
  { icon: Zap, title: "Innovation", desc: "Constantly improving technology to deliver the best experience." },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-Founder", emoji: "👨‍💼" },
  { name: "Priya Sharma", role: "CTO", emoji: "👩‍💻" },
  { name: "Marcus Johnson", role: "Head of Operations", emoji: "👨‍🔧" },
  { name: "Sara Williams", role: "Head of Design", emoji: "👩‍🎨" },
];

const milestones = [
  { icon: ShoppingBag, value: "1M+", label: "Orders Delivered" },
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: Star, value: "500+", label: "Restaurant Partners" },
  { icon: Award, value: "25+", label: "Cities Served" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-warm py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About <span className="text-gradient-golden">FoodHub</span></h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">We're on a mission to make food delivery seamless, reliable, and delightful for everyone — from hungry customers to restaurant owners and delivery partners.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6 text-center">Our <span className="text-gradient-golden">Story</span></h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>FoodHub was born in 2022 from a simple idea: what if ordering food was as easy as sending a message? Our founders, frustrated by unreliable deliveries and limited restaurant choices, set out to build a platform that puts quality and speed first.</p>
              <p>Today, we partner with over 500 restaurants across 25+ cities, serving 50,000+ active customers. Our platform empowers restaurant owners with powerful tools to manage their business, while our network of dedicated delivery partners ensures every meal arrives fresh and on time.</p>
              <p>But we're just getting started. We're continuously innovating — from real-time order tracking to AI-powered recommendations — to make every food experience better than the last.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                <m.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold">{m.value}</p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our <span className="text-gradient-golden">Values</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Meet the <span className="text-gradient-golden">Team</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft text-center">
                <div className="text-5xl mb-4">{t.emoji}</div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
