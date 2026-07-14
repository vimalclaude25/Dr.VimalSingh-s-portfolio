'use client'

import { useState } from 'react'
import { Newspaper, ArrowRight, X, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const news = [
  {
    day: '25',
    mon: 'MAY',
    year: '2026',
    title: "Landmark 'Digital Diet Model' Study Featured in Dainik Jagran & Dinar Times",
    desc: "Study by scholar Mahima Tripathi under Dr. Vimal Singh's supervision shows significant improvements in student concentration and study habits.",
    link: '/news-media',
  },
  {
    day: '27',
    mon: 'MAY',
    year: '2026',
    title: "AI & Algorithmic Bias Research by Scholar Mansi Singh Featured in Dainik Bhaskar",
    desc: "Study under Dr. Vimal Singh's supervision explores algorithmic bias on intersectional identities and highlights student critical AI literacy recommendations.",
    link: '/news-media',
  },
]

export function NewsEvents() {
  const [selectedNews, setSelectedNews] = useState<any | null>(null)

  const sortedNews = [...news].sort((a, b) => {
    const dateA = new Date(`${a.day} ${a.mon} ${a.year}`)
    const dateB = new Date(`${b.day} ${b.mon} ${b.year}`)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
          {sortedNews.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-royal bg-background" />
              
              {item.link ? (
                <a
                  href={item.link}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-royal hover:shadow-md hover:-translate-y-0.5 cursor-pointer block"
                >
                  <div className="flex flex-col items-center rounded-xl bg-muted px-3 py-2 text-center shrink-0">
                    <span className="font-heading text-lg font-bold text-navy dark:text-white">{item.day}</span>
                    <span className="text-[10px] font-semibold tracking-wide text-royal">{item.mon}</span>
                    <span className="text-[10px] text-muted-foreground">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-navy dark:text-white flex items-center gap-1.5 hover:text-royal transition-colors">
                      {item.title} <ArrowRight className="h-3.5 w-3.5 text-royal" />
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </a>
              ) : (
                <div 
                  onClick={() => setSelectedNews(item)}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-royal hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="flex flex-col items-center rounded-xl bg-muted px-3 py-2 text-center shrink-0">
                    <span className="font-heading text-lg font-bold text-navy dark:text-white">{item.day}</span>
                    <span className="text-[10px] font-semibold tracking-wide text-royal">{item.mon}</span>
                    <span className="text-[10px] text-muted-foreground">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-navy dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
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

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl z-10 text-foreground"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-4">
                <Calendar className="h-3.5 w-3.5" />
                <span>{selectedNews.day} {selectedNews.mon} {selectedNews.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white leading-snug mb-4 border-b border-border/50 pb-4">
                {selectedNews.title}
              </h3>

              {/* Content Description */}
              <div className="prose prose-sm dark:prose-invert max-w-none text-sm leading-relaxed text-muted-foreground max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border">
                <p className="whitespace-pre-wrap">{selectedNews.desc}</p>
              </div>

              {/* Footer Actions */}
              <div className="mt-6 flex justify-end gap-3 border-t border-border/40 pt-4">
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
