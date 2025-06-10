"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href="#home" className="text-2xl font-bold">
              SG
            </Link>
            <p className="mt-2 text-sm text-foreground/70">Web Developer & Technical Chief Executive</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="#home" className="text-foreground/70 hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 md:mt-0"
          >
            <Link
              href="#home"
              className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors inline-block"
            >
              <ArrowUp className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Sonu Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
