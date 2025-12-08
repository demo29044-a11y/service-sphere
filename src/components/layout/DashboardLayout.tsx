import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  MessageSquare,
  Settings,
  CreditCard,
  Menu,
  LogOut,
  Briefcase,
  Star,
  BarChart3,
  FileText,
  Plus,
} from "lucide-react";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  type: "buyer" | "provider";
}

const buyerNavItems = [
  { label: "Overview", href: "/dashboard/buyer", icon: LayoutDashboard },
  { label: "My Orders", href: "/dashboard/buyer/orders", icon: ShoppingBag },
  { label: "Favorites", href: "/dashboard/buyer/favorites", icon: Heart },
  { label: "Messages", href: "/dashboard/buyer/messages", icon: MessageSquare },
  { label: "Subscription", href: "/dashboard/buyer/subscription", icon: CreditCard },
  { label: "Settings", href: "/dashboard/buyer/settings", icon: Settings },
];

const providerNavItems = [
  { label: "Overview", href: "/dashboard/provider", icon: LayoutDashboard },
  { label: "My Services", href: "/dashboard/provider/services", icon: Briefcase },
  { label: "Requests", href: "/dashboard/provider/requests", icon: FileText },
  { label: "Reviews", href: "/dashboard/provider/reviews", icon: Star },
  { label: "Analytics", href: "/dashboard/provider/analytics", icon: BarChart3 },
  { label: "Messages", href: "/dashboard/provider/messages", icon: MessageSquare },
  { label: "Earnings", href: "/dashboard/provider/earnings", icon: CreditCard },
  { label: "Settings", href: "/dashboard/provider/settings", icon: Settings },
];

export function DashboardLayout({ children, type }: DashboardLayoutProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const navItems = type === "buyer" ? buyerNavItems : providerNavItems;
  const dashboardTitle = type === "buyer" ? "Buyer Dashboard" : "Provider Dashboard";

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">ServiceHub</span>
        </Link>
      </div>

      {/* User Info */}
      <div className="border-b p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground capitalize">{type}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Provider Quick Action */}
      {type === "provider" && (
        <div className="border-t p-4">
          <Button className="w-full" asChild>
            <Link to="/dashboard/provider/services/new">
              <Plus className="mr-2 h-4 w-4" />
              Add New Service
            </Link>
          </Button>
        </div>
      )}

      {/* Logout */}
      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-card">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden flex h-16 items-center justify-between border-b bg-card px-4">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </Sheet>
          <span className="font-semibold">{dashboardTitle}</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
