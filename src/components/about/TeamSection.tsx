import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    avatar: "",
    bio: "Visionary leader with 15+ years in marketplace technology.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    avatar: "",
    bio: "Tech innovator passionate about building scalable platforms.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    avatar: "",
    bio: "Operations expert ensuring seamless service delivery.",
  },
  {
    name: "David Kim",
    role: "Head of Partnerships",
    avatar: "",
    bio: "Building strong relationships with providers nationwide.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The passionate people behind our mission to simplify service discovery
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-lg bg-[hsl(var(--red-accent))]/10 text-[hsl(var(--red-accent))]">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-[hsl(var(--red-accent))] text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
