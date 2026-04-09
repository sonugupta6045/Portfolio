"use client"

import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/hero"), { ssr: false })
const About = dynamic(() => import("@/components/about"), { ssr: false })
const Timeline = dynamic(() => import("@/components/timeline"), { ssr: false })
const Projects = dynamic(() => import("@/components/projects"), { ssr: false })
const Skills = dynamic(() => import("@/components/skills"), { ssr: false })
const Certificates = dynamic(() => import("@/components/certificates"), { ssr: false })
const Contact = dynamic(() => import("@/components/contact"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}
