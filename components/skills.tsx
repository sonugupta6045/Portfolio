"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Layout, Server, Settings, Terminal } from "lucide-react"

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["HTML5", "CSS5", "JavaScript", "Java", "SQL", "Python"],
  },
  {
    category: "Libraries & Frameworks",
    icon: <Layout className="h-6 w-6" />,
    items: ["React JS", "Node JS", "Express JS"],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Software",
    icon: <Terminal className="h-6 w-6" />,
    items: ["GIT & GitHub", "VS Code"],
  },
  {
    category: "Soft Skills",
    icon: <Settings className="h-6 w-6" />,
    items: ["Communication", "Teamwork", "Planning", "Discipline", "Collaboration"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    items: ["RESTful APIs", "Server Management", "Authentication"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            I've developed a diverse set of skills throughout my education and projects. Here's an overview of my
            technical expertise and soft skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary">{skillGroup.icon}</div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: 0.3 + skillIndex * 0.1, duration: 0.3 }}
                    className="px-3 py-1 bg-background rounded-full text-sm border border-border"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Achievements</h3>
          <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-sm">
            <p className="text-foreground/80">
              Secured Top 10 rank in Datta Meghe college ISTE Hackathon for an inventory management with automation
              technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
