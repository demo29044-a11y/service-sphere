import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { categories } from "@/data/mockData";

interface FilterPanelProps {
  onFilterChange?: (filters: FilterState) => void;
  className?: string;
}

export interface FilterState {
  category: string[];
  priceRange: [number, number];
  rating: number;
  deliveryTime: string[];
  verified: boolean;
}

const deliveryOptions = [
  { value: "1day", label: "Up to 1 day" },
  { value: "3days", label: "Up to 3 days" },
  { value: "7days", label: "Up to 7 days" },
  { value: "14days", label: "Up to 14 days" },
  { value: "30days", label: "Up to 30 days" },
];

export function FilterPanel({ onFilterChange, className }: FilterPanelProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 5000],
    rating: 0,
    deliveryTime: [],
    verified: false,
  });

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const toggleCategory = (slug: string) => {
    const newCategories = filters.category.includes(slug)
      ? filters.category.filter((c) => c !== slug)
      : [...filters.category, slug];
    updateFilter("category", newCategories);
  };

  const toggleDeliveryTime = (value: string) => {
    const newDelivery = filters.deliveryTime.includes(value)
      ? filters.deliveryTime.filter((d) => d !== value)
      : [...filters.deliveryTime, value];
    updateFilter("deliveryTime", newDelivery);
  };

  const clearFilters = () => {
    const defaultFilters: FilterState = {
      category: [],
      priceRange: [0, 5000],
      rating: 0,
      deliveryTime: [],
      verified: false,
    };
    setFilters(defaultFilters);
    onFilterChange?.(defaultFilters);
  };

  const activeFilterCount =
    filters.category.length +
    filters.deliveryTime.length +
    (filters.rating > 0 ? 1 : 0) +
    (filters.verified ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000 ? 1 : 0);

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "rating"]}>
        {/* Categories */}
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={cat.slug}
                    checked={filters.category.includes(cat.slug)}
                    onCheckedChange={() => toggleCategory(cat.slug)}
                  />
                  <Label
                    htmlFor={cat.slug}
                    className="text-sm font-normal cursor-pointer flex-1"
                  >
                    {cat.name}
                  </Label>
                  <span className="text-xs text-muted-foreground">
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) =>
                  updateFilter("priceRange", value as [number, number])
                }
                max={5000}
                step={50}
                className="mt-2"
              />
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    updateFilter("priceRange", [
                      Number(e.target.value),
                      filters.priceRange[1],
                    ])
                  }
                  className="w-24"
                  placeholder="Min"
                />
                <span className="text-muted-foreground">to</span>
                <Input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    updateFilter("priceRange", [
                      filters.priceRange[0],
                      Number(e.target.value),
                    ])
                  }
                  className="w-24"
                  placeholder="Max"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Rating */}
        <AccordionItem value="rating">
          <AccordionTrigger>Minimum Rating</AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-2">
              {[4, 4.5, 4.8].map((r) => (
                <Button
                  key={r}
                  variant={filters.rating === r ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateFilter("rating", filters.rating === r ? 0 : r)}
                >
                  {r}+ ★
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Delivery Time */}
        <AccordionItem value="delivery">
          <AccordionTrigger>Delivery Time</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {deliveryOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={filters.deliveryTime.includes(option.value)}
                    onCheckedChange={() => toggleDeliveryTime(option.value)}
                  />
                  <Label
                    htmlFor={option.value}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Verified Only */}
        <AccordionItem value="verified">
          <AccordionTrigger>Provider Status</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={filters.verified}
                onCheckedChange={(checked) =>
                  updateFilter("verified", checked as boolean)
                }
              />
              <Label htmlFor="verified" className="text-sm font-normal cursor-pointer">
                Verified providers only
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
