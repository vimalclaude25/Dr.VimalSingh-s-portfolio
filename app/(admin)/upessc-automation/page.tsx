'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Bell,
  CheckCircle,
  Clock,
  ExternalLink,
  Filter,
  Flame,
  Globe,
  Layers,
  Link as LinkIcon,
  LogOut,
  Play,
  RefreshCw,
  Search,
  Send,
  Settings,
  Shield,
  Sparkles,
  XCircle,
  Copy,
  Check,
  Edit3,
  Calendar,
  AlertTriangle,
  ChevronRight,
  BookOpen
} from 'lucide-react'
import type {
  GeneratedMessage,
  MessageStatus,
  MessageType,
  AutomationSettings,
  TestOverride
} from '@/lib/automation-types'
import { MESSAGE_TYPE_LABELS } from '@/lib/automation-types'

interface DashboardStats {
  todaysTestCount: number
  upcomingCount: number
  totalMessagesGenerated: number
  pendingApproval: number
  approved: number
  published: number
  failed: number
  todaysMessages: number
  nextTest: any
  todaysTests: any[]
}

export default function UpesscAutomationDashboard() {
  const router = useRouter()

  // State
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [settings, setSettings] = useState<AutomationSettings | null>(null)
  const [allTests, setAllTests] = useState<any[]>([])
  const [messages, setMessages] = useState<GeneratedMessage[]>([])
  const [messageFilter, setMessageFilter] = useState<string>('all')
  const [activeTab, setActiveTab] = useState<'today' | 'messages' | 'schedule' | 'settings'>('today')

  // Edit Test Modal
  const [editingTest, setEditingTest] = useState<any | null>(null)
  const [editUrl, setEditUrl] = useState('')
  const [editExtendedWindow, setEditExtendedWindow] = useState(false)
  const [editExtendedUntil, setEditExtendedUntil] = useState('00:00')
  const [savingTest, setSavingTest] = useState(false)

  // Edit Message Modal
  const [editingMessage, setEditingMessage] = useState<GeneratedMessage | null>(null)
  const [editMessageText, setEditMessageText] = useState('')
  const [savingMessage, setSavingMessage] = useState(false)

  // Notification toast
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Schedule search
  const [scheduleSearch, setScheduleSearch] = useState('')
  const [scheduleSubjectFilter, setScheduleSubjectFilter] = useState<'all' | 'GK' | 'Education'>('all')

  // Live countdown timer
  const [countdown, setCountdown] = useState<string>('')
  const [nextTestStatus, setNextTestStatus] = useState<string>('')

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ text, type })
    setTimeout(() => setToast(null), 4000)
  }

  // Fetch all dashboard data
  const fetchData = useCallback(async () => {
    try {
      setRefreshing(true)
      const [statsRes, settingsRes, scheduleRes, messagesRes] = await Promise.all([
        fetch('/api/admin/upessc/automation/logs', { method: 'POST' }),
        fetch('/api/admin/upessc/automation/settings'),
        fetch('/api/admin/upessc/automation/schedule'),
        fetch('/api/admin/upessc/automation/messages?limit=200'),
      ])

      if (statsRes.status === 401 || settingsRes.status === 401) {
        router.push('/admin/login')
        return
      }

      if (statsRes.ok) setStats(await statsRes.json())
      if (settingsRes.ok) {
        const data = await settingsRes.json()
        setSettings(data.settings)
      }
      if (scheduleRes.ok) {
        const data = await scheduleRes.json()
        setAllTests(data.tests || [])
      }
      if (messagesRes.ok) {
        const data = await messagesRes.json()
        setMessages(data.messages || [])
      }
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
      showToast('Failed to refresh data', 'error')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [router])

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 30000) // 30s auto-refresh
    return () => clearInterval(interval)
  }, [fetchData])

  // Countdown timer logic
  useEffect(() => {
    if (!stats?.nextTest) {
      setCountdown('No upcoming tests')
      return
    }

    const timer = setInterval(() => {
      const now = new Date()
      const test = stats.nextTest
      const startTime = test.slot === 'Slot 1' ? '19:00:00' : '20:00:00'
      const endTime = test.slot === 'Slot 1' ? '19:30:00' : '20:30:00'
      const start = new Date(`${test.date}T${startTime}`)
      const end = new Date(`${test.date}T${endTime}`)

      if (now < start) {
        const diff = start.getTime() - now.getTime()
        const h = Math.floor(diff / (1000 * 60 * 60))
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const s = Math.floor((diff % (1000 * 60)) / 1000)
        setCountdown(`Starts in ${String(h).padStart(2, '0')}h : ${String(m).padStart(2, '0')}m : ${String(s).padStart(2, '0')}s`)
        setNextTestStatus('upcoming')
      } else if (now >= start && now <= end) {
        setCountdown('TEST LIVE NOW 🔴')
        setNextTestStatus('live')
      } else {
        setCountdown('TEST WINDOW CLOSED')
        setNextTestStatus('closed')
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [stats?.nextTest])

  // Logout handler
  async function handleLogout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  // Update automation setting toggle
  async function handleToggleSetting(key: keyof AutomationSettings, value: any) {
    try {
      const res = await fetch('/api/admin/upessc/automation/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [key]: value }),
      })
      if (res.ok) {
        const data = await res.json()
        setSettings(data.settings)
        showToast(`Updated ${String(key).replace(/_/g, ' ')}`)
      }
    } catch {
      showToast('Failed to update setting', 'error')
    }
  }

  // Trigger Cron process
  async function handleTriggerCron() {
    try {
      showToast('Processing due messages...', 'info')
      const res = await fetch('/api/admin/upessc/automation/cron', { method: 'POST' })
      const data = await res.json()
      if (res.ok) {
        showToast(`Processed: ${data.processed || 0} messages (${data.published || 0} published)`)
        fetchData()
      } else {
        showToast(data.error || 'Cron error', 'error')
      }
    } catch {
      showToast('Failed to trigger cron', 'error')
    }
  }

  // Generate messages for a test
  async function handleGenerateMessages(testId: string) {
    try {
      showToast('Generating AI WhatsApp messages...', 'info')
      const res = await fetch('/api/admin/upessc/automation/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test_id: testId }),
      })
      const data = await res.json()
      if (res.ok) {
        showToast(`Generated ${data.count} scheduled messages!`)
        fetchData()
        setActiveTab('messages')
      } else {
        showToast(data.error || 'Failed to generate', 'error')
      }
    } catch {
      showToast('Error generating messages', 'error')
    }
  }

  // Message Actions (Approve, Reject, Regenerate, Retry, Publish)
  async function handleMessageAction(action: 'approve' | 'reject' | 'regenerate' | 'retry', messageId: string) {
    try {
      const res = await fetch('/api/admin/upessc/automation/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, message_id: messageId }),
      })
      const data = await res.json()
      if (res.ok) {
        showToast(`Message marked as ${action}!`)
        fetchData()
      } else {
        showToast(data.error || `Failed to ${action}`, 'error')
      }
    } catch {
      showToast(`Error performing ${action}`, 'error')
    }
  }

  // Publish message manually
  async function handlePublishMessage(messageId: string) {
    try {
      showToast('Publishing message...', 'info')
      const res = await fetch('/api/admin/upessc/automation/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message_id: messageId }),
      })
      const data = await res.json()
      if (res.ok) {
        showToast(data.mode === 'test' ? 'Published in TEST MODE (Simulated)' : 'Message Published to WhatsApp!')
        fetchData()
      } else {
        showToast(data.error || 'Publish failed', 'error')
      }
    } catch {
      showToast('Error publishing message', 'error')
    }
  }

  // Save edited test
  async function handleSaveTestOverride() {
    if (!editingTest) return
    setSavingTest(true)
    try {
      const res = await fetch('/api/admin/upessc/automation/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          test_id: editingTest.id,
          testmoz_url: editUrl,
          extended_window: editExtendedWindow,
          extended_until: editExtendedUntil,
        }),
      })
      if (res.ok) {
        showToast('Test details updated successfully!')
        setEditingTest(null)
        fetchData()
      } else {
        const data = await res.json()
        showToast(data.error || 'Failed to update test', 'error')
      }
    } catch {
      showToast('Error updating test', 'error')
    } finally {
      setSavingTest(false)
    }
  }

  // Save edited message text
  async function handleSaveEditedMessage() {
    if (!editingMessage) return
    setSavingMessage(true)
    try {
      const res = await fetch('/api/admin/upessc/automation/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'edit',
          message_id: editingMessage.id,
          edited_message: editMessageText,
        }),
      })
      if (res.ok) {
        showToast('Message updated successfully!')
        setEditingMessage(null)
        fetchData()
      } else {
        const data = await res.json()
        showToast(data.error || 'Failed to save edit', 'error')
      }
    } catch {
      showToast('Error saving edited message', 'error')
    } finally {
      setSavingMessage(false)
    }
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
    showToast('Copied message text to clipboard!')
  }

  // Filter messages
  const filteredMessages = messages.filter((m) => {
    if (messageFilter === 'all') return true
    return m.status === messageFilter
  })

  // Filter all 80 tests
  const filteredSchedule = allTests.filter((test) => {
    const matchesSubject = scheduleSubjectFilter === 'all' || test.subject === scheduleSubjectFilter
    const matchesSearch =
      scheduleSearch === '' ||
      test.title.toLowerCase().includes(scheduleSearch.toLowerCase()) ||
      test.unitTitle.toLowerCase().includes(scheduleSearch.toLowerCase()) ||
      test.date.includes(scheduleSearch) ||
      test.id.toLowerCase().includes(scheduleSearch.toLowerCase())
    return matchesSubject && matchesSearch
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center text-white">
        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mb-4" />
        <p className="text-slate-400 text-sm font-medium">Loading UPESSC Test Assistant...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Toast Alert */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border text-sm font-medium transition-all ${
            toast.type === 'error'
              ? 'bg-red-500/20 border-red-500/30 text-red-300'
              : toast.type === 'info'
              ? 'bg-blue-500/20 border-blue-500/30 text-blue-300'
              : 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
          }`}
        >
          {toast.type === 'error' ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
          <span>{toast.text}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-white text-base sm:text-lg tracking-tight">UPESSC Test Assistant</h1>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  v2.0 Automation
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">WhatsApp Channel Scheduler & Announcement Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mode Badge */}
            {settings?.test_mode ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                TEST MODE (SIMULATION)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                PRODUCTION PUBLISHING
              </span>
            )}

            {/* Test Log Link */}
            <Link
              href="/admin/upessc-automation/test-log"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Test Mode</span> Log
            </Link>

            {/* Public Portal Link */}
            <Link
              href="/online-test"
              target="_blank"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Public Portal</span>
            </Link>

            {/* Refresh */}
            <button
              onClick={fetchData}
              disabled={refreshing}
              title="Refresh Data"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-blue-400' : ''}`} />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-1.5 rounded-lg text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Next Test Countdown Banner */}
        {stats?.nextTest && (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/20 p-5 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    NEXT SCHEDULED TEST
                  </span>
                  <span className="text-xs text-slate-400">
                    {stats.nextTest.date} ({stats.nextTest.day}) • {stats.nextTest.slot} ({stats.nextTest.startTime} - {stats.nextTest.endTime})
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span>{stats.nextTest.title}</span>
                </h2>
                <p className="text-xs text-slate-400">
                  50 MCQs • 20 Minutes • Testmoz Engine
                  {stats.nextTest.testmozUrl ? (
                    <span className="ml-2 text-emerald-400 font-medium">✓ Test Link Configured</span>
                  ) : (
                    <span className="ml-2 text-amber-400 font-medium">⚠️ Testmoz Link Pending</span>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-center min-w-[200px]">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Test Status</div>
                  <div
                    className={`font-mono text-base sm:text-lg font-bold ${
                      nextTestStatus === 'live'
                        ? 'text-red-400 animate-pulse'
                        : nextTestStatus === 'closed'
                        ? 'text-slate-400'
                        : 'text-blue-400'
                    }`}
                  >
                    {countdown}
                  </div>
                </div>

                <button
                  onClick={() => handleGenerateMessages(stats.nextTest.id)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Generate Messages
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Today's Tests</div>
            <div className="text-2xl font-bold text-white mt-1">{stats?.todaysTestCount ?? 0}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Dual evening slots</div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Upcoming (7d)</div>
            <div className="text-2xl font-bold text-blue-400 mt-1">{stats?.upcomingCount ?? 0}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Next 7 days</div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Generated</div>
            <div className="text-2xl font-bold text-indigo-400 mt-1">{stats?.totalMessagesGenerated ?? 0}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">AI schedule queue</div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">Pending Approval</div>
            <div className="text-2xl font-bold text-amber-400 mt-1">{stats?.pendingApproval ?? 0}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Requires review</div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">Approved</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{stats?.approved ?? 0}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Ready to publish</div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <div className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">Published</div>
            <div className="text-2xl font-bold text-purple-400 mt-1">{stats?.published ?? 0}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Sent or simulated</div>
          </div>
        </div>

        {/* Master Controls Section */}
        {settings && (
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white text-sm sm:text-base">Master Automation Controls</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleTriggerCron}
                  className="px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5" />
                  Trigger Cron Engine Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Master Switch */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Automation Engine</div>
                  <div className="text-[11px] text-slate-400">Master schedule check</div>
                </div>
                <button
                  onClick={() => handleToggleSetting('automation_enabled', !settings.automation_enabled)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.automation_enabled ? 'bg-blue-600' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      settings.automation_enabled ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Test Mode */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-300">Test Mode (Safe)</div>
                  <div className="text-[11px] text-slate-400">Logs to test-log only</div>
                </div>
                <button
                  onClick={() => handleToggleSetting('test_mode', !settings.test_mode)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.test_mode ? 'bg-amber-500' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      settings.test_mode ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Auto Approval */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Auto Approval</div>
                  <div className="text-[11px] text-slate-400">Skip pending state</div>
                </div>
                <button
                  onClick={() => handleToggleSetting('auto_approval', !settings.auto_approval)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.auto_approval ? 'bg-indigo-600' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      settings.auto_approval ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Fully Automatic Publishing */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-300">Phase 2: Fully Auto</div>
                  <div className="text-[11px] text-slate-400">Publishes on schedule</div>
                </div>
                <button
                  onClick={() => handleToggleSetting('fully_automatic_publishing', !settings.fully_automatic_publishing)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    settings.fully_automatic_publishing ? 'bg-emerald-600' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      settings.fully_automatic_publishing ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-2 sm:gap-4 overflow-x-auto pb-px">
          <button
            onClick={() => setActiveTab('today')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'today'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Today's Tests ({stats?.todaysTestCount || 0})
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'messages'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bell className="w-4 h-4" />
            Message Queue ({messages.length})
            {stats && stats.pendingApproval > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-black font-extrabold">
                {stats.pendingApproval}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'schedule'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            All 80 Tests & Links ({allTests.length})
          </button>
        </div>

        {/* TAB CONTENT: TODAY'S TESTS */}
        {activeTab === 'today' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">Scheduled Tests for Today</h3>
                <p className="text-xs text-slate-400">Generate, review, and schedule announcements for today's slots</p>
              </div>
            </div>

            {stats?.todaysTests && stats.todaysTests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stats.todaysTests.map((test) => {
                  return (
                    <div
                      key={test.id}
                      className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-4 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                            test.slot === 'Slot 1'
                              ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                              : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                          }`}
                        >
                          {test.slot} ({test.startTime} - {test.endTime})
                        </span>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {test.subject} • Unit {test.unit}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white">{test.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          50 Questions • 20 Min Duration • Test #{test.testNumber}
                        </p>
                      </div>

                      {/* Testmoz Link Display */}
                      <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex items-center justify-between gap-2">
                        <div className="truncate flex-1">
                          <div className="text-[10px] text-slate-400 uppercase font-semibold">Testmoz URL</div>
                          {test.testmozUrl ? (
                            <a
                              href={test.testmozUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:underline truncate block font-mono"
                            >
                              {test.testmozUrl}
                            </a>
                          ) : (
                            <span className="text-xs text-amber-400 font-medium">⚠️ No link configured</span>
                          )}
                        </div>
                        <button
                          onClick={() => {
                            setEditingTest(test)
                            setEditUrl(test.testmozUrl || '')
                            setEditExtendedWindow(test.extended_window || false)
                            setEditExtendedUntil(test.extended_until || '00:00')
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-medium transition-colors flex items-center gap-1"
                        >
                          <Edit3 className="w-3 h-3" />
                          Edit
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10">
                        <button
                          onClick={() => handleGenerateMessages(test.id)}
                          className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          Generate Messages
                        </button>

                        <button
                          onClick={() => {
                            setMessageFilter('all')
                            setActiveTab('messages')
                          }}
                          className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold transition-colors"
                        >
                          View Queue
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 text-center space-y-3">
                <Calendar className="w-10 h-10 text-slate-500 mx-auto" />
                <h4 className="text-base font-bold text-white">No Tests Scheduled for Today</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Today may be a revision day or between scheduled dates. Check the master schedule tab to view or prepare for upcoming test dates.
                </p>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold transition-colors inline-flex items-center gap-2"
                >
                  View All 80 Tests Schedule
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB CONTENT: MESSAGE QUEUE */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {(['all', 'pending_approval', 'approved', 'published', 'failed'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setMessageFilter(st)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-colors ${
                      messageFilter === st
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400'
                    }`}
                  >
                    {st.replace(/_/g, ' ')}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-400">
                Showing {filteredMessages.length} of {messages.length} messages
              </div>
            </div>

            {/* Messages Grid */}
            {filteredMessages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-3.5 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {MESSAGE_TYPE_LABELS[msg.message_type] || msg.message_type}
                        </span>

                        {/* Status Badge */}
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            msg.status === 'approved'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : msg.status === 'published'
                              ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                              : msg.status === 'failed'
                              ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}
                        >
                          {msg.status.replace(/_/g, ' ')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>{msg.test_title}</span>
                        <span>{msg.date} • {msg.slot}</span>
                      </div>

                      {/* Formatted Message Bubble */}
                      <div className="relative group bg-black/40 border border-white/5 rounded-xl p-3.5 text-xs text-slate-200 font-sans whitespace-pre-wrap leading-relaxed">
                        {msg.message}

                        <button
                          onClick={() => copyToClipboard(msg.message, msg.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors opacity-80 group-hover:opacity-100"
                          title="Copy message"
                        >
                          {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-1.5">
                        {msg.status === 'pending_approval' && (
                          <button
                            onClick={() => handleMessageAction('approve', msg.id)}
                            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" />
                            Approve
                          </button>
                        )}

                        <button
                          onClick={() => {
                            setEditingMessage(msg)
                            setEditMessageText(msg.message)
                          }}
                          className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-medium transition-colors flex items-center gap-1"
                        >
                          <Edit3 className="w-3 h-3" />
                          Edit
                        </button>

                        <button
                          onClick={() => handleMessageAction('regenerate', msg.id)}
                          className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-medium transition-colors flex items-center gap-1"
                          title="Regenerate Variation"
                        >
                          <RefreshCw className="w-3 h-3" />
                          Vary
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {msg.status !== 'rejected' && msg.status !== 'published' && (
                          <button
                            onClick={() => handleMessageAction('reject', msg.id)}
                            className="px-2.5 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-medium transition-colors"
                          >
                            Reject
                          </button>
                        )}

                        {msg.status === 'approved' && (
                          <button
                            onClick={() => handlePublishMessage(msg.id)}
                            className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-1"
                          >
                            <Send className="w-3 h-3" />
                            Publish Now
                          </button>
                        )}

                        {msg.status === 'failed' && (
                          <button
                            onClick={() => handleMessageAction('retry', msg.id)}
                            className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-colors"
                          >
                            Retry
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 text-center space-y-3">
                <Bell className="w-10 h-10 text-slate-500 mx-auto" />
                <h4 className="text-base font-bold text-white">No Messages Found in this Filter</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Click on "Generate Messages" on any test to automatically craft and schedule all announcement variations.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB CONTENT: ALL 80 TESTS SCHEDULE & LINKS */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">All 80 Tests Schedule & Testmoz Link Manager</h3>
                <p className="text-xs text-slate-400">Single source of truth for tests, Testmoz URLs, and midnight extensions</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
                  {(['all', 'GK', 'Education'] as const).map((subj) => (
                    <button
                      key={subj}
                      onClick={() => setScheduleSubjectFilter(subj)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        scheduleSubjectFilter === subj
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {subj === 'all' ? 'All' : subj}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={scheduleSearch}
                    onChange={(e) => setScheduleSearch(e.target.value)}
                    placeholder="Search unit, title, date..."
                    className="pl-8 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 w-48 sm:w-64"
                  />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.03] border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Test ID / Title</th>
                      <th className="py-3 px-4">Subject & Unit</th>
                      <th className="py-3 px-4">Date & Slot</th>
                      <th className="py-3 px-4">Testmoz URL</th>
                      <th className="py-3 px-4">Auto Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {filteredSchedule.map((test) => (
                      <tr key={test.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-bold text-white">{test.title}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{test.id}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              test.subject === 'GK'
                                ? 'bg-amber-500/10 text-amber-300'
                                : 'bg-purple-500/10 text-purple-300'
                            }`}
                          >
                            {test.subject}
                          </span>
                          <div className="text-[11px] text-slate-400 mt-0.5">{test.unitTitle}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium">{test.date}</div>
                          <div className="text-[11px] text-slate-400">{test.slot} ({test.startTime})</div>
                        </td>
                        <td className="py-3 px-4 max-w-[200px]">
                          {test.testmoz_url ? (
                            <a
                              href={test.testmoz_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline truncate block font-mono text-[11px]"
                            >
                              {test.testmoz_url}
                            </a>
                          ) : (
                            <span className="text-amber-400/80 text-[11px] italic">Not set</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-white/5 text-slate-300 border border-white/10">
                            {test.automation_status || 'scheduled'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right space-x-1.5 whitespace-nowrap">
                          <button
                            onClick={() => {
                              setEditingTest(test)
                              setEditUrl(test.testmoz_url || '')
                              setEditExtendedWindow(test.extended_window || false)
                              setEditExtendedUntil(test.extended_until || '00:00')
                            }}
                            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium transition-colors"
                          >
                            Edit Link
                          </button>
                          <button
                            onClick={() => handleGenerateMessages(test.id)}
                            className="px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-medium transition-colors"
                          >
                            Generate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL: EDIT TEST & TESTMOZ LINK */}
      {editingTest && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1424] border border-white/15 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white">Edit Test & Testmoz URL</h3>
              <button
                onClick={() => setEditingTest(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-400">Test Title</label>
                <div className="text-sm font-bold text-white mt-1">{editingTest.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {editingTest.date} • {editingTest.slot} ({editingTest.startTime} - {editingTest.endTime})
                </div>
              </div>

              <div>
                <label htmlFor="testmoz-url-input" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Testmoz Exam URL
                </label>
                <input
                  id="testmoz-url-input"
                  type="url"
                  value={editUrl}
                  onChange={(e) => setEditUrl(e.target.value)}
                  placeholder="https://testmoz.com/q/XXXXXXX"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs placeholder-slate-500 font-mono focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <p className="text-[11px] text-slate-400 mt-1">Must be a valid testmoz.com link.</p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Midnight Extended Window</div>
                    <div className="text-[11px] text-slate-400">Enable 11 PM and 12 AM reminder announcements</div>
                  </div>
                  <button
                    onClick={() => setEditExtendedWindow(!editExtendedWindow)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${
                      editExtendedWindow ? 'bg-blue-600' : 'bg-slate-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                        editExtendedWindow ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>

                {editExtendedWindow && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Extended Until</label>
                    <input
                      type="text"
                      value={editExtendedUntil}
                      onChange={(e) => setEditExtendedUntil(e.target.value)}
                      placeholder="00:00"
                      className="w-32 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-mono focus:outline-none"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button
                onClick={() => setEditingTest(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTestOverride}
                disabled={savingTest}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold disabled:opacity-50"
              >
                {savingTest ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: EDIT MESSAGE */}
      {editingMessage && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e1424] border border-white/15 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white">Edit Announcement Message</h3>
              <button
                onClick={() => setEditingMessage(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-blue-400">{MESSAGE_TYPE_LABELS[editingMessage.message_type]}</span>
                <span>{editingMessage.test_title}</span>
              </div>

              <textarea
                rows={10}
                value={editMessageText}
                onChange={(e) => setEditMessageText(e.target.value)}
                className="w-full p-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-xs font-sans whitespace-pre-wrap leading-relaxed focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <p className="text-[11px] text-slate-500">
                Note: Editing automatically preserves important test details while refining Hinglish wording.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => setEditingMessage(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEditedMessage}
                disabled={savingMessage}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold disabled:opacity-50"
              >
                {savingMessage ? 'Saving...' : 'Save & Queue for Approval'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
