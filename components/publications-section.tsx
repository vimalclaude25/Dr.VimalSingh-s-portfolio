'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  Search,
  BookOpen,
  Layers,
  ChevronDown,
  ExternalLink,
  BookMarked,
  SlidersHorizontal,
  Bookmark,
} from 'lucide-react'
import {
  journalPublications,
  books,
  bookChapters,
  scales,
} from '@/lib/cv-data'

export function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<'journals' | 'books' | 'scales'>('journals')
  const [searchQuery, setSearchQuery] = useState('')
  const [journalFilter, setJournalFilter] = useState<'All' | 'Scopus Indexed' | 'UGC-CARE Listed' | 'Peer-Reviewed'>('All')
  const [visibleCount, setVisibleCount] = useState(5)

  // Filter Journals
  const filteredJournals = journalPublications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = journalFilter === 'All' || pub.type === journalFilter
    return matchesSearch && matchesFilter
  })

  const loadMore = () => setVisibleCount((prev) => prev + 5)

  return (
    <section id="publications" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
          Publications &amp; Books
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
          Dr. Vimal Singh has a rich publication record of Scopus-indexed and UGC-CARE listed articles, self-authored/edited books, book chapters, and standardized psychological scales.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-border pb-px">
        {[
          { id: 'journals', label: `Journal Articles (${journalPublications.length})`, icon: FileText },
          { id: 'books', label: `Books & Chapters (${books.length + bookChapters.length})`, icon: BookOpen },
          { id: 'scales', label: `Tests & Scales (${scales.length})`, icon: Bookmark },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any)
                setSearchQuery('')
                setVisibleCount(5)
              }}
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

      {/* Content */}
      <div className="min-h-[400px]">
        {activeTab === 'journals' && (
          <div>
            {/* Search and Filters */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles by title or journal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-royal"
                />
              </div>

              {/* Tag filters */}
              <div className="flex flex-wrap gap-1.5">
                {(['All', 'Scopus Indexed', 'UGC-CARE Listed', 'Peer-Reviewed'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setJournalFilter(filter)
                      setVisibleCount(5)
                    }}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      journalFilter === filter
                        ? 'bg-royal text-white'
                        : 'border border-border bg-card text-muted-foreground hover:border-royal/40 hover:text-royal'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredJournals.slice(0, visibleCount).map((pub) => (
                  <motion.div
                    key={pub.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-royal uppercase tracking-wider">
                        {pub.year}
                      </span>
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          pub.type === 'Scopus Indexed'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : pub.type === 'UGC-CARE Listed'
                            ? 'bg-gold/10 text-gold'
                            : 'bg-royal/10 text-royal'
                        }`}
                      >
                        {pub.type}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-bold text-navy dark:text-white leading-snug">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {pub.journal} &nbsp;|&nbsp; {pub.details}
                    </p>

                    {pub.doi && (
                      <div className="mt-3 flex items-center gap-4 text-xs">
                        <span className="font-mono text-muted-foreground">DOI: {pub.doi}</span>
                        {pub.link ? (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-semibold text-royal hover:underline"
                          >
                            Read Article <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-semibold text-royal hover:underline"
                          >
                            View DOI <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredJournals.length === 0 && (
                <div className="py-12 text-center text-muted-foreground text-sm">
                  No publications found matching your search.
                </div>
              )}

              {filteredJournals.length > visibleCount && (
                <div className="mt-6 text-center">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-royal hover:text-royal dark:text-white"
                  >
                    Load More Articles <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'books' && (
          <div className="space-y-12">
            {/* Published/Edited Books */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border pb-2">
                <BookOpen className="h-5 w-5 text-royal" /> Published &amp; Edited Books ({books.length})
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {books.map((book, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 hover:shadow-md"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-royal">
                      {book.date}
                    </span>
                    <h4 className="mt-2 font-heading text-sm font-bold text-navy dark:text-white line-clamp-3 flex-1 leading-snug">
                      {book.title}
                    </h4>
                    <div className="mt-4 border-t border-border pt-3 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Role</span>
                        <span className="font-semibold text-navy dark:text-white">{book.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Publisher</span>
                        <span className="font-semibold text-navy dark:text-white">{book.publisher}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ISBN</span>
                        <span className="font-mono text-muted-foreground">{book.isbn}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapters */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-heading text-xl font-bold text-navy dark:text-white border-b border-border pb-2">
                <BookMarked className="h-5 w-5 text-royal" /> Book Chapters ({bookChapters.length})
              </h3>
              <div className="space-y-4">
                {bookChapters.map((chap) => (
                  <div
                    key={chap.id}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-royal uppercase tracking-wider">
                        {chap.year}
                      </span>
                      <span className="inline-block rounded-full bg-royal/10 px-2 py-0.5 text-[10px] font-bold text-royal">
                        Book Chapter
                      </span>
                    </div>

                    <h4 className="font-heading text-base font-bold text-navy dark:text-white leading-snug">
                      {chap.chapterTitle}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      In Book: <span className="font-semibold text-navy dark:text-white">{chap.bookTitle}</span>
                    </p>
                    <div className="mt-3 flex flex-wrap justify-between items-center text-xs border-t border-border/50 pt-2 text-muted-foreground">
                      <span>Publisher: {chap.publisher}</span>
                      <span>Role: {chap.role} {chap.pages && `| Pages: ${chap.pages}`}</span>
                      <span className="font-mono">ISBN: {chap.isbn}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scales' && (
          <div className="grid gap-6 md:grid-cols-2">
            {scales.map((scale, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-royal/30 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    Standardized Tool / Scale
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy dark:text-white leading-snug">
                    {scale.title}
                  </h3>
                  <div className="mt-4 text-xs space-y-1.5 text-muted-foreground leading-relaxed">
                    <p><span className="font-bold text-navy dark:text-white">Authors:</span> {scale.authors}</p>
                    <p><span className="font-bold text-navy dark:text-white">Publisher:</span> {scale.publisher}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center border-t border-border pt-4 text-xs">
                  <span className="font-mono text-muted-foreground">ISBN/Code: {scale.isbn}</span>
                  <span className="font-bold text-royal">Published: {scale.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
