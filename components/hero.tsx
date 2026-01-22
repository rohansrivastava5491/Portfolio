"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import TypeWriter from "@/components/typewriter"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-accent">Welcome to my portfolio</h2>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight text-balance-custom">
                I Build <span className="text-accent">Digital</span> Experiences
              </h1>
            </div>

            <div className="text-lg text-muted-foreground">
              <TypeWriter
                text="A passionate full-stack developer crafting beautiful, functional web applications with modern technologies and neo-brutalist design principles."
                speed={30}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="neo-border font-bold text-base bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
              >
                See Resume
              </Button>
              <Button variant="outline" size="lg" className="neo-border font-bold text-base bg-transparent">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`hidden lg:block ${isVisible ? "animate-in-right" : "opacity-0"}`}>
            <div className="neo-card space-y-4 bg-secondary">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold">~/portfolio</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-accent neo-border"></div>
                  <div className="w-3 h-3 bg-accent neo-border"></div>
                  <div className="w-3 h-3 bg-accent neo-border"></div>
                </div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-accent">&gt; npm run dev</p>
                <p className="text-muted-foreground">Building amazing web experiences...</p>
                <p className="text-accent">&gt; Ready to create something great?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
