'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

type NavItem = {
  label: string
  href: string
  children?: string[]
}

const nav: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research', children: ['Research Projects', 'Patents', 'Research Guidance', 'Consultancy'] },
  { label: 'Publications', href: '#publications', children: ['Journal Articles', 'Books & Chapters', 'Tests & Scales'] },
  { label: 'Activities', href: '#activities', children: ['Special Lectures', 'FDPs & Workshops', 'Committees & Memberships'] },
  { label: 'Contact', href: '#contact' },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

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
          ? 'glass border-b border-border shadow-[0_8px_30px_-12px_rgba(10,42,102,0.25)]'
          : 'bg-background'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy font-heading text-lg font-extrabold text-white shadow-md">
            <span className="font-bold text-gold">V</span>
            <span className="font-bold">S</span>
          </span>
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
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.label
                    ? 'text-royal'
                    : 'text-foreground/80 hover:text-royal'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </a>
              {active === item.label && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-royal" />
              )}
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-52 translate-y-2 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <a
                      key={c}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-royal"
                    >
                      {c}
                    </a>
                  ))}
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
        <div className="border-t border-border bg-background px-4 py-3 xl:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-royal"
              onClick={() => {
                setActive(item.label)
                setOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
