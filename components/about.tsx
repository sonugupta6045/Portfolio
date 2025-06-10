"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Sonu Gupta"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg"
            >
              <p className="font-bold">Technical Chief Executive</p>
              <p className="text-sm">SKDC, Mumbai</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="mb-4 text-foreground/80">
              I'm Sonu Gupta, a passionate Web Developer currently pursuing my Bachelor's in Engineering at St. Francis
              Institute of Technology, expected to graduate in 2025.
            </p>
            <p className="mb-4 text-foreground/80">
              I aim to work in an environment that encourages me to succeed and grow professionally, where I can utilize
              my skills and knowledge appropriately.
            </p>
            <p className="mb-6 text-foreground/80">
              As the Technical Chief Executive at SKDC, I led a team of four individuals, collaborated to enhance the
              committee's website, and developed an engaging game for the MOSAIC technical event.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-sm text-foreground/70">B.E. in Engineering</p>
                <p className="text-sm text-foreground/70">St. Francis Institute of Technology</p>
                <p className="text-sm text-foreground/70">CGPA: 7.51</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Interests</h4>
                <p className="text-sm text-foreground/70">Cricket, Carrom, Mobile games</p>
                <p className="text-sm text-foreground/70">Travelling, Badminton</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Leadership</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem Solving</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Project Management</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
