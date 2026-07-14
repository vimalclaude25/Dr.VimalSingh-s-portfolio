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
  pages: {
    title: string
    content: string[]
  }[]
}

const repositoryData: ProposalDoc[] = [
  {
    id: 1,
    title: "A Study of Personality and Values of Students Studying in Institutions based on Different Ideologies",
    author: "Dr. Vimal Singh",
    supervisor: "Prof. (Dr.) I. B. S. Lucknow",
    type: 'phd',
    status: 'Completed / Awarded',
    year: 2021,
    institution: "University of Lucknow, Lucknow U.P.",
    abstract: "This doctoral study explores the relationship between educational ideologies (such as Gurukul systems, missionary schools, and modern secular setups) and the personality traits/value orientations of students. Using standardized psychological scales, the research maps how institutional frameworks mold ethical values and personality dimensions.",
    pages: [
      {
        title: "Title Page & Introduction",
        content: [
          "DOCTORAL THESIS SYNOPSIS",
          "Title: A Study of Personality and Values of Students Studying in Institutions based on Different Ideologies",
          "Author: Dr. Vimal Singh | Department of Education, University of Lucknow",
          "1. BACKGROUND OF THE STUDY",
          "Education is a powerful instrument of social change and personal growth. The foundation of any educational institution rests on its core ideology. Ideologies like Idealism, Naturalism, Pragmatism, and spiritual teachings govern the climate of schools. In India, various institutions operate under distinct ideological missions: Gurukul-inspired frameworks, Christian missionary foundations, and state-backed secular boards. This research aims to understand if these environments lead to statistically significant differences in student value systems and personality patterns."
        ]
      },
      {
        title: "Research Objectives & Hypotheses",
        content: [
          "2. OBJECTIVES OF THE STUDY",
          "- To compare the personality profiles of students enrolled in traditional-ideology, religious-missionary, and secular-modern educational institutions.",
          "- To evaluate the moral, social, aesthetic, and intellectual values held by students across these boards.",
          "- To analyze the moderating effect of gender and socio-economic status on student value alignments.",
          "3. HYPOTHESES",
          "H1: There is no significant difference in the emotional stability and extroversion scores of students across different institutional ideologies.",
          "H2: Moral and spiritual values are significantly higher in traditional-ideology schools compared to modern secular setups."
        ]
      },
      {
        title: "Methodology & Research Design",
        content: [
          "4. METHODOLOGY AND RESEARCH TOOLS",
          "This study adopts a descriptive survey design with a sample of 600 secondary school students in Uttar Pradesh.",
          "- Sampling Technique: Stratified Random Sampling.",
          "- Research Tools Used:",
          "  a) High School Personality Questionnaire (HSPQ) by Cattell.",
          "  b) Value Orientation Scale (VOS) developed by the researcher.",
          "  c) Personal Data Sheet for socio-economic background mapping.",
          "- Data Analysis: Analysis of Variance (ANOVA), t-tests, and post-hoc comparisons were conducted to identify distinct behavioral variations."
        ]
      },
      {
        title: "Major Findings & Bibliography",
        content: [
          "5. MAJOR FINDINGS",
          "- Students in traditional-ideology schools scored significantly higher in self-reliance, moral sensitivity, and co-operative values.",
          "- Modern secular institution students exhibited higher dimensions of competitive drive, technological aptitude, and social extroversion.",
          "- Institutional climate strongly predicts value orientation scores, surpassing household socio-economic variables in variance models.",
          "6. SELECT BIBLIOGRAPHY",
          "- Dewey, J. (1916). Democracy and Education. Macmillan.",
          "- Cattell, R. B. (1973). Personality and Mood by Questionnaire. Jossey-Bass.",
          "- Singh, V. (2021). Doctoral Dissertation, University of Lucknow."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Construction and Standardization of An Opinionnaire on ChatGPT Integration in Classroom Pedagogy",
    author: "M.Ed. Research Team",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: 'med',
    status: 'Completed',
    year: 2024,
    institution: "School of Teacher Education, CSJMU",
    abstract: "This M.Ed. dissertation details the systematic steps involved in constructing, pilot-testing, and standardizing an opinionnaire designed to measure teacher candidates' attitudes towards AI chatbot tools (ChatGPT) in classroom instruction, addressing reliability and item analysis.",
    pages: [
      {
        title: "Introduction & Context",
        content: [
          "M.ED. DISSERTATION SYNOPSIS",
          "Title: Construction and Standardization of An Opinionnaire on ChatGPT Integration in Classroom Pedagogy",
          "Department of Teacher Education, CSJM University, Kanpur",
          "1. CONTEXT & PROBLEM FORMULATION",
          "The rise of Generative AI tools (particularly Large Language Models like ChatGPT) has disrupted traditional teaching methods. Educators are divided between absolute bans and collaborative integration. However, there is a lack of standardized assessment tools in India to evaluate pre-service teachers' perceptions, self-efficacy, and anxiety levels regarding AI pedagogy. This study addresses that gap by standardizing a Likert-scale opinionnaire."
        ]
      },
      {
        title: "Standardization Process & Psychometrics",
        content: [
          "2. ITEM POOL GENERATION & CRITERIA",
          "An initial pool of 45 statements (23 positive, 22 negative) was drafted covering three domains: Pedagogical Utility, Ethical Concerns, and Technical Self-Efficacy.",
          "3. PILOT TESTING AND PSYCHOMETRIC EVALUATION",
          "The draft tool was administered to 120 pre-service teacher candidates. Item analysis was conducted using the 't-value' method (Comparison of Upper 27% and Lower 27% groups). Items with t-values < 1.75 were discarded.",
          "4. RELIABILITY & VALIDITY INDEX",
          "- Reliability: Cronbach's Alpha was computed at 0.84, showing strong internal consistency.",
          "- Validity: Content validity was verified by a panel of 5 educational technologists. Construct validity was validated using exploratory factor analysis."
        ]
      },
      {
        title: "Conclusion & Scale Application",
        content: [
          "5. CONCLUSION",
          "The final standardized scale contains 26 items (13 positive, 13 negative) scored on a 5-point Likert scale (Strongly Agree to Strongly Disagree). This tool is now recommended for assessing digital readiness and AI anxiety indices in teacher training programs across Uttar Pradesh state universities.",
          "6. REFERENCES",
          "- Bruner, J. (1996). The Culture of Education. Harvard University Press.",
          "- CSJMU AI Lab Guidelines (2024)."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "AI-Powered Adaptive Assessment Frameworks in Higher Education",
    author: "Ph.D. Scholar Research Proposal",
    supervisor: "Dr. Vimal Singh (Research Guide)",
    type: 'phd',
    status: 'Proposal Approved',
    year: 2025,
    institution: "IGNOU / CSJMU Collaborative Research Centre",
    abstract: "A research proposal that designs cognitive-load-aware adaptive testing systems. Using AI algorithms, the testing module dynamically calibrates question difficulties, response time windows, and hints matching real-time student cognitive indices.",
    pages: [
      {
        title: "Executive Summary & Tech Stack",
        content: [
          "RESEARCH PROPOSAL SYNOPSIS",
          "Title: AI-Powered Adaptive Assessment Frameworks in Higher Education",
          "1. EXECUTIVE SUMMARY",
          "Traditional linear assessments fail to measure individual cognitive growth. High-performers experience boredom, while low-performers suffer testing anxiety. This proposal details a model for adaptive testing. By integrating Machine Learning classification algorithms, the assessment engine analyzes question response latency and error patterns to adjust the difficulty tier dynamically."
        ]
      },
      {
        title: "Theoretical Framework & Algorithmic Design",
        content: [
          "2. THEORETICAL FRAMEWORK",
          "The proposal is grounded in Vygotsky's Zone of Proximal Development (ZPD) and Sweller's Cognitive Load Theory. The goal is to keep testing items within the candidate's active ZPD zone.",
          "3. SYSTEM ARCHITECTURE",
          "- Item Bank: Organized using Item Response Theory (IRT) parameters (Difficulty, Discrimination, Guessing coefficients).",
          "- Adaptation Algorithm: Bayes Network updates the estimated candidate ability parameter after each answer submission.",
          "- UI/UX Interface: Clean, accessible interface mimicking Coursera/Notion workflows."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Implementation Challenges of Choice-Based Credit System (CBCS) in Teacher Education",
    author: "M.Ed. Scholar Thesis",
    supervisor: "Dr. Vimal Singh (Advisor)",
    type: 'med',
    status: 'Completed',
    year: 2023,
    institution: "School of Teacher Education, CSJMU",
    abstract: "An analysis of the administrative and pedagogical hurdles faced by colleges in implementing the Choice-Based Credit System (CBCS). Focuses on credit transfer calculations, elective availability, infrastructure constraints, and timetable scheduling models.",
    pages: [
      {
        title: "Background & Statement of Problem",
        content: [
          "M.ED. DISSERTATION OUTLINE",
          "Title: Implementation Challenges of Choice-Based Credit System (CBCS) in Teacher Education",
          "1. BACKGROUND & PROBLEM STATEMENT",
          "The CBCS is a student-centric system designed to offer interdisciplinary course choices. However, its implementation in affiliated colleges of state universities faces massive logistical barriers. This study examines administrative challenges (lack of teachers, lack of digital timetabling software, rigid credit transfer norms) and proposes systematic remedies."
        ]
      },
      {
        title: "Objectives & Findings",
        content: [
          "2. RESEARCH QUESTIONS",
          "- What are the structural roadblocks in credit evaluation under CBCS?",
          "- How do students perceive the availability of truly interdisciplinary options?",
          "3. KEY FINDINGS",
          "- 72% of colleges offer only mock 'choices' due to faculty shortages.",
          "- Timetable clashes prevent 84% of candidates from picking cross-departmental electives.",
          "- Credit transfers between colleges remain non-functional due to system incompatibility."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Pedagogy 5.0: Integrating Generative AI Prompting in Teacher Training Curricula",
    author: "Dr. Vimal Singh (Lead Investigator)",
    type: 'phd',
    status: 'Under Review',
    year: 2026,
    institution: "National Workshop & Curricular Reform Council",
    abstract: "A curriculum design proposal focusing on integrating Prompt Engineering as a fundamental skill inside B.Ed. and M.Ed. syllabi. Includes lesson plans, testing rubrics, and evaluation benchmarks for assessing AI-assisted lesson plan generation.",
    pages: [
      {
        title: "Curricular Framework",
        content: [
          "CURRICULUM POLICY PROPOSAL",
          "Title: Pedagogy 5.0: Integrating Generative AI Prompting in Teacher Training Curricula",
          "1. PROPOSED CORE UNIT MODULES",
          "- Unit I: Basics of LLMs & Generative AI in Classrooms.",
          "- Unit II: Prompt Engineering: Crafting Lesson Plans, Rubrics, and Interactive Quiz Models.",
          "- Unit III: AI Ethics: Plagiarism, Bias, and Safety in K-12 Classrooms.",
          "- Unit IV: Practical Lab: Creating Co-Teacher Chatbots using low-code tools."
        ]
      },
      {
        title: "Evaluation Metrics",
        content: [
          "2. EVALUATION METRICS AND TESTING",
          "Pre-service teachers are evaluated on their ability to prompt chatbots to generate scaffolding scripts for diverse learners (e.g. remedial lesson plans vs. advanced extension worksheets).",
          "3. CRITERIA",
          "- Prompt Clarity & Constraint specification (40%)",
          "- Accuracy & alignment of AI outputs to state school boards (40%)",
          "- Ethical disclosure & editing checks (20%)"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Constructing and Standardizing a General Anxiety Scale for Post-Graduate Students",
    author: "M.Ed. Research Cohort",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: 'med',
    status: 'Completed / Awarded',
    year: 2025,
    institution: "CSJM University School of Teacher Education",
    abstract: "A psychometric study mapping the standardization of an anxiety scale designed specifically for PG students facing competitive examinations. Establishes norms, percentile scales, and regression models for academic stress indicators.",
    pages: [
      {
        title: "Background & Norms",
        content: [
          "PSYCHOMETRIC TEST MANUAL",
          "Title: General Anxiety Scale for Post-Graduate Students (GAS-PGS)",
          "1. PSYCHOMETRIC DESIGN",
          "This scale measures cognitive, physiological, and emotional anxiety markers in students preparing for national competitive exams (e.g. UGC NET).",
          "2. STANDARDIZATION & PERCENTILE NORMS",
          "Norms were established on a sample of 450 post-graduate candidates. High scores (> 18 on a 24-point scale) indicate severe anxiety requiring counselor intervention."
        ]
      }
    ]
  }
]

export function ResearchRepositorySection() {
  const [activeTab, setActiveTab] = useState<'all' | 'phd' | 'med'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDoc, setSelectedDoc] = useState<ProposalDoc | null>(null)
  
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
              <div className="flex items-center justify-between bg-navy px-6 py-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-gold">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="rounded bg-royal px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide">
                      {selectedDoc.type === 'phd' ? 'Ph.D.' : 'M.Ed.'} Reference Only
                    </span>
                    <h3 className="font-heading text-sm font-semibold truncate max-w-md sm:max-w-xl">
                      {selectedDoc.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Zoom Controls */}
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

              {/* Reader Body (Paper Container) */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 flex justify-center bg-[#f0f2f5] dark:bg-[#121824]">
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

