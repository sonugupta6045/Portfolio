import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Toaster } from "sonner"

import CursorGlow from "@/components/cursor-glow"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://sonugupta.me"),
  title: "Sonu Gupta | Portfolio",
  description: "Software Developer specializing in Full-Stack Development, AI Automation, and Cybersecurity. Explore my professional projects like NetScan and Medi Care.",
  keywords: ["Software Developer", "Sonu Gupta", "Full-Stack", "Spring Boot", "Next.js", "Java", "Cybersecurity", "NetScan", "Medi Care"],
  authors: [{ name: "Sonu Gupta" }],
  creator: "Sonu Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sonugupta.me",
    title: "Sonu Gupta | Software Developer Portfolio",
    description: "Building scalable web architectures and AI-powered security solutions.",
    siteName: "Sonu Gupta Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sonu Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonu Gupta | Software Developer",
    description: "Full-Stack Developer & Cybersecurity Enthusiast.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} liquid-gradient min-h-screen text-foreground relative selection:bg-primary/20`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
          <CursorGlow />
          <Navbar />
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
