'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, Sparkles, User, HelpCircle } from 'lucide-react'

interface Message {
  id: string
  sender: 'user' | 'bot'
  text: string
  timestamp: Date
}

const SUGGESTIONS = [
  { text: 'What are your patents?', icon: Sparkles },
  { text: 'Show publication stats', icon: MessageSquare },
  { text: 'How many scholars have you guided?', icon: MessageSquare },
  { text: 'Get contact information', icon: HelpCircle },
]

export function KnowYourProfessorChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Show a welcome prompt bubble above the avatar after 3 seconds, then hide it after 11 seconds
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

  // Scroll to the bottom of the messages container whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Initialize chat with a welcome message from the bot when opened for the first time
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

    // Simulate bot thinking and responding
    setTimeout(() => {
      const responseText = getBotResponse(textToSend)
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

  // Basic client-side FAQ matcher for Dr. Vimal's academic details
  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase().trim()

    // Greetings
    if (q.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening|welcome|howdy)\b/)) {
      return `Greetings! I am Dr. Vimal Singh's digital assistant. How can I help you today? You can ask about my patents, publications, guided scholars, or academic qualifications.`
    }

    // Patents
    if (q.includes('patent') || q.includes('invent') || q.includes('designno') || q.includes('augmented reality') || q.includes('study habits')) {
      return `I have published 2 Indian National Patents in the field of Education:

1. **Augmented Reality System for Educational Simulations** (Design No: 429777-001, Granted/Published: 2024).
2. **Method for Enhancing Study Habits Via Digital Device Reduction** (Design No: 202411071925, Published: 2024).

Both patents focus on utilizing modern technology to support student learning and digital wellness.`
    }

    // Publications / Books / Papers
    if (q.includes('publication') || q.includes('paper') || q.includes('journal') || q.includes('scopus') || q.includes('ugc') || q.includes('book') || q.includes('chapter') || q.includes('article') || q.includes('published')) {
      return `I have an active research profile with the following publications:
• **38 Research Papers** published in journals and conferences.
• **24 Publications** indexed in UGC CARE / Scopus list.
• **1 Authored Book** & **3 Edited Books** on modern pedagogy.
• **11 Book Chapters** in collaborative academic editions.

You can browse, filter, and search the full list of titles on the **[Publications](/publications)** page.`
    }

    // Guidance / Scholars / PhD / MEd
    if (q.includes('scholar') || q.includes('guidance') || q.includes('supervis') || q.includes('student') || q.includes('phd') || q.includes('ph.d') || q.includes('med') || q.includes('m.ed') || q.includes('mahima') || q.includes('suraj')) {
      return `I have guided/supervised a total of **50 academic scholars**:
• **Ph.D. Scholars**: 2 Registered (Ms. Mahima Tripathi and Mr. Suraj Gupta).
• **M.Ed. Thesis Supervision**: 34 Completed/Awarded, 16 Ongoing (Pursuing).

For more detailed stats and cohort lists, please visit the **[Research Guidance](/research-guidance)** dashboard.`
    }

    // Projects / Grants / Consultancy
    if (q.includes('project') || q.includes('grant') || q.includes('consultancy') || q.includes('fund') || q.includes('agency') || q.includes('amount')) {
      return `I actively lead and participate in sponsored research and consultancies:
• **Research Projects**: 2 key projects funded by national bodies.
• **Consultancy**: 1 major government/institutional consultancy.

For specifics about funding amounts, timelines, and sanction dates, visit the **[Projects & Consultancy](/projects-consultancy)** section.`
    }

    // Contact / Email / Phone / Address / Location / WhatsApp
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('number') || q.includes('whatsapp') || q.includes('address') || q.includes('reach') || q.includes('find') || q.includes('office') || q.includes('mail')) {
      return `You can get in touch with me directly through the following channels:
• **Email**: drvimalsingh@csjmu.ac.in
• **WhatsApp**: +91-9452913556
• **Phone**: +91-7905184427, +91-9795168526
• **Office**: Flat No - 04, Block - A, Type - III, New Teachers Building, CSJM University Campus, Kanpur, UP - 208024.

You can also send an instant message using the **[Contact Form](/#contact)** on the homepage.`
    }

    // Qualifications / Education / Degree / PhD / University / College
    if (q.includes('education') || q.includes('qualification') || q.includes('degree') || q.includes('phd') || q.includes('study') || q.includes('lucknow') || q.includes('csjmu') || q.includes('net') || q.includes('jrf')) {
      return `My educational credentials include:
• **Ph.D. in Education** (University of Lucknow, 2021) — Thesis on student personality and values under different ideologies.
• **Master of Education (M.Ed.)** (University of Lucknow, 2014) — First Division.
• **Bachelor of Education (B.Ed.)** (University of Lucknow, 2013) — First Division.
• **NET Credentials**: Qualified UGC-NET JRF in Education (multiple times) and UGC-NET in Public Administration.`
    }

    // Experience / Job / Career / Teaching / History
    if (q.includes('experience') || q.includes('work') || q.includes('teaching') || q.includes('job') || q.includes('history') || q.includes('professor') || q.includes('career')) {
      return `I have over **12 years of experience in higher education**:
• **Assistant Professor** at School of Teacher Education, CSJM University, Kanpur (April 2022 - Present).
• **Assistant Professor** at Balram Krishan Academy, Lucknow (2021 - 2022 & 2014 - 2016).
• **Junior/Senior Research Fellow (JRF/SRF)** at University of Lucknow (2016 - 2021).
• **Verified Educator** at Unacademy (2019 - 2020).`
    }

    // AI Lab / Technology / Innovation / Research Repository
    if (q.includes('ai') || q.includes('technology') || q.includes('lab') || q.includes('innovation') || q.includes('synopses') || q.includes('thesis') || q.includes('repository')) {
      return `I incorporate advanced digital resources in my academic workflow:
• **[AI & Innovation Lab](/ai-lab)**: Exploring neuroeducation, AI biases, and chatbot-assisted learning systems.
• **[Research Repository](/research-repository)**: A digital public repository hosting synopses of Ph.D. & M.Ed. dissertations.
• **[Course Resources](/course-resources)**: Infographics and syllabi details for M.Ed. students.`
    }

    // Default / fallback
    return `I can help you explore details about my:
• Patents & Sponsored Projects
• Research Publications & Books
• Supervised Ph.D. and M.Ed. Scholars
• Teaching Experience & Education
• Contact Details

Please try rephrasing your question or check the search bars available on individual sections of the website!`
  }

  // Format link references in message text to actual markdown style Links or rich formatting
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
            {/* Circular Pulsing Green Status Ring */}
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
