import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    contact: "support@servicehub.com",
    action: "mailto:support@servicehub.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm EST",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available for Pro & Business users",
    contact: "Start a conversation",
    action: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Would integrate with backend
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question or need help? We're here to assist you. Choose
                the best way to reach us below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 -mt-8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card
                  key={method.title}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <method.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      {method.description}
                    </p>
                    <a
                      href={method.action}
                      className="text-primary hover:underline font-medium"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) =>
                            setFormData({ ...formData, category: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="press">Press Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    We'd Love to Hear From You
                  </h2>
                  <p className="text-muted-foreground">
                    Whether you have a question about our platform, pricing, or
                    anything else, our team is ready to answer all your questions.
                  </p>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Our Office
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          123 Market Street, Suite 456
                          <br />
                          San Francisco, CA 94102
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Business Hours
                        </h3>
                        <div className="text-sm text-muted-foreground mt-1 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                          <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pro and Business subscribers have access to priority support
                    and live chat.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/pricing">View Plans</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
