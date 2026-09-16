'use client'

import { useState, useMemo } from 'react'
import {
  testSeriesData,
  GK_UNITS,
  EDUCATION_UNITS,
  getMasterCalendarSchedule,
  TestItem,
  validateTestSeriesData,
} from '@/lib/test-series-data'
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Filter,
  GraduationCap,
  HelpCircle,
  Layers,
  Search,
  Sparkles,
  ShieldAlert,
  Award,
  ChevronRight,
  Flame,
} from 'lucide-react'

export function OnlineTestPortal() {
  const [activeTab, setActiveTab] = useState<'all' | 'gk' | 'education' | 'schedule'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'GK' | 'Education'>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'coming-soon'>('all')
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all')

  const masterCalendar = useMemo(() => getMasterCalendarSchedule(), [])
  const qaReport = useMemo(() => validateTestSeriesData(), [])

  // Calculate completed count dynamically based on status === 'completed'
  const gkCompleted = useMemo(
    () => testSeriesData.filter((t) => t.subject === 'GK' && t.status === 'completed').length,
    []
  )
  const eduCompleted = useMemo(
    () => testSeriesData.filter((t) => t.subject === 'Education' && t.status === 'completed').length,
    []
  )
  const totalCompleted = gkCompleted + eduCompleted

  // Filtered test items
  const filteredTests = useMemo(() => {
    return testSeriesData.filter((test) => {
      // Tab filter
      if (activeTab === 'gk' && test.subject !== 'GK') return false
      if (activeTab === 'education' && test.subject !== 'Education') return false

      // Subject Filter
      if (subjectFilter !== 'all' && test.subject !== subjectFilter) return false

      // Status Filter
      if (statusFilter !== 'all' && test.status !== statusFilter) return false

      // Unit filter
      if (selectedUnit !== 'all' && test.unit !== selectedUnit) return false

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchTitle = test.title.toLowerCase().includes(q)
        const matchUnit = test.unitTitle.toLowerCase().includes(q)
        const matchNum = `test ${test.testNumber}`.includes(q) || `unit ${test.unit}`.includes(q)
        return matchTitle || matchUnit || matchNum
      }

      return true
    })
  }, [activeTab, subjectFilter, statusFilter, selectedUnit, searchQuery])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-6">
      {/* Top Announcement Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-royal to-blue-900 p-8 text-white shadow-2xl">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20 text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                UPESSC ASSISTANT PROFESSOR EXAM 2026
              </div>
              <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Online Test Series Portal
              </h1>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Comprehensive 80-Test Series designed strictly for UPESSC Assistant Professor (GK & Education).
                Powered by Testmoz engine with instant scoring, dual daily slots, and systematic revision cycles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px] w-full md:w-auto">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/15 text-center">
                <span className="block text-xs uppercase tracking-wider text-slate-300 font-medium">Exam Dates</span>
                <span className="font-heading text-lg font-bold text-gold">18–19 November 2026</span>
              </div>
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-md border border-white/15 text-center flex items-center justify-center gap-2">
                <Flame className="h-4 w-4 text-amber-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-100">80 Objective Tests • 4,000 MCQs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section 17: DASHBOARD SUMMARY CARDS */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-royal" />
            Test Series Dashboard Summary
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
              <span className="font-heading text-2xl font-black text-navy dark:text-white block">80</span>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">TOTAL TESTS</span>
            </div>

            <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4 border border-blue-200 dark:border-blue-900/50 text-center">
              <span className="font-heading text-2xl font-black text-royal dark:text-blue-400 block">30</span>
              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-tight">GK TESTS</span>
            </div>

            <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 p-4 border border-indigo-200 dark:border-indigo-900/50 text-center">
              <span className="font-heading text-2xl font-black text-indigo-600 dark:text-indigo-400 block">50</span>
              <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-tight">EDUCATION TESTS</span>
            </div>

            <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/40 p-4 border border-amber-200 dark:border-amber-900/50 text-center">
              <span className="font-heading text-2xl font-black text-amber-600 dark:text-amber-400 block">40</span>
              <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-tight">TEST DAYS</span>
            </div>

            <div className="rounded-2xl bg-purple-50 dark:bg-purple-950/40 p-4 border border-purple-200 dark:border-purple-900/50 text-center">
              <span className="font-heading text-2xl font-black text-purple-600 dark:text-purple-400 block">50</span>
              <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase tracking-tight">MCQS / TEST</span>
            </div>

            <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 p-4 border border-emerald-200 dark:border-emerald-900/50 text-center">
              <span className="font-heading text-2xl font-black text-emerald-600 dark:text-emerald-400 block">20</span>
              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-tight">MINS / TEST</span>
            </div>

            <div className="rounded-2xl bg-teal-50 dark:bg-teal-950/40 p-4 border border-teal-200 dark:border-teal-900/50 text-center">
              <span className="font-heading text-lg font-black text-teal-600 dark:text-teal-400 block mt-1">16 SEP</span>
              <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 uppercase tracking-tight">START DATE</span>
            </div>

            <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/40 p-4 border border-rose-200 dark:border-rose-900/50 text-center">
              <span className="font-heading text-lg font-black text-rose-600 dark:text-rose-400 block mt-1">17 NOV</span>
              <span className="text-[11px] font-bold text-rose-700 dark:text-rose-300 uppercase tracking-tight">FINAL TEST</span>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl bg-gold/10 p-4 border border-gold/40 text-center">
              <span className="font-heading text-base font-black text-amber-700 dark:text-gold block mt-1">18-19 NOV</span>
              <span className="text-[11px] font-bold text-amber-900 dark:text-amber-200 uppercase tracking-tight">UPESSC EXAM</span>
            </div>
          </div>
        </div>

        {/* Section 18: PROGRESS INDICATORS */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-navy dark:text-white flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            Test Completion Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GK Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-600 dark:text-slate-300">GK Progress</span>
                <span className="text-royal font-bold">{gkCompleted} / 30 Completed</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-royal transition-all duration-500"
                  style={{ width: `${(gkCompleted / 30) * 100}%` }}
                />
              </div>
            </div>

            {/* Education Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-600 dark:text-slate-300">Education Progress</span>
                <span className="text-indigo-600 font-bold">{eduCompleted} / 50 Completed</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                  style={{ width: `${(eduCompleted / 50) * 100}%` }}
                />
              </div>
            </div>

            {/* Overall Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-600 dark:text-slate-300">Overall Progress</span>
                <span className="text-emerald-600 font-bold">{totalCompleted} / 80 Completed</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                  style={{ width: `${(totalCompleted / 80) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs & Search Toolbar */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            {/* View Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <button
                onClick={() => {
                  setActiveTab('all')
                  setSelectedUnit('all')
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                All 80 Tests
              </button>

              <button
                onClick={() => {
                  setActiveTab('gk')
                  setSelectedUnit('all')
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'gk'
                    ? 'bg-royal text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                <GraduationCap className="h-3.5 w-3.5" />
                General Knowledge (30)
              </button>

              <button
                onClick={() => {
                  setActiveTab('education')
                  setSelectedUnit('all')
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                Education (50)
              </button>

              <button
                onClick={() => setActiveTab('schedule')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === 'schedule'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                <Calendar className="h-3.5 w-3.5" />
                Master Schedule (40 Days)
              </button>
            </div>

            {/* Search Input */}
            {activeTab !== 'schedule' && (
              <div className="relative min-w-[260px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search test title, unit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-10 pr-4 py-2.5 text-xs font-medium focus:border-royal focus:outline-none dark:text-white"
                />
              </div>
            )}
          </div>

          {/* Section 19: SEARCH & FILTER OPTIONS */}
          {activeTab !== 'schedule' && (
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mr-2">
                  <Filter className="h-3.5 w-3.5" /> Filter by Status:
                </span>
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    statusFilter === 'all'
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  All Status
                </button>
                <button
                  onClick={() => setStatusFilter('coming-soon')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    statusFilter === 'coming-soon'
                      ? 'bg-amber-500 text-white font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Coming Soon
                </button>
                <button
                  onClick={() => setStatusFilter('available')}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    statusFilter === 'available'
                      ? 'bg-emerald-600 text-white font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Available Tests
                </button>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Showing <span className="font-bold text-slate-900 dark:text-white">{filteredTests.length}</span> tests
              </div>
            </div>
          )}
        </div>

        {/* TAB 1: MASTER SCHEDULE PAGE (Section 16) */}
        {activeTab === 'schedule' ? (
          <div className="space-y-6">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy dark:text-white">
                    UPESSC 2026 – Master Test Schedule
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Complete 40 Test Days Sequence (16 September 2026 – 17 November 2026) with Evening Slots & Revision Days
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-semibold">
                    <Clock className="h-3.5 w-3.5" /> Slot 1: 7:00 PM – 7:30 PM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-xs font-semibold">
                    <Clock className="h-3.5 w-3.5" /> Slot 2: 8:00 PM – 8:30 PM
                  </span>
                </div>
              </div>

              {/* Table for Desktop & Stacked Cards for Mobile */}
              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {masterCalendar.map((dayItem, idx) => {
                  if (dayItem.isExamDay) {
                    return (
                      <div
                        key={dayItem.date}
                        className="bg-gradient-to-r from-amber-500/10 via-gold/20 to-amber-500/10 p-6 text-center border-y-2 border-gold/40"
                      >
                        <span className="inline-block px-3 py-1 bg-gold text-slate-950 text-xs font-extrabold tracking-wider uppercase rounded-full mb-2">
                          EXAMINATION NOTICE
                        </span>
                        <h4 className="font-heading text-xl font-bold text-amber-900 dark:text-amber-200">
                          {dayItem.formattedDate} ({dayItem.day})
                        </h4>
                        <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mt-1">
                          {dayItem.note}
                        </p>
                      </div>
                    )
                  }

                  if (dayItem.isRevisionDay) {
                    return (
                      <div
                        key={dayItem.date}
                        className="p-4 bg-slate-50/70 dark:bg-slate-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-600 dark:text-slate-400"
                      >
                        <div className="flex items-center gap-3 min-w-[200px]">
                          <div className="h-2 w-2 rounded-full bg-slate-400" />
                          <div>
                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
                              {dayItem.formattedDate}
                            </span>
                            <span className="text-xs text-slate-500 block">{dayItem.day}</span>
                          </div>
                        </div>

                        <div className="flex-1 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 rounded-xl px-4 py-2.5 flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 text-[10px] font-black uppercase tracking-wider">
                            REVISION DAY
                          </span>
                          <span className="text-xs font-medium text-amber-800 dark:text-amber-300">
                            {dayItem.note}
                          </span>
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div
                      key={dayItem.date}
                      className="p-5 hover:bg-slate-50/80 dark:hover:bg-slate-900/80 transition-colors flex flex-col lg:flex-row lg:items-center gap-4"
                    >
                      {/* Date & Day Number */}
                      <div className="min-w-[180px] flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-navy text-white text-xs font-extrabold shadow-sm">
                          #{dayItem.dayNumber}
                        </span>
                        <div>
                          <span className="font-bold text-sm text-navy dark:text-white block">
                            {dayItem.formattedDate}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{dayItem.day}</span>
                        </div>
                      </div>

                      {/* Slot 1 & Slot 2 Tests */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                        {/* Slot 1 Test */}
                        {dayItem.slot1Test && (
                          <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-3.5 flex items-center justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-bold">
                                  Slot 1 (7:00 PM)
                                </span>
                                <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-300">
                                  {dayItem.slot1Test.subject} Unit {dayItem.slot1Test.unit}
                                </span>
                              </div>
                              <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                                Test {dayItem.slot1Test.testNumber}: {dayItem.slot1Test.unitTitle}
                              </h5>
                            </div>

                            {dayItem.slot1Test.testmozUrl ? (
                              <a
                                href={dayItem.slot1Test.testmozUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-lg bg-royal px-3 py-1.5 text-xs font-bold text-white hover:bg-navy transition-colors shrink-0"
                              >
                                Start <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <span className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500 text-[11px] font-bold shrink-0">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        )}

                        {/* Slot 2 Test */}
                        {dayItem.slot2Test && (
                          <div className="rounded-2xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20 p-3.5 flex items-center justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-2 py-0.5 rounded bg-purple-600 text-white text-[10px] font-bold">
                                  Slot 2 (8:00 PM)
                                </span>
                                <span className="text-[11px] font-semibold text-purple-700 dark:text-purple-300">
                                  {dayItem.slot2Test.subject} Unit {dayItem.slot2Test.unit}
                                </span>
                              </div>
                              <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                                Test {dayItem.slot2Test.testNumber}: {dayItem.slot2Test.unitTitle}
                              </h5>
                            </div>

                            {dayItem.slot2Test.testmozUrl ? (
                              <a
                                href={dayItem.slot2Test.testmozUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-purple-700 transition-colors shrink-0"
                              >
                                Start <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <span className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500 text-[11px] font-bold shrink-0">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          /* TAB 2: TESTS GRID VIEW (Section 14 & 15) */
          <div className="space-y-6">
            {filteredTests.length === 0 ? (
              <div className="rounded-3xl bg-white dark:bg-slate-900 p-12 text-center border border-slate-200 dark:border-slate-800">
                <HelpCircle className="mx-auto h-12 w-12 text-slate-400 mb-3" />
                <h3 className="font-heading text-lg font-bold text-navy dark:text-white">No tests match your filter criteria</h3>
                <p className="text-xs text-slate-500 mt-1">Try resetting search query or selecting 'All Status'</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setStatusFilter('all')
                    setSubjectFilter('all')
                    setSelectedUnit('all')
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-royal px-4 py-2 text-xs font-bold text-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTests.map((test) => (
                  <div
                    key={test.id}
                    className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      {/* Card Header Tags */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                            test.subject === 'GK'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                              : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                          }`}
                        >
                          {test.subject} • Unit {test.unit}
                        </span>

                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                            test.slot === 'Slot 1'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                          }`}
                        >
                          {test.slot} ({test.startTime})
                        </span>
                      </div>

                      {/* Test Title */}
                      <div>
                        <div className="text-xs font-extrabold text-royal uppercase tracking-wider mb-1">
                          Test #{test.testNumber}
                        </div>
                        <h3 className="font-heading text-lg font-bold text-navy dark:text-white leading-snug">
                          {test.unitTitle}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {test.title}
                        </p>
                      </div>

                      {/* Test Parameters Badge Grid */}
                      <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-slate-100 dark:border-slate-850 text-center">
                        <div>
                          <span className="block text-[10px] text-slate-500 font-medium uppercase">Questions</span>
                          <span className="text-xs font-extrabold text-slate-900 dark:text-white">50 MCQs</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-500 font-medium uppercase">Duration</span>
                          <span className="text-xs font-extrabold text-slate-900 dark:text-white">20 Mins</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-500 font-medium uppercase">Engine</span>
                          <span className="text-xs font-extrabold text-slate-900 dark:text-white">Testmoz</span>
                        </div>
                      </div>

                      {/* Date & Time Info */}
                      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-semibold pt-1">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-royal" />
                          {test.date} ({test.day})
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          {test.startTime} - {test.endTime}
                        </span>
                      </div>
                    </div>

                    {/* Card CTA Footer Button */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                      <div>
                        {test.testmozUrl ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Test Available
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                            <span className="h-2 w-2 rounded-full bg-amber-500" /> Coming Soon
                          </span>
                        )}
                      </div>

                      {test.testmozUrl ? (
                        <a
                          href={test.testmozUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-royal hover:bg-navy px-4 py-2.5 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
                        >
                          START TEST
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
