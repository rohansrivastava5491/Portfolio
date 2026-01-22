"use client"

import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "Firebase", "GitHub"],
  },
  {
    name: "Design",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Animation", "Web Standards", "Accessibility"],
  },
]

export default function Skills() {
  const [ref, isInView] = useInView()

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 text-balance-custom">
          My <span className="text-accent">Skills</span>
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${isInView ? "animate-in-up" : "opacity-0"}`}
        >
          {skillCategories.map((category) => (
            <div key={category.name} className="neo-card bg-background">
              <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="neo-border px-4 py-2 bg-accent text-accent-foreground font-bold text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
