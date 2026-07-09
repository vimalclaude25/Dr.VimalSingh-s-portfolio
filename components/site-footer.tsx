import { Phone, Mail, MapPin } from 'lucide-react'

const links = {
  'Quick Links': ['Home', 'About', 'Research', 'Publications', 'AI Lab', 'Contact'],
  Resources: ['E-Resources', 'Downloads', 'Thesis Repository', 'Blog', 'Gallery'],
  Academic: ['Google Scholar', 'ResearchGate', 'Scopus', 'ORCID', 'VIDWAN', 'GitHub'],
}

const getHref = (label: string) => {
  if (label === 'Home') return '#home'
  if (label === 'About') return '#about'
  if (label === 'Research') return '#research'
  if (label === 'Publications') return '#publications'
  if (label === 'AI Lab') return '#home'
  if (label === 'Contact') return '#contact'
  if (label === 'GitHub') return 'https://github.com/vimalclaude25'
  if (label === 'Google Scholar') return 'https://scholar.google.com/citations?user=eq1y6iYAAAAJ&hl=en'
  if (label === 'ResearchGate') return 'https://www.researchgate.net/profile/Vimal-Singh-23'
  if (label === 'Scopus') return 'https://www.scopus.com/authid/detail.uri?authorId=58797837900'
  if (label === 'ORCID') return 'https://orcid.org/my-orcid?orcid=0000-0002-3209-6057'
  if (label === 'VIDWAN') return 'https://vidwan.inflibnet.ac.in/profile/346396'
  return '#'
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy text-white scroll-mt-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-heading text-lg font-bold">
              <span className="text-gold">V</span>S
            </span>
            <span className="font-heading text-lg font-bold">Dr. Vimal Singh</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Assistant Professor, School of Teacher Education, CSJM University, Kanpur. Advancing
            education through AI, research & innovation.
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 7905184427</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> drvimalsingh@csjmu.ac.in</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> CSJMU Campus, Kanpur — 208024</p>
          </div>
        </div>

        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-gold">{heading}</h3>
            <ul className="mt-4 space-y-2.5">
              {items.map((i) => (
                <li key={i}>
                  <a
                    href={getHref(i)}
                    target={getHref(i).startsWith('http') ? '_blank' : undefined}
                    rel={getHref(i).startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dr. Vimal Singh. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
