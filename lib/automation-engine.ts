// ============================================================
// UPESSC Test Assistant — Automation Engine
// Derives message schedule from test-series-data.ts
// Processes due messages via cron endpoint
// ============================================================

import { testSeriesData, getUnitTitle, TESTMOZ_URL_MAP } from './test-series-data'
import type { TestItem } from './test-series-data'
import { generateMessage, type TestContext } from './message-generator'
import { getStore, updateStore } from './automation-store'
import { getWhatsAppProvider, isWhatsAppConfigured } from './whatsapp-provider'
import type { GeneratedMessage, MessageType, ActivityLogEntry } from './automation-types'

// ── Helpers ──────────────────────────────────────────────────

function formatDateDisplay(dateStr: string): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  const [y, m, d] = dateStr.split('-').map(Number)
  return `${d} ${months[m - 1]} ${y}`
}

function parseTimeOnDate(dateStr: string, time24: string): Date {
  // time24 format: "HH:MM"
  const [hours, minutes] = time24.split(':').map(Number)
  const d = new Date(`${dateStr}T00:00:00`)
  d.setHours(hours, minutes, 0, 0)
  return d
}

function toISO(d: Date): string {
  return d.toISOString()
}

function nowISO(): string {
  return new Date().toISOString()
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}

function buildTestContext(test: TestItem, overrideUrl?: string): TestContext {
  return {
    test_id: test.id,
    test_number: test.testNumber,
    subject: test.subject,
    unit: `Unit ${test.unit}`,
    unit_title: test.unitTitle,
    test_title: test.title,
    testmoz_url: overrideUrl || test.testmozUrl || 'https://www.drvimalsingh.in/online-test',
    slot: test.slot,
    date: test.date,
    start_time: test.startTime,
    end_time: test.endTime,
    date_formatted: formatDateDisplay(test.date),
  }
}

// ── Scheduled message offsets per slot ───────────────────────
interface MessageOffset {
  type: MessageType
  minutesBeforeStart: number | null  // null = use absolute time
  absoluteTime?: string  // HH:MM for 11PM/12AM messages
}

function getMessageSchedule(slot: 'Slot 1' | 'Slot 2'): MessageOffset[] {
  // Slot 1: 19:00–19:30 | Slot 2: 20:00–20:30
  const schedule: MessageOffset[] = [
    { type: '30_MIN_REMINDER', minutesBeforeStart: 30 },
    { type: '10_MIN_ALERT', minutesBeforeStart: 10 },
    { type: 'TEST_LIVE', minutesBeforeStart: 0 },
    { type: '5_MIN_WARNING', minutesBeforeStart: -25 },  // 25 min after start = 5 min before end
    { type: 'SLOT_COMPLETE', minutesBeforeStart: -30 },  // 30 min after start = slot end
  ]
  return schedule
}

