import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const links = {
  'Quick Links': ['Home', 'About', 'Research', 'Publications', 'AI Lab', 'Contact'],
  Resources: ['Course Resources', 'Downloads', 'Thesis Repository', 'Blog', 'Gallery'],
  Academic: ['Google Scholar', 'ResearchGate', 'Scopus', 'ORCID', 'VIDWAN', 'YouTube', 'Facebook'],
}

const getHref = (label: string) => {
  if (label === 'Home') return '/'
  if (label === 'About') return '/#about'
  if (label === 'Research') return '/projects-consultancy'
  if (label === 'Publications') return '/publications'
  if (label === 'AI Lab') return '/ai-lab'
  if (label === 'Contact') return '/contact'
  if (label === 'Thesis Repository') return '/research-repository'
  if (label === 'Course Resources') return '/course-resources'
  if (label === 'GitHub') return 'https://github.com/vimalclaude25'
  if (label === 'Google Scholar') return 'https://scholar.google.com/citations?user=eq1y6iYAAAAJ&hl=en'
  if (label === 'ResearchGate') return 'https://www.researchgate.net/profile/Vimal-Singh-23'
  if (label === 'Scopus') return 'https://www.scopus.com/authid/detail.uri?authorId=58797837900'
  if (label === 'ORCID') return 'https://orcid.org/my-orcid?orcid=0000-0002-3209-6057'
  if (label === 'VIDWAN') return 'https://vidwan.inflibnet.ac.in/profile/346396'
  if (label === 'YouTube') return 'https://www.youtube.com/@Researchorbit'
  if (label === 'Facebook') return 'https://www.facebook.com/vimal.singh.908'
  return '#'
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy text-white scroll-mt-10">
      <div className="mx-auto grid max-w-8xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-vs.jpg"
              alt="Dr. Vimal Singh Logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover border border-white/20 shadow-sm"
            />
            <span className="font-heading text-lg font-bold">Dr. Vimal Singh</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Assistant Professor, Department Of Advanced Educational Research And Teaching Of Educational Foundations, School of Teacher Education, CSJM University, Kanpur. Advancing
            education through AI, research & innovation.
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 7905184427</p>
            <a href="https://wa.me/917905184427" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:underline">
              <MessageSquare className="h-4 w-4 text-emerald-400" /> WhatsApp: +91 7905184427
            </a>
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
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dr. Vimal Singh. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a
              href="/admin/upessc-automation"
              className="transition-colors text-white/30 hover:text-white/60 text-[11px]"
              title="Admin Portal"
            >
              UPESSC Test Automation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

