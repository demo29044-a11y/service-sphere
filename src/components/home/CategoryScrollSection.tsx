import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryProviderCard } from "./CategoryProviderCard";

interface Provider {
  id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  priceLabel: string;
  rating: number;
  reviewCount: number;
}

interface CategoryScrollSectionProps {
  title: string;
  providers: Provider[];
}

export function CategoryScrollSection({ title, providers }: CategoryScrollSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-4">
      {/* Header with Title and Arrows */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full border-border hover:bg-secondary"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full border-border hover:bg-secondary"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {providers.map((provider) => (
          <CategoryProviderCard
            key={provider.id}
            id={provider.id}
            name={provider.name}
            image={provider.image}
            location={provider.location}
            price={provider.price}
            priceLabel={provider.priceLabel}
            rating={provider.rating}
            reviewCount={provider.reviewCount}
          />
        ))}
      </div>
    </section>
  );
}
