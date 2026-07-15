'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Upload,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  AlertCircle,
  QrCode,
  FileText,
  FileUp,
  Download,
} from 'lucide-react'
import { editedBooks2026Data, EditedBook2026 } from '@/lib/cv-data'

export default function EditedBooksPage() {
  // Active form state per book
  const [activeFormBookId, setActiveFormBookId] = useState<string | null>(null)
  const [expandedThemeIndex, setExpandedThemeIndex] = useState<{ [key: string]: number | null }>({})

  // Form States (keyed by bookId or single instance since only one form is active at a time)
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

  // Reset form when active book changes
  useEffect(() => {
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
  }, [activeFormBookId])

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

  // Web App URL configuration (paste your Google Apps Script URL here)
  const SUBMISSION_FORM_URL = "https://script.google.com/macros/s/AKfycbwRLrKUjPQm5BvSIVKOt8--Goi5eFLT56OZGb7dSvK4XaNQOoTmcV0nkc8jHOP-Nuozkg/exec"

  // Handle form submission to Google Sheets and Drive
  const handleSubmit = (e: React.FormEvent, book: EditedBook2026) => {
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
    setSubmitStep(1) // "Parsing form entries..."

    const reader = new FileReader()
    reader.onload = async () => {
      try {
        const base64Data = (reader.result as string).split(',')[1]
        const mimeType = uploadedFile.type || 'application/octet-stream'
        const fileExt = uploadedFile.name.split('.').pop()
        const renamedFileName = `${chapterTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 45)}.${fileExt}`

        setSubmitStep(2) // "Connecting to Google Drive folder..."

        if (SUBMISSION_FORM_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
          // Simulation flow fallback
          setTimeout(() => {
            setSubmitStep(3)
            setTimeout(() => {
              setSubmitStep(4)
              setTimeout(() => {
                setSubmitStep(5)
                setTimeout(() => {
                  setIsSubmitting(false)
                  setSubmitSuccess(true)
                }, 1000)
              }, 1200)
            }, 1200)
          }, 1000)
          return
        }

        // Real Google Sheets + Drive upload flow
        setSubmitStep(3) // "Uploading to Google Drive folder..."
        const payload = {
          bookId: book.id,
          bookTitle: book.title,
          correspondenceAuthor,
          email: emailId,
          whatsapp: whatsappNo,
          numAuthors,
          chapterTitle,
          theme: book.themes[parseInt(selectedThemeIndex)]?.title || '',
          subtheme: selectedSubtheme,
          fileData: base64Data,
          fileName: renamedFileName,
          fileMimeType: mimeType
        }

        setSubmitStep(4) // "Renaming file and appending spreadsheet entry..."
        const response = await fetch(SUBMISSION_FORM_URL, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8' // Text/plain avoids CORS preflight OPTIONS request failures in Google Apps Scripts
          }
        })

        const result = await response.json()

        if (result.status === 'success') {
          setSubmitStep(5) // "Compiling receipts..."
          setTimeout(() => {
            setIsSubmitting(false)
            setSubmitSuccess(true)
          }, 800)
        } else {
          setIsSubmitting(false)
          setFormError(result.message || 'Error occurred while saving your chapter proposal.')
        }
      } catch (err: any) {
        setIsSubmitting(false);
        setFormError(err.message || 'Network error occurred. Please ensure your Google Apps Script is deployed and try again.');
      }
    }

    reader.onerror = () => {
      setIsSubmitting(false)
      setFormError('Failed to read manuscript file.')
    }

    reader.readAsDataURL(uploadedFile)
  }

  const toggleThemeExpand = (bookId: string, index: number) => {
    setExpandedThemeIndex((prev) => ({
      ...prev,
      [bookId]: prev[bookId] === index ? null : index,
    }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="relative mx-auto max-w-7xl text-center mb-16">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 border border-royal/20 mb-4">
          Academic Edited Books 2026
        </span>
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy dark:text-white sm:text-5xl">
          Call for Chapters: <span className="text-royal">Edited Book Series</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground sm:text-lg">
          Explore Dr. Vimal Singh's editorial projects, review the official flyers directly, and submit your chapter manuscripts using the inline submission forms.
        </p>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-0 right-0 h-40 bg-gradient-to-r from-royal/5 via-gold/5 to-royal/5 blur-3xl -z-10 -translate-y-1/2" />
      </div>

      {/* Book Proposals Stack */}
      <div className="mx-auto max-w-7xl space-y-16">
        {editedBooks2026Data.map((book) => {
          const isFormOpen = activeFormBookId === book.id
          const currentExpandedTheme = expandedThemeIndex[book.id] ?? null

          return (
            <div
              key={book.id}
              className="border border-border bg-card rounded-3xl overflow-hidden shadow-md p-6 sm:p-8 space-y-8"
            >
              {/* Split Screen Layout: Left Flyer Preview, Right Book Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Direct Flyer Document View */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy dark:text-white font-heading flex items-center gap-1.5">
                        <QrCode className="h-4.5 w-4.5 text-royal" /> Official Flyer Document
                      </h3>
                      <a
                        href={book.flyerPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-royal hover:underline"
                      >
                        Open Full <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {book.isPdf ? (
                      /* Embed PDF directly */
                      <div className="relative w-full h-[580px] rounded-2xl border border-border shadow-inner overflow-hidden bg-muted/10">
                        <iframe
                          src={`${book.flyerPath}#toolbar=0&navpanes=0&statusbar=0`}
                          className="w-full h-full border-0"
                          loading="lazy"
                          title={`${book.title} flyer`}
                        />
                      </div>
                    ) : (
                      /* Render Image directly */
                      <div className="relative w-full h-[580px] rounded-2xl border border-border shadow-inner overflow-hidden bg-muted/10 flex items-center justify-center p-2">
                        <img
                          src={book.flyerPath}
                          alt={`${book.title} flyer`}
                          className="max-w-full max-h-full object-contain rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-4 text-xs text-muted-foreground flex justify-between items-center">
                    <span>File Path: {book.flyerPath}</span>
                    <a
                      href={book.flyerPath}
                      download
                      className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-muted hover:bg-muted/80 rounded-lg text-[10px] font-bold text-foreground transition-all"
                    >
                      <Download className="h-3 w-3" /> Download Flyer
                    </a>
                  </div>
                </div>

                {/* Right Column: Detailed Metadatas & Themes */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Header Badges */}
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-extrabold tracking-wider rounded-md uppercase text-gold bg-gold/10 border border-gold/20">
                        EDITED BOOK PROPOSAL
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-royal" /> Submission Deadline: <strong>{book.deadline}</strong>
                      </span>
                    </div>

                    {/* Book Title */}
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-navy dark:text-white leading-tight">
                        {book.title}
                      </h2>
                      {book.subtitle && (
                        <p className="mt-1.5 text-xs text-muted-foreground italic font-medium">
                          {book.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {book.introduction}
                    </p>

                    {/* Highlights & Features */}
                    <div className="grid gap-4 sm:grid-cols-2 pt-2 text-xs">
                      <div className="space-y-2">
                        <strong className="block font-bold text-navy dark:text-white uppercase tracking-wider">
                          Key Highlights
                        </strong>
                        <ul className="space-y-1.5 text-muted-foreground">
                          {book.highlights.slice(0, 4).map((hl, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <strong className="block font-bold text-navy dark:text-white uppercase tracking-wider">
                          Features &amp; Benefits
                        </strong>
                        <ul className="space-y-1.5 text-muted-foreground">
                          {book.features.slice(0, 4).map((ft, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle className="h-3.5 w-3.5 text-royal mt-0.5 shrink-0" />
                              <span>{ft}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Themes Collapsible Accordions */}
                    <div className="space-y-2.5 pt-2">
                      <strong className="block text-xs uppercase tracking-wider font-extrabold text-muted-foreground">
                        Book Chapters &amp; Themes Structure
                      </strong>
                      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                        {book.themes.map((theme, idx) => {
                          const isExpanded = currentExpandedTheme === idx
                          return (
                            <div key={idx} className="rounded-xl border border-border/80 overflow-hidden bg-muted/[0.02]">
                              <button
                                type="button"
                                onClick={() => toggleThemeExpand(book.id, idx)}
                                className="w-full flex justify-between items-center px-4 py-2.5 text-left text-xs font-bold text-navy dark:text-white hover:bg-muted/40 transition-colors"
                              >
                                <span className="truncate">{theme.title}</span>
                                {isExpanded ? (
                                  <ChevronUp className="h-3.5 w-3.5 text-royal shrink-0" />
                                ) : (
                                  <ChevronDown className="h-3.5 w-3.5 text-royal shrink-0" />
                                )}
                              </button>

                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden bg-card"
                                  >
                                    <ul className="px-4 pb-3 pt-1.5 space-y-1.5 border-t border-border/40 text-xs text-muted-foreground">
                                      {theme.subthemes.map((sub, sIdx) => (
                                        <li key={sIdx} className="flex items-start gap-2">
                                          <span className="inline-flex h-4 w-4 bg-royal/10 text-royal text-[9px] font-bold items-center justify-center rounded mt-0.5 shrink-0">
                                            {sIdx + 1}
                                          </span>
                                          <span>{sub}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Format settings */}
                    <div className="pt-2 border-t border-border/60 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-muted-foreground">
                      <div>
                        <strong>Formatting:</strong> {book.guidelines.font || 'Times New Roman'} ({book.guidelines.bodySize || '12 pt'}), Spacing {book.guidelines.lineSpacing || '1.15'}
                      </div>
                      <div>
                        <strong>Referencing:</strong> {book.guidelines.citation || 'APA 7th Edition style'}
                      </div>
                    </div>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-[11px] text-muted-foreground leading-tight">
                      <div><strong>Chief Editor:</strong> {book.editor}</div>
                      {book.coEditor && <div><strong>Co-Editor:</strong> {book.coEditor} ({book.coEditorTitle})</div>}
                    </div>
                    <button
                      onClick={() => setActiveFormBookId(isFormOpen ? null : book.id)}
                      className={`w-full sm:w-auto py-2.5 px-6 text-xs font-bold rounded-xl text-white transition-all shadow-sm flex items-center justify-center gap-1.5 ${isFormOpen
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-royal hover:bg-royal-dark'
                        }`}
                    >
                      {isFormOpen ? 'Close Submission Form' : 'Submit Chapter Manuscript'} <FileUp className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Inline Collapsible Form Container */}
              <AnimatePresence>
                {isFormOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-border/60 pt-8"
                  >
                    <div className="max-w-3xl mx-auto">
                      <AnimatePresence mode="wait">

                        {/* Success State */}
                        {submitSuccess ? (
                          <motion.div
                            key="success-screen"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center p-6 bg-royal/5 border border-royal/20 rounded-2xl space-y-6"
                          >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-royal/10 text-royal">
                              <CheckCircle className="h-7 w-7" />
                            </div>

                            <div>
                              <h3 className="text-lg font-bold font-heading text-navy dark:text-white">
                                Manuscript Proposal Submitted!
                              </h3>
                              <p className="mt-1.5 text-xs text-muted-foreground max-w-md mx-auto">
                                Thank you for your submission. Your chapter manuscript has been successfully renamed and saved into Dr. Vimal Singh's Google Drive folders under <strong>"{book.title}"</strong>.
                              </p>
                            </div>

                            {/* Verification Receipt details */}
                            <div className="bg-card rounded-xl border border-border p-4 max-w-md mx-auto text-left text-xs space-y-1.5">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Correspondent Author:</span>
                                <span className="font-bold text-foreground">{correspondenceAuthor}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Chapter Title:</span>
                                <span className="font-bold text-foreground truncate max-w-[220px]">{chapterTitle}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Google Drive Path:</span>
                                <span className="font-mono text-royal text-[10px] truncate max-w-[200px]">
                                  /Drive/{book.id}/{chapterTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20)}.pdf
                                </span>
                              </div>
                            </div>

                            {/* WhatsApp Join Qr Code */}
                            <div className="border border-gold/30 bg-gold/5 dark:bg-gold/[0.01] rounded-2xl p-5 max-w-sm mx-auto space-y-4">
                              <div className="text-center">
                                <h4 className="font-heading text-xs font-bold text-navy dark:text-white">
                                  Join Contributors WhatsApp Group
                                </h4>
                                <p className="text-[10px] text-muted-foreground mt-0.5">
                                  Scan the QR code below or click join to connect with the group.
                                </p>
                              </div>

                              <div className="mx-auto h-36 w-36 bg-white p-1.5 rounded-xl border border-border shadow-sm flex items-center justify-center">
                                <img
                                  src={book.whatsappQrUrl}
                                  alt="WhatsApp Group QR Code"
                                  className="h-full w-full object-contain"
                                />
                              </div>

                              <a
                                href={book.whatsappGroupUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg text-white bg-gold hover:bg-gold-dark transition-all"
                              >
                                Join WhatsApp Group <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </div>

                            <div>
                              <button
                                type="button"
                                onClick={() => setActiveFormBookId(null)}
                                className="text-[11px] font-semibold text-muted-foreground hover:text-royal transition-colors"
                              >
                                Done
                              </button>
                            </div>
                          </motion.div>
                        ) : isSubmitting ? (
                          /* Loading / Uploading state indicators */
                          <motion.div
                            key="submit-loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-12 flex flex-col items-center justify-center space-y-6 text-center"
                          >
                            <RefreshCw className="h-8 w-8 text-royal animate-spin" />
                            <div>
                              <h3 className="text-sm font-bold font-heading text-navy dark:text-white">
                                Saving manuscript to Google Drive...
                              </h3>
                              <p className="text-[11px] text-muted-foreground max-w-xs mx-auto mt-0.5">
                                Please wait while our system uploads the PDF and applies chapter formatting conventions.
                              </p>
                            </div>

                            <div className="w-full max-w-xs space-y-2 bg-muted/20 rounded-xl p-3 border border-border/80 text-left text-[11px]">
                              <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full shrink-0 ${submitStep >= 1 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                                <span className={submitStep >= 1 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                                  Connecting Google Drive API...
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full shrink-0 ${submitStep >= 2 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                                <span className={submitStep >= 2 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                                  Resolving directory "/{book.id}"...
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full shrink-0 ${submitStep >= 3 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                                <span className={submitStep >= 3 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                                  Uploading file to cloud folder...
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full shrink-0 ${submitStep >= 4 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                                <span className={submitStep >= 4 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                                  Renaming document to chapter title...
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full shrink-0 ${submitStep >= 5 ? 'bg-royal animate-pulse' : 'bg-border'}`} />
                                <span className={submitStep >= 5 ? 'text-foreground font-semibold' : 'text-muted-foreground'}>
                                  Generating WhatsApp group join card...
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          /* Active Form Details */
                          <form
                            onSubmit={(e) => handleSubmit(e, book)}
                            className="space-y-4 text-xs"
                          >
                            <div className="border-b border-border/60 pb-3 flex justify-between items-center">
                              <h4 className="font-heading font-extrabold text-sm text-navy dark:text-white uppercase tracking-wider">
                                Chapter Submission Form — {book.editor}
                              </h4>
                              <span className="text-[10px] text-muted-foreground">* Required Fields</span>
                            </div>

                            {formError && (
                              <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-900/40 flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                <span>{formError}</span>
                              </div>
                            )}

                            <div className="grid gap-4 sm:grid-cols-2">
                              {/* Correspondence Author */}
                              <div className="space-y-1.5">
                                <label className="font-semibold text-foreground/80">
                                  Name of Correspondence Author *
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={correspondenceAuthor}
                                  onChange={(e) => setCorrespondenceAuthor(e.target.value)}
                                  placeholder="e.g. Dr. Vimal Singh"
                                  className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                                />
                              </div>

                              {/* Email ID */}
                              <div className="space-y-1.5">
                                <label className="font-semibold text-foreground/80">
                                  Email ID *
                                </label>
                                <input
                                  type="email"
                                  required
                                  value={emailId}
                                  onChange={(e) => setEmailId(e.target.value)}
                                  placeholder="e.g. drvimalsingh@csjmu.ac.in"
                                  className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                                />
                              </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                              {/* Whatsapp Number */}
                              <div className="space-y-1.5">
                                <label className="font-semibold text-foreground/80">
                                  WhatsApp No. *
                                </label>
                                <input
                                  type="tel"
                                  required
                                  value={whatsappNo}
                                  onChange={(e) => setWhatsappNo(e.target.value)}
                                  placeholder="e.g. +91 9876543210"
                                  className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                                />
                              </div>

                              {/* No. of Authors */}
                              <div className="space-y-1.5">
                                <label className="font-semibold text-foreground/80">
                                  No. of Authors *
                                </label>
                                <select
                                  value={numAuthors}
                                  onChange={(e) => setNumAuthors(e.target.value)}
                                  className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
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
                              <label className="font-semibold text-foreground/80">
                                Title of the Chapter *
                              </label>
                              <input
                                type="text"
                                required
                                value={chapterTitle}
                                onChange={(e) => setChapterTitle(e.target.value)}
                                placeholder="Enter the complete proposed title of your chapter"
                                className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                              />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                              {/* Theme Selection */}
                              <div className="space-y-1.5">
                                <label className="font-semibold text-foreground/80">
                                  Select Theme *
                                </label>
                                <select
                                  required
                                  value={selectedThemeIndex}
                                  onChange={(e) => setSelectedThemeIndex(e.target.value)}
                                  className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal"
                                >
                                  <option value="">-- Choose a Theme --</option>
                                  {book.themes.map((theme, idx) => (
                                    <option key={idx} value={idx}>
                                      {theme.title.length > 55 ? `${theme.title.substring(0, 55)}...` : theme.title}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {/* Subtheme Selection */}
                              <div className="space-y-1.5">
                                <label className="font-semibold text-foreground/80">
                                  Select Sub-theme *
                                </label>
                                <select
                                  required
                                  disabled={!selectedThemeIndex}
                                  value={selectedSubtheme}
                                  onChange={(e) => setSelectedSubtheme(e.target.value)}
                                  className="w-full text-xs py-2.5 px-3.5 rounded-xl border border-border bg-card focus:outline-none focus:ring-1 focus:ring-royal disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <option value="">
                                    {!selectedThemeIndex ? 'Select theme first' : '-- Choose a Subtheme --'}
                                  </option>
                                  {selectedThemeIndex !== '' &&
                                    book.themes[parseInt(selectedThemeIndex)]?.subthemes.map((sub, idx) => (
                                      <option key={idx} value={sub}>
                                        {sub.length > 55 ? `${sub.substring(0, 55)}...` : sub}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            </div>

                            {/* File Upload Interaction */}
                            <div className="space-y-2">
                              <label className="font-semibold text-foreground/80">
                                Upload Chapter Manuscript (Word/PDF only) *
                              </label>

                              <div
                                onDragEnter={handleDrag}
                                onDragOver={handleDrag}
                                onDragLeave={handleDrag}
                                onDrop={handleDrop}
                                className={`relative border border-dashed rounded-2xl p-5 text-center transition-all ${dragActive
                                    ? 'border-royal bg-royal/[0.02]'
                                    : 'border-border bg-card hover:border-royal/50'
                                  }`}
                              >
                                <input
                                  type="file"
                                  id={`manuscript-file-${book.id}`}
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFileChange}
                                  className="hidden"
                                />
                                <label htmlFor={`manuscript-file-${book.id}`} className="cursor-pointer block">
                                  <div className="flex flex-col items-center space-y-1">
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-royal/10 text-royal">
                                      <Upload className="h-4.5 w-4.5" />
                                    </div>
                                    <span className="text-[11px] font-semibold text-foreground/85">
                                      Drag and drop file here, or <span className="text-royal hover:underline font-bold">browse</span>
                                    </span>
                                    <span className="text-[9px] text-muted-foreground">
                                      Accepts .pdf, .doc, or .docx manuscript files
                                    </span>
                                  </div>
                                </label>

                                {uploadedFile && (
                                  <div className="mt-3 p-2 bg-muted/40 rounded-xl border border-border/80 text-[11px] flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 max-w-[85%]">
                                      <FileText className="h-3.5 w-3.5 text-royal shrink-0" />
                                      <span className="font-semibold text-foreground truncate">
                                        {uploadedFile.name}
                                      </span>
                                      <span className="text-[9px] text-muted-foreground shrink-0">
                                        ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => setUploadedFile(null)}
                                      className="text-red-500 font-bold hover:underline shrink-0 text-[10px]"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* Automated folder rename warning */}
                              {uploadedFile && chapterTitle.trim() && (
                                <div className="p-3 bg-gold/10 dark:bg-gold/[0.01] border border-gold/20 rounded-xl flex gap-2 text-[10px] text-muted-foreground leading-normal">
                                  <CheckCircle className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-bold text-foreground block mb-0.5">Google Drive Upload Integration</span>
                                    Saves manuscript inside directory: <strong className="text-foreground">/Drive/{book.id}/</strong> and renames the file to match the chapter title:
                                    <strong className="text-royal block font-mono mt-0.5 font-bold truncate">
                                      {chapterTitle.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 40)}.{uploadedFile.name.split('.').pop()}
                                    </strong>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Submit buttons */}
                            <div className="pt-3 flex gap-3">
                              <button
                                type="button"
                                onClick={() => setActiveFormBookId(null)}
                                className="flex-1 py-2.5 px-4 border border-border rounded-xl text-xs font-bold hover:bg-muted/30 transition-all text-center"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="flex-1 py-2.5 px-4 bg-royal hover:bg-royal-dark text-white rounded-xl text-xs font-bold transition-all text-center shadow-sm"
                              >
                                Submit Chapter manuscript
                              </button>
                            </div>

                          </form>
                        )}

                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          )
        })}
      </div>
    </div>
  )
}
