"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Director",
    company: "TechFlow Solutions",
    content:
      "Invento didn't just solve our problems - it transformed our entire business. We went from chaos to complete control in just 2 weeks!",
    rating: 5,
    image: "👩‍💼",
    metrics: "75% fewer stockouts",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO & Founder",
    company: "Retail Express",
    content:
      "The ROI was immediate. We recovered our investment in the first month and haven't looked back since. This is game-changing software.",
    rating: 5,
    image: "👨‍💻",
    metrics: "$50K saved monthly",
  },
  {
    name: "Emily Johnson",
    role: "Supply Chain Manager",
    company: "Global Logistics Inc.",
    content:
      "Finally, software that actually makes my job easier! The intuitive design means my whole team adopted it instantly.",
    rating: 5,
    image: "👩‍🚀",
    metrics: "15 hours saved per week",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 text-indigo-800 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full">
            <Heart className="mr-2 h-3 w-3" />
            Loved by Thousands
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Success Stories That{" "}
            <span className="text-indigo-600">Inspire</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Real businesses, real results. See how InventoryPro is changing
            lives every day 🌟
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl bg-white border-none">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-300 text-amber-300 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl lg:text-2xl font-medium mb-6 italic leading-relaxed">
                  &quot;{testimonials[currentTestimonial].content}&quot;
                </blockquote>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-green-100 text-green-600 border-green-200 rounded-full"
                >
                  {testimonials[currentTestimonial].metrics}
                </Badge>
                <div>
                  <p className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentTestimonial].role} at{" "}
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-indigo-500 animate-pulse"
                    : "bg-indigo-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
