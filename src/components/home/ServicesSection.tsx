import { ServicePlaceholderCard } from "./ServicePlaceholderCard";

export function ServicesSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-16 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center md:text-left">
          <span className="text-foreground">Our </span>
          <span className="text-[hsl(var(--red-accent))]">Services</span>
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <ServicePlaceholderCard key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
