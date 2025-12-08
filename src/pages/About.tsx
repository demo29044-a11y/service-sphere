import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Target,
  Users,
  Shield,
  Award,
  Globe,
  Heart,
  ArrowRight,
} from "lucide-react";
import { stats } from "@/data/mockData";

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "We verify all providers and protect every transaction with industry-leading security measures.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We're building more than a platform—we're fostering a community of professionals who support each other.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain high standards and help providers deliver exceptional results through tools and resources.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "We connect talent and opportunity across borders, making quality services accessible worldwide.",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-Founder",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    bio: "Former VP at Google with 15+ years in tech leadership.",
  },
  {
    name: "Marcus Williams",
    role: "CTO & Co-Founder",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    bio: "Engineering leader who scaled systems at Amazon and Stripe.",
  },
  {
    name: "Sarah Martinez",
    role: "VP of Operations",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    bio: "Operations expert with experience at Uber and Airbnb.",
  },
  {
    name: "David Kim",
    role: "VP of Product",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    bio: "Product visionary from Meta and early-stage startups.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "ServiceHub was born from a simple idea: make quality services accessible to everyone." },
  { year: "2020", title: "10K Providers", description: "Reached our first major milestone with providers across 20 countries." },
  { year: "2021", title: "Series A", description: "Raised $25M to expand globally and enhance our platform." },
  { year: "2022", title: "100K Clients", description: "Celebrated serving over 100,000 satisfied clients worldwide." },
  { year: "2023", title: "Enterprise Launch", description: "Introduced enterprise solutions for larger organizations." },
  { year: "2024", title: "AI Integration", description: "Launched AI-powered matching to connect clients with perfect providers." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Connecting Talent with Opportunity
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                We're on a mission to democratize access to quality professional
                services, empowering businesses and freelancers to thrive together.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-card py-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Target className="h-4 w-4" />
                  <span className="text-sm font-medium">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Building the Future of Work
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At ServiceHub, we believe everyone deserves access to quality
                  professional services, regardless of their location or budget.
                  We're building a platform that makes it easy to find, hire, and
                  work with talented professionals worldwide.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform empowers service providers to build thriving
                  businesses while giving clients the tools they need to find the
                  perfect match for their projects.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
                    alt="Team collaboration"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop"
                    alt="Remote work"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Journey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From a small startup to a global marketplace
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 h-3 w-3 rounded-full bg-primary md:-translate-x-1/2" />
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The people building the future of ServiceHub
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card
                  key={member.name}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Heart className="h-12 w-12 mx-auto mb-6 text-primary-foreground" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Join Our Growing Community
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Whether you're looking to hire or offer services, ServiceHub is
                the place to grow.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/services">Browse Services</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/signup?type=provider">
                    Become a Provider
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
