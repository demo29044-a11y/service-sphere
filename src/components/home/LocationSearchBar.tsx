import { useState } from "react";
import { MapPin, Search, Grid3X3, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePlacesAutocomplete } from "@/hooks/usePlacesAutocomplete";

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
  const [location, setLocation] = useState<string>("");
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const { inputRef, isLoaded, selectedPlace, getCurrentLocation } =
    usePlacesAutocomplete({
      onPlaceSelect: (place) => {
        setLocation(place.formatted_address);
        setIsGettingLocation(false);
        console.log("Selected place:", place);
      },
      onError: (error) => {
        setIsGettingLocation(false);
        alert(error);
      },
    });

  const getDisplayCategory = () => {
    if (!selectedCategory) return "Services";
    const category = categories.find(
      (c) => c.toLowerCase().replace(" ", "-") === selectedCategory
    );
    return category || "Services";
  };

  const handleSearch = () => {
    if (!location && !selectedPlace) {
      console.warn("Please select a location");
      return;
    }
    console.log("Searching for:", {
      location: location || selectedPlace?.formatted_address,
      category: selectedCategory,
    });
    // TODO: Implement search functionality
  };

  const handleUseLocation = () => {
    setIsGettingLocation(true);
    getCurrentLocation();
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[90%] max-w-4xl z-10">
      <div className="bg-background rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
            {!isLoaded && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" />
            )}
            <Input
              ref={inputRef}
              type="text"
              placeholder={
                isLoaded
                  ? "Enter a location or postal code"
                  : "Loading location services..."
              }
              className="pl-10 h-12 text-base border-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={!isLoaded}
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
              onClick={handleUseLocation}
              disabled={!isLoaded || isGettingLocation}
            >
              {isGettingLocation ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Getting Location...
                </>
              ) : (
                <>
                  <MapPin className="h-4 w-4 mr-2" />
                  Use Location
                </>
              )}
            </Button>
            <Button
              className="h-12 px-6 font-medium bg-[hsl(var(--red-accent))] hover:bg-[hsl(var(--red-accent))]/90 text-[hsl(var(--red-accent-foreground))]"
              onClick={handleSearch}
              disabled={!isLoaded}
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
