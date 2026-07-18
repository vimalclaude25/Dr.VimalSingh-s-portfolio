'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  FileText,
  Search,
  ZoomIn,
  ZoomOut,
  Lock,
  Eye,
  X,
  Shield,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react'

// Realistic academic proposal documents
interface ProposalDoc {
  id: number
  title: string
  author: string
  supervisor?: string
  type: 'phd' | 'med'
  status: 'Completed / Awarded' | 'Proposal Approved' | 'Under Review'
  year: number
  institution: string
  abstract: string
  pdfPath?: string
  pages: {
    title: string
    content: string[]
  }[]
}

const repositoryData: ProposalDoc[] = [
  {
    id: 1,
    title: "Effectiveness of Chunk Technology Intervention Programme (CTIP) on 21st Century Skills of Secondary School Students",
    author: "Ms. Mahima Tripathi",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: 'phd',
    status: 'Completed / Awarded',
    year: 2025,
    institution: "School of Teacher Education, CSJMU / IGNOU",
    abstract: "This doctoral study investigates the effectiveness of the Chunk Technology Intervention Programme (CTIP) on the development of 21st-century skills and life skills (Flexibility, Leadership, Initiative, Productivity, and Social Skills - FLIPS) among secondary school students. Grounded in Cognitive Load Theory and Constructivism, the program implements a five-phase intervention over 20 weeks to simplify complex learning and foster holistic student growth.",
    pages: [
      {
        title: "Introduction & Rationale",
        content: [
          "DOCTORAL THESIS SYNOPSIS",
          "Title: Effectiveness of Chunk Technology Intervention Programme (CTIP) on 21st Century Skills of Secondary School Students",
          "Author: Ms. Mahima Tripathi | Supervisor: Dr. Vimal Singh",
          "1. BACKGROUND OF THE STUDY",
          "It is no longer just an opinion but a fact that the only way to prevent a catastrophic future for humanity on a planetary scale is to introduce sustainable practices in all areas of human endeavour. The key role in these processes is activity to education. So our education should balance the sustainable practices with the progressive approach.",
          "The development of 21st-century skills has become essential for individuals to navigate the complexities of modern life. These competencies enable individuals to adapt, thrive, and contribute meaningfully to society. Drawing upon frameworks from the World Health Organization (WHO), UNICEF, and the CBSE 21st Century Skills Handbook (2020), this study delves into the significance, components, and implementation of life skills (Flexibility, Leadership, Initiative, Productivity, Social & Cross-cultural skills - FLIPS).",
          "2. CHUNK TECHNOLOGY AS AN INTERVENTION",
          "CHUNK Technology—which stands for Competency, Heuristic, Unity, Nurture, and Knowledge Retention—emerges as a game-changing educational approach in a time when learners' attention and memory are challenged by an abundance of information. Chunking, which has its roots in cognitive load theory and is bolstered by Miller's (1956) research on the brain's ability to process 7±2 units of information at a time, makes it possible to break down complex stuff into digestible, meaningful chunks. This approach mirrors ancient Indian education, where knowledge was delivered in oral, poetic units like mantras, sutras, and shlokas (Rigveda, Taittiriya Upanishad), fostering long-term retention and moral insight."
        ]
      },
      {
        title: "Objectives & Hypotheses",
        content: [
          "3. OBJECTIVES OF THE STUDY",
          "- To Design and Develop the Chunk Technology Intervention Programme (CTIP) for life skills under 21st century skills for IX standard students.",
          "- To construct and standardize the life skills assessment test for IX standard students.",
          "- To compare the mean scores of life skills under 21st century skills of IX standard students before and after CTIP intervention.",
          "- To compare the mean scores of life skills between male and female students, and between urban and rural students.",
          "4. HYPOTHESES",
          "H1: There will be a significant difference in the mean scores of life skills under 21st century skills of IX standard students before and after CTIP intervention.",
          "H2: There will be a significant difference in the mean scores of Flexibility, Leadership, Initiative, Productivity, and Social & Cross-cultural skills before and after the intervention."
        ]
      },
      {
        title: "Methodology & Delimitation",
        content: [
          "5. RESEARCH METHODOLOGY",
          "This study applies a quantitative approach using Experimental research to establish a cause-and-effect relationship between the Chunk Technology intervention and life skills development.",
          "- Research Design: Non-equivalent Pre-test, Post-test, Control Group Design under Quasi-experimental design.",
          "- Sample: Total sample consists of 200 students of class IX residing in urban and rural areas of Kanpur City (100 urban, 100 rural).",
          "- Intervention Plan: A 20-week systematic execution focusing sequentially on Flexibility (Phase 1, Weeks 1-4), Leadership (Phase 2, Weeks 5-8), Initiative (Phase 3, Weeks 9-12), Productivity (Phase 4, Weeks 13-16), and Social & Cross-cultural skills (Phase 5, Weeks 17-20).",
          "6. DELIMITATIONS OF THE STUDY",
          "- Only Life Skills under the 21st century skills framework will be considered.",
          "- Only class IX standard students will be considered.",
          "- The study is delimited to Kanpur City only.",
          "- Only one Government and one Private school will be considered."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Effectiveness of Chatbot-Assisted Learning (CbAL) on Cognitive Load and Digital Socratic Engagement among Post-Graduate Students of Kanpur City",
    author: "Suraj Gupta",
    supervisor: "Dr. Vimal Singh (Research Guide)",
    type: 'phd',
    status: 'Proposal Approved',
    year: 2025,
    institution: "Department of Education, CSJM University, Kanpur",
    abstract: "This doctoral research proposal explores the impact of Chatbot-Assisted Learning (CbAL) on managing cognitive load and fostering digital Socratic engagement among post-graduate students in Kanpur City. Integrating Cognitive Load Theory, Constructivism, and Socratic dialogic methods, the study utilizes the CALiDE Framework to investigate how AI chatbots can serve as cognitive scaffolds and dialogic partners in higher education.",
    pdfPath: "/papers/chatbot-assisted-learning.pdf",
    pages: [
      {
        title: "Introduction & Theoretical Framework",
        content: [
          "DOCTORAL THESIS PROPOSAL",
          "Title: Effectiveness of Chatbot-Assisted Learning (CbAL) on Cognitive Load and Digital Socratic Engagement among Post-Graduate Students of Kanpur City",
          "Author: Suraj Gupta | Supervisor: Dr. Vimal Singh",
          "1. CONTEXT AND INTRODUCTION",
          "Learning is a lifelong process. Educational psychology emphasises that effective learning is not passive reception but an active process of inquiry, reflection, and participation. Technology-mediated, learner-centred pedagogies represent the evolution from Pedagogy 1.0 (teacher-centred) towards Pedagogy 5.0 (collaborative human-machine learning). Within this trajectory, Chatbot-Assisted Learning (CbAL) provides a vital innovation.",
          "AI-powered chatbots provide interactive dialogue, instant feedback, and adaptive pathways, reducing extraneous cognitive load and enhancing meaningful engagement. By simulating Socratic questioning, chatbots promote reflective inquiry and critical reasoning, extending the classical Socratic method into the digital age (Digital Socratic Engagement).",
          "2. CALiDE FRAMEWORK",
          "The proposed CALiDE Framework (Chatbot-Assisted Learning for Digital Engagement) conceptualizes chatbots as both cognitive scaffolds and dialogic partners. Drawing from Sweller's Cognitive Load Theory (CLT) and Vygotsky's Constructivism, it optimizes content delivery to reduce mental strain while fostering reflective Socratic dialogue."
        ]
      },
      {
        title: "Objectives & Hypotheses",
        content: [
          "3. OBJECTIVES OF THE STUDY",
          "- To develop and validate a CbAL framework for reducing Cognitive Load and enhancing Digital Socratic Engagement among Post-Graduate Students.",
          "- To construct a Module on the General Understanding of Research in the context of Cognitive Load and Digital Socratic Engagement.",
          "- To measure the effectiveness of Chatbot-Assisted Learning (CbAL) on Cognitive Load and Digital Socratic Engagement among Post-Graduate Students in Research Methodology.",
          "4. HYPOTHESES",
          "H01: The Post-Graduate Students in the experimental group will show a significantly lower Cognitive Load in Research Methodology in the post-test compared to the pre-test as a result of Chatbot-Assisted Learning (CbAL).",
          "H02: The Post-Graduate Students in the experimental group will show a significant increase in Digital Socratic Engagement in Research Methodology in the post-test compared to the pre-test due to Chatbot-Assisted Learning (CbAL)."
        ]
      },
      {
        title: "Methodology & Intervention",
        content: [
          "5. RESEARCH METHODOLOGY & DESIGN",
          "This study adopts a quantitative research approach with an experimental design to examine cause-and-effect relationships.",
          "- Research Design: Non-Randomised, Pre-test Post-Test, Control Group Design under a quasi-experimental research framework.",
          "- Sample & Population: 200 Post-Graduate Students (100 male, 100 female) enrolled at Chhatrapati Shahu Ji Maharaj University, Kanpur, selected via purposive and random sampling.",
          "- Intervention Plan: Based on Fink's Taxonomy of Learning (Foundational Knowledge, Application, Integration, Human Dimension, Caring, Learning How to Learn). Spans a multi-phase implementation: Phase I (Orientation & Preparation - 1 Week), Phase II (Weekly Chatbot-Guided Learning on Research Methodology DTM - 8 Weeks), Phase III (Consolidation & Post-Test - 1 Week), Phase IV (Data Analysis - 2 Weeks), and Phase V (Reporting & Reflection - 1 Week)."
        ]
      }
    ]
  }
]

export function ResearchRepositorySection() {
  const [activeTab, setActiveTab] = useState<'all' | 'phd' | 'med'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDoc, setSelectedDoc] = useState<ProposalDoc | null>(null)
  const [viewMode, setViewMode] = useState<'synopsis' | 'pdf'>('synopsis')
  
  // Immersive viewer state
  const [zoomLevel, setZoomLevel] = useState(100)

  // Disable key combinations globally inside document viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedDoc) {
        // Block print attempts (Ctrl + P)
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
          e.preventDefault()
          alert("Printing is disabled in this secure research repository.")
        }
        // Block save attempts (Ctrl + S)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault()
          alert("Saving is disabled in this secure research repository.")
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedDoc])

  const filteredDocs = repositoryData.filter((doc) => {
    const matchesTab = activeTab === 'all' || doc.type === activeTab
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.abstract.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  const openDocument = (doc: ProposalDoc) => {
    setSelectedDoc(doc)
    setZoomLevel(100)
    setViewMode(doc.pdfPath ? 'pdf' : 'synopsis')
  }

  const closeDocument = () => {
    setSelectedDoc(null)
  }

  return (
    <section id="research-repository" className="scroll-mt-20 py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal mb-3">
            <Shield className="h-3 w-3" /> Secure Research Repository
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
            Synopses &amp; Proposals Repository
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">
            A read-only archive of approved doctoral (Ph.D.) research synopses and postgraduate (M.Ed.) thesis proposals.
            All documents are secure and formatted for online reading only.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Subsections Toggle */}
          <div className="flex gap-1.5 rounded-xl bg-muted/80 p-1 border border-border max-w-md">
            {[
              { id: 'all', label: 'All Projects', icon: BookOpen },
              { id: 'phd', label: 'Ph.D. Synopses', icon: Shield },
              { id: 'med', label: 'M.Ed. Proposals', icon: FileSpreadsheet }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-muted-foreground hover:bg-muted hover:text-navy dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Search bar */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search repository..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-4 text-xs shadow-sm transition-all focus:border-royal focus:outline-none focus:ring-1 focus:ring-royal"
            />
          </div>
        </div>

        {/* Document Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredDocs.map((doc) => (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                      doc.type === 'phd'
                        ? 'bg-royal/10 text-royal'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {doc.type === 'phd' ? 'Ph.D. Synopsis' : 'M.Ed. Thesis'}
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">
                      Session {doc.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold leading-snug text-navy dark:text-white line-clamp-2">
                    {doc.title}
                  </h3>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-navy dark:text-white">Author:</span> {doc.author}
                    {doc.supervisor && (
                      <span className="block mt-0.5">
                        <span className="font-semibold text-navy dark:text-white">Supervisor:</span> {doc.supervisor}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {doc.abstract}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-medium text-amber-600 dark:text-amber-400">
                    <Lock className="h-3 w-3" /> Read-Only Profile
                  </div>
                  <button
                    onClick={() => openDocument(doc)}
                    className="flex items-center gap-1 rounded-xl bg-navy px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-royal transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" /> Read Proposal
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredDocs.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium text-muted-foreground">No synopses found matching your query.</p>
          </div>
        )}

      </div>

      {/* Immersive Document Reader Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none bg-black/80 backdrop-blur-sm">
            <style>{`
              @media print {
                body * {
                  display: none !important;
                }
              }
            `}</style>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onContextMenu={(e) => e.preventDefault()}
              className="relative flex h-[90vh] w-full max-w-5xl flex-col rounded-3xl border border-border/30 bg-muted overflow-hidden shadow-2xl"
            >
              
              {/* Reader Header Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-navy px-6 py-4 text-white gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="rounded bg-royal px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide">
                      {selectedDoc.type === 'phd' ? 'Ph.D.' : 'M.Ed.'} Reference Only
                    </span>
                    <h3 className="font-heading text-sm font-semibold truncate max-w-xs sm:max-w-md md:max-w-lg">
                      {selectedDoc.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  {/* View Mode Toggle */}
                  {selectedDoc.pdfPath && (
                    <div className="flex rounded-xl bg-white/10 p-0.5 text-xs font-semibold border border-white/5">
                      <button
                        onClick={() => setViewMode('synopsis')}
                        className={`rounded-lg px-3.5 py-1.5 transition-all cursor-pointer ${
                          viewMode === 'synopsis' ? 'bg-white text-navy font-bold shadow-sm' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        Synopsis
                      </button>
                      <button
                        onClick={() => setViewMode('pdf')}
                        className={`rounded-lg px-3.5 py-1.5 transition-all cursor-pointer ${
                          viewMode === 'pdf' ? 'bg-white text-navy font-bold shadow-sm' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        Full PDF
                      </button>
                    </div>
                  )}

                  {/* Zoom Controls (only shown for Synopsis text reader) */}
                  {viewMode === 'synopsis' && (
                    <div className="hidden items-center gap-1.5 rounded-lg bg-white/10 p-0.5 sm:flex">
                      <button
                        onClick={() => setZoomLevel(Math.max(75, zoomLevel - 15))}
                        className="rounded p-1 hover:bg-white/10"
                        title="Zoom Out"
                      >
                        <ZoomOut className="h-3.5 w-3.5" />
                      </button>
                      <span className="text-[10px] font-semibold w-10 text-center">
                        {zoomLevel}%
                      </span>
                      <button
                        onClick={() => setZoomLevel(Math.min(150, zoomLevel + 15))}
                        className="rounded p-1 hover:bg-white/10"
                        title="Zoom In"
                      >
                        <ZoomIn className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}

                  <button
                    onClick={closeDocument}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Secure Notification Warning Panel */}
              <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2 flex items-center justify-between text-xs text-amber-600 dark:text-amber-400">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span><strong>Secure Reader:</strong> Text copying, downloading, and printing have been disabled to protect researcher copyrights.</span>
                </div>
              </div>

              {/* Reader Body (Paper Container or Iframe) */}
              <div className={`flex-1 ${viewMode === 'pdf' ? 'p-0 overflow-hidden' : 'overflow-y-auto p-6 md:p-8 flex justify-center'} bg-[#f0f2f5] dark:bg-[#121824]`}>
                {viewMode === 'pdf' && selectedDoc.pdfPath ? (
                  <iframe
                    src={`${selectedDoc.pdfPath}#toolbar=0&navpanes=0&scrollbar=1`}
                    className="w-full h-full border-none bg-white"
                    title={selectedDoc.title}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                ) : (
                  <div
                    style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                    className="w-full max-w-3xl transition-transform duration-200"
                  >
                    
                    {/* Document Pages Loop */}
                    {selectedDoc.pages.map((page, pIdx) => (
                      <div
                        key={pIdx}
                        className="relative min-h-[700px] bg-white text-gray-800 shadow-lg rounded-2xl border border-gray-200 p-12 mb-8 overflow-hidden select-none font-serif leading-relaxed text-sm"
                      >
                        
                        {/* Secure Watermark Backdrop */}
                        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03] rotate-45">
                          <span className="text-4xl font-sans font-bold tracking-widest text-navy text-center uppercase whitespace-pre-line leading-loose w-[800px]">
                            DR. VIMAL SINGH RESEARCH REPOSITORY{"\n"}
                            FOR READ ONLY REFERENCE - DO NOT COPY
                          </span>
                        </div>

                        {/* Page Header */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-6 text-xs font-sans text-gray-400 tracking-wider">
                          <span>DR. VIMAL SINGH — RESEARCH REPOSITORY</span>
                          <span>SECTION: {selectedDoc.type.toUpperCase()}</span>
                        </div>

                        {/* Page Title */}
                        <h4 className="font-sans text-base font-bold text-[#0F1E36] border-l-4 border-royal pl-3.5 mb-6 uppercase tracking-wide">
                          {page.title}
                        </h4>

                        {/* Page Content paragraphs */}
                        <div className="space-y-4 text-justify text-[13px] text-gray-700 whitespace-pre-line">
                          {page.content.map((paragraph, paraIdx) => (
                            <p key={paraIdx} className="indent-4">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Page Footer */}
                        <div className="absolute bottom-6 left-12 right-12 flex justify-between items-center text-[10px] font-sans text-gray-400 border-t border-gray-100 pt-3">
                          <span>Institution: {selectedDoc.institution}</span>
                          <span>Page {pIdx + 1} of {selectedDoc.pages.length}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Reader Status Bar */}
              <div className="bg-navy border-t border-white/10 px-6 py-3 flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-royal" /> 256-bit Document View Protection Active</span>
                <span>Copyright © {selectedDoc.year} {selectedDoc.author}. All Rights Reserved.</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

