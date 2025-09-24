"use client";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "ClearLedger transformed how we manage inventory. The precision and clarity it provides is exactly what our growing business needed.",
      author: "Sarah Chen",
      role: "Owner, Tech Supplies Co.",
      company: "Tech Supplies Co.",
    },
    {
      quote:
        "The real-time tracking and automated alerts have saved us countless hours and prevented stockouts completely.",
      author: "Marcus Rodriguez",
      role: "Operations Manager",
      company: "Urban Retail",
    },
    {
      quote:
        "Finally, an inventory system that small businesses can actually afford and use effectively. Game changer.",
      author: "Jennifer Park",
      role: "Founder",
      company: "Artisan Goods",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by growing businesses
          </h2>
          <p className="text-xl text-gray-500">
            See how Invento helps small businesses achieve precision in their
            operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <p className="text-gray-500 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-medium text-text-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-text-900">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
