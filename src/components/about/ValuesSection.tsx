import { Heart, Shield, Users, Zap, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Every provider on our platform undergoes thorough verification to ensure quality and dependability.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your needs and satisfaction are at the heart of everything we do. We're committed to making your experience seamless.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously improve our platform with cutting-edge technology to make service discovery faster and easier.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "Clear pricing, honest reviews, and open communication. No hidden fees, no surprises.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every interaction, ensuring the highest standards of service quality.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We operate with honesty, fairness, and ethical practices in all our business relationships.",
  },
];

const ValuesSection = () => {
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
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide us in building a trusted service marketplace
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-sm hover:shadow-md transition-all duration-500 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--red-accent))]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[hsl(var(--red-accent))]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

