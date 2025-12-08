import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: number;
  billing: string;
  description: string;
  features: string[];
  limitations?: string[];
  cta: string;
  popular?: boolean;
  className?: string;
}

export function PricingCard({
  name,
  price,
  billing,
  description,
  features,
  limitations = [],
  cta,
  popular,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col transition-all duration-300 hover:shadow-lg",
        popular && "border-primary shadow-lg scale-105 z-10",
        className
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold">
            {price === 0 ? "Free" : `$${price}`}
          </span>
          {price > 0 && (
            <span className="text-muted-foreground ml-1">{billing}</span>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
          {limitations.map((limitation) => (
            <li key={limitation} className="flex items-start gap-2 text-muted-foreground">
              <X className="h-5 w-5 shrink-0 mt-0.5" />
              <span className="text-sm">{limitation}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={popular ? "default" : "outline"}
          size="lg"
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
}
