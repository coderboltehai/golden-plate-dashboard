import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/join" },
  ],
  "For Partners": [
    { label: "Join as Restaurant", href: "/join" },
    { label: "Deliver with Us", href: "/join" },
    { label: "Vendor Dashboard", href: "/vendor" },
  ],
  "For Users": [
    { label: "My Profile", href: "/profile" },
    { label: "Order History", href: "/profile/orders" },
    { label: "Help & Support", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-golden flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Taste<span className="text-gradient-golden">Y</span>Heart
              </span>
            </Link>
            <p className="text-sidebar-foreground/60 text-sm leading-relaxed mb-6 max-w-sm">
              Your favourite food, delivered fast. We connect hungry people with the best restaurants and reliable delivery partners in your city.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-sidebar-accent flex items-center justify-center text-sidebar-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-sidebar-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-sidebar-foreground/60">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@tasteyheart.com</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> New York, USA</span>
          </div>
          <p className="text-xs text-sidebar-foreground/40">© 2026 TasteYHeart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
