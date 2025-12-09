import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import visionImage from "@/assets/vision-image.jpg";

const VisionSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div 
            ref={textRef}
            className={`transition-all duration-700 delay-100 ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
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
          <div 
            ref={imageRef}
            className={`flex items-center justify-center transition-all duration-700 delay-200 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={visionImage} 
                alt="Our vision - connecting people with trusted services" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
