import {
  BarChart3,
  Globe,
  Package,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeatureSection = () => {
  const features = [
    {
      icon: Package,
      title: "Smart Inventory Tracking",
      description:
        "Never lose track of your products again. Our intelligent system monitors every item in real-time.",
      benefit: "Reduce stockouts by 85%",
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description:
        "Turn your data into actionable insights with beautiful reports and forecasting.",
      benefit: "Boost efficiency by 60%",
    },
    {
      icon: Users,
      title: "Supplier Harmony",
      description:
        "Build stronger relationships with suppliers through seamless communication tools.",
      benefit: "Save 15+ hours weekly",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Your data is protected with enterprise-grade encryption and regular backups.",
      benefit: "99.99% uptime guaranteed",
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description:
        "Experience blazing-fast operations that keep your team productive all day long.",
      benefit: "3x faster than competitors",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description:
        "Manage inventory across multiple locations worldwide from one unified dashboard.",
      benefit: "Scale without limits",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up ">
          <Badge className="mb-4 text-indigo-800 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full">
            <Sparkles className="mr-2 h-3 w-3" />
            Everything You Need & More
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Built for <span className="text-indigo-600">Your Success</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Every feature is thoughtfully designed to make your life easier and
            your business more profitable 📈
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-gray-50 hover:shadow-2xl transition-all duration-500 animate-fade-up bg-gradient-to-br from-card to-muted/30 hover:scale-105 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-float">
                  <feature.icon className="h-8 w-8 text-indigo-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-indigo-600   transition-colors">
                  {feature.title}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="w-fit bg-green-100 text-green-600 border-green-200 rounded-full"
                >
                  {feature.benefit}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-500">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
