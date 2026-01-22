"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks. We discuss timelines thoroughly during the discovery phase.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer: "Yes! I provide ongoing maintenance and support packages. We can discuss what works best for your needs.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies like React, Next.js, TypeScript, Node.js, and various databases. I stay updated with latest industry trends.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "I have experience working with and improving existing projects. Whether it's refactoring, bug fixes, or adding features.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "Communication is key. I provide regular updates, schedule weekly check-ins, and maintain transparency throughout the project lifecycle.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "I offer flexible pricing based on project scope. Options include hourly rates, fixed-price projects, or retainer agreements.",
  },
]

export default function FAQ() {
  const [ref, isInView] = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 text-balance-custom">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>

        <div className={`space-y-3 transition-all duration-700 ${isInView ? "animate-in-up" : "opacity-0"}`}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="neo-card bg-secondary cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                  size={24}
                />
              </div>

              {openIndex === idx && (
                <div className="mt-4 pt-4 border-t-2 border-foreground">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
