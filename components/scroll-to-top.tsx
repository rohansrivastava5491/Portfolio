"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 neo-border p-4 bg-accent text-accent-foreground hover:shadow-lg transition-all duration-300 z-40 font-bold"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    )
  )
}
