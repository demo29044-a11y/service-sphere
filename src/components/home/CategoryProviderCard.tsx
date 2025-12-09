import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryProviderCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  priceLabel: string;
  rating: number;
  reviewCount: number;
  className?: string;
}

export function CategoryProviderCard({
  id,
  name,
  image,
  location,
  price,
  priceLabel,
  rating,
  reviewCount,
  className,
}: CategoryProviderCardProps) {
  return (
    <Link
      to={`/provider/${id}`}
      className={cn(
        "group flex-shrink-0 w-[180px] bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-7 w-7 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background hover:text-destructive"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart className="h-3.5 w-3.5" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-semibold text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
          {location}
        </p>
        
        <div className="flex items-center justify-between mt-2">
          <p className="text-foreground text-sm">
            <span className="font-bold">₹{price.toLocaleString('en-IN')}</span>
            <span className="text-xs text-muted-foreground"> {priceLabel}</span>
          </p>
          <div className="flex items-center gap-0.5">
            <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
            <span className="font-medium text-xs">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
