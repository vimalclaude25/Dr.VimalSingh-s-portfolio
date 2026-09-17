'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Copy,
  Check,
  FileText,
  Filter,
  Layers,
  RefreshCw,
  Search,
  Shield,
  XCircle
} from 'lucide-react'
import type { ActivityLogEntry } from '@/lib/automation-types'

export default function SafeTestLogPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [logs, setLogs] = useState<ActivityLogEntry[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const fetchLogs = useCallback(async () => {
    try {
      setRefreshing(true)
      const res = await fetch('/api/admin/upessc/automation/logs?limit=200')
      if (res.status === 401) {
        router.push('/admin/login')
        return
      }
      if (res.ok) {
        const data = await res.json()
        setLogs(data.logs || [])
      }
    } catch (err) {
      console.error('Error fetching logs:', err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [router])

  useEffect(() => {
    fetchLogs()
    const interval = setInterval(fetchLogs, 15000)
    return () => clearInterval(interval)
  }, [fetchLogs])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const filteredLogs = logs.filter((log) => {
    const matchesStatus = statusFilter === 'all' || log.status === statusFilter
    const matchesSearch =
      search === '' ||
      log.test_id.toLowerCase().includes(search.toLowerCase()) ||
      log.message_type.toLowerCase().includes(search.toLowerCase()) ||
      (log.message_preview && log.message_preview.toLowerCase().includes(search.toLowerCase())) ||
      (log.provider_response && log.provider_response.toLowerCase().includes(search.toLowerCase()))
    return matchesStatus && matchesSearch
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center text-white">
        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mb-4" />
        <p className="text-slate-400 text-sm">Loading Safe Test Mode Activity Log...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/upessc-automation"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              title="Back to Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-white text-base sm:text-lg">Safe Test Mode — Activity Log</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Simulation Log
                </span>
              </div>
              <p className="text-xs text-slate-400">
                All messages processed while TEST MODE is active are captured here without reaching WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLogs}
              disabled={refreshing}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors flex items-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-blue-400' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
        {/* Info Banner */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-xs text-amber-300/90 flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-amber-200">Safe Test Mode Verification</span>
            <p className="text-slate-300">
              When TEST MODE is ON, the automation engine executes all scheduling logic, offsets (30-min reminder, 10-min alert, live, 5-min warning, 11 PM final), and state transitions, but logs the results here instead of dispatching to external channels.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/[0.02] border border-white/10 rounded-2xl p-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-xs text-slate-400 font-semibold mr-1">Filter:</div>
            {(['all', 'published', 'approved', 'failed', 'error'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  statusFilter === st
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by test ID, type..."
              className="pl-8 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
        </div>

        {/* Logs List */}
        {filteredLogs.length > 0 ? (
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5">
            {filteredLogs.map((log) => (
              <div key={log.id} className="p-4 hover:bg-white/[0.01] transition-colors space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        log.status === 'published'
                          ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                          : log.status === 'approved'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : log.status === 'failed' || log.status === 'error'
                          ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}
                    >
                      {log.status}
                    </span>

                    <span className="font-mono text-xs font-semibold text-white">{log.test_id}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-medium text-blue-400">{log.message_type}</span>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {new Date(log.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                  </div>
                </div>

                {log.message_preview && (
                  <div className="bg-black/30 border border-white/5 rounded-xl p-3 text-xs text-slate-300 font-sans whitespace-pre-wrap relative group">
                    {log.message_preview}
                    <button
                      onClick={() => copyToClipboard(log.message_preview, log.id)}
                      className="absolute top-2 right-2 p-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 opacity-80 group-hover:opacity-100 transition-opacity"
                      title="Copy text"
                    >
                      {copiedId === log.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                )}

                {log.provider_response && (
                  <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <span className="text-slate-500">Provider Response:</span>
                    <span className="text-slate-300">{log.provider_response}</span>
                  </div>
                )}

                {log.error && (
                  <div className="text-[11px] text-red-400 font-mono flex items-center gap-1">
                    <span className="text-red-500 font-semibold">Error:</span>
                    <span>{log.error}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-12 text-center space-y-3">
            <FileText className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="text-base font-bold text-white">No Simulation Activity Logged Yet</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              When TEST MODE is enabled on the main dashboard, triggered automation events and published messages will be safely simulated and recorded here.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
