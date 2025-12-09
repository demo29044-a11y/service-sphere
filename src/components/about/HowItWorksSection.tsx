import { Grid3X3, MapPin, Users, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Grid3X3,
    title: "Choose Category",
    description: "Select from 10+ service categories",
    step: 1,
  },
  {
    icon: MapPin,
    title: "Enter Location",
    description: "Enter your location or postal code",
    step: 2,
  },
  {
    icon: Users,
    title: "Compare Providers",
    description: "Browse and compare verified providers",
    step: 3,
  },
  {
    icon: Phone,
    title: "Contact or Book",
    description: "Contact directly or book through platform",
    step: 4,
  },
];

const HowItWorksSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the right service provider in just four simple steps
          </p>
        </div>
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative text-center transition-all duration-500 ${
                stepsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border transition-all duration-700 ${
                  stepsVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`} style={{ transitionDelay: `${(index + 1) * 200}ms`, transformOrigin: 'left' }} />
              )}
              
              {/* Step circle */}
              <div className="relative mx-auto w-16 h-16 rounded-full bg-[hsl(var(--red-accent))] flex items-center justify-center mb-4 shadow-lg">
                <step.icon className="h-7 w-7 text-[hsl(var(--red-accent-foreground))]" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
