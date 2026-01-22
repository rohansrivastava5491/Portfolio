"use client"

import { useState, useEffect } from "react"

interface TypeWriterProps {
  text: string
  speed?: number
}

export default function TypeWriter({ text, speed = 50 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <>{displayedText}</>
}
