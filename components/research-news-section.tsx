'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import {
  Newspaper,
  Globe,
  Radio,
  Tv,
  MessageSquare,
  Search,
  ExternalLink,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from 'lucide-react'
import { researchNewsData, ResearchNewsItem } from '@/lib/cv-data'
import Image from 'next/image'

const subcategories = [
  'All',
  'Newspaper Coverage',
  'Departmental News',
  'Press Releases',
  'Television Coverage',
  'Podcasts',
]

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <div className="relative w-full mb-4">
      <div className="relative w-full h-72 sm:h-[380px] overflow-hidden rounded-2xl border border-border/80 bg-muted/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${title} — clipping ${current + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-navy/60 text-white hover:bg-navy/90 transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-navy/60 text-white hover:bg-navy/90 transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Counter badge */}
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-navy/70 px-3 py-0.5 text-[11px] font-bold text-white backdrop-blur-sm">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="mt-2 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-5 bg-royal' : 'w-1.5 bg-border hover:bg-royal/50'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function ResearchNewsSection() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [activeSub, setActiveSub] = useState<string>('All')
  const [selectedNews, setSelectedNews] = useState<ResearchNewsItem | null>(null)

  useEffect(() => {
    if (categoryParam && subcategories.includes(categoryParam)) {
      setActiveSub(categoryParam)
    }
  }, [categoryParam])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const getIcon = (type: string) => {
    switch (type) {
      case 'Newspaper':
        return Newspaper
      case 'University':
        return Globe
      case 'Press Release':
        return MessageSquare
      case 'TV':
        return Tv
      case 'Interview':
        return MessageSquare
      case 'Podcast':
        return Radio
      default:
        return Newspaper
    }
  };

  const getTabIcon = (sub: string) => {
    switch (sub) {
      case 'Newspaper Coverage':
        return Newspaper
      case 'Departmental News':
        return Globe
      case 'Press Releases':
        return MessageSquare
      case 'Television Coverage':
        return Tv
      case 'Podcasts':
        return Radio
      default:
        return Globe
    }
  }

  const getCount = (sub: string) => {
    if (sub === 'All') return researchNewsData.length
    return researchNewsData.filter((item) => item.subcategory === sub).length
  }

  const filteredNews = researchNewsData.filter((item) => {
    const matchesSub = activeSub === 'All' || item.subcategory === activeSub
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSub && matchesSearch
  })

  const sortedNews = [...filteredNews].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <section id="research-news" className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
          Research in News
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
          Dr. Vimal Singh’s research, innovation milestones, patents, and academic views featured in mainstream media and digital outlets.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 flex flex-wrap justify-center gap-2 border-b border-border pb-px">
        {subcategories.map((sub) => {
          const Icon = getTabIcon(sub)
          const count = getCount(sub)
          return (
            <button
              key={sub}
              onClick={() => {
                setActiveSub(sub)
                setSearchQuery('')
              }}
              className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-semibold transition-all cursor-pointer ${
                activeSub === sub
                  ? 'border-royal text-royal'
                  : 'border-transparent text-muted-foreground hover:text-royal'
              }`}
            >
              <Icon className="h-4 w-4" />
              {sub} ({count})
            </button>
          )
        })}
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4.5 w-4.5 text-muted-foreground" />
          </span>
          <input
            type="text"
            placeholder="Search news by title, content or source..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-sm focus:border-royal focus:outline-none focus:ring-1 focus:ring-royal dark:text-white"
          />
        </div>
      </div>

      {/* Grid List */}
      <div className="min-h-[250px]">
        {sortedNews.length > 0 ? (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {sortedNews.map((item) => {
                const Icon = getIcon(item.mediaType)
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedNews(item)}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-royal/30 hover:shadow-md cursor-pointer hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-royal">
                          <Icon className="h-3 w-3" /> {item.subcategory}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Calendar className="h-3 w-3" /> {item.date}
                        </span>
                      </div>
                      
                      {/* Heading first */}
                      <h3 className="font-heading text-base font-bold text-navy dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      
                      {/* Then image if present, else text */}
                      {(item.images && item.images.length > 0) ? (
                        <div className="relative w-full h-48 my-3 overflow-hidden rounded-xl border border-border bg-muted/30">
                          <Image
                            src={item.images[0]}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                          {item.images.length > 1 && (
                            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-navy/70 px-2 py-0.5 text-[10px] font-bold text-white">
                              <Images className="h-3 w-3" /> {item.images.length}
                            </span>
                          )}
                        </div>
                      ) : item.image ? (
                        <div className="relative w-full h-48 my-3 overflow-hidden rounded-xl border border-border bg-muted/30">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    
                    <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-muted-foreground">
                        Source: <span className="text-navy dark:text-white font-semibold">{item.source}</span>
                      </span>
                      {item.link && item.link !== '#' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline"
                        >
                          Read Original <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground">
            No news articles match your search or filter criteria.
          </div>
        )}
      </div>

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

              {/* Tag & Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-royal">
                  {selectedNews.subcategory}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {selectedNews.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white leading-snug mb-4">
                {selectedNews.title}
              </h3>

              {/* Image or Carousel in Modal */}
              {selectedNews.images && selectedNews.images.length > 0 ? (
                <ImageCarousel images={selectedNews.images} title={selectedNews.title} />
              ) : selectedNews.image ? (
                <div className="relative w-full h-80 sm:h-[400px] overflow-hidden rounded-2xl border border-border/80 mb-4 bg-muted/30">
                  <Image
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : null}

              {/* Divider */}
              <div className="border-b border-border/50 pb-4 mb-4">
                <span className="text-xs font-semibold text-muted-foreground">
                  Source: <span className="text-navy dark:text-white font-bold">{selectedNews.source}</span>
                </span>
              </div>

              {/* Content Description — hidden for image-only entries */}
              {!selectedNews.imageOnly && (
                <div className="prose prose-sm dark:prose-invert max-w-none text-sm leading-relaxed text-muted-foreground max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border">
                  <p className="whitespace-pre-wrap">{selectedNews.desc}</p>
                </div>
              )}

              {/* Footer Actions */}
              <div className="mt-6 flex justify-end gap-3 border-t border-border/40 pt-4">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-bold hover:bg-muted transition-colors cursor-pointer"
                >
                  Close Reader
                </button>
                {selectedNews.link && selectedNews.link !== '#' && (
                  <a
                    href={selectedNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-royal px-4 py-2 text-xs font-bold text-white hover:bg-royal/95 transition-colors"
                  >
                    Read Full Coverage <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

