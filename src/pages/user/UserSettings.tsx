import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone,
  Lock, 
  Bell, 
  CreditCard,
  Shield,
  Save,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UserSettings() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account settings</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-muted/50 p-1 w-full sm:w-auto flex flex-wrap">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Payment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-card"
          >
            <div className="section-header">
              <h3 className="text-lg font-semibold">Profile Information</h3>
            </div>
            <div className="section-content space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">Change Photo</Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="john.doe@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input defaultValue="+1 234 567 890" className="pl-10" />
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

        <TabsContent value="security">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-card"
          >
            <div className="section-header">
              <h3 className="text-lg font-semibold">Security Settings</h3>
            </div>
            <div className="section-content space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Change Password</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Current Password</Label>
                    <Input type="password" />
                  </div>
                  <div></div>
                  <div className="space-y-2">
                    <Label>New Password</Label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label>Confirm New Password</Label>
                    <Input type="password" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Login Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified of new logins</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <Button variant="outline" className="text-destructive hover:text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
                <Button className="btn-golden">
                  <Save className="w-4 h-4 mr-2" />
                  Update Password
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
              <h3 className="text-lg font-semibold">Notification Preferences</h3>
            </div>
            <div className="section-content space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Order Updates</Label>
                    <p className="text-sm text-muted-foreground">Status changes for your orders</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Promotional Offers</Label>
                    <p className="text-sm text-muted-foreground">Discounts and special deals</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New Restaurants</Label>
                    <p className="text-sm text-muted-foreground">When new restaurants join</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Review Reminders</Label>
                    <p className="text-sm text-muted-foreground">Remind to review past orders</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="payment">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-card"
          >
            <div className="section-header">
              <h3 className="text-lg font-semibold">Payment Methods</h3>
              <Button variant="outline" size="sm">Add Card</Button>
            </div>
            <div className="section-content space-y-4">
              <div className="p-4 rounded-xl bg-muted/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-gradient-golden rounded flex items-center justify-center text-primary-foreground font-bold text-xs">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/26</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-foreground rounded flex items-center justify-center text-background font-bold text-xs">
                    MC
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 8888</p>
                    <p className="text-sm text-muted-foreground">Expires 08/25</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
