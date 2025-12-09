import { Link } from "react-router-dom";
import { 
  HardHat, 
  Cog, 
  Mountain, 
  Home, 
  Building2, 
  Factory, 
  Truck, 
  Store, 
  Key, 
  Construction,
  LucideIcon
} from "lucide-react";

const serviceCategories = [
  { name: "Contractors", icon: HardHat, slug: "contractors" },
  { name: "Machines", icon: Cog, slug: "machines" },
  { name: "Land", icon: Mountain, slug: "land" },
  { name: "Homes", icon: Home, slug: "homes" },
  { name: "Space", icon: Building2, slug: "space" },
  { name: "Manufacturer", icon: Factory, slug: "manufacturer" },
  { name: "Logistics", icon: Truck, slug: "logistics" },
  { name: "Vendors", icon: Store, slug: "vendors" },
  { name: "Rental Services", icon: Key, slug: "rental-services" },
  { name: "Construction", icon: Construction, slug: "construction" },
];

interface ServicePlaceholderCardProps {
  index: number;
}

export function ServicePlaceholderCard({ index }: ServicePlaceholderCardProps) {
  const category = serviceCategories[index];
  
  if (!category) {
    return (
      <div className="aspect-square bg-muted rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer flex items-center justify-center">
        <span className="text-muted-foreground/40 text-sm font-medium">
          Coming Soon
        </span>
      </div>
    );
  }

  const IconComponent = category.icon;

  return (
    <Link to={`/services?category=${category.slug}`}>
      <div className="aspect-square bg-muted rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center gap-2 group">
        <div className="p-3 rounded-full bg-background transition-colors group-hover:bg-[hsl(var(--red-accent))] group-hover:text-white">
          <IconComponent className="h-6 w-6 md:h-7 md:w-7" />
        </div>
        <span className="text-foreground font-medium text-xs md:text-sm text-center px-2">
          {category.name}
        </span>
      </div>
    </Link>
  );
}

export { serviceCategories };
