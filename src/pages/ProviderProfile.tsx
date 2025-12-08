import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReviewCard } from "@/components/ReviewCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
  Calendar,
  Briefcase,
  Mail,
  Phone,
  Lock,
  MessageSquare,
} from "lucide-react";
import { providers, services, reviews } from "@/data/mockData";

export default function ProviderProfile() {
  const { id } = useParams();
  const provider = providers.find((p) => p.id === id) || providers[0];
  const providerServices = services.filter((s) => s.provider.id === provider.id);
  const providerReviews = reviews.filter((r) => r.providerId === provider.id);

  // Demo: User is not premium
  const isPremium = false;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-start gap-6">
                  <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-4 ring-background shadow-lg">
                    <AvatarImage src={provider.avatar} alt={provider.name} />
                    <AvatarFallback className="text-3xl">
                      {provider.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                        {provider.name}
                      </h1>
                      {provider.verified && (
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      )}
                      {provider.topRated && (
                        <Badge className="bg-warning text-warning-foreground">
                          <Award className="h-3 w-3 mr-1" />
                          Top Rated
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      {provider.tagline}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="font-medium">{provider.rating}</span>
                        <span className="text-muted-foreground">
                          ({provider.reviewCount} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{provider.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Responds in {provider.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Card */}
              <Card className="w-full md:w-80 shrink-0">
                <CardHeader className="pb-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">
                      ${provider.hourlyRate}
                      <span className="text-lg font-normal text-muted-foreground">
                        /hr
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Starting rate
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" size="lg">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>

                  {isPremium ? (
                    <>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>sarah@example.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="relative p-4 rounded-lg bg-muted/50 border border-dashed">
                      <div className="blur-sm">
                        <div className="flex items-center gap-2 text-sm mb-1">
                          <Mail className="h-4 w-4" />
                          <span>email@hidden.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4" />
                          <span>+1 (XXX) XXX-XXXX</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Lock className="h-5 w-5 text-primary mb-1" />
                        <p className="text-xs text-center font-medium">
                          Upgrade to Pro
                        </p>
                      </div>
                    </div>
                  )}

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/pricing">
                      {isPremium ? "Manage Subscription" : "Unlock Direct Contact"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y bg-card py-4">
          <div className="container">
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">
                  {provider.completedJobs}
                </p>
                <p className="text-sm text-muted-foreground">Jobs Completed</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">
                  {provider.memberSince}
                </p>
                <p className="text-sm text-muted-foreground">Member Since</p>
              </div>
              <Separator orientation="vertical" className="h-12 hidden md:block" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">
                  {provider.responseTime}
                </p>
                <p className="text-sm text-muted-foreground">Avg. Response</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="about" className="space-y-8">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* About Tab */}
              <TabsContent value="about" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {provider.bio}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {provider.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Services Tab */}
              <TabsContent value="services">
                {providerServices.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {providerServices.map((service) => (
                      <ServiceCard key={service.id} {...service} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        No services listed yet.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio">
                {provider.portfolio.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {provider.portfolio.map((item) => (
                      <Card key={item.id} className="overflow-hidden group cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">{item.title}</h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        No portfolio items yet.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Client Reviews</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {provider.reviewCount} reviews • {provider.rating} average
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {providerReviews.length > 0 ? (
                      <div className="space-y-6">
                        {providerReviews.map((review) => (
                          <ReviewCard key={review.id} {...review} />
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center">
                        <Star className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">No reviews yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
