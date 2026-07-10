'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

type MegaMenuColumn = {
  title: string
  items: { label: string; href: string }[]
}

type NavItem = {
  label: string
  href: string
  children?: string[]
  megaMenu?: MegaMenuColumn[]
}

const nav: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research', children: ['Research Projects', 'Patents', 'Research Guidance', 'Consultancy'] },
  { label: 'Publications', href: '#publications', children: ['Journal Articles', 'Books & Chapters', 'Tests & Scales'] },
  {
    label: 'Research in News',
    href: '#research-news',
    megaMenu: [
      {
        title: 'Media Coverage',
        items: [
          { label: 'Newspaper Coverage', href: '#research-news' },
          { label: 'University News', href: '#research-news' },
          { label: 'Press Releases', href: '#research-news' },
        ],
      },
      {
        title: 'Digital Media',
        items: [
          { label: 'Television Coverage', href: '#research-news' },
          { label: 'Interviews', href: '#research-news' },
          { label: 'Podcasts', href: '#research-news' },
        ],
      },
    ],
  },
  {
    label: 'NTA NET Resources',
    href: '#nta-net',
    megaMenu: [
      {
        title: 'NET Preparation',
        items: [
          { label: 'About UGC NET', href: '#nta-net' },
          { label: 'Exam Pattern', href: '#nta-net' },
          { label: 'Latest Syllabus', href: '#nta-net' },
          { label: 'Eligibility', href: '#nta-net' },
          { label: 'Important Dates', href: '#nta-net' },
          { label: 'Previous Year Trends', href: '#nta-net' },
        ],
      },
      {
        title: 'Study Materials',
        items: [
          { label: 'Notes', href: '#nta-net' },
          { label: 'PDF Resources', href: '#nta-net' },
          { label: 'PPT Repository', href: '#nta-net' },
          { label: 'Short Notes', href: '#nta-net' },
          { label: 'Mind Maps', href: '#nta-net' },
          { label: 'Flash Cards', href: '#nta-net' },
          { label: 'Infographics', href: '#nta-net' },
        ],
      },
      {
        title: 'MCQ Practice',
        items: [
          { label: 'Topic-wise MCQs', href: '#nta-net' },
          { label: 'PYQs', href: '#nta-net' },
          { label: 'Daily Quiz', href: '#nta-net' },
          { label: 'Weekly Test', href: '#nta-net' },
          { label: 'Mock Tests', href: '#nta-net' },
          { label: 'Full-Length Tests', href: '#nta-net' },
        ],
      },
      {
        title: 'Video Library',
        items: [
          { label: 'Recorded Classes', href: '#nta-net' },
          { label: 'Research Bytes', href: '#nta-net' },
          { label: 'Short Concept Videos', href: '#nta-net' },
          { label: 'Live Sessions', href: '#nta-net' },
          { label: 'Webinar Recordings', href: '#nta-net' },
        ],
      },
      {
        title: 'Success Stories',
        items: [
          { label: 'NET Qualified Students', href: '#nta-net' },
          { label: 'JRF Awardees', href: '#nta-net' },
          { label: 'Testimonials', href: '#nta-net' },
          { label: 'Rank Holders', href: '#nta-net' },
          { label: 'Interview Experiences', href: '#nta-net' },
        ],
      },
    ],
  },
  { label: 'Activities', href: '#activities', children: ['Special Lectures', 'FDPs & Workshops', 'Committees & Memberships'] },
  { label: 'Contact', href: '#contact' },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border shadow-[0_8px_30px_-12px_rgba(15,30,54,0.25)]'
          : 'bg-background'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo-vs.jpg"
            alt="Dr. Vimal Singh Logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover border border-gold/30 shadow-sm"
          />
          <span className="leading-tight">
            <span className="block font-heading text-lg font-bold tracking-tight text-navy dark:text-white">
              DR. VIMAL SINGH
            </span>
            <span className="block text-[11px] text-muted-foreground">
              Education | Research | AI | Innovation
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  active === item.label
                    ? 'text-royal'
                    : 'text-foreground/80 hover:text-royal'
                }`}
              >
                {item.label}
                {(item.children || item.megaMenu) && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </a>
              {active === item.label && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-royal" />
              )}

              {/* Standard Dropdown */}
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-52 translate-y-2 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <a
                      key={c}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-royal"
                    >
                      {c}
                    </a>
                  ))}
                </div>
              )}

              {/* Mega Menu Dropdown */}
              {item.megaMenu && (
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 rounded-2xl border border-border bg-popover p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 w-[550px] xl:w-[840px] max-w-screen-lg">
                  <div className={`grid gap-6 ${item.label === 'NTA NET Resources' ? 'grid-cols-5' : 'grid-cols-2'}`}>
                    {item.megaMenu.map((col) => (
                      <div key={col.title}>
                        <h4 className="font-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3 border-b border-border pb-1">
                          {col.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {col.items.map((subItem) => (
                            <li key={subItem.label}>
                              <a
                                href={subItem.href}
                                className="block text-xs font-semibold text-foreground/80 hover:text-royal transition-colors py-0.5"
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-border p-2 text-navy dark:text-white xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-3 xl:hidden max-h-[80vh] overflow-y-auto">
          {nav.map((item) => {
            const hasSub = item.children || item.megaMenu
            return (
              <div key={item.label} className="py-1">
                {hasSub ? (
                  <div>
                    <button
                      onClick={() => setMobileOpenSection(mobileOpenSection === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-muted hover:text-royal rounded-lg"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileOpenSection === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileOpenSection === item.label && (
                      <div className="pl-4 mt-1 border-l-2 border-border/60 ml-3 space-y-1">
                        {item.children && item.children.map((c) => (
                          <a
                            key={c}
                            href={item.href}
                            className="block px-3 py-1.5 text-xs text-foreground/70 hover:text-royal"
                            onClick={() => setOpen(false)}
                          >
                            {c}
                          </a>
                        ))}
                        {item.megaMenu && item.megaMenu.map((col) => (
                          <div key={col.title} className="py-1">
                            <span className="block px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                              {col.title}
                            </span>
                            <div className="pl-2 space-y-1 mt-1">
                              {col.items.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="block px-3 py-1.5 text-xs text-foreground/70 hover:text-royal"
                                  onClick={() => setOpen(false)}
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-muted hover:text-royal"
                    onClick={() => {
                      setActive(item.label)
                      setOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      )}
    </header>
  )
}
