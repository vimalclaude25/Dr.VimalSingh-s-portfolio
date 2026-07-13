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
} from 'lucide-react'
import { researchNewsData, ResearchNewsItem } from '@/lib/cv-data'

const subcategories = [
  'All',
  'Newspaper Coverage',
  'University News',
  'Press Releases',
  'Television Coverage',
  'Interviews',
  'Podcasts',
]

export function ResearchNewsSection() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [activeSub, setActiveSub] = useState<string>('All')

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
    <section id="research-news" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
          Research in News
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
          Dr. Vimal Singh’s research, innovation milestones, patents, and academic views featured in mainstream media and digital outlets.
        </p>
      </div>

      {/* Toolbar: Search and Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Subcategory Pills */}
        <div className="flex flex-wrap gap-2 order-2 sm:order-1">
          {subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSub(sub)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeSub === sub
                  ? 'bg-royal text-white shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-royal/10 hover:text-royal'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative order-1 sm:order-2 w-full sm:max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </span>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-4 text-xs font-medium focus:border-royal focus:outline-none focus:ring-1 focus:ring-royal dark:text-white"
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
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-royal/30 hover:shadow-md"
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
                      <h3 className="font-heading text-base font-bold text-navy dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-muted-foreground">
                        Source: <span className="text-navy dark:text-white font-semibold">{item.source}</span>
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          className="inline-flex items-center gap-1 text-xs font-bold text-royal hover:underline"
                        >
                          Read Coverage <ExternalLink className="h-3.5 w-3.5" />
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
    </section>
  )
}
