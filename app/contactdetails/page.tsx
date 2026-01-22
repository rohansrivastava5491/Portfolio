"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ContactData {
  name: string
  email: string
  message: string
  timestamp: string
}

export default function ContactDetails() {
  const [contacts, setContacts] = useState<ContactData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/contact")
      if (!response.ok) {
        throw new Error("Failed to fetch contacts")
      }
      const data = await response.json()
      setContacts(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setContacts([])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">Loading contact details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="neo-border">
              ← Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black mb-4 text-balance-custom">
          Contact <span className="text-accent">Details</span>
        </h1>
        <p className="text-muted-foreground mb-12">
          All submitted contact messages are displayed below.
        </p>

        {error && (
          <div className="neo-card bg-red-100 text-red-800 p-6 mb-8">
            <p className="font-bold">Error: {error}</p>
          </div>
        )}

        {contacts.length === 0 ? (
          <div className="neo-card bg-secondary p-12 text-center">
            <p className="text-muted-foreground text-lg">
              No contact messages yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <div key={index} className="neo-card bg-secondary p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{contact.name}</h3>
                    <p className="text-sm text-accent">{contact.email}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(contact.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="border-t border-foreground/10 pt-4">
                  <p className="text-foreground whitespace-pre-wrap">
                    {contact.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
