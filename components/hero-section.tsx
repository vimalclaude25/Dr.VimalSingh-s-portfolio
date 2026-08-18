'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Download,
  Compass,
  Mail,
  FileText,
  Quote,
  BookOpen,
  Files,
  FlaskConical,
  Users,
  BadgeCheck,
  CalendarDays,
  BookMarked,
  Award,
  TrendingUp,
  GraduationCap,
  Bookmark,
  Presentation,
  Briefcase,
  Speech,
  Landmark,
  CalendarCheck,
  Handshake,
  BarChart2,
} from 'lucide-react'
import { AnimatedCounter } from '@/components/animated-counter'
import { personalInfo } from '@/lib/cv-data'

const areas = [
  'Education',
  'Artificial Intelligence',
  'Machine Learning',
  'Research Methodology',
  'Educational Technology',
  'Policy',
]

const stats = [
  { icon: FileText, value: 40, label: 'Research Papers Published', color: 'text-royal' },
  { icon: Quote, value: 24, label: 'UGC CARE / Scopus Publications', color: 'text-gold' },
  { icon: BookOpen, value: 1, label: 'Self Authored Books', color: 'text-emerald-400' },
  { icon: BookMarked, value: 3, label: 'Edited Books', color: 'text-emerald-400' },
  { icon: Files, value: 11, label: 'Book Chapters', color: 'text-gold' },
  { icon: FlaskConical, value: 2, label: 'Research Projects', color: 'text-emerald-400' },
  { icon: Users, value: 41, label: 'Research Scholars Guided', color: 'text-royal' },
  { icon: BadgeCheck, value: 2, label: 'Patents Published', color: 'text-gold' },
  { icon: Award, value: 1, label: 'Awards Received', color: 'text-gold' },
  { icon: CalendarDays, value: 12, suffix: '+', label: 'Years of Experience', color: 'text-emerald-400' },
]

const glanceStats = [
  { icon: Award, value: 7, label: 'h-Index', color: 'text-royal' },
  { icon: BarChart2, value: 5, label: 'i10-Index', color: 'text-gold' },
  { icon: TrendingUp, value: 103, label: 'Citations', color: 'text-emerald-400' },
  { icon: GraduationCap, value: 3, label: 'Ph.D. Scholar', color: 'text-royal' },
  { icon: Bookmark, value: 2, label: 'Scale Published', color: 'text-gold' },
  { icon: Presentation, value: 30, label: 'Paper Presentations', color: 'text-emerald-400' },
  { icon: Briefcase, value: 20, label: 'Professional Development Activities', color: 'text-royal' },
  { icon: BookOpen, value: 4, label: 'Design New Curricula', color: 'text-gold' },
  { icon: Speech, value: 74, label: 'Special Invitee Lectures', color: 'text-emerald-400' },
  { icon: Landmark, value: 8, label: 'Policy Contributions', color: 'text-royal' },
  { icon: CalendarCheck, value: 7, label: 'Professional Dev. Activities Organized', color: 'text-gold' },
  { icon: Handshake, value: 1, label: 'Consultancy', color: 'text-emerald-400' },
]

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'impact' | 'glance'>('impact')

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-8xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid items-center gap-8 sm:grid-cols-[auto_1fr]"
        >
          <div className="relative mx-auto sm:mx-0">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-gold/20" />
            <div className="h-64 w-52 overflow-hidden rounded-3xl border border-border bg-muted shadow-xl sm:h-72 sm:w-56">
              <Image
                src="/dr-vimal-singh.jpeg"
                alt="Portrait of Dr. Vimal Singh"
                width={280}
                height={360}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Welcome to the official website of
            </p>
            <h1 className="mt-1 font-heading text-4xl font-extrabold leading-tight tracking-tight text-navy text-balance dark:text-white sm:text-5xl">
              {personalInfo.name}
            </h1>
            <p className="mt-3 font-heading text-lg font-semibold text-royal">
              {personalInfo.title}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {personalInfo.departmentName && (
                <>
                  {personalInfo.departmentName}
                  <br />
                </>
              )}
              {personalInfo.department}
              <br />
              {personalInfo.institution}
            </p>

            {/* Key Portfolios */}
            <div className="mt-4 space-y-2 border-l-2 border-gold/50 pl-3.5 py-0.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Key Portfolios
              </p>
              <ul className="space-y-1.5 text-xs text-navy/95 dark:text-white/95">
                <li className="flex items-start gap-1.5">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-royal shrink-0" />
                  <span>
                    <strong>Deputy Director (Technical)</strong> &mdash; Dronacharya Centre of Online and Distance Education, CDOE
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-royal shrink-0" />
                  <span>
                    <strong>Associate Chief Proctor</strong>
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-royal shrink-0" />
                  <span>
                    <strong>Member Core</strong>, Steering and Working Committee IQAC
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-royal shrink-0" />
                  <span>
                    <strong>Incharge</strong> &ndash; Departmental Website &amp; <strong>Incharge</strong> &ndash; Department Alumni Association
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-royal shrink-0" />
                  <span>
                    <strong>Member</strong> Institute Innovation Council (IIC-6.0)
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-royal/20 bg-royal/5 px-3 py-1 text-xs font-medium text-royal"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/dr-vimal-singh-cv.pdf"
                download="Dr_Vimal_Singh_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-royal/25 transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-royal hover:text-royal dark:text-white"
              >
                <Compass className="h-4 w-4" /> Explore Research
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — Academic Impact dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="rounded-3xl bg-navy p-5 shadow-2xl sm:p-6"
        >
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Tab switchers */}
            <div className="relative flex bg-white/10 p-1 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab('impact')}
                className="relative z-10 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200"
                style={{ color: activeTab === 'impact' ? '#0B2545' : 'rgba(255, 255, 255, 0.7)' }}
              >
                {activeTab === 'impact' && (
                  <motion.span
                    layoutId="dashboard-bubble"
                    className="absolute inset-0 -z-10 rounded-lg bg-white"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                Academic Impact
              </button>
              <button
                onClick={() => setActiveTab('glance')}
                className="relative z-10 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200"
                style={{ color: activeTab === 'glance' ? '#0B2545' : 'rgba(255, 255, 255, 0.7)' }}
              >
                {activeTab === 'glance' && (
                  <motion.span
                    layoutId="dashboard-bubble"
                    className="absolute inset-0 -z-10 rounded-lg bg-white"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                At a Glance
              </button>
            </div>

            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Live
            </span>
          </div>

          <div className="min-h-[290px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                {activeTab === 'impact' ? (
                  stats.map(({ icon: Icon, value, suffix, label, color }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-gold/40 hover:bg-white/10"
                    >
                      <Icon className={`h-5 w-5 ${color}`} />
                      <p className={`mt-2 font-heading text-2xl font-bold ${color}`}>
                        <AnimatedCounter value={value} suffix={suffix} />
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-white/70">{label}</p>
                    </div>
                  ))
                ) : (
                  glanceStats.map(({ icon: Icon, value, label, color }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-gold/40 hover:bg-white/10"
                    >
                      <Icon className={`h-5 w-5 ${color}`} />
                      <p className={`mt-2 font-heading text-2xl font-bold ${color}`}>
                        <AnimatedCounter value={value} />
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-white/70">{label}</p>
                    </div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-white/50">
            <span>Last Updated: 12 August 2026</span>
            <span>Counters update automatically</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


