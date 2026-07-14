'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Cpu, BookOpen, FileSpreadsheet, ArrowLeft, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { patents, specializations, researchProjects, consultancy } from '@/lib/cv-data'

export default function ResearchInnovationPage() {
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
              <span className="text-navy dark:text-white">Research & Innovation</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Research &amp; Innovation
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Exploring the frontiers of Artificial Intelligence in education, machine learning applications, and modern pedagogical policy development.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Specializations & Focus Areas */}
        <motion.section variants={itemVariants}>
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white border-b border-border pb-2">
            <Cpu className="h-6 w-6 text-royal" /> Specializations &amp; Focus Areas
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal/30 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy dark:text-white">{spec}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Active academic and experimental research stream.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Patents Section */}
        <motion.section variants={itemVariants}>
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white border-b border-border pb-2">
            <Lightbulb className="h-6 w-6 text-gold" /> Patents &amp; Inventions
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-royal/30 hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-gold/5 rounded-bl-full flex items-center justify-end p-4">
                  <Award className="h-8 w-8 text-gold opacity-30" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                      {patent.level} Patent
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Granted
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy dark:text-white leading-snug">
                    {patent.title}
                  </h3>
                  <div className="mt-4 text-sm space-y-2 text-muted-foreground">
                    <p><span className="font-bold text-navy dark:text-white">Design/Patent No:</span> <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{patent.designNo}</code></p>
                    <p><span className="font-bold text-navy dark:text-white">Role:</span> {patent.role}</p>
                    <p><span className="font-bold text-navy dark:text-white">Stream:</span> {patent.stream}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center border-t border-border pt-4 text-xs">
                  <span className="text-muted-foreground">Grant Date: {patent.dateGrant}</span>
                  {patent.dateIssue && (
                    <span className="font-semibold text-royal">Issue Date: {patent.dateIssue}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Overview of Research Projects & Consultancy */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-navy dark:text-white border-b border-border/50 pb-2">
              <BookOpen className="h-5 w-5 text-royal" /> Featured Projects
            </h3>
            <div className="space-y-4">
              {researchProjects.map((proj, idx) => (
                <div key={idx} className="border-l-2 border-royal/30 pl-3 py-1">
                  <h4 className="font-semibold text-navy dark:text-white text-sm line-clamp-1">{proj.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{proj.type} &middot; {proj.agency}</p>
                  <p className="text-xs font-semibold text-royal mt-1">Funding: {proj.amount}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/projects-consultancy" className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline">
                View Project Dashboards &rarr;
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-navy dark:text-white border-b border-border/50 pb-2">
                <FileSpreadsheet className="h-5 w-5 text-royal" /> Consultancy
              </h3>
              <div className="border-l-2 border-gold/30 pl-3 py-1">
                <h4 className="font-semibold text-navy dark:text-white text-sm">Industrial content consultation</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Partner: {consultancy.agency}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Role: {consultancy.role} &middot; {consultancy.workNature}</p>
                <p className="text-xs font-semibold text-gold mt-1">Valuation: {consultancy.amount}</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/projects-consultancy" className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline">
                View Consultancy Details &rarr;
              </Link>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

