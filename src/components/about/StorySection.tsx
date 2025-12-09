import { Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StorySection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`flex items-center justify-center order-2 md:order-1 transition-all duration-700 delay-100 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="w-full max-w-md aspect-[4/3] bg-muted/50 rounded-2xl flex items-center justify-center">
              <Building2 className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </div>
          <div 
            ref={textRef}
            className={`order-1 md:order-2 transition-all duration-700 delay-200 ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We started with a simple observation: finding reliable service providers shouldn't be 
              this difficult. Whether it was renting machinery, hiring contractors, or finding the 
              right logistics partner, the process was fragmented, time-consuming, and often unreliable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              That's why we built this platform — to bring together all essential services under 
              one roof. Our goal is to eliminate the hassle of searching across multiple platforms 
              and provide a trusted space where quality meets convenience.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we're proud to serve thousands of customers and partners, making service 
              discovery simple, transparent, and reliable for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
