"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
    }
  }, [mouseX, mouseY])

  if (!mounted || isMobile) return null

  return (
    <>
      {/* Large soft glow */}
      <motion.div
        className="cursor-glow"
        style={{
          x,
          y,
        }}
      />

      {/* Pulsing wave effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/20 pointer-events-none z-[9999]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Small sharp pointer trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary/80 pointer-events-none z-[10000]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