// ── Generate messages for a single test ─────────────────────
export function generateMessagesForTest(testId: string): GeneratedMessage[] {
  const store = getStore()
  const settings = store.settings

  // Find test
  const test = testSeriesData.find((t) => t.id === testId)
  if (!test) throw new Error(`Test not found: ${testId}`)

  // Get override if exists
  const override = store.overrides.find((o) => o.test_id === testId)
  const effectiveUrl = override?.testmoz_url || test.testmozUrl
  const ctx = buildTestContext(test, effectiveUrl)

  const generated: GeneratedMessage[] = []
  const startHour = test.slot === 'Slot 1' ? 19 : 20  // 7PM or 8PM

  // Generate scheduled messages
  const offsets = getMessageSchedule(test.slot)
  for (const offset of offsets) {
    const idempotencyKey = `${testId}_${offset.type}_${test.date}`

    // Skip if already exists
    if (store.messages.find((m) => m.id === idempotencyKey)) continue

    // Calculate scheduled time
    let scheduledAt: Date
    if (offset.minutesBeforeStart !== null) {
      const startMinutes = offset.minutesBeforeStart >= 0
        ? -offset.minutesBeforeStart  // before start
        : Math.abs(offset.minutesBeforeStart) // after start
      const startDate = parseTimeOnDate(test.date, `${String(startHour).padStart(2, '0')}:00`)
      scheduledAt = new Date(startDate.getTime() + (-offset.minutesBeforeStart) * 60 * 1000)
    } else {
      scheduledAt = parseTimeOnDate(test.date, offset.absoluteTime!)
    }

    const msg = generateMessage(ctx, offset.type)

    const genMsg: GeneratedMessage = {
      id: idempotencyKey,
      test_id: testId,
      test_number: test.testNumber,
      subject: test.subject,
      unit: `Unit ${test.unit}`,
      unit_title: test.unitTitle,
      test_title: test.title,
      testmoz_url: effectiveUrl,
      slot: test.slot,
      date: test.date,
      message_type: offset.type,
      scheduled_at: toISO(scheduledAt),
      message: msg,
      status: settings.auto_approval ? 'approved' : 'pending_approval',
      retries: 0,
      created_at: nowISO(),
      updated_at: nowISO(),
    }
    generated.push(genMsg)
  }

  // 11PM and 12AM messages (if extended window enabled)
  const extWindow = override?.extended_window ?? settings.default_extended_window
  if (extWindow) {
    const extUntil = override?.extended_until || settings.default_extended_until || '00:00'

    const types11pm12am: { type: MessageType; time: string }[] = [
      { type: '11PM_FINAL', time: '23:00' },
      { type: '12AM_CLOSED', time: '00:00' },
    ]

    for (const item of types11pm12am) {
      const idempotencyKey = `${testId}_${item.type}_${test.date}`
      if (store.messages.find((m) => m.id === idempotencyKey)) continue

      // 12AM is next day
      let dateStr = test.date
      if (item.time === '00:00') {
        const d = new Date(`${test.date}T00:00:00`)
        d.setDate(d.getDate() + 1)
        dateStr = d.toISOString().slice(0, 10)
      }

      const scheduledAt = parseTimeOnDate(dateStr, item.time)
      const msg = generateMessage(ctx, item.type, extUntil)

      generated.push({
        id: idempotencyKey,
        test_id: testId,
        test_number: test.testNumber,
        subject: test.subject,
        unit: `Unit ${test.unit}`,
        unit_title: test.unitTitle,
        test_title: test.title,
        testmoz_url: effectiveUrl,
        slot: test.slot,
        date: test.date,
        message_type: item.type,
        scheduled_at: toISO(scheduledAt),
        message: msg,
        status: settings.auto_approval ? 'approved' : 'pending_approval',
        retries: 0,
        created_at: nowISO(),
        updated_at: nowISO(),
      })
    }
  }

  // Save generated messages to store
  updateStore((s) => ({
    ...s,
    messages: [...s.messages, ...generated],
    activity_log: [
      ...s.activity_log,
      ...generated.map((gm): ActivityLogEntry => ({
        id: generateId(),
        timestamp: nowISO(),
        test_id: testId,
        message_type: gm.message_type,
        message_preview: gm.message.slice(0, 100),
        status: 'generated',
      })),
    ],
  }))

  return generated
}

// ── Regenerate a specific message ────────────────────────────
export function regenerateMessage(messageId: string): GeneratedMessage | null {
  const store = getStore()
  const existing = store.messages.find((m) => m.id === messageId)
  if (!existing) return null

  const test = testSeriesData.find((t) => t.id === existing.test_id)
  if (!test) return null

  const override = store.overrides.find((o) => o.test_id === existing.test_id)
  const ctx = buildTestContext(test, override?.testmoz_url)
  const extUntil = override?.extended_until || store.settings.default_extended_until

  const newMsg = generateMessage(ctx, existing.message_type, extUntil)

  updateStore((s) => ({
    ...s,
    messages: s.messages.map((m) =>
      m.id === messageId
        ? { ...m, message: newMsg, status: 'pending_approval', admin_edited: false, updated_at: nowISO() }
        : m
    ),
  }))

  return { ...existing, message: newMsg, status: 'pending_approval' }
}

