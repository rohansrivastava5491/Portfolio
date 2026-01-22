"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export type AlertType = "success" | "error"

interface AlertProps {
  type: AlertType
  message: string
  duration?: number
  onClose?: () => void
}

export default function Alert({ type, message, duration = 3000, onClose }: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"
  const textColor = "text-white"

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} ${textColor} px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 neo-border animate-in-right z-50`}
    >
      <span className="font-bold">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false)
          onClose?.()
        }}
        className="hover:opacity-80"
      >
        <X size={20} />
      </button>
    </div>
  )
}
