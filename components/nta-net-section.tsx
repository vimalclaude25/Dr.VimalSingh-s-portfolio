'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  FileText,
  Video,
  Award,
  Search,
  Download,
  Play,
  CheckCircle,
  XCircle,
  HelpCircle,
  BookMarked,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { ntaNetResourcesData, NtaNetResource } from '@/lib/cv-data'

const categories = [
  { id: 'all', label: 'All Resources', icon: BookOpen },
  { id: 'preparation', label: 'NET Preparation', icon: BookMarked },
  { id: 'materials', label: 'Study Materials', icon: FileText },
  { id: 'mcqs', label: 'MCQ Practice', icon: HelpCircle },
  { id: 'videos', label: 'Video Library', icon: Video },
  { id: 'success', label: 'Success Stories', icon: Award },
]

const quizQuestions = [
  {
    id: 1,
    question: "Which of the following research methods is most appropriate for establishing a cause-and-effect relationship?",
    options: [
      "Descriptive Survey Method",
      "Historical Analysis Method",
      "Experimental Method",
      "Philosophical Hermeneutics"
    ],
    answer: 2,
    explanation: "The experimental method is the only design that directly manipulates the independent variable to observe its effect on the dependent variable while controlling extraneous variables, establishing cause-and-effect."
  },
  {
    id: 2,
    question: "Under NEP 2020, what is the proposed pedagogical structure replacing the 10+2 schooling system?",
    options: [
      "5+3+3+4 structure",
      "3+4+3+2 structure",
      "5+4+3+3 structure",
      "6+3+3+4 structure"
    ],
    answer: 0,
    explanation: "NEP 2020 replaces the legacy 10+2 system with a new 5+3+3+4 cognitive developmental structure: Foundational (5 years), Preparatory (3 years), Middle (3 years), and Secondary (4 years)."
  }
]

