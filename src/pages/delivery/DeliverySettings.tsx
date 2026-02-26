import { useState } from "react";
import { User, Bike, Bell, FileText, Camera, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DeliverySettings = () => {
  const [availability, setAvailability] = useState(true);

  return (
    <div className="page-container">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Tabs defaultValue="profile">
        <TabsList><TabsTrigger value="profile">Profile</TabsTrigger><TabsTrigger value="vehicle">Vehicle</TabsTrigger><TabsTrigger value="notifications">Notifications</TabsTrigger><TabsTrigger value="documents">Documents</TabsTrigger></TabsList>

        <TabsContent value="profile" className="mt-6">
          <div className="section-card">
            <div className="section-header"><h3 className="font-semibold">Personal Info</h3></div>
            <div className="section-content space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-golden flex items-center justify-center text-2xl font-bold text-primary-foreground avatar-ring">R</div>
                  <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow"><Camera className="w-3.5 h-3.5" /></button>
                </div>
                <div>
                  <p className="font-semibold">Rahul S.</p>
                  <p className="text-sm text-muted-foreground">Delivery Partner since Jan 2024</p>
                </div>
              </div>
              <Separator />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Full Name</Label><Input defaultValue="Rahul Singh" /></div>
                <div className="space-y-2"><Label>Phone</Label><Input defaultValue="+1 (555) 789-0123" /></div>
                <div className="space-y-2"><Label>Email</Label><Input defaultValue="rahul@example.com" /></div>
                <div className="space-y-2"><Label>City</Label><Input defaultValue="New York" /></div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">Availability Status</p>
                  <p className="text-xs text-muted-foreground">Toggle to go online or offline</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{availability ? "Online" : "Offline"}</span>
                  <Switch checked={availability} onCheckedChange={setAvailability} />
                </div>
              </div>
              <Button className="btn-golden"><Save className="w-4 h-4 mr-2" /> Save Changes</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="vehicle" className="mt-6">
          <div className="section-card">
            <div className="section-header"><h3 className="font-semibold">Vehicle Details</h3></div>
            <div className="section-content space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Vehicle Type</Label><Input defaultValue="Motorcycle" /></div>
                <div className="space-y-2"><Label>Make & Model</Label><Input defaultValue="Honda CBR 150" /></div>
                <div className="space-y-2"><Label>Plate Number</Label><Input defaultValue="NY-1234-AB" /></div>
                <div className="space-y-2"><Label>Color</Label><Input defaultValue="Black" /></div>
              </div>
              <Button className="btn-golden"><Save className="w-4 h-4 mr-2" /> Save Changes</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="section-card">
            <div className="section-header"><h3 className="font-semibold">Notification Preferences</h3></div>
            <div className="section-content space-y-4">
              {["New delivery requests", "Earnings updates", "Promotional offers", "App updates", "Weekly summary"].map((item) => (
                <div key={item} className="flex items-center justify-between py-2">
                  <span className="text-sm">{item}</span>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="mt-6">
          <div className="section-card">
            <div className="section-header"><h3 className="font-semibold">Documents</h3></div>
            <div className="section-content space-y-4">
              {[
                { name: "Driver's License", status: "Verified" },
                { name: "Vehicle Insurance", status: "Verified" },
                { name: "Vehicle Registration", status: "Pending" },
                { name: "Background Check", status: "Verified" },
              ].map((doc) => (
                <div key={doc.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{doc.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`status-badge ${doc.status === "Verified" ? "status-active" : "status-pending"}`}>{doc.status}</span>
                    <Button variant="outline" size="sm">Upload</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeliverySettings;
