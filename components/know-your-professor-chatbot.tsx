'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Sparkles, User, HelpCircle } from 'lucide-react'
import {
  personalInfo,
  teachingExperience,
  academicAchievements,
  professionalQualifications,
  researchGuidance,
  patents,
  researchProjects,
  consultancy,
  books,
  scales,
  journalPublications,
  bookChapters,
  inviteeLectures,
  peerReviewServiceData
} from '@/lib/cv-data'

interface Message {
  id: string
  sender: 'user' | 'bot'
  text: string
  timestamp: Date
}

const SUGGESTIONS = [
  { text: 'What are your patents?', icon: Sparkles },
  { text: 'Show publication stats', icon: MessageSquare },
  { text: 'Peer Review & Editorial Service', icon: MessageSquare },
  { text: 'Get contact information', icon: HelpCircle },
]

interface Intent {
  name: string
  keywords: string[]
}

const INTENTS: Intent[] = [
  {
    name: 'GREETING',
    keywords: ['hi', 'hello', 'hey', 'greetings', 'morning', 'afternoon', 'evening', 'welcome', 'howdy', 'hola', 'namaste']
  },
  {
    name: 'WHO_ARE_YOU',
    keywords: ['who are you', 'your name', 'introduce yourself', 'introduce', 'who is vimal', 'about you', 'tell me about yourself', 'biography', 'bio', 'who is dr vimal', 'profile', 'summary']
  },
  {
    name: 'DESIGNATION_WORK',
    keywords: ['where do you work', 'designation', 'job', 'role', 'university', 'department', 'school of teacher', 'csjmu', 'kanpur', 'assistant professor', 'current position', 'position', 'institute']
  },
  {
    name: 'CONTACT',
    keywords: ['email', 'phone', 'contact', 'number', 'whatsapp', 'address', 'location', 'reach', 'office', 'mail', 'write to you', 'message', 'call', 'details', 'mobile']
  },
  {
    name: 'QUALIFICATIONS',
    keywords: ['qualification', 'education', 'degree', 'phd', 'ph.d', 'm.ed', 'med', 'b.ed', 'bed', 'net', 'jrf', 'study', 'where did you study', 'academic qualifications', 'university of lucknow', 'qualifications']
  },
  {
    name: 'EXPERIENCE',
    keywords: ['experience', 'how long', 'career', 'work history', 'teaching history', 'years', 'unacademy', 'lucknow university', 'balram krishan', 'teaching experience']
  },
  {
    name: 'PATENTS',
    keywords: ['patent', 'invent', 'design number', 'designno', 'patents published', 'augmented reality system', 'device reduction']
  },
  {
    name: 'PROJECTS',
    keywords: ['project', 'projects', 'grant', 'funding', 'funded', 'agency', 'sanction', 'minor research', 'centre of excellence', 'consultancy']
  },
  {
    name: 'SCHOLARS',
    keywords: ['scholar', 'scholars', 'guidance', 'guide', 'supervise', 'supervision', 'phd scholar', 'med scholar', 'student', 'students', 'thesis', 'dissertation', 'mahima', 'suraj']
  },
  {
    name: 'PEER_REVIEW',
    keywords: ['peer review', 'reviewer', 'editorial', 'elsevier', 'sage', 'wiley', 'referee', 'acta psychologica', 'chronic stress', 'inquiry', 'neuroscience insights', 'q1 journal']
  },
  {
    name: 'RESOURCES_LAB',
    keywords: ['ai lab', 'innovation', 'repository', 'infographics', 'syllabus', 'course resource', 'study material', 'synopses', 'resources']
  },
  {
    name: 'HELP',
    keywords: ['help', 'what can you do', 'menu', 'features', 'options', 'assistance', 'commands']
  }
]

