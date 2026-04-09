"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Mail, Github, Linkedin } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-transparent" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
          suppressHydrationWarning
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
            suppressHydrationWarning
          >
            <motion.div
              className="aspect-square relative flex items-center justify-center min-h-[400px]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/3d-avatar-no-bg.png"
                alt="3D Avatar"
                fill
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            suppressHydrationWarning
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="mb-4 text-foreground/80">
              I'm a Full-Stack Software Developer with hands-on experience in building scalable web applications using
              React.js, Node.js, Express.js, Spring Boot, MySQL, and MongoDB. I have worked on ERP systems, recruitment
              automation platforms, and intelligent HRMS solutions that streamline hiring processes.
            </p>
            <p className="mb-4 text-foreground/80">
              With a Bachelor's degree in Information Technology (Honors in Data Science), I enjoy designing clean
              architectures, writing efficient backend logic, and building responsive user interfaces. I am passionate
              about automation, AI-powered systems, and solving real-world business problems through technology.
            </p>
            <p className="mb-6 text-foreground/80">
              I am always eager to learn, collaborate, and contribute to impactful software products.
            </p>



            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Full-Stack Development</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Leadership</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem Solving</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AI & Automation</span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="mailto:sonugupta6045@gmail.com"
                className="glass flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all text-sm font-medium border-none"
              >
                <Mail size={15} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/sonu-gupta-77668a245"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all text-sm font-medium border-none"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/sonugupta6045"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all text-sm font-medium border-none"
              >
                <Github size={15} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}