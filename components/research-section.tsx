'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FlaskConical,
  BadgeCheck,
  Users,
  Briefcase,
  ChevronRight,
  TrendingUp,
  FileText,
  Calendar,
  DollarSign,
  UserCheck,
} from 'lucide-react'
import {
  patents,
  researchProjects,
  consultancy,
  researchGuidance,
} from '@/lib/cv-data'

export function ResearchSection() {
  const [activeTab, setActiveTab] = useState<'projects' | 'patents' | 'guidance' | 'consultancy'>('projects')

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
  }

  return (
    <section id="research" className="bg-muted/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
            Research, Projects &amp; Patents
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
            A comprehensive look at funded research projects, national patents in education technology, academic consultancy projects, and student guidance activities.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-border pb-px">
          {[
            { id: 'projects', label: 'Research Projects', icon: FlaskConical },
            { id: 'patents', label: 'Patents', icon: BadgeCheck },
            { id: 'guidance', label: 'Research Guidance', icon: Users },
            { id: 'consultancy', label: 'Consultancy', icon: Briefcase },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'border-royal text-royal'
                    : 'border-transparent text-muted-foreground hover:text-royal'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Contents */}
        <div className="min-h-[350px]">
          {activeTab === 'projects' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-2"
            >
              {researchProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
                      {project.type}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground">{project.dateSanction}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-navy dark:text-white">
                    {project.title}
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4">
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Funding Agency
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-navy dark:text-white">
                        {project.agency}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Role
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-navy dark:text-white">
                        {project.role}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Sanctioned Amount
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-royal">
                        {project.amount}
                      </span>
                    </div>
                    {project.duration && (
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Duration
                        </span>
                        <span className="mt-0.5 block text-sm font-bold text-navy dark:text-white">
                          {project.duration}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'patents' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-2"
            >
              {patents.map((patent, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {patent.level} Patent
                    </span>
                    <span className="text-xs font-bold text-muted-foreground">Granted</span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-navy dark:text-white">
                    {patent.title}
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4">
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Design No / Reg No
                      </span>
                      <span className="mt-0.5 block text-sm font-mono font-bold text-navy dark:text-white">
                        {patent.designNo}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Grant Date
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-navy dark:text-white">
                        {patent.dateGrant}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        My Role
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-royal">
                        {patent.role}
                      </span>
                    </div>
                    {patent.dateIssue && (
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Issue Date
                        </span>
                        <span className="mt-0.5 block text-sm font-bold text-navy dark:text-white">
                          {patent.dateIssue}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'guidance' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-[1fr_2fr]"
            >
              {/* Guidance Metrics */}
              <motion.div
                variants={itemVariants}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-white mb-2">
                    M.Ed. Scholars Guidance
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Mentoring postgraduate scholars in research methodology and education research design.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-sm font-medium text-muted-foreground">Total Guided</span>
                    <span className="font-heading text-2xl font-bold text-royal">41</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-sm font-medium text-muted-foreground">Awarded</span>
                    <span className="font-heading text-xl font-bold text-emerald-600 dark:text-emerald-400">34</span>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-sm font-medium text-muted-foreground">Pursuing</span>
                    <span className="font-heading text-xl font-bold text-gold">16</span>
                  </div>
                </div>
              </motion.div>

              {/* Guidance Timeline/Table */}
              <motion.div
                variants={itemVariants}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-heading text-lg font-bold text-navy dark:text-white mb-4">
                  Academic Sessions Breakdowns
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      M.Ed Guidance Timeline
                    </h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {researchGuidance.details.map((d, i) => (
                        <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1.5">
                          <span className="font-medium text-navy dark:text-white">{d.year}</span>
                          <span className="text-muted-foreground">{d.count} Candidates ({d.status})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Ph.D. Supervision (IGNOU)
                    </h4>
                    <div className="space-y-3">
                      {researchGuidance.phdScholars?.map((p, i) => (
                        <div key={i} className="border-l-2 border-gold pl-2.5">
                          <h5 className="text-xs font-bold text-navy dark:text-white">{p.name}</h5>
                          <p className="text-[10px] text-muted-foreground mt-0.5">Reg: {p.regNo}</p>
                          <p className="text-[10px] text-gold font-semibold mt-0.5">{p.session}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'consultancy' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-2xl"
            >
              <motion.div
                variants={itemVariants}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-royal/30 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy dark:text-white">
                      Academic Consultancy &amp; Advisory
                    </h3>
                    <p className="text-xs text-muted-foreground">Expert advisory services for online education platforms</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 border-t border-border pt-4">
                  <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                    <span className="font-medium text-muted-foreground">Client Organization</span>
                    <span className="font-bold text-navy dark:text-white">{consultancy.agency}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                    <span className="font-medium text-muted-foreground">Engagement Date</span>
                    <span className="font-bold text-navy dark:text-white">{consultancy.date}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                    <span className="font-medium text-muted-foreground">Nature of Work</span>
                    <span className="font-bold text-navy dark:text-white">{consultancy.workNature}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border/50 pb-2">
                    <span className="font-medium text-muted-foreground">Designation/Role</span>
                    <span className="font-bold text-royal">{consultancy.role}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-2">
                    <span className="font-medium text-muted-foreground">Amount (Max)/Year</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{consultancy.amount}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
