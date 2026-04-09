"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "NetScan",
    description:
      "An advanced network security scanner for device discovery, port analysis, and vulnerability assessment. Cross-references live services against the NVD database for known CVEs and generates professional security reports.",
    image: "/netscan.png",
    technologies: ["Python", "Flask", "Nmap", "Scapy", "SQLite"],
    link: "https://github.com/sonugupta6045/NetScan.git",
    github: "https://github.com/sonugupta6045/NetScan.git",
  },
  {
    id: 2,
    title: "Medi Care",
    description:
      "A real-time ambulance booking platform featuring responsive UI for booking, real-time tracking, and status updates. Implemented live GPS tracking using WebSockets and Google Maps API, with Spring Boot handling secure workflows.",
    image: "medicare.png?height=400&width=600",
    technologies: ["React.js", "Django", "PostgreSQL", "WebSockets", "Google Maps API", "Spring Boot"],
    link: "https://github.com/sonugupta6045/MediCare.git",
    github: "https://github.com/sonugupta6045/MediCare.git",
  },
  {
    id: 3,
    title: "Automated Recruitment System",
    description:
      "An AI-powered HR platform built with Next.js and Tailwind CSS. Features Gemini API for resume parsing, Clerk for role-based access control, and automated interview scheduling via Google Calendar API.",
    image: "hrtechnext.png?height=800&width=1200",
    technologies: ["Next.js", "Tailwind CSS", "NeonDB", "Google Gemini API", "Clerk", "Google Calendar API"],
    link: "https://github.com/sonugupta6045/HrTechNest.git",
    github: "https://github.com/sonugupta6045/HrTechNest.git",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
          suppressHydrationWarning
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          suppressHydrationWarning
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} suppressHydrationWarning>
              <Card className="glass h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-none">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary/30 text-secondary-foreground rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-foreground/70">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
