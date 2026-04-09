"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const timelineData = [
  {
    type: "experience",
    title: "Software Developer",
    organization: "N.R.G. Consultancy",
    location: "Vasai Virar, Maharashtra",
    date: "December 2025 - Present",
    description: "Developed ERP applications improving system efficiency by 25%. Built RESTful APIs with Spring Boot and PostgreSQL following SOLID principles.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    type: "education",
    title: "Bachelor of Engineering - IT",
    organization: "St. Francis Institute of Technology",
    location: "Mumbai, India",
    date: "2021 - 2025",
    description: "Honours in Data Science. CGPA: 7.53. Focused on scalable web architectures and data analysis.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    type: "education",
    title: "Higher Secondary Education (HSC)",
    organization: "B.N.N College",
    location: "Mumbai, India",
    date: "2019 - 2020",
    description: "Percentage: 72.15%. Foundations in science and mathematics.",
    icon: <GraduationCap className="h-5 w-5" />,
  }
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 bg-transparent" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
          suppressHydrationWarning
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            My professional journey and academic background that shaped my skills as a software developer.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block"></div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                suppressHydrationWarning
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-20 hidden md:block"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="glass p-6 rounded-2xl shadow-xl hover:shadow-primary/5 transition-all duration-300 border-none group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm text-foreground/80">{item.organization}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-foreground/60 mb-4">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.location}</span>
                    </div>
                    
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-[10%]"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
