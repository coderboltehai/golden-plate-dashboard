import { motion } from "framer-motion";
import { 
  Store, 
  MapPin, 
  Clock, 
  Phone,
  Mail,
  Globe,
  Camera,
  Save,
  Bell,
  Shield,
  CreditCard,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VendorSettings() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your restaurant settings</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-muted/50 p-1 w-full sm:w-auto flex flex-wrap">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <Store className="w-4 h-4" />
            Restaurant
          </TabsTrigger>
          <TabsTrigger value="hours" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Hours
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Payments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-card"
          >
            <div className="section-header">
              <h3 className="text-lg font-semibold">Restaurant Profile</h3>
            </div>
            <div className="section-content space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">PP</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Change Logo
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG. Max 2MB. Recommended: 400x400px</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Restaurant Name</Label>
                  <Input defaultValue="Pizza Palace" />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select defaultValue="italian">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="italian">Italian</SelectItem>
                      <SelectItem value="american">American</SelectItem>
                      <SelectItem value="mexican">Mexican</SelectItem>
                      <SelectItem value="japanese">Japanese</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="indian">Indian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Description</Label>
                  <Textarea 
                    defaultValue="Authentic Italian pizzas made with fresh ingredients and traditional recipes. Family-owned since 2010."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="+1 555 123 4567" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="contact@pizzapalace.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="123 Main Street, Downtown, New York, NY 10001" className="pl-10" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button className="btn-golden">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="hours">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-card"
          >
            <div className="section-header">
              <h3 className="text-lg font-semibold">Operating Hours</h3>
            </div>
            <div className="section-content space-y-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <div key={day} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                  <div className="flex items-center gap-4">
                    <Switch defaultChecked={day !== "Sunday"} />
                    <span className="font-medium w-28">{day}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Select defaultValue="10:00">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        {["09:00", "10:00", "11:00", "12:00"].map(t => (
                          <SelectItem key={t} value={t}>{t} AM</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="text-muted-foreground">to</span>
                    <Select defaultValue="22:00">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        {["20:00", "21:00", "22:00", "23:00", "00:00"].map(t => (
                          <SelectItem key={t} value={t}>{parseInt(t) > 12 ? `${parseInt(t)-12}:00 PM` : t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <Button className="btn-golden">
                  <Save className="w-4 h-4 mr-2" />
                  Save Hours
                </Button>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-card"
          >
            <div className="section-header">
              <h3 className="text-lg font-semibold">Notification Settings</h3>
            </div>
            <div className="section-content space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New Order Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified for every new order</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Order Sound Alert</Label>
                    <p className="text-sm text-muted-foreground">Play a sound when new order arrives</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Review Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified for new reviews</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Daily Summary Email</Label>
                    <p className="text-sm text-muted-foreground">Receive daily performance summary</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Low Stock Alerts</Label>
                    <p className="text-sm text-muted-foreground">Alert when menu items are running low</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="payments">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-card"
          >
            <div className="section-header">
              <h3 className="text-lg font-semibold">Payment Settings</h3>
            </div>
            <div className="section-content space-y-6">
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-foreground rounded flex items-center justify-center">
                      <span className="text-background font-bold text-sm">BANK</span>
                    </div>
                    <div>
                      <p className="font-medium">Bank Account</p>
                      <p className="text-sm text-muted-foreground">****4567 - Chase Bank</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Next Payout</p>
                    <p className="font-medium">Feb 15, 2026</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Pending Balance</p>
                    <p className="font-bold text-primary">$1,284.50</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Payout Schedule</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Minimum Payout</Label>
                  <Input type="number" defaultValue="100" />
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
