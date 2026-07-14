'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Search, Download, ExternalLink, Library, BookOpen, Film, HelpCircle, FileText, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ntaNetResourcesData } from '@/lib/cv-data'

function EResourcesContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<'all' | 'preparation' | 'materials' | 'mcqs' | 'videos' | 'success'>('all')

  useEffect(() => {
    if (
      categoryParam === 'preparation' ||
      categoryParam === 'materials' ||
      categoryParam === 'mcqs' ||
      categoryParam === 'videos' ||
      categoryParam === 'success' ||
      categoryParam === 'all'
    ) {
      setActiveCategory(categoryParam as any)
    }
  }, [categoryParam])

  const categories = [
    { id: 'all', label: 'All Resources', icon: Library },
    { id: 'preparation', label: 'Prep Guides', icon: BookOpen },
    { id: 'materials', label: 'Study Materials', icon: FileText },
    { id: 'mcqs', label: 'MCQs & Quizzes', icon: HelpCircle },
    { id: 'videos', label: 'Video Lectures', icon: Film },
    { id: 'success', label: 'Success Stories', icon: CheckCircle },
  ] as const

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF': return FileText
      case 'Video': return Film
      case 'Quiz': return HelpCircle
      default: return BookOpen
    }
  }

  const filteredResources = ntaNetResourcesData.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* Search and Filters Layout */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-3 h-4.5 w-4.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search study materials, notes, quizzes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-royal"
          />
        </div>

        {/* Categories filters scroll list on mobile */}
        <div className="flex w-full md:w-auto overflow-x-auto pb-2 md:pb-0 gap-1.5 scrollbar-thin scrollbar-thumb-border">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-royal text-white'
                    : 'border border-border bg-card text-muted-foreground hover:border-royal/40 hover:text-royal'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Resources grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredResources.map((resource) => {
              const TypeIcon = getIcon(resource.type)
              return (
                <motion.div
                  key={resource.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-royal/30 hover:shadow-lg transition-all"
                >
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-royal">
                        {resource.subcategory}
                      </span>
                      <span className={`inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground`}>
                        <TypeIcon className="h-3 w-3 text-royal" /> {resource.type}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="font-heading text-base font-bold text-navy dark:text-white leading-snug line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {resource.desc}
                    </p>
                  </div>

                  {/* Actions / Metadata */}
                  <div className="mt-6 flex justify-between items-center border-t border-border/60 pt-4">
                    <span className="text-[10px] font-semibold text-muted-foreground">
                      {resource.fileSize && `Size: ${resource.fileSize}`}
                      {resource.duration && `Duration: ${resource.duration}`}
                    </span>
                    {resource.type === 'Quiz' ? (
                      <a
                        href={resource.link || '#'}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-4 py-2 text-xs font-bold text-navy hover:bg-gold/90 transition-colors"
                      >
                        Start Quiz <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                      </a>
                    ) : resource.type === 'PDF' ? (
                      <a
                        href={resource.link || '#'}
                        target={resource.link && !resource.link.startsWith('http') ? undefined : '_blank'}
                        rel={resource.link && !resource.link.startsWith('http') ? undefined : 'noopener noreferrer'}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-royal px-4 py-2 text-xs font-bold text-white hover:bg-royal/95 transition-colors"
                      >
                        {resource.link && resource.link.startsWith('/read/') ? (
                          <>
                            Read Online <BookOpen className="h-3.5 w-3.5" />
                          </>
                        ) : (
                          <>
                            <Download className="h-3.5 w-3.5" /> Download
                          </>
                        )}
                      </a>
                    ) : (
                      <a
                        href={resource.link || '#'}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-xs font-bold text-navy hover:border-royal hover:text-royal dark:text-white transition-colors"
                      >
                        Open Resource <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filteredResources.length === 0 && (
          <div className="py-24 text-center text-muted-foreground text-sm flex flex-col items-center justify-center gap-2">
            <Library className="h-10 w-10 text-muted-foreground/60 mb-2" />
            No study resources found matching the parameters.
          </div>
        )}
      </div>
    </>
  )
}

export default function EResourcesPage() {
  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm font-semibold">
          <li className="inline-flex items-center">
            <Link href="/" className="text-muted-foreground hover:text-royal transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-navy dark:text-white">E-Resources</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          E-Resources &amp; Study Hub
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Access high-yield study materials, topic-wise practice quizzes, and recorded concept lectures compiled for UGC NET and JRF aspirants in Education.
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading resources...</div>}>
        <EResourcesContent />
      </Suspense>
    </div>
  )
}

