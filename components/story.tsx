"use client"

import { useInView } from "@/hooks/use-in-view"

const timeline = [
  {
    type: "education",
    year: "2019",
    title: "Bachelor's Degree in Computer Science",
    subtitle: "Tech University",
    description: "Graduated with honors. Focused on web development, algorithms, and software architecture.",
  },
  {
    type: "experience",
    year: "2020",
    title: "Junior Frontend Developer",
    subtitle: "StartUp Tech Co.",
    description: "Built responsive web applications using React and modern JavaScript. Collaborated with cross-functional teams.",
  },
  {
    type: "experience",
    year: "2021",
    title: "Full Stack Developer",
    subtitle: "Digital Solutions Inc.",
    description: "Developed end-to-end applications using Next.js, Node.js, and databases. Led frontend architecture decisions.",
  },
  {
    type: "experience",
    year: "2023",
    title: "Senior Developer",
    subtitle: "Innovation Labs",
    description: "Led team of 5 developers. Implemented AI-powered features and optimized application performance.",
  },
]

export default function Story() {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-16 text-balance-custom">
          My <span className="text-accent">Story</span>
        </h2>

        <div className={`transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/30" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative pl-32 transition-all duration-700 ${
                    isInView ? "animate-in-up opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {/* Timeline dot and label */}
                  <div className="absolute left-0 top-2 flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        item.type === "education"
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-purple-500 bg-purple-500/10 text-purple-500"
                      }`}
                    >
                      {item.type === "education" ? "🎓" : "💼"}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="neo-card bg-secondary hover:shadow-lg transition-all duration-300 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black">{item.title}</h3>
                      <span className="text-accent font-black text-xl">{item.year}</span>
                    </div>
                    <p className="text-accent font-bold mb-2">{item.subtitle}</p>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
