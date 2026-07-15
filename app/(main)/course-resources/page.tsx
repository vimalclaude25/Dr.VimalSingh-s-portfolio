'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import {
  Search,
  Download,
  ExternalLink,
  BookOpen,
  FileText,
  SlidersHorizontal,
  ArrowLeft,
  Video,
  Layers,
  CheckCircle,
  Calendar,
  Clock,
  ChevronDown,
  BookMarked,
  Presentation,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { coursesData, studyResourcesData, Course, StudyResource } from '@/lib/cv-data'

function CourseResourcesContent() {
  const searchParams = useSearchParams()
  const sectionParam = searchParams.get('section')
  
  // Section Navigation (Courses i teach vs Study Materials)
  const [activeTab, setActiveTab] = useState<'courses' | 'materials'>('courses')
  
  // Selected course for details
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>('MED104')
  
  // Course accordion expansion
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1)

  // Filters for study materials
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [typeFilter, setTypeFilter] = useState<'All' | 'PDF' | 'PPT' | 'Infographic' | 'Video'>('All')

  useEffect(() => {
    if (sectionParam === 'materials') {
      setActiveTab('materials')
    } else if (sectionParam === 'courses') {
      setActiveTab('courses')
    }
  }, [sectionParam])

  const selectedCourse = coursesData.find(c => c.code === selectedCourseCode) || coursesData[0]

  // Filter study materials
  const filteredResources = studyResourcesData.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.courseCode.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = typeFilter === 'All' || resource.type === typeFilter
    return matchesSearch && matchesType
  })

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF': return FileText
      case 'Video': return Video
      case 'PPT': return Presentation
      case 'Infographic': return Layers
      default: return BookOpen
    }
  }

  return (
    <div className="space-y-12">
      {/* Tab Switcher */}
      <div className="flex justify-center border-b border-border">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-4 text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
              activeTab === 'courses'
                ? 'border-royal text-royal font-extrabold'
                : 'border-transparent text-muted-foreground hover:text-royal'
            }`}
          >
            Courses I Teach
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`pb-4 text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
              activeTab === 'materials'
                ? 'border-royal text-royal font-extrabold'
                : 'border-transparent text-muted-foreground hover:text-royal'
            }`}
          >
            Study Materials & Resources
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'courses' ? (
          <motion.div
            key="courses"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            id="courses"
          >
            {/* Sidebar list of courses */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Select Course
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {coursesData.map((course) => (
                  <button
                    key={course.code}
                    onClick={() => {
                      setSelectedCourseCode(course.code)
                      setExpandedUnit(1) // Reset expanded unit
                    }}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedCourseCode === course.code
                        ? 'border-royal/40 bg-royal/[0.03] shadow-md shadow-royal/5'
                        : 'border-border bg-card hover:border-royal/20 hover:shadow-sm'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-2.5 py-0.5 text-[10px] font-bold text-royal mb-2">
                      {course.code}
                    </span>
                    <h4 className="font-heading text-base font-bold text-navy dark:text-white leading-snug">
                      {course.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {course.semester}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Course details */}
            <div className="lg:col-span-8 space-y-8 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <div>
                <span className="text-xs font-extrabold text-royal tracking-widest uppercase">
                  {selectedCourse.semester}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-1 leading-tight">
                  {selectedCourse.title}
                </h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-gold" />
              </div>

              {/* Objectives & Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 bg-muted/40 p-5 rounded-2xl border border-border/40">
                  <h4 className="font-heading text-sm font-bold text-navy dark:text-white flex items-center gap-2">
                    <BookMarked className="h-4.5 w-4.5 text-royal" /> Course Objectives
                  </h4>
                  <ul className="space-y-2.5 text-xs text-muted-foreground">
                    {selectedCourse.objectives.map((obj, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-royal/80" />
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-muted/40 p-5 rounded-2xl border border-border/40">
                  <h4 className="font-heading text-sm font-bold text-navy dark:text-white flex items-center gap-2">
                    <CheckCircle className="h-4.5 w-4.5 text-emerald-500" /> Course Outcomes
                  </h4>
                  <ul className="space-y-2.5 text-xs text-muted-foreground">
                    {selectedCourse.outcomes.map((out, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                        <span className="leading-relaxed">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Syllabus Units (Accordion) */}
              <div className="space-y-4">
                <h4 className="font-heading text-sm font-bold text-navy dark:text-white border-b border-border pb-2">
                  Course Syllabus Content
                </h4>
                <div className="space-y-2.5">
                  {selectedCourse.units.map((unit) => {
                    const isExpanded = expandedUnit === unit.number
                    return (
                      <div
                        key={unit.number}
                        className="border border-border/70 rounded-2xl overflow-hidden transition-all bg-card shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                      >
                        <button
                          onClick={() => setExpandedUnit(isExpanded ? null : unit.number)}
                          className="w-full flex items-center justify-between p-4 text-left font-semibold text-navy dark:text-white hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm flex items-center gap-2.5">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-royal/10 text-[11px] font-bold text-royal">
                              U{unit.number}
                            </span>
                            {unit.title}
                          </span>
                          <ChevronDown className={`h-4.5 w-4.5 text-muted-foreground transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 pt-1 bg-muted/20 border-t border-border/40">
                                <ul className="space-y-2.5">
                                  {unit.topics.map((topic, index) => (
                                    <li key={index} className="flex gap-2.5 items-start text-xs leading-relaxed text-muted-foreground">
                                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Practicum & Suggested Readings */}
              <div className="space-y-6 pt-4 border-t border-border/60">
                {/* Practicum */}
                {selectedCourse.practicum && selectedCourse.practicum.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="font-heading text-sm font-bold text-navy dark:text-white flex items-center gap-2">
                      <Presentation className="h-4.5 w-4.5 text-gold" /> Practicum / Evaluation Schema
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {selectedCourse.practicum.map((prac, i) => (
                        <li key={i} className="flex items-center gap-2 bg-muted/40 px-3 py-2 rounded-xl border border-border/30">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          <span>{prac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Suggested Readings */}
                <div className="space-y-3 pt-4 border-t border-border/40">
                  <h4 className="font-heading text-sm font-bold text-navy dark:text-white flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-royal" /> Suggested Readings
                  </h4>
                  <ul className="space-y-2 max-h-56 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border">
                    {selectedCourse.readings.map((reading, i) => (
                      <li key={i} className="text-[11px] leading-relaxed text-muted-foreground bg-muted/20 px-3.5 py-2.5 rounded-xl border border-border/30">
                        {reading}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="materials"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
            id="materials"
          >
            {/* Search and Filters Layout */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card border border-border rounded-3xl p-5 shadow-sm">
              {/* Search Input */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-3 h-4.5 w-4.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources, lecture notes, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-border bg-muted/40 py-2.5 pl-11 pr-4 text-xs font-semibold text-foreground outline-none transition-colors focus:border-royal focus:bg-card"
                />
              </div>

              {/* Categories filters scroll list on mobile */}
              <div className="flex w-full md:w-auto overflow-x-auto pb-1 md:pb-0 gap-1.5 scrollbar-thin scrollbar-thumb-border">
                {(['All', 'PDF', 'PPT', 'Infographic', 'Video'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      typeFilter === type
                        ? 'bg-royal text-white shadow-md'
                        : 'border border-border bg-card text-muted-foreground hover:border-royal/30 hover:text-royal'
                    }`}
                  >
                    {type === 'All' ? (
                      <SlidersHorizontal className="h-3 w-3" />
                    ) : (
                      (() => {
                        const Icon = getIcon(type)
                        return <Icon className="h-3 w-3" />
                      })()
                    )}
                    {type === 'All' ? 'All Types' : `${type}s`}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources grid */}
            <div className="min-h-[300px]">
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => {
                    const TypeIcon = getIcon(resource.type)
                    return (
                      <motion.div
                        key={resource.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-royal/30 hover:shadow-lg transition-all"
                      >
                        <div>
                          {/* Thumbnail preview image if present */}
                          {resource.thumbnail && (
                            <div className="aspect-video w-full overflow-hidden rounded-2xl mb-4 border border-border/40 bg-muted relative">
                              <img
                                src={resource.thumbnail}
                                alt={resource.title}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                          )}
                          {/* Header bar */}
                          <div className="flex items-center justify-between gap-2 mb-3.5">
                            <span className="inline-flex items-center gap-1 rounded-full bg-royal/10 px-2.5 py-0.5 text-[9px] font-bold text-royal uppercase tracking-wider">
                              {resource.courseCode}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-[9px] font-bold text-muted-foreground uppercase">
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
                        <div className="mt-6 flex justify-between items-center border-t border-border/60 pt-4 text-xs font-semibold">
                          <span className="text-[10px] text-muted-foreground flex items-center gap-2">
                            {resource.fileSize && (
                              <span className="flex items-center gap-1">
                                <FileText className="h-3 w-3 opacity-60" /> {resource.fileSize}
                              </span>
                            )}
                            {resource.duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3 opacity-60" /> {resource.duration}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 opacity-60" /> {resource.date}
                            </span>
                          </span>
                          
                          {resource.link ? (
                            resource.type === 'Video' ? (
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-3.5 py-2 text-[10px] font-bold text-navy hover:bg-gold/90 transition-colors"
                              >
                                Watch Video <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <a
                                href={resource.link}
                                target={resource.link.startsWith('/read/') ? undefined : '_blank'}
                                rel={resource.link.startsWith('/read/') ? undefined : 'noopener noreferrer'}
                                className="inline-flex items-center gap-1.5 rounded-xl bg-royal px-3.5 py-2 text-[10px] font-bold text-white hover:bg-royal/95 transition-colors"
                              >
                                {resource.link.startsWith('/read/') ? 'Read Online' : 'Download'}
                                <Download className="h-3 w-3" />
                              </a>
                            )
                          ) : (
                            <span className="text-[10px] text-muted-foreground italic bg-muted px-2.5 py-1.5 rounded-xl border border-border/40">No file attachment</span>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              ) : (
                <div className="py-24 text-center text-muted-foreground text-sm flex flex-col items-center justify-center gap-2 bg-card border border-border rounded-3xl">
                  <Layers className="h-10 w-10 text-muted-foreground/60 mb-2" />
                  No resources found matching the parameters.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CourseResourcesPage() {
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
              <span className="text-navy dark:text-white">Course Materials &amp; Resources</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Course Materials &amp; Resources
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Access comprehensive syllabi, download reference guides, review presentation slides, and stream lectures for M.Ed. programs taught by Dr. Vimal Singh.
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading resource dashboard...</div>}>
        <CourseResourcesContent />
      </Suspense>
    </div>
  )
}
