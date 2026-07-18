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
    id: 1784373897749,
    title: "Generative Artificial Intelligence (GAI) and Outcome Based Education (OBE): An Experimental Study",
    author: "Saumya Tripathi",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: "med",
    status: "Proposal Approved",
    year: 2025,
    institution: "Department of Education, School of Teacher Education, CSJMU Kanpur",
    abstract: "",
    pdfPath: "https://drive.google.com/file/d/1HCkVrFE1I8rjnQdKby3rmnMTBBuDAGjj/preview",
    pages: [
      {
        title: "Synopsis Details",
        content: [
          "Author: Saumya Tripathi | Supervisor: Dr. Vimal Singh (Supervisor)",
          ""
        ]
      }
    ]
  },

  

  

  {
    id: 1784373378879,
    title: "Effectiveness of Chatbot-Assisted Learning (CbAL ) on Cognitive Load and Digital Socratic Engagement among Post-Graduate Students of Kanpur City",
    author: "Suraj Gupta",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: "phd",
    status: "Proposal Approved",
    year: 2025,
    institution: "Department of Education, School of Teacher Education, CSJMU Kanpur",
    abstract: "",
    pdfPath: "https://drive.google.com/file/d/1-CJRU7OnJEv9qvAyBsZYl10VeG6j3eXi/preview",
    pages: [
      {
        title: "Synopsis Details",
        content: [
          "Author: Suraj Gupta | Supervisor: Dr. Vimal Singh (Supervisor)",
          ""
        ]
      }
    ]
  },

  {
    id: 1784372986811,
    title: "Effectiveness of Chunk Technology Intervention Programme (CTIP) on 21st Century Skills of Secondary School Students",
    author: "Mahima Tripathi",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: "phd",
    status: "Proposal Approved",
    year: 2025,
    institution: "Department of Education, School of Teacher Education, CSJMU Kanpur",
    abstract: "",
    pdfPath: "https://drive.google.com/file/d/1Pf1ZTTvxc-FTW1ywXMK6tsXfpZNvzgnK/view",
    pages: [
      {
        title: "Synopsis Details",
        content: [
          "Author: Mahima Tripathi | Supervisor: Dr. Vimal Singh (Supervisor)",
          ""
        ]
      }
    ]
  },

  {
    id: 3,
    title: "Effectiveness of Traditional Educational Games Model (TEGM) on Achievement in Mathematics of Middle Stage Students of Public Schools of Fatehpur",
    author: "Anjali Devi",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: 'med',
    status: 'Proposal Approved',
    year: 2025,
    institution: "Department of Education, School of Teacher Education, CSJMU Kanpur",
    abstract: "This dissertation synopsis investigates the effectiveness of the Traditional Educational Games Model (TEGM) on mathematics achievement among middle stage (Class 6) students of public schools in Fatehpur. The study uses a quantitative quasi-experimental pre-test post-test design with a sample size of 50 students to examine if integrating traditional games into the math curriculum enhances performance, engagement, and reduces anxiety in resource-constrained environments.",
    pdfPath: "/papers/synopsis-anjali-devi.pdf",
    pages: [
      {
        title: "Introduction & Rationale",
        content: [
          "M.ED. DISSERTATION SYNOPSIS",
          "Title: Effectiveness of Traditional Educational Games Model (TEGM) on Achievement in Mathematics of Middle Stage Students of Public Schools of Fatehpur",
          "Author: Anjali Devi | Supervisor: Dr. Vimal Singh",
          "1. INTRODUCTION & RATIONALE",
          "Education is a continuous process of learning and acquiring knowledge, skills, values, and habits, which fosters the holistic development (mental, physical, social, spiritual) of a human being. Education occurs through both formal and informal methods, making human beings capable of living in society and instilling a sense of morality and tolerance within them.",
          "One of the key concerns in the current education system is the declining interest and low achievement in mathematics, especially among middle stage students in both public and private schools. Mathematics is a core subject that forms the foundation of logical thinking and problem-solving skills. However, the continued reliance on traditional lecture-based methods often results in rote memorization, lack of engagement, and poor conceptual understanding among learners.",
          "Traditional educational game models (TEGM) offer a solution by integrating indigenous games and play-based learning into the mathematics curriculum. Games like hopscotch, stick games, number puzzles, and board games have long been a part of Indian culture. These games are interactive, collaborative, and hands-on, which makes mathematical concepts more relatable, enjoyable, and easier to grasp. Unlike modern digital tools, traditional games are low-cost, easily accessible, and can be implemented in both resource-rich and resource-poor settings."
        ]
      },
      {
        title: "Need & Objectives",
        content: [
          "2. NEED AND SIGNIFICANCE & JUSTIFICATION OF THE STUDY",
          "- Mathematics is a core subject that significantly influences students' logical thinking and academic success. However, many middle-stage students show low achievement and disinterest, especially in traditional classrooms. Public schools often lack resources, while private schools may not use culturally engaging methods. The need arises for a low-cost, effective, and inclusive teaching approach.",
          "- Traditional Educational Games Model (TEGM) offers a culturally relevant, interactive, and engaging method that may improve mathematical learning outcomes in both public and private school contexts.",
          "3. OBJECTIVES OF THE STUDY",
          "1) To established the framework of TEGM model.",
          "2) To study the effect of TEGM on Achievement in Mathematics of middle stage students of public schools.",
          "3) To compare the effectiveness of Traditional Educational Games Model (TEGM) on Achievement in Mathematics of Middle Stage Students of public school by comparing pretest between control and experimental group.",
          "4) To compare effectiveness of Traditional Educational Games Model (TEGM) on Achievement in Mathematics of Middle Stage Students of Public Schools by pre-test and post-test within the experimental group.",
          "5) To compare the effectiveness of Traditional Educational Games Model (TEGM) on Achievement in Mathematics of Middle Stage Students of public school by comparing posttest between control and experimental group."
        ]
      },
      {
        title: "Methodology & Sample",
        content: [
          "4. RESEARCH METHODOLOGY",
          "This study applies a quantitative research approach with an experimental design to examine cause-and-effect relationships.",
          "- Research Design: Quasi-Experimental Design (Non-Randomized Control Group Pre-test, Post-test Design) will be used.",
          "- Population of the Study: All middle-stage (specifically Class 6) students of public and private schools in Fatehpur district constitute the population.",
          "- Sample and Sampling Techniques: Purposive sampling procedure will be utilized for school selection, and simple random sampling will be used for student selection. A sample size of 50 students of public school (25 students in the Experimental group, 25 students in the Controlled group) will be selected.",
          "- Tools: Self-constructed and validated achievement test of mathematics.",
          "- Data Analysis: Appropriate statistical techniques (Mean, Standard Deviation, t-test, ANOVA, Graphical representation) will be used to interpret and analyze the data."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "A Study of E-Resource Satisfaction Among Post Graduate Level Students Studying in Chhatrapati Sahu Ji Maharaj University Kanpur",
    author: "Divya Rajput",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: 'med',
    status: 'Proposal Approved',
    year: 2025,
    institution: "Department of Education, School of Teacher Education, CSJMU Kanpur",
    abstract: "This M.Ed. dissertation synopsis investigates user satisfaction and usage patterns of electronic resources (e-resources) among postgraduate level students (M.Ed. and M.Sc. Biotech) at CSJMU Kanpur. Using a descriptive survey research design with a sample size of 200 students, the research identifies key factors influencing user satisfaction, examines the frequency of e-resource utilization, and provides insights into enhancing digital libraries.",
    pdfPath: "/papers/synopsis-divya-rajput.pdf",
    pages: [
      {
        title: "Introduction & Context",
        content: [
          "M.ED. DISSERTATION SYNOPSIS",
          "Title: A Study of E-Resource Satisfaction Among Post Graduate Level Students Studying in Chhatrapati Sahu Ji Maharaj University Kanpur",
          "Author: Divya Rajput | Supervisor: Dr. Vimal Singh",
          "1. INTRODUCTION & BACKGROUND",
          "Education is the backbone of human development. Without it, neither the complete development of the individual, nor of society nor of civilization is possible. Education has laid the foundation of modern inventions, industrial revolution and digital age. In the current era, information and communication technology (ICT) assumes an essential role in the advancement of education, and to help improve the quality of services.",
          "The appearance of e-resources is a rising advancement of this age, which is profoundly influencing the scholastic and academic community. An electronic resource is an information source that provides information in an electronic format, including online databases, electronic journals, electronic books, OPACs, CD-ROMs, and websites. Due to electronic resources, education is not limited to the classroom but has become accessible to everyone through mobile and internet.",
          "When there is so much dependence on e-resource, it is important to know how much that resource is meeting the expectations of the people. To what extent is it able to fulfill their needs, due to which the concept of satisfaction towards e-resources was born."
        ]
      },
      {
        title: "Rationale & Objectives",
        content: [
          "2. NEED, SIGNIFICANCE AND JUSTIFICATION OF THE STUDY",
          "At present, the use of e-resources as research work and study material is an important basis of academic movement. With the increasing dependency of learners on e-resources, it becomes necessary to know whether the e-resources are meeting their requirements or not, for which it is important to know their satisfaction level. This will promote innovation and training among learners and contribute meaningfully to their learning and research outcomes.",
          "3. OBJECTIVES OF THE STUDY",
          "1. To construct the tool on e-resource satisfaction.",
          "2. To compare the level of e-resource satisfaction among post graduate level students.",
          "2.1 To compare the mean scores of e-resource satisfaction among male and female students.",
          "2.2 To compare the mean scores of e-resource satisfaction among teacher education and science stream students.",
          "2.3 To compare the mean scores of e-resource satisfaction among urban and rural students.",
          "4. HYPOTHESES",
          "H01: There is no significant difference between the mean scores of e-resource satisfaction among male and female students.",
          "H02: There is no significant difference between the mean scores of e-resource satisfaction among teacher education and science stream students.",
          "H03: There is no significant difference between the mean scores of e-resource satisfaction among urban and rural students."
        ]
      },
      {
        title: "Methodology & Sampling",
        content: [
          "5. RESEARCH METHODOLOGY",
          "- Approach of Research: Quantitative research approach will be used in this study, because the data obtained will be numerical in nature.",
          "- Type of Research: Descriptive research will be used, because this study attempts to describe and explain what exists in presence.",
          "- Method of the Study: Survey method will be used, to know students' opinions on e-resource satisfaction.",
          "- Population & Sample: The population consists of all postgraduate students studying in CSJMU, Kanpur UP. A sample of 200 students will be selected using random sampling techniques (100 male and 100 female students, further divided into 50 teacher education and 50 science stream students, with 25 urban and 25 rural students in each category).",
          "- Tools: Self-constructed and standardized questionnaire will be used for collecting data.",
          "- Treatment of Data: Quantitative data will be analyzed using statistical techniques including Mean, Standard Deviation, and t-test to interpret the results."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "A Study of the Awareness of NEP 2020 among Primary School Teachers of Kanpur City",
    author: "Rachana Yadav",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: 'med',
    status: 'Proposal Approved',
    year: 2025,
    institution: "Department of Education, School of Teacher Education, CSJMU Kanpur",
    abstract: "This dissertation proposal assesses the level of awareness of the National Education Policy (NEP 2020) among primary school teachers in Kanpur City. Utilizing a descriptive survey research design with a sample of 200 teachers from government and private primary schools, the study compares awareness levels across gender and school categories to identify critical gaps and recommend targeted professional development.",
    pdfPath: "/papers/synopsis-rachana-yadav.pdf",
    pages: [
      {
        title: "Introduction & Context",
        content: [
          "M.ED. DISSERTATION SYNOPSIS",
          "Title: A Study of the Awareness of NEP 2020 among Primary School Teachers of Kanpur City",
          "Author: Rachana Yadav | Supervisor: Dr. Vimal Singh",
          "1. INTRODUCTION & OVERVIEW",
          "The NEP 2020 is one of the major education frameworks after the NEP 1986. The policy aims to provide not only universal education but also quality education by imparting language and skill developments through its new course of lessons. The NEP 2020 plans to completely alter the structure of traditional education in India, transforming elementary education by introducing several reforms and changes in the policy.",
          "The National Education Policy reconfigures the curricular and pedagogical structure of school education from the legacy (10+2+3) model into a new (5+3+3+4) structure corresponding to developmental stages: Foundational (ages 3-8), Preparatory (ages 8-11), Middle (ages 11-14), and Secondary (ages 14-18) stages.",
          "Furthermore, it plans to develop a comprehensive curriculum framework focusing specifically on foundational literacy and numeracy (NIPUN Bharat) and digital infrastructures like DIKSHA to bridge the digital divide and ensure equal access to quality education."
        ]
      },
      {
        title: "Need & Objectives",
        content: [
          "2. NEED, SIGNIFICANCE & JUSTIFICATION OF THE STUDY",
          "- Policy Implementation: The NEP 2020 introduces significant reforms, and the effective implementation depends on the awareness and understanding of teachers. Assessing the awareness level of teachers in Kanpur will provide insights into their preparedness, knowledge gaps, and potential challenges in translating policy objectives into classroom practices.",
          "- Teacher Professional Development: Understanding the awareness level of teachers can help identify specific areas where they require further training, guiding policymakers and institutions in designing targeted programs.",
          "3. OBJECTIVES OF THE STUDY",
          "1. To develop an awareness tool on NEP 2020 awareness.",
          "2. To compare the mean score of awareness of NEP 2020 of Government and private school teachers.",
          "3. To compare the mean scores of awareness of NEP 2020 among the male and female teachers teaching in Government and private schools.",
          "4. HYPOTHESES",
          "H01: There is no significant difference between the mean scores of NEP awareness of Government and private school teachers.",
          "H02: There is no significant difference between the mean scores of awareness of NEP 2020 among the male and female teachers teaching in Government and private schools."
        ]
      },
      {
        title: "Methodology & Sampling",
        content: [
          "5. RESEARCH METHODOLOGY",
          "- Approach of Research: Quantitative approach to examine policy awareness among primary school teachers.",
          "- Type of Research: Descriptive research for the collection of data on the teacher population in Kanpur city.",
          "- Method of Research: Survey method using self-constructed questionnaires to check awareness.",
          "- Sample & Sampling: A sample of 200 primary school teachers will be selected using stratified random sampling (100 teachers from Government schools, 100 teachers from private schools, with 50 male and 50 female teachers in each category).",
          "- Delimitations: The study is delimited to primary teachers appointed in government & private schools of the district Kanpur only.",
          "- Data Analysis: Statistical techniques including Mean, Standard Deviation, and t-test will be used for this study."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "A Study of Algorithmic Bias on Inter-sectional Identities: A Socio-Educational study among Postgraduate Students of Kanpur city",
    author: "Mansi Singh",
    supervisor: "Dr. Vimal Singh (Supervisor)",
    type: 'med',
    status: 'Proposal Approved',
    year: 2025,
    institution: "School of Teacher Education, CSJMU Kanpur",
    abstract: "This socio-educational dissertation synopsis examines postgraduate students' perceptions of algorithmic bias and its impact on their intersectional identities (gender, socioeconomic background, geography) in Kanpur City. Utilizing qualitative research methodology with interviews and survey feedback from 200 participants, the study investigates how AI-driven learning tools shape academic identities and user experiences.",
    pdfPath: "/papers/synopsis-mansi-singh.pdf",
    pages: [
      {
        title: "Introduction & Concepts",
        content: [
          "M.ED. DISSERTATION SYNOPSIS",
          "Title: A Study of Algorithmic Bias on Inter-sectional Identities: A Socio-Educational study among Postgraduate Students of Kanpur city",
          "Author: Mansi Singh | Supervisor: Dr. Vimal Singh",
          "1. INTRODUCTION & BACKGROUND",
          "The world is heavily reliant on machine learning technologies and artificial intelligence (AI) these days. In actuality, AI algorithms that claim to improve precision and efficacy are also prone to reproducing and strengthening societal prejudices. Social prejudices in technological terms could be explained by the term 'Algorithmic bias'—a socio-technical phenomenon where social biases manifest in algorithms' results, affecting marginalized and underprivileged communities.",
          "In digital education, students interact with AI systems and search engines, constructing a 'new algorithmic identity' for themselves. This study utilizes the lens of 'Intersectionality'—first coined by law intellectual Kimberle Crenshaw to evaluate how gender, class, race, and geographic background function as overlapping, intersecting categories—to understand how students perceive the impact of algorithmic bias on their academic identities."
        ]
      },
      {
        title: "Need & Objectives",
        content: [
          "2. NEED AND SIGNIFICANCE OF THE PROBLEM",
          "Unlike human tutors, AI lacks empathy and contextual understanding. Integrated with algorithmic biases, it could affect student motivation, mental health, and confidence. For example, automated assessment tools trained in western English accents may flag native accents as mistakes, putting students in self-doubt. Little research has been done on the philosophical, social, and educational determinants of AI bias, and this study aims to close that experiential gap.",
          "3. RESEARCH QUESTIONS",
          "1. What are the philosophical, social and educational determinants of artificial intelligence?",
          "2. What is the idea of Inter-subjectivity in AI?",
          "3. What are the influences of Algorithmic bias on Inter-sectional Identities of postgraduate students in Kanpur city?",
          "4. What are the gender, demography, and stream-based perceptions on algorithmic bias and its role in shaping academic identities?"
        ]
      },
      {
        title: "Methodology & Sample",
        content: [
          "4. RESEARCH METHODOLOGY",
          "- Approach: Qualitative research approach using survey method to investigate algorithmic bias perceptions.",
          "- Population: Postgraduate students and software professionals of Kanpur City engaged with AI-driven academic platforms.",
          "- Sample & Sampling: Purposive sampling consisting of up to 200 postgraduate students (100 M.Ed. and 100 M.A. students, with equal representation of rural/urban and male/female categories).",
          "- Tools: In-depth exploratory interviews and a self-made opinionnaire for collecting student and professional feedback.",
          "- Data Treatment: Quantitative analysis, content analysis, narrative analysis, and transcription analysis will be used to find recurring themes and patterns."
        ]
      }
    ]
  }
]

const getEmbedUrl = (url?: string) => {
  if (!url) return ''
  if (url.includes('drive.google.com') && url.includes('/view')) {
    return url.replace('/view', '/preview')
  }
  return url
}

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
                  {/* Zoom Controls (only shown for Synopsis text reader when PDF is not available) */}
                  {!selectedDoc.pdfPath && (
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
              <div className={`flex-1 ${selectedDoc.pdfPath ? 'p-0 overflow-hidden' : 'overflow-y-auto p-6 md:p-8 flex justify-center'} bg-[#f0f2f5] dark:bg-[#121824]`}>
                {selectedDoc.pdfPath ? (
                  <iframe
                    src={`${getEmbedUrl(selectedDoc.pdfPath)}#toolbar=0&navpanes=0&scrollbar=1`}
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

