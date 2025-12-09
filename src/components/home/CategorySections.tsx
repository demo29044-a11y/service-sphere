import { CategoryScrollSection } from "./CategoryScrollSection";
import { categoryProviders } from "@/data/categoryProviders";

export function CategorySections() {
  const sections = [
    { title: "Contractors", providers: categoryProviders.contractors },
    { title: "Machines", providers: categoryProviders.machines },
    { title: "Home Services", providers: categoryProviders.homeServices },
    { title: "Training", providers: categoryProviders.training },
    { title: "Massage & Wellness", providers: categoryProviders.massage },
    { title: "Real Estate (Land/Homes)", providers: categoryProviders.realEstate },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4">
          {sections.map((section) => (
            <CategoryScrollSection
              key={section.title}
              title={section.title}
              providers={section.providers}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