export function KnowYourProfessorChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowWelcomeBubble(true)
    }, 3000)

    const hideTimer = setTimeout(() => {
      setShowWelcomeBubble(false)
    }, 11000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleOpen = () => {
    setIsOpen(true)
    setShowWelcomeBubble(false)
    if (messages.length === 0) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([
          {
            id: 'welcome',
            sender: 'bot',
            text: `Hello! I am Dr. Vimal Singh's AI digital twin. Ask me anything about my educational qualifications, research projects, patents, publications, guided scholars, or how to get in touch!`,
            timestamp: new Date(),
          },
        ])
        setIsTyping(false)
      }, 1000)
    }
  }

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: Math.random().toString(36).substring(7),
      sender: 'user',
      text: textToSend,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const responseText = processQuery(textToSend)
      const botMessage: Message = {
        id: Math.random().toString(36).substring(7),
        sender: 'bot',
        text: responseText,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1200)
  }

  // Dynamic Portfolio keyword search
  const searchPortfolio = (query: string): string => {
    const q = query.toLowerCase().trim()
    const stopWords = new Set([
      'a', 'an', 'the', 'do', 'you', 'have', 'any', 'papers', 'paper', 'publication', 'publications',
      'on', 'about', 'in', 'of', 'for', 'with', 'show', 'me', 'tell', 'us', 'find', 'search',
      'patent', 'patents', 'project', 'projects', 'book', 'books', 'chapter', 'chapters', 'is', 'are',
      'your', 'my', 'his', 'her', 'their', 'our', 'what', 'who', 'where', 'how', 'when', 'why',
      'study', 'write', 'written', 'research', 'articles', 'article', 'lectures', 'lecture'
    ])

    const words = q.split(/[\s,.\-/?!()]+/).filter(w => w.length > 2 && !stopWords.has(w))

    if (words.length === 0) return ''

    interface SearchResult {
      type: string
      title: string
      detail: string
      year?: string | number
      link?: string
    }

    const results: SearchResult[] = []

    // Search Patents
    patents.forEach(p => {
      const titleMatch = words.some(w => p.title.toLowerCase().includes(w))
      if (titleMatch) {
        results.push({
          type: 'Patent',
          title: p.title,
          detail: `Role: ${p.role} | Design No: ${p.designNo}`,
          year: p.dateIssue || p.dateGrant
        })
      }
    })

    // Search Projects
    researchProjects.forEach(proj => {
      const match = words.some(w => proj.title.toLowerCase().includes(w) || proj.agency.toLowerCase().includes(w))
      if (match) {
        results.push({
          type: 'Project',
          title: proj.title,
          detail: `Role: ${proj.role} | Agency: ${proj.agency} | Amount: ${proj.amount}`,
          year: proj.dateSanction
        })
      }
    })

    // Search Books
    books.forEach(b => {
      const match = words.some(w => b.title.toLowerCase().includes(w))
      if (match) {
        results.push({
          type: 'Book',
          title: b.title,
          detail: `Role: ${b.role} | Publisher: ${b.publisher}`,
          year: b.date
        })
      }
    })

    // Search Scales
    scales.forEach(s => {
      const match = words.some(w => s.title.toLowerCase().includes(w))
      if (match) {
        results.push({
          type: 'Scale Published',
          title: s.title,
          detail: `Publisher: ${s.publisher}`,
          year: s.year
        })
      }
    })

    // Search Journal Publications
    journalPublications.forEach(pub => {
      const match = words.some(w => pub.title.toLowerCase().includes(w) || pub.journal.toLowerCase().includes(w))
      if (match) {
        results.push({
          type: 'Journal Paper',
          title: pub.title,
          detail: `${pub.type} | Journal: ${pub.journal}`,
          year: pub.year,
          link: pub.link
        })
      }
    })

    // Search Book Chapters
    bookChapters.forEach(ch => {
      const match = words.some(w => ch.chapterTitle.toLowerCase().includes(w) || ch.bookTitle.toLowerCase().includes(w))
      if (match) {
        results.push({
          type: 'Book Chapter',
          title: ch.chapterTitle,
          detail: `Book: ${ch.bookTitle} | Publisher: ${ch.publisher}`,
          year: ch.year,
          link: ch.link
        })
      }
    })

    // Search Invited Lectures
    inviteeLectures.forEach(lec => {
      const match = words.some(w => lec.topic.toLowerCase().includes(w) || lec.organizer.toLowerCase().includes(w))
      if (match) {
        results.push({
          type: 'Invited Lecture',
          title: lec.topic,
          detail: `Event: ${lec.event} | Organizer: ${lec.organizer}`,
          year: lec.date
        })
      }
    })

    if (results.length === 0) return ''

    const topResults = results.slice(0, 5)
    let response = `I searched my academic portfolio and found these items matching ("${words.join(', ')}"): \n\n`
    topResults.forEach(r => {
      const linkStr = r.link ? ` ([Read Online](${r.link}))` : ''
      response += `• **[${r.type}]** ${r.title} (${r.year || 'N/A'})${linkStr}\n  _${r.detail}_\n\n`
    })

    if (results.length > 5) {
      response += `_And ${results.length - 5} other related publications/activities. You can find more details in the respective pages of my website!_`
    }

    return response
  }

  // Scoring engine to classify query intent
  const classifyIntent = (query: string): { intent: string; score: number } => {
    const q = query.toLowerCase()
    let bestIntent = 'UNKNOWN'
    let bestScore = 0

    INTENTS.forEach(intent => {
      let score = 0
      intent.keywords.forEach(keyword => {
        if (q.includes(keyword)) {
          score += 2
          const regex = new RegExp(`\\b${keyword}\\b`, 'i')
          if (regex.test(q)) {
            score += 3
          }
        }
      })
      if (score > bestScore) {
        bestScore = score
        bestIntent = intent.name
      }
    })

    return { intent: bestIntent, score: bestScore }
  }

  // Main NLP query processor
  const processQuery = (query: string): string => {
    const q = query.toLowerCase().trim()

    // 1. Try dynamic portfolio keyword search first (for specific queries)
    // Only run if the query doesn't look like a simple greeting or general profile query
    const looksLikeGreeting = q.split(' ').length <= 2 && INTENTS[0].keywords.some(k => q.includes(k))
    const looksLikeBio = q.includes('who') && (q.includes('you') || q.includes('vimal'))
    
    if (!looksLikeGreeting && !looksLikeBio) {
      const searchResult = searchPortfolio(query)
      if (searchResult) return searchResult
    }

    // 2. Intent classification via score engine
    const { intent, score } = classifyIntent(query)

    if (score >= 2) {
      switch (intent) {
        case 'GREETING':
          return `Greetings! I am Dr. Vimal Singh's digital assistant. How can I help you today? You can ask about my patents, publications, guided scholars, or academic qualifications.`

        case 'WHO_ARE_YOU':
          return `${personalInfo.summary}\n\nI hold qualifications: **${personalInfo.qualifications}**. Ask me about my experience or research sections for more insights!`

        case 'DESIGNATION_WORK':
          return `I am currently working as an **${personalInfo.title}** at the *${personalInfo.departmentName}*, ${personalInfo.department}, ${personalInfo.institution}.`

        case 'CONTACT':
          return `You can reach me directly via:
• **Email**: ${personalInfo.email}
• **WhatsApp**: ${personalInfo.whatsapp}
• **Phone**: ${personalInfo.contact.join(', ')}
• **Office**: ${personalInfo.biographical.address}

Feel free to submit a message on the **[Contact Form](/#contact)** on the homepage.`

        case 'QUALIFICATIONS':
          let qualList = `My educational qualifications are:\n`
          professionalQualifications.forEach(q => {
            qualList += `• **${q.degree}** (${q.institution}, ${q.year})${q.details ? ` — _${q.details}_` : ''}\n`
          })
          qualList += `• **UGC Credentials**: ${academicAchievements.join(' ')}`
          return qualList

        case 'EXPERIENCE':
          let expList = `I have over **12 years of higher education teaching & research experience**:\n`
          teachingExperience.forEach(e => {
            expList += `• **${e.role}** at _${e.organization}_ (${e.duration})\n`
          })
          return expList

        case 'PATENTS':
          let patList = `I have published/granted 2 Indian National Patents in Education:\n`
          patents.forEach((p, idx) => {
            patList += `${idx + 1}. **${p.title}** (Design No: ${p.designNo}, Granted/Published: ${p.dateGrant})\n`
          })
          return patList

        case 'PROJECTS':
          let projList = `I have undertaken the following research projects & consultancies:\n\n**Research Projects**:\n`
          researchProjects.forEach(p => {
            projList += `• **${p.title}** funded by _${p.agency}_ (${p.amount}, Sanctioned: ${p.dateSanction})\n`
          })
          projList += `\n**Consultancy**:\n• **${consultancy.role}** at _${consultancy.agency}_ (${consultancy.workNature}, ${consultancy.amount})`
          return projList

        case 'SCHOLARS':
          return `I have supervised/guided a total of **50 academic scholars**:
• **Ph.D. Scholars**: 2 Registered (${researchGuidance.phdScholars?.map(s => s.name).join(', ')}).
• **M.Ed. Thesis Supervision**: ${researchGuidance.awarded} Completed/Awarded, ${researchGuidance.pursuing} Ongoing (Pursuing).

Check the **[Research Guidance](/research-guidance)** dashboard for details.`

        case 'RESOURCES_LAB':
          return `I host several digital resources and hubs:
• **[AI & Innovation Lab](/ai-lab)**: Exploring neuroeducation, AI biases, and chatbot-assisted learning systems.
• **[Research Repository](/research-repository)**: A digital public repository hosting synopses of Ph.D. & M.Ed. dissertations.
• **[Course Resources](/course-resources)**: Infographics and syllabi details for M.Ed. students.`

        case 'HELP':
          return `I can help you explore details about my:
• Patents & Sponsored Projects
• Research Publications & Books
• Supervised Ph.D. and M.Ed. Scholars
• Teaching Experience & Education
• Contact Details

Try typing a specific topic (like 'augmented reality' or 'anxiety') to search my portfolio!`
      }
    }

    // Default / fallback
    return `I can answer queries regarding my:
• Patents & Sponsored Projects
• Research Publications & Books
• Supervised Ph.D. and M.Ed. Scholars
• Teaching Experience & Education
• Contact Details

Try typing a specific keyword related to my work (e.g. 'anxiety', 'learning', 'AI') to scan my academic portfolio!`
  }

  const renderMessageText = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index))
      }
      
      const linkText = match[1]
      const linkUrl = match[2]
      
      parts.push(
        <Link 
          key={match.index} 
          href={linkUrl} 
          className="text-gold font-bold hover:underline underline-offset-2 transition-all"
          onClick={() => setIsOpen(false)}
        >
          {linkText}
        </Link>
      )
      
      lastIndex = linkRegex.lastIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    if (parts.length === 0) {
      return <p className="whitespace-pre-line text-sm leading-relaxed">{text}</p>
    }

    return <p className="whitespace-pre-line text-sm leading-relaxed">{parts}</p>
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Welcome Prompt Bubble */}
      <AnimatePresence>
        {showWelcomeBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-3 max-w-[260px] rounded-2xl border border-border bg-card p-3 shadow-xl dark:border-slate-800"
          >
            <div className="relative">
              <button 
                onClick={() => setShowWelcomeBubble(false)}
                className="absolute -right-1 -top-1 rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
              <div className="flex gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="pr-3">
                  <p className="text-[11px] font-bold text-navy dark:text-white">Know Your Professor</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground leading-normal">
                    Hi! Ask me anything about Dr. Vimal's research, publications, or contact details!
                  </p>
                </div>
              </div>
            </div>
            {/* Arrow tail */}
            <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-r border-b border-border bg-card dark:border-slate-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) */}
      <motion.button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full border shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'border-border bg-card text-muted-foreground dark:border-slate-800'
            : 'border-gold/30 bg-navy text-white hover:border-gold/60 dark:bg-slate-900'
        }`}
        style={{ originY: 'bottom' }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-full p-[2px]">
            <span className="absolute right-0 top-0 z-10 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-navy"></span>
            </span>
            <Image
              src="/dr-vimal-singh.jpeg"
              alt="Dr. Vimal Singh AI Twin Avatar"
              fill
              className="rounded-full object-cover scale-95"
            />
          </div>
        )}
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute bottom-18 right-0 flex h-[520px] w-[350px] sm:w-[390px] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl dark:border-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-navy p-4 text-white dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-gold/40 bg-muted/20">
                  <Image
                    src="/dr-vimal-singh.jpeg"
                    alt="Dr. Vimal Singh AI Twin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-white tracking-wide">
                    Know Your Professor
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase">
                      Dr. Vimal's AI Twin
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto bg-muted/15 p-4 space-y-4">
              {messages.map((message) => {
                const isBot = message.sender === 'bot'
                return (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {isBot && (
                      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-gold/20">
                        <Image
                          src="/dr-vimal-singh.jpeg"
                          alt="Dr. Vimal Avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 shadow-sm border ${
                        isBot
                          ? 'bg-card text-foreground border-border dark:border-slate-800'
                          : 'bg-navy text-white border-navy/40 dark:bg-slate-900 dark:border-slate-800'
                      }`}
                    >
                      {isBot ? renderMessageText(message.text) : <p className="text-sm leading-relaxed">{message.text}</p>}
                      <span
                        className={`block text-[9px] mt-1 text-right ${
                          isBot ? 'text-muted-foreground' : 'text-white/60'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    {!isBot && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/10">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-gold/20">
                    <Image
                      src="/dr-vimal-singh.jpeg"
                      alt="Dr. Vimal Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm dark:border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: '0ms' }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: '150ms' }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions list */}
            {messages.length > 0 && (
              <div className="border-t border-border/40 bg-card px-4 py-2 dark:border-slate-800/40">
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-muted">
                  {SUGGESTIONS.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(suggestion.text)}
                      className="flex items-center gap-1.5 shrink-0 rounded-full border border-border bg-muted/40 hover:bg-muted px-3 py-1.5 text-xs text-navy font-semibold hover:text-gold dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:text-gold transition-all"
                    >
                      <suggestion.icon className="h-3 w-3 shrink-0" />
                      <span>{suggestion.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend(inputValue)
              }}
              className="flex items-center gap-2 border-t border-border bg-card p-3 dark:border-slate-800"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Dr. Vimal's AI Twin..."
                className="flex-1 rounded-xl border border-border bg-muted/40 px-3 py-2 text-sm focus:border-royal focus:bg-card focus:outline-none dark:border-slate-800 dark:bg-slate-900/40 dark:focus:border-royal"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white transition-all hover:bg-royal disabled:bg-muted disabled:text-muted-foreground dark:bg-slate-900 dark:hover:bg-royal dark:disabled:bg-slate-800"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