export function NtaNetSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  
  // Interactive Quiz States
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false)

  const filteredResources = ntaNetResourcesData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const currentQuiz = quizQuestions[currentQuizIndex]

  const handleQuizAnswer = (optionIdx: number) => {
    if (quizSubmitted) return
    setSelectedOption(optionIdx)
  }

  const submitQuiz = () => {
    if (selectedOption === null) return
    setQuizSubmitted(true)
  }

  const nextQuiz = () => {
    setSelectedOption(null)
    setQuizSubmitted(false)
    setCurrentQuizIndex((prev) => (prev + 1) % quizQuestions.length)
  }

  return (
    <section id="nta-net" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
          NTA UGC NET Portal
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
          NTA NET Learning Hub
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
          Access high-yield study resources, download core notes, practice topic-wise mock questions, and explore recorded classes designed specifically for Education (Paper II) and Paper I aspirants.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left 2 Columns: Learning Dashboard */}
        <div className="lg:col-span-2 space-y-6">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4">
            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </span>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-4 text-xs font-medium focus:border-royal focus:outline-none focus:ring-1 focus:ring-royal dark:text-white"
              />
            </div>
            
            <div className="text-xs text-muted-foreground font-semibold flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-royal" /> Showing {filteredResources.length} learning modules
            </div>
          </div>

          {/* Categories Tab Selector */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-royal text-white shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-royal/10 hover:text-royal'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Resources Grid List */}
          <div className="min-h-[400px]">
            {filteredResources.length > 0 ? (
              <motion.div
                layout
                className="grid gap-4 sm:grid-cols-2"
              >
                <AnimatePresence mode="popLayout">
                  {filteredResources.map((res) => (
                    <motion.div
                      key={res.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-royal/30 hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-royal/15 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-royal">
                            {res.subcategory}
                          </span>
                          <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                            {res.type}
                          </span>
                        </div>
                        <h3 className="font-heading text-sm font-bold text-navy dark:text-white leading-snug">
                          {res.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {res.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs">
                        {res.fileSize && (
                          <span className="text-muted-foreground font-medium">Size: {res.fileSize}</span>
                        )}
                        {res.duration && (
                          <span className="text-muted-foreground font-medium">Duration: {res.duration}</span>
                        )}
                        {!res.fileSize && !res.duration && (
                          <span className="text-royal font-bold">Interactive Module</span>
                        )}
                        
                        <a
                          href={res.link || '#'}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-royal/5 border border-royal/10 hover:bg-royal hover:text-white px-3.5 py-1.5 text-xs font-bold text-royal transition-all"
                        >
                          {res.type === 'PDF' || res.type === 'PPT' ? (
                            <>
                              Download <Download className="h-3 w-3" />
                            </>
                          ) : res.type === 'Video' ? (
                            <>
                              Play <Play className="h-3 w-3 fill-current" />
                            </>
                          ) : (
                            <>
                              Access Portal <ArrowRight className="h-3 w-3" />
                            </>
                          )}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground">
                No UGC NET learning modules found. Try a different filter or search.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Quiz Arena & Quick Access */}
        <div className="space-y-6">
          {/* Interactive Quiz Panel */}
          <div className="rounded-3xl bg-navy p-6 shadow-xl text-white">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading text-sm font-bold flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-gold" /> Daily Quiz Arena
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-md text-gold">
                UGC NET Prep
              </span>
            </div>

            <div className="min-h-[220px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-white/50 font-bold uppercase">
                  Question {currentQuizIndex + 1} of {quizQuestions.length}
                </span>
                <p className="mt-1 text-sm font-semibold leading-relaxed">
                  {currentQuiz.question}
                </p>

                <div className="mt-4 space-y-2">
                  {currentQuiz.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx
                    let optStyle = 'border-white/10 bg-white/5 hover:bg-white/10'
                    if (isSelected) {
                      optStyle = 'border-gold bg-gold/10'
                    }
                    if (quizSubmitted) {
                      if (idx === currentQuiz.answer) {
                        optStyle = 'border-emerald-400 bg-emerald-400/20 text-emerald-300'
                      } else if (isSelected) {
                        optStyle = 'border-red-400 bg-red-400/20 text-red-300'
                      } else {
                        optStyle = 'border-white/5 bg-white/5 opacity-55'
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        disabled={quizSubmitted}
                        className={`flex w-full items-center justify-between rounded-xl border p-3 text-left text-xs font-semibold transition-all cursor-pointer ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {quizSubmitted && idx === currentQuiz.answer && (
                          <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                        )}
                        {quizSubmitted && isSelected && idx !== currentQuiz.answer && (
                          <XCircle className="h-4 w-4 text-red-400 shrink-0 ml-2" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                {quizSubmitted ? (
                  <button
                    onClick={nextQuiz}
                    className="flex w-full items-center justify-center gap-1 rounded-xl bg-white px-4 py-2 text-xs font-bold text-navy transition-all hover:bg-gold hover:text-navy cursor-pointer"
                  >
                    Next Question <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={submitQuiz}
                    disabled={selectedOption === null}
                    className={`flex w-full items-center justify-center gap-1 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                      selectedOption !== null
                        ? 'bg-gold text-navy hover:scale-105 shadow'
                        : 'bg-white/10 text-white/50 cursor-not-allowed'
                    }`}
                  >
                    Submit Answer
                  </button>
                )}
              </div>
            </div>

            {/* Explanation Block */}
            <AnimatePresence>
              {quizSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 rounded-xl bg-white/5 p-3 text-[11px] leading-relaxed text-white/80 border border-white/10 overflow-hidden"
                >
                  <strong className="text-gold block mb-1">Explanation:</strong>
                  {currentQuiz.explanation}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portal Stats Board */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-heading text-sm font-bold text-navy dark:text-white border-b border-border pb-3 mb-4">
              Learning Hub Impact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">NET Aspirants Guided</span>
                <span className="text-sm font-bold text-navy dark:text-white">1,500+</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs font-medium text-muted-foreground">JRF Awardees</span>
                <span className="text-sm font-bold text-navy dark:text-white">18 Scholars</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs font-medium text-muted-foreground">NET Qualifications</span>
                <span className="text-sm font-bold text-navy dark:text-white">120+ Students</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs font-medium text-muted-foreground">Curricula Chapters</span>
                <span className="text-sm font-bold text-navy dark:text-white">10 Core Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
