"use client"

import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "Java"],
  },
  {
    name: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "ShadCN/UI",
      "Responsive Design",
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Firebase",
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Computer Vision",
      "NLP",
      "RAG",
      "LLM Fine-tuning",
    ],
  },
  {
    name: "Vector Databases & Pipelines",
    skills: [
      "FAISS",
      "Pinecone",
      "Weaviate",
      "Embeddings",
      "Model Deployment",
    ],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Cloud Firestore"],
  },
  {
    name: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Jupyter Notebook",
      "VS Code",
    ],
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
