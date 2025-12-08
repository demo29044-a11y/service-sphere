import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCard } from "@/components/ServiceCard";
import { FilterPanel, FilterState } from "@/components/FilterPanel";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { services, categories } from "@/data/mockData";

export default function Services() {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    priceRange: [0, 5000],
    rating: 0,
    deliveryTime: [],
    verified: false,
  });

  const queryParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";

  // Apply filters (simplified for demo)
  let filteredServices = services;

  if (categoryParam) {
    const categoryName = categories.find((c) => c.slug === categoryParam)?.name;
    if (categoryName) {
      filteredServices = filteredServices.filter(
        (s) => s.category === categoryName
      );
    }
  }

  if (queryParam) {
    filteredServices = filteredServices.filter(
      (s) =>
        s.title.toLowerCase().includes(queryParam.toLowerCase()) ||
        s.description.toLowerCase().includes(queryParam.toLowerCase())
    );
  }

  if (filters.category.length > 0) {
    const categoryNames = filters.category.map(
      (slug) => categories.find((c) => c.slug === slug)?.name
    );
    filteredServices = filteredServices.filter((s) =>
      categoryNames.includes(s.category)
    );
  }

  if (filters.rating > 0) {
    filteredServices = filteredServices.filter((s) => s.rating >= filters.rating);
  }

  if (filters.verified) {
    filteredServices = filteredServices.filter((s) => s.provider.verified);
  }

  // Sort
  if (sortBy === "price-low") {
    filteredServices = [...filteredServices].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredServices = [...filteredServices].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredServices = [...filteredServices].sort((a, b) => b.rating - a.rating);
  }

  const currentCategory = categories.find((c) => c.slug === categoryParam);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="border-b bg-card py-8">
          <div className="container">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  {currentCategory
                    ? `${currentCategory.name} Services`
                    : queryParam
                    ? `Results for "${queryParam}"`
                    : "Browse All Services"}
                </h1>
                <p className="mt-1 text-muted-foreground">
                  {filteredServices.length} services available
                </p>
              </div>
              <SearchBar className="max-w-2xl" />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-8">
          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <FilterPanel onFilterChange={setFilters} />
            </aside>

            {/* Services Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-2">
                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 p-6">
                      <FilterPanel onFilterChange={setFilters} />
                    </SheetContent>
                  </Sheet>

                  {/* Active Filters */}
                  {filters.category.length > 0 && (
                    <div className="hidden md:flex gap-2">
                      {filters.category.slice(0, 2).map((slug) => {
                        const cat = categories.find((c) => c.slug === slug);
                        return (
                          <Badge key={slug} variant="secondary">
                            {cat?.name}
                          </Badge>
                        );
                      })}
                      {filters.category.length > 2 && (
                        <Badge variant="outline">
                          +{filters.category.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="hidden md:flex border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      className="rounded-r-none"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="icon"
                      className="rounded-l-none"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Services */}
              {filteredServices.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {filteredServices.map((service, index) => (
                    <div
                      key={service.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ServiceCard {...service} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">
                    No services found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                      setFilters({
                        category: [],
                        priceRange: [0, 5000],
                        rating: 0,
                        deliveryTime: [],
                        verified: false,
                      })
                    }
                  >
                    Clear all filters
                  </Button>
                </div>
              )}

              {/* Pagination Placeholder */}
              {filteredServices.length > 0 && (
                <div className="flex justify-center mt-10">
                  <div className="flex gap-2">
                    <Button variant="outline" disabled>
                      Previous
                    </Button>
                    <Button variant="outline">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
