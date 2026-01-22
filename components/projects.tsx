"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "AI Chat Platform",
    description: "Real-time chat application with AI-powered responses",
    category: "ai",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    image: "/ai-chat-platform-dashboard.jpg",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Full-featured dashboard for managing online store",
    category: "frontend",
    tags: ["React", "Tailwind", "Charts"],
    image: "/e-commerce-dashboard-interface.jpg",
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description: "Property listing and management system",
    category: "fullstack",
    tags: ["Next.js", "PostgreSQL", "Maps API"],
    image: "/real-estate-platform.jpg",
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    description: "Mobile-first app for tracking workouts and health metrics",
    category: "frontend",
    tags: ["React Native", "Firebase", "Charts"],
    image: "/fitness-tracker-app.jpg",
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "Image generation tool using machine learning",
    category: "ai",
    tags: ["Next.js", "Python", "ML Model"],
    image: "/ai-image-generator-interface.jpg",
  },
  {
    id: 6,
    title: "Analytics Platform",
    description: "Real-time analytics and reporting system",
    category: "fullstack",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/analytics-dashboard-visualization.jpg",
  },
]

const categories = ["all", "ai", "frontend", "fullstack"]

export default function Projects() {
  const [ref, isInView] = useInView()
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 text-balance-custom">
          Featured <span className="text-accent">Projects</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`neo-border font-bold capitalize ${
                activeCategory === cat ? "bg-foreground text-background" : "bg-background text-foreground"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isInView ? "animate-in-up" : "opacity-0"}`}
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="neo-card bg-card hover:shadow-lg transition-all duration-300">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 border-4 border-foreground"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold bg-muted px-2 py-1 neo-border">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full neo-border py-2 font-bold bg-accent text-accent-foreground hover:opacity-80 transition-opacity">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
