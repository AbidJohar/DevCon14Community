import { useState } from "react";
import { MessageSquare, TrendingUp, Pin, Heart, Reply, MoreHorizontal, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "All", count: 1247 },
  { name: "React", count: 234 },
  { name: "Node.js", count: 187 },
  { name: "Python", count: 156 },
  { name: "DevOps", count: 89 },
  { name: "Career", count: 67 },
];

const discussions = [
  {
    id: 1,
    title: "Best practices for React performance optimization in 2024",
    excerpt: "I've been working on a large React application and noticed some performance issues. What are the current best practices for optimization?",
    author: "Sarah Chen",
    avatar: "SC",
    category: "React",
    replies: 24,
    likes: 156,
    timeAgo: "2 hours ago",
    isPinned: true,
    isHot: true
  },
  {
    id: 2,
    title: "Transitioning from Frontend to Full-Stack: Your experiences?",
    excerpt: "I've been a frontend developer for 3 years and want to expand my skills. What backend technologies should I focus on?",
    author: "Alex Rivera",
    avatar: "AR",
    category: "Career",
    replies: 18,
    likes: 89,
    timeAgo: "4 hours ago",
    isPinned: false,
    isHot: true
  },
  {
    id: 3,
    title: "Docker vs Kubernetes: When to use what?",
    excerpt: "I'm confused about when to use Docker containers versus Kubernetes orchestration. Can someone explain the key differences?",
    author: "Mike Johnson",
    avatar: "MJ",
    category: "DevOps",
    replies: 31,
    likes: 203,
    timeAgo: "6 hours ago",
    isPinned: false,
    isHot: true
  },
  {
    id: 4,
    title: "Building scalable APIs with Node.js and Express",
    excerpt: "Share your tips and tricks for building APIs that can handle millions of requests. What patterns do you use?",
    author: "Emma Davis",
    avatar: "ED",
    category: "Node.js",
    replies: 15,
    likes: 67,
    timeAgo: "8 hours ago",
    isPinned: false,
    isHot: false
  },
  {
    id: 5,
    title: "Python vs JavaScript for backend development",
    excerpt: "I'm starting a new project and can't decide between Python and JavaScript for the backend. What are your thoughts?",
    author: "David Kim",
    avatar: "DK",
    category: "Python",
    replies: 42,
    likes: 178,
    timeAgo: "12 hours ago",
    isPinned: false,
    isHot: false
  }
];

const events = [
  {
    title: "React Advanced Patterns Workshop",
    date: "Dec 15, 2024",
    attendees: 127
  },
  {
    title: "AI & Machine Learning Meetup",
    date: "Dec 18, 2024",
    attendees: 89
  },
  {
    title: "DevOps Best Practices Conference",
    date: "Dec 22, 2024",
    attendees: 245
  }
];

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community <span className="text-gradient">Dashboard is comming soon</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow developers, share knowledge, and grow together
          </p>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          // Sidebar 
          <div className="lg:col-span-1 space-y-6">
            // Quick Actions 
            <Card className="glass-strong p-6 border-white/10">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start glow-primary">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
                <Button variant="outline" className="w-full justify-start glass">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending Topics
                </Button>
              </div>
            </Card>

            // Categories 
            <Card className="glass-strong p-6 border-white/10">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-smooth flex items-center justify-between ${
                      selectedCategory === category.name
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>

            // Upcoming Events 
            <Card className="glass-strong p-6 border-white/10">
              <h3 className="font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <div className="font-medium text-sm">{event.title}</div>
                    <div className="text-xs text-muted-foreground">{event.date}</div>
                    <div className="text-xs text-primary">{event.attendees} attending</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          // Main Content 
          <div className="lg:col-span-3 space-y-6">
            // Search and Filters 
            <Card className="glass-strong p-6 border-white/10">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 glass"
                  />
                </div>
                <Button variant="outline" className="glass">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </Card>

            // Discussions 
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="glass-strong p-6 hover-lift border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{discussion.avatar}</span>
                      </div>
                      <div>
                        <div className="font-medium">{discussion.author}</div>
                        <div className="text-sm text-muted-foreground">{discussion.timeAgo}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {discussion.isPinned && (
                        <Pin className="w-4 h-4 text-accent" />
                      )}
                      {discussion.isHot && (
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                      )}
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-smooth cursor-pointer">
                      {discussion.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {discussion.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="glass">
                        {discussion.category}
                      </Badge>
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-red-500 transition-smooth">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{discussion.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-smooth">
                        <Reply className="w-4 h-4" />
                        <span className="text-sm">{discussion.replies} replies</span>
                      </button>
                    </div>
                    <Button variant="ghost" size="sm">
                      Join Discussion
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            // Load More 
            <div className="text-center">
              <Button variant="outline" size="lg" className="glass">
                Load More Discussions
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}