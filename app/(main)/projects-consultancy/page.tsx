'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Award, Briefcase, Calendar, ShieldCheck, ArrowLeft, DollarSign, Cpu } from 'lucide-react'
import Link from 'next/link'
import { researchProjects, consultancy } from '@/lib/cv-data'

export default function ProjectsConsultancyPage() {
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

  // Calculate statistics
  const totalFunding = "3.46 Lacs"
  const projectCount = researchProjects.length
  const consultancyCount = 1

  return (
    <div className="mx-auto max-w-9xl px-4 py-12 sm:px-6 lg:px-8">
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
              <span className="text-navy dark:text-white">Projects &amp; Consultancy</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Projects &amp; Consultancy
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Overseeing government-funded research initiatives, standardizing utility scale parameters, and executing academic-industry consultancy frameworks.
        </p>
      </div>

      {/* Stat Bar */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-12">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal">
            <DollarSign className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Funding</span>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white">{totalFunding}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <FlaskConical className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Research Projects</span>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white">{projectCount} Completed/Active</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Industry Partners</span>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white">{consultancyCount} Active</span>
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Funded Projects */}
        <motion.section variants={itemVariants}>
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white border-b border-border pb-2">
            <FlaskConical className="h-6 w-6 text-royal" /> Funded Research Projects
          </h2>
          <div className="space-y-6">
            {researchProjects.map((proj, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-royal/30 hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full bg-royal/10 px-2.5 py-0.5 text-xs font-bold text-royal">
                      {proj.type}
                    </span>
                    <span className="inline-block rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-bold text-gold">
                      {proj.stream}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-white leading-snug">
                    {proj.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-muted-foreground">
                    <p className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500" /> <span className="font-bold text-navy dark:text-white">Agency:</span> {proj.agency}</p>
                    <p className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 shrink-0 text-gold" /> <span className="font-bold text-navy dark:text-white">Role:</span> {proj.role}</p>
                    <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4 shrink-0 text-royal" /> <span className="font-bold text-navy dark:text-white">Sanctioned:</span> {proj.dateSanction}</p>
                    {proj.duration && (
                      <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4 shrink-0 text-royal" /> <span className="font-bold text-navy dark:text-white">Duration:</span> {proj.duration}</p>
                    )}
                  </div>
                </div>

                <div className="flex md:flex-col justify-center items-start md:items-end shrink-0 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 min-w-44">
                  <span className="text-xs text-muted-foreground uppercase font-bold tracking-wide">Approved Amount</span>
                  <span className="font-heading text-2xl font-extrabold text-royal mt-1">{proj.amount}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full mt-2">Active Grant</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Consultancy */}
        <motion.section variants={itemVariants}>
          <h2 className="mb-6 flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white border-b border-border pb-2">
            <Briefcase className="h-6 w-6 text-gold" /> Industrial &amp; Corporate Consultancy
          </h2>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-royal/30 hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-bold text-gold">
                  Corporate Advisory
                </span>
                <span className="inline-block rounded-full bg-royal/10 px-2.5 py-0.5 text-xs font-bold text-royal">
                  Content Design Expert
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy dark:text-white leading-snug">
                Educational Content Strategy &amp; Assessment Design
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500" /> <span className="font-bold text-navy dark:text-white">Partner:</span> {consultancy.agency}</p>
                <p className="flex items-center gap-1.5"><Cpu className="h-4 w-4 shrink-0 text-royal" /> <span className="font-bold text-navy dark:text-white">Work Nature:</span> {consultancy.workNature}</p>
                <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4 shrink-0 text-gold" /> <span className="font-bold text-navy dark:text-white">Active Since:</span> {consultancy.date}</p>
                <p className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 shrink-0 text-royal" /> <span className="font-bold text-navy dark:text-white">Role:</span> {consultancy.role}</p>
              </div>
            </div>

            <div className="flex md:flex-col justify-center items-start md:items-end shrink-0 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 min-w-44">
              <span className="text-xs text-muted-foreground uppercase font-bold tracking-wide">Consultation Value</span>
              <span className="font-heading text-2xl font-extrabold text-gold mt-1">{consultancy.amount}</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full mt-2">Active Contract</span>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

