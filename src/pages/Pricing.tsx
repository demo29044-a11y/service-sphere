import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingCard } from "@/components/PricingCard";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Phone, Mail, MessageSquare } from "lucide-react";
import { pricingPlans, faqItems } from "@/data/mockData";

const premiumBenefits = [
  {
    icon: Phone,
    title: "Direct Phone Access",
    description: "Call providers directly to discuss projects and negotiate terms.",
  },
  {
    icon: Mail,
    title: "Email Contact",
    description: "Get provider email addresses for direct communication.",
  },
  {
    icon: MessageSquare,
    title: "Priority Messaging",
    description: "Your messages appear at the top of provider inboxes.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4" variant="secondary">
                Simple, Transparent Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Choose the Plan That's Right for You
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Start free and upgrade anytime. Premium plans unlock direct
                contact with providers and advanced features.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 -mt-8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PricingCard {...plan} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Why Upgrade to Premium?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Unlock powerful features to connect with providers faster
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {premiumBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center p-6 rounded-xl bg-card border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Feature Comparison
              </h2>
            </div>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 font-medium">Basic</th>
                    <th className="text-center py-4 px-4 font-medium bg-primary/5">
                      Pro
                    </th>
                    <th className="text-center py-4 px-4 font-medium">Business</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Browse Services", basic: true, pro: true, business: true },
                    { feature: "View Provider Profiles", basic: true, pro: true, business: true },
                    { feature: "Request Quotes", basic: true, pro: true, business: true },
                    { feature: "Direct Messaging", basic: false, pro: true, business: true },
                    { feature: "Phone Contact", basic: false, pro: true, business: true },
                    { feature: "Email Contact", basic: false, pro: true, business: true },
                    { feature: "Priority Search", basic: false, pro: true, business: true },
                    { feature: "Saved Searches", basic: false, pro: true, business: true },
                    { feature: "Team Collaboration", basic: false, pro: false, business: true },
                    { feature: "Dedicated Account Manager", basic: false, pro: false, business: true },
                    { feature: "API Access", basic: false, pro: false, business: true },
                    { feature: "Analytics Dashboard", basic: false, pro: false, business: true },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b">
                      <td className="py-4 px-4 text-sm">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {row.basic ? (
                          <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4 bg-primary/5">
                        {row.pro ? (
                          <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.business ? (
                          <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
