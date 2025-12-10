import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Business Owner",
    location: "Mumbai",
    rating: 5,
    text: "Finding reliable machinery rental was always a challenge. This platform connected me with verified providers in my area. Saved me hours of searching and multiple phone calls.",
    avatar: "",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Delhi",
    rating: 5,
    text: "Needed a contractor for home renovation. The map-based search made it so easy to find someone nearby. The verification process gave me confidence in my choice.",
    avatar: "",
  },
  {
    name: "Amit Patel",
    role: "Logistics Manager",
    location: "Bangalore",
    rating: 5,
    text: "As someone who needs logistics services regularly, having all providers in one place is a game-changer. The transparent pricing and direct contact options are excellent.",
    avatar: "",
  },
  {
    name: "Sneha Reddy",
    role: "Real Estate Developer",
    location: "Hyderabad",
    rating: 5,
    text: "The platform's comprehensive service categories and location-based search helped me find land and construction services quickly. Highly recommend for anyone in real estate.",
    avatar: "",
  },
  {
    name: "Vikram Singh",
    role: "Small Business Owner",
    location: "Pune",
    rating: 5,
    text: "From finding vendors to renting space, this platform has everything I need. The verified provider system gives me peace of mind when making business decisions.",
    avatar: "",
  },
  {
    name: "Anjali Mehta",
    role: "Event Organizer",
    location: "Chennai",
    rating: 5,
    text: "Finding rental services for events used to be stressful. Now I can compare multiple providers, see their locations on a map, and contact them directly. It's revolutionized my workflow.",
    avatar: "",
  },
];

const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

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
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from people who found trusted services through our platform
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-sm hover:shadow-md transition-all duration-500 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-[hsl(var(--red-accent))] text-[hsl(var(--red-accent))]" 
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[hsl(var(--red-accent))]/20 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-[hsl(var(--red-accent))]/10 text-[hsl(var(--red-accent))] text-sm">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

