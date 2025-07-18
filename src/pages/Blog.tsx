import { useState } from "react";
import { Search, Filter, Calendar, User, ArrowRight, TrendingUp, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "All", count: 127 },
  { name: "React", count: 24 },
  { name: "JavaScript", count: 31 },
  { name: "Node.js", count: 18 },
  { name: "Python", count: 15 },
  { name: "DevOps", count: 12 },
  { name: "Career", count: 20 },
  { name: "AI/ML", count: 7 }
];

const featuredPost = {
  id: 1,
  title: "The Future of React: What's Coming in 2025",
  excerpt: "Explore the upcoming features and improvements planned for React in 2025, including concurrent features, server components evolution, and performance optimizations that will shape the future of web development.",
  author: "Sarah Chen",
  authorRole: "Senior React Engineer",
  publishDate: "December 10, 2024",
  readTime: "8 min read",
  category: "React",
  tags: ["React", "JavaScript", "Frontend"],
  imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  featured: true
};

const blogPosts = [
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for enterprise-level applications.",
    author: "Mike Johnson",
    authorRole: "Backend Architect",
    publishDate: "December 8, 2024",
    readTime: "12 min read",
    category: "Node.js",
    tags: ["Node.js", "Microservices", "Architecture"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 3,
    title: "Python for Data Science: Advanced Techniques",
    excerpt: "Dive deep into advanced Python techniques for data analysis, machine learning, and statistical modeling with practical examples.",
    author: "Dr. Lisa Wang",
    authorRole: "Data Scientist",
    publishDate: "December 5, 2024",
    readTime: "15 min read",
    category: "Python",
    tags: ["Python", "Data Science", "Machine Learning"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 4,
    title: "DevOps Best Practices for 2024",
    excerpt: "Comprehensive guide to modern DevOps practices including CI/CD pipelines, infrastructure as code, and monitoring strategies.",
    author: "Alex Rodriguez",
    authorRole: "DevOps Engineer",
    publishDate: "December 3, 2024",
    readTime: "10 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 5,
    title: "Transitioning from Junior to Senior Developer",
    excerpt: "A roadmap for career advancement in software development, covering technical skills, leadership, and professional growth strategies.",
    author: "Emma Davis",
    authorRole: "Engineering Manager",
    publishDate: "November 30, 2024",
    readTime: "7 min read",
    category: "Career",
    tags: ["Career", "Leadership", "Professional Growth"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 6,
    title: "AI-Powered Code Review: Tools and Techniques",
    excerpt: "Explore how artificial intelligence is transforming code review processes and improving code quality in modern development teams.",
    author: "David Kim",
    authorRole: "AI Research Engineer",
    publishDate: "November 28, 2024",
    readTime: "11 min read",
    category: "AI/ML",
    tags: ["AI", "Code Review", "Development Tools"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Developer <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from the world of software development
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          <Card className="glass-strong hover-lift border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredPost.imageUrl})` }}
              />
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="gradient-primary text-white">Featured</Badge>
                  <Badge variant="outline" className="glass">
                    {featuredPost.category}
                  </Badge>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 hover:text-primary transition-smooth cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{featuredPost.author}</div>
                      <div className="text-sm text-muted-foreground">{featuredPost.authorRole}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.publishDate}
                    </div>
                    <div className="flex items-center mt-1">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <Button className="glow-primary">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card className="glass-strong p-6 border-white/10">
              <h3 className="font-semibold mb-4">Search Articles</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass"
                />
              </div>
            </Card>

            {/* Categories */}
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

            {/* Popular Tags */}
            <Card className="glass-strong p-6 border-white/10">
              <h3 className="font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Python", "DevOps", "AI", "Node.js", "TypeScript", "AWS"].map((tag) => (
                  <Badge key={tag} variant="outline" className="glass cursor-pointer hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="glass-strong p-6 border-white/10">
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get weekly updates on the latest articles and tech trends.
              </p>
              <div className="space-y-3">
                <Input placeholder="Enter your email" className="glass" />
                <Button className="w-full glow-primary">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <Button variant="outline" className="glass">
                <Filter className="w-4 h-4 mr-2" />
                Sort by
              </Button>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="glass-strong hover-lift border-white/10 overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="glass">
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 hover:text-primary transition-smooth cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.publishDate}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{post.author}</div>
                          <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="glass">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}