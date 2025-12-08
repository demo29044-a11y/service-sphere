import { LocationSearchBar } from "./LocationSearchBar";

export function HeroSection() {
  return (
    <section className="relative px-4 md:px-8 pt-6 pb-16 md:pb-20">
      {/* Banner Container */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-muted rounded-2xl md:rounded-3xl overflow-hidden">
        {/* Placeholder content - can be replaced with image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl md:text-6xl font-bold text-muted-foreground/30 tracking-widest">
            BANNER
          </span>
        </div>
      </div>
      
      {/* Floating Search Bar */}
      <LocationSearchBar />
    </section>
  );
}
