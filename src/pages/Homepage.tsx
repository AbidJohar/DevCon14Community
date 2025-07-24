import { ArrowRight, Users, Calendar, MessageSquare, Zap, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "../assets/bg.jpg";

const features = [
  {
    icon: Users,
    title: " Community",
    description: "Connect with 150+ developers ",
  },
  {
    icon: MessageSquare,
    title: "Expert Discussions",
    description: "Join technical discussions and share knowledge",
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description: "Access workshops, conferences, and networking events",
  },
  {
    icon: Code,
    title: "Code Reviews",
    description: "Get feedback on your projects from peers",
  },
  {
    icon: Zap,
    title: "Fast Networking",
    description: "Find collaborators and mentors instantly",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contribute to community-driven projects",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    quote:
      "DevCon14 helped me connect with amazing developers and land my dream job. The community is incredibly supportive and knowledgeable.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Full Stack Engineer",
    company: "StartupXYZ",
    quote:
      "The events and workshops here are top-notch. I've learned more in 6 months than I did in years of self-study.",
  },
  {
    name: "Pretan Mack",
    role: "DevOps Specialist",
    company: "CloudSystems",
    quote:
      "Amazing platform for staying current with tech trends. The discussions are always insightful and the networking opportunities are endless.",
  },
];

export default function Homepage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Welcome to <span className="text-gradient">DevCon14</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
             The premier community platform where IT professionals, developers, and tech enthusiasts connect, collaborate, and share knowledge to learn and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://forms.gle/BZSuiyqkQeoJyxATA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-6 glow-primary hover-lift">
                  Join the Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glass-strong hover-lift"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-primary/30 blur-lg animate-pulse delay-500" />
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">DevCon14:</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We connect developers with another, support their skill development and
              growth, and help them leverage their talents to create real value for society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-strong p-8 hover-lift border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow-primary">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="glass-strong p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">300+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="glass-strong p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">93+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div className="glass-strong p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">1500+</div>
              <div className="text-muted-foreground">Discussions</div>
            </div>
            <div className="glass-strong p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-gradient">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from developers who've transformed their careers with DevCon14
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-strong p-8 hover-lift border-white/10">
                <div className="mb-6">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-strong p-12 rounded-3xl border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Level Up</span> Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building their future with DevCon14.
              Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/BZSuiyqkQeoJyxATA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-6 glow-primary hover-lift">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 glass-strong hover-lift"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
