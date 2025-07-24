import { useState } from "react";
import { Calendar, MapPin, Users, Clock, Star, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    id: 1,
    title: "AI GET TOGETHER",
    description: "This event aims to foster collaboration, networking, and knowledge sharing between experienced AI practitioners and aspiring learners",
    date: "July 26, 2025",
    time: "11:00 AM",
    location: "AL Mustafa House, Muslim Town Morr, Lahore",
    
    // attendees: 127,
    // maxAttendees: 200,
    category: "Workshop",
    level: "Advanced",
    // speaker: "Sarah Chen",
    // speakerTitle: "Senior React Engineer at Meta",
    price: "Free",
    featured: true
  },
  
];

const pastEvents = [
  {
    id: 5,
    title: "Resume Building Session",
    description: "Comprehensive session on how to make a market compatible resume.",
    date: "February 23, 2025",
    // attendees: 189,
    rating: 4.8,
    category: "Workshop",
    // highlights: ["Framework comparison", "Live coding", "Q&A session"]
  },
  {
    id: 5,
    title: "Job Preparation Session for Fresh Graduates",
    description: "A session to equip fresh graduates with key job-hunting skills like resume writing, interview prep, and communication tips.",
    date: "February 09, 2025",
    // attendees: 189,
    rating: 4.8,
    category: "workshop",
    // highlights: ["Framework comparison", "Live coding", "Q&A session"]
  },
 
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
                  className={`glass-strong  hover-lift border-white/10 overflow-hidden ${
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
                        {event?.attendees} / {event?.maxAttendees} attending
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="font-medium text-sm">{event?.speaker}</div>
                          <div className="text-xs text-muted-foreground">{event?.speakerTitle}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{event.price}</div>
                        </div>
                      </div>
                      
                      <div className="w-full lex gap-3">
                        <Link to={"https://forms.gle/BZSuiyqkQeoJyxATA"}>
                        <Button 
                          className="w-full glow-primary" 
                        >
                           Join Now
                        </Button>
                        </Link>
                        {/* <Button variant="outline" className="glass">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button> */}
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
                <Card key={event.id} className="glass-strong  hover-lift border-white/10">
                  <div className="p-6 flex flex-col justify-between h-full">
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
                        {event?.attendees} attended
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(event.rating)}
                      <span className="text-sm text-muted-foreground ml-2">
                        {event.rating}/5
                      </span>
                    </div>

                    {/* <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-medium mb-2">Event Highlights:</h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div> */}

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