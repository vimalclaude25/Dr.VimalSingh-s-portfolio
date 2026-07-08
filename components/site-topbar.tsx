'use client'

import { Phone, Mail, MapPin, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

export function SiteTopbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="w-full bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href="tel:+917905184427" className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span>+91 7905184427</span>
          </a>
          <a href="mailto:drvimalsingh@csjmu.ac.in" className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
            <Mail className="h-3.5 w-3.5 text-gold" />
            <span>drvimalsingh@csjmu.ac.in</span>
          </a>
          <span className="hidden items-center gap-1.5 opacity-90 md:flex">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span>CSJMU Campus, Kanpur, UP — 208024</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {['LinkedIn', 'Scholar', 'RG', 'Scopus', 'ORCID', 'VIDWAN', 'GitHub'].map((tag) => (
              <a
                key={tag}
                href={tag === 'GitHub' ? 'https://github.com/vimalclaude25' : '#'}
                aria-label={tag}
                className="rounded-md border border-white/15 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-white/80 transition-colors hover:border-gold hover:text-gold"
              >
                {tag}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 text-white/90 transition-colors hover:border-gold hover:text-gold"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
