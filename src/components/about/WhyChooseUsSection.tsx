import { BadgeCheck, MapPin, Zap, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Verified Partners",
    description: "All providers undergo thorough verification to ensure quality and reliability.",
  },
  {
    icon: MapPin,
    title: "Real-Time Map Search",
    description: "Find services near you instantly with our interactive map-based discovery.",
  },
  {
    icon: Zap,
    title: "Fast & Transparent Process",
    description: "Clear pricing, quick responses, and no hidden fees throughout your journey.",
  },
  {
    icon: MessageSquare,
    title: "Flexible Contact Options",
    description: "Choose between direct provider contact or platform-assisted service booking.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to making your service discovery experience seamless and trustworthy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--red-accent))]/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-[hsl(var(--red-accent))]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
