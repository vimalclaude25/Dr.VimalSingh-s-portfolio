'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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
} from 'lucide-react'
import { AnimatedCounter } from '@/components/animated-counter'

const areas = [
  'Education',
  'Artificial Intelligence',
  'Machine Learning',
  'Research Methodology',
  'Educational Technology',
  'Policy',
]

const stats = [
  { icon: FileText, value: 37, label: 'Research Papers Published', color: 'text-royal' },
  { icon: Quote, value: 18, label: 'UGC CARE / Scopus Publications', color: 'text-gold' },
  { icon: BookOpen, value: 6, label: 'Books Published', color: 'text-emerald-400' },
  { icon: Files, value: 14, label: 'Book Chapters', color: 'text-gold' },
  { icon: FlaskConical, value: 8, label: 'Research Projects', color: 'text-emerald-400' },
  { icon: Users, value: 41, label: 'Research Scholars Guided', color: 'text-royal' },
  { icon: BadgeCheck, value: 2, label: 'Patents Published', color: 'text-gold' },
  { icon: CalendarDays, value: 10, suffix: '+', label: 'Years of Experience', color: 'text-emerald-400' },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
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
                src="/dr-vimal-singh.png"
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
              Dr. Vimal Singh
            </h1>
            <p className="mt-3 font-heading text-lg font-semibold text-royal">
              Assistant Professor
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              School of Teacher Education
              <br />
              Chhatrapati Shahu Ji Maharaj University, Kanpur
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
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
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-royal/25 transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-royal hover:text-royal dark:text-white"
              >
                <Compass className="h-4 w-4" /> Explore Research
              </a>
              <a
                href="#"
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
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-white">Academic Impact</h2>
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Live
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, suffix, label, color }) => (
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
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-white/50">
            <span>Last Updated: 24 May 2025</span>
            <span>Counters update automatically</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
