import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  priceType: string;
  image: string;
  provider: {
    id: string;
    name: string;
    avatar: string;
    verified?: boolean;
  };
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  featured?: boolean;
  tags?: string[];
  className?: string;
}

const priceTypeLabels: Record<string, string> = {
  fixed: "",
  hourly: "/hr",
  per_minute: "/min",
  per_article: "/article",
  monthly: "/mo",
};

export function ServiceCard({
  id,
  title,
  description,
  price,
  priceType,
  image,
  provider,
  rating,
  reviewCount,
  deliveryTime,
  featured,
  tags,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        featured && "ring-2 ring-primary",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-primary">Featured</Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        {/* Provider Info */}
        <Link
          to={`/provider/${provider.id}`}
          className="flex items-center gap-2 mb-3"
        >
          <Avatar className="h-6 w-6">
            <AvatarImage src={provider.avatar} alt={provider.name} />
            <AvatarFallback>{provider.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {provider.name}
          </span>
          {provider.verified && (
            <Badge variant="secondary" className="h-5 text-xs">
              Verified
            </Badge>
          )}
        </Link>

        {/* Title & Description */}
        <Link to={`/service/${id}`}>
          <h3 className="font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        {/* Rating & Delivery */}
        <div className="flex items-center gap-4 mt-3 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{deliveryTime}</span>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <span className="text-xs text-muted-foreground">Starting at</span>
          <p className="text-lg font-bold text-foreground">
            ${price}
            <span className="text-sm font-normal text-muted-foreground">
              {priceTypeLabels[priceType]}
            </span>
          </p>
        </div>
        <Button size="sm" asChild>
          <Link to={`/service/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
