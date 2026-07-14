'use client'

import { GraduationCap, BookOpen, FlaskConical, Users, Bot, Library, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const cards = [
  {
    icon: GraduationCap,
    title: 'Research & Innovation',
    desc: 'Exploring AI in education, machine learning, policy & curriculum development.',
    cta: 'Explore',
    accent: 'bg-royal',
    href: '/research-innovation',
  },
  {
    icon: BookOpen,
    title: 'Publications',
    desc: 'Scopus indexed, UGC CARE listed, peer-reviewed publications.',
    cta: 'View All',
    accent: 'bg-emerald-500',
    href: '/publications',
  },
  {
    icon: FlaskConical,
    title: 'Projects & Consultancy',
    desc: 'Government projects, research grants & academic consultancy.',
    cta: 'View Projects',
    accent: 'bg-navy',
    href: '/projects-consultancy',
  },
  {
    icon: Users,
    title: 'Research Guidance',
    desc: 'M.Ed. & Ph.D. scholars guided with strong research outcomes.',
    cta: 'Know More',
    accent: 'bg-gold',
    href: '/research-guidance',
  },
  {
    icon: Bot,
    title: 'AI Lab',
    desc: 'AI in education, prompt engineering, research tools & tutorials.',
    cta: 'Visit AI Lab',
    accent: 'bg-teal-500',
    href: '/ai-lab',
  },
  {
    icon: Library,
    title: 'E-Resources',
    desc: 'Lecture notes, templates, research methodology & digital library.',
    cta: 'Browse',
    accent: 'bg-royal',
    href: '/e-resources',
  },
]

export function QuickAccess() {
  return (
    <section className="mx-auto -mt-8 max-w-8xl px-4 pb-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, desc, cta, accent, href }) => (
          <Link
            key={title}
            href={href}
            className="group relative rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal/30 hover:shadow-xl hover:shadow-royal/10"
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-base font-bold text-navy dark:text-white">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-royal">
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

