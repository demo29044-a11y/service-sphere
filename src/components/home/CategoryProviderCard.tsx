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
        "group flex-shrink-0 w-[280px] bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
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
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background hover:text-destructive"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-base line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {location}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-foreground">
            <span className="font-bold">₹{price.toLocaleString('en-IN')}</span>
            <span className="text-sm text-muted-foreground"> {priceLabel}</span>
          </p>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="font-medium text-sm">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
