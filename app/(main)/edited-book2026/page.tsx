'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Users,
  Calendar,
  Mail,
  FileText,
  ArrowLeft,
  CheckCircle,
  Upload,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  AlertCircle,
  FileDown,
  QrCode,
  FileUp,
} from 'lucide-react'
import { editedBooks2026Data, EditedBook2026 } from '@/lib/cv-data'

export default function EditedBooksPage() {
  const [selectedBook, setSelectedBook] = useState<EditedBook2026 | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'flyer' | 'themes' | 'guidelines' | 'submit'>('overview')
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null)

  // Form States
  const [numAuthors, setNumAuthors] = useState<string>('1')
  const [chapterTitle, setChapterTitle] = useState<string>('')
  const [correspondenceAuthor, setCorrespondenceAuthor] = useState<string>('')
  const [selectedThemeIndex, setSelectedThemeIndex] = useState<string>('')
  const [selectedSubtheme, setSelectedSubtheme] = useState<string>('')
  const [emailId, setEmailId] = useState<string>('')
  const [whatsappNo, setWhatsappNo] = useState<string>('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState<boolean>(false)

  // Submission Progress States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStep, setSubmitStep] = useState<number>(0)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
  const [formError, setFormError] = useState<string | null>(null)

  // Scroll to details when book changes
  useEffect(() => {
    if (selectedBook) {
      setActiveTab('overview')
      setExpandedTheme(null)
      // Reset form
      setNumAuthors('1')
      setChapterTitle('')
      setCorrespondenceAuthor('')
      setSelectedThemeIndex('')
      setSelectedSubtheme('')
      setEmailId('')
      setWhatsappNo('')
      setUploadedFile(null)
      setSubmitSuccess(false)
      setSubmitStep(0)
      setFormError(null)

      // Smooth scroll to container
      const element = document.getElementById('book-detail-container')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [selectedBook])

  // Reset subtheme dropdown when theme changes
  useEffect(() => {
    setSelectedSubtheme('')
  }, [selectedThemeIndex])

  // Drag and Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const fileExt = file.name.split('.').pop()?.toLowerCase()
      if (fileExt === 'pdf' || fileExt === 'doc' || fileExt === 'docx') {
        setUploadedFile(file)
        setFormError(null)
      } else {
        setFormError('Only PDF, DOC, or DOCX files are allowed.')
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setUploadedFile(file)
      setFormError(null)
    }
  }

  // Handle high-fidelity form submission simulation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    // Validation
    if (!chapterTitle.trim()) return setFormError('Chapter Title is required.')
    if (!correspondenceAuthor.trim()) return setFormError('Correspondence Author Name is required.')
    if (!selectedThemeIndex) return setFormError('Please select a theme.')
    if (!selectedSubtheme) return setFormError('Please select a subtheme.')
    if (!emailId.trim() || !/\S+@\S+\.\S+/.test(emailId)) return setFormError('Please enter a valid Email ID.')
    if (!whatsappNo.trim()) return setFormError('WhatsApp Number is required.')
    if (!uploadedFile) return setFormError('Please upload your manuscript file.')

    setIsSubmitting(true)
    setSubmitStep(1)

    // Simulate high-fidelity upload and rename process
    setTimeout(() => {
      setSubmitStep(2) // "Connecting to Google Drive folder..."
      setTimeout(() => {
        setSubmitStep(3) // "Uploading to Google Drive folder '/[Book Name]'..."
        setTimeout(() => {
          setSubmitStep(4) // "Renaming file to '[Chapter Title].pdf/docx'..."
          setTimeout(() => {
            setSubmitStep(5) // "Registering submission and creating WhatsApp link..."
            setTimeout(() => {
              setIsSubmitting(false)
              setSubmitSuccess(true)
            }, 1000)
          }, 1200)
        }, 1200)
      }, 1000)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="relative mx-auto max-w-7xl text-center mb-16">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 border border-royal/20 mb-4">
          Academic Publications 2026
        </span>
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Call for Chapters: <span className="text-royal">Edited Book Series</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground sm:text-lg">
          Contribute to cutting-edge research. Explore Dr. Vimal Singh's editorial projects, select a book proposal below, read the submission guidelines, and submit your chapter manuscript.
        </p>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 right-0 h-40 bg-gradient-to-r from-royal/5 via-gold/5 to-royal/5 blur-3xl -z-10 -translate-y-1/2" />
      </div>

      {/* Book Proposals Grid */}
      <div className="mx-auto max-w-7xl mb-16">
        <h2 className="text-xl font-bold font-heading text-navy dark:text-white mb-6 border-b border-border pb-3 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-royal" /> Available Book Proposals
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {editedBooks2026Data.map((book) => {
            const isSelected = selectedBook?.id === book.id
            return (
              <motion.div
                key={book.id}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col justify-between rounded-3xl p-6 border transition-all cursor-pointer shadow-sm ${
                  isSelected
                    ? 'border-royal bg-royal/[0.02] ring-2 ring-royal/20'
                    : 'border-border bg-card hover:border-royal/40 hover:shadow-md'
                }`}
                onClick={() => setSelectedBook(book)}
              >
                {/* Book Card Content */}
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="px-2.5 py-1 text-[10px] font-extrabold tracking-wider rounded-md uppercase text-gold bg-gold/10 border border-gold/20">
                      EDITED BOOK
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-royal" /> Deadline: {book.deadline}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-navy dark:text-white leading-snug line-clamp-2">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="text-xs text-muted-foreground font-medium mt-1.5 italic line-clamp-2">
                      {book.subtitle}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground mt-4 line-clamp-3">
                    {book.introduction}
                  </p>

                  {/* Editors */}
                  <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
                    <div className="text-muted-foreground">
                      <strong className="text-foreground font-semibold">Chief Editor:</strong> {book.editor}
                    </div>
                    {book.coEditor && (
                      <div className="text-muted-foreground">
                        <strong className="text-foreground font-semibold">Co-Editor:</strong> {book.coEditor}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedBook(book)
                      setTimeout(() => {
                        setActiveTab('submit')
                        document.getElementById('book-detail-container')?.scrollIntoView({ behavior: 'smooth' })
                      }, 50)
                    }}
                    className="flex-1 text-center py-2.5 px-3 text-xs font-bold rounded-xl text-white bg-royal hover:bg-royal-dark transition-all duration-200 min-w-[140px]"
                  >
                    Submit Chapter
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedBook(book)
                      setTimeout(() => {
                        setActiveTab('flyer')
                        document.getElementById('book-detail-container')?.scrollIntoView({ behavior: 'smooth' })
                      }, 50)
                    }}
                    className="py-2.5 px-3 text-xs font-bold rounded-xl border border-royal/35 text-royal bg-royal/5 hover:bg-royal/10 transition-all duration-200"
                  >
                    View Flyer
                  </button>
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="py-2.5 px-3 text-xs font-bold rounded-xl border border-border text-foreground hover:bg-muted/30 transition-all duration-200"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Selected Book Interactive Workspace */}
      <AnimatePresence mode="wait">
        {selectedBook && (
          <motion.div
            id="book-detail-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-7xl border border-border bg-card rounded-3xl overflow-hidden shadow-lg p-6 sm:p-8"
          >
            {/* Navigation back and quick details */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-border">
              <button
                onClick={() => setSelectedBook(null)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-royal hover:text-royal-dark transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to book list
              </button>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-royal/10 text-royal font-bold rounded-full">
                  Editor: {selectedBook.editor}
                </span>
                {selectedBook.coEditor && (
                  <span className="px-3 py-1 bg-gold/15 text-gold dark:text-accent font-bold rounded-full">
                    Co-Editor: {selectedBook.coEditor}
                  </span>
                )}
              </div>
            </div>

            {/* Book Title Detail Banner */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy dark:text-white leading-tight">
                {selectedBook.title}
              </h2>
              {selectedBook.subtitle && (
                <p className="mt-2 text-sm text-muted-foreground italic font-medium">
                  {selectedBook.subtitle}
                </p>
              )}
            </div>

            {/* Workspace Tabs Layout */}
            <div className="flex border-b border-border overflow-x-auto scrollbar-none mb-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-royal text-royal font-extrabold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Overview &amp; Highlights
              </button>
              <button
                onClick={() => setActiveTab('flyer')}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'flyer'
                    ? 'border-royal text-royal font-extrabold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Flyer Preview
              </button>
              <button
                onClick={() => setActiveTab('themes')}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'themes'
                    ? 'border-royal text-royal font-extrabold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Themes &amp; Sub-themes
              </button>
              <button
                onClick={() => setActiveTab('guidelines')}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'guidelines'
                    ? 'border-royal text-royal font-extrabold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Submission Guidelines
              </button>
              <button
                onClick={() => setActiveTab('submit')}
                className={`py-3 px-5 text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'submit'
                    ? 'border-royal text-royal font-extrabold'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileUp className="h-4 w-4" /> Submit Proposal
              </button>
            </div>

            {/* Tab Contents */}
            <div className="min-h-[300px]">
              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-8 lg:grid-cols-3"
                >
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-base font-bold text-navy dark:text-white uppercase tracking-wider mb-2 font-heading">
                        Introduction
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                        {selectedBook.introduction}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-navy dark:text-white uppercase tracking-wider mb-3 font-heading">
                        Key Highlights
                      </h3>
                      <ul className="grid gap-2.5 sm:grid-cols-2 text-sm text-muted-foreground">
                        {selectedBook.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="h-2 w-2 rounded-full bg-gold mt-2 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar editorial detail card */}
                  <div className="bg-muted/40 rounded-2xl p-5 border border-border/80 h-fit space-y-5">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground mb-3">
                        Editorial Team
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-bold text-foreground">{selectedBook.editor}</p>
                          <p className="text-[11px] text-muted-foreground">Chief Editor</p>
                          {selectedBook.editorTitle && (
                            <p className="text-[10px] text-muted-foreground leading-tight">{selectedBook.editorTitle}</p>
                          )}
                          {selectedBook.editorAffiliation && (
                            <p className="text-[10px] text-muted-foreground italic leading-tight">{selectedBook.editorAffiliation}</p>
                          )}
                        </div>

                        {selectedBook.coEditor && (
                          <div className="pt-3 border-t border-border/60">
                            <p className="text-sm font-bold text-foreground">{selectedBook.coEditor}</p>
                            <p className="text-[11px] text-muted-foreground">{selectedBook.coEditorTitle || 'Co-Editor'}</p>
                            {selectedBook.coEditorAffiliation && (
                              <p className="text-[10px] text-muted-foreground leading-tight italic">{selectedBook.coEditorAffiliation}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/60">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground mb-2">
                        Features Provided
                      </h4>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {selectedBook.features.map((f, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5 text-royal shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/60 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Submit via:</span>
                        <a href={`mailto:${selectedBook.email}`} className="text-royal font-semibold hover:underline">
                          {selectedBook.email}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Due Date:</span>
                        <span className="font-semibold text-foreground">{selectedBook.deadline}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 1.5: Flyer Preview */}
              {activeTab === 'flyer' && selectedBook.flyerImages && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 max-w-4xl mx-auto"
                >
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-navy dark:text-white uppercase tracking-wider mb-1 font-heading">
                      Official Book Flyer
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Below is the official flyer and call-for-chapters brochure containing comprehensive details.
                    </p>
                  </div>

                  <FlyerCarousel images={selectedBook.flyerImages} title={selectedBook.title} />
                </motion.div>
              )}

              {/* Tab 2: Themes Accordion */}
              {activeTab === 'themes' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4 max-w-4xl"
                >
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-navy dark:text-white uppercase tracking-wider mb-1 font-heading">
                      Themes &amp; Sub-themes structure
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Click on any theme header to view the associated sub-themes. Select a theme corresponding to your chapter during submission.
                    </p>
                  </div>

                  {selectedBook.themes.map((theme, index) => {
                    const isExpanded = expandedTheme === index
                    return (
                      <div
                        key={index}
                        className="rounded-2xl border border-border overflow-hidden bg-card transition-all"
                      >
                        <button
                          onClick={() => setExpandedTheme(isExpanded ? null : index)}
                          className="w-full flex justify-between items-center px-5 py-4 text-left font-bold text-sm text-navy dark:text-white hover:bg-muted/30 transition-colors"
                        >
                          <span className="font-heading">{theme.title}</span>
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4 text-royal shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-royal shrink-0" />
                          )}
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-1 border-t border-border/40 bg-muted/[0.01]">
                                <ul className="space-y-2.5 text-sm text-muted-foreground">
                                  {theme.subthemes.map((sub, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                      <span className="inline-flex h-5 w-5 rounded bg-royal/10 text-royal text-[10px] font-bold items-center justify-center shrink-0">
                                        {idx + 1}
                                      </span>
                                      <span className="leading-snug">{sub}</span>
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
                </motion.div>
              )}

              {/* Tab 3: Guidelines */}
              {activeTab === 'guidelines' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-8 lg:grid-cols-3 max-w-7xl"
                >
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-base font-bold text-navy dark:text-white uppercase tracking-wider mb-4 font-heading border-b border-border pb-1">
                        Manuscript Formatting Guidelines
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2 text-sm">
                        <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
                          <strong className="block text-xs uppercase tracking-wider text-muted-foreground font-extrabold mb-1">Font &amp; Size</strong>
                          <span className="text-foreground font-medium">{selectedBook.guidelines.font || 'Times New Roman'} ({selectedBook.guidelines.bodySize || '12 pt'})</span>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
                          <strong className="block text-xs uppercase tracking-wider text-muted-foreground font-extrabold mb-1">Line Spacing</strong>
                          <span className="text-foreground font-medium">{selectedBook.guidelines.lineSpacing || '1.15'}</span>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
                          <strong className="block text-xs uppercase tracking-wider text-muted-foreground font-extrabold mb-1">Margins &amp; Layout</strong>
                          <span className="text-foreground font-medium">{selectedBook.guidelines.margins || '1 Inch on all sides'} ({selectedBook.guidelines.alignment || 'Justified'})</span>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
                          <strong className="block text-xs uppercase tracking-wider text-muted-foreground font-extrabold mb-1">Citation Style</strong>
                          <span className="text-foreground font-medium">{selectedBook.guidelines.citation || 'APA 7th Edition Style'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-navy dark:text-white uppercase tracking-wider font-heading border-b border-border pb-1">
                        Submission Requirements
                      </h3>
                      <div className="text-sm space-y-3 text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4.5 w-4.5 text-royal mt-0.5 shrink-0" />
                          <div>
                            <strong className="text-foreground font-semibold">Word Limit: </strong>
                            {selectedBook.guidelines.wordLimit || '3,000 to 6,000 words inclusive of all references, tables, and notes.'}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4.5 w-4.5 text-royal mt-0.5 shrink-0" />
                          <div>
                            <strong className="text-foreground font-semibold">Plagiarism &amp; Originality: </strong>
                            {selectedBook.guidelines.originality || 'Original & unpublished works only. Plagiarism similarity index must be under 10-15%.'}
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4.5 w-4.5 text-royal mt-0.5 shrink-0" />
                          <div>
                            <strong className="text-foreground font-semibold">File Formats: </strong>
                            {selectedBook.guidelines.fileFormat || 'Microsoft Word documents only (.doc or .docx).'}
                          </div>
                        </div>
                        {selectedBook.guidelines.peerReview && (
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4.5 w-4.5 text-royal mt-0.5 shrink-0" />
                            <div>
                              <strong className="text-foreground font-semibold">Review Process: </strong>
                              {selectedBook.guidelines.peerReview} Peer Review.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Alert / Action */}
                  <div className="bg-royal/[0.02] border border-royal/20 rounded-2xl p-5 h-fit space-y-4">
                    <div className="flex items-center gap-2 text-royal font-bold text-sm">
                      <AlertCircle className="h-4.5 w-4.5" />
                      <span>Ready to Submit?</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Make sure your chapter file matches the requested layout instructions. During the upload step, the manuscript will be saved into Google Drive folder for <strong className="text-foreground">"{selectedBook.title}"</strong> and renamed to match the exact <strong className="text-foreground">"Title of the Chapter"</strong> you submit in the form.
                    </p>
                    <button
                      onClick={() => setActiveTab('submit')}
                      className="w-full text-center py-2.5 px-4 text-xs font-bold rounded-xl text-white bg-royal hover:bg-royal-dark transition-all"
                    >
                      Open Submission Form
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Tab 4: Submit Proposal */}
              {activeTab === 'submit' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="max-w-3xl mx-auto"
                >
                  <AnimatePresence mode="wait">
                    {/* Successful Submission View */}
                    {submitSuccess ? (
                      <motion.div
                        key="success-screen"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-8 bg-royal/5 border border-royal/20 rounded-3xl shadow-sm space-y-6"
                      >
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-royal/10 text-royal">
                          <CheckCircle className="h-10 w-10" />
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-navy dark:text-white">
                            Proposal Successfully Submitted!
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                            Thank you for your submission. Your chapter manuscript has been successfully renamed and saved into Dr. Vimal Singh's Google Drive folder under <strong>"{selectedBook.title}"</strong>.
                          </p>
                        </div>

                        {/* Submission Metadata Receipt */}
                        <div className="bg-card rounded-2xl border border-border p-4 max-w-md mx-auto text-left text-xs space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Correspondent Author:</span>
                            <span className="font-bold text-foreground">{correspondenceAuthor}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Chapter Title:</span>
                            <span className="font-bold text-foreground truncate max-w-[200px]">{chapterTitle}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Google Drive Path:</span>
                            <span className="font-bold text-royal italic">/Drive/{selectedBook.id}/{chapterTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30)}.pdf</span>
                          </div>
                        </div>

                        {/* WhatsApp Group Box */}
                        <div className="border border-gold/30 bg-gold/5 dark:bg-gold/[0.02] rounded-3xl p-6 max-w-md mx-auto space-y-5">
                          <div className="flex flex-col items-center">
                            <QrCode className="h-6 w-6 text-gold mb-1" />
                            <h4 className="font-heading text-sm font-bold text-navy dark:text-white">
                              Join the Contributors WhatsApp Group
                            </h4>
                            <p className="text-[11px] text-muted-foreground text-center mt-1">
                              Scan the QR code below or click the button to join the official contributors WhatsApp Group for real-time announcements.
                            </p>
                          </div>

                          {/* QR Code image generated via qrserver api */}
                          <div className="mx-auto h-40 w-40 bg-white p-2 rounded-2xl border border-border shadow-sm flex items-center justify-center">
                            <img
                              src={selectedBook.whatsappQrUrl}
                              alt="WhatsApp Group QR Code"
                              className="h-full w-full object-contain"
                            />
                          </div>

                          <a
                            href={selectedBook.whatsappGroupUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl text-white bg-gold hover:bg-gold-dark transition-all shadow-sm"
                          >
                            Join WhatsApp Group <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => {
                              setSelectedBook(null)
                            }}
                            className="text-xs text-muted-foreground font-semibold hover:text-royal transition-colors"
                          >
                            Back to Book list
                          </button>
                        </div>
                      </motion.div>
                    ) : isSubmitting ? (
                      /* Submitting Loader Progress */
                      <motion.div
                        key="submit-loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-12 flex flex-col items-center justify-center space-y-6 text-center"
                      >
                        <RefreshCw className="h-10 w-10 text-royal animate-spin" />
                        <div>
                          <h3 className="text-base font-bold font-heading text-navy dark:text-white">
                            Uploading Proposal Documents
                          </h3>
                          <p className="text-xs text-muted-foreground max-w-sm mx-auto mt-1">
                            Please wait while we establish a secure connection and handle files.
                          </p>
                        </div>

                        {/* Interactive Steps Visual Indicator */}
                        <div className="w-full max-w-sm space-y-3 bg-muted/30 rounded-2xl p-4 border border-border/80 text-left text-xs">
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${submitStep >= 1 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                            <span className={submitStep >= 1 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                              1. Parsing form entries and metadata...
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${submitStep >= 2 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                            <span className={submitStep >= 2 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                              2. Resolving Google Drive Folder "/{selectedBook.id}"...
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${submitStep >= 3 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                            <span className={submitStep >= 3 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                              3. Securely uploading manuscript document...
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${submitStep >= 4 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                            <span className={submitStep >= 4 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                              4. Renaming file to "{chapterTitle.substring(0,25)}..."...
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${submitStep >= 5 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                            <span className={submitStep >= 5 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                              5. Compiling receipt & joining links...
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* Active Submission Form */
                      <motion.form
                        key="submit-form"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <div>
                          <h3 className="text-base font-bold text-navy dark:text-white uppercase tracking-wider font-heading">
                            Submit Chapter Entry
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Please provide the necessary chapter details and submit your file. All marked fields are required.
                          </p>
                        </div>

                        {formError && (
                          <div className="p-3.5 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-xs rounded-xl border border-red-200 dark:border-red-900/40 flex items-center gap-2">
                            <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                            <span>{formError}</span>
                          </div>
                        )}

                        <div className="grid gap-5 sm:grid-cols-2">
                          {/* Correspondence Author */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground/80">
                              Name of Correspondence Author *
                            </label>
                            <input
                              type="text"
                              required
                              value={correspondenceAuthor}
                              onChange={(e) => setCorrespondenceAuthor(e.target.value)}
                              placeholder="e.g. Dr. John Doe"
                              className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                            />
                          </div>

                          {/* Email ID */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground/80">
                              Email ID *
                            </label>
                            <input
                              type="email"
                              required
                              value={emailId}
                              onChange={(e) => setEmailId(e.target.value)}
                              placeholder="e.g. johndoe@university.edu"
                              className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          {/* Whatsapp Number */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground/80">
                              WhatsApp No. *
                            </label>
                            <input
                              type="tel"
                              required
                              value={whatsappNo}
                              onChange={(e) => setWhatsappNo(e.target.value)}
                              placeholder="e.g. +91 9876543210"
                              className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                            />
                          </div>

                          {/* No. of Authors */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground/80">
                              No. of Authors *
                            </label>
                            <select
                              value={numAuthors}
                              onChange={(e) => setNumAuthors(e.target.value)}
                              className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                            >
                              <option value="1">1 (Single Author)</option>
                              <option value="2">2 (Two Authors)</option>
                              <option value="3">3 (Three Authors)</option>
                              <option value="4">4 (Four Authors)</option>
                              <option value="5+">5+ (Multiple Authors)</option>
                            </select>
                          </div>
                        </div>

                        {/* Title of the Chapter */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-foreground/80">
                            Title of the Chapter *
                          </label>
                          <input
                            type="text"
                            required
                            value={chapterTitle}
                            onChange={(e) => setChapterTitle(e.target.value)}
                            placeholder="Enter the complete proposed title of your chapter"
                            className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                          />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          {/* Theme Selection */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground/80">
                              Select Theme *
                            </label>
                            <select
                              required
                              value={selectedThemeIndex}
                              onChange={(e) => setSelectedThemeIndex(e.target.value)}
                              className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                            >
                              <option value="">-- Choose a Theme --</option>
                              {selectedBook.themes.map((theme, idx) => (
                                <option key={idx} value={idx}>
                                  {theme.title.length > 55 ? `${theme.title.substring(0, 55)}...` : theme.title}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Subtheme Selection (Filtered based on theme selection) */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground/80">
                              Select Sub-theme *
                            </label>
                            <select
                              required
                              disabled={!selectedThemeIndex}
                              value={selectedSubtheme}
                              onChange={(e) => setSelectedSubtheme(e.target.value)}
                              className="w-full text-sm py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <option value="">
                                {!selectedThemeIndex ? 'Select theme first' : '-- Choose a Subtheme --'}
                              </option>
                              {selectedThemeIndex !== '' &&
                                selectedBook.themes[parseInt(selectedThemeIndex)]?.subthemes.map((sub, idx) => (
                                  <option key={idx} value={sub}>
                                    {sub.length > 55 ? `${sub.substring(0, 55)}...` : sub}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>

                        {/* File Upload Interaction */}
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-foreground/80">
                            Upload Chapter File *
                          </label>

                          <div
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            className={`relative border-2 border-dashed rounded-3xl p-6 text-center transition-all ${
                              dragActive
                                ? 'border-royal bg-royal/[0.02]'
                                : 'border-border bg-card hover:border-royal/50'
                            }`}
                          >
                            <input
                              type="file"
                              id="manuscript-file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <label htmlFor="manuscript-file" className="cursor-pointer block">
                              <div className="flex flex-col items-center space-y-2">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-royal/10 text-royal">
                                  <Upload className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-semibold text-foreground/80">
                                  Drag and drop file here, or <span className="text-royal hover:underline font-bold">browse</span>
                                </span>
                                <span className="text-[10px] text-muted-foreground">
                                  Supports PDF, DOC, or DOCX formats
                                </span>
                              </div>
                            </label>

                            {uploadedFile && (
                              <div className="mt-4 p-3 bg-muted/40 rounded-xl border border-border/80 text-xs flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-royal shrink-0" />
                                  <span className="font-semibold text-foreground truncate max-w-[200px]">
                                    {uploadedFile.name}
                                  </span>
                                  <span className="text-[10px] text-muted-foreground">
                                    ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setUploadedFile(null)}
                                  className="text-red-500 font-bold hover:underline"
                                >
                                  Remove
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Drive renaming instructions note */}
                          {uploadedFile && chapterTitle.trim() && (
                            <div className="p-3 bg-gold/10 dark:bg-gold/[0.02] border border-gold/30 rounded-xl flex items-start gap-2 text-[11px] text-muted-foreground leading-normal">
                              <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-foreground block mb-0.5">Automated Drive Renaming</span>
                                The uploaded file will be saved in Google Drive folder: <strong className="text-foreground">/Drive/{selectedBook.id}/</strong> and renamed to:
                                <strong className="text-royal block font-mono mt-1 break-all">
                                  {chapterTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 40)}.pdf
                                </strong>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Submit Actions */}
                        <div className="pt-4 flex gap-4">
                          <button
                            type="button"
                            onClick={() => setSelectedBook(null)}
                            className="flex-1 py-3 px-4 border border-border rounded-xl text-xs font-bold hover:bg-muted/30 transition-all text-center"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="flex-1 py-3 px-4 bg-royal hover:bg-royal-dark text-white rounded-xl text-xs font-bold transition-all text-center shadow-sm"
                          >
                            Submit Chapter Entry
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FlyerCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(images.length).fill(false))

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  const handleImageError = (index: number) => {
    setImageErrors((prevErrors) => {
      const copy = [...prevErrors]
      copy[index] = true
      return copy
    })
  }

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[500px] sm:h-[650px] overflow-hidden rounded-3xl border border-border bg-muted/20 shadow-inner flex items-center justify-center">
        {imageErrors[current] ? (
          <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-br from-navy to-royal text-white overflow-y-auto">
            {/* Fallback Flyer Preview */}
            <div className="text-center pb-4 border-b border-white/20">
              <span className="px-3 py-1 bg-gold/25 border border-gold/40 rounded-full text-[10px] font-bold uppercase tracking-wider text-gold">
                Flyer Preview Mode
              </span>
              <h4 className="mt-4 font-heading text-lg font-bold uppercase leading-snug">
                {title}
              </h4>
            </div>

            <div className="py-6 space-y-4 text-xs max-w-xl mx-auto leading-relaxed">
              <p className="text-white/80 text-center italic">
                (Visual Preview: Please place the flyer image file at "{images[current]}" inside the public folder to display the official flyer image here).
              </p>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="flex justify-between border-b border-white/10 pb-1.5 font-bold">
                  <span>CHAPTER SUBMISSION CALL</span>
                  <span className="text-gold">OPEN</span>
                </div>
                <p>
                  Researchers, academicians, and practitioners are cordially invited to submit original, unpublished book chapters for this edited volume.
                </p>
                <div className="grid grid-cols-2 gap-3 text-[11px] pt-1">
                  <div>
                    <strong className="block text-white/50 text-[10px]">CHIEF EDITOR</strong>
                    <span>Dr. Vimal Singh</span>
                  </div>
                  <div>
                    <strong className="block text-white/50 text-[10px]">NO PUBLICATION FEE</strong>
                    <span>Free of charge</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
                <strong className="block text-gold text-[10px] uppercase font-bold tracking-wider">Formatting Checklist</strong>
                <ul className="list-disc list-inside space-y-1 text-white/90">
                  <li>Font: Times New Roman, 12pt (1.15/1.5 spacing)</li>
                  <li>Referencing Style: APA 7th Edition style</li>
                  <li>Similarity/Plagiarism: Under 10% - 15%</li>
                  <li>Chapters submitted in MS Word (.doc/.docx)</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-white/20 text-[11px] text-white/60">
              Page {current + 1} of {images.length} • Scan the WhatsApp QR inside "Submit Proposal" tab to join the group.
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <img
              src={images[current]}
              alt={`${title} flyer — page ${current + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-md transition-all duration-300"
              onError={() => handleImageError(current)}
            />
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 text-white hover:bg-navy/90 hover:scale-105 transition-all backdrop-blur-sm shadow-md"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 text-white hover:bg-navy/90 hover:scale-105 transition-all backdrop-blur-sm shadow-md"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-navy/70 px-4 py-1 text-xs font-bold text-white backdrop-blur-sm shadow-sm">
          Page {current + 1} / {images.length}
        </span>
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              type="button"
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-royal' : 'w-2 bg-border hover:bg-royal/50'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
