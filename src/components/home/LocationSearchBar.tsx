import { useState } from "react";
import { MapPin, Search, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "Contractors",
  "Machines",
  "Land",
  "Homes",
  "Space",
  "Manufacturer",
  "Logistics",
  "Vendors",
  "Rental Services",
  "Construction",
];

export function LocationSearchBar() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const getDisplayCategory = () => {
    if (!selectedCategory) return "Services";
    const category = categories.find(
      (c) => c.toLowerCase().replace(" ", "-") === selectedCategory
    );
    return category || "Services";
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[90%] max-w-4xl z-10">
      <div className="bg-background rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter a location or postal code"
              className="pl-10 h-12 text-base border-input"
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 text-base">
                <Grid3X3 className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="h-12 px-6 border-2 font-medium"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Use Location
            </Button>
            <Button
              className="h-12 px-6 font-medium bg-[hsl(var(--red-accent))] hover:bg-[hsl(var(--red-accent))]/90 text-[hsl(var(--red-accent-foreground))]"
            >
              <Search className="h-4 w-4 mr-2" />
              Search for {getDisplayCategory()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
