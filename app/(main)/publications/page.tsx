'use client'

import { PublicationsSection } from '@/components/publications-section'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-sm font-semibold">
          <li className="inline-flex items-center">
            <Link href="/" className="text-muted-foreground hover:text-royal transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-navy dark:text-white">Publications</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Publications component handles the rest of the search and layout */}
      <PublicationsSection />
    </div>
  )
}
