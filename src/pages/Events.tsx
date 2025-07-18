import { useState } from "react";
import { Calendar, MapPin, Users, Clock, Star, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const upcomingEvents = [
  {
    id: 1,
    title: "React Advanced Patterns Workshop",
    description: "Deep dive into advanced React patterns including render props, compound components, and custom hooks. Perfect for intermediate to advanced developers.",
    date: "December 15, 2024",
    time: "2:00 PM - 6:00 PM EST",
    location: "Virtual Event",
    attendees: 127,
    maxAttendees: 200,
    category: "Workshop",
    level: "Advanced",
    speaker: "Sarah Chen",
    speakerTitle: "Senior React Engineer at Meta",
    price: "Free",
    featured: true
  },
  {
    id: 2,
    title: "AI & Machine Learning Meetup",
    description: "Join us for discussions on the latest AI trends, practical ML implementations, and networking with AI professionals.",
    date: "December 18, 2024",
    time: "7:00 PM - 9:00 PM EST",
    location: "San Francisco, CA",
    attendees: 89,
    maxAttendees: 150,
    category: "Meetup",
    level: "All Levels",
    speaker: "Dr. Maria Rodriguez",
    speakerTitle: "AI Research Scientist at OpenAI",
    price: "Free",
    featured: false
  },
  {
    id: 3,
    title: "DevOps Best Practices Conference",
    description: "Two-day conference covering CI/CD, containerization, monitoring, and cloud-native architectures.",
    date: "December 22-23, 2024",
    time: "9:00 AM - 5:00 PM EST",
    location: "New York, NY",
    attendees: 245,
    maxAttendees: 500,
    category: "Conference",
    level: "Intermediate",
    speaker: "Multiple Speakers",
    speakerTitle: "Industry Experts",
    price: "$299",
    featured: true
  },
  {
    id: 4,
    title: "Frontend Performance Optimization",
    description: "Learn how to optimize your web applications for maximum performance using modern tools and techniques.",
    date: "January 8, 2025",
    time: "1:00 PM - 4:00 PM EST",
    location: "Virtual Event",
    attendees: 67,
    maxAttendees: 100,
    category: "Workshop",
    level: "Intermediate",
    speaker: "Alex Thompson",
    speakerTitle: "Performance Engineer at Google",
    price: "$49",
    featured: false
  }
];

const pastEvents = [
  {
    id: 5,
    title: "JavaScript Frameworks Comparison",
    description: "Comprehensive comparison of React, Vue, and Angular for modern web development.",
    date: "November 20, 2024",
    attendees: 189,
    rating: 4.8,
    category: "Workshop",
    highlights: ["Framework comparison", "Live coding", "Q&A session"]
  },
  {
    id: 6,
    title: "Cloud Architecture Masterclass",
    description: "Deep dive into AWS, Azure, and GCP architecture patterns and best practices.",
    date: "November 15, 2024",
    attendees: 156,
    rating: 4.9,
    category: "Masterclass",
    highlights: ["Cloud patterns", "Hands-on labs", "Expert panel"]
  },
  {
    id: 7,
    title: "Open Source Contribution Workshop",
    description: "Learn how to contribute to open source projects and build your developer profile.",
    date: "November 8, 2024",
    attendees: 203,
    rating: 4.7,
    category: "Workshop",
    highlights: ["Git workflows", "PR reviews", "Community building"]
  }
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-500 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Developer <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join workshops, conferences, and meetups to advance your skills and network with fellow developers
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="glass-strong">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </div>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <Button variant="outline" className="glass">
                <Filter className="w-4 h-4 mr-2" />
                Filter Events
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className={`glass-strong hover-lift border-white/10 overflow-hidden ${
                    event.featured ? "ring-2 ring-primary/30" : ""
                  }`}
                >
                  {event.featured && (
                    <div className="bg-gradient-to-r from-primary to-accent px-4 py-2">
                      <span className="text-white font-medium text-sm">Featured Event</span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="glass">
                            {event.category}
                          </Badge>
                          <Badge variant="secondary">
                            {event.level}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-smooth cursor-pointer">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {event.attendees} / {event.maxAttendees} attending
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="font-medium text-sm">{event.speaker}</div>
                          <div className="text-xs text-muted-foreground">{event.speakerTitle}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{event.price}</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 glow-primary" 
                          disabled={event.attendees >= event.maxAttendees}
                        >
                          {event.attendees >= event.maxAttendees ? "Event Full" : "RSVP Now"}
                        </Button>
                        <Button variant="outline" className="glass">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Past Events</h2>
              <Button variant="outline" className="glass">
                View All Archives
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="glass-strong hover-lift border-white/10">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="glass">
                        {event.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {event.attendees} attended
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(event.rating)}
                      <span className="text-sm text-muted-foreground ml-2">
                        {event.rating}/5
                      </span>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-medium mb-2">Event Highlights:</h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full mt-4 glass">
                      View Recording
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="glass-strong p-12 rounded-3xl border-white/10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to <span className="text-gradient">Host</span> an Event?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your expertise with the DevCon14 community. We're always looking for passionate speakers 
              and workshop facilitators to contribute to our events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-primary">
                Propose an Event
              </Button>
              <Button variant="outline" size="lg" className="glass">
                Speaker Guidelines
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}