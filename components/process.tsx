"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your needs, goals, and target audience",
  },
  {
    number: "02",
    title: "Planning",
    description: "Creating wireframes and technical specifications",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting neo-brutalist design with user experience at core",
  },
  {
    number: "04",
    title: "Development",
    description: "Building scalable, performant code with best practices",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous QA and optimization for all devices",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deployment and ongoing support and maintenance",
  },
]

export default function Process() {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 text-balance-custom">
          My <span className="text-accent">Process</span>
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isInView ? "animate-in-up" : "opacity-0"}`}
        >
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="neo-card bg-background hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl font-black text-accent mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
