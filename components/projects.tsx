"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "NewsHub – Real-Time News Aggregator",
    description:
      "A real-time news aggregator that allows users to filter articles by topic, date, and relevance, save articles.", 
    category: "dev",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "ShadCN", "NewsAPI"],
    image: "/newshub-dashboard.jpg",
  },
  {
    id: 2,
    title: "Smart Travel Planner & Companion",
    description:
      "An AI-powered travel planning platform that generates personalized itineraries based on user preferences.",
    category: "dev",
    tags: ["React", "Firebase", "Gemini API", "Google Places API"],
    image: "/smart-travel-planner.jpg",
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description:
      "A content-based movie recommendation system using cosine similarity, achieving 85% precision and optimized data pipelines for faster recommendations.",
    category: "ai",
    tags: ["Python", "Flask", "Scikit-learn", "ML libraries"],
    image: "/movie-recommendation-system.jpg",
  },
  {
    id: 4,
    title: "Real-Time Facial Emotion Recognition System",
    description:
      "A real-time facial emotion recognition system using CNN models and OpenCV for live video streams. The model is exposed via a FastAPI endpoint and optimized for low-latency inference.",
    category: "ai",
    tags: ["Python", "OpenCV", "TensorFlow", "CNN", "FastAPI"],
    image: "/emotion-recognition-system.jpg",
  },
  {
    id: 5,
    title: "RAG-Based Customer Support Agent for E-commerce",
    description:
      "A Retrieval-Augmented Generation (RAG) chatbot that answers customer queries related to products, orders, and FAQs using vector search and embeddings for accurate, context-aware responses.",
    category: "ai",
    tags: ["Python", "LangChain", "FAISS", "Pinecone", "OpenAI API", "FastAPI"],
    image: "/rag-customer-support-agent.jpg",
  },
  {
    id: 6,
    title: "AI-Powered Event Poster Generation Tool",
    description:
      "A generative AI application that creates event posters from text prompts using Stable Diffusion and ControlNet, with predefined styles and also structured layouts.",
    category: "ai",
    tags: ["Python", "Stable Diffusion", "ControlNet", "Streamlit"],
    image: "/ai-poster-generator.jpg",
  },
]

const categories = ["all", "ai", "dev"]

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
