import { ResearchNewsSection } from '@/components/research-news-section'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default function NewsMediaPage() {
  return (
    <div className="mx-auto max-w-9xl px-4 py-12 sm:px-6 lg:px-8">
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
              <span className="text-navy dark:text-white">News &amp; Media</span>
            </div>
          </li>
        </ol>
      </nav>

      <Suspense fallback={<div className="py-12 text-center text-muted-foreground">Loading news & media...</div>}>
        <ResearchNewsSection />
      </Suspense>
    </div>
  )
}

