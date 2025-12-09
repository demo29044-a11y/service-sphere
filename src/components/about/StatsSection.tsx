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
  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--red-accent))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--red-accent-foreground))] mb-4">
            Our Impact
          </h2>
          <p className="text-[hsl(var(--red-accent-foreground))]/80 text-lg max-w-2xl mx-auto">
            Growing every day to serve you better
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
