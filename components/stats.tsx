"use client"
import { useInView } from "@/hooks/use-in-view"
import CounterAnimation from "@/components/counter-animation"

const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Open Source Contributions", value: 120, suffix: "+" },
]

export default function Stats() {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-y-4 border-foreground">
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${isInView ? "animate-in-up" : "opacity-0"}`}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="neo-card bg-secondary text-center">
              <div className="text-4xl sm:text-5xl font-black text-accent mb-2">
                {isInView && <CounterAnimation target={stat.value} />}
                {stat.suffix}
              </div>
              <p className="text-sm font-bold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
