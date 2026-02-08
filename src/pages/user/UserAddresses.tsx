import { motion } from "framer-motion";
import { 
  MapPin, 
  Plus, 
  Edit, 
  Trash2, 
  Home,
  Briefcase,
  MoreHorizontal,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const addresses = [
  { id: 1, label: "Home", address: "123 Main Street, Apt 4B", city: "New York, NY 10001", isDefault: true, icon: Home },
  { id: 2, label: "Work", address: "456 Business Ave, Floor 12", city: "New York, NY 10002", isDefault: false, icon: Briefcase },
  { id: 3, label: "Parents", address: "789 Family Road", city: "Brooklyn, NY 11201", isDefault: false, icon: Home },
];

export default function UserAddresses() {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Saved Addresses</h1>
          <p className="text-muted-foreground mt-1">Manage your delivery addresses</p>
        </div>
        <Button className="btn-golden">
          <Plus className="w-4 h-4 mr-2" />
          Add Address
        </Button>
      </div>

      {/* Addresses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {addresses.map((address, index) => (
          <motion.div
            key={address.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "section-card hover:shadow-medium transition-all cursor-pointer",
              address.isDefault && "ring-2 ring-primary"
            )}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    address.isDefault ? "bg-primary text-primary-foreground" : "bg-muted"
                  )}>
                    <address.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{address.label}</h3>
                      {address.isDefault && (
                        <Badge className="bg-primary/15 text-primary text-xs">Default</Badge>
                      )}
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-popover">
                    {!address.isDefault && (
                      <DropdownMenuItem className="cursor-pointer">
                        <Check className="w-4 h-4 mr-2" />
                        Set as Default
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="cursor-pointer">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Address
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p>{address.address}</p>
                    <p className="text-muted-foreground">{address.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add New Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: addresses.length * 0.1 }}
          className="section-card border-dashed hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
        >
          <div className="p-6 h-full flex flex-col items-center justify-center text-center min-h-[180px]">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-1">Add New Address</h3>
            <p className="text-sm text-muted-foreground">Save a new delivery location</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
