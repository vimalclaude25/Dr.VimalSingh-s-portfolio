'use client'

import { motion } from 'framer-motion'
import { Bot, Cpu, Sparkles, BookOpen, Calendar, Lightbulb, ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { journalPublications, fdpsAndWorkshops, patents } from '@/lib/cv-data'

export default function AiLabPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  // Filter journal publications related to AI & Tech
  const techKeywords = ['ai', 'artificial intelligence', 'chatbot', 'neuroeducation', 'chatgpt', 'digital', 'technology', 'ict']
  const aiPubs = journalPublications.filter(pub => 
    techKeywords.some(keyword => pub.title.toLowerCase().includes(keyword))
  )

  // Filter AI & Tech related workshops/FDPs
  const aiFdps = fdpsAndWorkshops.filter(fdp => 
    fdp.course.toLowerCase().includes('ai') || 
    fdp.course.toLowerCase().includes('artificial intelligence') || 
    fdp.course.toLowerCase().includes('technology') ||
    fdp.course.toLowerCase().includes('moodle')
  )

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm font-semibold">
          <li className="inline-flex items-center">
            <Link href="/" className="text-muted-foreground hover:text-royal transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-navy dark:text-white">AI Lab</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          AI &amp; Innovation Lab
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Pioneering AI-driven pedagogy, studying cognitive load, and designing prompt engineering templates to bridge technology and classroom intelligence.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Core Pillars / Focus Areas */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          {/* Research & Publications in AI */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border/50 pb-2">
              <BookOpen className="h-5.5 w-5.5 text-royal" /> Dynamically Filtered AI Research ({aiPubs.length})
            </h2>
            <div className="space-y-4">
              {aiPubs.map((pub) => (
                <div
                  key={pub.id}
                  className="rounded-2xl border border-border/60 bg-muted/20 p-4 transition-all hover:border-royal/30 hover:shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-bold text-royal uppercase tracking-wider">{pub.year}</span>
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-bold ${
                      pub.type === 'Scopus Indexed'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-royal/10 text-royal'
                    }`}>
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-navy dark:text-white leading-snug line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{pub.journal}</p>
                  {(pub.link || pub.doi) && (
                    <a
                      href={pub.link || `https://doi.org/${pub.doi}`}
                      target={pub.link && !pub.link.startsWith('http') ? undefined : '_blank'}
                      rel={pub.link && !pub.link.startsWith('http') ? undefined : 'noopener noreferrer'}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-royal hover:underline"
                    >
                      Read Article <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/publications" className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline">
                View Full Publications Archive <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* AI Workshops & Training */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border/50 pb-2">
              <Cpu className="h-5.5 w-5.5 text-royal" /> AI Workshops &amp; Training Led
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {aiFdps.map((fdp) => (
                <div
                  key={fdp.id}
                  className="rounded-2xl border border-border/50 bg-card p-4 transition-all hover:border-royal/30"
                >
                  <div className="flex items-center gap-1.5 text-royal text-xs font-bold">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{fdp.from} - {fdp.to}</span>
                  </div>
                  <h4 className="mt-2 font-heading text-sm font-bold text-navy dark:text-white line-clamp-2 leading-snug">
                    {fdp.course}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">Organizer: {fdp.organizer}</p>
                  {fdp.sponsor && (
                    <span className="inline-block mt-2 rounded bg-gold/10 px-2 py-0.5 text-[9px] font-bold text-gold">
                      Sponsor: {fdp.sponsor}
                    </span>
                  )}
                  {fdp.link && (
                    <div className="mt-3">
                      <a
                        href={fdp.link}
                        target={fdp.link.startsWith('http') ? '_blank' : undefined}
                        rel={fdp.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-royal hover:underline"
                      >
                        View Certificate <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sidebar: Interactive Prompt Sandbox / AI Patents */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* AI Inventions / Patents */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border/50 pb-2">
              <Lightbulb className="h-5.5 w-5.5 text-gold" /> AI Patents
            </h2>
            <div className="space-y-4">
              {patents.filter(p => p.title.toLowerCase().includes('augmented reality') || p.title.toLowerCase().includes('digital')).map((patent, idx) => (
                <div key={idx} className="border-l-2 border-gold/30 pl-3 py-1">
                  <h3 className="font-bold text-navy dark:text-white text-sm">{patent.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Design No: {patent.designNo}</p>
                  <span className="inline-block mt-2 rounded bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                    {patent.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Prompting Sandbox */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-border/50 pb-2">
              <Sparkles className="h-5.5 w-5.5 text-gold animate-float-slow" />
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white">Prompt Sandbox</h2>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Explore high-performance prompting templates created by Dr. Vimal Singh for educational assessment design and research methodology analysis.
            </p>
            <div className="space-y-3 text-xs">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                <span className="font-bold text-royal">1. Assessment Prompt Template:</span>
                <p className="italic text-muted-foreground mt-1 bg-card p-2 rounded border border-border/40 font-mono text-[10px]">
                  "Act as a cognitive psychologist. Review this test syllabus and generate a 10-item MCQ block mapped to Bloom's Revised Taxonomy..."
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                <span className="font-bold text-royal">2. Bibliometric Query Builder:</span>
                <p className="italic text-muted-foreground mt-1 bg-card p-2 rounded border border-border/40 font-mono text-[10px]">
                  "Extract terms related to AI systems in secondary school environments and format a clean Scopus search syntax with Boolean parameters..."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