// ── Process due messages (called by cron) ────────────────────
export async function processDueMessages(): Promise<{ processed: number; published: number; errors: number }> {
  const store = getStore()
  const settings = store.settings

  if (!settings.automation_enabled) {
    return { processed: 0, published: 0, errors: 0 }
  }

  const now = new Date()
  const stats = { processed: 0, published: 0, errors: 0 }

  // Find messages due (scheduled_at <= now) and approved (or auto-publish)
  const dueMsgs = store.messages.filter((m) => {
    const scheduledAt = new Date(m.scheduled_at)
    const isDue = scheduledAt <= now
    const isPublishable = m.status === 'approved' ||
      (settings.fully_automatic_publishing && m.status !== 'rejected' && m.status !== 'published' && m.status !== 'failed')
    return isDue && isPublishable && m.status !== 'published' && m.status !== 'failed' && m.retries < 3
  })

  const provider = getWhatsAppProvider()

  for (const msg of dueMsgs) {
    stats.processed++

    if (settings.test_mode) {
      // Test mode: just log, don't send
      updateStore((s) => ({
        ...s,
        messages: s.messages.map((m) =>
          m.id === msg.id
            ? { ...m, status: 'published', published_at: nowISO(), provider_response: 'TEST_MODE', updated_at: nowISO() }
            : m
        ),
        activity_log: [
          ...s.activity_log,
          {
            id: generateId(),
            timestamp: nowISO(),
            test_id: msg.test_id,
            message_type: msg.message_type,
            message_preview: msg.message.slice(0, 100),
            status: 'published',
            provider_response: '[TEST MODE] Message logged, not sent to WhatsApp',
          },
        ],
      }))
      stats.published++
      continue
    }

    // Real send
    try {
      const result = await provider.sendChannelMessage(msg.message)

      if (result.success) {
        updateStore((s) => ({
          ...s,
          messages: s.messages.map((m) =>
            m.id === msg.id
              ? {
                  ...m,
                  status: 'published',
                  published_at: nowISO(),
                  provider_response: result.messageId || 'sent',
                  updated_at: nowISO(),
                }
              : m
          ),
          activity_log: [
            ...s.activity_log,
            {
              id: generateId(),
              timestamp: nowISO(),
              test_id: msg.test_id,
              message_type: msg.message_type,
              message_preview: msg.message.slice(0, 100),
              status: 'published',
              provider_response: result.messageId,
            },
          ],
        }))
        stats.published++
      } else {
        // Failure — increment retries, set failed if max reached
        updateStore((s) => ({
          ...s,
          messages: s.messages.map((m) =>
            m.id === msg.id
              ? {
                  ...m,
                  retries: m.retries + 1,
                  status: m.retries + 1 >= 3 ? 'failed' : m.status,
                  error: result.error,
                  updated_at: nowISO(),
                }
              : m
          ),
          activity_log: [
            ...s.activity_log,
            {
              id: generateId(),
              timestamp: nowISO(),
              test_id: msg.test_id,
              message_type: msg.message_type,
              message_preview: msg.message.slice(0, 100),
              status: 'failed' as const,
              error: result.error,
            },
          ],
        }))
        stats.errors++
      }
    } catch (err: any) {
      stats.errors++
      updateStore((s) => ({
        ...s,
        messages: s.messages.map((m) =>
          m.id === msg.id
            ? { ...m, retries: m.retries + 1, status: m.retries + 1 >= 3 ? 'failed' : m.status, error: err.message, updated_at: nowISO() }
            : m
        ),
      }))
    }
  }

  // Update last cron run
  updateStore((s) => ({ ...s, last_cron_run: nowISO() }))

  return stats
}

// ── Get today's tests ────────────────────────────────────────
export function getTodaysTests(dateStr?: string): TestItem[] {
  const today = dateStr || new Date().toISOString().slice(0, 10)
  return testSeriesData.filter((t) => t.date === today)
}

// ── Dashboard stats ──────────────────────────────────────────
export function getDashboardStats() {
  const store = getStore()
  const today = new Date().toISOString().slice(0, 10)
  const todaysTests = getTodaysTests(today)
  const allMessages = store.messages
  const todaysMessages = allMessages.filter((m) => m.date === today)

  // Upcoming (next 7 days excluding today)
  const upcoming = testSeriesData.filter((t) => {
    return t.date > today && t.date <= new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10)
  })

  // Next test
  const now = new Date()
  const upcomingByTime = testSeriesData
    .filter((t) => new Date(`${t.date}T${t.slot === 'Slot 1' ? '19:00' : '20:00'}:00`) > now)
    .sort((a, b) => a.date.localeCompare(b.date))
  const nextTest = upcomingByTime[0] || null

  return {
    todaysTestCount: todaysTests.length,
    upcomingCount: upcoming.length,
    totalMessagesGenerated: allMessages.length,
    pendingApproval: allMessages.filter((m) => m.status === 'pending_approval').length,
    approved: allMessages.filter((m) => m.status === 'approved').length,
    published: allMessages.filter((m) => m.status === 'published').length,
    failed: allMessages.filter((m) => m.status === 'failed').length,
    todaysMessages: todaysMessages.length,
    nextTest,
    todaysTests,
  }
}
