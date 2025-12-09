import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers and trusted providers on our platform today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-[hsl(var(--red-accent))] hover:bg-[hsl(var(--red-accent))]/90 text-[hsl(var(--red-accent-foreground))]"
          >
            <Link to="/services">
              <Search className="h-4 w-4 mr-2" />
              Find Services Near You
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-[hsl(var(--red-accent))] text-[hsl(var(--red-accent))] hover:bg-[hsl(var(--red-accent))]/10"
          >
            <Link to="/signup?type=provider">
              <UserPlus className="h-4 w-4 mr-2" />
              Become a Provider
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
