"use client"

import React from "react"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Server,
  Cloud,
  Database,
  Code,
  Award,
  FileCode,
  Cpu,
  Palette,
  Brain,
  Menu,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

// Import the ThemeToggle component
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const observerRefs = useRef<IntersectionObserver[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent hydration mismatch and set initial theme
  useEffect(() => {
    setMounted(true)

    // Add event listener to update body class when theme changes
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark")
      document.body.classList.toggle("dark-theme", isDark)
      document.body.classList.toggle("light-theme", !isDark)
    }

    handleThemeChange() // Initial call

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  // Setup intersection observers for each section
  useEffect(() => {
    const sections = ["about", "skills", "certifications", "achievements", "contact"]

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section)
          }
        },
        { threshold: 0.3 },
      )

      const element = document.getElementById(section)
      if (element) observer.observe(element)
      observerRefs.current.push(observer)
    })

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [mounted])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Force update local storage for immediate effect
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme)
    }
  }

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
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

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-[40%] left-[30%] w-[200px] h-[200px] rounded-full bg-primary/5 blur-[120px]"
          style={{
            animation: "float 18s ease-in-out infinite 2s",
          }}
        ></motion.div>

        {/* Grid lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
        ></motion.div>

        {/* Code-like elements */}
        <div className="hidden lg:block absolute top-[15%] right-[15%] text-primary/10 text-xs">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.15, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="opacity-[0.15]"
            >
              {`const deploy${i} = async () => {`}
              <br />
              {`  await infrastructure.provision();`}
              <br />
              {`  return pipeline.execute();`}
              <br />
              {`};`}
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block absolute bottom-[20%] left-[10%] text-primary/10 text-xs">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.15, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
              className="opacity-[0.15]"
            >
              {`function monitor${i}() {`}
              <br />
              {`  alerts.configure();`}
              <br />
              {`  metrics.collect();`}
              <br />
              {`};`}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-10 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-xl flex items-center gap-2"
          >
            <Terminal className="h-5 w-5 text-primary" />
            <span>dev@portfolio:~$</span>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["about", "skills", "certifications", "achievements", "contact"].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? "text-primary" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="h-0.5 bg-primary mt-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {mounted && <ThemeToggle />}
            <Button variant="outline" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-4 w-4 mr-2" />
              Menu
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-card border-l border-border z-50 md:hidden overflow-y-auto"
            >
              <div className="p-4 flex justify-between items-center border-b border-border">
                <div className="font-bold text-lg flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-primary" />
                  <span>Navigation</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="p-4 space-y-4">
                {["about", "skills", "certifications", "achievements", "contact"].map((section, index) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                      activeSection === section ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.a>
                ))}
              </nav>
              <div className="p-4 border-t border-border flex justify-between items-center">
                <ThemeToggle />
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/KanurkarPrateek"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-full hover:bg-muted"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://in.linkedin.com/in/prateek-kanurkar-239366249"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-full hover:bg-muted"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="mailto:prateekkanurkar@gmail.com"
                    aria-label="Email"
                    className="p-2 rounded-full hover:bg-muted"
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="container py-8 md:py-12 relative z-1">
        {/* Hero Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="py-8 md:py-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <motion.div variants={slideInFromLeft} className="md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/10">
              <Image src="/prateekk.jpg" alt="Profile" fill className="object-cover scale-125" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              <motion.div
                animate={{
                  boxShadow: ["0 0 0 0px rgba(var(--primary-rgb), 0.3)", "0 0 0 10px rgba(var(--primary-rgb), 0)"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  repeatType: "loop",
                }}
                className="absolute inset-0 rounded-full"
              />
            </div>
          </motion.div>
          <motion.div variants={slideInFromRight} className="md:w-2/3">
            <div className="mb-4 flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                className="h-3 w-3 rounded-full bg-red-500"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                className="h-3 w-3 rounded-full bg-yellow-500"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                className="h-3 w-3 rounded-full bg-green-500"
              ></motion.div>
            </div>
            <motion.div variants={fadeIn} className="p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-primary mb-2"
              >
                $ whoami
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-2">
                Prateek Kanurkar
              </motion.h1>
              <motion.h2 variants={fadeIn} className="text-xl md:text-2xl text-primary mb-2">
                DevSecOps Engineer
              </motion.h2>
              <motion.div variants={fadeIn} className="text-sm md:text-base text-muted-foreground italic font-medium mb-4 text-center w-full">
                10x Engineer in the Making | Learning Fast, Building Faster
              </motion.div>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-6 leading-relaxed">
                Dedicated and meticulous aspiring DevSecOps Engineer with a strong grasp of cloud infrastructure, automation, and secure software development. Passionate about integrating security into all stages of the development lifecycle while enhancing system reliability and compliance. Excited to join a collaborative team, tackle real-world challenges, and advance in the DevSecOps domain.
              </motion.p>
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap gap-4 justify-center">
                <motion.div variants={scaleIn}>
                  <Button className="group relative overflow-hidden">
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <FileCode className="mr-2 h-4 w-4 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">Download CV</span>
                  </Button>
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Button variant="outline" className="group relative overflow-hidden">
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <Terminal className="mr-2 h-4 w-4 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">Contact Me</span>
                  </Button>
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Button 
                    variant="secondary" 
                    className="group relative overflow-hidden"
                    onClick={() => window.location.href = '/building'}
                  >
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <Code className="mr-2 h-4 w-4 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">Currently Building</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Technical Skills</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Cloud className="h-5 w-5 text-primary" />,
                title: "Cloud Platforms",
                items: [
                  { name: "AWS", logo: "/logos/aws.svg" },
                  { name: "Google Cloud", logo: "/logos/gcp.svg" },
                  { name: "DigitalOcean", logo: "/logos/digitalocean.svg" },
                ],
              },
              {
                icon: <Server className="h-5 w-5 text-primary" />,
                title: "Infrastructure as Code",
                items: [
                  { name: "Terraform", logo: "/logos/terraform.svg" },
                  { name: "Ansible", logo: "/logos/ansible.svg" },
                  { name: "Chef", logo: "/logos/chef.svg" },
                ],
              },
              {
                icon: <Cpu className="h-5 w-5 text-primary" />,
                title: "Containerization",
                items: [
                  { name: "Docker", logo: "/logos/docker.svg" },
                  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
                  { name: "Helm", logo: "/logos/helm.svg" },
                  { name: "Podman", logo: "/logos/podman.svg" },
                  { name: "Kaniko", logo: "/logos/kaniko.png" },
                ],
              },
              {
                icon: <Code className="h-5 w-5 text-primary" />,
                title: "CI/CD",
                items: [
                  { name: "GitHub Actions", logo: "/logos/github-actions.svg" },
                  { name: "GitLab CI", logo: "/logos/gitlab.svg" },
                  { name: "ArgoCD", logo: "/logos/argocd.png" },
                ],
              },
              {
                icon: <Database className="h-5 w-5 text-primary" />,
                title: "Databases & Caching",
                items: [
                  { name: "MongoDB", logo: "/logos/mongodb.svg" },
                  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
                  { name: "Redis", logo: "/logos/redis.svg" },
                  { name: "Elasticsearch", logo: "/logos/elasticsearch.svg" },
                  { name: "DynamoDB", logo: "/logos/dynamodb.svg" },
                ],
              },
              {
                icon: <Terminal className="h-5 w-5 text-primary" />,
                title: "Scripting & Languages",
                items: [
                  { name: "Bash", logo: "/logos/bash.svg" },
                  { name: "Python", logo: "/logos/python.svg" },
                ],
              },
              {
                icon: <Palette className="h-5 w-5 text-primary" />,
                title: "Design & Visualization",
                items: [
                  { name: "Figma", logo: "/logos/figma.svg" },
                ],
              },
              {
                icon: <Brain className="h-5 w-5 text-primary" />,
                title: "GenAI & LLM",
                items: [
                  { name: "OpenAI", logo: "/logos/openai.svg" },
                  { name: "Hugging Face", logo: "/logos/huggingface.svg" },
                  { name: "LangChain", logo: "/logos/langchain.svg" },
                  { name: "Anthropic", logo: "/logos/anthropic.svg" },
                ],
              },
            ].map((skill, index) => (
              <motion.div key={skill.title} variants={scaleIn}>
                <SkillCard icon={skill.icon} title={skill.title} items={skill.items} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-8 p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-sm text-primary mb-2"
            >
              $ ls -la tools/
            </motion.div>
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
              {[
                "Prometheus",
                "Grafana",
                "ELK Stack",
                "Datadog",
                "New Relic",
                "Nginx",
                "HAProxy",
                "Istio",
                "Vault",
                "Consul",
                "Git",
                "Jira",
                "Confluence",
                "Slack",
                "PagerDuty",
                "AWS Lambda",
                "S3",
                "EC2",
                "RDS",
                "CloudFront",
                "GKE",
                "GCE",
                "Cloud Functions",
                "BigQuery",
                "Cloud Storage",
                "Azure AKS",
                "Azure Functions",
                "Cosmos DB",
                "Blob Storage",
                "Azure DevOps",
              ].map((tool, index) => (
                <motion.div key={tool} variants={scaleIn} custom={index}>
                  <Badge variant="outline" className="bg-background/50 hover:bg-primary/10 transition-colors">
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "GitLab Certified Git Associate",
                issuer: "GitLab",
                date: "2025",
                image: "/logos/gitlab.svg",
              },
              {
                title: "GitLab Certified Project Management Associate",
                issuer: "GitLab",
                date: "2025",
                image: "/logos/gitlab.svg",
              },
              {
                title: "GitLab Certified CI/CD Associate",
                issuer: "GitLab",
                date: "2025",
                image: "/logos/gitlab.svg",
              },
              {
                title: "GitLab Certified Security Specialist",
                issuer: "GitLab",
                date: "2025",
                image: "/logos/gitlab.svg",
              },
              {
                title: "GitLab Certified Migration Services Professional",
                issuer: "GitLab",
                date: "2025",
                image: "/logos/gitlab.svg",
              },
              {
                title: "GitLab Certified Implementation Services Professional",
                issuer: "GitLab",
                date: "2025",
                image: "/logos/gitlab.svg",
              },
              {
                title: "GitLab Certified Services Engineer Professional",
                issuer: "GitLab",
                date: "2025",
                image: "/logos/gitlab.svg",
              },
            ].map((cert, index) => (
              <motion.div key={cert.title} variants={scaleIn}>
                <CertificationCard title={cert.title} issuer={cert.issuer} date={cert.date} image={cert.image} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          id="achievements"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Achievements</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 */}
            <motion.div variants={fadeIn} className="col-span-1">
              <AchievementCard
                title="SIEMENS Tech For Sustainability Hackathon 2024, Munich (Germany)"
                organization="Winner of Challenge | 50 out of 300 Hackers around the world."
                description="2024"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="col-span-1">
              <AchievementCard
                title="GitLab Notable Contributor Award 2023"
                organization="From GitLab Community Relations Team"
                description="2023"
              />
            </motion.div>
            
            {/* Row 2 */}
            <motion.div variants={fadeIn} className="col-span-1">
              <AchievementCard
                title="Avinya Hackathon (Intercollege), JSPM RSCOE"
                organization="First Prize among 70 teams from diverse colleges."
                description="2024"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="col-span-1">
              <AchievementCard
                title="Innovation Foundation Techathon, AISSMS IOIT"
                organization="Finalist: Top 20 out of 187 teams nationwide."
                description="2024"
              />
            </motion.div>
            
            {/* Row 3 */}
            <motion.div variants={fadeIn} className="col-span-1">
              <AchievementCard
                title="BOSTON Scientific STEM Ideathon"
                organization="Second Prize winner | Among 16 Best Teams From 8 colleges from Pune."
                description="2023"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="col-span-1">
              <AchievementCard
                title="IMPACT 2023 Hackathon Winner"
                organization="Won First Prize | College Level Software Project Competition"
                description="2023"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="py-8 md:py-12 border-t border-border"
        >
          <motion.div variants={slideInFromLeft} className="flex items-center gap-2 mb-8">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Get In Touch</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={slideInFromLeft} className="space-y-6">
              <motion.div
                variants={fadeIn}
                className="p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm"
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-primary mb-2"
                >
                  $ cat contact_info.txt
                </motion.div>
                <motion.p variants={fadeIn} className="text-muted-foreground mb-4">
                  I'm currently available for DevOps consulting, architecture design, and implementation projects. Let's
                  discuss how I can help optimize your infrastructure and deployment processes.
                </motion.p>
                <motion.div variants={staggerContainer} className="flex flex-col space-y-3">
                  {[
                    {
                      href: "mailto:prateekkanurkar@gmail.com",
                      icon: <Mail size={18} className="group-hover:animate-pulse" />,
                      text: "prateekkanurkar@gmail.com",
                    },
                    {
                      href: "https://github.com",
                      icon: <Github size={18} className="group-hover:animate-pulse" />,
                      text: "github.com/KanurkarPrateek",
                    },
                    {
                      href: "https://linkedin.com",
                      icon: <Linkedin size={18} className="group-hover:animate-pulse" />,
                      text: "linkedin.com/in/prateek-kanurkar-239366249",
                    },
                  ].map((link, index) => (
                    <motion.a
                      key={link.href}
                      variants={fadeIn}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-primary hover:underline group"
                    >
                      {link.icon}
                      {link.text}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="p-4 rounded-lg bg-muted/50 border border-border backdrop-blur-sm"
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-primary mb-2"
                >
                  $ uptime
                </motion.div>
                <motion.div variants={fadeIn} className="text-sm">
                  <p>
                    System uptime: 365 days, 23 hours
                  </p>
                  <p>Response time: Usually within 24 hours</p>
                  <p>Location: Remote / Pune, India</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInFromRight}
              className="p-6 rounded-lg border border-border bg-muted/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  className="h-3 w-3 rounded-full bg-red-500"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  className="h-3 w-3 rounded-full bg-yellow-500"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  className="h-3 w-3 rounded-full bg-green-500"
                ></motion.div>
                <div className="text-xs text-muted-foreground">contact_form.sh</div>
              </div>
              <motion.form variants={staggerContainer} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={fadeIn} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                      <Terminal className="h-3 w-3" />
                      NAME
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn} className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
                      <Terminal className="h-3 w-3" />
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium flex items-center gap-1">
                    <Terminal className="h-3 w-3" />
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-1">
                    <Terminal className="h-3 w-3" />
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="I'd like to discuss a DevOps project..."
                  />
                </motion.div>
                <motion.div variants={scaleIn}>
                  <Button className="w-full group relative overflow-hidden">
                    <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <Terminal className="mr-2 h-4 w-4 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">./submit_form.sh</span>
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-t border-border py-6 md:py-8 bg-muted/30 relative z-1"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> echo "© 2025 Prateek Kanurkar. All rights
            reserved."
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/KanurkarPrateek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://in.linkedin.com/in/prateek-kanurkar-239366249"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:prateekkanurkar@gmail.com"
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: { name: string; logo: string }[]
}) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-border hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm min-h-[260px] h-[260px] w-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="p-2 border-b border-border bg-muted/30 flex items-center gap-2">
            {icon}
            <h3 className="font-semibold text-sm">{title}</h3>
          </div>
          <div className="p-3 flex-1 flex items-center justify-center">
            <div className="flex flex-wrap gap-3 justify-center w-full overflow-y-auto max-h-32">
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  className="flex flex-col items-center gap-1 group w-20 h-20 justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-md bg-white p-2 border border-border group-hover:border-primary/50 transition-colors">
                    <TechLogo name={item.name} logo={item.logo} />
                  </div>
                  <span className="text-[11px] text-muted-foreground group-hover:text-primary transition-colors text-center w-full truncate">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function TechLogo({ name, logo }: { name: string; logo: string }) {
  const [imgSrc, setImgSrc] = React.useState(logo || "/placeholder.svg");
  const [triedCDN, setTriedCDN] = React.useState(false);

  // Normalize skill name for SimpleIcons CDN (lowercase, no spaces, special chars removed)
  const getCDNUrl = (name: string) => {
    let normalized = name
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/\+/, "plus")
      .replace(/\./g, "")
      .replace(/[^a-z0-9-]/g, "");
    if (name === "GitHub Actions") normalized = "githubactions";
    if (name === "Google Cloud") normalized = "googlecloud";
    if (name === "YAML/JSON") normalized = "yaml";
    if (name === "ELK Stack") normalized = "elasticsearch";
    return `https://cdn.simpleicons.org/${normalized}`;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={imgSrc}
        alt={name}
        width={48}
        height={48}
        className="object-contain relative z-1"
        onError={() => {
          if (!triedCDN && logo && logo !== "/placeholder.svg") {
            setImgSrc(getCDNUrl(name));
            setTriedCDN(true);
          } else if (!triedCDN && (!logo || logo === "/placeholder.svg")) {
            setImgSrc(getCDNUrl(name));
            setTriedCDN(true);
          } else {
            setImgSrc("/placeholder.svg");
          }
        }}
        style={{ display: imgSrc === "/placeholder.svg" ? "none" : undefined }}
      />
    </div>
  );
}

function CertificationCard({
  title,
  issuer,
  date,
  image,
}: {
  title: string
  issuer: string
  date: string
  image: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-border hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm h-full">
        <CardContent className="p-0">
          <div className="p-4 border-b border-border bg-muted/30 flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden border border-border bg-background flex items-center justify-center">
              <Image
                src={image || "/placeholder.svg"}
                alt={issuer}
                width={40}
                height={40}
                className="object-contain"
                onError={(e) => {
                  // Show a fallback on error
                  ;(e.target as HTMLImageElement).style.display = "none"
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground">{issuer}</p>
            </div>
          </div>
          <div className="p-3 flex justify-between items-center">
            <Badge variant="outline" className="text-xs">
              {date}
            </Badge>
            <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
              Verify
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function AchievementCard({
  title,
  organization,
  description,
}: {
  title: string
  organization: string
  description: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-border hover:shadow-md hover:shadow-primary/5 transition-all backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-primary">{organization}</p>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

