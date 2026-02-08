import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  EyeOff,
  DollarSign,
  UtensilsCrossed,
  Filter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: 1, name: "Margherita Pizza", category: "Pizza", price: "$15.00", description: "Classic tomato, mozzarella, and basil", available: true, popular: true },
  { id: 2, name: "Pepperoni Pizza", category: "Pizza", price: "$18.00", description: "Loaded with pepperoni and cheese", available: true, popular: true },
  { id: 3, name: "Hawaiian Pizza", category: "Pizza", price: "$17.00", description: "Ham and pineapple combo", available: true, popular: false },
  { id: 4, name: "Meat Lovers Pizza", category: "Pizza", price: "$22.00", description: "Pepperoni, sausage, bacon, and ham", available: false, popular: false },
  { id: 5, name: "Garlic Bread", category: "Sides", price: "$5.00", description: "Toasted with garlic butter", available: true, popular: true },
  { id: 6, name: "Caesar Salad", category: "Salads", price: "$8.00", description: "Romaine, parmesan, croutons", available: true, popular: false },
  { id: 7, name: "Buffalo Wings", category: "Sides", price: "$12.00", description: "Spicy buffalo sauce, ranch dip", available: true, popular: true },
  { id: 8, name: "Tiramisu", category: "Desserts", price: "$7.00", description: "Classic Italian dessert", available: true, popular: false },
];

const categories = ["All", "Pizza", "Sides", "Salads", "Desserts", "Drinks"];

export default function VendorMenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [items, setItems] = useState(menuItems);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleAvailability = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Menu Management</h1>
          <p className="text-muted-foreground mt-1">Manage your restaurant menu items</p>
        </div>
        <Button className="btn-golden">
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="stat-card"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10">
              <UtensilsCrossed className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{items.length}</p>
              <p className="text-sm text-muted-foreground">Total Items</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="stat-card"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-success/10">
              <Eye className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">{items.filter(i => i.available).length}</p>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stat-card"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-warning/10">
              <EyeOff className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold">{items.filter(i => !i.available).length}</p>
              <p className="text-sm text-muted-foreground">Unavailable</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="section-card"
      >
        <div className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className={cn(
              "section-card hover:shadow-medium transition-all",
              !item.available && "opacity-60"
            )}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    {item.popular && (
                      <Badge className="bg-primary/15 text-primary text-xs">Popular</Badge>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">{item.category}</Badge>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-popover">
                    <DropdownMenuItem className="cursor-pointer">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Item
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Item
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-xl font-bold">{item.price.replace('$', '')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                  <Switch
                    checked={item.available}
                    onCheckedChange={() => toggleAvailability(item.id)}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add New Item Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + filteredItems.length * 0.05 }}
          className="section-card border-dashed hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
        >
          <div className="p-6 h-full flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-1">Add New Item</h3>
            <p className="text-sm text-muted-foreground">Add a new dish to your menu</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
