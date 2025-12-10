import { ServicePlaceholderCard, serviceCategories } from "./ServicePlaceholderCard";
export function ServicesSection() {
  return (
    <section className="px-4 md:px-12 py-8 md:py-14 mt-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center md:text-center">
          <span className="text-foreground">Our </span>
          <span className="text-[hsl(var(--red-accent))]">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-4">
          {serviceCategories.map((_, index) => (
            <ServicePlaceholderCard key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
