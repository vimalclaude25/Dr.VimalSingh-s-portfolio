'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  BookCheck,
  Globe,
  Award,
  Sparkles,
  Layers,
  Quote,
  Building2,
  CheckCircle2,
  Clock,
  BookOpen
} from 'lucide-react'
import { peerReviewServiceData } from '@/lib/cv-data'

export function PeerReviewSection() {
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

  const { stats, journals, closingQuote } = peerReviewServiceData

  // Separate top row (3 cards) and bottom row (2 cards) for balanced 3+2 desktop grid
  const topJournals = journals.slice(0, 3)
  const bottomJournals = journals.slice(3, 5)

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero / Header */}
      <div className="mb-12 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3.5 py-1 text-xs font-bold text-royal dark:bg-royal/20 dark:text-sky-300 mb-4">
          <BookCheck className="h-4 w-4" /> Scholarly Peer Review &amp; Referee Service
        </span>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy dark:text-white sm:text-4xl md:text-5xl">
          Peer Review &amp; Editorial Service
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Contributing to rigorous, ethical and evidence-based scholarly communication
        </p>
      </div>

      {/* Statistics Strip */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-14">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
            <BookCheck className="h-6 w-6" />
          </div>
          <div>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white block">{stats[0].value}</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stats[0].label}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <span className="font-heading text-2xl font-bold text-navy dark:text-white block">{stats[1].value}</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stats[1].label}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <span className="font-heading text-xl font-bold text-navy dark:text-white block">{stats[2].value}</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stats[2].label}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-navy dark:text-white block leading-snug">{stats[3].value}</span>
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{stats[3].label}</span>
          </div>
        </div>
      </div>

      {/* Journal Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 mb-16"
      >
        <div className="mb-4">
          <h2 className="font-heading text-xl font-bold text-navy dark:text-white flex items-center gap-2 border-b border-border pb-2">
            <ShieldCheck className="h-5 w-5 text-royal" /> International Scholarly Journals Refereed
          </h2>
        </div>

        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {topJournals.map((journal) => (
            <motion.div
              key={journal.id}
              variants={itemVariants}
              className={`group relative flex flex-col justify-between rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                journal.statusType === 'invitation'
                  ? 'border-gold/50 shadow-gold/5 hover:border-gold hover:shadow-gold/15 bg-gradient-to-b from-card via-card to-gold/5'
                  : 'border-border hover:border-royal/40'
              }`}
            >
              <div>
                {/* Header Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    <BookOpen className="h-3.5 w-3.5 text-royal" /> 0{journal.id}
                  </span>

                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        journal.quartile === 'Q1'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-royal/10 text-royal dark:text-sky-300 border border-royal/20'
                      }`}
                    >
                      {journal.quartile}
                    </span>
                  </div>
                </div>

                {/* Chronic Stress Highlight Badge */}
                {journal.invitationBadge && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-extrabold text-gold dark:text-amber-300 border border-gold/30 animate-pulse">
                      <Sparkles className="h-3.5 w-3.5 shrink-0" />
                      {journal.invitationBadge}
                    </span>
                  </div>
                )}

                {/* Journal Title */}
                <h3 className="font-heading text-xl font-bold text-navy dark:text-white group-hover:text-royal transition-colors leading-snug">
                  {journal.journalName}
                </h3>

                {/* Publisher */}
                <p className="mt-2 text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-royal" /> Publisher: <span className="text-navy dark:text-white font-bold">{journal.publisher}</span>
                </p>

                {/* Topics / Tags */}
                {journal.topics && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {journal.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Role & Status */}
              <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between text-xs">
                <span className="font-bold text-muted-foreground uppercase tracking-wider text-[10px]">
                  Official Role
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 font-bold ${
                    journal.statusType === 'invitation'
                      ? 'text-gold dark:text-amber-300'
                      : 'text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  {journal.statusType === 'invitation' ? (
                    <Clock className="h-3.5 w-3.5" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  )}
                  {journal.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered on Desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {bottomJournals.map((journal) => (
            <motion.div
              key={journal.id}
              variants={itemVariants}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-xl"
            >
              <div>
                {/* Header Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    <BookOpen className="h-3.5 w-3.5 text-royal" /> 0{journal.id}
                  </span>

                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      journal.quartile === 'Q1'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'bg-royal/10 text-royal dark:text-sky-300 border border-royal/20'
                    }`}
                  >
                    {journal.quartile}
                  </span>
                </div>

                {/* Journal Title */}
                <h3 className="font-heading text-xl font-bold text-navy dark:text-white group-hover:text-royal transition-colors leading-snug">
                  {journal.journalName}
                </h3>

                {/* Publisher */}
                <p className="mt-2 text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-royal" /> Publisher: <span className="text-navy dark:text-white font-bold">{journal.publisher}</span>
                </p>

                {/* Topics / Tags */}
                {journal.topics && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {journal.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Role & Status */}
              <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between text-xs">
                <span className="font-bold text-muted-foreground uppercase tracking-wider text-[10px]">
                  Official Role
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {journal.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Suggested Closing Statement */}
      <div className="rounded-3xl border border-border/80 bg-muted/40 p-8 text-center max-w-4xl mx-auto shadow-inner relative overflow-hidden">
        <Quote className="h-10 w-10 text-royal/20 mx-auto mb-3" />
        <p className="font-serif italic text-base sm:text-lg text-navy dark:text-white/90 leading-relaxed max-w-2xl mx-auto">
          {closingQuote}
        </p>
        <span className="block mt-4 text-xs font-bold text-gold uppercase tracking-widest">
          Academic Responsibility &amp; Quality Commitment
        </span>
      </div>
    </div>
  )
}
