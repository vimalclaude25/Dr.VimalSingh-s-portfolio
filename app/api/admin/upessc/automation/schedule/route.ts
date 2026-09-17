import { NextRequest, NextResponse } from 'next/server'
import { testSeriesData } from '@/lib/test-series-data'
import { getStore, updateStore } from '@/lib/automation-store'
import type { TestOverride } from '@/lib/automation-types'

// GET: full schedule with automation status overlaid
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')

  const store = getStore()

  let tests = testSeriesData
  if (date) tests = tests.filter((t) => t.date === date)

  // Overlay override data and automation status
  const enriched = tests.map((test) => {
    const override = store.overrides.find((o) => o.test_id === test.id)
    const messages = store.messages.filter((m) => m.test_id === test.id)

    const pending = messages.filter((m) => m.status === 'pending_approval').length
    const approved = messages.filter((m) => m.status === 'approved').length
    const published = messages.filter((m) => m.status === 'published').length
    const failed = messages.filter((m) => m.status === 'failed').length
    const total = messages.length

    let automation_status: string
    if (total === 0) automation_status = 'scheduled'
    else if (failed > 0) automation_status = 'failed'
    else if (published === total) automation_status = 'published'
    else if (approved > 0 && pending === 0) automation_status = 'approved'
    else if (pending > 0) automation_status = 'pending_approval'
    else automation_status = 'message_ready'

    return {
      ...test,
      testmoz_url: override?.testmoz_url || test.testmozUrl,
      extended_window: override?.extended_window ?? store.settings.default_extended_window,
      extended_until: override?.extended_until ?? store.settings.default_extended_until,
      automation_status,
      message_stats: { total, pending, approved, published, failed },
    }
  })

  return NextResponse.json({ tests: enriched, total: enriched.length })
}

// POST: update testmoz URL or other overrides for a test
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { test_id, testmoz_url, extended_window, extended_until } = body

    if (!test_id) return NextResponse.json({ error: 'test_id is required' }, { status: 400 })

    // Validate testmoz URL format
    if (testmoz_url && testmoz_url !== '') {
      try {
        const url = new URL(testmoz_url)
        if (!url.hostname.includes('testmoz.com')) {
          return NextResponse.json({ error: 'URL must be a valid testmoz.com link' }, { status: 400 })
        }
      } catch {
        return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 })
      }
    }

    const now = new Date().toISOString()
    updateStore((s) => {
      const existingIdx = s.overrides.findIndex((o) => o.test_id === test_id)
      const newOverride: TestOverride = {
        test_id,
        testmoz_url,
        extended_window,
        extended_until,
        updated_at: now,
      }

      if (existingIdx >= 0) {
        const overrides = [...s.overrides]
        overrides[existingIdx] = { ...overrides[existingIdx], ...newOverride }
        return { ...s, overrides }
      } else {
        return { ...s, overrides: [...s.overrides, newOverride] }
      }
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
