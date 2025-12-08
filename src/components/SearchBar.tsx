import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { categories } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  variant?: "default" | "hero";
}

export function SearchBar({ className, variant = "default" }: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    navigate(`/services?${params.toString()}`);
  };

  if (variant === "hero") {
    return (
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col sm:flex-row gap-3 w-full max-w-3xl mx-auto",
          className
        )}
      >
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="What service are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-14 pl-12 text-base bg-background border-border"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="h-14 w-full sm:w-48 bg-background border-border">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.slug}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit" size="lg" className="h-14 px-8">
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex gap-2 w-full", className)}
    >
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
