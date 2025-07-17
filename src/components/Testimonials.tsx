import React from 'react'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajat",
      location: "Delhi",
      role: "Business Owner",
      content: "They simplified our messy Excel into live dashboards! The team transformed our chaotic data into beautiful, interactive reports that actually help us make decisions.",
      rating: 5,
      emoji: "✨",
      color: "text-cosmic-blue"
    },
    {
      name: "Anjali",
      location: "Mumbai",
      role: "Operations Manager",
      content: "Chatbot works great, 90% queries handled automatically! Our customer support load has dramatically reduced, and customers love the instant responses.",
      rating: 5,
      emoji: "💬",
      color: "text-cosmic-purple"
    },
    {
      name: "Rohit",
      location: "Jaipur",
      role: "Tech Lead",
      content: "Clean UI, solid data work, and fast delivery. The team delivered exactly what we needed with professional code quality and excellent documentation.",
      rating: 5,
      emoji: "🔍",
      color: "text-cosmic-pink"
    },
    {
      name: "Sneha",
      location: "Bengaluru",
      role: "Data Analyst",
      content: "Amazing Power BI dashboards that tell our data story beautifully. The visualizations are not just pretty - they're incredibly insightful and actionable.",
      rating: 5,
      emoji: "📈",
      color: "text-cosmic-teal"
    },
    {
      name: "Amit",
      location: "Delhi",
      role: "Startup Founder",
      content: "From concept to deployment in record time. They understood our vision perfectly and delivered an AI solution that actually drives business value.",
      rating: 5,
      emoji: "🚀",
      color: "text-cosmic-gold"
    },
    {
      name: "Priya",
      location: "Mumbai",
      role: "Marketing Director",
      content: "The Excel automation saved us 20 hours per week. What used to take our team days now happens automatically with beautiful reports delivered daily.",
      rating: 5,
      emoji: "⚡",
      color: "text-cosmic-blue"
    }
  ]

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Client Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform with data and AI
          </p>
          <div className="w-24 h-1 bg-cosmic-gradient rounded-full mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${testimonial.location}`}
              className="cosmic-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className={`${testimonial.color} text-3xl`}>
                  {testimonial.emoji}
                </div>
                <Quote className="w-6 h-6 text-muted-foreground/50" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cosmic-gold text-cosmic-gold" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold gradient-text">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${testimonial.color}`}>
                      📍 {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="cosmic-card">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">4</div>
                <div className="text-sm text-muted-foreground">Cities Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Ready to become our next success story?
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Join businesses across Delhi, Mumbai, Jaipur & Bengaluru
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}