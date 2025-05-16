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

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Implementing Zero Trust Security in DevOps Pipelines",
      excerpt: "Learn how to integrate security at every step of your CI/CD pipeline with practical examples and best practices.",
      date: "May 10, 2025",
      tags: ["Security", "DevOps", "CI/CD"],
      readTime: "8 min read",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Kubernetes Security Hardening: A Comprehensive Guide",
      excerpt: "Discover essential techniques to secure your Kubernetes clusters against common vulnerabilities and threats.",
      date: "April 22, 2025",
      tags: ["Kubernetes", "Security", "Cloud Native"],
      readTime: "12 min read",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Infrastructure as Code: Security Best Practices",
      excerpt: "Explore strategies to ensure your infrastructure code is secure, compliant, and resilient against attacks.",
      date: "March 15, 2025",
      tags: ["IaC", "Terraform", "Security"],
      readTime: "10 min read",
      image: "/placeholder.jpg"
    }
  ]

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "SecureCI Pipeline Framework",
      description: "An open-source framework for building secure CI/CD pipelines with built-in security scanning, secret management, and compliance checks.",
      technologies: ["GitHub Actions", "Docker", "Python", "SAST/DAST"],
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Cloud Security Posture Monitor",
      description: "A tool that continuously monitors cloud infrastructure for security misconfigurations and compliance violations, with automated remediation capabilities.",
      technologies: ["AWS", "Terraform", "Go", "React"],
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "Container Security Scanner",
      description: "A lightweight scanner that identifies vulnerabilities in container images and provides actionable remediation steps.",
      technologies: ["Docker", "Kubernetes", "Python", "CVE Database"],
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "/placeholder.jpg"
    }
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
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Currently Building</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects and blog posts about DevSecOps, cloud security, and modern infrastructure practices.
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
          
          {/* Blog Posts Tab */}
          <TabsContent value="blog">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {blogPosts.map((post) => (
                <motion.div key={post.id} variants={fadeIn}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm border-border">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline">
                        Read Article
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
