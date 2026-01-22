"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["About", "Projects", "Skills", "Contact"]

  return (
    <header className="sticky top-0 z-50 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black neo-border px-4 py-2 bg-accent text-accent-foreground">DEV</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold hover:border-b-2 border-accent pb-1 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={toggleTheme} className="neo-border bg-transparent">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden neo-border p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t-4 border-foreground pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-sm font-bold hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
