'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FileText, ChevronLeft, ChevronRight, ExternalLink, Download, User, ArrowRight } from 'lucide-react'

const filters = ['All', 'Scopus', 'Web of Science', 'UGC CARE', 'Books', 'Book Chapters']

const publications = [
  {
    tag: 'Scopus Indexed',
    title: 'Cognitive Load in the Age of Artificial Intelligence: A Bibliometric Analysis (2021–2025)',
    journal: 'Annals of Neurosciences, 2026',
    impact: '2.6',
    doi: '10.1177/09727531261443089',
    author: 'Vimal Singh',
  },
  {
    tag: 'UGC CARE',
    title: 'Reimagining Teacher Education through Generative AI: A Framework for NEP 2020',
    journal: 'Journal of Educational Technology, 2025',
    impact: '3.1',
    doi: '10.1016/j.jedtech.2025.104512',
    author: 'Vimal Singh',
  },
  {
    tag: 'Web of Science',
    title: 'Machine Learning Models for Predicting Student Dropout in Higher Education',
    journal: 'Computers & Education, 2025',
    impact: '8.9',
    doi: '10.1016/j.compedu.2025.104988',
    author: 'Vimal Singh',
  },
]

import Link from 'next/link'

export function LatestPublications() {
  const [index, setIndex] = useState(0)
  const [filter, setFilter] = useState('All')
  const pub = publications[index]

  const next = () => setIndex((i) => (i + 1) % publications.length)
  const prev = () => setIndex((i) => (i - 1 + publications.length) % publications.length)

  return (
    <section className="bg-muted/50 py-14">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white">
            <FileText className="h-6 w-6 text-royal" /> Latest Publications
          </h2>
          <Link href="/publications" className="inline-flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
            View All Publications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                filter === f
                  ? 'bg-royal text-white shadow-md shadow-royal/25'
                  : 'border border-border bg-card text-muted-foreground hover:border-royal/40 hover:text-royal'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <div className="grid items-center gap-6 sm:grid-cols-[120px_1fr_auto]">
            <div className="mx-auto h-40 w-28 overflow-hidden rounded-xl border border-border shadow-md sm:mx-0">
              <Image
                src="/journal-cover.png"
                alt={`Cover of ${pub.journal}`}
                width={140}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {pub.tag}
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-navy text-balance dark:text-white">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {pub.journal} &nbsp;|&nbsp; Impact Factor: {pub.impact} &nbsp;|&nbsp; DOI: {pub.doi}
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <User className="h-4 w-4" /> {pub.author}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-royal px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5">
                  <ExternalLink className="h-3.5 w-3.5" /> Read Paper
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-royal hover:text-royal dark:text-white">
                  <Download className="h-3.5 w-3.5" /> Download Citation
                </a>
              </div>
            </div>

            <div className="flex flex-row justify-center gap-2 sm:flex-col">
              <button onClick={prev} aria-label="Previous publication" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition-colors hover:border-royal hover:text-royal dark:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label="Next publication" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy transition-colors hover:border-royal hover:text-royal dark:text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-1.5">
            {publications.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to publication ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-royal' : 'w-2 bg-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

