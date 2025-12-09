import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/mockData";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">Imagineering Construct</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Browse Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    {categories.slice(0, 8).map((category) => (
                      <NavigationMenuLink key={category.id} asChild>
                        <Link
                          to={`/services?category=${category.slug}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {category.count.toLocaleString()} services
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="border-t p-4">
                    <Link to="/services" className="text-sm font-medium text-primary hover:underline">
                      View all categories →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/services"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/services") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Find Services
          </Link>
          <Link
            to="/pricing"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/pricing") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/about") ? "text-primary" : "text-muted-foreground",
            )}
          >
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/services">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Browse Services
              </Link>
              <Link to="/pricing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link to="/help" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Help Center
              </Link>
              <hr className="my-4" />
              <Link to="/login" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
              <Button asChild className="mt-2">
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
