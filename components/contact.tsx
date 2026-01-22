"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import Alert from "@/components/alert-popup"

export default function Contact() {
  const [ref, isInView] = useInView()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setAlert({ type: "success", message: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        const error = await response.json()
        setAlert({ type: "error", message: error.error || "Failed to send message" })
      }
    } catch (error) {
      setAlert({ type: "error", message: "An error occurred. Please try again." })
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
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
              disabled={loading}
              className="w-full neo-border font-bold text-base bg-foreground text-background hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
    </section>
  )
}
