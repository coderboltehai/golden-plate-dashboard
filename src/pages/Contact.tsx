import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const contactInfo = [
  { icon: Mail, title: "Email Us", value: "hello@foodhub.com", desc: "We'll respond within 24 hours" },
  { icon: Phone, title: "Call Us", value: "+1 (555) 123-4567", desc: "Mon-Fri, 9am to 6pm EST" },
  { icon: MapPin, title: "Visit Us", value: "123 Food Street, NYC", desc: "Come say hello at our office" },
  { icon: Clock, title: "Working Hours", value: "24/7 Support", desc: "We're always here for you" },
];

const faqs = [
  { q: "How do I place an order?", a: "Simply browse restaurants, add items to your cart, and checkout. You can track your order in real-time once it's confirmed." },
  { q: "What are the delivery fees?", a: "Delivery fees vary by distance and restaurant. You'll see the exact fee before checkout. Orders above $30 often qualify for free delivery." },
  { q: "How can I become a delivery partner?", a: "Visit our Join page and select 'Delivery Partner'. Fill out the application form and our team will get back to you within 48 hours." },
  { q: "Can I schedule an order for later?", a: "Yes! During checkout, you can choose a delivery time slot up to 7 days in advance." },
  { q: "What if there's an issue with my order?", a: "Contact our support team via chat, email, or phone. We resolve most issues within 15 minutes and offer refunds when appropriate." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-warm py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get In <span className="text-gradient-golden">Touch</span></h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">Have a question or feedback? We'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {contactInfo.map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-card border border-border/50 shadow-soft text-center">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{c.title}</h3>
                <p className="text-sm font-medium text-foreground">{c.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Send us a Message</h2>
              </div>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input placeholder="you@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Input placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea placeholder="Tell us more about your question..." rows={4} />
                </div>
                <Button className="w-full btn-golden h-11">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
              className="rounded-2xl bg-card border border-border/50 shadow-soft overflow-hidden flex flex-col">
              <div className="flex-1 min-h-[300px] bg-muted relative flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3 animate-bounce" />
                  <p className="font-semibold">FoodHub HQ</p>
                  <p className="text-sm text-muted-foreground">123 Food Street, New York, NY 10001</p>
                </div>
                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Frequently Asked <span className="text-gradient-golden">Questions</span></h2>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border/50 bg-card px-5 shadow-soft">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
