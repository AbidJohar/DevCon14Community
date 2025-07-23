import { Target, Users, Heart, Lightbulb, Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We believe in pushing the boundaries of technology and fostering innovative thinking in everything we do."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our community is at the heart of everything. We prioritize collaboration, knowledge sharing, and mutual growth."
  },
  {
    icon: Heart,
    title: "Inclusive Culture",
    description: "We celebrate diversity and create an environment where everyone feels welcome, valued, and heard."
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We promote lifelong learning and provide resources for developers to stay ahead in the rapidly evolving tech landscape."
  }
];

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "Former Google engineer with 15+ years in tech. Passionate about building communities that drive innovation.",
    avatar: "AT",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Maria Garcia",
    role: "Head of Community",
    bio: "Community builder extraordinaire. Expert in developer relations and creating engaging tech events.",
    avatar: "MG",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "David Chen",
    role: "CTO",
    bio: "Full-stack architect with expertise in scalable systems. Leads our technical vision and platform development.",
    avatar: "DC",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Head of Events",
    bio: "Event management specialist with a track record of organizing world-class tech conferences and workshops.",
    avatar: "SJ",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Raj Patel",
    role: "Head of Content",
    bio: "Technical writer and educator focused on making complex concepts accessible to developers at all levels.",
    avatar: "RP",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Emma Wilson",
    role: "Head of Partnerships",
    bio: "Strategic partnerships expert connecting DevCon14 with leading tech companies and educational institutions.",
    avatar: "EW",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-gradient">DevCon14</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're on a mission to build the world's most vibrant and supportive 
            developer community, where innovation thrives and careers flourish.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/20 blur-xl animate-pulse delay-1000" />
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                DevCon14 was born from a simple belief: the best innovations happen when brilliant minds 
                collaborate. We started as a small group of passionate developers who wanted to create 
                something meaningful in the tech community.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, we're proud to be a global platform that connects over 50,000 developers, 
                fostering an environment where knowledge flows freely, careers accelerate, and 
                breakthrough ideas become reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to democratize access to opportunities in tech, breaking down barriers 
                and building bridges that connect talent with innovation worldwide.
              </p>
            </div>
            <div className="glass-strong p-8 rounded-2xl border-white/10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">2019</div>
                  <div className="text-muted-foreground">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">50K+</div>
                  <div className="text-muted-foreground">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">1M+</div>
                  <div className="text-muted-foreground">Connections Made</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our community culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-strong p-8 hover-lift border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow-primary">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals working to build the future of developer communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-strong p-8 hover-lift border-white/10 group">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 glow-primary group-hover:glow-accent transition-smooth">
                    <span className="text-white font-bold text-xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.social.linkedin} 
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.twitter} 
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.github} 
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-strong p-12 rounded-3xl border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision. 
              Whether you're a developer, designer, or community enthusiast, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-block">
                <div className="glass-strong px-6 py-3 rounded-lg hover-lift transition-smooth">
                  View Open Positions
                </div>
              </a>
              <a href="#" className="inline-block">
                <div className="glass-strong px-6 py-3 rounded-lg hover-lift transition-smooth">
                  Contact Us
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}