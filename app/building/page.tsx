"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BuildingPage() {
  const { theme } = useTheme()
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  // Blog posts removed as per user request

  // Sample projects data
  const projects = [
    {
      id: 101,
      title: "DockerShell: Web-based Docker CLI Tool",
      description: "A web-based shell interface for Docker, enabling users to run Docker commands securely from the browser. Built with Vercel, Docker, and Python.",
      technologies: ["Docker", "Python", "Vercel"],
      githubUrl: "https://github.com/prateekkanurkar/v0-dockershell-cli-tool", // Replace with actual repo if available
      demoUrl: "https://v0-dockershell-cli-tool.vercel.app/",
      image: "/DockerShell.png"
    },
    {
      id: 102,
      title: "Proter: Automated Code Review (AI)",
      description: "An AI-powered code review assistant that integrates with GitHub/GitLab CI, analyzes pull requests, and provides automated reviews using LLMs.",
      technologies: ["AI", "Code Review", "GitHub", "GitLab", "Vercel"],
      githubUrl: "https://github.com/prateekkanurkar/v0-proter-prateek-automated-code-review", // Replace with actual repo if available
      demoUrl: "https://v0-proter-prateek-automated-code-review.vercel.app/",
      image: "/Proter.png"
    },
    {
      id: 1,
      title: "SecureCI Pipeline Framework",
      description: "An open-source framework for building secure CI/CD pipelines with built-in security scanning, secret management, and compliance checks.",
      technologies: ["GitHub Actions", "Docker", "Python", "SAST/DAST"],
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "/placeholder.jpg"
    },


  ]

  return (
    <div className="min-h-screen bg-background font-mono relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"
          style={{
            animation: "float 15s ease-in-out infinite",
          }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] rounded-full bg-primary/10 blur-[80px]"
          style={{
            animation: "float 20s ease-in-out infinite reverse",
          }}
        ></motion.div>

        {/* Grid lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
        ></motion.div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-bold">Back to Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-10 text-center rounded-2xl bg-primary/10 shadow-lg border border-primary/30 px-6 py-8 max-w-2xl mx-auto relative"
        >
          <div className="flex items-center justify-center mb-2">
            <span className="inline-flex items-center justify-center rounded-full bg-primary text-background mr-3 shadow-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l4 4L21 7" /></svg>
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-0 border-l-4 border-primary pl-4 drop-shadow-lg">Currently Building</h1>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            A showcase of hands-on <span className="text-primary font-semibold">DevSecOps</span>, automation, and cloud engineering projects.
          </p>
        </motion.div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          </TabsList>
          
          {/* Projects Tab */}
          <TabsContent value="projects">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={fadeIn}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm border-border">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          

        </Tabs>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-t border-border py-6 md:py-8 bg-muted/30 relative z-1 mt-10"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Prateek Kanurkar. All rights reserved."
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
