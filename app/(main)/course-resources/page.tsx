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
  Award,
  X,
  Maximize2,
  Info,
  GraduationCap,
  FileCheck,
  HelpCircle
} from 'lucide-react'
import Link from 'next/link'
import { coursesData, studyResourcesData, pyqsData, Course, StudyResource, PYQItem } from '@/lib/cv-data'

function YouTubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function CourseResourcesContent() {
  const searchParams = useSearchParams()
  const sectionParam = searchParams.get('section')
  const examParam = searchParams.get('exam')
  
  // Section Navigation (Courses i teach vs Study Materials vs PYQs)
  const [activeTab, setActiveTab] = useState<'courses' | 'materials' | 'pyqs'>('courses')
  
  // PYQ Filter
  const [pyqExamFilter, setPyqExamFilter] = useState<'All' | 'Mid Term' | 'End Term'>('All')

  // Selected course for details
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>('MED104')
  
  // Course accordion expansion
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1)

  // Filters for study materials
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [typeFilter, setTypeFilter] = useState<'All' | 'PDF' | 'PPT' | 'Infographic' | 'Video'>('All')

  // Selected infographic for interactive lightbox modal
  const [selectedInfographic, setSelectedInfographic] = useState<StudyResource | null>(null)
  // Expanded section index inside the infographic details modal
  const [infoExpandedSection, setInfoExpandedSection] = useState<number | null>(0)

  useEffect(() => {
    if (sectionParam === 'pyqs') {
      setActiveTab('pyqs')
      if (examParam === 'midterm') {
        setPyqExamFilter('Mid Term')
      } else if (examParam === 'endterm') {
        setPyqExamFilter('End Term')
      }
    } else if (sectionParam === 'materials' || sectionParam === 'infographics') {
      setActiveTab('materials')
    } else if (sectionParam === 'courses') {
      setActiveTab('courses')
    }
  }, [sectionParam, examParam])

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

  // Filter PYQs
  const filteredPyqs = pyqsData.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.year.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesExam = pyqExamFilter === 'All' || paper.examType === pyqExamFilter
    return matchesSearch && matchesExam
  })

  const midTermPyqs = filteredPyqs.filter(p => p.examType === 'Mid Term')
  const endTermPyqs = filteredPyqs.filter(p => p.examType === 'End Term')

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
      {/* Featured YouTube Channel Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-600/10 via-background to-red-500/5 p-6 sm:p-8 shadow-sm transition-all hover:border-red-500/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/25">
              <YouTubeIcon className="h-7 w-7" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/15 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
                Official Video Lectures Channel
              </span>
              <h3 className="font-heading text-xl font-bold text-navy dark:text-white sm:text-2xl">
                Dr. Vimal Singh — Educational Video Lectures
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Access full-length video lectures, research methodology tutorials, AI in education series, and M.Ed./B.Ed. curriculum study resources on YouTube.
              </p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/channel/UCYC9VAGknO1Ug3yJsLVRWXA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-red-600/20 hover:bg-red-700 hover:scale-[1.02] transition-all duration-300"
          >
            <YouTubeIcon className="h-4 w-4" /> Visit YouTube Channel <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center border-b border-border">
        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
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
          <button
            onClick={() => setActiveTab('pyqs')}
            className={`pb-4 text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'pyqs'
                ? 'border-royal text-royal font-extrabold'
                : 'border-transparent text-muted-foreground hover:text-royal'
            }`}
          >
            <FileCheck className="h-4 w-4" />
            PYQs (Previous Year Questions)
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
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Select Course
              </h3>
              {coursesData.map((course) => {
                const isSelected = course.code === selectedCourseCode
                return (
                  <button
                    key={course.code}
                    onClick={() => {
                      setSelectedCourseCode(course.code)
                      setExpandedUnit(1)
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'border-royal bg-royal/5 shadow-md dark:bg-royal/10'
                        : 'border-border bg-card hover:border-royal/50 hover:bg-muted/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-extrabold px-2 py-0.5 rounded-md ${
                          isSelected ? 'bg-royal text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                          {course.code}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          {course.semester}
                        </span>
                      </div>
                      <h4 className="font-heading text-sm font-bold text-navy dark:text-white mt-2 leading-snug">
                        {course.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {course.program} &bull; {course.credits} Credits
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Course Details Main Panel */}
            <div className="lg:col-span-8 space-y-6">
              {selectedCourse && (
                <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
                  {/* Header info */}
                  <div className="border-b border-border pb-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-royal text-white text-xs font-extrabold px-3 py-1 rounded-lg">
                          {selectedCourse.code}
                        </span>
                        <span className="text-xs font-bold text-royal bg-royal/10 px-3 py-1 rounded-lg">
                          {selectedCourse.program}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                        <BookMarked className="h-4 w-4 text-gold" /> {selectedCourse.credits} Academic Credits
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-navy dark:text-white sm:text-3xl mt-3">
                      {selectedCourse.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {selectedCourse.description}
                    </p>
                  </div>

                  {/* Course Objectives */}
                  {selectedCourse.objectives && selectedCourse.objectives.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy dark:text-white flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-royal" /> Course Learning Objectives
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedCourse.objectives.map((obj, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/40 p-3 rounded-xl border border-border/40">
                            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Course Syllabus Units Accordion */}
                  <div className="space-y-3 pt-2">
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy dark:text-white flex items-center gap-2">
                      <Layers className="h-4 w-4 text-royal" /> Syllabus Modules &amp; Topics
                    </h3>
                    <div className="space-y-3">
                      {selectedCourse.units.map((unit) => {
                        const isExpanded = expandedUnit === unit.unitNumber
                        return (
                          <div
                            key={unit.unitNumber}
                            className="border border-border/70 rounded-2xl overflow-hidden transition-all bg-muted/10 hover:bg-muted/30"
                          >
                            <button
                              onClick={() => setExpandedUnit(isExpanded ? null : unit.unitNumber)}
                              className="w-full flex items-center justify-between p-4 text-left font-semibold text-navy dark:text-white hover:bg-muted/40 transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-royal/10 text-xs font-bold text-royal">
                                  {unit.unitNumber}
                                </span>
                                <span className="text-sm font-bold text-navy dark:text-white">
                                  {unit.title}
                                </span>
                              </div>
                              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
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
                                  <div className="p-4 pt-0 border-t border-border/30">
                                    <ul className="space-y-2 mt-3">
                                      {unit.topics.map((topic, tIdx) => (
                                        <li key={tIdx} className="flex gap-2 items-start text-xs leading-relaxed text-muted-foreground">
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

                  {/* References */}
                  {selectedCourse.references && selectedCourse.references.length > 0 && (
                    <div className="space-y-3 border-t border-border pt-6">
                      <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Recommended Readings &amp; References
                      </h3>
                      <ul className="space-y-1.5">
                        {selectedCourse.references.map((ref, rIdx) => (
                          <li key={rIdx} className="text-xs text-muted-foreground italic flex items-start gap-2">
                            <span className="text-royal font-bold">&bull;</span>
                            <span>{ref}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ) : activeTab === 'materials' ? (
          <motion.div
            key="materials"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
            id="materials"
          >
            {/* Filter controls bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search resources, topics, or course codes..."
                  className="w-full rounded-2xl border border-border bg-muted/30 pl-9 pr-4 py-2.5 text-xs focus:border-royal focus:outline-none dark:border-slate-800"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Resource Type Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {(['All', 'PDF', 'PPT', 'Infographic', 'Video'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      typeFilter === type
                        ? 'bg-royal text-white shadow-sm'
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Study Material Grid */}
            <div className="space-y-4">
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => {
                    const IconComp = getIcon(resource.type)
                    const isInfographic = resource.type === 'Infographic' || resource.type === 'PPT'

                    return (
                      <motion.div
                        key={resource.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => isInfographic ? setSelectedInfographic(resource) : null}
                        className={`group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-royal/40 hover:shadow-xl dark:border-slate-800 ${
                          isInfographic ? 'cursor-pointer' : ''
                        }`}
                      >
                        <div>
                          {/* Top badge */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex items-center gap-1.5 rounded-xl bg-royal/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-royal">
                              <IconComp className="h-3.5 w-3.5" />
                              {resource.type}
                            </span>
                            <span className="text-[11px] font-semibold text-muted-foreground">
                              {resource.courseCode}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-heading text-base font-bold text-navy dark:text-white group-hover:text-royal transition-colors leading-snug">
                            {resource.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                            {resource.desc}
                          </p>

                          {/* Infographic Preview Badge if interactive */}
                          {isInfographic && (
                            <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-gold group-hover:underline">
                              <Maximize2 className="h-3 w-3" /> View Interactive Infographic Details &bull;
                            </div>
                          )}
                        </div>

                        {/* Footer details */}
                        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                          <span className="text-[10px] font-medium text-muted-foreground">
                            {resource.fileSize || resource.date}
                          </span>

                          {resource.link ? (
                            isInfographic ? (
                              <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 rounded-xl bg-royal/10 px-2.5 py-1 text-[10px] font-bold text-royal">
                                  Details <Maximize2 className="h-3 w-3" />
                                </span>
                                <a
                                  href={resource.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-1 rounded-xl bg-royal px-2.5 py-1 text-[10px] font-bold text-white hover:bg-royal/95 transition-colors"
                                >
                                  <Download className="h-3 w-3" />
                                </a>
                              </div>
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
        ) : activeTab === 'pyqs' ? (
          <motion.div
            key="pyqs"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
            id="pyqs"
          >
            {/* Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-royal/10 text-royal">
                    <FileCheck className="h-4 w-4" />
                  </span>
                  <h2 className="font-heading text-xl font-bold text-navy dark:text-white">
                    Previous Year Question Papers (PYQs)
                  </h2>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Official Mid Term and End Term Examination Question Papers for M.Ed. & B.Ed. Courses.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Search box */}
                <div className="relative min-w-[220px]">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search paper by course/year..."
                    className="w-full rounded-2xl border border-border bg-muted/30 pl-9 pr-4 py-2 text-xs focus:border-royal focus:outline-none dark:border-slate-800"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Sub-Category Filter Pills */}
                <div className="flex items-center gap-1 rounded-2xl border border-border bg-muted/40 p-1">
                  <button
                    onClick={() => setPyqExamFilter('All')}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      pyqExamFilter === 'All'
                        ? 'bg-royal text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All Papers ({pyqsData.length})
                  </button>
                  <button
                    onClick={() => setPyqExamFilter('Mid Term')}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      pyqExamFilter === 'Mid Term'
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Mid Term ({midTermPyqs.length})
                  </button>
                  <button
                    onClick={() => setPyqExamFilter('End Term')}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      pyqExamFilter === 'End Term'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    End Term ({endTermPyqs.length})
                  </button>
                </div>
              </div>
            </div>

            {/* SECTION 1: Mid Term Examination Papers */}
            {(pyqExamFilter === 'All' || pyqExamFilter === 'Mid Term') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                      <FileText className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy dark:text-white">
                        Mid Term Examination Papers
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        मध्य सत्र परीक्षा प्रश्न पत्र (Internal & Mid-Semester Assessments)
                      </p>
                    </div>
                  </div>
                  {midTermPyqs.length > 0 && (
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {midTermPyqs.length} Paper{midTermPyqs.length === 1 ? '' : 's'} Available
                    </span>
                  )}
                </div>

                {midTermPyqs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {midTermPyqs.map((paper) => (
                      <div
                        key={paper.id}
                        className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl dark:border-slate-800"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="rounded-xl bg-amber-500/15 px-2.5 py-1 text-[11px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                                {paper.examType}
                              </span>
                              <span className="rounded-xl bg-royal/10 px-2.5 py-1 text-[11px] font-bold text-royal">
                                {paper.courseCode}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" /> {paper.year}
                            </span>
                          </div>

                          <h4 className="font-heading text-base font-bold text-navy dark:text-white group-hover:text-amber-600 transition-colors leading-snug">
                            {paper.title}
                          </h4>

                          <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                            {paper.desc}
                          </p>

                          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-3">
                            {paper.duration && (
                              <span className="flex items-center gap-1 font-medium">
                                <Clock className="h-3.5 w-3.5 text-amber-600" /> {paper.duration}
                              </span>
                            )}
                            {paper.totalMarks && (
                              <span className="flex items-center gap-1 font-medium">
                                <Award className="h-3.5 w-3.5 text-amber-600" /> Max Marks: {paper.totalMarks}
                              </span>
                            )}
                            <span className="font-medium text-muted-foreground">
                              {paper.semester}
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                          <span className="text-[11px] text-muted-foreground font-mono">
                            {paper.fileSize}
                          </span>
                          <div className="flex items-center gap-2">
                            <a
                              href={paper.link}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-amber-700 transition-all cursor-pointer"
                            >
                              <Download className="h-3.5 w-3.5" /> Download Question Paper
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-border/70 p-6 text-center text-xs text-muted-foreground bg-muted/10">
                    Abhi koi Mid Term question paper upload nahi hai. Soon papers will be uploaded here.
                  </div>
                )}
              </div>
            )}

            {/* SECTION 2: End Term Examination Papers */}
            {(pyqExamFilter === 'All' || pyqExamFilter === 'End Term') && (
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy dark:text-white">
                        End Term Examination Papers
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        अंत सत्र परीक्षा प्रश्न पत्र (University Semester End Examinations)
                      </p>
                    </div>
                  </div>
                  {endTermPyqs.length > 0 && (
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {endTermPyqs.length} Paper{endTermPyqs.length === 1 ? '' : 's'} Available
                    </span>
                  )}
                </div>

                {endTermPyqs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {endTermPyqs.map((paper) => (
                      <div
                        key={paper.id}
                        className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl dark:border-slate-800"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="rounded-xl bg-emerald-500/15 px-2.5 py-1 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                                {paper.examType}
                              </span>
                              <span className="rounded-xl bg-royal/10 px-2.5 py-1 text-[11px] font-bold text-royal">
                                {paper.courseCode}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" /> {paper.year}
                            </span>
                          </div>

                          <h4 className="font-heading text-base font-bold text-navy dark:text-white group-hover:text-emerald-600 transition-colors leading-snug">
                            {paper.title}
                          </h4>

                          <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                            {paper.desc}
                          </p>

                          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-3">
                            {paper.duration && (
                              <span className="flex items-center gap-1 font-medium">
                                <Clock className="h-3.5 w-3.5 text-emerald-600" /> {paper.duration}
                              </span>
                            )}
                            {paper.totalMarks && (
                              <span className="flex items-center gap-1 font-medium">
                                <Award className="h-3.5 w-3.5 text-emerald-600" /> Max Marks: {paper.totalMarks}
                              </span>
                            )}
                            <span className="font-medium text-muted-foreground">
                              {paper.semester}
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                          <span className="text-[11px] text-muted-foreground font-mono">
                            {paper.fileSize}
                          </span>
                          <div className="flex items-center gap-2">
                            <a
                              href={paper.link}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
                            >
                              <Download className="h-3.5 w-3.5" /> Download Question Paper
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-border/70 p-6 text-center text-xs text-muted-foreground bg-muted/10">
                    Abhi koi End Term question paper upload nahi hai. Soon papers will be uploaded here.
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Lightbox / Modal with Details */}
      <AnimatePresence>
        {selectedInfographic && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInfographic(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                className="relative w-full max-w-6xl rounded-3xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedInfographic(null)}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 hover:scale-105 transition-all cursor-pointer shadow-md"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: High-res Scrollable Image */}
                <div className={`flex flex-col flex-1 p-6 ${selectedInfographic.details ? 'md:w-1/2 border-b md:border-b-0 md:border-r border-border/60' : 'w-full'} bg-muted/30 overflow-hidden`}>
                  <div className="flex items-center justify-between mb-4 pr-10">
                    <div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-royal/10 px-2.5 py-0.5 text-[9px] font-bold text-royal uppercase tracking-wider mb-1">
                        {selectedInfographic.courseCode} {selectedInfographic.type}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-navy dark:text-white leading-tight">
                        {selectedInfographic.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Scrollable image / preview container */}
                  <div className="flex-1 overflow-y-auto rounded-2xl border border-border/40 bg-black/5 dark:bg-white/5 relative flex items-start justify-center p-2 scrollbar-thin scrollbar-thumb-border">
                    {selectedInfographic.type === 'PPT' ? (
                      <div className="w-full h-full min-h-[250px] p-6 rounded-xl bg-gradient-to-br from-navy/90 to-royal/90 text-white flex flex-col justify-between shadow-inner">
                        <div className="flex justify-between items-center">
                          <span className="bg-gold/20 text-gold text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5">
                            <Presentation className="h-4 w-4" /> PPT Presentation Deck
                          </span>
                          <span className="text-xs text-white/70 font-mono">RM_104</span>
                        </div>
                        <div className="my-6 space-y-2">
                          <h4 className="font-heading text-xl font-bold leading-snug">{selectedInfographic.title}</h4>
                          <p className="text-xs text-white/80 leading-relaxed">{selectedInfographic.desc}</p>
                        </div>
                        <div className="border-t border-white/15 pt-4 flex items-center justify-between text-xs text-white/70">
                          <span>Prepared by Dr. Vimal Singh</span>
                          <span>{selectedInfographic.fileSize || 'Presentation'}</span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={selectedInfographic.link}
                        alt={selectedInfographic.title}
                        className="max-w-full h-auto object-contain rounded-lg shadow-sm"
                      />
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-3">
                    <a
                      href={selectedInfographic.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-muted px-4 py-2.5 text-xs font-bold text-foreground border border-border hover:bg-muted/70 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-royal" /> {selectedInfographic.type === 'PPT' ? 'Open PDF Presentation' : 'Open High Resolution'}
                    </a>
                    <a
                      href={selectedInfographic.link}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-royal px-4 py-2.5 text-xs font-bold text-white hover:bg-royal/95 transition-colors"
                    >
                      <Download className="h-4 w-4" /> {selectedInfographic.type === 'PPT' ? 'Download Slides' : 'Download Poster'}
                    </a>
                  </div>
                </div>

                {/* Right Side: Text Transcription / Details Panel */}
                {selectedInfographic.details && selectedInfographic.details.length > 0 && (
                  <div className="flex flex-col md:w-1/2 p-6 overflow-hidden bg-card">
                    <div className="flex items-center gap-2 border-b border-border/60 pb-3.5 mb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal/10 text-royal">
                        <Info className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-navy dark:text-white">
                          Infographic Overview & Text
                        </h4>
                        <p className="text-[10px] text-muted-foreground leading-none mt-0.5">
                          Detailed content transcript & explanation
                        </p>
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto pr-1 space-y-3.5 scrollbar-thin scrollbar-thumb-border">
                      {selectedInfographic.details.map((section, idx) => {
                        const isExpanded = infoExpandedSection === idx
                        return (
                          <div
                            key={idx}
                            className="border border-border/50 rounded-2xl overflow-hidden transition-all bg-muted/10 hover:bg-muted/20"
                          >
                            <button
                              onClick={() => setInfoExpandedSection(isExpanded ? null : idx)}
                              className="w-full flex items-center justify-between p-4 text-left font-semibold text-navy dark:text-white hover:bg-muted/30 transition-colors cursor-pointer"
                            >
                              <span className="text-xs font-bold text-navy dark:text-white">
                                {section.sectionTitle}
                              </span>
                              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
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
                                  <div className="p-4 pt-0 border-t border-border/20">
                                    <ul className="space-y-3 mt-3">
                                      {section.points.map((pt, pIdx) => (
                                        <li key={pIdx} className="flex gap-2.5 items-start text-xs leading-relaxed text-muted-foreground">
                                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                          <span className="whitespace-pre-line">{pt}</span>
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
                )}
              </motion.div>
            </div>
          </div>
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
          Access comprehensive syllabi, download reference guides, review presentation slides, previous year question papers (PYQs), and stream lectures for M.Ed. programs taught by Dr. Vimal Singh.
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading resource dashboard...</div>}>
        <CourseResourcesContent />
      </Suspense>
    </div>
  )
}
