"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [ref, isInView] = useInView()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? "animate-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-balance-custom">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Have a project in mind? Let's work together to bring it to life.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="neo-card bg-secondary">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent text-foreground placeholder-muted-foreground focus:outline-none font-bold"
                required
              />
            </div>

            <div className="neo-card bg-secondary">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent text-foreground placeholder-muted-foreground focus:outline-none font-bold"
                required
              />
            </div>

            <div className="neo-card bg-secondary">
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-transparent text-foreground placeholder-muted-foreground focus:outline-none font-bold resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full neo-border font-bold text-base bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
