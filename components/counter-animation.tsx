"use client"

import { useState, useEffect } from "react"

interface CounterAnimationProps {
  target: number
  duration?: number
}

export default function CounterAnimation({ target, duration = 2000 }: CounterAnimationProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(target * progress))
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [target, duration])

  return <>{count}</>
}
