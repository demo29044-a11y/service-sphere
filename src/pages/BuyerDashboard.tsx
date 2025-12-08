import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ShoppingBag,
  Heart,
  MessageSquare,
  Star,
  Clock,
  ArrowRight,
  Crown,
  TrendingUp,
} from "lucide-react";
import { services, providers } from "@/data/mockData";

const recentOrders = [
  {
    id: "1",
    service: "Website Development",
    provider: providers[0],
    status: "in_progress",
    date: "Dec 5, 2024",
    amount: 2500,
  },
  {
    id: "2",
    service: "Logo Design",
    provider: providers[1],
    status: "completed",
    date: "Nov 28, 2024",
    amount: 800,
  },
  {
    id: "3",
    service: "SEO Audit",
    provider: providers[2],
    status: "pending",
    date: "Dec 3, 2024",
    amount: 500,
  },
];

const statusColors: Record<string, string> = {
  pending: "bg-warning text-warning-foreground",
  in_progress: "bg-primary text-primary-foreground",
  completed: "bg-success text-success-foreground",
  cancelled: "bg-destructive text-destructive-foreground",
};

const statusLabels: Record<string, string> = {
  pending: "Pending",
  in_progress: "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

export default function BuyerDashboard() {
  return (
    <DashboardLayout type="buyer">
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Welcome back, John!
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your orders
            </p>
          </div>
          <Button asChild>
            <Link to="/services">
              Browse Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Upgrade Banner */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Crown className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Upgrade to Pro</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Get direct contact with providers and priority support
                </p>
              </div>
            </div>
            <Button variant="secondary" asChild>
              <Link to="/pricing">View Plans</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Active Orders</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Favorites</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Unread Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest service requests</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/buyer/orders">View all</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={order.provider.avatar}
                          alt={order.provider.name}
                        />
                        <AvatarFallback>{order.provider.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{order.service}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.provider.name} • {order.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={statusColors[order.status]}>
                        {statusLabels[order.status]}
                      </Badge>
                      <p className="font-semibold">${order.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Favorite Providers */}
          <Card>
            <CardHeader>
              <CardTitle>Favorite Providers</CardTitle>
              <CardDescription>Quick access to your saved pros</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {providers.slice(0, 4).map((provider) => (
                  <Link
                    key={provider.id}
                    to={`/provider/${provider.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Avatar>
                      <AvatarImage src={provider.avatar} alt={provider.name} />
                      <AvatarFallback>{provider.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{provider.name}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span>{provider.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Services */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Based on your browsing history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.slice(0, 4).map((service) => (
                <Link
                  key={service.id}
                  to={`/service/${service.id}`}
                  className="group"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-muted-foreground">
                      {service.provider.name}
                    </span>
                    <span className="font-semibold">${service.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
