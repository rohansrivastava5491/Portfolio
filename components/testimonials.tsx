"use client"

import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    quote: "Amazing work on our project. Delivered on time and exceeded expectations.",
    image: "/professional-avatar-1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupXYZ",
    quote: "The best developer we have worked with. Highly professional and talented.",
    image: "/professional-avatar-2.jpg",
  },
  {
    name: "Emily Roberts",
    role: "Design Lead",
    company: "DesignStudio",
    quote: "Perfect collaboration on design and development. Brought our vision to life beautifully.",
    image: "/professional-avatar-3.jpg",
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 text-balance-custom">
          What Clients <span className="text-accent">Say</span>
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${isInView ? "animate-in-up" : "opacity-0"}`}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="neo-card bg-background">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full neo-border"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
