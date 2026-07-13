'use client'

import { use, useEffect } from 'react'
import { ArrowLeft, AlertCircle, Eye } from 'lucide-react'
import Link from 'next/link'
import { journalPublications } from '@/lib/cv-data'

export default function ReaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  // Find the corresponding publication in the CV data matching the link path
  const publication = journalPublications.find(
    (pub) => pub.link === `/read/${slug}`
  )

  // Disable right click to discourage simple document saving
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextMenu)
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  if (!publication) {
    return (
      <div className="flex flex-col min-h-screen bg-navy text-white items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold font-heading mb-2">Paper Not Available</h1>
        <p className="text-sm text-muted-foreground mb-6">
          The requested view-only copy is currently not uploaded on the server.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 bg-royal px-5 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-royal/90 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-navy text-white">
      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-6 py-4 bg-navy border-b border-white/10 z-10 shadow-md">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <span className="text-[10px] font-bold text-gold uppercase tracking-wider block">
              Online Reader
            </span>
            <h1 className="text-sm sm:text-base font-heading font-bold text-white line-clamp-1 max-w-[280px] sm:max-w-xl md:max-w-2xl">
              {publication.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-white/60 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
          <Eye className="h-4 w-4 text-emerald-400" />
          <span>Read-Only Mode Enabled</span>
        </div>
      </header>

      {/* Security notice banner */}
      <div className="bg-white/5 border-b border-white/10 px-6 py-3 text-xs flex items-center justify-between text-white/70 flex-wrap gap-2">
        <span className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-gold shrink-0" />
          <span>
            To support scholarly publishers, this paper is presented in read-only format. Printing and direct downloading are disabled.
          </span>
        </span>
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gold hover:underline"
          >
            Visit Publisher Website
          </a>
        )}
      </div>

      {/* Viewport Frame */}
      <main className="flex-1 bg-navy/95 relative overflow-hidden flex flex-col items-center justify-center p-4">
        <iframe
          src={`/papers/${slug}.pdf#toolbar=0&navpanes=0&scrollbar=1`}
          className="w-full max-w-5xl h-full flex-1 rounded-2xl shadow-2xl border border-white/15 bg-white"
          title={publication.title}
          onContextMenu={(e) => e.preventDefault()}
        />
      </main>
    </div>
  )
}
