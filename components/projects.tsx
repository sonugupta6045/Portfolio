"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "News Hub",
    description:
      "A website that aggregates the latest news articles and blogs from various sources into one location for easy access. The website categorizes news to help users navigate and personalize their experience.",
    image: "newhub.png?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript", "Web Scraping"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Medi Care",
    description:
      "A platform allowing users to easily book ambulance services through a user-friendly interface. Features real-time GPS tracking powered by Google Maps API and Web Sockets to monitor ambulance location in real-time.",
    image: "medicare.png?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Django", "Google Maps API"],
    link: "https://github.com/sonugupta6045/MediCare.git",
    github: "https://github.com/sonugupta6045/MediCare.git",
  },
  {
    id: 3,
    title: "Automated Recruitment System",
    description:
      "An automated recruitment module within a Human Resource Management System (HRMS) tailored to meet the recruitment needs of tech startups, automating key stages such as candidate shortlisting and interview scheduling.",
    image: "hrtechnext.png?height=800&width=1200",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
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
    <section id="projects" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
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
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
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
