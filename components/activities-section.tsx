'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import {
  Mic,
  Calendar,
  Search,
  BookOpen,
  Award,
  Users,
  Settings,
  ChevronDown,
  Building,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react'
import {
  inviteeLectures,
  fdpsAndWorkshops,
  committees,
  administrativeResponsibilities,
  memberships,
  coCurricularActivities,
} from '@/lib/cv-data'

export function ActivitiesSection() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const [activeTab, setActiveTab] = useState<'lectures' | 'fdps' | 'admin' | 'memberships'>('lectures')

  useEffect(() => {
    if (tabParam === 'lectures' || tabParam === 'fdps' || tabParam === 'admin' || tabParam === 'memberships') {
      setActiveTab(tabParam)
    }
  }, [tabParam])
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  // Filter Lectures
  const filteredLectures = inviteeLectures.filter((lecture) => {
    return (
      lecture.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecture.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecture.organizer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  // Filter Admin/Committees
  const filteredCommittees = committees.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const loadMore = () => setVisibleCount((prev) => prev + 6)

  return (
    <section id="activities" className="bg-muted/50 py-16">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
            Professional Engagement &amp; Activities
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
            Dr. Vimal Singh is highly active as an expert speaker, a member of university policymaking bodies, a tech coordinator for distance education, and a lifelong member of prestigious academic associations.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-border pb-px">
          {[
            { id: 'lectures', label: `Invitee Lectures (${inviteeLectures.length})`, icon: Mic },
            { id: 'fdps', label: `FDPs & Workshops (${fdpsAndWorkshops.length})`, icon: Calendar },
            { id: 'admin', label: `Admin & Committees (${administrativeResponsibilities.length + committees.length})`, icon: Settings },
            { id: 'memberships', label: `Memberships (${memberships.length})`, icon: Award },
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any)
                  setSearchQuery('')
                  setVisibleCount(6)
                }}
                className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'border-royal text-royal'
                    : 'border-transparent text-muted-foreground hover:text-royal'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {activeTab === 'lectures' && (
            <div>
              {/* Search */}
              <div className="mb-6 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search talks by topic, event, or organizer..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-royal"
                  />
                </div>
              </div>

              {/* Grid list */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredLectures.slice(0, visibleCount).map((lecture) => (
                    <motion.div
                      key={lecture.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-royal/30 hover:shadow-md"
                    >
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-bold text-royal uppercase tracking-wider mb-3">
                          <span className="flex items-center gap-1"><Mic className="h-3.5 w-3.5" /> Special Lecture</span>
                          <span>{lecture.date}</span>
                        </div>
                        <h4 className="font-heading text-sm font-bold text-navy dark:text-white leading-snug line-clamp-3">
                          “{lecture.topic}”
                        </h4>
                        <p className="mt-3 text-xs font-semibold text-royal leading-tight">
                          Event: {lecture.event}
                        </p>
                      </div>
                      <div className="mt-4 border-t border-border pt-3 text-[11px] text-muted-foreground">
                        Organizer: {lecture.organizer}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredLectures.length === 0 && (
                <div className="py-12 text-center text-muted-foreground text-sm">
                  No lectures found matching your search query.
                </div>
              )}

              {filteredLectures.length > visibleCount && (
                <div className="mt-8 text-center">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-royal hover:text-royal dark:text-white"
                  >
                    Load More Lectures <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'fdps' && (
            <div className="space-y-4 max-w-4xl mx-auto">
              {fdpsAndWorkshops.map((course) => (
                <div
                  key={course.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all hover:border-royal/30"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-royal uppercase tracking-wider block">
                      Course Attended
                    </span>
                    <h4 className="font-heading text-base font-bold text-navy dark:text-white leading-snug">
                      {course.course}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Organized by: <span className="font-semibold text-navy dark:text-white">{course.organizer}</span>
                      {course.sponsor && ` | Sponsored by: ${course.sponsor}`}
                    </p>
                  </div>
                  <div className="shrink-0 text-xs text-right sm:text-right text-muted-foreground">
                    <span className="font-semibold text-royal block">{course.from}</span>
                    <span>to {course.to}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="grid gap-6 md:grid-cols-2">
              {/* Administrative Responsibilities */}
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-navy dark:text-white border-b border-border pb-2">
                  <Building className="h-5 w-5 text-royal" /> Administrative Responsibilities
                </h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                  {administrativeResponsibilities.map((item) => (
                    <div key={item.id} className="border-l-2 border-royal/20 pl-3">
                      <p className="text-xs font-semibold text-royal">{item.date}</p>
                      <p className="mt-0.5 text-sm font-medium leading-relaxed text-navy dark:text-white">
                        {item.responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Committees & Co-curricular */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-navy dark:text-white border-b border-border pb-2">
                    <Users className="h-5 w-5 text-royal" /> University &amp; Department Committees
                  </h3>
                  {/* Search input for committees */}
                  <div className="relative mb-3">
                    <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search committee names..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-lg border border-border bg-muted py-1 pl-8 pr-3 text-xs outline-none transition-colors focus:border-royal"
                    />
                  </div>
                  <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-1">
                    {filteredCommittees.map((item) => (
                      <div key={item.id} className="flex justify-between items-start text-xs border-b border-border/50 pb-1.5">
                        <span className="font-medium text-navy dark:text-white pr-2 leading-normal">
                          {item.name}
                        </span>
                        <div className="text-right shrink-0">
                          <span className="font-bold text-royal block">{item.role}</span>
                          <span className="text-[10px] text-muted-foreground">{item.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-navy dark:text-white border-b border-border pb-2">
                    <FileSpreadsheet className="h-5 w-5 text-royal" /> Co-curricular Activities Organized
                  </h3>
                  <div className="space-y-3 max-h-[170px] overflow-y-auto pr-1">
                    {coCurricularActivities.map((act) => (
                      <div key={act.id} className="border-l-2 border-emerald-500 pl-2.5">
                        <p className="text-[10px] text-muted-foreground">{act.from === act.to ? act.from : `${act.from} - ${act.to}`}</p>
                        <h4 className="text-xs font-bold text-navy dark:text-white leading-normal mt-0.5">{act.description}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'memberships' && (
            <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-6 font-heading text-xl font-bold text-navy dark:text-white border-b border-border pb-2">
                Professional Memberships &amp; Journal Associations
              </h3>
              <ul className="space-y-4">
                {memberships.map((membership, idx) => (
                  <li key={idx} className="flex items-start gap-3 border-b border-border/50 pb-3 last:border-b-0 last:pb-0">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{membership}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

