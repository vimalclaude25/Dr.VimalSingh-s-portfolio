'use client'

import { motion } from 'framer-motion'
import { Users, Award, Calendar, BookOpen, UserCheck, GraduationCap, ArrowLeft, BarChart2 } from 'lucide-react'
import Link from 'next/link'
import { researchGuidance } from '@/lib/cv-data'

export default function ResearchGuidancePage() {
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

  const { awarded, pursuing, details, phdScholars } = researchGuidance

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
              <span className="text-navy dark:text-white">Research Guidance</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Research Guidance
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Mentoring next-generation scholars and researchers. Guiding Master of Education (M.Ed.) thesis completion and Doctor of Philosophy (Ph.D.) academic candidates.
        </p>
      </div>

      {/* Visual Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mb-12">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">M.Ed. Awarded</span>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white">{awarded} Scholars</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">M.Ed. Pursuing</span>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white">{pursuing} Scholars</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ph.D. Candidates</span>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white">{phdScholars?.length || 0} Registered</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy dark:bg-slate-800 dark:text-slate-300">
            <BarChart2 className="h-6 w-6" />
          </div>
          <div>
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Guided</span>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white">{awarded + pursuing + (phdScholars?.length || 0)} Total</span>
          </div>
        </div>
      </div>

      {/* Interactive Chart */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm mb-12">
        <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border/50 pb-2">
          <BarChart2 className="h-5.5 w-5.5 text-royal" /> Cohort Distribution Analytics
        </h2>
        <div className="h-64 flex flex-col justify-end pt-4">
          <div className="h-48 flex items-end justify-between gap-4 px-2 sm:px-6">
            {details.map((cohort, index) => {
              const percent = (cohort.count / 10) * 100
              return (
                <div key={index} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                  {/* Tooltip */}
                  <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-navy dark:bg-slate-800 text-white text-xs font-bold px-2.5 py-1 rounded shadow border border-white/10 dark:border-slate-700 z-10 whitespace-nowrap">
                    {cohort.count} Scholars ({cohort.status})
                  </div>
                  
                  {/* Bar */}
                  <div 
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      cohort.status === 'Awarded' 
                        ? 'bg-royal group-hover:bg-royal/85' 
                        : 'bg-gold group-hover:bg-gold/85'
                    }`} 
                    style={{ height: `${percent}%` }}
                  />
                  
                  {/* Label */}
                  <span className="text-[9px] sm:text-xs font-bold mt-2 text-muted-foreground whitespace-nowrap rotate-12 sm:rotate-0">
                    {cohort.year.split(' - ')[0]}
                  </span>
                </div>
              )
            })}
          </div>
          
          {/* Y Axis / Legend */}
          <div className="flex justify-center gap-6 mt-6 border-t border-border/60 pt-4 text-xs font-semibold flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-royal" />
              <span className="text-muted-foreground">M.Ed. Completed &amp; Awarded</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-gold" />
              <span className="text-muted-foreground">M.Ed. Ongoing (Pursuing)</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Ph.D. Guidance Dashboard */}
        <motion.section variants={itemVariants} className="lg:col-span-1 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sticky top-24">
            <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border/50 pb-2">
              <UserCheck className="h-5.5 w-5.5 text-gold" /> Ph.D. Scholars
            </h2>
            <div className="space-y-6">
              {phdScholars && phdScholars.map((scholar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/60 bg-muted/30 p-4 relative overflow-hidden transition-all hover:border-gold/30"
                >
                  <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full bg-gold/10 px-2 py-0.5 text-[9px] font-bold text-gold">
                    IGNOU Registered
                  </span>
                  <h4 className="font-heading text-base font-bold text-navy dark:text-white mt-1">
                    {scholar.name}
                  </h4>
                  <div className="mt-3 text-xs space-y-1.5 text-muted-foreground">
                    <p><span className="font-bold text-navy dark:text-white">Registration:</span> <code className="font-mono text-[10px] bg-card px-1.5 py-0.5 rounded">{scholar.regNo}</code></p>
                    <p><span className="font-bold text-navy dark:text-white">Session:</span> {scholar.session}</p>
                    <p><span className="font-bold text-navy dark:text-white">Role:</span> Research Supervisor</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* M.Ed. Guidance Cohort Timeline */}
        <motion.section variants={itemVariants} className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border/50 pb-2">
              <BookOpen className="h-5.5 w-5.5 text-royal" /> M.Ed. Thesis Supervision Cohorts
            </h2>
            <div className="relative border-l-2 border-border ml-3 pl-6 space-y-8">
              {details.map((cohort, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-card ${
                    cohort.status === 'Awarded' ? 'bg-royal' : 'bg-gold animate-pulse'
                  }`} />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-royal">
                        Session Cohort
                      </span>
                      <h3 className="font-heading text-base font-bold text-navy dark:text-white">
                        {cohort.year}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        cohort.status === 'Awarded'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-gold/10 text-gold'
                      }`}>
                        {cohort.status}
                      </span>
                      <span className="inline-block rounded-full bg-navy/5 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-bold text-navy dark:text-white">
                        {cohort.count} Scholars
                      </span>
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    Supervised the design, research methodologies, statistical modeling, and final draft defenses for M.Ed. dissertations.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

