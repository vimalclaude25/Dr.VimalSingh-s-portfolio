'use client'

import { Newspaper, ArrowRight } from 'lucide-react'

const news = [
  {
    day: '14',
    mon: 'JUN',
    year: '2026',
    title: 'New Research Paper Published on Tagore’s Educational Vision',
    desc: 'Empirical study "From Philosophy to Practice: Reflected Values in Learners Shaped by Tagore’s Educational Vision" published in RRIJM. Click here to read online.',
    link: '/read/tagore-educational-vision',
  },
  {
    day: '24',
    mon: 'MAY',
    year: '2025',
    title: 'Paper Published in Annals of Neurosciences (Scopus Indexed)',
    desc: 'New paper on Cognitive Load and AI published.',
  },
  {
    day: '18',
    mon: 'MAY',
    year: '2025',
    title: 'Patents Published',
    desc: 'Two patents published on AI based educational tools.',
  },
  {
    day: '10',
    mon: 'MAY',
    year: '2025',
    title: 'Guest Lecture Delivered',
    desc: 'Invited talk on AI in Education at National Webinar.',
  },
  {
    day: '02',
    mon: 'MAY',
    year: '2025',
    title: 'Research Grant Awarded',
    desc: 'Government funded project on NEP 2020 implementation approved.',
  },
]

export function NewsEvents() {
  const sortedNews = [...news].sort((a, b) => {
    const dateA = new Date(`${a.day} ${a.mon} ${a.year}`)
    const dateB = new Date(`${b.day} ${b.mon} ${b.year}`)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-navy dark:text-white">
          <Newspaper className="h-6 w-6 text-royal" /> News &amp; Events
        </h2>
        <a href="/news-media" className="inline-flex items-center gap-1 text-sm font-semibold text-royal hover:underline">
          View All <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <ol className="relative space-y-4 border-l border-border pl-6">
        {sortedNews.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-royal bg-background" />
            
            {item.link ? (
              <a
                href={item.link}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-royal hover:shadow-md hover:-translate-y-0.5 cursor-pointer block"
              >
                <div className="flex flex-col items-center rounded-xl bg-muted px-3 py-2 text-center shrink-0">
                  <span className="font-heading text-lg font-bold text-navy dark:text-white">{item.day}</span>
                  <span className="text-[10px] font-semibold tracking-wide text-royal">{item.mon}</span>
                  <span className="text-[10px] text-muted-foreground">{item.year}</span>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-navy dark:text-white flex items-center gap-1.5 hover:text-royal transition-colors">
                    {item.title} <ArrowRight className="h-3.5 w-3.5 text-royal" />
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-royal/30">
                <div className="flex flex-col items-center rounded-xl bg-muted px-3 py-2 text-center shrink-0">
                  <span className="font-heading text-lg font-bold text-navy dark:text-white">{item.day}</span>
                  <span className="text-[10px] font-semibold tracking-wide text-royal">{item.mon}</span>
                  <span className="text-[10px] text-muted-foreground">{item.year}</span>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-navy dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
