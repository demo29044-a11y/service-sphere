import { Grid3X3, MapPin, Phone, Shield, BadgeCheck, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Grid3X3,
    title: "All Services in One Place",
    description: "Access 10+ service categories from a single platform",
  },
  {
    icon: MapPin,
    title: "Map-Based Discovery",
    description: "Find providers near your location with real-time maps",
  },
  {
    icon: Phone,
    title: "Direct Contact (Premium)",
    description: "Connect directly with providers via premium access",
  },
  {
    icon: Shield,
    title: "Secure Bookings",
    description: "Safe and secure platform-assisted bookings",
  },
  {
    icon: BadgeCheck,
    title: "Verified Providers",
    description: "All providers go through our verification process",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden fees or surprises",
  },
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to find and connect with trusted service providers
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-sm hover:shadow-md transition-all duration-500 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--red-accent))]/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[hsl(var(--red-accent))]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
