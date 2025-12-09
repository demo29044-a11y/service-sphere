import { Target } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We envision a world where finding trusted service providers is as simple as a few clicks. 
              Our mission is to simplify access to essential services by creating a unified platform 
              that bridges the gap between service seekers and verified providers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you need heavy machinery for construction, a contractor for home renovation, 
              or logistics support for your business — we're here to connect you with the right 
              professionals, quickly and reliably.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-muted/50 rounded-2xl flex items-center justify-center">
              <Target className="h-32 w-32 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
