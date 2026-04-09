"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ShieldCheck, Calendar, Award } from "lucide-react"

const certificates = [
  {
    title: "Cybersecurity Course",
    organization: "Tata Strive Skill Development Program",
    date: "January 2026 - March 2026",
    description: "Comprehensive training in network security and ethical hacking.",
    details: [
      "Network Security: Firewalls, VPNs, IDS/IPS, secure protocols (TCP/IP, HTTPS)",
      "Ethical Hacking: Reconnaissance, vulnerability scanning, responsible disclosure",
      "OWASP Top 10: SQL injection, XSS, CSRF, broken authentication, IDOR"
    ],
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  }
]

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certificates" ref={ref} className="py-20 md:py-32 bg-transparent" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
          suppressHydrationWarning
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Professional certifications and specialized training programs I've completed to expand my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group border-none"
              suppressHydrationWarning
            >
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  {cert.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{cert.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
                      Completed
                    </span>
                  </div>
                  <p className="text-xl text-foreground font-medium mb-1">{cert.organization}</p>
                  <div className="flex items-center gap-2 text-foreground/60 mb-6 font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cert.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex gap-3 items-start p-3 rounded-xl bg-white/5 dark:bg-black/10 border border-white/10">
                        <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/80">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
