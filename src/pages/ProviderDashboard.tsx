import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  DollarSign,
  Users,
  Star,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle2,
  Plus,
  Eye,
} from "lucide-react";

const recentRequests = [
  {
    id: "1",
    title: "E-commerce Website",
    client: { name: "Mark Johnson", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
    budget: "$3,000",
    date: "2 hours ago",
    status: "new",
  },
  {
    id: "2",
    title: "Mobile App Design",
    client: { name: "Lisa Chen", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" },
    budget: "$2,500",
    date: "5 hours ago",
    status: "viewed",
  },
  {
    id: "3",
    title: "Brand Identity Package",
    client: { name: "David Park", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    budget: "$1,800",
    date: "1 day ago",
    status: "responded",
  },
];

const recentReviews = [
  {
    id: "1",
    client: "Amanda Wilson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Exceptional work! The website exceeded all my expectations.",
    date: "2 days ago",
  },
  {
    id: "2",
    client: "Robert Smith",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Great communication and delivered on time.",
    date: "1 week ago",
  },
];

export default function ProviderDashboard() {
  return (
    <DashboardLayout type="provider">
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Provider Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your services and client requests
            </p>
          </div>
          <Button asChild>
            <Link to="/dashboard/provider/services/new">
              <Plus className="mr-2 h-4 w-4" />
              Add New Service
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">$12,450</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-success">
                <TrendingUp className="h-4 w-4" />
                <span>+15% from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">28</p>
                  <p className="text-sm text-muted-foreground">Active Clients</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-muted-foreground">Avg. Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Eye className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Requests */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Requests</CardTitle>
                <CardDescription>New client inquiries</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard/provider/requests">View all</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={request.client.avatar}
                          alt={request.client.name}
                        />
                        <AvatarFallback>{request.client.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{request.title}</p>
                          {request.status === "new" && (
                            <Badge className="bg-success text-success-foreground text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {request.client.name} • {request.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">{request.budget}</p>
                      <Button size="sm">Respond</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Completion Rate */}
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
              <CardDescription>Your monthly stats</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Completion Rate</span>
                  <span className="font-semibold">98%</span>
                </div>
                <Progress value={98} />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Response Rate</span>
                  <span className="font-semibold">95%</span>
                </div>
                <Progress value={95} />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">On-Time Delivery</span>
                  <span className="font-semibold">92%</span>
                </div>
                <Progress value={92} />
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Avg. Response Time: 1.5 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reviews */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Reviews</CardTitle>
              <CardDescription>What clients are saying about you</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/provider/reviews">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {recentReviews.map((review) => (
                <div key={review.id} className="p-4 rounded-lg border">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.client} />
                      <AvatarFallback>{review.client[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{review.client}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-warning text-warning"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="ml-auto text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col" asChild>
                <Link to="/dashboard/provider/services">
                  <CheckCircle2 className="h-6 w-6 mb-2" />
                  <span>Manage Services</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col" asChild>
                <Link to="/dashboard/provider/earnings">
                  <DollarSign className="h-6 w-6 mb-2" />
                  <span>View Earnings</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col" asChild>
                <Link to="/dashboard/provider/analytics">
                  <TrendingUp className="h-6 w-6 mb-2" />
                  <span>Analytics</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col" asChild>
                <Link to="/dashboard/provider/settings">
                  <Users className="h-6 w-6 mb-2" />
                  <span>Edit Profile</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
