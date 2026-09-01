'use client'

import { useState } from 'react'
import { Newspaper, ArrowRight, X, Calendar, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { researchNewsData, ResearchNewsItem } from '@/lib/cv-data'

export function NewsEvents() {
  const [selectedNews, setSelectedNews] = useState<ResearchNewsItem | null>(null)

  // Filter items that have text description and heading (filtering out image-only placeholders without desc)
  const newsList = researchNewsData.filter(
    (item) => item.title && item.desc && item.desc.trim() !== ''
  )

  // Date parser helper for items formatted like "28 August 2026"
  const parseDate = (dateStr: string) => {
    const parts = dateStr.trim().split(' ')
    if (parts.length >= 3) {
      const day = parts[0].padStart(2, '0')
      const mon = parts[1].substring(0, 3).toUpperCase()
      const year = parts[2]
      const timestamp = new Date(dateStr).getTime() || 0
      return { day, mon, year, timestamp }
    }
    return { day: '01', mon: 'JAN', year: '2026', timestamp: 0 }
  }

  // Sort descending by date (latest news first)
  const sortedNews = [...newsList].sort((a, b) => {
    const timeA = parseDate(a.date).timestamp
    const timeB = parseDate(b.date).timestamp
    return timeB - timeA
  })

  return (
    <section className="mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white">
          <Newspaper className="h-6 w-6 text-royal" /> News &amp; Events
        </h2>
        <a href="/news-media" className="inline-flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
          View All <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {sortedNews.length > 0 ? (
        <ol className="relative space-y-4 border-l border-border pl-6">
          {sortedNews.slice(0, 6).map((item) => {
            const { day, mon, year } = parseDate(item.date)
            const isExternalLink = item.link && item.link.startsWith('http')

            return (
              <li key={item.id} className="relative">
                <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-royal bg-background" />

                <div
                  onClick={() => setSelectedNews(item)}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-royal hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="flex flex-col items-center rounded-xl bg-muted px-3 py-2 text-center shrink-0">
                    <span className="font-heading text-lg font-bold text-navy dark:text-white">{day}</span>
                    <span className="text-[10px] font-semibold tracking-wide text-royal">{mon}</span>
                    <span className="text-[10px] text-muted-foreground">{year}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block rounded-full bg-royal/10 px-2.5 py-0.5 text-[10px] font-semibold text-royal">
                        {item.subcategory || item.source}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm font-bold text-navy dark:text-white flex items-center gap-1.5 hover:text-royal transition-colors line-clamp-2">
                      {item.title}
                      {isExternalLink ? (
                        <ExternalLink className="h-3.5 w-3.5 text-royal shrink-0" />
                      ) : (
                        <ArrowRight className="h-3.5 w-3.5 text-royal shrink-0" />
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      ) : (
        <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground bg-card p-6">
          No news &amp; events at this time.
        </div>
      )}

      {/* Modal Popup for Reading News */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />

            {/* Modal Body: Strictly follows preview layout rule:
                1. Heading first
                2. Image if present
                3. Text content
                4. Newspaper source link if present (or hidden) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl z-10 text-foreground max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Date & Source Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
                <Calendar className="h-3.5 w-3.5" />
                <span>{selectedNews.date}</span>
                <span>&bull;</span>
                <span className="text-royal font-medium">{selectedNews.source}</span>
              </div>

              {/* 1. HEADING FIRST */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white leading-snug mb-4 border-b border-border/50 pb-3">
                {selectedNews.title}
              </h3>

              <div className="overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border space-y-4 flex-1">
                {/* 2. IMAGE IF PRESENT */}
                {(selectedNews.image || (selectedNews.images && selectedNews.images.length > 0)) && (
                  <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      src={selectedNews.image || selectedNews.images?.[0]}
                      alt={selectedNews.title}
                      className="w-full max-h-72 object-contain bg-black/5 dark:bg-white/5"
                    />
                  </div>
                )}

                {/* 3. TEXT CONTENT */}
                {selectedNews.desc && (
                  <div className="prose prose-sm dark:prose-invert max-w-none text-sm leading-relaxed text-muted-foreground">
                    <p className="whitespace-pre-wrap">{selectedNews.desc}</p>
                  </div>
                )}
              </div>

              {/* 4. NEWSPAPER SOURCE LINK IF PRESENT OR ELSE HIDE IT */}
              <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4 shrink-0">
                {selectedNews.link ? (
                  <a
                    href={selectedNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> View Newspaper / Media Source
                  </a>
                ) : (
                  <div />
                )}

                <button
                  onClick={() => setSelectedNews(null)}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-bold hover:bg-muted transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
