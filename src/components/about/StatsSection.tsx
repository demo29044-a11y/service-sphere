import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
  isVisible: boolean;
}

const StatItem = ({ value, suffix, label, index, isVisible }: StatItemProps) => {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">
        {label}
      </div>
    </div>
  );
};

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Service Categories",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Verified Providers",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    value: 50,
    suffix: "+",
    label: "Cities Covered",
  },
];

const StatsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Growing every day to serve you better
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Statistics as of {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
              isVisible={statsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
