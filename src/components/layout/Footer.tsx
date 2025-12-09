import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  forBuyers: [
    { label: "Browse Services", href: "/services" },
    { label: "How It Works", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Success Stories", href: "/about" },
  ],
  forProviders: [
    { label: "Become a Provider", href: "/signup?type=provider" },
    { label: "Provider Resources", href: "/help" },
    { label: "Community", href: "/about" },
    { label: "Success Tips", href: "/help" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Press", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Trust & Safety", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-xl bg-primary p-6 md:p-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary-foreground">Stay updated with the latest services</h3>
            <p className="mt-1 text-primary-foreground/80">Get exclusive offers and updates delivered to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 bg-primary-foreground border-0"
            />
            <Button variant="secondary">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-foreground mb-4">For Buyers</h4>
            <ul className="space-y-3">
              {footerLinks.forBuyers.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">For Providers</h4>
            <ul className="space-y-3">
              {footerLinks.forProviders.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">Imagineering Construct</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Imagineering Construct. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
