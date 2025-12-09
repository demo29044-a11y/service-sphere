import { CategoryScrollSection } from "./CategoryScrollSection";
import { categoryProviders } from "@/data/categoryProviders";

export function CategorySections() {
  const sections = [
    { title: "Contractors", providers: categoryProviders.contractors },
    { title: "Machines", providers: categoryProviders.machines },
    { title: "Construction", providers: categoryProviders.construction },
    { title: "Logistics", providers: categoryProviders.logistics },
    { title: "Vendors", providers: categoryProviders.vendors },
    { title: "Rental Services", providers: categoryProviders.rentalServices },
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
