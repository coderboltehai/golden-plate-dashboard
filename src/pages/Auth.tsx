import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, Mail, Lock, User, Eye, EyeOff, ArrowRight,
  ShoppingBag, Store, Bike, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const roles = [
  { id: "user", label: "Customer", icon: ShoppingBag, desc: "Order food from restaurants", path: "/profile" },
  { id: "vendor", label: "Restaurant", icon: Store, desc: "Manage your restaurant", path: "/vendor" },
  { id: "delivery", label: "Delivery Partner", icon: Bike, desc: "Deliver & earn money", path: "/delivery" },
  { id: "admin", label: "Admin", icon: ShieldCheck, desc: "Platform management", path: "/admin" },
];

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = () => {
    const role = roles.find((r) => r.id === selectedRole);
    if (role) navigate(role.path);
  };

  const handleSignup = () => {
    const role = roles.find((r) => r.id === selectedRole);
    if (role) navigate(role.path);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex">
      {/* Left - Decorative */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-warm items-center justify-center p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute top-16 left-12 text-6xl opacity-10 animate-bounce" style={{ animationDuration: "3s" }}>🍕</div>
        <div className="absolute bottom-20 right-16 text-5xl opacity-10 animate-bounce" style={{ animationDuration: "4s" }}>🍔</div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative text-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-golden flex items-center justify-center mx-auto mb-8 shadow-golden">
            <Heart className="w-12 h-12 text-primary-foreground fill-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Welcome to TasteYHeart</h2>
          <p className="text-white/60 max-w-sm">Your favourite meals from the best restaurants, delivered fast to your doorstep.</p>
          <div className="flex justify-center gap-6 mt-10 text-white/40 text-sm">
            <span>500+ Restaurants</span>
            <span>•</span>
            <span>Fast Delivery</span>
            <span>•</span>
            <span>Live Tracking</span>
          </div>
        </motion.div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-lg bg-gradient-golden flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Taste<span className="text-gradient-golden">Y</span>Heart</span>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Log In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
                  <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <Label>Sign in as</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        className={cn(
                          "flex items-center gap-2.5 p-3 rounded-xl border-2 transition-all duration-200 text-left",
                          selectedRole === role.id
                            ? "border-primary bg-primary/10 shadow-golden"
                            : "border-border hover:border-primary/30 hover:bg-muted/50"
                        )}
                      >
                        <div className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all",
                          selectedRole === role.id ? "bg-gradient-golden shadow-golden" : "bg-muted"
                        )}>
                          <role.icon className={cn("w-4.5 h-4.5", selectedRole === role.id ? "text-primary-foreground" : "text-muted-foreground")} />
                        </div>
                        <div className="min-w-0">
                          <p className={cn("text-sm font-semibold truncate", selectedRole === role.id ? "text-primary" : "text-foreground")}>{role.label}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{role.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="you@example.com" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Password</Label>
                      <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <Button className="w-full btn-golden h-11" onClick={handleLogin}>Log In <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                  <div className="relative flex justify-center"><span className="bg-background px-3 text-xs text-muted-foreground">or continue with</span></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-11">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                  </Button>
                  <Button variant="outline" className="h-11">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Apple
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="signup">
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Create Account</h2>
                  <p className="text-sm text-muted-foreground">Start ordering your favourite food today</p>
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <Label>I want to join as</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        className={cn(
                          "flex items-center gap-2.5 p-3 rounded-xl border-2 transition-all duration-200 text-left",
                          selectedRole === role.id
                            ? "border-primary bg-primary/10 shadow-golden"
                            : "border-border hover:border-primary/30 hover:bg-muted/50"
                        )}
                      >
                        <div className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all",
                          selectedRole === role.id ? "bg-gradient-golden shadow-golden" : "bg-muted"
                        )}>
                          <role.icon className={cn("w-4.5 h-4.5", selectedRole === role.id ? "text-primary-foreground" : "text-muted-foreground")} />
                        </div>
                        <div className="min-w-0">
                          <p className={cn("text-sm font-semibold truncate", selectedRole === role.id ? "text-primary" : "text-foreground")}>{role.label}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{role.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="John Doe" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="you@example.com" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type={showPassword ? "text" : "password"} placeholder="••••••••" className="pl-10 pr-10" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <Button className="w-full btn-golden h-11" onClick={handleSignup}>Create Account <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
                <p className="text-xs text-center text-muted-foreground">By signing up, you agree to our Terms of Service and Privacy Policy</p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
