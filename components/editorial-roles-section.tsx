'use client'

import { motion } from 'framer-motion'
import { BookOpen, Building2, CheckCircle2, ExternalLink, ShieldCheck, Sparkles, UserCheck } from 'lucide-react'
import { editorialRolesData } from '@/lib/cv-data'

export function EditorialRolesSection() {
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
      {/* Hero / Header Section */}
      <div className="mb-12 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3.5 py-1 text-xs font-bold text-royal dark:bg-royal/20 dark:text-sky-300 mb-4">
          <ShieldCheck className="h-4 w-4" /> Academic Editorial Appointments
        </span>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy dark:text-white sm:text-4xl md:text-5xl">
          Editorial Roles
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Contributing to scholarly publishing, peer-review management, and academic research evaluation.
        </p>
      </div>

      {/* Editorial Roles Grid / Feature Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl space-y-8 mb-16"
      >
        {editorialRolesData.map((roleItem) => (
          <motion.div
            key={roleItem.id}
            variants={itemVariants}
            className="group relative rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/5"
          >
            {/* Status Pill & Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role Designation</span>
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-white sm:text-2xl">
                    {roleItem.role} – {roleItem.section}
                  </h3>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="h-3.5 w-3.5" /> {roleItem.status}
              </span>
            </div>

            {/* Content Details Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
              <div className="rounded-2xl border border-border/80 bg-muted/30 p-4 transition-colors group-hover:bg-muted/50">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  <BookOpen className="h-4 w-4 text-royal" /> Journal Title
                </div>
                <div className="font-heading text-lg font-bold text-navy dark:text-white">
                  {roleItem.journal}
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-muted/30 p-4 transition-colors group-hover:bg-muted/50">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  <Building2 className="h-4 w-4 text-gold" /> Publisher
                </div>
                <div className="font-heading text-lg font-bold text-navy dark:text-white">
                  {roleItem.publisher}
                </div>
              </div>
            </div>

            {/* Editorial Description */}
            <div className="rounded-2xl border border-border/60 bg-background/60 p-5 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-royal" /> Summary of Role & Scope
              </h4>
              <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                "{roleItem.description}"
              </p>
            </div>

            {/* Subtle Journal Link */}
            {roleItem.url && (
              <div className="flex items-center justify-end border-t border-border/60 pt-4">
                <a
                  href={roleItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:text-navy dark:hover:text-sky-300 transition-colors"
                >
                  View Journal at {roleItem.publisher} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
