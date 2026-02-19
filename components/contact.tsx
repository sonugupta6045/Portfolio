"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const SERVICE_ID = "service_uqct6nl"
const TEMPLATE_ID = "template_z0jb9d6"
const PUBLIC_KEY = "DPqEsotyIbUFMG-4u"

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      toast({
        title: "Message sent! ✅",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      formRef.current.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      toast({
        title: "Failed to send ❌",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:sonugupta6045@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    sonugupta6045@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+919284317340" className="text-foreground/70 hover:text-primary transition-colors">
                    +91 9284317340
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-foreground/70">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/sonugupta6045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/gupta-sonu-77668a245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  {/* name must match EmailJS template variable {{name}} */}
                  <Input id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  {/* name must match EmailJS template variable {{email}} */}
                  <Input id="email" name="email" type="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                {/* name must match EmailJS template variable {{subject}} */}
                <Input id="subject" name="subject" placeholder="Subject" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                {/* name must match EmailJS template variable {{message}} */}
                <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}