"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{currentText}</span>
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16" suppressHydrationWarning>
      <div className="container mx-auto px-4 z-10 relative" suppressHydrationWarning>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
          suppressHydrationWarning
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-4 text-primary"
            suppressHydrationWarning
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
            suppressHydrationWarning
          >
            Sonu Gupta
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80 flex items-center gap-1"
            suppressHydrationWarning
          >
            <TypewriterText text="Software Developer" delay={100} />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[3px] h-[1em] bg-primary"
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg mb-8 max-w-2xl text-foreground/70"
            suppressHydrationWarning
          >
            I build responsive, user-friendly web applications with modern technologies. Passionate about creating
            seamless user experiences and solving complex problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
            suppressHydrationWarning
          >
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="glass rounded-full border-none hover:bg-white/20 transition-all font-medium">
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex gap-4"
            suppressHydrationWarning
          >
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/sonugupta6045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              suppressHydrationWarning
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/sonu-gupta-77668a245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              suppressHydrationWarning
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        suppressHydrationWarning
      >
        <Link href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2 text-foreground/70">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
