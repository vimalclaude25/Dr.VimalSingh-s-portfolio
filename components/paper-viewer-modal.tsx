'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Download, 
  Printer, 
  BookOpen, 
  Clock, 
  Award, 
  Search, 
  CheckCircle2, 
  Globe, 
  ChevronRight,
  Sparkles,
  Layers,
  Eye
} from 'lucide-react'
import { med104PaperData, med305PaperData, ExamPaperDetail } from '@/lib/med-papers-data'

interface PaperViewerModalProps {
  paperId: 'MED104' | 'MED305' | null
  isOpen: boolean
  onClose: () => void
}

export const PaperViewerModal: React.FC<PaperViewerModalProps> = ({
  paperId,
  isOpen,
  onClose
}) => {
  const [langMode, setLangMode] = useState<'bilingual' | 'en' | 'hi'>('bilingual')
  const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false)

  if (!paperId) return null

  const paper: ExamPaperDetail = paperId === 'MED104' ? med104PaperData : med305PaperData
  const activeSection = paper.sections[activeSectionIdx] || paper.sections[0]

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
          {/* Backdrop Click to Close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-5xl rounded-3xl border border-amber-500/30 bg-card text-card-foreground shadow-2xl overflow-hidden max-h-[92vh] flex flex-col dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-royal p-5 sm:p-7 text-white relative flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-100 backdrop-blur-md">
                    {paper.department}
                  </span>
                  <span className="rounded-full bg-amber-400/30 px-3 py-0.5 text-[11px] font-bold text-white">
                    {paper.session}
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                  {paper.examName} — {paper.title}
                </h2>
                <p className="text-xs text-amber-100/90 font-medium">
                  {paper.university} • Course Code: <span className="font-mono font-bold text-amber-300">{paper.courseCode}</span>
                </p>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2 self-start md:self-center">
                <button
                  onClick={handlePrint}
                  title="Print Question Paper"
                  className="rounded-xl bg-white/15 p-2 text-white hover:bg-white/25 transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold px-3"
                >
                  <Printer className="h-4 w-4" /> Print Paper
                </button>
                <button
                  onClick={onClose}
                  className="rounded-xl bg-black/20 p-2 text-white hover:bg-black/40 transition-all cursor-pointer ml-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Sub-Header Metadata & Controls */}
            <div className="border-b border-border bg-muted/40 p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold">
                  <Clock className="h-4 w-4" /> {paper.maxTime}
                </span>
                <span className="flex items-center gap-1.5 text-royal dark:text-blue-400 font-bold">
                  <Award className="h-4 w-4" /> Max Marks: {paper.maxMarks}
                </span>
                <span className="text-muted-foreground">
                  {paper.note}
                </span>
              </div>

              {/* Language Switcher & Answer Key Toggle */}
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-xl border border-border bg-background p-1 text-xs">
                  <button
                    onClick={() => setLangMode('bilingual')}
                    className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                      langMode === 'bilingual' ? 'bg-amber-500 text-white shadow-sm' : 'text-muted-foreground'
                    }`}
                  >
                    Bilingual
                  </button>
                  <button
                    onClick={() => setLangMode('en')}
                    className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                      langMode === 'en' ? 'bg-amber-500 text-white shadow-sm' : 'text-muted-foreground'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLangMode('hi')}
                    className={`rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                      langMode === 'hi' ? 'bg-amber-500 text-white shadow-sm' : 'text-muted-foreground'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>

                <button
                  onClick={() => setShowAnswerKey(!showAnswerKey)}
                  className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold border transition-all cursor-pointer ${
                    showAnswerKey 
                      ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' 
                      : 'border-border bg-background text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {showAnswerKey ? 'Answer Key On' : 'Show Answer Key'}
                </button>
              </div>
            </div>

            {/* Section Quick Jump Tabs */}
            <div className="flex border-b border-border bg-muted/20 px-4 pt-2 gap-2 overflow-x-auto">
              {paper.sections.map((sec, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSectionIdx(idx)
                    const el = document.getElementById(`paper-sec-${idx}`)
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeSectionIdx === idx
                      ? 'border-amber-500 text-amber-600 dark:text-amber-400 bg-background rounded-t-xl shadow-xs'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  {sec.title} ({sec.marks})
                </button>
              ))}
            </div>

            {/* Question Content Body (Rendering ALL Sections A, B, C) */}
            <div className="p-6 overflow-y-auto space-y-10 flex-1 bg-gradient-to-b from-background via-background to-muted/10 scrollbar-thin scrollbar-thumb-border">
              {paper.sections.map((sec, secIdx) => (
                <div key={secIdx} id={`paper-sec-${secIdx}`} className="space-y-6 scroll-mt-6">
                  {/* Section Instruction Banner */}
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4.5 flex items-start gap-3.5 text-xs text-amber-950 dark:text-amber-100 shadow-xs">
                    <Sparkles className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-base text-amber-900 dark:text-amber-300">
                        {sec.title} — {sec.marks}
                      </h4>
                      {sec.instructions && (
                        <p className="mt-1 font-semibold text-amber-800 dark:text-amber-300/90">{sec.instructions}</p>
                      )}
                    </div>
                  </div>

                  {/* Section Questions */}
                  <div className="space-y-6">
                    {sec.questions.map((q: any, qIdx: number) => (
                      <div
                        key={q.id || qIdx}
                        className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-amber-500/30 hover:shadow-md"
                      >
                        {/* Question Header */}
                        <div className="flex items-start gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-royal/10 text-royal font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                            {q.qNum || (qIdx + 1)}
                          </span>
                          <div className="space-y-2.5 flex-1">
                            {/* English Question Text */}
                            {(langMode === 'bilingual' || langMode === 'en') && q.textEn && (
                              <p className="text-sm font-bold text-foreground leading-relaxed whitespace-pre-line">
                                {q.textEn}
                              </p>
                            )}
                            {/* Hindi Question Text */}
                            {(langMode === 'bilingual' || langMode === 'hi') && q.textHi && (
                              <p className="text-sm font-semibold text-muted-foreground leading-relaxed whitespace-pre-line border-t border-border/40 pt-2 font-serif">
                                {q.textHi}
                              </p>
                            )}

                            {/* Question Statements (If present) */}
                            {q.statements && q.statements.length > 0 && (
                              <div className="mt-4 rounded-2xl border border-border/70 bg-muted/20 p-4 space-y-3">
                                <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                                  <BookOpen className="h-3.5 w-3.5 text-amber-600" /> Statements / कथन:
                                </h5>
                                <div className="grid grid-cols-1 gap-2.5">
                                  {q.statements.map((st: any) => (
                                    <div key={st.num} className="flex items-start gap-2.5 text-xs">
                                      <span className="rounded-md bg-amber-500/10 px-2 py-0.5 font-mono font-bold text-amber-600 flex-shrink-0">
                                        {st.num}
                                      </span>
                                      <div className="space-y-0.5 flex-1">
                                        {(langMode === 'bilingual' || langMode === 'en') && (
                                          <p className="text-foreground font-medium">{st.textEn}</p>
                                        )}
                                        {(langMode === 'bilingual' || langMode === 'hi') && (
                                          <p className="text-muted-foreground font-serif">{st.textHi}</p>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Matching Table if present */}
                            {q.matchingTable && (
                              <div className="mt-4 rounded-2xl border border-border bg-background overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 bg-muted/60 p-3 text-xs font-bold border-b border-border">
                                  <div>{q.matchingTable.col1Title}</div>
                                  <div>{q.matchingTable.col2Title}</div>
                                </div>
                                <div className="divide-y divide-border/60">
                                  {q.matchingTable.rows.map((row: any, rIdx: number) => (
                                    <div key={rIdx} className="grid grid-cols-1 md:grid-cols-2 p-3 text-xs gap-2">
                                      <div className="font-semibold text-royal">{row.col1}</div>
                                      <div className="text-muted-foreground">{row.col2}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Options Grid (Multiple Choice Questions) */}
                            {q.options && q.options.length > 0 && (
                              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {q.options.map((opt: any, optIdx: number) => {
                                  const isCorrect = showAnswerKey && opt.correct
                                  return (
                                    <div
                                      key={optIdx}
                                      className={`flex items-start gap-2.5 rounded-2xl border p-3 text-xs transition-all ${
                                        isCorrect
                                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/30'
                                          : 'border-border bg-background/80 text-foreground hover:border-amber-500/40'
                                      }`}
                                    >
                                      <span className={`flex h-6 w-6 items-center justify-center rounded-lg font-bold text-xs flex-shrink-0 uppercase ${
                                        isCorrect ? 'bg-emerald-600 text-white' : 'bg-muted text-muted-foreground'
                                      }`}>
                                        {opt.code}
                                      </span>
                                      <div className="space-y-0.5 flex-1">
                                        {(langMode === 'bilingual' || langMode === 'en') && opt.textEn && (
                                          <p className="font-semibold">{opt.textEn}</p>
                                        )}
                                        {opt.text && <p className="font-semibold">{opt.text}</p>}
                                        {(langMode === 'bilingual' || langMode === 'hi') && opt.textHi && (
                                          <p className="text-muted-foreground font-serif">{opt.textHi}</p>
                                        )}
                                      </div>
                                      {isCorrect && (
                                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Toolbar */}
            <div className="border-t border-border bg-muted/40 p-4 flex items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">
                Showing Paper: <strong className="text-foreground">{paper.courseCode}</strong> (All Sections A, B & C)
              </span>
              <button
                onClick={onClose}
                className="rounded-xl bg-secondary px-5 py-2 text-xs font-bold text-secondary-foreground hover:bg-secondary/80 transition-all cursor-pointer"
              >
                Close Paper
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
