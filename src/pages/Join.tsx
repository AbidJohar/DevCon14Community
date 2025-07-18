import { useState } from "react";
import { Check, Star, Crown, Zap, Users, Calendar, MessageSquare, Code, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const membershipTiers = [
  {
    name: "Community",
    price: "Free",
    priceSubtext: "Forever",
    description: "Perfect for getting started in the developer community",
    icon: Users,
    features: [
      "Access to public discussions",
      "Join community events",
      "Basic networking features",
      "Weekly newsletter",
      "Community job board access",
      "Basic profile creation"
    ],
    limitations: [
      "Limited to 5 direct messages per month",
      "No priority event registration",
      "No access to premium content"
    ],
    buttonText: "Join for Free",
    popular: false,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Professional",
    price: "$19",
    priceSubtext: "/month",
    description: "For active developers looking to accelerate their career",
    icon: Code,
    features: [
      "Everything in Community",
      "Unlimited direct messaging",
      "Priority event registration",
      "Access to premium workshops",
      "Advanced networking tools",
      "Resume review services",
      "1-on-1 mentorship sessions (2/month)",
      "Exclusive career resources",
      "API access for integrations"
    ],
    limitations: [],
    buttonText: "Start Pro Trial",
    popular: true,
    color: "from-primary to-accent"
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSubtext: "Contact us",
    description: "For teams and organizations wanting to engage their developers",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Team management dashboard",
      "Bulk member registration",
      "Custom branding options",
      "Private team discussions",
      "Dedicated account manager",
      "Custom event hosting",
      "Analytics and reporting",
      "SSO integration",
      "Priority support"
    ],
    limitations: [],
    buttonText: "Contact Sales",
    popular: false,
    color: "from-purple-500 to-pink-500"
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with 50,000+ developers across 150+ countries"
  },
  {
    icon: Zap,
    title: "Career Growth",
    description: "Access exclusive opportunities and advance your career faster"
  },
  {
    icon: Shield,
    title: "Safe Community",
    description: "Moderated environment with strict code of conduct"
  },
  {
    icon: Star,
    title: "Expert Content",
    description: "Learn from industry leaders and cutting-edge resources"
  }
];

export default function Join() {
  const [selectedTier, setSelectedTier] = useState("Professional");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    experience: "",
    interests: [],
    newsletter: true,
    terms: false
  });

  const interests = [
    "Frontend Development",
    "Backend Development",
    "DevOps",
    "Mobile Development",
    "AI/Machine Learning",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing"
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.filter(i => i !== interest)
      }));
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-gradient">DevCon14</span> Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the membership that fits your goals and start connecting with 
            the world's most passionate developer community today.
          </p>
        </div>

        {/* Benefits Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="glass-strong p-6 hover-lift border-white/10 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 glow-primary">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Membership</h2>
            <p className="text-muted-foreground">Select the plan that best fits your career goals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Card 
                  key={index}
                  className={`glass-strong hover-lift border-white/10 relative overflow-hidden ${
                    tier.popular ? "ring-2 ring-primary/50 scale-105" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent px-4 py-2 text-center">
                      <span className="text-white font-medium text-sm">Most Popular</span>
                    </div>
                  )}
                  
                  <div className={`p-8 ${tier.popular ? "pt-16" : ""}`}>
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4 glow-primary`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="mb-2">
                        <span className="text-3xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground ml-1">{tier.priceSubtext}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{tier.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${tier.popular ? "glow-primary" : ""}`}
                      variant={tier.popular ? "default" : "outline"}
                      onClick={() => setSelectedTier(tier.name)}
                    >
                      {tier.buttonText}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Registration Form */}
        <section>
          <div className="max-w-2xl mx-auto">
            <Card className="glass-strong p-8 border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Complete Your Registration</h2>
                <p className="text-muted-foreground">
                  Selected plan: <span className="text-primary font-medium">{selectedTier}</span>
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="glass mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="glass mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="glass mt-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="glass mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Job Title</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      className="glass mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label>Experience Level</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                    {["Junior (0-2 years)", "Mid-level (3-5 years)", "Senior (5+ years)"].map((level) => (
                      <label key={level} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="experience"
                          value={level}
                          checked={formData.experience === level}
                          onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                          className="text-primary"
                        />
                        <span className="text-sm">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Areas of Interest</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {interests.map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <span className="text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <Checkbox
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                    />
                    <span className="text-sm">Subscribe to our weekly newsletter</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <Checkbox
                      checked={formData.terms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked as boolean }))}
                    />
                    <span className="text-sm">
                      I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full glow-primary"
                  disabled={!formData.terms}
                >
                  Complete Registration
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}