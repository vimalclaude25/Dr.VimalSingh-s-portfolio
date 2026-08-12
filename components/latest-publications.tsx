'use client'

import { useState } from 'react'
import { FileText, ChevronLeft, ChevronRight, ExternalLink, User, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { journalPublications } from '@/lib/cv-data'

const filters = ['All', 'Peer-Reviewed', 'Scopus Indexed', 'UGC-CARE Listed']

export function LatestPublications() {
  const [index, setIndex] = useState(0)
  const [filter, setFilter] = useState('All')

  const realPubs = journalPublications.filter((pub) => {
    if (filter === 'All') return true
    return pub.type === filter
  })

  const currentPubs = realPubs.length > 0 ? realPubs : journalPublications
  const pub = currentPubs[index % currentPubs.length]

  const next = () => setIndex((i) => (i + 1) % currentPubs.length)
  const prev = () => setIndex((i) => (i - 1 + currentPubs.length) % currentPubs.length)

  return (
    <section className="bg-muted/50 py-14">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white">
            <FileText className="h-6 w-6 text-royal" /> Latest Publications
          </h2>
          <Link href="/publications?tab=journals" className="inline-flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
            View All Publications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f)
                setIndex(0)
              }}
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

        {pub && (
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7">
            <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {pub.type}
                  </span>
                  <span className="text-xs font-bold text-gold">
                    {pub.year}
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-navy text-balance dark:text-white">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pub.journal} &nbsp;|&nbsp; {pub.details}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <User className="h-4 w-4 text-royal" /> Dr. Vimal Singh (Co-Author)
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={pub.link || `/read/gurukul-to-generative-ai`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-royal px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <BookOpen className="h-3.5 w-3.5" /> Read Article
                  </Link>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-royal hover:text-royal dark:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> View DOI ({pub.doi})
                    </a>
                  )}
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
              {currentPubs.slice(0, 8).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to publication ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === (index % currentPubs.length) ? 'w-6 bg-royal' : 'w-2 bg-border'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


