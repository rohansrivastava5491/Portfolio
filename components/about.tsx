"use client"
import { useInView } from "@/hooks/use-in-view"

export default function About() {
  const [ref, isInView] = useInView()

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isInView ? "animate-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-balance-custom">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="neo-card bg-background">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a full-stack developer with a passion for building clean, intuitive digital experiences. With 5+
                years of experience, I've worked with startups, agencies, and enterprises to bring their visions to
                life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React, Next.js, TypeScript, and modern web technologies. I believe in writing
                maintainable code and creating user-centered designs.
              </p>
            </div>

            <div className="neo-card bg-background">
              <h3 className="text-2xl font-bold mb-4">My Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-black text-accent">01</span>
                  <span>Understanding the user's needs and business goals</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-accent">02</span>
                  <span>Creating thoughtful designs with neo-brutalist aesthetics</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-accent">03</span>
                  <span>Developing performant, scalable solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
