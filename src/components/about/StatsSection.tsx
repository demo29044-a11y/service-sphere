import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "10+",
    label: "Service Categories",
  },
  {
    value: "1,000+",
    label: "Verified Providers",
  },
  {
    value: "10,000+",
    label: "Happy Customers",
  },
  {
    value: "50+",
    label: "Cities Covered",
  },
];

const StatsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--red-accent))]">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--red-accent-foreground))] mb-4">
            Our Impact
          </h2>
          <p className="text-[hsl(var(--red-accent-foreground))]/80 text-lg max-w-2xl mx-auto">
            Growing every day to serve you better
          </p>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-500 ${
                statsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--red-accent-foreground))] mb-2">
                {stat.value}
              </div>
              <div className="text-[hsl(var(--red-accent-foreground))]/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
